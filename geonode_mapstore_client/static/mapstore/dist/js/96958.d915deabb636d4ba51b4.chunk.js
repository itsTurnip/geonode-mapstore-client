(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[96958],{196958:(e,t,r)=>{"use strict";r.d(t,{t3:()=>I,WQ:()=>x,dM:()=>A,rK:()=>D,Lo:()=>M,gP:()=>_,S9:()=>C,AV:()=>G,Sc:()=>N,a3:()=>Q,IC:()=>J,wT:()=>K,cZ:()=>L,ek:()=>U,Qc:()=>W,Cf:()=>$,dJ:()=>q,DR:()=>B,f1:()=>H,Pf:()=>X});var n=r(406557),o=r.n(n),i=r(92742),u=r.n(i),a=r(819873),l=r.n(a),c=r(630998),f=r.n(c),d=r(227361),v=r.n(d),s=r(701469),p=r.n(s),g=r(414293),y=r.n(g),m=r(747037),b=r.n(m),h=r(378889);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function w(e){return function(e){if(Array.isArray(e))return P(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return P(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?P(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==O(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===O(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var I=function(e,t,r){var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0;return f()(e,(function(e){return e<=r&&r<e+t}))}(t,r,e);return-1===n?n:n*r+e-t[n]},k={id:"empty_row",get:function(){}},x=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3?arguments[3]:void 0;return t[I(e,r,n)]||S({},k)},A=function(e,t){return t[e]},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return p()(e)?e.reduce((function(e,t){return S(S({},e),{},j({},t.id,S(S({},e[t.id]),t.updated)))}),{}):{}},z=function(e,t){var r=Object.keys(t).filter((function(e){return"geometry"!==e})).reduce((function(e,r){return S(S({},e),{},j({},r,t[r]))}),{}),n=Object.keys(t).filter((function(e){return"geometry"===e})).reduce((function(e,r){return S(S({},e),{},j({},r,t[r]))}),{});return S(S(S({},e),n),{},{properties:S(S({},e&&e.properties||{}),r)})},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,n=f()(e,t);return n>=0?e.map((function(e,t){return t===n?r:e})):[].concat(w(e),[r])},M=function(e){return((0,h.getFeatureTypeProperties)(e)||[]).filter((function(e){return!(0,h.isGeometryType)(e)}))},R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0;return t.map((function(t){return r<=t&&t<=n?0:Math.abs(t-e)})).reduce((function(e,t,r,n){return t>n[e]&&r||e}),0)},T=function(e,t){return t.filter((function(t,r){return r!==e}))},V=function(e,t,r){return e.filter((function(e,n){return n<t||n>=t+r}))},_=function(e,t,r,n){for(var o,i,u=e;u<=t&&void 0===o;u++)-1===I(u*n,r,n)&&(o=u);for(var a=t;a>=e&&void 0===i;a--)-1===I(a*n,r,n)&&(i=a);return[o,i].filter((function(e){return void 0!==e}))},C=function(e,t,r){var n=e.startPage,o=e.endPage,i=_(n,o,t,r),u=i[1]-i[0]+1;return{startIndex:i[0]*r,maxFeatures:u*r}},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.editable,o=void 0!==n&&n,i=r.sortable,u=void 0===i||i,a=r.resizable,l=void 0===a||a,c=r.filterable,f=void 0===c||c,d=r.defaultSize,v=void 0===d?200:d,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},p=s.getEditor,g=void 0===p?function(){}:p,y=s.getFilterRenderer,m=void 0===y?function(){}:y,b=s.getFormatter,h=void 0===b?function(){}:b;return M(e).filter((function(e){return!(t[e.name]&&t[e.name].hide)})).map((function(e){return{sortable:u,key:e.name,width:t[e.name]&&t[e.name].width||v||void 0,name:t[e.name]&&t[e.name].label||e.name,resizable:l,editable:o,filterable:f,editor:g(e),formatter:h(e),filterRenderer:m(e,e.name)}}))},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},i=(0,h.findGeometryProperty)(r);return e.map((function(e){return S(S({},e),{},{events:e.events&&Object.keys(e.events).reduce((function(o,i){return S(S({},o),{},j({},i,(function(o,u){return e.events[i](t(u.rowIdx),u,r,n)})))}),{})},"geometry"===e.key&&i?{filterRenderer:o(S(S({},i),{},{localType:"geometry"}),i.name),filterable:!0,geometryPropName:i.name}:{})}))},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;return Object.keys(e).reduce((function(i,u){return S(S({},i),{},j({},u,(function(){for(var i=arguments.length,a=new Array(i),l=0;l<i;l++)a[l]=arguments[l];return e[u].apply(e,a.concat([t,r,n,o]))})))}),{})},J=function(e,t){return!!(0,h.getPropertyDesciptor)(e,t)},K=function(e,t,r){return(0,h.isValidValueForPropertyName)(e,(o=r,"geometry"===(n=t)?function(e){return v()((0,h.findGeometryProperty)(e),"name")}(o):n),r);var n,o},L=function(){return"EPSG:4326"},U=function(e,t,r){return function(n){return t.length>0?n._new:!e||e&&!!r[n.id]}},W=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return z(e,t[e.id]||{})},Z=/\s*(!==|!=|<>|<=|>=|===|==|=|<|>)?\s*(-?\d*\.?\d*)\s*/,$=function(e,t){if("string"===t)return{newVal:u()(e),operator:"ilike"};var r,n=Z.exec(e),o="=";return n?("!=="===(o=n[1]||"=")|"!="===o?o="<>":"==="===o|"=="===o&&(o="="),r=parseFloat(n[2])):r=parseFloat(e,10),{newVal:r,operator:o}},q=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.attribute,n=t.operator,i=t.value,u=t.type,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=(null===(e=a.groupFields)||void 0===e?void 0:e.filter((function(e){return r!==e.id&&1!==e.id})))||[];if(("string"===u||"number"===u)&&b()(i)&&-1!==(null==i?void 0:i.indexOf(","))){var c,f=(null==i?void 0:i.split(",").filter(o()))||[],d=(null===(c=a.filterFields)||void 0===c?void 0:c.filter((function(e){return r!==e.attribute})))||[];return S(S({},a),{},{groupFields:l.concat([{id:r,logic:"OR",groupId:1,index:0}]),filterFields:d.concat(f.map((function(e){var t=$(e,u),n=t.operator,o=t.newVal;return{attribute:r,rowId:Date.now(),type:u,groupId:r,operator:n,value:o}}))),spatialField:a.spatialField,spatialFieldOperator:a.spatialFieldOperator})}return S(S({},a),{},{groupFields:l.concat([{id:1,logic:"AND",groupId:1,index:0}]),filterFields:"geometry"===u?a.filterFields:y()(i)?(a.filterFields||[]).filter((function(e){return e.attribute!==r})):E(a.filterFields||[],{attribute:r},{attribute:r,rowId:Date.now(),type:u,groupId:1,operator:n,value:i}),spatialField:"geometry"===u?i:a.spatialField,spatialFieldOperator:p()(i)?"OR":""})},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.startIndex,r=void 0===t?0:t,n=e.maxFeatures,o=void 0===n?1:n,i=e.totalFeatures,u=void 0===i?0:i,a=e.resultSize;return{page:Math.ceil(r/o),resultSize:a,size:o,total:u,maxPages:Math.ceil(u/o)-1}},H=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.endPage,n=t.startPage,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=o.pages,u=o.features,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=a.size,f=a.maxStoredPages,d=a.startIndex,s=_(n,r,i,c),p=s[1]-s[0]+1,g=v()(e,"features",[]);g.length!==p*c&&(g=g.concat(l()(Array(p*c-g.length>0?p*c-g.length:g.length),!1)));var y=i,m=u,b=y.length+p-Math.max(f,r-n+1);if(b>0)for(var h=n*c,O=r*c,w=h+(O-h)/2,P=0;P<b;P++){var F=R(w,i,h,O),S=F*c;y=T(F,y),m=V(u,S,c)}for(var j=[],I=0;I<p;I++)j.push(d+c*I);return{pages:y.concat(j),features:m.concat(g)}},X=function(e,t){var r=void 0;return t&&e&&(r=e.filter((function(e){var r,n;return!(null!==(r=null===(n=t[e.attribute])||void 0===n?void 0:n.hide)&&void 0!==r&&r)})).map((function(e){return e.attribute}))).length===e.length&&(r=void 0),r}}}]);