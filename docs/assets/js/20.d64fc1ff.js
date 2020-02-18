(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{222:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"responses"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#responses"}},[t._v("#")]),t._v(" Responses")]),t._v(" "),s("p",[t._v("Handlers receive a "),s("code",[t._v("goyave.Response")]),t._v(" and a "),s("code",[t._v("goyave.Request")]),t._v(" as parameters. This section is a technical reference of the "),s("code",[t._v("Response")]),t._v(" object.")]),t._v(" "),s("p",[s("code",[t._v("goyave.Response")]),t._v(" implements "),s("code",[t._v("http.ResponseWriter")]),t._v(". This object brings a number of convenient methods to write HTTP responses.")]),t._v(" "),s("p",[t._v("If you didn't write anything before the request lifecycle ends, "),s("code",[t._v("204 No Content")]),t._v(" is automatically written.")]),t._v(" "),s("p",[t._v("All functions below require the "),s("code",[t._v("goyave")]),t._v(" package to be imported.")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/System-Glitch/goyave/v2"')]),t._v("\n")])])]),s("p",[s("strong",[t._v("List of response methods")]),t._v(":")]),t._v(" "),s("div",{staticClass:"table"},[s("p",[s("a",{attrs:{href:"#response-getstatus"}},[t._v("GetStatus")]),t._v(" "),s("a",{attrs:{href:"#response-geterror"}},[t._v("GetError")]),t._v(" "),s("a",{attrs:{href:"#response-header"}},[t._v("Header")]),t._v(" "),s("a",{attrs:{href:"#response-status"}},[t._v("Status")]),t._v(" "),s("a",{attrs:{href:"#response-json"}},[t._v("JSON")]),t._v(" "),s("a",{attrs:{href:"#response-string"}},[t._v("String")]),t._v(" "),s("a",{attrs:{href:"#response-write"}},[t._v("Write")]),t._v(" "),s("a",{attrs:{href:"#response-file"}},[t._v("File")]),t._v(" "),s("a",{attrs:{href:"#response-download"}},[t._v("Download")]),t._v(" "),s("a",{attrs:{href:"#response-error"}},[t._v("Error")]),t._v(" "),s("a",{attrs:{href:"#response-cookie"}},[t._v("Cookie")]),t._v(" "),s("a",{attrs:{href:"#response-redirect"}},[t._v("Redirect")]),t._v(" "),s("a",{attrs:{href:"#response-temporaryredirect"}},[t._v("TemporaryRedirect")]),t._v(" "),s("a",{attrs:{href:"#response-render"}},[t._v("Render")]),t._v(" "),s("a",{attrs:{href:"#response-renderhtml"}},[t._v("RenderHTML")]),t._v(" "),s("a",{attrs:{href:"#response-handledatabaseerror"}},[t._v("HandleDatabaseError")])])]),s("h4",{attrs:{id:"response-getstatus"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-getstatus"}},[t._v("#")]),t._v(" Response.GetStatus")]),t._v(" "),s("p",[t._v("Returns the response code for this request or "),s("code",[t._v("0")]),t._v(" if not yet set.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameters")]),t._v(" "),s("th",[t._v("Return")])])]),t._v(" "),s("tbody",[s("tr",[s("td"),t._v(" "),s("td",[s("code",[t._v("int")])])])])]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetStatus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 200")]),t._v("\n")])])]),s("h4",{attrs:{id:"response-geterror"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-geterror"}},[t._v("#")]),t._v(" Response.GetError")]),t._v(" "),s("p",[t._v("Returns the value which caused a panic in the request's handling, or "),s("code",[t._v("nil")]),t._v(". The response error is also set when "),s("a",{attrs:{href:"#response-error"}},[s("code",[t._v("Error()")])]),t._v(" is called.")]),t._v(" "),s("p",[t._v("This method is mainly used in "),s("RouterLink",{attrs:{to:"/guide/advanced/status-handlers.html"}},[t._v("status handlers")]),t._v(".")],1),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameters")]),t._v(" "),s("th",[t._v("Return")])])]),t._v(" "),s("tbody",[s("tr",[s("td"),t._v(" "),s("td",[s("code",[t._v("interface{}")])])])])]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetError")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "panic: something wrong happened"')]),t._v("\n")])])]),s("h4",{attrs:{id:"response-header"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-header"}},[t._v("#")]),t._v(" Response.Header")]),t._v(" "),s("p",[t._v("Returns the Header map that will be sent.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameters")]),t._v(" "),s("th",[t._v("Return")])])]),t._v(" "),s("tbody",[s("tr",[s("td"),t._v(" "),s("td",[s("code",[t._v("http.Header")])])])])]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("header "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Header")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nheader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/json"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"response-status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-status"}},[t._v("#")]),t._v(" Response.Status")]),t._v(" "),s("p",[t._v("Write the given status code. Calling this method a second time will have no effect.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameters")]),t._v(" "),s("th",[t._v("Return")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("status int")])]),t._v(" "),s("td",[s("code",[t._v("void")])])])])]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Status")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StatusOK"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"response-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-json"}},[t._v("#")]),t._v(" Response.JSON")]),t._v(" "),s("p",[t._v("Write JSON data as a response. This method automatically sets the "),s("code",[t._v("Content-Type")]),t._v(" header.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameters")]),t._v(" "),s("th",[t._v("Return")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("responseCode int")])]),t._v(" "),s("td",[s("code",[t._v("error")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("data interface{}")])]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StatusOK"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"John Doe"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tags"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tag1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tag2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"response-string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-string"}},[t._v("#")]),t._v(" Response.String")]),t._v(" "),s("p",[t._v("Write a string as a response.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameters")]),t._v(" "),s("th",[t._v("Return")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("responseCode int")])]),t._v(" "),s("td",[s("code",[t._v("error")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("message string")])]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StatusOK"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello there!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"response-write"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-write"}},[t._v("#")]),t._v(" Response.Write")]),t._v(" "),s("p",[t._v("Write the data as a response. Can be used to write in-memory files. This method can be called successively.")]),t._v(" "),s("p",[t._v("Returns the number of bytes written.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameters")]),t._v(" "),s("th",[t._v("Return")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("data []byte")])]),t._v(" "),s("td",[s("code",[t._v("int")])])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[s("code",[t._v("error")])])])])]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello there!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"response-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-file"}},[t._v("#")]),t._v(" Response.File")]),t._v(" "),s("p",[t._v("Write a file as an inline element.")]),t._v(" "),s("p",[t._v('Automatically detects the file MIME type and sets the "Content-Type" header accordingly. It is advised to call '),s("code",[t._v("filesystem.FileExists()")]),t._v(" before sending a file to avoid a panic and return a 404 error. The given path can be relative or absolute.")]),t._v(" "),s("p",[t._v('If you want the file to be sent as a download ("Content-Disposition: attachment"), use the "Download" function instead.')]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameters")]),t._v(" "),s("th",[t._v("Return")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("file string")])]),t._v(" "),s("td",[s("code",[t._v("error")])])])])]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("File")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/file"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"response-download"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-download"}},[t._v("#")]),t._v(" Response.Download")]),t._v(" "),s("p",[t._v("Write a file as an attachment element.")]),t._v(" "),s("p",[t._v('Automatically detects the file MIME type and sets the "Content-Type" header accordingly. It is advised to call '),s("code",[t._v("filesystem.FileExists()")]),t._v(" before sending a file to avoid a panic and return a 404 error if the file doesn't exist. The given path can be relative or absolute.")]),t._v(" "),s("p",[t._v('If you want the file to be sent as a download ("Content-Disposition: attachment"), use the "Download" function instead.')]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameters")]),t._v(" "),s("th",[t._v("Return")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("file string")])]),t._v(" "),s("td",[s("code",[t._v("error")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("fileName string")])]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Download")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/file"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"awesome.txt"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"response-error"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-error"}},[t._v("#")]),t._v(" Response.Error")]),t._v(" "),s("p",[t._v("Print the error in the console and return it with an error code "),s("code",[t._v("500")]),t._v(".")]),t._v(" "),s("p",[t._v("If debugging is enabled in the config, the error is also written in the response using the JSON format, and the stacktrace is printed in the console. If debugging is not enabled, only the stauts code is set, which means you can still write to the response, or use your error "),s("RouterLink",{attrs:{to:"/guide/advanced/status-handlers.html"}},[t._v("status handler")]),t._v(".")],1),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameters")]),t._v(" "),s("th",[t._v("Return")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("err interface{}")])]),t._v(" "),s("td",[s("code",[t._v("error")])])])])]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" strconv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Atoi")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-42"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nresponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"response-cookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-cookie"}},[t._v("#")]),t._v(" Response.Cookie")]),t._v(" "),s("p",[t._v("Add a Set-Cookie header to the response. The provided cookie must have a valid Name. Invalid cookies may be silently dropped.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameters")]),t._v(" "),s("th",[t._v("Return")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("cookie *http.Cookie*")])]),t._v(" "),s("td",[s("code",[t._v("void")])])])])]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("cookie "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Cookie"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cookie-name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nresponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Cookie")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cookie"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Protect yourself from "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Cross-site_request_forgery",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSRF attacks"),s("OutboundLink")],1),t._v(" when using cookies!")])]),t._v(" "),s("h4",{attrs:{id:"response-redirect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-redirect"}},[t._v("#")]),t._v(" Response.Redirect")]),t._v(" "),s("p",[t._v("Send a permanent redirect response. (HTTP 308)")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameters")]),t._v(" "),s("th",[t._v("Return")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("url string")])]),t._v(" "),s("td",[s("code",[t._v("void")])])])])]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Redirect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/login"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"response-temporaryredirect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-temporaryredirect"}},[t._v("#")]),t._v(" Response.TemporaryRedirect")]),t._v(" "),s("p",[t._v("Send a temporary redirect response. (HTTP 307)")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameters")]),t._v(" "),s("th",[t._v("Return")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("url string")])]),t._v(" "),s("td",[s("code",[t._v("void")])])])])]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("TemporaryRedirect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/maintenance"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"response-render"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-render"}},[t._v("#")]),t._v(" Response.Render")]),t._v(" "),s("p",[t._v("Render a text template with the given data. This method uses the "),s("a",{attrs:{href:"https://golang.org/pkg/text/template/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Go's template API"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("The template path is relative to the "),s("code",[t._v("resources/template")]),t._v(" directory.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameters")]),t._v(" "),s("th",[t._v("Return")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("responseCode int")])]),t._v(" "),s("td",[s("code",[t._v("error")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("templatePath string")])]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("code",[t._v("data interface{}")])]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Inventory "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tMaterial "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n\tCount    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nsweaters "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" Inventory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wool"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// data can also be a map[string]interface{}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Here, "resources/template/template.txt" will be used.')]),t._v("\nresponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StatusOK"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"template.txt"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sweaters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"response-renderhtml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-renderhtml"}},[t._v("#")]),t._v(" Response.RenderHTML")]),t._v(" "),s("p",[t._v("Render an HTML template with the given data. This method uses the "),s("a",{attrs:{href:"https://golang.org/pkg/html/template/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Go's template API"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("The template path is relative to the "),s("code",[t._v("resources/template")]),t._v(" directory.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameters")]),t._v(" "),s("th",[t._v("Return")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("responseCode int")])]),t._v(" "),s("td",[s("code",[t._v("error")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("templatePath string")])]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("code",[t._v("data interface{}")])]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Inventory "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tMaterial "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n\tCount    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nsweaters "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" Inventory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wool"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// data can also be a map[string]interface{}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Here, "resources/template/inventory.html" will be used.')]),t._v("\nresponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RenderHTML")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StatusOK"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"inventory.html"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sweaters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"response-handledatabaseerror"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-handledatabaseerror"}},[t._v("#")]),t._v(" Response.HandleDatabaseError")]),t._v(" "),s("p",[t._v("Takes a database query result and checks if any error has occurred.")]),t._v(" "),s("p",[t._v('Automatically writes HTTP status code 404 Not Found if the error is a "Not found" error. Calls '),s("code",[t._v("Response.Error()")]),t._v(" if there is another type of error.")]),t._v(" "),s("p",[t._v("Returns "),s("code",[t._v("true")]),t._v(" if there is no error.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameters")]),t._v(" "),s("th",[t._v("Return")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("db *gorm.DB")])]),t._v(" "),s("td",[s("code",[t._v("bool")])])])])]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("product "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Product"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nresult "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" database"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetConnection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("First")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("product"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("HandleDatabaseError")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StatusOK"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" product"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);