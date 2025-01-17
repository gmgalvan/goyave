package auth

import (
	"errors"
	"fmt"
	"reflect"

	"github.com/System-Glitch/goyave/v3"
	"github.com/System-Glitch/goyave/v3/config"
	"github.com/System-Glitch/goyave/v3/database"
	"github.com/System-Glitch/goyave/v3/lang"
	"github.com/dgrijalva/jwt-go"
	"gorm.io/gorm"
)

// JWTAuthenticator implementation of Authenticator using a JSON Web Token.
type JWTAuthenticator struct{}

var _ Authenticator = (*JWTAuthenticator)(nil) // implements Authenticator

func init() {
	config.Register("auth.jwt.secret", config.Entry{
		Value:            nil,
		Type:             reflect.String,
		IsSlice:          false,
		AuthorizedValues: []interface{}{},
	})
	config.Register("auth.jwt.expiry", config.Entry{
		Value:            300,
		Type:             reflect.Int,
		IsSlice:          false,
		AuthorizedValues: []interface{}{},
	})
}

// Authenticate fetch the user corresponding to the token
// found in the given request and puts the result in the given user pointer.
// If no user can be authenticated, returns an error.
//
// The database request is executed based on the model name and the
// struct tag `auth:"username"`.
//
// This implementation is a JWT-based authentication using HMAC SHA256, supporting only one active token.
func (a *JWTAuthenticator) Authenticate(request *goyave.Request, user interface{}) error {

	tokenString, ok := request.BearerToken()
	if tokenString == "" || !ok {
		return fmt.Errorf(lang.Get(request.Lang, "auth.no-credentials-provided"))
	}

	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}

		return []byte(config.GetString("auth.jwt.secret")), nil
	})

	if err == nil && token.Valid {
		if claims, ok := token.Claims.(jwt.MapClaims); ok {
			column := FindColumns(user, "username")[0]
			result := database.GetConnection().Where(column.Name+" = ?", claims["userid"]).First(user)

			if result.Error != nil {
				if errors.Is(result.Error, gorm.ErrRecordNotFound) {
					return fmt.Errorf(lang.Get(request.Lang, "auth.invalid-credentials"))
				}
				panic(result.Error)
			}

			return nil
		}
	}

	return a.makeError(request.Lang, err.(*jwt.ValidationError).Errors)
}

func (a *JWTAuthenticator) makeError(language string, bitfield uint32) error {
	if bitfield&jwt.ValidationErrorNotValidYet != 0 {
		return fmt.Errorf(lang.Get(language, "auth.jwt-not-valid-yet"))
	} else if bitfield&jwt.ValidationErrorExpired != 0 {
		return fmt.Errorf(lang.Get(language, "auth.jwt-expired"))
	}
	return fmt.Errorf(lang.Get(language, "auth.jwt-invalid"))
}
