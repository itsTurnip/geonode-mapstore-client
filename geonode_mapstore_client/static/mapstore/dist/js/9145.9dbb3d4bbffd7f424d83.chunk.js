(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[9145],{30280:(t,e,r)=>{"use strict";r.d(e,{Z:()=>P});var o=r(124852),n=r.n(o),i=r(675263),a=r.n(i),l=r(747037),c=r.n(l),s=r(903918),u=r.n(s),p=r(166287);function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,w(o.key),o)}}function b(t,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},b(t,e)}function m(t,e){if(e&&("object"===y(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return v(t)}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}function d(t,e,r){return(e=w(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function w(t){var e=function(t,e){if("object"!==y(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e);if("object"!==y(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===y(e)?e:String(e)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}(s,t);var e,o,i,a,l=(i=s,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=g(i);if(a){var r=g(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return m(this,t)});function s(){var t;f(this,s);for(var e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];return d(v(t=l.call.apply(l,[this].concat(o))),"paint",(function(e){e.save(),e.beginPath();var r=t.props.shapeStyle,o=r.color,n=r.fill;switch(e.fillStyle=n?c()(n)?n:"rgba(".concat(n.r,", ").concat(n.g,", ").concat(n.b,", ").concat(n.a,")"):null,e.strokeStyle=o?c()(o)?o:"rgba(".concat(o.r,", ").concat(o.g,", ").concat(o.b,", ").concat(o.a,")"):null,e.lineWidth=t.props.shapeStyle.width||t.props.shapeStyle.weight,t.props.shapeStyle.dashArray&&t.props.shapeStyle.dashArray.length&&e.setLineDash(t.props.shapeStyle.dashArray),t.props.geomType){case"Polygon":t.paintPolygon(e);break;case"Polyline":t.paintPolyline(e);break;case"Point":t.paintPoint(e,t.props.shapeStyle.markName);break;case"Circle":t.paintPoint(e,"circle");break;case"Marker":t.paintMarker(e);break;case"Text":t.paintText(e);break;case"Symbol":t.paintSymbol(e);break;default:return}e.restore()})),d(v(t),"drawSymbol",(function(e,o){o.clearRect(0,0,600,600);var n=new Image,i=new Image;i.src=r(218845),n.src=e||t.props.shapeStyle.symbolUrl,n.onload=function(){try{o.drawImage(n,t.props.width/2-n.width/2,t.props.height/2-n.height/2)}catch(t){return}},n.onerror=function(){i.onload=function(){try{o.drawImage(i,t.props.width/2-i.width/2,t.props.height/2-i.height/2)}catch(t){return}}}})),d(v(t),"paintSymbol",(function(e){(0,p.isSymbolStyle)(t.props.originalStyle)?t.props.originalStyle.symbolUrlCustomized&&t.props.originalStyle.symbolUrl?t.drawSymbol(t.props.originalStyle.symbolUrlCustomized,e):(0,p.createSvgUrl)(t.props.originalStyle,t.props.originalStyle.symbolUrlCustomized||t.props.originalStyle.symbolUrl).then((function(r){return t.drawSymbol(r,e)})):t.drawSymbol(null,e)})),d(v(t),"paintText",(function(e){var r=t.props,o=r.width,n=r.height,i=t.props.shapeStyle,a=i.textAlign,l=void 0===a?"center":a,c=i.label,s=i.font,u=void 0===s?"14px Arial":s;return e.textAlign=l,e.font=u,"start"===l?(e.strokeText(c||"New",o/2.5,n/2),void e.fillText(c||"New",o/2.5,n/2)):"end"===l?(e.strokeText(c||"New",o/1.5,n/2),void e.fillText(c||"New",o/1.5,n/2)):(e.strokeText(c||"New",o/2,n/2),void e.fillText(c||"New",o/2,n/2))})),d(v(t),"paintPolygon",(function(t){t.transform(1,0,0,1,-27.5,0),t.moveTo(55,8),t.lineTo(100,8),t.lineTo(117.5,40),t.lineTo(100,72),t.lineTo(55,72),t.lineTo(37.5,40),t.closePath(),t.fill(),t.stroke()})),d(v(t),"paintPolyline",(function(t){t.transform(1,0,0,1,0,0),t.moveTo(10,20),t.bezierCurveTo(40,40,70,0,90,20),t.stroke()})),d(v(t),"paintPoint",(function(e,r){var o=t.props.shapeStyle.radius,n=o/2;switch(r){case"square":e.rect(50-n,48.5-n,o,o);break;case"circle":e.arc(50,48.5,n,0,2*Math.PI);break;case"triangle":var i=Math.sqrt(3)*o/2/3;e.moveTo(50,48.5-2*i),e.lineTo(50+n,48.5+i),e.lineTo(50-n,48.5+i),e.closePath();break;case"star":t.paintStar(e,50,48.5,5,n,n/2);break;case"cross":t.paintCross(e,50,48.5,o,.23);break;case"x":e.translate(50,48.5),e.rotate(45*Math.PI/180),e.translate(-50,-48.5),t.paintCross(e,50,48.5,o,.23);break;default:e.arc(50,48.5,o,0,2*Math.PI)}e.fill(),e.stroke()})),d(v(t),"paintMarker",(function(t){var e=new Image;e.src=u();try{t.drawImage(e,42.5,24)}catch(t){return}})),d(v(t),"paintStar",(function(t,e,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5,n=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=Math.PI/2*3,l=e,c=r,s=Math.PI/o;t.moveTo(e,r-n);for(var u=0;u<o;u++)l=e+Math.cos(a)*n,c=r+Math.sin(a)*n,t.lineTo(l,c),a+=s,l=e+Math.cos(a)*i,c=r+Math.sin(a)*i,t.lineTo(l,c),a+=s;t.lineTo(e,r-n),t.closePath()})),d(v(t),"paintCross",(function(t,e,r,o,n){var i=o*n/2,a=o/2;t.moveTo(e-i,r-a),t.lineTo(e+i,r-a),t.lineTo(e+i,r-i),t.lineTo(e+a,r-i),t.lineTo(e+a,r+i),t.lineTo(e+i,r+i),t.lineTo(e+i,r+a),t.lineTo(e-i,r+a),t.lineTo(e-i,r+i),t.lineTo(e-a,r+i),t.lineTo(e-a,r-i),t.lineTo(e-i,r-i),t.closePath()})),t}return e=s,(o=[{key:"componentDidMount",value:function(){var t=this.refs.styleCanvas.getContext("2d");t.clearRect(0,0,this.props.width||500,this.props.height||500),this.paint(t)}},{key:"componentDidUpdate",value:function(){var t=this.refs.styleCanvas.getContext("2d");t.clearRect(0,0,this.props.width||500,this.props.height||500),this.paint(t)}},{key:"render",value:function(){return n().createElement("canvas",{ref:"styleCanvas",style:this.props.style,width:this.props.width,height:this.props.height})}}])&&h(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),s}(n().Component);d(S,"propTypes",{originalStyle:a().object,style:a().object,shapeStyle:a().object,geomType:a().oneOf(["Polygon","Polyline","Point","Marker","Text","Symbol","Circle",void 0]),width:a().number,height:a().number}),d(S,"defaultProps",{originalStyle:{},style:{},shapeStyle:{},geomType:"Polygon",width:100,height:80});const P=S},55105:(t,e,r)=>{"use strict";r.d(e,{Ss:()=>p,Nr:()=>y,ic:()=>f,Jz:()=>b,VM:()=>m,CF:()=>v});var o=r(91175),n=r.n(o),i=r(800827),a=r(552259);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==l(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e);if("object"!==l(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===l(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p=function(t){return t.maplayout&&t.maplayout.layout||{}},y=function(t){return t.maplayout&&t.maplayout.boundingMapRect||{}},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=p(t);return r&&Object.keys(r).filter((function(t){return e[t]})).reduce((function(t,e){return s(s({},t),{},u({},e,r[e]))}),{})||{}},h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=p(t),o=!!n()(e.filter((function(t){return r[t.key]})).map((function(t){return"not"===t.type?r[t.key]!==t.value&&r[t.key]:r[t.key]===t.value})));return o},b=function(t){return h(t,[{key:"right",value:658}])},m=function(t){return h(t,[{key:"bottom",value:30,type:"not"}])},v=function(t){var e=(0,i.Od)(t),r=y(t);return r&&e&&e.size&&{left:(0,a.parseLayoutValue)(r.left,e.size.width),bottom:(0,a.parseLayoutValue)(r.bottom,e.size.height),right:(0,a.parseLayoutValue)(r.right,e.size.width),top:(0,a.parseLayoutValue)(r.top,e.size.height)}}},218845:(t,e,r)=>{t.exports=r.p+"MapStore2/web/client/components/style/vector/iconNotFound.png"}}]);