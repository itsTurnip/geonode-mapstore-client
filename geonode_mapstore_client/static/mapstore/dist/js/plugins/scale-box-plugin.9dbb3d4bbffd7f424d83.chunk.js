(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[24593],{898939:(e,t,n)=>{"use strict";n.d(t,{d2:()=>r,yX:()=>o,Uo:()=>i,n2:()=>c,SA:()=>a});var r="CHANGE_HELP_STATE",o="CHANGE_HELP_TEXT",i="CHANGE_HELPWIN_VIZ";function c(e){return{type:o,helpText:e}}function a(e){return{type:i,helpwinViz:e}}},383606:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var r=n(747037),o=n.n(r),i=n(675263),c=n.n(i),a=n(124852),l=n.n(a),u=n(757588),s=n(86638);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,g(r.key),r)}}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function m(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return d(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function v(e,t,n){return(t=g(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===p(t)?t:String(t)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(a,e);var t,n,r,i,c=(r=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(i){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function a(){var e;f(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return v(d(e=c.call.apply(c,[this].concat(n))),"onMouseOver",(function(){var t=o()(e.props.helpText)?e.props.helpText:(0,s.S$)(e.context.messages,e.props.helpText.props.msgId);e.props.changeHelpText(t),e.props.changeHelpwinVisibility(!0)})),e}return t=a,(n=[{key:"render",value:function(){return l().createElement(u.Badge,{id:this.props.id,onMouseOver:this.onMouseOver,className:(this.props.isVisible?"":"hidden ")+(this.props.className?this.props.className:"")},"?")}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l().Component);v(w,"propTypes",{id:c().string,helpText:c().oneOfType([c().string,c().element]),isVisible:c().bool,changeHelpText:c().func,changeHelpwinVisibility:c().func,className:c().string}),v(w,"contextTypes",{messages:c().object}),v(w,"defaultProps",{helpText:"",isVisible:!1});const O=w},875964:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var r=n(618446),o=n.n(r),i=n(675263),c=n.n(i),a=n(124852),l=n.n(a),u=n(757588),s=n(552259);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,g(r.key),r)}}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function m(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return d(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function v(e,t,n){return(t=g(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===p(t)?t:String(t)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(a,e);var t,n,r,i,c=(r=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(i){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function a(){var e;f(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return v(d(e=c.call.apply(c,[this].concat(n))),"onComboChange",(function(t){var n=parseInt(t.nativeEvent.target.value,10);e.props.onChange(n,e.props.scales[n])})),v(d(e),"getOptions",(function(){return e.props.scales.map((function(t,n){return l().createElement("option",{value:n,key:n},e.props.template(t,n))})).filter((function(t,n){return n>=e.props.minZoom}))})),e}return t=a,(n=[{key:"shouldComponentUpdate",value:function(e){return!o()(e,this.props)}},{key:"render",value:function(){var e;return e=this.props.readOnly?l().createElement("label",null,this.props.template(this.props.scales[this.props.currentZoomLvl],this.props.currentZoomLvl)):this.props.useRawInput?l().createElement("select",{label:this.props.label,onChange:this.onComboChange,bsSize:"small",value:this.props.currentZoomLvl||""},this.getOptions()):l().createElement(u.Form,{inline:!0},l().createElement(u.FormGroup,{bsSize:"small"},l().createElement(u.ControlLabel,null,this.props.label),l().createElement(u.FormControl,{componentClass:"select",onChange:this.onComboChange,value:this.props.currentZoomLvl||""},this.getOptions()))),l().createElement("div",{id:this.props.id,style:this.props.style},e)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l().Component);v(w,"propTypes",{id:c().string,style:c().object,scales:c().array,currentZoomLvl:c().number,minZoom:c().number,onChange:c().func,readOnly:c().bool,label:c().oneOfType([c().func,c().string,c().object]),template:c().func,useRawInput:c().bool}),v(w,"defaultProps",{id:"mapstore-scalebox",scales:(0,s.getGoogleMercatorScales)(0,28),currentZoomLvl:0,minZoom:0,onChange:function(){},readOnly:!1,template:function(e){return e<1?Math.round(1/e)+" : 1":"1 : "+Math.round(e)},useRawInput:!1});const O=w},423519:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>$});var r=n(124852),o=n.n(r),i=n(322843),c=n(22222),a=n(800827),l=n(801550),u=n(171703),s=n(898939),p=n(675263),f=n.n(p),b=n(383606),y=n(893379),m=n.n(y),d=n(992058);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,j(r.key),r)}}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function O(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}function j(e){var t=function(e,t){if("object"!==h(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===h(t)?t:String(t)}m()(d.Z,{insert:"head",singleton:!1}),d.Z.locals;var P,S,E,T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(a,e);var t,n,r,i,c=(r=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(i){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function a(){return v(this,a),c.apply(this,arguments)}return t=a,(n=[{key:"render",value:function(){return o().createElement("div",{id:this.props.id},o().createElement(b.Z,{id:"helpbadge-"+(this.props.children.key||this.props.id),isVisible:this.props.helpEnabled,helpText:this.props.helpText,changeHelpText:this.props.changeHelpText,changeHelpwinVisibility:this.props.changeHelpwinVisibility}),this.props.children)}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(o().Component);P=T,S="propTypes",E={id:f().string,helpText:f().oneOfType([f().string,f().element]),helpEnabled:f().bool,changeHelpText:f().func,changeHelpwinVisibility:f().func},(S=j(S))in P?Object.defineProperty(P,S,{value:E,enumerable:!0,configurable:!0,writable:!0}):P[S]=E;const _=T,C=(0,u.connect)((function(e){return{helpEnabled:e.controls&&e.controls.help&&e.controls.help.enabled}}),{changeHelpText:s.n2,changeHelpwinVisibility:s.SA})(_);var R=n(481756),Z=n(875964),k=n(552259),H=n(727418),B=n.n(H),L=n(638068);function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I.apply(this,arguments)}function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,A(r.key),r)}}function A(e){var t=function(e,t){if("object"!==M(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!==M(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===M(t)?t:String(t)}function V(e,t){return V=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},V(e,t)}function D(e,t){if(t&&("object"===M(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},F(e)}m()(L.Z,{insert:"head",singleton:!1}),L.Z.locals;var G=(0,c.P1)([a.Od,a._e],(function(e,t){return{minZoom:t,currentZoomLvl:e&&e.zoom,scales:(0,k.getScales)(e&&e.projection||"EPSG:3857",e&&e.mapOptions&&e.mapOptions.view&&e.mapOptions.view.DPI||null)}})),U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&V(e,t)}(a,e);var t,n,r,i,c=(r=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=F(r);if(i){var n=F(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return D(this,e)});function a(){return N(this,a),c.apply(this,arguments)}return t=a,(n=[{key:"render",value:function(){return o().createElement(C,{id:"mapstore-scalebox-container",key:"scalebox-help",helpText:o().createElement(R.Z,{msgId:"helptexts.scaleBox"})},o().createElement(Z.Z,I({key:"scaleBox",label:o().createElement(R.Z,{msgId:"mapScale"})},this.props)))}}])&&z(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(o().Component),X=(0,i.$j)(G,{onChange:l.sO})(U);const $={ScaleBoxPlugin:B()(X,{disablePluginIf:"{state('mapType') === 'cesium'}"},{MapFooter:{name:"scale",position:2,tool:!0,priority:1}}),reducers:{}}},481756:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(171703),o=n(805346);const i=(0,r.connect)((function(e){return{locale:e.locale&&e.locale.currentLocale,messages:e.locale&&e.locale.messages||[]}}))(o.Z)},992058:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(923645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".msgapi .mapToolbar .mapstore-tb-helpbadge {\n    display: block;\n    background-color: #777;\n    position: absolute;\n    z-index: 1000;\n    top : -10px;\n    left: -10px;\n}\n\n\n.msgapi #helpbadge-zoomToMaxExtent {\n    display: inline;\n    position: absolute;\n    left: 34px;\n    top: 72px;\n    z-index: 100000\n}\n\n.msgapi #helpbadge-scaleBox {\n    display: inline;\n    position: absolute;\n    left: 116px;\n    bottom: 48px;\n    z-index: 100000\n}\n\n.msgapi #helpbadge-seachBar {\n    display: inline;\n    position: absolute;\n    left: 46px;\n    top: 10px;\n    z-index: 100000\n}\n\n\n.msgapi .btn .badge {\n    position: absolute;\n    top: -10px;\n    left: -10px;\n}\n\n.msgapi .themed .btn .badge {\n    top: -35px;\n    left: -50px;\n}\n\n.msgapi .badge {\n    cursor: pointer;\n}\n\n.msgapi #helpbadge-scaleBox {\n    left: 0 !important;\n}\n\n.msgapi #mapstore-navbar #helpbadge-search-help {\n    position: absolute;\n    left: -10px;\n    bottom: -8px;\n    z-index: 1;\n}\n",""]);const i=o},638068:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(923645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".msgapi #mapstore-scalebox {\n    /*z-index: 10;\n    bottom: 6px;\n    left: -2px;\n    position: absolute;\n    margin: 8px;\n    width: 148px;*/\n}\n\n.msgapi #mapstore-scalebox-container {\n    /*z-index: 10;\n    bottom: -16px;\n    right: 55px;\n    left: auto;\n    position: absolute;\n    margin: 8px;\n    width: 148px;*/\n}\n",""]);const i=o},923645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},893379:(e,t,n)=>{"use strict";var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],l=t.base?a[0]+t.base:a[0],u=n[l]||0,s="".concat(l," ").concat(u);n[l]=u+1;var p=c(s),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==p?(i[p].references++,i[p].updater(f)):i.push({identifier:s,updater:m(f,t),references:1}),r.push(s)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var c=o(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var u,s=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(t,o);else{var i=document.createTextNode(o),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}function f(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var b=null,y=0;function m(e,t){var n,r,o;if(t.singleton){var i=y++;n=b||(b=l(t)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=l(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);i[o].references--}for(var l=a(e,t),u=0;u<n.length;u++){var s=c(n[u]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=l}}}}}]);