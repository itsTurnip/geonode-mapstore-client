(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[31232],{587401:(e,t,r)=>{"use strict";r.d(t,{Z:()=>j});var n=r(675263),o=r.n(n),i=r(124852),c=r.n(i),u=r(757588);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,v(n.key),n)}}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function s(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function b(e,t,r){return(t=v(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===l(t)?t:String(t)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(l,e);var t,r,n,o,i=(n=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(n);if(o){var r=y(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return s(this,e)});function l(){var e;a(this,l);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return b(m(e=i.call.apply(i,[this].concat(r))),"onChange",(function(t){e.props.onChange(t.target.value)})),e}return t=l,(r=[{key:"render",value:function(){var e=this.props.items.map((function(e){return c().createElement("option",{key:e.value,value:e.value},e.name)}));return c().createElement(u.FormGroup,null,this.props.label?c().createElement(u.ControlLabel,null,this.props.label):null,c().createElement(u.FormControl,{ref:"input",value:this.props.selected,componentClass:"select",onChange:this.onChange},e))}}])&&p(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(c().Component);b(d,"propTypes",{items:o().array,label:o().string,onChange:o().func,selected:o().string}),b(d,"defaultProps",{items:[],label:"Choice",onChange:function(){},selected:""});const j=d},294883:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Projection:()=>P,default:()=>S});var n=r(124852),o=r.n(n),i=r(675263),c=r.n(i),u=r(171703),l=r(322843),a=r(134049),p=r(986069),f=r(145959),s=r(587401),m=r(86638),y=r(552259),b=r(986267);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==v(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===v(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=function(e){var t,r,n,o,i,c,u;return null!==(t=null!==(r=null==e||null===(n=e.print)||void 0===n||null===(o=n.spec)||void 0===o||null===(i=o.params)||void 0===i?void 0:i.projection)&&void 0!==r?r:null==e||null===(c=e.print)||void 0===c||null===(u=c.map)||void 0===u?void 0:u.projection)&&void 0!==t?t:"EPSG:3857"};function O(e,t){var r=g(e),n=(0,a.mapProjectionSelector)(e),o=(0,b.normalizeSRS)(r),i=(0,b.normalizeSRS)(n);if(o!==i){var c=(0,y.reprojectZoom)(t.scaleZoom,i,o),u=(0,y.getScales)(o);return j(j({},t),{},{zoom:c,scaleZoom:c,scale:u[c],projection:o})}return t}var P=function(e,t){var r,i,c=e.projection,u=e.items,l=e.onChangeParameter,p=e.allowPreview,f=void 0!==p&&p,y=e.projections,v=e.onRefresh,d=void 0===v?function(){}:v;return(0,n.useEffect)((function(){(0,a.addValidator)("projection","map-preview",function(e){return function(t){var r=g(t),n=(0,a.mapProjectionSelector)(t);return e||(0,b.normalizeSRS)(r)===(0,b.normalizeSRS)(n)?{valid:!0}:{valid:!1,errors:["print.projectionmismatch"]}}}(f))}),[f]),(0,n.useEffect)((function(){(0,a.addMapTransformer)("projection",O)}),[]),o().createElement(o().Fragment,null,o().createElement(s.Z,{selected:c,onChange:function(e){l("params.projection",e),d()},items:(r=u,i=y,i?i.filter((function(e){return r.find((function(t){return t.value===e.value}))})):r),label:(0,m.S$)(t.messages,"print.projection")}))};P.contextTypes={messages:c().object};const S=(0,l.rx)("PrintProjection",{component:(0,u.connect)((function(e){var t,r;return{spec:(null==e||null===(t=e.print)||void 0===t?void 0:t.spec)||{},map:null==e||null===(r=e.print)||void 0===r?void 0:r.map,projection:g(e),items:Object.keys((0,b.getAvailableCRS)()).map((function(e){return{name:e,value:e}}))}}),{onChangeParameter:p.d$})(P),reducers:{print:f.Z},containers:{Print:{priority:1,target:"left-panel",position:4}}})},531351:e=>{var t=Array.prototype.reverse;e.exports=function(e){return null==e?e:t.call(e)}}}]);