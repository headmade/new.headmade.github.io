(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[192],{763:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contacts",function(){return n(584)}])},584:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return J}});var o=n(5893),s=n(7294),r=n(6028),a=n.n(r);let i=()=>(0,o.jsxs)("div",{className:a().adressInfo,children:[(0,o.jsx)("h1",{className:a().header,children:'ООО "ХЭДМЕЙД"'}),(0,o.jsxs)("div",{className:a().information,children:[(0,o.jsx)("a",{className:a().mail,href:"mailto: ",children:"info@headmade.pro"}),(0,o.jsx)("a",{className:a().phone,href:"tel:+7(843)259-99-23",children:"+7(843)259-99-23"}),(0,o.jsx)("p",{className:a().adress,children:"г. Казань, ул.Карла Маркса, д.5, оф.114"})]})]});var c=n(9278),l=n.n(c);let p=()=>(0,o.jsx)("div",{className:l().triangle});function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}let d=(e,t)=>{let n={};for(let o in e)-1===t.indexOf(o)&&(n[o]=e[o]);return n},m=s.createContext(null),h=s.createContext(null),f=e=>t=>s.createElement(h.Consumer,null,n=>s.createElement(e,u({parent:n},t))),y=(e=[])=>{let[t,n]=(0,s.useState)(!1),o=(0,s.useRef)(e),r=(()=>{let e=(0,s.useContext)(m);if(null===e)throw Error("Couldn't find Yandex.Maps API in the context. Make sure that hook useYMaps is inside <YMaps /> provider");return e})(),a=r.getApi();return(0,s.useEffect)(()=>{r.load().then(()=>Promise.all(o.current.map(r.loadModule))).then(()=>n(!0))},[]),t&&a?a:null},j=()=>{},v=["onLoad","onError","modules","apiLoader"];function b(e,t=!1,n=[]){return o=>{let{width:r,height:a,modules:i=[],onLoad:c=j}=o,l=y(n.concat(i)),p=d(o,v);return(0,s.useEffect)(()=>l?c(l):void 0,[l]),!t||l?s.createElement(e,u({ymaps:l},p)):s.createElement("div",{style:{width:r,height:a}})}}let _="undefined"!=typeof window,O={lang:"ru_RU",load:"",ns:"",mode:"release"},g=e=>{let{version:t="2.1",enterprise:n=!1,query:o={lang:"ru_RU",load:"",ns:""},preload:r=!1,children:a}=e,i=(0,s.useRef)((e=>{let t;let{query:n=O}=e,o=Date.now().toString(32),s=n.ns||"",r="__yandex-maps-api-onload__$$"+o,a="__yandex-maps-api-onerror__$$"+o,i=_?window:{},c={},l=()=>s?i[s]:t,p=()=>{delete i[r],delete i[a]};return{load:()=>{if(l())return Promise.resolve(t);if(c[s])return c[s];let o={onload:r,onerror:a,...O,...n},u=Object.keys(o).map(e=>`${e}=${o[e]}`).join("&"),d=[`https://${e.enterprise?"enterprise.":""}api-maps.yandex.ru`,e.version,"?"+u].join("/");return c[s]=new Promise((e,n)=>{i[r]=n=>{p(),n.ready(()=>{t=n,e(n)})},i[a]=e=>{p(),n(e)},new Promise((e,t)=>{let n=document.createElement("script");n.type="text/javascript",n.onload=e,n.onerror=t,n.src=d,n.async=!0,document.head.appendChild(n)}).catch(i[a])}),c[s]},getApi:l,loadModule:e=>new Promise((n,o)=>{t.modules.require(e).done(o=>{o.forEach(n=>{((e,t,n,o=!1)=>{let s="string"==typeof t?t.split("."):t.slice(),r,a=e;for(;s.length>1;)a[r=s.shift()]||(a[r]={}),a=a[r];let i=s[0];a[i]=!0===o&&a[i]||n})(t,e,n,!0)}),n(t)},o)})}})({version:t,enterprise:n,query:o,preload:r}));return(0,s.useEffect)(()=>{r&&i.current.load()},[i.current]),s.createElement(m.Provider,{value:i.current},a)},E=/^on(?=[A-Z])/;function x(e){return Object.keys(e).reduce((t,n)=>{if(E.test(n)){let o=n.replace(E,"").toLowerCase();t._events[o]=e[n]}else t[n]=e[n];return t},{_events:{}})}function C(e,t,n){"function"==typeof n&&e.events.add(t,n)}function R(e,t,n){"function"==typeof n&&e.events.remove(t,n)}function w(e,t,n){Object.keys(Object.assign({},t,n)).forEach(o=>{t[o]!==n[o]&&(R(e,o,t[o]),C(e,o,n[o]))})}let P=e=>"default"+e.charAt(0).toUpperCase()+e.slice(1);function k(e,t){return void 0!==e[t]||void 0===e[P(t)]}function M(e,t,n){return(k(e,t)?e[t]:e[P(t)])||n}function N(e,t,n=null){e!==t&&(e&&("current"in e?e.current=null:"function"==typeof e&&e(null)),t&&("current"in t?t.current=n:"function"==typeof t&&t(n)))}function T(e){let{width:t,height:n,style:o,className:s}=e;return void 0!==o||void 0!==s?Object.assign({},o&&{style:o},s&&{className:s}):{style:{width:t,height:n}}}class S extends s.Component{constructor(e){super(e),this.state={error:null,errorInfo:null}}componentDidCatch(e,t){let{onError:n=()=>{}}=this.props;n(e),this.setState({error:e,errorInfo:t})}render(){return this.state.error?null:this.props.children}}let A=e=>({onError:t,...n})=>s.createElement(S,{onError:t},s.createElement(e,n));class U extends s.Component{constructor(){super(),this.instance=null,this.state={instance:null},this._parentElement=null,this._getRef=e=>{this._parentElement=e}}componentDidMount(){this.instance=U.mountObject(this._parentElement,this.props.ymaps.Map,this.props),this.setState({instance:this.instance})}componentDidUpdate(e){null!==this.instance&&U.updateObject(this.instance,e,this.props)}componentWillUnmount(){U.unmountObject(this.instance,this.props)}render(){let e=T(this.props),t=x(this.props),n=d(t,["_events","state","defaultState","options","defaultOptions","instanceRef","ymaps","children","width","height","style","className"]);return s.createElement(h.Provider,{value:this.state.instance},s.createElement("div",u({ref:this._getRef},e,n),this.props.children))}static mountObject(e,t,n){let{instanceRef:o,_events:s}=x(n),r=new t(e,M(n,"state"),M(n,"options"));return Object.keys(s).forEach(e=>C(r,e,s[e])),N(null,o,r),r}static updateObject(e,t,n){let{_events:o,instanceRef:s}=x(n),{_events:r,instanceRef:a}=x(t);if(k(n,"state")){let o=M(t,"state",{}),s=M(n,"state",{});o.type!==s.type&&e.setType(s.type),o.behaviors!==s.behaviors&&(o.behaviors&&e.behaviors.disable(o.behaviors),s.behaviors&&e.behaviors.enable(s.behaviors)),s.zoom&&o.zoom!==s.zoom&&e.setZoom(s.zoom),s.center&&o.center!==s.center&&e.setCenter(s.center),s.bounds&&o.bounds!==s.bounds&&e.setBounds(s.bounds)}if(k(n,"options")){let o=M(t,"options"),s=M(n,"options",{});o!==s&&e.options.set(s)}M(t,"width")===M(n,"width")&&M(t,"height")===M(n,"height")||e.container.fitToViewport(),w(e,r,o),N(a,s,e)}static unmountObject(e,t){let{instanceRef:n,_events:o}=x(t);null!==e&&(Object.keys(o).forEach(t=>R(e,t,o[t])),e.destroy(),N(n))}}let D=A(b(U,!0,["Map"]));D.defaultProps={width:320,height:240};class I extends s.Component{constructor(){super(),this.state={instance:null},this._parentElement=null,this._getRef=e=>{this._parentElement=e}}componentDidMount(){this._mounted=!0,this.props.ymaps.panorama.isSupported()&&I.mountObject(this._parentElement,this.props.ymaps.panorama,this.props).then(e=>this._mounted&&this.setState({instance:e}))}componentDidUpdate(e){null!==this.state.instance&&I.updateObject(this.state.instance,e,this.props)}componentWillUnmount(){this._mounted=!1,I.unmountObject(this.state.instance,this.props)}render(){let e=T(this.props);return s.createElement("div",u({ref:this._getRef},e))}static mountObject(e,t,n){let{instanceRef:o,_events:s}=x(n),r=M(n,"point"),a=M(n,"locateOptions"),i=M(n,"options");return new Promise((n,c)=>{t.locate(r,a).done(r=>{if(r.length>0){let a=new t.Player(e,r[0],i);N(null,o,a),Object.keys(s).forEach(e=>C(a,e,s[e])),n(a)}},c)})}static updateObject(e,t,n){let{_events:o,instanceRef:s}=x(n),{_events:r,instanceRef:a}=x(t);if(k(n,"options")){let o=M(t,"options"),s=M(n,"options");o!==s&&e.options.set(s)}if(k(n,"point")){let o=M(n,"point"),s=M(t,"point"),r=M(n,"locateOptions");o!==s&&e.moveTo(o,r)}w(e,r,o),N(a,s,e)}static unmountObject(e,t){let{instanceRef:n,_events:o}=x(t);null!==e&&(Object.keys(o).forEach(t=>R(e,t,o[t])),N(n))}}let Z=A(b(I,!0,["panorama.isSupported","panorama.locate","panorama.createPlayer","panorama.Player"]));Z.defaultProps={width:320,height:240};class B extends s.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){let e=B.mountControl(this.props.ymaps.control[this.props.name],this.props);this.instance=e,this.setState({instance:e})}componentDidUpdate(e){null!==this.instance&&B.updateControl(this.instance,e,this.props)}componentWillUnmount(){B.unmountControl(this.instance,this.props)}render(){return s.createElement(h.Provider,{value:this.state.instance},this.props.children)}static mountControl(e,t){let{instanceRef:n,parent:o,lazy:s,_events:r}=x(t),a=new e({data:M(t,"data"),options:M(t,"options"),state:M(t,"state"),mapTypes:M(t,"mapTypes"),lazy:s});if(Object.keys(r).forEach(e=>C(a,e,r[e])),o&&o.controls&&"function"==typeof o.controls.add)o.controls.add(a);else{if(!o||!o.add||"function"!=typeof o.add)throw Error(`No parent found to mount ${t.name}`);o.add(a)}return N(null,n,a),a}static updateControl(e,t,n){let{_events:o,instanceRef:s}=x(n),{_events:r,instanceRef:a}=x(t);if(k(n,"options")){let o=M(t,"options"),s=M(n,"options");o!==s&&e.options.set(s)}if(k(n,"data")){let o=M(t,"data"),s=M(n,"data");o!==s&&e.data.set(s)}if(k(n,"state")){let o=M(t,"state"),s=M(n,"state");o!==s&&e.state.set(s)}if(k(n,"mapTypes")){let o=M(t,"mapTypes"),s=M(n,"mapTypes");o!==s&&(e.removeAllMapTypes(),s.forEach(t=>e.addMapType(t)))}w(e,r,o),N(a,s,e)}static unmountControl(e,t){let{instanceRef:n,parent:o,_events:s}=x(t);null!==e&&(Object.keys(s).forEach(t=>R(e,t,s[t])),o.controls&&"function"==typeof o.controls.remove?o.controls.remove(e):o.remove&&"function"==typeof o.remove&&o.remove(e),N(n))}}A(f(b(e=>s.createElement(B,u({},e,{name:"Button"})),!0,["control.Button"]))),A(f(b(e=>s.createElement(B,u({},e,{name:"FullscreenControl"})),!0,["control.FullscreenControl"]))),A(f(b(e=>s.createElement(B,u({},e,{name:"GeolocationControl"})),!0,["control.GeolocationControl"]))),A(f(b(e=>s.createElement(B,u({},e,{name:"ListBox"})),!0,["control.ListBox"]))),A(f(b(e=>s.createElement(B,u({},e,{name:"ListBoxItem"})),!0,["control.ListBoxItem"]))),A(f(b(e=>s.createElement(B,u({},e,{name:"RouteButton"})),!0,["control.RouteButton"]))),A(f(b(e=>s.createElement(B,u({},e,{name:"RouteEditor"})),!0,["control.RouteEditor"]))),A(f(b(e=>s.createElement(B,u({},e,{name:"RoutePanel"})),!0,["control.RoutePanel"]))),A(f(b(e=>s.createElement(B,u({},e,{name:"RulerControl"})),!0,["control.RulerControl"]))),A(f(b(e=>s.createElement(B,u({},e,{name:"SearchControl"})),!0,["control.SearchControl"]))),A(f(b(e=>s.createElement(B,u({},e,{name:"TrafficControl"})),!0,["control.TrafficControl"]))),A(f(b(e=>s.createElement(B,u({},e,{name:"TypeSelector"})),!0,["control.TypeSelector"]))),A(f(b(e=>s.createElement(B,u({},e,{name:"ZoomControl"})),!0,["control.ZoomControl"])));class $ extends s.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){let e=$.mountObject(this.props.ymaps.Clusterer,this.props);this.instance=e,this.setState({instance:e})}componentDidUpdate(e){null!==this.state.instance&&$.updateObject(this.instance,e,this.props)}componentWillUnmount(){$.unmountObject(this.instance,this.props)}render(){return s.createElement(h.Provider,{value:this.state.instance},this.props.children)}static mountObject(e,t){let{instanceRef:n,parent:o,_events:s}=x(t),r=new e(M(t,"options"));if(Object.keys(s).forEach(e=>C(r,e,s[e])),o.geoObjects&&"function"==typeof o.geoObjects.add)o.geoObjects.add(r);else{if(!o.add||"function"!=typeof o.add)throw Error("No parent found to mount Clusterer");o.add(r)}return N(null,n,r),r}static updateObject(e,t,n){let{_events:o,instanceRef:s}=x(n),{_events:r,instanceRef:a}=x(t);if(k(n,"options")){let o=M(t,"options"),s=M(n,"options");o!==s&&e.options.set(s)}w(e,r,o),N(a,s,e)}static unmountObject(e,t){let{instanceRef:n,parent:o,_events:s}=x(t);null!==e&&(Object.keys(s).forEach(t=>R(e,t,s[t])),o.geoObjects&&"function"==typeof o.geoObjects.remove?o.geoObjects.remove(e):o.remove&&"function"==typeof o.remove&&o.remove(e),N(n))}}A(f(b($,!0,["Clusterer"])));class L extends s.Component{constructor(){super(),this.state={instance:null}}componentDidMount(){let e=L.mountObject(this.props.ymaps.ObjectManager,this.props);this.instance=e,this.setState({instance:e})}componentDidUpdate(e){null!==this.instance&&L.updateObject(this.instance,e,this.props)}componentWillUnmount(){L.unmountObject(this.instance,this.props)}render(){return null}static mountObject(e,t){let{instanceRef:n,parent:o,_events:s}=x(t),r=M(t,"options",{}),a=M(t,"features",{}),i=M(t,"filter",null),c=M(t,"objects",{}),l=M(t,"clusters",{}),p=new e(r);if(p.add(a||[]),p.setFilter(i),p.objects.options.set(c),p.clusters.options.set(l),Object.keys(s).forEach(e=>C(p,e,s[e])),o.geoObjects&&"function"==typeof o.geoObjects.add)o.geoObjects.add(p);else{if(!o.add||"function"!=typeof o.add)throw Error("No parent found to mount ObjectManager");o.add(p)}return N(null,n,p),p}static updateObject(e,t,n){let{_events:o,instanceRef:s}=x(n),{_events:r,instanceRef:a}=x(t);if(k(n,"options")){let o=M(t,"options"),s=M(n,"options");o!==s&&e.options.set(s)}if(k(n,"objects")){let o=M(t,"objects"),s=M(n,"objects");o!==s&&e.objects.options.set(s)}if(k(n,"clusters")){let o=M(t,"clusters"),s=M(n,"clusters");o!==s&&e.clusters.options.set(s)}if(k(n,"filter")){let o=M(t,"filter"),s=M(n,"filter");o!==s&&e.setFilter(s)}if(k(n,"features")){let o=M(t,"features"),s=M(n,"features");o!==s&&(e.remove(o),e.add(s))}w(e,r,o),N(a,s,e)}static unmountObject(e,t){let{instanceRef:n,parent:o,_events:s}=x(t);null!==e&&(Object.keys(s).forEach(t=>R(e,t,s[t])),o.geoObjects&&"function"==typeof o.geoObjects.remove?o.geoObjects.remove(e):o.remove&&"function"==typeof o.remove&&o.remove(e),N(n))}}A(f(b(L,!0,["ObjectManager"])));class z extends s.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){let{name:e,ymaps:t,dangerZone:n}=this.props,o=z.mountObject(n&&"function"==typeof n.modifyConstructor?n.modifyConstructor(t[e]):t[e],this.props);this.instance=o,this.setState({instance:o})}componentDidUpdate(e){null!==this.instance&&z.updateObject(this.instance,e,this.props)}componentWillUnmount(){z.unmountObject(this.instance,this.props)}render(){return null}static mountObject(e,t){let{instanceRef:n,parent:o,_events:s}=x(t),r=new e(M(t,"geometry"),M(t,"properties"),M(t,"options"));if(Object.keys(s).forEach(e=>C(r,e,s[e])),o&&o.geoObjects&&"function"==typeof o.geoObjects.add)o.geoObjects.add(r);else{if(!o||!o.add||"function"!=typeof o.add)throw Error(`No parent found to mount ${t.name}`);o.add(r)}return N(null,n,r),r}static updateObject(e,t,n){let{_events:o,instanceRef:s}=x(n),{_events:r,instanceRef:a}=x(t);if(k(n,"geometry")){let o=M(t,"geometry",{}),s=M(n,"geometry",{});Array.isArray(s)&&s!==o?Array.isArray(s[0])&&"number"==typeof s[1]?(e.geometry.setCoordinates(s[0]),e.geometry.setRadius(s[1])):e.geometry.setCoordinates(s):"object"==typeof s&&(s.coordinates!==o.coordinates&&e.geometry.setCoordinates(s.coordinates),s.radius!==o.radius&&e.geometry.setRadius(s.radius))}if(k(n,"properties")){let o=M(t,"properties"),s=M(n,"properties");o!==s&&e.properties.set(s)}if(k(n,"options")){let o=M(t,"options"),s=M(n,"options");o!==s&&e.options.set(s)}w(e,r,o),N(a,s,e)}static unmountObject(e,t){let{instanceRef:n,parent:o,_events:s}=x(t);null!==e&&(Object.keys(s).forEach(t=>R(e,t,s[t])),o.geoObjects&&"function"==typeof o.geoObjects.remove?o.geoObjects.remove(e):o.remove&&"function"==typeof o.remove&&o.remove(e),N(n))}}let W={modifyConstructor(e){function t(t,n,o){e.call(this,{geometry:t,properties:n},o)}return t.prototype=e.prototype,t}};A(f(b(e=>s.createElement(z,u({},e,{name:"GeoObject",dangerZone:W})),!0,["GeoObject"]))),A(f(b(e=>s.createElement(z,u({},e,{name:"Circle"})),!0,["Circle"])));var F=A(f(b(e=>s.createElement(z,u({},e,{name:"Placemark"})),!0,["Placemark"])));A(f(b(e=>s.createElement(z,u({},e,{name:"Polygon"})),!0,["Polygon"]))),A(f(b(e=>s.createElement(z,u({},e,{name:"Polyline"})),!0,["Polyline"]))),A(f(b(e=>s.createElement(z,u({},e,{name:"Rectangle"})),!0,["Rectangle"])));var G=n(1944),q=n(6226),Y=n(5080),K=n.n(Y),V=n(9008),X=n.n(V);let H=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(X(),{children:[(0,o.jsx)("title",{children:"Контакты"}),(0,o.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,o.jsx)("div",{className:K().wrapper,children:(0,o.jsxs)(G.Z,{justify:"center",children:[(0,o.jsx)(q.Z,{xs:22,lg:10,children:(0,o.jsx)(i,{})}),(0,o.jsx)(q.Z,{xs:24,lg:14,children:(0,o.jsxs)("div",{className:K().content,children:[(0,o.jsx)(p,{}),(0,o.jsx)(g,{children:(0,o.jsx)(D,{className:K().map,style:{width:"100%",minHeight:"100%"},defaultState:{center:[55.797654,49.111383],zoom:17},children:(0,o.jsx)(F,{geometry:[55.797655,49.111382]})})})]})})]})})]});var J=H},6028:function(e){e.exports={header:"AdressInfo_header__4c3Vv",information:"AdressInfo_information__ITtRh",mail:"AdressInfo_mail__DOd7d",phone:"AdressInfo_phone__UpRCK",adress:"AdressInfo_adress__nPwTJ",adressInfo:"AdressInfo_adressInfo__kpMZs"}},9278:function(e){e.exports={triangle:"MapTriangle_triangle__KM8Ky"}},5080:function(e){e.exports={content:"contacts_content___1uyn",map:"contacts_map__a6QYf"}},9008:function(e,t,n){e.exports=n(2636)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=763)}),_N_E=e.O()}]);