(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[57482],{86450:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var r=n(124852);const o=(e,t)=>{const[o,i]=(0,r.useState)(!1),[a,c]=(0,r.useState)(null),l=(0,r.useRef)(),s=(0,r.useRef)();return(0,r.useEffect)((()=>(s.current=!0,()=>{s.current=!1})),[]),(0,r.useEffect)((()=>(e&&!l.current&&(i(!1),c(null),n(487376)("./"+e+"/"+t).then((e=>{s.current&&(l.current=e.default,i(!0))})).catch((e=>{s.current&&c(e)}))),()=>{})),[e]),[o,l.current,a]}},487376:(e,t,n)=>{var r={"./hooks/useMapTool":[86450],"./hooks/useMapTool.js":[86450],"./leaflet/locate":[133965,13187,70351,33965],"./leaflet/locate.js":[133965,13187,70351,33965],"./openlayers/locate":[545459,18672,58493,52043,40353,74738,97892,10027,13187,20263,45459],"./openlayers/locate.js":[545459,18672,58493,52043,40353,74738,97892,10027,13187,20263,45459]};function o(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return Promise.all(t.slice(1).map(n.e)).then((()=>n(o)))}o.keys=()=>Object.keys(r),o.id=487376,e.exports=o},38560:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(480681),o=n(124852),i=n.n(o),a=n(294184),c=n.n(a),l=["disabled","className","onClick"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}const u=(f=r.Button,i().forwardRef((function(e,t){var n=e.disabled,r=e.className,o=e.onClick,a=void 0===o?function(){}:o,u=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,l);return i().createElement(f,s({ref:t,className:n?c()("disabled",r):r,onClick:function(){n||a.apply(void 0,arguments)}},u),u.children)})));var f},60860:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>J});var r=n(893379),o=n.n(r),i=n(166241);o()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var a=n(124852),c=n.n(a),l=n(171703),s=n(480681),u="CHANGE_LOCATE_STATE",f="LOCATE_ERROR";function p(e){return{type:u,state:e}}var A=n(481756),d=n(675263),y=n.n(d),b=n(805346),v=n(950966),m=n(97671),h=n.n(m),g=n(38560);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(this,arguments)}function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,D(r.key),r)}}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function I(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return j(e)}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}function L(e,t,n){return(t=D(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e){var t=function(e,t){if("object"!==O(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===O(t)?t:String(t)}n.e(11671).then(n.bind(n,711671));var P=!1,N=!1,T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function a(){var e;S(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return L(j(e=i.call.apply(i,[this].concat(n))),"onClick",(function(){var t;switch(e.props.locate){case"FOLLOWING":case"LOCATING":case"PERMISSION_DENIED":t="DISABLED";break;case"ENABLED":t="FOLLOWING";break;case"DISABLED":t="ENABLED"}e.props.onClick(t)})),L(j(e),"renderButton",(function(){var t="PERMISSION_DENIED"===e.props.locate;return c().createElement(g.Z,E({id:e.props.id,disabled:t},e.props.btnConfig,{onClick:e.onClick,bsStyle:e.getBtnStyle(),style:e.props.style}),c().createElement(s.Glyphicon,{glyph:e.props.glyph}),e.props.text,e.props.help)})),L(j(e),"renderLoadingButton",(function(){var t=c().createElement("img",{src:h(),style:{display:"inline-block",margin:"0px",padding:0,background:"transparent",border:0},alt:"..."});return c().createElement(g.Z,E({id:e.props.id,onClick:e.onClick},e.props.btnConfig,{bsStyle:e.getBtnStyle(),style:e.props.style}),t)})),L(j(e),"addTooltip",(function(t){var n=c().createElement(s.Tooltip,{id:"locate-tooltip"},c().createElement(b.Z,{msgId:e.props.tooltip}));return c().createElement(v.Z,{placement:e.props.tooltipPlace,key:"{overlay-trigger.".concat(e.props.id,"-").concat(e.props.tooltip,"}"),overlay:n},t)})),L(j(e),"getBtnStyle",(function(){var t=e.props,n=t.locate,r=t.bsStyle;return"FOLLOWING"!==n&&"ENABLED"!==n||(r="success active"),r})),e}return t=a,(n=[{key:"UNSAFE_componentWillMount",value:function(){var e,t,n=this;"PERMISSION_DENIED"===this.props.locate||P||N||(P=!0,null!==(e=navigator)&&void 0!==e&&null!==(t=e.geolocation)&&void 0!==t&&t.getCurrentPosition?navigator.geolocation.getCurrentPosition((function(){P=!1,N=!0}),(function(e){P=!1,1===e.code&&n.props.onClick("PERMISSION_DENIED")})):(P=!1,this.props.onClick("PERMISSION_DENIED")))}},{key:"render",value:function(){var e="LOCATING"===this.props.locate?this.renderLoadingButton():this.renderButton();return this.props.tooltip?this.addTooltip(e):e}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c().Component);L(T,"propTypes",{id:y().string,hide:y().bool,btnConfig:y().object,text:y().oneOfType([y().string,y().element]),help:y().oneOfType([y().string,y().element]),locate:y().string,onClick:y().func,tooltip:y().element,tooltipPlace:y().string,style:y().object,bsStyle:y().string,glyph:y().string}),L(T,"defaultProps",{id:"locate-btn",onClick:function(){},locate:"DISABLED",tooltipPlace:"left",bsStyle:"default",glyph:"1-position-1",btnConfig:{className:"square-button"}});const B=T;var x=n(322843),R=n(727418),M=n.n(R);var G=n(86450);function Q(e){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q(e)}function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){Z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Z(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==Q(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!==Q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===Q(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var H=(0,l.connect)((function(e){return{locate:e.locate&&e.locate.state||"DISABLED",tooltip:e.locate&&"FOLLOWING"===e.locate.state?"locate.tooltipDeactivate":"locate.tooltip"}}),{onClick:p})(B);const J=(0,x.rx)("Locate",{component:H,options:{disablePluginIf:"{state('mapType') === 'cesium'}"},containers:{Toolbar:{name:"locate",position:2,tool:!0,icon:c().createElement(s.Glyphicon,{glyph:"screenshot"}),help:c().createElement(A.Z,{msgId:"helptexts.locateBtn"}),priority:1},Map:{name:"Locate",Tool:(0,l.connect)((function(e){return{status:e.locate&&e.locate.state,messages:e.locale&&e.locale.messages?e.locale.messages.locate:void 0}}),{changeLocateState:p,onLocateError:function(e){return{type:f,error:e}}})((function(e){var t,n,r=e.map,o=e.mapType,i=e.speedThreshold,c=e.status,l=e.messages,s=e.maxZoom,u=e.changeLocateState,f=e.onLocateError,p=e.rateControl,A=(0,a.useRef)(),d=(t=(0,G.default)(o,"locate"),n=3,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,c=[],l=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);l=!0);}catch(e){s=!0,o=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?q(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),y=d[0],b=d[1],v=d[2];(0,a.useEffect)((function(){v&&f(v)}),[v]);var m=function(e){c!==e&&u(e)},h=function(e){f(e.message),u("DISABLED")};function g(){return{locateOptions:_(_(_({},void 0!==s&&{maxZoom:s}),void 0!==p&&{rateControl:p}),void 0!==i&&{speedThreshold:i})}}return(0,a.useEffect)((function(){if(y){var e=g();A.current=new b,A.current.start({map:r,options:e,messages:l,status:c,onStateChange:m,onLocationError:h})}return function(){var e;null===(e=A.current)||void 0===e||e.clear()}}),[y]),(0,a.useEffect)((function(){var e,t=g();null===(e=A.current)||void 0===e||e.update({status:c,messages:l,options:t})}),[c,l,y,s]),null})),priority:1}},reducers:{locate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{state:"DISABLED"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return M()({},e,{state:t.state});case f:return M()({},e,{error:t.error});default:return e}}}})},481756:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(171703),o=n(805346);const i=(0,r.connect)((function(e){return{locale:e.locale&&e.locale.currentLocale,messages:e.locale&&e.locale.messages||[]}}))(o.Z)},166241:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(923645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".msgapi #locate-btn {\n    position: absolute;\n    z-index: 1000;\n    right: 10px;\n    bottom: 150px;\n}\n\n.msgapi #mapstore-toolbar #locate-btn {\n    position: static;\n}\n",""]);const i=o},923645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},893379:(e,t,n)=>{"use strict";var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var c=e[o],l=t.base?c[0]+t.base:c[0],s=n[l]||0,u="".concat(l," ").concat(s);n[l]=s+1;var f=a(u),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(i[f].references++,i[f].updater(p)):i.push({identifier:u,updater:y(p,t),references:1}),r.push(u)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,u=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var A=null,d=0;function y(e,t){var n,r,o;if(t.singleton){var i=d++;n=A||(A=l(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=l(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var l=c(e,t),s=0;s<n.length;s++){var u=a(n[s]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=l}}}},97671:e=>{e.exports="data:image/gif;base64,R0lGODlhEAALAPQAAP///zMzM+Hh4dnZ2e7u7jc3NzMzM1dXV5qamn9/f8fHx05OTm5ubqGhoYKCgsrKylFRUTY2NnFxcerq6t/f3/b29l9fX+Li4vT09MTExLKystTU1PHx8QAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCwAAACwAAAAAEAALAAAFLSAgjmRpnqSgCuLKAq5AEIM4zDVw03ve27ifDgfkEYe04kDIDC5zrtYKRa2WQgAh+QQJCwAAACwAAAAAEAALAAAFJGBhGAVgnqhpHIeRvsDawqns0qeN5+y967tYLyicBYE7EYkYAgAh+QQJCwAAACwAAAAAEAALAAAFNiAgjothLOOIJAkiGgxjpGKiKMkbz7SN6zIawJcDwIK9W/HISxGBzdHTuBNOmcJVCyoUlk7CEAAh+QQJCwAAACwAAAAAEAALAAAFNSAgjqQIRRFUAo3jNGIkSdHqPI8Tz3V55zuaDacDyIQ+YrBH+hWPzJFzOQQaeavWi7oqnVIhACH5BAkLAAAALAAAAAAQAAsAAAUyICCOZGme1rJY5kRRk7hI0mJSVUXJtF3iOl7tltsBZsNfUegjAY3I5sgFY55KqdX1GgIAIfkECQsAAAAsAAAAABAACwAABTcgII5kaZ4kcV2EqLJipmnZhWGXaOOitm2aXQ4g7P2Ct2ER4AMul00kj5g0Al8tADY2y6C+4FIIACH5BAkLAAAALAAAAAAQAAsAAAUvICCOZGme5ERRk6iy7qpyHCVStA3gNa/7txxwlwv2isSacYUc+l4tADQGQ1mvpBAAIfkECQsAAAAsAAAAABAACwAABS8gII5kaZ7kRFGTqLLuqnIcJVK0DeA1r/u3HHCXC/aKxJpxhRz6Xi0ANAZDWa+kEAA7AAAAAAAAAAAA"}}]);