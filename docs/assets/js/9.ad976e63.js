(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{213:function(t,s,e){"use strict";e.r(s);var a=e(17),o=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"cors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cors"}},[t._v("#")]),t._v(" CORS "),e("Badge",{attrs:{text:"Since v2.3.0"}})],1),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#introduction"}},[t._v("Introduction")])]),e("li",[e("a",{attrs:{href:"#enabling-cors"}},[t._v("Enabling CORS")])]),e("li",[e("a",{attrs:{href:"#options"}},[t._v("Options")]),e("ul",[e("li",[e("a",{attrs:{href:"#alloworigins"}},[t._v("AllowOrigins")])]),e("li",[e("a",{attrs:{href:"#allowedmethods"}},[t._v("AllowedMethods")])]),e("li",[e("a",{attrs:{href:"#allowedheaders"}},[t._v("AllowedHeaders")])]),e("li",[e("a",{attrs:{href:"#exposedheaders"}},[t._v("ExposedHeaders")])]),e("li",[e("a",{attrs:{href:"#maxage"}},[t._v("MaxAge")])]),e("li",[e("a",{attrs:{href:"#allowcredentials"}},[t._v("AllowCredentials")])]),e("li",[e("a",{attrs:{href:"#optionspassthrough"}},[t._v("OptionsPassthrough")])])])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[t._v('CORS, or "'),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cross-Origin Resource Sharing"),e("OutboundLink")],1),t._v('" is a mechanism that uses additional HTTP headers to tell browsers to give a web application running at one origin, '),e("strong",[t._v("access to selected resources from a different origin")]),t._v(". A web application executes a cross-origin HTTP request when it requests a resource that has a different origin (domain, protocol, or port) from its own. Enabling CORS is done by adding a set of specific headers allowing the browser and server to communicate about which requests, methods and headers are or are not allowed. CORS support also comes with "),e("strong",[t._v("pre-flight")]),t._v(" "),e("code",[t._v("OPTIONS")]),t._v(" requests support.")]),t._v(" "),e("p",[t._v("Most of the time, the API is using another domain as the clients. For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. That's why you should configure CORS for your API.")]),t._v(" "),e("h2",{attrs:{id:"enabling-cors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#enabling-cors"}},[t._v("#")]),t._v(" Enabling CORS")]),t._v(" "),e("p",[t._v("All functions below require the "),e("code",[t._v("cors")]),t._v(" package to be imported.")]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/System-Glitch/goyave/v2/cors"')]),t._v("\n")])])]),e("p",[t._v("CORS options are set on "),e("strong",[t._v("routers")]),t._v(". If the passed options are not "),e("code",[t._v("nil")]),t._v(", the CORS core middleware is automatically added.")]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[t._v("router"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("CORS")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cors"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Default")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("CORS options should be defined "),e("strong",[t._v("before middleware and route definition")]),t._v(". All of this router's sub-routers "),e("strong",[t._v("inherit")]),t._v(" CORS options by default. If you want to remove the options from a sub-router, or use different ones, simply create another "),e("code",[t._v("cors.Options")]),t._v(" object and assign it.")]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[t._v("router"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("CORS")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cors"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Default")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nsubrouter "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" router"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Subrouter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/products"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsubrouter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("CORS")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Remove CORS options")]),t._v("\n\noptions "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" cors"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Default")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\noptions"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AllowCredentials "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\nsubrouter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("CORS")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Different CORS options")]),t._v("\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("All routes defined in a router having CORS options will match the "),e("code",[t._v("OPTIONS")]),t._v(" HTTP method to allow "),e("strong",[t._v("pre-flight")]),t._v(" requests, even if it's not explicitly told in the route definition.")])]),t._v(" "),e("h2",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),e("p",[e("code",[t._v("cors.Default()")]),t._v(" can be used as a starting point for custom configuration.")]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[t._v("options "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" cors"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Default")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\noptions"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AllowedOrigins "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://google.com"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://images.google.com"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nrouter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("CORS")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Find the options reference below:")]),t._v(" "),e("h3",{attrs:{id:"alloworigins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#alloworigins"}},[t._v("#")]),t._v(" AllowOrigins")]),t._v(" "),e("p",[t._v("A list of origins a cross-domain request can be executed from. If the first value in the slice is "),e("code",[t._v("*")]),t._v(" or if the slice is empty, all origins will be allowed.")]),t._v(" "),e("p",[e("strong",[t._v("Type:")]),t._v(" "),e("code",[t._v("[]string")]),t._v(" "),e("strong",[t._v("Default:")]),t._v(" "),e("code",[t._v('["*"]')])]),t._v(" "),e("h3",{attrs:{id:"allowedmethods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#allowedmethods"}},[t._v("#")]),t._v(" AllowedMethods")]),t._v(" "),e("p",[t._v("A list of methods the client is allowed to use with cross-domain requests.")]),t._v(" "),e("p",[e("strong",[t._v("Type:")]),t._v(" "),e("code",[t._v("[]string")]),t._v(" "),e("strong",[t._v("Default:")]),t._v(" "),e("code",[t._v('["HEAD", "GET", "POST", "PUT", "PATCH", "DELETE"]')])]),t._v(" "),e("h3",{attrs:{id:"allowedheaders"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#allowedheaders"}},[t._v("#")]),t._v(" AllowedHeaders")]),t._v(" "),e("p",[t._v("A list of non simple headers the client is allowed to use with cross-domain requests. If the first value in the slice is "),e("code",[t._v("*")]),t._v(", all headers will be allowed. If the slice is empty, the request's headers will be reflected.")]),t._v(" "),e("p",[e("strong",[t._v("Type:")]),t._v(" "),e("code",[t._v("[]string")]),t._v(" "),e("strong",[t._v("Default:")]),t._v(" "),e("code",[t._v('["Origin", "Accept", "Content-Type", "X-Requested-With", "Authorization"]')])]),t._v(" "),e("h3",{attrs:{id:"exposedheaders"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exposedheaders"}},[t._v("#")]),t._v(" ExposedHeaders")]),t._v(" "),e("p",[t._v("Indicates which headers are safe to expose to the API of a CORS API specification.")]),t._v(" "),e("p",[e("strong",[t._v("Type:")]),t._v(" "),e("code",[t._v("[]string")]),t._v(" "),e("strong",[t._v("Default:")]),t._v(" "),e("code",[t._v("[]")])]),t._v(" "),e("h3",{attrs:{id:"maxage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maxage"}},[t._v("#")]),t._v(" MaxAge")]),t._v(" "),e("p",[t._v("Indicates how long the results of a preflight request can be cached.")]),t._v(" "),e("p",[e("strong",[t._v("Type:")]),t._v(" "),e("code",[t._v("time.Duration")]),t._v(" "),e("strong",[t._v("Default:")]),t._v(" "),e("code",[t._v("12 hours (43200 seconds)")])]),t._v(" "),e("h3",{attrs:{id:"allowcredentials"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#allowcredentials"}},[t._v("#")]),t._v(" AllowCredentials")]),t._v(" "),e("p",[t._v("Indicates whether the request can include user credentials like cookies, HTTP authentication or client side SSL certificates.")]),t._v(" "),e("p",[e("strong",[t._v("Type:")]),t._v(" "),e("code",[t._v("bool")]),t._v(" "),e("strong",[t._v("Default:")]),t._v(" "),e("code",[t._v("false")])]),t._v(" "),e("h3",{attrs:{id:"optionspassthrough"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#optionspassthrough"}},[t._v("#")]),t._v(" OptionsPassthrough")]),t._v(" "),e("p",[t._v("Instructs "),e("strong",[t._v("pre-flight")]),t._v(" to let other potential next handlers to process the "),e("code",[t._v("OPTIONS")]),t._v(" method. Turn this on if your application handles "),e("code",[t._v("OPTIONS")]),t._v(".")]),t._v(" "),e("p",[e("strong",[t._v("Type:")]),t._v(" "),e("code",[t._v("bool")]),t._v(" "),e("strong",[t._v("Default:")]),t._v(" "),e("code",[t._v("false")])])])}),[],!1,null,null,null);s.default=o.exports}}]);