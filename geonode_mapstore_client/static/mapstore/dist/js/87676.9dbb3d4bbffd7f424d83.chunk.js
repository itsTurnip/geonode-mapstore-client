(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[87676],{242780:(t,e,n)=>{"use strict";n.d(e,{Xp:()=>i,A1:()=>u,Mf:()=>c,wq:()=>a,CD:()=>p,DX:()=>s,GW:()=>l,c4:()=>E,Ne:()=>f,hv:()=>T,x9:()=>O,Lv:()=>A,mA:()=>y,Ge:()=>N,sL:()=>d,B6:()=>b,vG:()=>I,QY:()=>m,X2:()=>S,dC:()=>R,bO:()=>g,eY:()=>D,bI:()=>_,Rr:()=>v,Np:()=>h,pC:()=>G,cM:()=>C,iO:()=>F,R_:()=>L,zT:()=>U,$l:()=>P,qO:()=>w,eK:()=>j,HN:()=>M,Bm:()=>H,Kz:()=>Y,gT:()=>V,JT:()=>x,CO:()=>k,NV:()=>W,Ns:()=>B,Fz:()=>Z,Nj:()=>z,op:()=>K,GI:()=>X,Cg:()=>$,WD:()=>q,rb:()=>Q,it:()=>J,br:()=>tt,Hf:()=>et,Ps:()=>nt,U7:()=>rt,aH:()=>ot,qX:()=>it,cv:()=>ut,M_:()=>ct,QT:()=>at,z_:()=>pt,Y5:()=>st,wP:()=>lt,pv:()=>Et,bM:()=>ft,Zw:()=>Tt,Ay:()=>Ot,aS:()=>At,LR:()=>yt,VR:()=>Nt,A9:()=>dt,i9:()=>bt,$f:()=>It,F4:()=>mt,r1:()=>St,Om:()=>Rt,_x:()=>gt,dT:()=>Dt,jw:()=>_t,iY:()=>vt,QD:()=>ht,xD:()=>Gt,kg:()=>Ct,ob:()=>Ft,nk:()=>Lt,A_:()=>Ut,nY:()=>Pt,Bp:()=>wt,CH:()=>jt,Rx:()=>Mt,MQ:()=>Ht,l7:()=>Yt,VP:()=>Vt,g:()=>xt,L0:()=>kt,if:()=>Wt,tp:()=>Bt,TA:()=>Zt,yg:()=>zt,Hl:()=>Kt,y$:()=>Xt,ts:()=>$t,UJ:()=>qt,yw:()=>Qt,nz:()=>Jt,RC:()=>te,om:()=>ee,XW:()=>ne,WB:()=>re,pI:()=>oe,Dd:()=>ie,V_:()=>ue,TW:()=>ce,$:()=>ae,Y_:()=>pe,Ib:()=>se,_n:()=>le});var r=n(91175),o=n.n(r),i="ANNOTATIONS:INIT_PLUGIN",u="ANNOTATIONS:EDIT",c="ANNOTATIONS:OPEN_EDITOR",a="ANNOTATIONS:SHOW",p="ANNOTATIONS:NEW",s="ANNOTATIONS:REMOVE",l="ANNOTATIONS:REMOVE_GEOMETRY",E="ANNOTATIONS:CONFIRM_REMOVE",f="ANNOTATIONS:CANCEL_REMOVE",T="ANNOTATIONS:CANCEL_EDIT",O="ANNOTATIONS:CANCEL_SHOW",A="ANNOTATIONS:SAVE",y="ANNOTATIONS:TOGGLE_ADD",N="ANNOTATIONS:TOGGLE_STYLE",d="ANNOTATIONS:SET_STYLE",b="ANNOTATIONS:RESTORE_STYLE",I="ANNOTATIONS:SET_INVALID_SELECTED",m="ANNOTATIONS:VALIDATION_ERROR",S="ANNOTATIONS:HIGHLIGHT",R="ANNOTATIONS:CLEAN_HIGHLIGHT",g="ANNOTATIONS:FILTER",D="ANNOTATIONS:CLOSE",_="ANNOTATIONS:CONFIRM_CLOSE",v="ANNOTATIONS:CANCEL_CLOSE",h="ANNOTATIONS:START_DRAWING",G="ANNOTATIONS:UNSAVED_CHANGES",C="ANNOTATIONS:VISIBILITY",F="ANNOTATIONS:TOGGLE_CHANGES_MODAL",L="ANNOTATIONS:TOGGLE_GEOMETRY_MODAL",U="ANNOTATIONS:CHANGED_PROPERTIES",P="ANNOTATIONS:UNSAVED_STYLE",w="ANNOTATIONS:TOGGLE_STYLE_MODAL",j="ANNOTATIONS:ADD_TEXT",M="ANNOTATIONS:DOWNLOAD",H="ANNOTATIONS:LOAD_ANNOTATIONS",Y="ANNOTATIONS:CHANGED_SELECTED",V="ANNOTATIONS:RESET_COORD_EDITOR",x="ANNOTATIONS:CHANGE_RADIUS",k="ANNOTATIONS:CHANGE_TEXT",W="ANNOTATIONS:ADD_NEW_FEATURE",B="ANNOTATIONS:SET_EDITING_FEATURE",Z="ANNOTATIONS:HIGHLIGHT_POINT",z="ANNOTATIONS:TOGGLE_DELETE_FT_MODAL",K="ANNOTATIONS:CONFIRM_DELETE_FEATURE",X="ANNOTATIONS:CHANGE_FORMAT",$="ANNOTATIONS:UPDATE_SYMBOLS",q="ANNOTATIONS:ERROR_SYMBOLS",Q="ANNOTATIONS:SET_DEFAULT_STYLE",J="ANNOTATIONS:LOAD_DEFAULT_STYLES",tt="ANNOTATIONS:LOADING",et="ANNOTATIONS:CHANGE_GEOMETRY_TITLE",nt="ANNOTATIONS:FILTER_MARKER",rt="ANNOTATIONS:HIDE_MEASURE_WARNING",ot="ANNOTATIONS:TOGGLE_SHOW_AGAIN",it="ANNOTATIONS:GEOMETRY_HIGHLIGHT",ut="ANNOTATIONS:UNSELECT_FEATURE",ct="ANNOTATIONS:VALIDATE_FEATURE",at=function(){return{type:i}},pt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:$,symbols:t}},st=function(t){return{type:q,symbolErrors:t}},lt=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{type:H,features:t,override:e}},Et=function(){return{type:K}},ft=function(t){return{type:c,id:t}},Tt=function(t){return{type:X,format:t}},Ot=function(){return{type:z}},At=function(t){return{type:Z,point:t}},yt=function(t){return{type:M,annotation:t}},Nt=function(t){return function(e,n){var r=o()(o()(n().layers.flat.filter((function(t){return"annotations"===t.id}))).features.filter((function(e){return e.properties.id===t})));"FeatureCollection"===r.type?e({type:u,feature:r,featureType:r.type}):e({type:u,feature:r,featureType:r.geometry.type})}},dt=function(){return{type:p}},bt=function(t,e,n,r){return{type:Y,coordinates:t,radius:e,text:n,crs:r}},It=function(t,e){return{type:I,errorFrom:t,coordinates:e}},mt=function(){return{type:j}},St=function(t,e){return{type:C,id:t,visibility:e}},Rt=function(t,e){return{type:U,field:t,value:e}},gt=function(t){return{type:s,id:t}},Dt=function(t){return{type:l,id:t}},_t=function(t,e){return{type:E,id:t,attribute:e}},vt=function(){return{type:f}},ht=function(t){return{type:T,properties:t}},Gt=function(t,e,n,r,o,i){return{type:A,id:t,fields:e,geometry:n,style:r,newFeature:o,properties:i}},Ct=function(t){return{type:y,featureType:t}},Ft=function(t){return{type:N,styling:t}},Lt=function(){return{type:b}},Ut=function(t){return{type:d,style:t}},Pt=function(t,e,n){return{type:"ANNOTATIONS:UPDATE_GEOMETRY",geometry:t,textChanged:e,circleChanged:n}},wt=function(t){return{type:m,errors:t}},jt=function(t){return{type:S,id:t}},Mt=function(){return{type:R}},Ht=function(t){return{type:a,id:t}},Yt=function(){return{type:O}},Vt=function(t){return{type:g,filter:t}},xt=function(){return{type:D}},kt=function(t){return{type:_,properties:t}},Wt=function(t){return{type:G,unsavedChanges:t}},Bt=function(t){return{type:P,unsavedStyle:t}},Zt=function(){return{type:W}},zt=function(t){return{type:B,feature:t}},Kt=function(){return{type:v}},Xt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:h,options:t}},$t=function(){return{type:F}},qt=function(){return{type:L}},Qt=function(){return{type:w}},Jt=function(){return{type:V}},te=function(){return{type:ut}},ee=function(t,e,n){return{type:x,radius:t,components:e,crs:n}},ne=function(t,e){return{type:k,text:t,components:e}},re=function(t,e){return{type:Q,path:t,style:e}},oe=function(t,e,n,r,o){return{type:J,shape:t,size:e,fillColor:n,strokeColor:r,symbolsPath:o}},ie=function(t){return{type:et,title:t}},ue=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"loading";return{type:tt,name:e,value:t}},ce=function(t){return{type:nt,filter:t}},ae=function(t,e){return{type:it,id:t,state:e}},pe=function(){return{type:rt}},se=function(){return{type:ot}},le=function(){return{type:ct}}},433528:(t,e,n)=>{"use strict";n.d(e,{gJ:()=>r,Oj:()=>o,jp:()=>i,CM:()=>u,DU:()=>c,aO:()=>a,v6:()=>p,K8:()=>s,IN:()=>l,zh:()=>E,AH:()=>f,Ub:()=>T,_9:()=>O,JB:()=>A,oh:()=>y,AY:()=>N,yi:()=>d,SW:()=>b,Hk:()=>I,iQ:()=>m,dY:()=>S,$:()=>R,_u:()=>g,gG:()=>D,DI:()=>_,dZ:()=>v,qw:()=>h,f$:()=>G,bZ:()=>C,$O:()=>F,sF:()=>L,Gk:()=>U,vO:()=>P,ut:()=>w,MK:()=>j,VV:()=>M,B8:()=>H,VM:()=>Y,a3:()=>V,Xp:()=>x,DA:()=>k,sK:()=>W,yA:()=>B,r:()=>Z,iB:()=>z,WB:()=>K,EH:()=>X,Yd:()=>$,Hg:()=>q,Lz:()=>Q,ye:()=>J,Jb:()=>tt,d:()=>et,fT:()=>nt,Ib:()=>rt,Pl:()=>ot,UB:()=>it,Uh:()=>ut,QT:()=>ct,oL:()=>at,Ap:()=>pt,KD:()=>st,Z_:()=>lt,Vw:()=>Et,sY:()=>ft,kA:()=>Tt,gr:()=>Ot,pX:()=>At,F5:()=>yt,MO:()=>Nt,dq:()=>dt,DY:()=>bt,oO:()=>It,uF:()=>mt,a8:()=>St,Pv:()=>Rt,an:()=>gt,lg:()=>Dt,nY:()=>_t,nG:()=>vt,lx:()=>ht,$S:()=>Gt,gc:()=>Ct,Uz:()=>Ft,fO:()=>Lt,$E:()=>Ut,cE:()=>Pt,JK:()=>wt,YV:()=>jt,t9:()=>Mt,YG:()=>Ht,HT:()=>Yt,MY:()=>Vt,ve:()=>xt,hB:()=>kt,Ox:()=>Wt,zd:()=>Bt,aT:()=>Zt,VH:()=>zt,Yb:()=>Kt,Jr:()=>Xt,pP:()=>$t,gL:()=>qt});var r="FEATUREGRID:SET_UP",o="FEATUREGRID:SELECT_FEATURES",i="FEATUREGRID:DESELECT_FEATURES",u="FEATUREGRID:CLEAR_SELECTION",c="FEATUREGRID:SET_SELECTION_OPTIONS",a="FEATUREGRID:TOGGLE_MODE",p="FEATUREGRID:TOGGLE_FEATURES_SELECTION",s="FEATUREGRID:FEATURES_MODIFIED",l="FEATUREGRID:NEW_FEATURE",E="FEATUREGRID:SAVE_CHANGES",f="FEATUREGRID:SAVING",T="FEATUREGRID:START_EDITING_FEATURE",O="FEATUREGRID:START_DRAWING_FEATURE",A="FEATUREGRID:DELETE_GEOMETRY",y="FEATUREGRID:DELETE_GEOMETRY_FEATURE",N="FEATUREGRID:SAVE_SUCCESS",d="FEATUREGRID:CLEAR_CHANGES",b="FEATUREGRID:SAVE_ERROR",I="FEATUREGRID:DELETE_SELECTED_FEATURES",m="SET_FEATURES",S="FEATUREGRID:SORT_BY",R="FEATUREGRID:SET_LAYER",g="QUERY:UPDATE_FILTER",D="FEATUREGRID:CHANGE_PAGE",_="FEATUREGRID:GEOMETRY_CHANGED",v="DOCK_SIZE_FEATURES",h="FEATUREGRID:TOGGLE_TOOL",G="FEATUREGRID:CUSTOMIZE_ATTRIBUTE",C="ASK_CLOSE_FEATURE_GRID_CONFIRM",F="FEATUREGRID:OPEN_GRID",L="FEATUREGRID:CLOSE_GRID",U="FEATUREGRID:CLEAR_CHANGES_CONFIRMED",P="FEATUREGRID:FEATURE_GRID_CLOSE_CONFIRMED",w="FEATUREGRID:SET_PERMISSION",j="FEATUREGRID:DISABLE_TOOLBAR",M="FEATUREGRID:ACTIVATE_TEMPORARY_CHANGES",H="FEATUREGRID:DEACTIVATE_GEOMETRY_FILTER",Y="FEATUREGRID:ADVANCED_SEARCH",V="FEATUREGRID:ZOOM_ALL",x="FEATUREGRID:INIT_PLUGIN",k="FEATUREGRID:SIZE_CHANGE",W="FEATUREGRID:TOGGLE_SHOW_AGAIN_FLAG",B="FEATUREGRID:HIDE_SYNC_POPOVER",Z="FEATUREGRID:UPDATE_EDITORS_OPTIONS",z="FEATUREGRID:LAUNCH_UPDATE_FILTER_FUNC",K="FEATUREGRID:SET_SYNC_TOOL",X={EDIT:"EDIT",VIEW:"VIEW"},$="FEATUREGRID:START_SYNC_WMS",q="FEATUREGRID:STOP_SYNC_WMS",Q="STORE_ADVANCED_SEARCH_FILTER",J="LOAD_MORE_FEATURES",tt="FEATUREGRID:QUERY_RESULT",et="FEATUREGRID:SET_TIME_SYNC",nt="FEATUREGRID:SET_PAGINATION";function rt(){return{type:W}}function ot(){return{type:B}}function it(t,e){return{type:tt,features:t,pages:e}}function ut(t){return{type:Q,filterObj:t}}function ct(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:x,options:t}}function at(){return{type:U}}function pt(){return{type:P}}function st(t,e){return{type:o,features:t,append:e}}function lt(t){return{type:r,options:t}}function Et(t){return{type:_,features:t}}function ft(){return{type:T}}function Tt(){return{type:O}}function Ot(t){return{type:i,features:t}}function At(){return{type:A}}function yt(t){return{type:y,features:t}}function Nt(){return{type:u}}function dt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.multiselect,n=t.showCheckbox;return{type:c,multiselect:e,showCheckbox:n}}function bt(t,e){return{type:S,sortBy:t,sortOrder:e}}function It(t,e){return{type:D,page:t,size:e}}function mt(t){return{type:R,id:t}}function St(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{type:g,update:t,append:e}}function Rt(t,e){return{type:h,tool:t,value:e}}function gt(t,e,n){return{type:G,name:t,key:e,value:n}}function Dt(){return{type:a,mode:X.EDIT}}function _t(){return{type:a,mode:X.VIEW}}function vt(t,e){return{type:s,features:t,updated:e}}function ht(t){return{type:l,features:t}}function Gt(){return{type:E}}function Ct(){return{type:N}}function Ft(){return{type:I}}function Lt(){return{type:f}}function Ut(){return{type:d}}function Pt(){return{type:b}}function wt(){return{type:C}}function jt(){return{type:L}}function Mt(){return{type:F}}function Ht(t){return{type:j,disabled:t}}function Yt(t){return{type:w,permission:t}}function Vt(){return{type:Y}}function xt(){return{type:V}}function kt(){return{type:$}}function Wt(t,e){return{type:k,size:t,dockProps:e}}var Bt=function(t){return{type:J,pages:t}},Zt=function(t){return{type:M,activated:t}},zt=function(t){return{type:H,deactivated:t}},Kt=function(t){return{type:et,value:t}},Xt=function(t){return{type:nt,size:t}},$t=function(t){return{type:z,updateFilterAction:t}},qt=function(t){return{type:K,syncWmsFilter:t}}},965539:(t,e,n)=>{"use strict";n.d(e,{Z:()=>p});var r=n(124852),o=n.n(r);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e);if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===i(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const p=function(t){var e=t.id,n=t.children,r=t.header,i=t.footer,u=t.columns,a=t.height,p=t.style,s=void 0===p?{}:p,l=t.className,E=t.bodyClassName,f=void 0===E?"ms2-border-layout-body":E;return o().createElement("div",{id:e,className:l,style:c({display:"flex",flexDirection:"column",width:"100%",height:"100%",overflow:"hidden"},s)},r,o().createElement("div",{className:f,style:{display:"flex",flex:1,overflowY:"auto"}},o().createElement("main",{className:"ms2-border-layout-content",style:{flex:1,overflowX:"hidden"}},a?o().createElement("div",{style:{height:a}},n):n),a?o().createElement("div",{style:{height:a}},u):u),i)}},438261:(t,e,n)=>{"use strict";n.d(e,{Z:()=>v});var r=n(124852),o=n.n(r),i=n(675263),u=n.n(i),c=n(757588),a=n(80717),p=n(625311),s=n(799509),l=n(805346),E=n(618446),f=n.n(E),T=n(281763),O=n.n(T),A=n(777900);function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function N(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?N(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,D(r.key),r)}}function I(t,e){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},I(t,e)}function m(t,e){if(e&&("object"===y(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return S(t)}function S(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function R(t){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},R(t)}function g(t,e,n){return(e=D(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function D(t){var e=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e);if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===y(e)?e:String(e)}var _=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&I(t,e)}(p,t);var e,n,r,i,u=(r=p,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=R(r);if(i){var n=R(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return m(this,t)});function p(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,p),g(S(e=u.call(this,t)),"onChangeLatLon",(function(t,n){e.setState(d(d({},e.state),{},g({},t,parseFloat(n))),(function(){var t=parseFloat(e.state.lat)!==parseFloat(e.props.component.lat),n=parseFloat(e.state.lon)!==parseFloat(e.props.component.lon);e.setState(d(d({},e.state),{},{disabledApplyChange:!(t||n)}),(function(){e.props.onValidateFeature(),"annotations"===e.props.renderer&&e.props.onSubmit(e.props.idx,e.state)}))}))})),g(S(e),"onSubmit",(function(){e.props.onSubmit(e.props.idx,e.state)})),e.state={lat:O()(e.props.component.lat)?e.props.component.lat:"",lon:O()(e.props.component.lon)?e.props.component.lon:"",disabledApplyChange:!0},e}return e=p,(n=[{key:"UNSAFE_componentWillReceiveProps",value:function(t){if(!f()(t.component,this.props.component)){var e=O()(t.component.lat)?t.component.lat:"",n=O()(t.component.lon)?t.component.lon:"";this.setState({lat:e,lon:n,disabledApplyChange:!0})}}},{key:"render",value:function(){var t=this,e=this.props.idx,n=[{visible:this.props.removeVisible,disabled:!this.props.removeEnabled||this.props.disabled,glyph:"trash",onClick:function(){t.props.onRemove(e)}},{buttonConfig:{title:o().createElement(c.Glyphicon,{glyph:"cog"}),className:"square-button-md no-border",pullRight:!0,tooltipId:"identifyChangeCoordinateFormat"},menuOptions:[{active:"decimal"===this.props.format,onClick:function(){t.props.onChangeFormat("decimal")},text:o().createElement(l.Z,{msgId:"search.decimal"})},{active:"aeronautical"===this.props.format,onClick:function(){t.props.onChangeFormat("aeronautical")},text:o().createElement(l.Z,{msgId:"search.aeronautical"})}],disabled:this.props.disabled,visible:this.props.formatVisible,Element:A.Z},{glyph:"ok",disabled:this.state.disabledApplyChange||this.props.disabled,tooltipId:"identifyCoordinateApplyChanges",onClick:this.onSubmit,visible:"annotations"!==this.props.renderer}],r=o().createElement("div",{role:"button",className:"square-button-md no-border btn btn-default",style:{display:"table",color:!this.props.isDraggableEnabled&&"#999999",pointerEvents:this.props.isDraggableEnabled?"auto":"none",cursor:this.props.isDraggableEnabled&&"grab"}},o().createElement(c.Glyphicon,{glyph:"menu-hamburger"}));return o().createElement("div",{className:"coordinateRow ".concat(this.props.format||""," ").concat(this.props.customClassName||""),onMouseEnter:function(){t.props.onMouseEnter&&t.props.component.lat&&t.props.component.lon&&t.props.onMouseEnter(t.props.component)},onMouseLeave:function(){t.props.onMouseLeave&&t.props.component.lat&&t.props.component.lon&&t.props.onMouseLeave()}},o().createElement("div",{style:{cursor:this.props.isDraggableEnabled?"grab":"not-allowed"}},this.props.showDraggable?this.props.isDraggable?this.props.connectDragSource(r):r:null),o().createElement("div",{className:"coordinate"},o().createElement("div",{className:"input-group-container"},o().createElement(c.InputGroup,null,o().createElement(c.InputGroup.Addon,null,o().createElement(l.Z,{msgId:"latitude"})),o().createElement(s.Z,{disabled:this.props.disabled,format:this.props.format,aeronauticalOptions:this.props.aeronauticalOptions,coordinate:"lat",idx:e,value:this.state.lat,onChange:function(e){return t.onChangeLatLon("lat",e)},constraints:{decimal:{lat:{min:-90,max:90},lon:{min:-180,max:180}}},onKeyDown:this.onSubmit}))),o().createElement("div",{className:"input-group-container"},o().createElement(c.InputGroup,null,o().createElement(c.InputGroup.Addon,null,o().createElement(l.Z,{msgId:"longitude"})),o().createElement(s.Z,{disabled:this.props.disabled,format:this.props.format,aeronauticalOptions:this.props.aeronauticalOptions,coordinate:"lon",idx:e,value:this.state.lon,onChange:function(e){return t.onChangeLatLon("lon",e)},constraints:{decimal:{lat:{min:-90,max:90},lon:{min:-180,max:180}}},onKeyDown:this.onSubmit})))),this.props.showToolButtons&&o().createElement("div",{key:"tools"},o().createElement(a.Z,{btnGroupProps:{className:"tools"},btnDefaultProps:{className:"square-button-md no-border"},buttons:n})))}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),p}(o().Component);g(_,"propTypes",{idx:u().number,component:u().object,onRemove:u().func,onSubmit:u().func,onChangeFormat:u().func,onMouseEnter:u().func,format:u().string,type:u().string,onMouseLeave:u().func,connectDragSource:u().func,aeronauticalOptions:u().object,customClassName:u().string,isDraggable:u().bool,isDraggableEnabled:u().bool,showLabels:u().bool,showDraggable:u().bool,showToolButtons:u().bool,removeVisible:u().bool,formatVisible:u().bool,removeEnabled:u().bool,renderer:u().string,disabled:u().bool,onValidateFeature:u().func}),g(_,"defaultProps",{showLabels:!1,formatVisible:!1,onMouseEnter:function(){},onMouseLeave:function(){},onValidateFeature:function(){},showToolButtons:!0,disabled:!1});const v=(0,p.Z)(_)},625311:(t,e,n)=>{"use strict";n.d(e,{Z:()=>f});var r=n(124852),o=n.n(r),i=n(590937),u=n(867076),c=["connectDragSource","connectDragPreview","connectDropTarget","isDragging","isOver"];function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function p(){return p=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},p.apply(this,arguments)}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e);if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===a(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var E={beginDrag:function(t){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t)}};const f=(0,u.branch)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.isDraggable;return e}),(0,u.compose)((0,i.Ej)("row",E,(function(t,e){return{connectDragSource:t.dragSource(),connectDragPreview:t.dragPreview(),isDragging:e.isDragging(),draggingItem:e.getItem()||null}})),(0,i.GR)("row",{drop:function(t,e){var n=e.getItem();n.sortId!==t.sortId&&t.onSort(t.sortId,n.sortId,{id:t.id,containerId:t.containerId},{id:n.id,containerId:n.containerId})}},(function(t,e){return{connectDropTarget:t.dropTarget(),isOver:e.isOver()}})),(function(t){return function(e){var n=e.connectDragSource,r=e.connectDragPreview,i=e.connectDropTarget,u=e.isDragging,a=e.isOver,s=function(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}(e,c),l=s.draggingItem&&s.draggingItem.sortId<s.sortId,E=s.draggingItem&&s.draggingItem.containerId===s.containerId,f=E&&u?" ms-dragging":"",T=E&&a?" ms-over":"",O=E&&l?" ms-above":" ms-below";return r(i(o().createElement("div",{className:"ms-dragg".concat(f).concat(T," ").concat(O)},o().createElement("div",null,o().createElement(t,p({},s,{connectDragSource:n,isDragging:u,isOver:a,onDrop:function(t){return t.stopPropagation()}}))))))}})))}}]);