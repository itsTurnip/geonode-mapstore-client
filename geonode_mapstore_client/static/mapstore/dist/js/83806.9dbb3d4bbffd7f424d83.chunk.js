(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[83806],{57604:(t,e,r)=>{"use strict";r.d(e,{XV:()=>n,mE:()=>o,at:()=>i,mD:()=>a,jw:()=>u,yR:()=>c,pF:()=>l,PZ:()=>s});var n="DIMENSION:UPDATE_LAYER_DIMENSION_DATA",o="TIME_MANAGER:SET_CURRENT_TIME",i="TIME_MANAGER:SET_OFFSET_TIME",a="TIME_MANAGER:MOVE_TIME",u=function(t,e,r){return{type:n,dimension:e,layerId:t,data:r}},c=function(t){return{type:o,time:t}},l=function(t){return{type:i,offsetTime:t}},s=function(t){return{type:a,time:t}}},162187:(t,e,r)=>{"use strict";r.d(e,{NH:()=>n,E7:()=>o,N7:()=>i,L9:()=>a,hQ:()=>u,NC:()=>c,c9:()=>l,up:()=>s,AN:()=>p,FZ:()=>f,Fi:()=>y,KB:()=>m,E0:()=>b,Q_:()=>d,hY:()=>v,wO:()=>h,sT:()=>E,wR:()=>O,h1:()=>g,hS:()=>S,zK:()=>P,VS:()=>w,oz:()=>T,FH:()=>j,XN:()=>A,Ym:()=>I,RQ:()=>N});var n="PLAYBACK:START",o="PLAYBACK:PAUSE",i="PLAYBACK:STOP",a="PLAYBACK:SET_FRAMES",u="PLAYBACK:APPEND_FRAMES",c="PLAYBACK:FRAMES_LOADING",l="PLAYBACK:SET_CURRENT_FRAME",s="PLAYBACK:SELECT_PLAYBACK_RANGE",p="PLAYBACK:SET_INTERVAL_DATA",f="PLAYBACK:SETTINGS_CHANGE",y="PLAYBACK:TOGGLE_ANIMATION_MODE",m="PLAYBACK:ANIMATION_STEP_MOVE",b="PLAYBACK:UPDATE_METADATA",d={PLAY:"PLAY",STOP:"STOP",PAUSE:"PAUSE"},v=function(){return{type:n}},h=function(){return{type:o}},E=function(){return{type:i}},O=function(t){return{type:a,frames:t}},g=function(t){return{type:l,frame:t}},S=function(t){return{type:u,frames:t}},P=function(t){return{type:c,loading:t}},w=function(t){return{type:s,range:t}},T=function(t,e){return{type:f,name:t,value:e}},j=function(){return{type:y}},A=function(t){return{type:m,direction:t}},I=function(t){var e=t.next,r=t.previous,n=t.forTime;return{type:b,forTime:n,next:e,previous:r}},N=function(t){return{type:p,timeIntervalData:t}}},757676:(t,e,r)=>{"use strict";r.d(e,{qx:()=>n,HM:()=>o,Lv:()=>i,y3:()=>a,iv:()=>u,cO:()=>c,br:()=>l,aA:()=>s,Xe:()=>p,Nb:()=>f,_V:()=>y,kq:()=>m,JU:()=>b,PQ:()=>d,cb:()=>v,KI:()=>h,lz:()=>E,m7:()=>O,Wb:()=>g,Hz:()=>S,M5:()=>P,w2:()=>w,w:()=>T,Z7:()=>j,p:()=>A,_e:()=>I});var n="TIMELINE:SELECT_TIME",o=function(t,e,r,o){return{type:n,time:t,group:e,what:r,item:o}},i="TIMELINE:RANGE_CHANGE",a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.start,r=t.end;return{type:i,start:e,end:r}},u="TIMELINE:RANGE_DATA_LOADED",c=function(t,e,r,n){return{type:u,layerId:t,range:e,histogram:r,domain:n}},l="TIMELINE:LOADING",s=function(t,e){return{type:l,layerId:t,loading:e}},p="TIMELINE:INIT_SELECT_LAYER",f=function(t){return{type:p,layerId:t}},y="TIMELINE:SELECT_LAYER",m=function(t){return{type:y,layerId:t}},b="TIMELINE:ENABLE_OFFSET",d=function(t){return{type:b,enabled:t}},v="TIMELINE:AUTOSELECT",h=function(){return{type:v}},E="TIMELINE:SET_SNAP_TYPE",O=function(t){return{type:E,snapType:t}},g="TIMELINE:SET_END_VALUES_SUPPORT",S=function(t){return{type:g,endValuesSupport:t}},P="TIMELINE:SET_COLLAPSED",w=function(t){return{type:P,collapsed:t}},T="TIMELINE:SET_MAP_SYNC",j=function(t){return{type:T,mapSync:t}},A="TIMELINE:INIT_TIMELINE",I=function(t,e,r,n){return{type:A,showHiddenLayers:t,expandLimit:e,snapType:r,endValuesSupport:n}}},496361:(t,e,r)=>{"use strict";r.d(e,{i8:()=>d,ot:()=>v,Ci:()=>h,CX:()=>E});var n=r(666654),o=r.n(n),i=r(313880),a=r.n(i),u=r(49977),c=r(375875),l=r.n(c),s=r(510284);function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==p(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e);if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===p(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var b=function(t){return Object.keys(t).reduce((function(e,r){return void 0!==t[r]&&null!==t[r]?y(y({},e),{},m({},r,t[r])):e}),{})},d=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=n.service,i=void 0===o?"WMTS":o,a=n.version,c=void 0===a?"1.0.0":a,p=n.tileMatrixSet,f=void 0===p?"EPSG:4326":p,m=n.bbox,d=n.domains,v=n.expandLimit;return u.Observable.defer((function(){return l().get(t,{params:b(y({service:i,REQUEST:"DescribeDomains",version:c,layer:e,tileMatrixSet:f,bbox:m,domains:d,expandLimit:v},r))})})).let(s.oB).switchMap((function(t){return(0,s.sw)(t.data)}))},v=function(t,e,r,n,o){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},a=i.service,c=void 0===a?"WMTS":a,p=i.version,f=void 0===p?"1.1.0":p,m=i.tileMatrixSet,d=void 0===m?"EPSG:4326":m,v=i.bbox;return u.Observable.defer((function(){return l().get(t,{params:b(y({service:c,REQUEST:"GetHistogram",resolution:o,histogram:r,version:f,layer:e,tileMatrixSet:d,bbox:v},n))})})).let(s.oB).switchMap((function(t){return(0,s.sw)(t.data)}))},h=function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=n.time,i=n.fromValue,a=n.sort,c=void 0===a?"asc":a,p=n.limit,f=void 0===p?20:p,y=n.fromEnd,m=void 0!==y&&y,d=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},v=d.bbox,h=d.tileMatrixSet,E=void 0===h?"EPSG:4326":h,O=d.service,g=void 0===O?"WMTS":O,S=d.version,P=void 0===S?"1.0.0":S;return u.Observable.defer((function(){return l().get(t,{params:b({service:g,version:P,request:"GetDomainValues",tileMatrixSet:E,bbox:v,layer:e,domain:r,fromValue:i,sort:c,limit:f,fromEnd:m,time:o})})})).let(s.oB).switchMap((function(t){return(0,s.sw)(t.data)}))},E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.url;return o()(e,"/wms")?a()(e,/\/wms$/,"/gwc/service/wmts"):o()(e,"/ows")?a()(e,/\/ows$/,"/gwc/service/wmts"):e}},532425:(t,e,r)=>{"use strict";r.d(e,{Z:()=>y});var n=r(675263),o=r.n(n),i=r(124852),a=r.n(i);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e);if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===u(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p=function(t){return t>100?"full":t>40?"medium":"small"},f=function(t){var e=t.size,r=t.style,n=void 0===r?{}:r,o=t.className,i=t.hidden;return a().createElement("div",{className:o,style:l({width:e,height:e,overflow:"hidden"},n)},!i&&a().createElement("div",{className:"mapstore-".concat(p(e),"-size-loader")}))};f.propTypes={size:o().number,className:o().string,style:o().object};const y=f},352595:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});const n=(0,r(461365).Z)(r(757588).Overlay)},212610:(t,e,r)=>{"use strict";r.d(e,{Z:()=>l});var n=r(124852),o=r.n(n),i=r(867076),a=r(957557),u=r.n(a),c=r(815135);const l=(0,i.branch)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.disabled,r=t.noTooltipWhenDisabled,n=void 0!==r&&r;return!(n&&e)}),c.Z,(function(t){return function(e){return o().createElement(t,u()(e,["tooltipId","tooltip","noTooltipWhenDisabled"]),e.children)}}))},617252:(t,e,r)=>{"use strict";r.d(e,{Z:()=>O});var n=r(124852),o=r.n(n),i=r(867076),a=r(675263),u=r.n(a),c=r(957557),l=r.n(c),s=r(757588),p=r(950966);function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,E(n.key),n)}}function b(t,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},b(t,e)}function d(t,e){if(e&&("object"===f(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}function h(t,e,r){return(e=E(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function E(t){var e=function(t,e){if("object"!==f(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e);if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===f(e)?e:String(e)}const O=(0,i.branch)((function(t){return t.popover}),(function(t){var e;return e=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}(f,e);var r,n,a,u,c=(a=f,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=v(a);if(u){var r=v(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return d(this,t)});function f(){return y(this,f),c.apply(this,arguments)}return r=f,(n=[{key:"renderPopover",value:function(){return o().createElement(s.Popover,l()(this.props.popover,["trigger","placement","text"]),this.props.popover.text)}},{key:"renderContent",value:function(){var e=(0,i.toClass)(t);return o().createElement(e,l()(this.props,["popover"]))}},{key:"render",value:function(){var t=!0===this.props.popover.trigger?["hover","focus"]:this.props.popover.trigger;return o().createElement("span",null,o().createElement(p.Z,{trigger:t,placement:this.props.popover.placement,overlay:this.renderPopover()},this.renderContent()))}}])&&m(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),f}(o().Component),h(e,"propTypes",{popover:u().object}),h(e,"defaultProps",{popover:{trigger:!0}}),e}))},80717:(t,e,r)=>{"use strict";r.d(e,{Z:()=>f});var n=r(124852),o=r.n(n),i=r(819081),a=r.n(i),u=r(757588),c=r(90085),l=["visible","Element","renderButton"];function s(){return s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},s.apply(this,arguments)}function p(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}const f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.buttons,r=void 0===e?[]:e,n=t.btnGroupProps,i=void 0===n?{}:n,f=t.btnDefaultProps,y=void 0===f?{}:f,m=t.transitionProps,b=void 0===m?{transitionName:"toolbar-btn-transition",transitionEnterTimeout:300,transitionLeaveTimeout:300}:m,d=function(){return r.map((function(t,e){var r=t.visible,n=void 0===r||r,i=t.Element,a=t.renderButton,u=p(t,l);return n?a||i&&o().createElement(i,s({key:u.key||e},u))||o().createElement(c.Z,s({key:u.key||e},y,u)):null}))};return o().createElement(u.ButtonGroup,i,b?o().createElement(a(),b,d()):d())}},90085:(t,e,r)=>{"use strict";r.d(e,{Z:()=>v});var n=r(124852),o=r.n(n),i=r(867076),a=r(805346),u=r(957557),c=r.n(u),l=r(757588),s=r(532425),p=r(212610),f=r(617252),y=r(282467),m=["glyph","loading","text","textId","glyphClassName","loaderProps","children"];function b(){return b=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},b.apply(this,arguments)}function d(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}const v=(0,i.compose)(p.Z,f.Z)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.glyph,r=t.loading,n=t.text,i=void 0===n?"":n,u=t.textId,p=t.glyphClassName,f=void 0===p?"":p,v=t.loaderProps,h=void 0===v?{}:v,E=t.children,O=d(t,m);return o().createElement(y.Z,c()(O,["pullRight","confirmNo","confirmYes"]),e&&!r?o().createElement(l.Glyphicon,{glyph:e,className:f}):null,u?o().createElement(a.Z,{msgId:u}):i,r?o().createElement(s.Z,b({className:"ms-loader".concat(O.bsStyle&&" ms-loader-"+O.bsStyle||"").concat(O.bsSize&&" ms-loader-"+O.bsSize||"")},h)):null,E)}))},365295:(t,e,r)=>{"use strict";r.d(e,{Z:()=>A});var n=r(124852),o=r.n(n),i=r(532475),a=r.n(i),u=r(414293),c=r.n(u),l=r(675263),s=r.n(l),p=r(730381),f=r.n(p),y=r(757588),m=r(815135),b=r(282467);function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,w(n.key),n)}}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function O(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return g(t)}function g(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}function P(t,e,r){return(e=w(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function w(t){var e=function(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e);if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===d(e)?e:String(e)}var T=(0,m.Z)(y.Glyphicon),j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(l,t);var e,r,n,i,u=(n=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(n);if(i){var r=S(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return O(this,t)});function l(){var t;v(this,l);for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return P(g(t=u.call.apply(u,[this].concat(r))),"onUpdate",(function(e,r){var n=f()(t.props.date).utc(),o=r?f()(n).add(1,e):f()(n).subtract(1,e);o.isValid()&&!isNaN(o.toDate().getTime())&&t.props.onUpdate(o.toISOString())})),P(g(t),"onChange",(function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t};if(""!==r){var o=f()(t.props.date).utc(),i=o["day"===e?"date":e]&&f()(o)["day"===e?"date":e](n(r));i.isValid()&&!isNaN(i.toDate().getTime())&&t.props.onUpdate(i.toISOString())}})),P(g(t),"getForm",(function(){var e=t.props.date&&f()(t.props.date).utc();return[{name:"icon",value:"calendar",type:"icon"},{name:"day",placeholder:"DD",value:e&&e.date()},{name:"month",placeholder:"MM",readOnly:!0,value:e&&e.month(),format:function(t){return!c()(t)&&""!==t&&f().monthsShort(t)},parseValue:function(t){return t-1}},{name:"year",placeholder:"YYYY",value:e&&e.year()},{name:"icon",value:"time",type:"icon"},{name:"hours",placeholder:"hh",value:e&&e.hours()},{name:"separator",value:":",type:"separator"},{name:"minutes",placeholder:"mm",value:e&&e.minutes()},{name:"separator",value:":",type:"separator"},{name:"seconds",placeholder:"ss",value:e&&e.seconds()},{name:"separator",value:e&&e.utcOffset(),type:"separator",format:function(t){return"UTC "+(t>=0?"+":"-")+a()(t/60,2,0)}}]})),t}return e=l,(r=[{key:"render",value:function(){var t=this,e=this.getForm();return o().createElement(y.Form,{className:"ms-inline-datetime ".concat(this.props.className),style:this.props.style},o().createElement(y.FormGroup,{controlId:"inlineDateTime"},this.props.glyph&&o().createElement("div",{style:this.props.clickable?{cursor:"pointer"}:{},onClick:function(){return t.props.clickable&&t.props.onIconClick(t.props.date,t.props.glyph)}},o().createElement(T,{tooltip:this.props.clickable?this.props.tooltip:void 0,tooltipId:this.props.clickable?this.props.tooltipId:void 0,className:"ms-inline-datetime-icon",glyph:this.props.glyph})),e.map((function(e){return"icon"===e.type&&o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(e.name)},o().createElement(T,{glyph:e.value}))||"separator"===e.type&&o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(e.name)},e.format&&e.format(e.value)||e.value)||o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(e.name)},t.props.showButtons&&o().createElement(b.Z,{bsSize:"xs",disabled:!t.props.date,onClick:function(){return t.onUpdate(e.name,!0)}},o().createElement(T,{glyph:"chevron-up"})),o().createElement(y.FormControl,{type:"text",readOnly:e.readOnly,placeholder:e.placeholder||e.name,disabled:!t.props.date,value:e.format&&e.format(e.value)||e.value,onChange:function(r){return t.onChange(e.name,r.target.value,e.parseValue)}}),t.props.showButtons&&o().createElement(b.Z,{bsSize:"xs",disabled:!t.props.date,onClick:function(){return t.onUpdate(e.name)}},o().createElement(T,{glyph:"chevron-down"})))}))))}}])&&h(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),l}(o().Component);P(j,"propTypes",{date:s().string,clickable:s().bool,onUpdate:s().func,onIconClick:s().func,glyph:s().string,style:s().object,className:s().string,tooltip:s().string,tooltipId:s().string,showButtons:s().bool}),P(j,"defaultProps",{date:"",onIconClick:function(){},clickable:!1,onUpdate:function(){},glyph:"time",style:{},className:"",tooltip:""});const A=j},589919:(t,e,r)=>{"use strict";r.d(e,{hP:()=>s});var n=r(984596),o=r.n(n),i=r(49977),a=r.n(i);function u(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.startWith.apply(t,u(e))},s=function(t,e,r){return function(n){return(r?l(n,o()(t)).catch(r):l(n,o()(t))).concat(a().Observable.from(o()(e)))}}},50886:(t,e,r)=>{"use strict";r.d(e,{w:()=>b});var n=r(49977),o=r.n(n),i=r(496361),a=r(55237);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,e)||y(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e);if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===u(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function f(t){return function(t){if(Array.isArray(t))return m(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||y(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){if(t){if("string"==typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(t,e):void 0}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var b=function(t,e,r,n,u){return o().Observable.forkJoin(i.Ci.apply(void 0,f(t(r,s({sort:"asc",fromValue:e?(0,a.p)(u,1e-4,"remove"):u},"end"===n?{fromEnd:!0}:{})))).map((function(t){return t.DomainValues.Domain.split(",")})).map((function(t){return c(t,1)[0]})).catch((function(t){return t&&o().Observable.of(null)})),i.Ci.apply(void 0,f(t(r,s({sort:"desc",fromValue:e?(0,a.p)(u,1e-4,"add"):u},"end"===n?{fromEnd:!0}:{})))).map((function(t){return t.DomainValues.Domain.split(",")})).map((function(t){return c(t,1)[0]})).catch((function(t){return t&&o().Observable.of(null)})))}},937307:(t,e,r)=>{"use strict";r.d(e,{Z:()=>y});var n=r(57604),o=r(580416),i=r(782904),a=r(761868),u=r(730381),c=r.n(u),l=r(66604),s=r.n(l),p=r(535937),f=r.n(p);const y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case n.XV:return(0,a.t8)("data[".concat(e.dimension,"][").concat(e.layerId,"]"),e.data,t);case n.mE:return(0,a.t8)("currentTime",e.time,t);case n.at:return(0,a.t8)("offsetTime",e.offsetTime,t);case n.mD:if(t.offsetTime&&t.currentTime){var r=c()(t.offsetTime).diff(t.currentTime),u=c()(e.time).add(r);return(0,a.t8)("currentTime",e.time,(0,a.t8)("offsetTime",u.toISOString(),t))}return(0,a.t8)("currentTime",e.time,t);case o.sb:var l=s()(t.data,(function(t){return f()(t,(function(t,r){return r!==e.node}))}));return(0,a.t8)("data",l,t);case i.l:return(0,a.t8)("data",void 0,(0,a.t8)("currentTime",void 0,(0,a.t8)("offsetTime",void 0,t)));default:return t}}},176843:(t,e,r)=>{"use strict";r.d(e,{z2:()=>o,V3:()=>i,dS:()=>a,yt:()=>c,E2:()=>l,Np:()=>s,KC:()=>p,Wq:()=>f,rp:()=>y,PF:()=>m});var n=r(22222),o=function(t){return t&&t.playback&&t.playback.settings},i=function(t){return(o(t)||{}).frameDuration||5},a=function(t){return t&&t.playback&&t.playback.status},u=function(t){return t&&t.playback&&t.playback.frames},c=function(t){var e=u(t)||[];return e[e.length-1]},l=function(t){return t&&t.playback&&t.playback.framesLoading},s=function(t){return t&&t.playback&&t.playback.currentFrame},p=function(t){return function(t){return t&&t.playback&&t.playback.playbackRange}(t)},f=function(t){return(u(t)||[])[s(t)]},y=function(t){return t&&t.playback&&t.playback.metadata},m=(0,n.P1)(u,s,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return{hasNext:t[e+1],hasPrevious:t[e-1]}}))},510284:(t,e,r)=>{"use strict";r.d(e,{sw:()=>v,oB:()=>h});var n=r(49977),o=r.n(n),i=r(227361),a=r.n(i),u=r(505055),c=r(507526);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){if(e&&("object"===l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function p(t){var e="function"==typeof Map?new Map:void 0;return p=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return f(t,arguments,b(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),m(n,t)},p(t)}function f(t,e,r){return f=y()?Reflect.construct.bind():function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&m(o,r.prototype),o},f.apply(null,arguments)}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}function b(t){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},b(t)}r(324384);var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(i,t);var e,r,n,o=(e=i,r=y(),function(){var t,n=b(e);if(r){var o=b(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return s(this,t)});function i(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(r=o.call(this,t)).name="OGCError",r.code=e,r}return n=i,Object.defineProperty(n,"prototype",{writable:!1}),n}(p(Error)),v=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{tagNameProcessors:[c.stripPrefix],explicitArray:!1,mergeAttrs:!0};return o().Observable.bindNodeCallback((function(t,r){return(0,u.parseString)(t,e,r)}))(t)},h=function(t){return t.switchMap((function(t){return"string"==typeof t.data&&t.data.indexOf("ExceptionReport")>0?o().Observable.bindNodeCallback((function(t,e){return(0,u.parseString)(t,{tagNameProcessors:[c.stripPrefix],explicitArray:!1,mergeAttrs:!0},e)}))(t.data).map((function(t){var e=a()(t,"ExceptionReport.Exception.ExceptionText");throw new d(e||"Undefined OGC Service Error",a()(t,"ExceptionReport.Exception.exceptionCode"))})):o().Observable.of(t)}))}}}]);