(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[37161,45992,7654],{921914:(t,e,r)=>{"use strict";r.d(e,{XL:()=>o,km:()=>i,Ih:()=>u,Xw:()=>a,Pn:()=>c,DZ:()=>s,e8:()=>f,E0:()=>l,F9:()=>p,X_:()=>m,pb:()=>y,qb:()=>d,Re:()=>v,ih:()=>E,xy:()=>b,jL:()=>h,oz:()=>O,ph:()=>g,lF:()=>_,gG:()=>I,cb:()=>T,GI:()=>P,B1:()=>q,fv:()=>N,gc:()=>S,zX:()=>R,ZF:()=>w,Zb:()=>F,DW:()=>A,Xp:()=>M,Fm:()=>j,sV:()=>D,Mn:()=>C,LU:()=>G,XP:()=>L,WU:()=>k,JB:()=>U,g:()=>Y,ws:()=>H,HP:()=>x,aN:()=>Z,Pg:()=>W,u0:()=>X,TM:()=>K,PM:()=>Q,lK:()=>V,sv:()=>z,MO:()=>J,oO:()=>$,Mc:()=>tt,Zw:()=>et,RA:()=>rt,am:()=>nt,ZM:()=>ot,wm:()=>it,Y$:()=>ut,Qu:()=>at,kT:()=>ct});var n=r(647310),o="LOAD_FEATURE_INFO",i="ERROR_FEATURE_INFO",u="EXCEPTIONS_FEATURE_INFO",a="CHANGE_MAPINFO_STATE",c="NEW_MAPINFO_REQUEST",s="PURGE_MAPINFO_RESULTS",f="CHANGE_MAPINFO_FORMAT",l="SHOW_MAPINFO_MARKER",p="HIDE_MAPINFO_MARKER",m="SHOW_REVERSE_GEOCODE",y="HIDE_REVERSE_GEOCODE",d="GET_VECTOR_INFO",v="NO_QUERYABLE_LAYERS",E="CLEAR_WARNING",b="FEATURE_INFO_CLICK",h="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",O="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",g="TOGGLE_MAPINFO_STATE",_="UPDATE_CENTER_TO_MARKER",I="IDENTIFY:CHANGE_PAGE",T="IDENTIFY:CLOSE_IDENTIFY",P="IDENTIFY:CHANGE_FORMAT",q="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",N="IDENTIFY:EDIT_LAYER_FEATURES",S="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",R="IDENTIFY:SET_MAP_TRIGGER",w="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",F="IDENTIFY:SET_SHOW_IN_MAP_POPUP",A="IDENTIFY:IDENTIFY_IS_MOUNTED",M="IDENTIFY:INIT_PLUGIN";function j(t,e,r,n,i){return{type:o,data:e,reqId:t,requestParams:r,layerMetadata:n,layer:i}}function D(t,e,r,n){return{type:i,error:e,reqId:t,requestParams:r,layerMetadata:n}}function C(t,e,r,n){return{type:u,reqId:t,exceptions:e,requestParams:r,layerMetadata:n}}function G(){return{type:v}}function L(){return{type:E}}function k(t,e){return{type:c,reqId:t,request:e}}function U(t,e,r,n){return{type:d,layer:t,request:e,metadata:r,queryableLayers:n}}function Y(){return{type:s}}function H(t){return{type:f,infoFormat:t}}function x(){return{type:l}}function Z(){return{type:p}}function B(t){return{type:m,reverseGeocodeData:t.data}}function W(t){return function(e){n.Z.reverseGeocode(t).then((function(t){e(B(t))})).catch((function(t){e(B(t))}))}}function X(){return{type:y}}function K(){return{type:g}}function Q(t){return{type:_,status:t}}function V(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{type:b,point:t,layer:e,filterNameList:r,overrideParams:n,itemId:o}}function z(t){return{type:h,point:t}}function J(t){return{type:O,enabled:t}}function $(t){return{type:I,index:t}}var tt=function(){return{type:T}},et=function(t){return{type:P,format:t}},rt=function(t){return{type:q,showCoordinateEditor:t}},nt=function(t){return{type:N,layer:t}},ot=function(t){return{type:S,query:t}},it=function(t){return{type:R,trigger:t}},ut=function(t){return{type:F,value:t}},at=function(t){return{type:A,isMounted:t}},ct=function(t){return{type:M,cfg:t}}},647310:(t,e,r)=>{"use strict";r.d(e,{Z:()=>f});var n=r(375875),o=r.n(n),i=r(472500),u=r.n(i),a=r(727418),c=r.n(a),s={format:"json",bounded:0,polygon_geojson:1,priority:5};const f={geocode:function(t,e){var r=c()({q:t},s,e||{}),n=u().format({protocol:"https",host:"nominatim.openstreetmap.org",query:r});return o().get(n)},reverseGeocode:function(t,e){var r=c()({lat:t.lat,lon:t.lng},e||{},s),n=u().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:r});return o().get(n)}}},615402:(t,e,r)=>{"use strict";r.d(e,{Z:()=>E});var n=r(675263),o=r.n(n),i=r(124852),u=r.n(i);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,y(n.key),n)}}function f(t,e){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},f(t,e)}function l(t,e){if(e&&("object"===a(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}function m(t,e,r){return(e=y(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function y(t){var e=function(t,e){if("object"!==a(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e);if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===a(e)?e:String(e)}var d=r(868195).FormattedHTMLMessage,v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&f(t,e)}(a,t);var e,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=p(n);if(o){var r=p(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return l(this,t)});function a(){return c(this,a),i.apply(this,arguments)}return e=a,(r=[{key:"render",value:function(){return this.context.intl?u().createElement(d,{id:this.props.msgId,values:this.props.msgParams}):u().createElement("span",null,this.props.msgId||"")}}])&&s(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(u().Component);m(v,"propTypes",{msgId:o().string.isRequired,msgParams:o().object}),m(v,"contextTypes",{intl:o().object});const E=v},48507:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>n});const n=function(){return r(935701),{Map:r(739726).Z,Layer:r(152792).Z,Feature:r(444948).Z,MeasurementSupport:r(442047).Z,Overview:r(521975),ScaleBar:r(20564),DrawSupport:r(791753).Z,PopupSupport:r(967465).Z}}},808797:(t,e,r)=>{"use strict";r.d(e,{rp:()=>c,Ov:()=>f,wd:()=>l,L0:()=>p}),r(701469);var n=r(91175),o=r.n(n),i=r(807654),u=r.n(i);function a(t){var e=Math.floor(t),r=60*(t-e),n=Math.floor(r),o=60*(r-n);return e+"° "+n+"' "+Math.floor(o)+"'' "}function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.measureTrueBearing,n=void 0!==r&&r,o=e.fractionDigits,i=void 0===o?0:o,u="";if(n){var c="";t>=0&&t<10?c="00":t>10&&t<100&&(c="0");var s=i>0?t.toFixed(i):Math.floor(t);u=c+s+"°"}else t>=0&&t<90?u="N "+a(t)+"E":t>90&&t<=180?u="S "+a(180-t)+"E":t>180&&t<270?u="S "+a(t-180)+"W":t>=270&&t<=360&&(u="N "+a(360-t)+"W");return u}var s={yd:{ft:3,m:.9144,km:9144e-7,yd:1,mi:.00056818181818,nm:.00049373650107},ft:{ft:1,m:.3048,km:3048e-7,yd:.33333333333334,mi:.0001893932,nm:164579e-9},m:{ft:3.28084,m:1,km:.001,yd:1.0936132983377,mi:621371e-9,nm:.000539956803},km:{ft:3280.84,m:1e3,km:1,yd:1093.6132983377,mi:.62137121212121,nm:.5399568207343395},mi:{ft:5280.000168959982,m:1609.3440514990027,km:1.6093440514990027,yd:1760,mi:1,nm:.8689762697078849},nm:{ft:6076.115679999979,m:1852.0000592639938,km:1.8520000592639938,yd:2025.3718285214,mi:1.150779484848481,nm:1},sqft:{sqft:1,sqm:.09290304,sqkm:9.2903043596611e-8,sqmi:3.587e-8,sqnm:2.7051601137505e-8},sqyd:{sqft:8.9999247491639,sqm:.83612040133779,sqkm:8.3612040133779e-7,sqyd:1,sqmi:3.228278917579e-7,sqnm:2.4346237458194e-7},sqm:{sqft:10.76391,sqm:1,sqkm:1e-6,sqyd:1.196,sqmi:3.8610215854245e-7,sqnm:2.91181e-7},sqkm:{sqft:10763910,sqm:1e6,sqkm:1,sqyd:1196e3,sqmi:.38610215854245,sqnm:.291181},sqmi:{sqft:27878398.920726,sqm:2589988.110336,sqkm:2.589988110336,sqyd:27878398.920726,sqmi:1,sqnm:.75415532795574},sqnm:{sqft:36966388.603652,sqm:3434290.0120544,sqkm:3.4342900120544,sqyd:36966388.603652,sqmi:1.325986786715,sqnm:1}};function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"m",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"m";return s[e]&&s[e][r]?t*s[e][r]:t}var l=function(t){return!u()(parseFloat(t[0]))&&!u()(parseFloat(t[1]))},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.coordinates,r=t.type,n=e;if("LineString"===r){if((n=e.filter(l)).length<2)return[]}else if("Polygon"===r){if((n=o()(e).filter(l)).length<3)return[[]];n=[n.concat([o()(n)])]}return n}},45992:(t,e,r)=>{"use strict";r.d(e,{h:()=>l,Z:()=>p});var n=r(535937),o=r.n(n),i=r(836882),u=r(737275);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==a(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e);if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===a(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var l=function(t,e){var r,n,a,c,f=i.Z;if("custom"===t)r=e;else if(a=(c=t.split("."))[0],n=c[1],!(r=f[a]))throw new Error("No such provider ("+a+")");var l={url:r.url,options:r.options||{}};if(n&&"variants"in r){if(!(n in r.variants))throw new Error("No such variant of "+(a||r.url)+" ("+n+")");var p,m=r.variants[n];p="string"==typeof m?{variant:m}:m.options,l={url:m.url||l.url,options:s(s({},l.options||{}),p)}}else"function"==typeof l.url&&(l.url=l.url(c.splice(1,c.length-1).join(".")));var y="file:"===window.location.protocol||l.options.forceHTTP;0===l.url.indexOf("//")&&y&&(l.url="http:"+l.url),l.options.retina&&(e.detectRetina&&u.ZP.getBrowserProperties().retina?e.detectRetina=!1:l.options.retina=""),l.options.attribution&&(l.options.attribution=function t(e){return-1===e.indexOf("{attribution.")?e:e.replace(/\{attribution.(\w*)\}/,(function(e,r){return t(f[r].options.attribution)}))}(l.options.attribution));var d=s(s({},l.options),o()(e,(function(t){return void 0!==t})));return[l.url,d]};const p={getLayerConfig:l}},923645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=t(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(t,r,n){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var u=this[i][0];null!=u&&(o[u]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);n&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),e.push(c))}},e}},807654:(t,e,r)=>{var n=r(281763);t.exports=function(t){return n(t)&&t!=+t}},893379:(t,e,r)=>{"use strict";var n,o=function(){var t={};return function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}t[e]=r}return t[e]}}(),i=[];function u(t){for(var e=-1,r=0;r<i.length;r++)if(i[r].identifier===t){e=r;break}return e}function a(t,e){for(var r={},n=[],o=0;o<t.length;o++){var a=t[o],c=e.base?a[0]+e.base:a[0],s=r[c]||0,f="".concat(c," ").concat(s);r[c]=s+1;var l=u(f),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==l?(i[l].references++,i[l].updater(p)):i.push({identifier:f,updater:d(p,e),references:1}),n.push(f)}return n}function c(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var i=r.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var u=o(t.insert||"head");if(!u)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");u.appendChild(e)}return e}var s,f=(s=[],function(t,e){return s[t]=e,s.filter(Boolean).join("\n")});function l(t,e,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=f(e,o);else{var i=document.createTextNode(o),u=t.childNodes;u[e]&&t.removeChild(u[e]),u.length?t.insertBefore(i,u[e]):t.appendChild(i)}}function p(t,e,r){var n=r.css,o=r.media,i=r.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var m=null,y=0;function d(t,e){var r,n,o;if(e.singleton){var i=y++;r=m||(m=c(e)),n=l.bind(null,r,i,!1),o=l.bind(null,r,i,!0)}else r=c(e),n=p.bind(null,r,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var r=a(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<r.length;n++){var o=u(r[n]);i[o].references--}for(var c=a(t,e),s=0;s<r.length;s++){var f=u(r[s]);0===i[f].references&&(i[f].updater(),i.splice(f,1))}r=c}}}}}]);