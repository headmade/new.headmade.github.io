(() => {
var exports = {};
exports.id = 327;
exports.ids = [327];
exports.modules = {

/***/ 9113:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Areas_wrapper__r__iI",
	"icon": "Areas_icon___duc9",
	"nameBlock": "Areas_nameBlock__TY5Qj",
	"headerArea": "Areas_headerArea__VR9En",
	"angle": "Areas_angle__serrx",
	"tech": "Areas_tech__qxS5P"
};


/***/ }),

/***/ 7555:
/***/ ((module) => {

// Exports
module.exports = {
	"areas": "projects_areas__LygAO",
	"header": "projects_header__KyC5_",
	"triangle": "projects_triangle__RLaew",
	"headerProjects": "projects_headerProjects__Tl3Yx",
	"projects": "projects_projects__FsgQB",
	"logo": "projects_logo__lZv_X",
	"vantacanvas": "projects_vantacanvas__Qrbme",
	"projectName": "projects_projectName__LI1Xr"
};


/***/ }),

/***/ 6118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/back.dd94b735.svg","height":100,"width":100,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 9445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/front.a57c8116.svg","height":100,"width":100,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 5837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/image.8e7a5562.svg","height":100,"width":100,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 7873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/mobile.e95c7571.svg","height":100,"width":100,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Projects_Areas)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/Projects/Areas/Areas.module.scss
var Areas_module = __webpack_require__(9113);
var Areas_module_default = /*#__PURE__*/__webpack_require__.n(Areas_module);
;// CONCATENATED MODULE: ./src/components/Projects/Areas/Areas.tsx




const Areas = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (Areas_module_default()).wrapper,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                className: (Areas_module_default()).icon,
                width: 100,
                height: 100,
                alt: "icon",
                src: props.pic
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (Areas_module_default()).nameBlock,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        className: (Areas_module_default()).headerArea,
                        children: props.name
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        style: {
                            backgroundColor: `${props.lineColor}`
                        },
                        className: (Areas_module_default()).angle
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: (Areas_module_default()).tech,
                children: props.tech
            })
        ]
    });
};
/* harmony default export */ const Areas_Areas = (Areas);

;// CONCATENATED MODULE: ./src/components/Projects/Areas/index.ts

/* harmony default export */ const Projects_Areas = (Areas_Areas);


/***/ }),

/***/ 160:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _projects_module_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7555);
/* harmony import */ var _projects_module_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_projects_module_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_Projects_Areas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(635);
/* harmony import */ var _components_ProjectsScroll_ProjectsScroll_module_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1942);
/* harmony import */ var _components_ProjectsScroll_ProjectsScroll_module_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_components_ProjectsScroll_ProjectsScroll_module_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_responsive_masonry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9242);
/* harmony import */ var react_responsive_masonry__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive_masonry__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1552);
/* harmony import */ var _components_buttons_GhostButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3199);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1665);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9648);
/* harmony import */ var _assets_areas_front_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9445);
/* harmony import */ var _assets_areas_back_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6118);
/* harmony import */ var _assets_areas_mobile_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7873);
/* harmony import */ var _assets_areas_image_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5837);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_9__]);
axios__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


















const Projects = ({ project  })=>{
    // const [elemet, setProjects] = useState<any>([]);
    // const url = process.env.STRAPI_API
    const imgUrl = "http://localhost:1337";
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // const heightRef = useRef(null);
    // const getProjects = () => {
    //   setLoading(true)
    //   axios.get(`${url}/projects/?populate=*`).then((response) => {
    //     setLoading(false);
    //     const elements = response.data.data
    //     setProjects(elements);
    //   }).finally(() => setLoading(false))
    // };
    // useEffect(() => getProjects(), []);
    console.log(project);
    // debugger
    return loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "Загрузка"
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_14___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Проекты"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Row, {
                justify: "center",
                style: {
                    minHeight: "100%"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {
                    xs: 22,
                    lg: 20,
                    style: {
                        minHeight: "100%"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_8___default()), {
                            top: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: (_projects_module_scss__WEBPACK_IMPORTED_MODULE_15___default().header),
                                children: "Наши направления"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_projects_module_scss__WEBPACK_IMPORTED_MODULE_15___default().areas),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_8___default()), {
                                    delay: 0,
                                    left: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Projects_Areas__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        name: "Дизайн",
                                        tech: "UX / UI",
                                        lineColor: "#BE288C",
                                        pic: _assets_areas_image_svg__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_8___default()), {
                                    delay: 200,
                                    left: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Projects_Areas__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        name: "Мобильная разработка",
                                        tech: "iOS / Android / React Native / Windows / Ionic",
                                        lineColor: "#FAD232",
                                        pic: _assets_areas_mobile_svg__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_8___default()), {
                                    delay: 400,
                                    left: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Projects_Areas__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        name: "Frontend",
                                        tech: "React / HTML / CSS3 / ES6 / Saas / Angular / CoffeeScript / Backbone",
                                        lineColor: "#2D91CD",
                                        pic: _assets_areas_front_svg__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_8___default()), {
                                    delay: 600,
                                    left: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Projects_Areas__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        name: "Backend",
                                        tech: "Ruby / Elixir / Node.js / GO / Erlang / C / C++ / MySql / Postgres / MemCache / Redis/ Nats",
                                        lineColor: "#D2DC32",
                                        pic: _assets_areas_back_svg__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    width: "100%"
                },
                className: (_projects_module_scss__WEBPACK_IMPORTED_MODULE_15___default().vantacanvas),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_projects_module_scss__WEBPACK_IMPORTED_MODULE_15___default().triangle)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_projects_module_scss__WEBPACK_IMPORTED_MODULE_15___default().projects),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_8___default()), {
                                bottom: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: (_projects_module_scss__WEBPACK_IMPORTED_MODULE_15___default().headerProjects),
                                    children: "Проекты"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Row, {
                                justify: "center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                    xs: 22,
                                    lg: 16,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_responsive_masonry__WEBPACK_IMPORTED_MODULE_4__.ResponsiveMasonry, {
                                        columnsCountBreakPoints: {
                                            320: 1,
                                            768: 2,
                                            992: 3
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_responsive_masonry__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            gutter: 20,
                                            children: project.map((elem, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                    bottom: true,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Card__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                            top: true,
                                                            bottom: true,
                                                            center: false,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: (_components_ProjectsScroll_ProjectsScroll_module_scss__WEBPACK_IMPORTED_MODULE_16___default().image_wrapper),
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                        className: (_projects_module_scss__WEBPACK_IMPORTED_MODULE_15___default().logo),
                                                                        unoptimized: true,
                                                                        src: `${elem.attributes.logo}`,
                                                                        alt: `${elem.header}`,
                                                                        width: 100,
                                                                        height: 100
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: (_components_ProjectsScroll_ProjectsScroll_module_scss__WEBPACK_IMPORTED_MODULE_16___default().project_header),
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: (_projects_module_scss__WEBPACK_IMPORTED_MODULE_15___default().projectName),
                                                                        children: elem.attributes.name
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: (_components_ProjectsScroll_ProjectsScroll_module_scss__WEBPACK_IMPORTED_MODULE_16___default().project_about),
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        children: elem.attributes.shortDescription
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: (_components_ProjectsScroll_ProjectsScroll_module_scss__WEBPACK_IMPORTED_MODULE_16___default().card_button_wrapper),
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: (_components_ProjectsScroll_ProjectsScroll_module_scss__WEBPACK_IMPORTED_MODULE_16___default().card_button),
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_buttons_GhostButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                                            text: "Подробнее",
                                                                            goto: `/projects/` + elem.id
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }, elem.id)
                                                }, elem.id))
                                        })
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);
async function getStaticProps() {
    const results = await axios__WEBPACK_IMPORTED_MODULE_9__["default"].get(`http://127.0.0.1:1337/api/projects/?populate=*`);
    const res = results.data.data;
    console.log(res);
    return {
        props: {
            project: res
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9242:
/***/ ((module) => {

"use strict";
module.exports = require("react-responsive-masonry");

/***/ }),

/***/ 1665:
/***/ ((module) => {

"use strict";
module.exports = require("react-reveal/Fade");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,636,675,664,740], () => (__webpack_exec__(160)));
module.exports = __webpack_exports__;

})();