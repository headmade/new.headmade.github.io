(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{6192:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return r(7278)}])},1552:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(5893),s=r(7294),o=r(5737),c=r.n(o),a=function(){let{top:e=!1,bottom:t=!1,center:r=!0,right:o=!1,children:a=[]}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[i,l]=(0,s.useState)(c().center);return(0,s.useEffect)(()=>{!0!=r&&l(c().left)}),(0,n.jsxs)("div",{className:c().big_wrapper,children:[(0,n.jsxs)("div",{className:c().wrapper,children:[e?(0,n.jsx)("div",{className:c().top_angle}):null,(0,n.jsx)("div",{className:i,children:a}),t?(0,n.jsx)("div",{className:c().bottom_angle}):null]}),o?(0,n.jsx)("div",{className:c().right}):null]})}},3199:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(5893);r(7294);var s=r(2297),o=r(9126),c=r(1664),a=r.n(c),i=function(){let{color:e="2D7DC3",text:t="кнопка",goto:r="",query:c=""}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(s.ZP,{theme:{token:{colorPrimary:"".concat(e),borderRadius:0,controlOutlineWidth:0,colorErrorOutline:"rgba(0, 0, 0, 0)",motionDurationFast:"0s",motionDurationMid:"0s",motionDurationSlow:"0s",opacityLoading:0}},children:(0,n.jsx)(a(),{href:{pathname:"".concat(r),query:c},children:(0,n.jsx)(o.ZP,{style:{transform:"skew(-20deg)"},block:!0,children:(0,n.jsx)("p",{style:{transform:"skew(20deg)"},children:t})})})})}},7278:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return H},default:function(){return L}});var n=r(5893),s=r(7294),o=r(1944),c=r(6226),a=r(5315),i=r.n(a),l=r(5675),d=r.n(l),_=r(1829),u=r.n(_);let h=e=>(0,n.jsxs)("div",{className:u().wrapper,children:[(0,n.jsx)(d(),{className:u().icon,width:100,height:100,alt:"icon",src:e.pic}),(0,n.jsxs)("div",{className:u().nameBlock,children:[(0,n.jsx)("h2",{className:u().headerArea,children:e.name}),(0,n.jsx)("div",{style:{backgroundColor:"".concat(e.lineColor)},className:u().angle})]}),(0,n.jsx)("p",{className:u().tech,children:e.tech})]});var p=r(449),j=r.n(p);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var x=function(e){function t(){return e.apply(this,arguments)||this}(r=t).prototype=Object.create(e.prototype),r.prototype.constructor=r,f(r,e);var r,n=t.prototype;return n.getColumns=function(){var e=this.props,t=e.children,r=e.columnsCount,n=Array.from({length:r},function(){return[]});return s.Children.forEach(t,function(e,t){e&&s.isValidElement(e)&&n[t%r].push(e)}),n},n.renderColumns=function(){var e=this.props.gutter;return this.getColumns().map(function(t,r){return s.createElement("div",{key:r,style:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignContent:"stretch",flex:1,width:0,gap:e}},t.map(function(e){return e}))})},n.render=function(){var e=this.props,t=e.gutter,r=e.className,n=e.style;return s.createElement("div",{style:m({display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"stretch",boxSizing:"border-box",width:"100%",gap:t},n),className:r},this.renderColumns())},t}(s.Component);x.propTypes={},x.defaultProps={columnsCount:3,gutter:"0",className:null,style:{}};var g="undefined"!=typeof window?s.useLayoutEffect:s.useEffect,v=function(){var e=(0,s.useState)(!1),t=e[0],r=e[1];return g(function(){r(!0)},[]),t},b=function(){var e=v(),t=(0,s.useState)(0),r=t[0],n=t[1],o=(0,s.useCallback)(function(){e&&n(window.innerWidth)},[e]);return g(function(){if(e)return window.addEventListener("resize",o),o(),function(){return window.removeEventListener("resize",o)}},[e,o]),r},w=function(e){var t=e.columnsCountBreakPoints,r=void 0===t?{350:1,750:2,900:3}:t,n=e.children,o=e.className,c=e.style,a=b(),i=(0,s.useMemo)(function(){var e=Object.keys(r).sort(function(e,t){return e-t}),t=e.length>0?r[e[0]]:1;return e.forEach(function(e){e<a&&(t=r[e])}),t},[a,r]);return s.createElement("div",{className:void 0===o?null:o,style:void 0===c?null:c},s.Children.map(n,function(e,t){return s.cloneElement(e,{key:t,columnsCount:i})}))};w.propTypes={};var y=r(1552),N=r(3199),C=r(9470),P=r.n(C),S={src:"/_next/static/media/front.a57c8116.svg",height:100,width:100,blurWidth:0,blurHeight:0},k={src:"/_next/static/media/back.dd94b735.svg",height:100,width:100,blurWidth:0,blurHeight:0},E={src:"/_next/static/media/mobile.e95c7571.svg",height:100,width:100,blurWidth:0,blurHeight:0},A={src:"/_next/static/media/image.8e7a5562.svg",height:100,width:100,blurWidth:0,blurHeight:0},D=r(9008),O=r.n(D);let Z=e=>{let{project:t}=e,[r,a]=(0,s.useState)(!1);return r?(0,n.jsx)("div",{children:"Загрузка"}):(0,n.jsxs)("div",{children:[(0,n.jsxs)(O(),{children:[(0,n.jsx)("title",{children:"Проекты"}),(0,n.jsx)("meta",{name:"description",content:'Headmade - ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ХЭДМЕЙД" (ООО ХЭДМЕЙД ), Казань, Республика Татарстан, ИНН 1657119572, ОГРН 1121690046411.'}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.svg"})]}),(0,n.jsx)(o.Z,{justify:"center",style:{minHeight:"100%"},children:(0,n.jsxs)(c.Z,{xs:22,lg:20,style:{minHeight:"100%"},children:[(0,n.jsx)(P(),{top:!0,children:(0,n.jsx)("h1",{className:i().header,children:"Наши направления"})}),(0,n.jsxs)("div",{className:i().areas,children:[(0,n.jsx)(P(),{delay:0,left:!0,children:(0,n.jsx)(h,{name:"Дизайн",tech:"UX / UI",lineColor:"#BE288C",pic:A})}),(0,n.jsx)(P(),{delay:200,left:!0,children:(0,n.jsx)(h,{name:"Мобильная разработка",tech:"iOS / Android / React Native / Windows / Ionic",lineColor:"#FAD232",pic:E})}),(0,n.jsx)(P(),{delay:400,left:!0,children:(0,n.jsx)(h,{name:"Frontend",tech:"React.js / Next.js / CSS3 / styled-components / Ant Design / Ant Design Pro / Less / Sass / Apollo / GraphQL / ",lineColor:"#2D91CD",pic:S})}),(0,n.jsx)(P(),{delay:600,left:!0,children:(0,n.jsx)(h,{name:"Backend",tech:"Ruby / Elixir / Node.js / GO / Erlang / C / C++ / MySql / Postgres / MemCache / Redis/ Nats",lineColor:"#D2DC32",pic:k})})]})]})}),(0,n.jsxs)("div",{style:{width:"100%"},className:i().vantacanvas,children:[(0,n.jsx)("div",{className:i().triangle}),(0,n.jsxs)("div",{className:i().projects,children:[(0,n.jsx)(P(),{bottom:!0,children:(0,n.jsx)("h1",{className:i().headerProjects,children:"Проекты"})}),(0,n.jsx)(o.Z,{justify:"center",children:(0,n.jsx)(c.Z,{xs:22,lg:16,children:(0,n.jsx)(w,{columnsCountBreakPoints:{320:1,768:2,992:3},children:(0,n.jsx)(x,{gutter:20,children:t.map((e,t)=>(0,n.jsx)(P(),{bottom:!0,children:(0,n.jsx)("div",{children:(0,n.jsxs)(y.Z,{top:!0,bottom:!0,center:!1,children:[(0,n.jsx)("div",{className:j().image_wrapper,children:(0,n.jsx)(d(),{className:i().logo,unoptimized:!0,src:"".concat(e.attributes.logo),alt:"".concat(e.header),width:100,height:100})}),(0,n.jsx)("div",{className:j().project_header,children:(0,n.jsx)("p",{className:i().projectName,children:e.attributes.name})}),(0,n.jsx)("div",{className:j().project_about,children:(0,n.jsx)("p",{children:e.attributes.shortDescription})}),(0,n.jsx)("div",{className:j().card_button_wrapper,children:(0,n.jsx)("div",{className:j().card_button,children:(0,n.jsx)(N.Z,{text:"Подробнее",goto:"/projects/"+e.id})})})]})},e.id)},e.id))})})})})]})]})]})};var H=!0,L=Z},5737:function(e){e.exports={wrapper:"Card_wrapper__Q0QoG",top_angle:"Card_top_angle__bZMmp",center:"Card_center__bcqUa",left:"Card_left__QyEct",bottom_angle:"Card_bottom_angle__uvkPZ",big_wrapper:"Card_big_wrapper__j58Rq",right:"Card_right__cPG6O"}},1829:function(e){e.exports={wrapper:"Areas_wrapper__r__iI",icon:"Areas_icon___duc9",nameBlock:"Areas_nameBlock__TY5Qj",headerArea:"Areas_headerArea__VR9En",angle:"Areas_angle__serrx",tech:"Areas_tech__qxS5P"}},449:function(e){e.exports={component:"ProjectsScroll_component__iin_n",header:"ProjectsScroll_header__XC8ZB",scroll:"ProjectsScroll_scroll__wqLlt",project:"ProjectsScroll_project__rHYab",image_wrapper:"ProjectsScroll_image_wrapper__Gai9T",project_header:"ProjectsScroll_project_header__H1YGA",project_about:"ProjectsScroll_project_about__N8In2",card_button_wrapper:"ProjectsScroll_card_button_wrapper__o_wHy",card_button:"ProjectsScroll_card_button__rQfkm",button_wrapper:"ProjectsScroll_button_wrapper__dQmIX",button:"ProjectsScroll_button__D1dfW",angle:"ProjectsScroll_angle__4Z485",elements:"ProjectsScroll_elements__owlv9"}},5315:function(e){e.exports={areas:"projects_areas__LygAO",header:"projects_header__KyC5_",triangle:"projects_triangle__RLaew",headerProjects:"projects_headerProjects__Tl3Yx",projects:"projects_projects__FsgQB",logo:"projects_logo__lZv_X",vantacanvas:"projects_vantacanvas__Qrbme",projectName:"projects_projectName__LI1Xr"}}},function(e){e.O(0,[357,774,888,179],function(){return e(e.s=6192)}),_N_E=e.O()}]);