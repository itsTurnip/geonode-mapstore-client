(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[73816],{352595:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=(0,r(461365).Z)(r(757588).Overlay)},876424:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=r(124852),o=r.n(n),i=r(513218),c=r.n(i),l=r(532425);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}var u=["body","caption","infoExtra","className","description","fullText","onClick","onMouseEnter","onMouseLeave","preview","selected","size","style","stylePreview","styleTools","title","loading","dragSymbol","tools"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.body,r=e.caption,n=e.infoExtra,i=e.className,a=void 0===i?"":i,s=e.description,f=e.fullText,b=e.onClick,d=void 0===b?function(){}:b,m=e.onMouseEnter,v=void 0===m?function(){}:m,h=e.onMouseLeave,g=void 0===h?function(){}:h,O=e.preview,w=e.selected,j=e.size,P=e.style,E=void 0===P?{}:P,S=e.stylePreview,k=void 0===S?{}:S,x=e.styleTools,N=void 0===x?{}:x,_=e.title,T=e.loading,C=e.dragSymbol,R=void 0===C?"+":C,D=e.tools,Z=y(e,u);return o().createElement("div",{className:"mapstore-side-card".concat(w?" selected":"").concat(j?" ms-"+j:"").concat(a?" ".concat(a):"").concat(f?" full-text":""),onClick:function(e){return d(p({title:_,preview:O,description:s,caption:r,tools:D},Z),e)},onMouseEnter:v,onMouseLeave:g,style:E},o().createElement("div",{className:"ms-head"},Z.isDraggable&&Z.connectDragSource&&Z.connectDragSource(o().createElement("div",{className:"mapstore-side-card-tool text-center"},o().createElement("div",{style:{width:10,overflow:"hidden"}},R))),O&&o().createElement("div",{className:"mapstore-side-preview",style:k},O),o().createElement("div",{className:"mapstore-side-card-container"},o().createElement("div",{className:"mapstore-side-card-inner"},o().createElement("div",{className:"mapstore-side-card-left-container"},o().createElement("div",{className:"mapstore-side-card-info"},_&&o().createElement("div",{className:"mapstore-side-card-title"},o().createElement("span",null,_)),s&&o().createElement("div",{className:"mapstore-side-card-desc"},c()(s)?s:o().createElement("span",null,s)),r&&o().createElement("div",{className:"mapstore-side-card-caption"},o().createElement("span",null,r))),n),o().createElement("div",{className:"mapstore-side-card-right-container"},o().createElement("div",{className:"mapstore-side-card-tool text-center",style:N},D),"sm"!==j&&o().createElement("div",{className:"mapstore-side-card-loading"},o().createElement(l.Z,{className:"mapstore-side-card-loader",size:12,hidden:!T})))))),t&&o().createElement("div",{className:"ms-body"},t))}},993451:(e,t,r)=>{"use strict";r.d(t,{Z:()=>P});var n=r(86638),o=r(675263),i=r.n(o),c=r(984596),l=r.n(c),a=r(701469),u=r.n(a),s=r(414293),p=r.n(s),f=r(747037),y=r.n(f),b=r(867076),d=["messages"];function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==m(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===m(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var w=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"label";if(u()(t))return t.map((function(o){var i=(0,n.S$)(e,o[r]||y()(o)&&o||"");return g(g({},o),{},O({},r,p()(i)?t:i))}));var o=(0,n.S$)(e,t);return p()(o)?t:o},j=function(e,t,r){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;return g(g({},n),{},O({},o,e[o]&&w(t,e[o],r)))}};const P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label";return(0,b.compose)((0,b.getContext)({messages:i().object}),(0,b.mapProps)((function(r){var n=r.messages,o=v(r,d);return g(g({},o),l()(e).reduce(j(o,n,t),{}))})))}},112346:(e,t,r)=>{"use strict";r.d(t,{Z:()=>M});var n=r(124852),o=r.n(n),i=r(675263),c=r.n(i),l=r(757588),a=r(145869),u=r(80717),s=r(805346);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,h(n.key),n)}}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function d(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function v(e,t,r){return(t=h(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===p(t)?t:String(t)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(l,e);var t,r,n,i,c=(n=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(n);if(i){var r=m(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return d(this,e)});function l(){return f(this,l),c.apply(this,arguments)}return t=l,(r=[{key:"render",value:function(){var e=this;return o().createElement(u.Z,{btnDefaultProps:{className:"square-button-md",bsStyle:"primary"},btnGroupProps:{style:{margin:10}},buttons:[{glyph:this.props.checked?"chevron-down":"chevron-left",visible:!0,tooltip:this.props.checked?o().createElement(s.Z,{msgId:"collapse"}):o().createElement(s.Z,{msgId:"expand"}),onClick:function(){return e.props.onClick(!e.props.checked)}}]})}}])&&y(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(o().Component);v(g,"propTypes",{checked:c().bool,onClick:c().func}),v(g,"defaultProps",{checked:!1,onClick:function(){}});const O=g;var w=r(282467),j=r(82110);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,C(n.key),n)}}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function x(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return N(e)}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}function T(e,t,r){return(t=C(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function C(e){var t=function(e,t){if("object"!==P(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==P(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===P(t)?t:String(t)}var R=function(){return o().createElement(w.Z,{className:"square-button-sm no-border switch-error"},o().createElement(l.Glyphicon,{glyph:"exclamation-mark",className:"text-danger"}))},D=function(){return o().createElement("div",{className:"switch-loading"},o().createElement(j.Z,{size:"small"}))},Z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(s,e);var t,r,n,i,c=(n=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(n);if(i){var r=_(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return x(this,e)});function s(){var e;E(this,s);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return T(N(e=c.call.apply(c,[this].concat(r))),"state",{}),e}return t=s,(r=[{key:"renderHeader",value:function(){var e=this,t=this.props.useToolbar?O:a.Z;return o().createElement("div",null,o().createElement("div",{className:"pull-left"},this.props.title||this.props.header),o().createElement("div",{className:"pull-right"},this.props.locked?null:o().createElement(t,{checked:this.props.expanded,onClick:function(t){e.props.onSwitch(t)}}),this.props.error?o().createElement(R,null):null,this.props.loading?o().createElement(D,null):null,this.props.buttons.length>0&&this.props.expanded&&o().createElement(u.Z,{btnDefaultProps:{className:"square-button-sm no-border"},buttons:this.props.buttons})))}},{key:"render",value:function(){return o().createElement(l.Panel,{className:"mapstore-switch-panel",collapsible:!0,expanded:this.props.expanded,defaultExpanded:this.props.defaultExpanded,header:this.renderHeader()},this.props.children)}}])&&S(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),s}(o().Component);T(Z,"propTypes",{header:c().node,title:c().oneOfType([c().string,c().node]),defaultExpanded:c().string,expanded:c().bool,onSwitch:c().func,locked:c().bool,buttons:c().array,loading:c().bool,error:c().any,errorMsgId:c().string,transitionProps:c().object,useToolbar:c().bool}),T(Z,"defaultProps",{title:"",expanded:!1,onSwitch:function(){},locked:!1,buttons:[],useToolbar:!1});const M=Z},202576:(e,t,r)=>{"use strict";r.d(t,{Z:()=>w});var n=r(124852),o=r.n(n),i=r(180307),c=r.n(i),l=r(675263),a=r.n(l),u=r(757588),s=r(352595),p=r(950966);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,g(n.key),n)}}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function m(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function h(e,t,r){return(t=g(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e){var t=function(e,t){if("object"!==f(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===f(t)?t:String(t)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(a,e);var t,r,n,i,l=(n=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(n);if(i){var r=v(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return m(this,e)});function a(){return y(this,a),l.apply(this,arguments)}return t=a,(r=[{key:"renderPopover",value:function(){return o().createElement(u.Popover,{id:this.props.id,placement:this.props.placement,positionLeft:this.props.left,positionTop:this.props.top,title:this.props.title},this.props.text)}},{key:"renderContent",value:function(){var e=this;return o().createElement(u.Glyphicon,{ref:function(t){e.target=t},className:"text-".concat(this.props.bsStyle),glyph:this.props.glyph})}},{key:"render",value:function(){var e=this,t=!0===this.props.trigger?["hover","focus"]:this.props.trigger;return o().createElement("span",{className:"mapstore-info-popover"},this.props.trigger?o().createElement(p.Z,{trigger:t,placement:this.props.placement,overlay:this.renderPopover()},this.renderContent()):[this.renderContent(),o().createElement(s.Z,{placement:this.props.placement,show:!0,target:function(){return c().findDOMNode(e.target)}},this.renderPopover())])}}])&&b(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(o().Component);h(O,"propTypes",{id:a().string,title:a().string,text:a().string,glyph:a().string,bsStyle:a().string,placement:a().string,left:a().number,top:a().number,trigger:a().oneOfType([a().array,a().bool])}),h(O,"defaultProps",{id:"",title:"",text:"",placement:"right",left:200,top:50,glyph:"question-sign",bsStyle:"info",trigger:["hover","focus"]});const w=O}}]);