(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[6699],{580416:(e,t,n)=>{"use strict";n.d(t,{yS:()=>r,Zz:()=>o,ms:()=>i,ih:()=>u,OX:()=>a,sb:()=>c,K$:()=>s,k7:()=>p,cX:()=>l,x9:()=>f,vs:()=>y,oE:()=>d,Po:()=>m,qv:()=>E,cI:()=>b,g6:()=>v,I4:()=>O,l$:()=>h,Xv:()=>g,k3:()=>_,CQ:()=>S,R8:()=>P,HN:()=>R,sH:()=>T,c7:()=>N,_7:()=>A,eF:()=>I,O6:()=>w,ED:()=>D,RP:()=>C,sF:()=>j,VP:()=>L,He:()=>M,vO:()=>F,WO:()=>G,bh:()=>x,pV:()=>Y,MK:()=>U,ZF:()=>H,tV:()=>k,Dv:()=>K,Yz:()=>V,kI:()=>Z,XG:()=>W,A4:()=>q,Rp:()=>X,$o:()=>B,ct:()=>z,oh:()=>$,$h:()=>Q,ud:()=>J,Qr:()=>ee,LR:()=>te,nN:()=>ne,UG:()=>re,F5:()=>oe,c9:()=>ie,Jh:()=>ue,Xy:()=>ae});var r="CHANGE_LAYER_PROPERTIES",o="LAYERS:CHANGE_LAYER_PARAMS",i="CHANGE_GROUP_PROPERTIES",u="TOGGLE_NODE",a="SORT_NODE",c="REMOVE_NODE",s="UPDATE_NODE",p="MOVE_NODE",l="LAYER_LOADING",f="LAYER_LOAD",y="LAYER_ERROR",d="ADD_LAYER",m="ADD_GROUP",E="REMOVE_LAYER",b="SHOW_SETTINGS",v="HIDE_SETTINGS",O="UPDATE_SETTINGS",h="REFRESH_LAYERS",g="LAYERS:UPDATE_LAYERS_DIMENSION",_="LAYERS_REFRESHED",S="LAYERS_REFRESH_ERROR",P="LAYERS:BROWSE_DATA",R="LAYERS:DOWNLOAD",T="LAYERS:CLEAR_LAYERS",N="LAYERS:SELECT_NODE",A="LAYERS:FILTER_LAYERS",I="LAYERS:SHOW_LAYER_METADATA",w="LAYERS:HIDE_LAYER_METADATA",D="LAYERS:UPDATE_SETTINGS_PARAMS";function C(e,t,n){return{type:b,node:e,nodeType:t,options:n}}function j(){return{type:v}}function L(e){return{type:O,options:e}}function M(e,t){return{type:r,newProperties:t,layer:e}}function F(e,t){return{type:o,layer:e,params:t}}function G(e,t){return{type:i,newProperties:t,group:e}}function x(e,t,n){return{type:u,node:e,nodeType:t,status:!n}}function Y(e){return{type:"CONTEXT_NODE",node:e}}function U(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:a,node:e,order:t,sortLayers:n}}function H(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return{type:c,node:e,nodeType:t,removeEmpty:n}}function k(e,t,n){return{type:s,node:e,nodeType:t,options:n}}function K(e,t,n){return{type:p,node:e,groupId:t,index:n}}function V(e){return{type:l,layerId:e}}function Z(e,t){return{type:f,layerId:e,error:t}}function W(e,t,n){return{type:y,layerId:e,tilesCount:t,tilesErrorCount:n}}function q(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return{type:d,layer:e,foreground:t}}function X(e,t,n){return{type:m,group:e,parent:t,options:n}}function B(e){return{type:E,layerId:e}}function z(e,t){return{type:r,layer:e,newProperties:{_v_:t||(new Date).getTime()}}}function $(e){return{type:_,layers:e}}function Q(e,t){return{type:S,layers:e,error:t}}function J(e,t,n,r){return{type:g,dimension:e,value:t,options:n,layers:r}}function ee(e){return{type:P,layer:e}}function te(e){return{type:R,layer:e}}function ne(){return{type:T}}function re(e,t,n){return{type:N,id:e,nodeType:t,ctrlKey:n}}function oe(e){return{type:A,text:e}}function ie(e,t){return{type:I,metadataRecord:e,maskLoading:t}}function ue(){return{type:w}}function ae(e,t){return{type:D,newParams:e,update:t}}},801550:(e,t,n)=>{"use strict";n.d(t,{pP:()=>r,TR:()=>o,N7:()=>i,mq:()=>u,uv:()=>a,Qy:()=>c,IL:()=>s,Li:()=>p,OW:()=>l,ZO:()=>f,Um:()=>y,TF:()=>d,Ls:()=>m,Ec:()=>E,Eu:()=>b,JJ:()=>v,nZ:()=>O,YD:()=>h,GI:()=>g,Jb:()=>_,Uh:()=>S,e$:()=>P,eh:()=>R,$j:()=>T,Mk:()=>N,xy:()=>A,o6:()=>I,FP:()=>w,Mo:()=>D,sO:()=>C,Px:()=>j,hd:()=>L,Ju:()=>M,BV:()=>F,SO:()=>G,H0:()=>x,$X:()=>Y,ou:()=>U,NE:()=>H});var r="CHANGE_MAP_VIEW",o="CLICK_ON_MAP",i="CHANGE_MOUSE_POINTER",u="CHANGE_ZOOM_LVL",a="PAN_TO",c="ZOOM_TO_EXTENT",s="ZOOM_TO_POINT",p="CHANGE_MAP_CRS",l="CHANGE_MAP_SCALES",f="CHANGE_MAP_STYLE",y="CHANGE_ROTATION",d="CREATION_ERROR_LAYER",m="UPDATE_VERSION",E="INIT_MAP",b="RESIZE_MAP",v="CHANGE_MAP_LIMITS",O="SET_MAP_RESOLUTIONS",h="REGISTER_EVENT_LISTENER",g="UNREGISTER_EVENT_LISTENER",_="MOUSE_MOVE",S="MOUSE_OUT",P="MAP:MAP_PLUGIN_LOAD",R="MAP:ORIENTATION",T="MAP:UPDATE_MAP_VIEW";function N(e,t,n,r){return{type:P,mapType:t,loading:e,loaded:n,error:r}}function A(e,t,n){return{type:s,pos:e,zoom:t,crs:n}}function I(e,t,n,o,i,u,a,c){return{type:r,center:e,zoom:t,bbox:n,size:o,mapStateSource:i,projection:u,viewerOptions:a,resolution:c}}function w(e,t){return{type:o,point:e,layer:t}}function D(e){return{type:i,pointer:e}}function C(e,t){return{type:u,zoom:e,mapStateSource:t}}function j(e,t,n,r){return{type:c,extent:e,crs:t,maxZoom:n,options:r}}function L(e,t){return{type:f,style:e,mapStateSource:t}}function M(){return{type:b}}function F(e){var t=e.restrictedExtent,n=e.crs,r=e.minZoom;return{type:v,restrictedExtent:t,crs:n,minZoom:r}}function G(e){return{type:O,resolutions:e}}var x=function(e,t){return{type:h,eventName:e,toolName:t}},Y=function(e,t){return{type:g,eventName:e,toolName:t}},U=function(e){return{type:_,position:e}},H=function(){return{type:S}}},921914:(e,t,n)=>{"use strict";n.d(t,{XL:()=>o,km:()=>i,Ih:()=>u,Xw:()=>a,Pn:()=>c,DZ:()=>s,e8:()=>p,E0:()=>l,F9:()=>f,X_:()=>y,pb:()=>d,qb:()=>m,Re:()=>E,ih:()=>b,xy:()=>v,jL:()=>O,oz:()=>h,ph:()=>g,lF:()=>_,gG:()=>S,cb:()=>P,GI:()=>R,B1:()=>T,fv:()=>N,gc:()=>A,zX:()=>I,ZF:()=>w,Zb:()=>D,DW:()=>C,Xp:()=>j,Fm:()=>L,sV:()=>M,Mn:()=>F,LU:()=>G,XP:()=>x,WU:()=>Y,JB:()=>U,g:()=>H,ws:()=>k,HP:()=>K,aN:()=>V,Pg:()=>W,u0:()=>q,TM:()=>X,PM:()=>B,lK:()=>z,sv:()=>$,MO:()=>Q,oO:()=>J,Mc:()=>ee,Zw:()=>te,RA:()=>ne,am:()=>re,ZM:()=>oe,wm:()=>ie,Y$:()=>ue,Qu:()=>ae,kT:()=>ce});var r=n(647310),o="LOAD_FEATURE_INFO",i="ERROR_FEATURE_INFO",u="EXCEPTIONS_FEATURE_INFO",a="CHANGE_MAPINFO_STATE",c="NEW_MAPINFO_REQUEST",s="PURGE_MAPINFO_RESULTS",p="CHANGE_MAPINFO_FORMAT",l="SHOW_MAPINFO_MARKER",f="HIDE_MAPINFO_MARKER",y="SHOW_REVERSE_GEOCODE",d="HIDE_REVERSE_GEOCODE",m="GET_VECTOR_INFO",E="NO_QUERYABLE_LAYERS",b="CLEAR_WARNING",v="FEATURE_INFO_CLICK",O="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",h="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",g="TOGGLE_MAPINFO_STATE",_="UPDATE_CENTER_TO_MARKER",S="IDENTIFY:CHANGE_PAGE",P="IDENTIFY:CLOSE_IDENTIFY",R="IDENTIFY:CHANGE_FORMAT",T="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",N="IDENTIFY:EDIT_LAYER_FEATURES",A="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",I="IDENTIFY:SET_MAP_TRIGGER",w="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",D="IDENTIFY:SET_SHOW_IN_MAP_POPUP",C="IDENTIFY:IDENTIFY_IS_MOUNTED",j="IDENTIFY:INIT_PLUGIN";function L(e,t,n,r,i){return{type:o,data:t,reqId:e,requestParams:n,layerMetadata:r,layer:i}}function M(e,t,n,r){return{type:i,error:t,reqId:e,requestParams:n,layerMetadata:r}}function F(e,t,n,r){return{type:u,reqId:e,exceptions:t,requestParams:n,layerMetadata:r}}function G(){return{type:E}}function x(){return{type:b}}function Y(e,t){return{type:c,reqId:e,request:t}}function U(e,t,n,r){return{type:m,layer:e,request:t,metadata:n,queryableLayers:r}}function H(){return{type:s}}function k(e){return{type:p,infoFormat:e}}function K(){return{type:l}}function V(){return{type:f}}function Z(e){return{type:y,reverseGeocodeData:e.data}}function W(e){return function(t){r.Z.reverseGeocode(e).then((function(e){t(Z(e))})).catch((function(e){t(Z(e))}))}}function q(){return{type:d}}function X(){return{type:g}}function B(e){return{type:_,status:e}}function z(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{type:v,point:e,layer:t,filterNameList:n,overrideParams:r,itemId:o}}function $(e){return{type:O,point:e}}function Q(e){return{type:h,enabled:e}}function J(e){return{type:S,index:e}}var ee=function(){return{type:P}},te=function(e){return{type:R,format:e}},ne=function(e){return{type:T,showCoordinateEditor:e}},re=function(e){return{type:N,layer:e}},oe=function(e){return{type:A,query:e}},ie=function(e){return{type:I,trigger:e}},ue=function(e){return{type:D,value:e}},ae=function(e){return{type:C,isMounted:e}},ce=function(e){return{type:j,cfg:e}}},647310:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(375875),o=n.n(r),i=n(472500),u=n.n(i),a=n(727418),c=n.n(a),s={format:"json",bounded:0,polygon_geojson:1,priority:5};const p={geocode:function(e,t){var n=c()({q:e},s,t||{}),r=u().format({protocol:"https",host:"nominatim.openstreetmap.org",query:n});return o().get(r)},reverseGeocode:function(e,t){var n=c()({lat:e.lat,lon:e.lng},t||{},s),r=u().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:n});return o().get(r)}}},799509:(e,t,n)=>{"use strict";n.d(t,{Z:()=>te});var r=n(124852),o=n.n(r),i=n(675263),u=n.n(i),a=n(548403),c=n.n(a),s=n(480681),p=n(794192);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,O(r.key),r)}}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function m(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return E(e)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function v(e,t,n){return(t=O(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===l(t)?t:String(t)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(a,e);var t,n,r,i,u=(r=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(i){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function a(){var e;f(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return v(E(e=u.call.apply(u,[this].concat(n))),"verifyOnKeyDownEvent",(function(t){69===t.keyCode&&t.preventDefault(),13===t.keyCode&&(t.preventDefault(),t.stopPropagation(),e.props.onKeyDown(t))})),v(E(e),"validateDecimalLon",(function(t){var n=e.props.constraints[e.props.format].lon.min,r=e.props.constraints[e.props.format].lon.max,o=parseFloat(t);return isNaN(o)||o<n||o>r?"error":null})),v(E(e),"validateDecimalLat",(function(t){var n=e.props.constraints[e.props.format].lat.min,r=e.props.constraints[e.props.format].lat.max,o=parseFloat(t);return isNaN(o)||o<n||o>r?"error":null})),e}return t=a,(n=[{key:"render",value:function(){var e=this,t=this.props,n=t.coordinate,r=t.value,i=t.onChange,u=t.disabled,a="validateDecimal"+c()(n);return o().createElement(s.FormGroup,{validationState:this[a](r)},o().createElement(p.Z,{disabled:u,key:n,value:r,placeholder:n,onChange:function(t){""===t?i(""):null===e[a](t)?i(t):i(r)},onKeyDown:this.verifyOnKeyDownEvent,step:1,validateNameFunc:this[a],type:"number"}))}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(o().Component);v(h,"propTypes",{idx:u().number,value:u().number,constraints:u().object,format:u().string,coordinate:u().string,onChange:u().func,onKeyDown:u().func,onSubmit:u().func,disabled:u().bool}),v(h,"defaultProps",{format:"decimal",coordinate:"lat",constraints:{decimal:{lat:{min:-90,max:90},lon:{min:-180,max:180}}},onKeyDown:function(){},disabled:!1});const g=h;var _=n(414293),S=n.n(_),P=n(867076);const R=(0,P.withProps)((function(e){var t=e.coordinate,n=void 0===t?"lat":t;return{maxDegrees:"lat"===n?90:180,directions:"lat"===n?["N","S"]:["E","W"]}}));var T=n(562395);const N=(0,P.compose)((0,P.withProps)((function(e){return{isValid:""!==e.value}})),(0,P.withState)("initial","setInitial",{}),(0,P.withProps)((function(e){var t=e.isValid,n=e.initial,r=e.degrees,o=e.minutes,i=e.seconds;return t||""===r&&""===o&&""===i?{}:n})),(0,P.withHandlers)({onChange:function(e){return function(t){var n=t.degrees,r=t.minutes,o=t.seconds,i=t.direction;isNaN(n)?e.setInitial({degrees:"",minutes:r,seconds:o,direction:i}):isNaN(r)?e.setInitial({degrees:n,minutes:"",seconds:o,direction:i}):isNaN(o)&&e.setInitial({degrees:n,minutes:r,seconds:"",direction:i}),e.onChange({degrees:n,minutes:r,seconds:o,direction:i})}}}));function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){G(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function D(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,x(r.key),r)}}function j(e,t){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},j(e,t)}function L(e,t){if(t&&("object"===A(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return M(e)}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},F(e)}function G(e,t,n){return(t=x(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){var t=function(e,t){if("object"!==A(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===A(t)?t:String(t)}var Y="degrees",U="seconds",H="minutes",k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(a,e);var t,n,r,i,u=(r=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=F(r);if(i){var n=F(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function a(){var e;D(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return G(M(e=u.call.apply(u,[this].concat(n))),"onChange",(function(t,n){var r=e.getUpdatedCoordinateValue(t,n);e.props.onChange(r)})),G(M(e),"getUpdatedCoordinateValue",(function(t,n){try{var r=G({degrees:e.props.degrees,minutes:e.props.minutes,seconds:e.props.seconds,direction:e.props.direction},t,t===Y?Math.min(n,e.props.maxDegrees):n),o=r.seconds,i=r.minutes+e.getSexagesimalStep(o),u=Math.min(e.props.maxDegrees,r.degrees+e.getSexagesimalStep(i)),a=r.direction;return o=e.roundToNextSexagesimalStep(o),i=e.roundToNextSexagesimalStep(i),u===e.props.maxDegrees&&(i=0,o=0),a=u<0?a===e.props.directions[0]?e.props.directions[1]:e.props.directions[0]:a,-1===u&&(r.degrees<0&&r.minutes>=0?u=r.degrees:r.minutes<0&&r.degrees<=0?(u=0,i=r.minutes):(u=0,i=0,o=1e-4)),{degrees:u,minutes:i,seconds:o,direction:a}}catch(e){return null}})),G(M(e),"getSexagesimalStep",(function(e){return e>=60?1:e<0?-1:0})),G(M(e),"getInputStyle",(function(e){return isNaN(e)||""===e?{borderColor:"#a94442"}:{}})),G(M(e),"getNewValue",(function(t){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Y;if(""===t)n="";else{var o=r===U?parseFloat(t):parseInt(t,10),i=r===Y?e.props.maxDegrees:60;n=Math.round(10*o)/10<i?o:e.props[r]}return n})),G(M(e),"verifyOnKeyDownEvent",(function(t){var n;69===t.keyCode&&t.preventDefault(),"0"===(null==t||null===(n=t.target)||void 0===n?void 0:n.value)&&t.target.setSelectionRange(-1,-1),13===t.keyCode&&(t.preventDefault(),t.stopPropagation(),e.props.onKeyDown())})),G(M(e),"roundToNextSexagesimalStep",(function(e){return e<0?60+e:e>=60?e-60:e})),G(M(e),"isValid",(function(t){var n=t.minutes,r=t.seconds,o=t.degrees,i=t.direction;return!S()(n)&&n>0&&n<60&&!S()(r)&&r>0&&r<60&&!S()(o)&&o>0&&o<e.props.maxDegrees&&i})),e}return t=a,(n=[{key:"render",value:function(){var e,t,n,r=this,i={padding:0,textAlign:"center",borderRight:"none"},u=this.getInputStyle(this.props.degrees),a=this.getInputStyle(this.props.minutes),c=this.getInputStyle(this.props.seconds),l={position:"relative",top:0,overflow:"visible",zIndex:3,left:-25,width:0,height:0},f=(null!==(e=null==this||null===(t=this.props)||void 0===t||null===(n=t.aeronauticalOptions)||void 0===n?void 0:n.seconds)&&void 0!==e?e:{}).step;return o().createElement(s.FormGroup,{style:{display:"inline-flex"}},o().createElement("div",{className:Y,style:{width:40,display:"flex"}},o().createElement(p.Z,{key:this.props.coordinate+Y,value:this.props.degrees,disabled:this.props.disabled,placeholder:"d",onChange:function(e){return r.onChange(Y,r.getNewValue(e))},step:1,size:3,max:this.props.maxDegrees,min:-1,onKeyDown:function(e){r.verifyOnKeyDownEvent(e)},style:w(w({width:"100%"},i),u),type:"number"}),o().createElement("span",{style:l},"°")),o().createElement("div",{className:H,style:{width:40,display:"flex"}},o().createElement(p.Z,{disabled:this.props.disabled,key:this.props.coordinate+H,placeholder:"m",size:3,value:this.props.minutes,onChange:function(e){return r.onChange(H,r.getNewValue(e,H))},max:60,min:-1,onKeyDown:function(e){r.verifyOnKeyDownEvent(e)},style:w(w({width:"100%"},i),a),step:1,type:"number"}),o().createElement("span",{style:l},"′")),o().createElement("div",{className:U,style:{display:"flex"}},o().createElement(p.Z,{disabled:this.props.disabled,key:this.props.coordinate+U,value:this.props.seconds,placeholder:"s",onChange:function(e){return r.onChange(U,r.getNewValue(e,U))},step:f,max:60,onKeyDown:function(e){r.verifyOnKeyDownEvent(e)},min:-1,style:w(w({width:"100%"},i),c),type:"number"}),o().createElement("span",{style:l},"″")),o().createElement("div",{className:"direction-select"},o().createElement(s.FormControl,{disabled:this.props.disabled,componentClass:"select",placeholder:"select",value:this.props.direction,onChange:function(e){return r.onChange("direction",e.target.value)},style:{paddingLeft:4,paddingRight:4,flex:"1 1 0%"}},this.props.directions.map((function(e){return o().createElement("option",{key:e,value:e},e)})))))}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(o().Component);G(k,"propTypes",{idx:u().number,maxDegrees:u().number,degrees:u().number,minutes:u().number,seconds:u().number,directions:u().array,direction:u().string,aeronauticalOptions:u().object,coordinate:u().string,onChange:u().func,onKeyDown:u().func,disabled:u().bool}),G(k,"defaultProps",{coordinate:"lat",maxDegrees:90,directions:["N","S"],aeronauticalOptions:{seconds:{decimals:4,step:1e-4}},onKeyDown:function(){},disabled:!1});const K=(0,P.compose)(R,T.Z,N)(k),V=(0,P.compose)((0,P.withHandlers)({onChange:function(e){var t=e.onChange,n=void 0===t?function(){}:t,r=e.maxLatitude,o=void 0===r?89.9997222222:r,i=e.coordinate;return function(e){return n(Math.abs(parseFloat(e))>o&&"lat"===i?Math.sign(e)*o:e)}}}));function Z(e){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z(e)}function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W.apply(this,arguments)}function q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function X(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,J(r.key),r)}}function B(e,t){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},B(e,t)}function z(e,t){if(t&&("object"===Z(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function $(e){return $=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},$(e)}function Q(e,t,n){return(t=J(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J(e){var t=function(e,t){if("object"!==Z(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!==Z(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===Z(t)?t:String(t)}var ee=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}(a,e);var t,n,r,i,u=(r=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=$(r);if(i){var n=$(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return z(this,e)});function a(){return q(this,a),u.apply(this,arguments)}return t=a,(n=[{key:"render",value:function(){var e=this.props.format;return"decimal"===e||S()(e)?o().createElement(g,W({},this.props,{format:this.props.format||"decimal"})):o().createElement(K,this.props)}}])&&X(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(o().Component);Q(ee,"propTypes",{idx:u().number,value:u().number,constraints:u().object,format:u().string,aeronauticalOptions:u().object,coordinate:u().string,onChange:u().func,onKeyDown:u().func}),Q(ee,"defaultProps",{format:"decimal",constraints:{decimal:{lat:{min:-90,max:90},lon:{min:-180,max:180}}}});const te=V(ee)},562395:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(807654),o=n.n(r),i=n(59854),u=n.n(i),a=n(867076);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===c(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const l=(0,a.compose)((0,a.withProps)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},function(e,t){var n,r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).seconds,i=e>=0?Math.floor(e):Math.ceil(e),a=Math.abs(60*(e-i)),c=Math.floor(a),s=60*(a-c),p=u()(s,null!==(n=null==r?void 0:r.decimals)&&void 0!==n?n:4);return i=Math.abs(i),60===p&&(c++,p=0),60===c&&(i++,c=0),o()(i)||""===e?{degrees:"",minutes:"",seconds:"",direction:t?"E":"N"}:{degrees:i,minutes:c,seconds:p,direction:e<0?t?"W":"S":t?"E":"N"}}(e.value,"lon"===e.coordinate,e.aeronauticalOptions))})),(0,a.withHandlers)({onChange:function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.degrees,r=t.minutes,i=t.seconds,u=t.direction,a=0,c=0,s=0;void 0===n&&void 0===r&&void 0===i&&e.onChange(void 0),o()(n)||(a=n),o()(r)||(c=r),o()(i)||(s=i);var p=a+c/60+s/3600;(p>0&&("S"===u||"W"===u)||p<0&&("N"===u||"E"===u))&&(p*=-1),e.onChange(p.toPrecision(12))}}}))},777900:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(480681),o=n(815135),i=n(124852),u=n.n(i),a=n(423570),c=n.n(a);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}var p=(0,o.Z)(r.DropdownButton),l={disabled:!1,className:"square-button-md",noCaret:!0,idDropDown:c()()};const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.menuOptions,n=void 0===t?[]:t,o=e.buttonConfig,i=void 0===o?{}:o;return u().createElement(p,s({},l,i),n.length?n.map((function(e,t){var n=e.glyph,o=e.text,i=e.onClick,a=e.active,c=void 0!==a&&a;return u().createElement(r.MenuItem,{active:c,eventKey:t,onClick:i,key:t},n&&u().createElement(r.Glyphicon,{glyph:n})," ",o)})):null)}}}]);