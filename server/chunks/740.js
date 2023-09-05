exports.id = 740;
exports.ids = [740];
exports.modules = {

/***/ 9752:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Card_wrapper__Q0QoG",
	"top_angle": "Card_top_angle__bZMmp",
	"center": "Card_center__bcqUa",
	"left": "Card_left__QyEct",
	"bottom_angle": "Card_bottom_angle__uvkPZ",
	"big_wrapper": "Card_big_wrapper__j58Rq",
	"right": "Card_right__cPG6O"
};


/***/ }),

/***/ 1942:
/***/ ((module) => {

// Exports
module.exports = {
	"component": "ProjectsScroll_component__iin_n",
	"header": "ProjectsScroll_header__XC8ZB",
	"scroll": "ProjectsScroll_scroll__wqLlt",
	"project": "ProjectsScroll_project__rHYab",
	"image_wrapper": "ProjectsScroll_image_wrapper__Gai9T",
	"project_header": "ProjectsScroll_project_header__H1YGA",
	"project_about": "ProjectsScroll_project_about__N8In2",
	"card_button_wrapper": "ProjectsScroll_card_button_wrapper__o_wHy",
	"card_button": "ProjectsScroll_card_button__rQfkm",
	"button_wrapper": "ProjectsScroll_button_wrapper__dQmIX",
	"button": "ProjectsScroll_button__D1dfW",
	"angle": "ProjectsScroll_angle__4Z485",
	"elements": "ProjectsScroll_elements__owlv9"
};


/***/ }),

/***/ 1552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Card)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Card/Card.module.scss
var Card_module = __webpack_require__(9752);
var Card_module_default = /*#__PURE__*/__webpack_require__.n(Card_module);
;// CONCATENATED MODULE: ./src/components/Card/Card.tsx




const Card = ({ top =false , bottom =false , center =true , right =false , children =[]  } = {})=>{
    const [bodyStyle, setBodyStyle] = (0,external_react_.useState)((Card_module_default()).center);
    (0,external_react_.useEffect)(()=>{
        if (center != true) {
            setBodyStyle((Card_module_default()).left);
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (Card_module_default()).big_wrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (Card_module_default()).wrapper,
                children: [
                    top ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: (Card_module_default()).top_angle
                    }) : null,
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: bodyStyle,
                        children: children
                    }),
                    bottom ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: (Card_module_default()).bottom_angle
                    }) : null
                ]
            }),
            right ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (Card_module_default()).right
            }) : null
        ]
    });
};
/* harmony default export */ const Card_Card = (Card);

;// CONCATENATED MODULE: ./src/components/Card/index.ts

/* harmony default export */ const components_Card = (Card_Card);


/***/ }),

/***/ 3199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ buttons_GhostButton)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/buttons/GhostButton/GhostButton.tsx




// TODO Remove animation (ALL!!)
function GhostButton({ color ="2D7DC3" , text ="кнопка" , goto ="" , query =""  } = {}) {
    return /*#__PURE__*/ jsx_runtime.jsx(external_antd_.ConfigProvider, {
        theme: {
            token: {
                colorPrimary: `${color}`,
                // Instead of boxShadow
                borderRadius: 0,
                controlOutlineWidth: 0,
                colorErrorOutline: "rgba(0, 0, 0, 0)",
                // To remove scale animation
                motionDurationFast: `0s`,
                motionDurationMid: `0s`,
                motionDurationSlow: `0s`,
                opacityLoading: 0
            }
        },
        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
            href: {
                pathname: `${goto}`,
                query: query
            },
            children: /*#__PURE__*/ jsx_runtime.jsx(external_antd_.Button, {
                style: {
                    transform: "skew(-20deg)"
                },
                block: true,
                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                    style: {
                        transform: "skew(20deg)"
                    },
                    children: text
                })
            })
        })
    });
}
/* harmony default export */ const GhostButton_GhostButton = (GhostButton);

;// CONCATENATED MODULE: ./src/components/buttons/GhostButton/index.ts

/* harmony default export */ const buttons_GhostButton = (GhostButton_GhostButton);


/***/ })

};
;