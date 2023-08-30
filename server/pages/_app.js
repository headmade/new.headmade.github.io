(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4970:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__futuris_06a0a8', '__futuris_Fallback_06a0a8'"},
	"className": "__className_06a0a8"
};


/***/ }),

/***/ 89:
/***/ ((module) => {

// Exports
module.exports = {
	"link": "Footer_link__Eo6xs",
	"wrapper": "Footer_wrapper__fRar6",
	"component": "Footer_component__F3Hmh",
	"image_wrapper": "Footer_image_wrapper__U8yBA",
	"subheaders": "Footer_subheaders__WCVOD",
	"copyright": "Footer_copyright__waMAS",
	"linksWrapper": "Footer_linksWrapper__nbk0R"
};


/***/ }),

/***/ 3755:
/***/ ((module) => {

// Exports
module.exports = {
	"image_wrapper": "Header_image_wrapper__ttiQZ",
	"header": "Header_header__NLhag",
	"subheaders": "Header_subheaders__RXD3T",
	"subheaders_desktop": "Header_subheaders_desktop__V6zT2",
	"hamburger": "Header_hamburger___eZbd",
	"listDesktop": "Header_listDesktop__iC2lK"
};


/***/ }),

/***/ 7287:
/***/ ((module) => {

// Exports
module.exports = {
	"elements": "Links_elements__8B0qs",
	"link": "Links_link__CiVIr"
};


/***/ }),

/***/ 2355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/font/local/target.css?{"path":"src/pages/_app.tsx","import":"","arguments":[{"src":"../fonts/Futuris/futuris.woff2","display":"swap"}],"variableName":"futuris"}
var futuris_woff2_display_swap_variableName_futuris_ = __webpack_require__(4970);
var futuris_woff2_display_swap_variableName_futuris_default = /*#__PURE__*/__webpack_require__.n(futuris_woff2_display_swap_variableName_futuris_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
;// CONCATENATED MODULE: external "hamburger-react"
const external_hamburger_react_namespaceObject = require("hamburger-react");
var external_hamburger_react_default = /*#__PURE__*/__webpack_require__.n(external_hamburger_react_namespaceObject);
// EXTERNAL MODULE: ./src/components/Header/Header.module.scss
var Header_module = __webpack_require__(3755);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./src/assets/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.0cafa721.svg","height":30,"width":200,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./src/components/Links/Links.module.scss
var Links_module = __webpack_require__(7287);
var Links_module_default = /*#__PURE__*/__webpack_require__.n(Links_module);
;// CONCATENATED MODULE: ./src/components/Links/Links.tsx




const Links = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
        className: (Links_module_default()).elements,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("li", {
                className: (Links_module_default()).element,
                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    href: "/projects",
                    className: (Links_module_default()).link,
                    children: "Проекты"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("li", {
                className: (Links_module_default()).element,
                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    href: "/about",
                    className: (Links_module_default()).link,
                    children: "О нас"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("li", {
                className: (Links_module_default()).element,
                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    href: "/contacts",
                    className: (Links_module_default()).link,
                    children: "Контакты"
                })
            })
        ]
    });
};
/* harmony default export */ const Links_Links = (Links);

;// CONCATENATED MODULE: ./src/components/Links/index.ts

/* harmony default export */ const components_Links = (Links_Links);

;// CONCATENATED MODULE: ./src/components/Header/Header.tsx










const Header = ()=>{
    const [isMobile, setIsMobile] = (0,external_react_.useState)();
    const [isOpen, setIsOpen] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setUserDevice();
    }, []);
    const setUserDevice = ()=>{
        if (false) {}
    };
    setUserDevice();
    function toggleMenu() {
        setIsOpen(!isOpen);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (Header_module_default()).component_wrapper,
                children: /*#__PURE__*/ jsx_runtime.jsx(external_antd_.Row, {
                    justify: "center",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_antd_.Col, {
                        flex: "1210px",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                style: {
                                    zIndex: "3",
                                    backgroundColor: "white",
                                    position: "absolute",
                                    height: "100px",
                                    width: "100%"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(external_antd_.Row, {
                                justify: "center",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_antd_.Col, {
                                    flex: "1210px",
                                    xs: 22,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: (Header_module_default()).header,
                                            style: {
                                                zIndex: "99"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: (Header_module_default()).image_wrapper,
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                            src: logo,
                                                            alt: "logo",
                                                            fill: true
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: (Header_module_default()).hamburger,
                                                    style: {
                                                        zIndex: 99
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((external_hamburger_react_default()), {
                                                        size: 28,
                                                        toggled: isOpen,
                                                        toggle: toggleMenu
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: (Header_module_default()).listDesktop,
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(components_Links, {})
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(external_antd_.Drawer, {
                                            placement: "top",
                                            open: isOpen,
                                            onClose: toggleMenu,
                                            closable: false,
                                            zIndex: 98,
                                            height: 320,
                                            children: /*#__PURE__*/ jsx_runtime.jsx(components_Links, {})
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (Header_module_default()).component_wrapper
            })
        ]
    });
};
/* harmony default export */ const Header_Header = (Header);

;// CONCATENATED MODULE: ./src/components/Header/index.ts

/* harmony default export */ const components_Header = (Header_Header);

// EXTERNAL MODULE: ./src/components/Footer/Footer.module.scss
var Footer_module = __webpack_require__(89);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./src/components/Footer/Footer.tsx







const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: (Footer_module_default()).wrapper,
            children: /*#__PURE__*/ jsx_runtime.jsx(external_antd_.Row, {
                justify: "center",
                children: /*#__PURE__*/ jsx_runtime.jsx(external_antd_.Col, {
                    flex: "1210px",
                    xs: 22,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (Footer_module_default()).component,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: (Footer_module_default()).linksWrapper,
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: (Footer_module_default()).image_wrapper,
                                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                src: logo,
                                                alt: "logo",
                                                fill: true
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: (Footer_module_default()).subheaders,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "#",
                                                className: (Footer_module_default()).link,
                                                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    children: "Проекты"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "#",
                                                className: (Footer_module_default()).link,
                                                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    children: "О нас"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "#",
                                                className: (Footer_module_default()).link,
                                                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    children: "Контакты"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: (Footer_module_default()).copyright,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                    children: [
                                        "Copyright \xa9 2012 - ",
                                        new Date().getFullYear()
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const Footer_Footer = (Footer);

;// CONCATENATED MODULE: ./src/components/Footer/index.ts

/* harmony default export */ const components_Footer = (Footer_Footer);

;// CONCATENATED MODULE: ./src/components/Layout/Layout.tsx




const Layout = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        style: {
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column"
        },
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(components_Header, {}),
            props.children,
            /*#__PURE__*/ jsx_runtime.jsx(components_Footer, {})
        ]
    });
};
/* harmony default export */ const Layout_Layout = (Layout);

;// CONCATENATED MODULE: ./src/components/Layout/index.ts

/* harmony default export */ const components_Layout = (Layout_Layout);

// EXTERNAL MODULE: ./src/styles/globals.scss
var globals = __webpack_require__(6961);
;// CONCATENATED MODULE: ./src/pages/_app.tsx





function App({ Component , pageProps  }) {
    (0,external_react_.useEffect)(()=>{
        const threeScript = document.createElement("script");
        threeScript.setAttribute("id", "threeScript");
        threeScript.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js");
        threeScript.setAttribute("src", "three.min.js");
        return ()=>{
            if (threeScript) {
                threeScript.remove;
            }
        };
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: (futuris_woff2_display_swap_variableName_futuris_default()).className,
        children: /*#__PURE__*/ jsx_runtime.jsx(components_Layout, {
            children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            })
        })
    });
}


/***/ }),

/***/ 6961:
/***/ (() => {



/***/ }),

/***/ 5725:
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,636,675,664], () => (__webpack_exec__(2355)));
module.exports = __webpack_exports__;

})();