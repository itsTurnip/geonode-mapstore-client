(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[86850],{886850:(t,e,r)=>{"use strict";r.d(e,{V6:()=>V,Mc:()=>_,v$:()=>R,ED:()=>Q});var n=r(472500),o=r.n(n),a=r(984596),i=r.n(a),c=r(414293),s=r.n(c),u=r(513218),l=r.n(u),p=r(49977),f=r.n(p),y=r(505055),m=r(507526),v=r(375875),b=r.n(v),g=r(47805),d=r(624262),h=r(510284),w=r(439156),O=["totalFeatures","features"],S=["sortOptions","propertyName"];function j(t){return function(t){if(Array.isArray(t))return x(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return x(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?x(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function P(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function N(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function A(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?N(Object(r),!0).forEach((function(e){C(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function C(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==F(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e);if("object"!==F(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===F(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var q=r.n(w)()({wfsVersion:"1.1.0"}),E=q.getFeature,T=q.query,B=q.sortBy,D=q.propertyName,I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.totalFeatures,r=t.features,n=P(t,O),o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=o.startIndex,i=arguments.length>2?arguments[2]:void 0;return i>e&&i===a+r.length&&e===r.length?A(A({},n),{},{features:r,totalFeatures:i}):A(A({},n),{},{features:r,totalFeatures:e})},k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.pagination||!s()(e.startIndex)&&!s()(e.maxFeatures)&&{startIndex:e.startIndex,maxFeatures:e.maxFeatures}},G=function(t){return{crs:{type:"name",properties:{name:"urn:ogc:def:crs:EPSG::4326"}},numberMatched:t.length,numberReturned:t.length,timeStamp:"2020-07-20T11:36:20.118Z",totalFeatures:t.length,type:"FeatureCollection",features:t}},L=function(t,e){if(e.filterFields&&0!==e.filterFields.length){var r=t.features.filter((0,g.createFeatureFilter)(e));t.features=r,t.numberMatched=r.length,t.numberReturned=r.length,t.totalFeatures=r.length}return e.sortOptions&&e.sortOptions.sortBy&&e.sortOptions.sortOrder&&"NONE"!==e.sortOptions.sortOrder&&t.features.sort((function(t,r){var n=t.properties[e.sortOptions.sortBy],o=r.properties[e.sortOptions.sortBy],a=n.toLowerCase().localeCompare(o.toLowerCase());return"ASC"===e.sortOptions.sortOrder?a:-1*a})),t},M=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"json",a=(0,g.getWFSFilterData)(e,r),i=o().parse(t,!0),c=l()(i.query)?i.query:{};c.service="WFS",c.outputFormat=n;var s=o().format({protocol:i.protocol,host:i.host,pathname:i.pathname,query:c});return r.layer&&"vector"===r.layer.type?f().Observable.defer((function(){return new Promise((function(t){var n=G(r.layer.features);t(L(n,e))}))})):{data:a,queryString:s}},V=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3?arguments[3]:void 0;if(r.layer&&"vector"===r.layer.type)return M(t,e,r,n);var o=M(t,e,r,n),a=o.data,i=o.queryString;return f().Observable.defer((function(){return b().post(i,a,{timeout:6e4,responseType:"arraybuffer",headers:{Accept:"application/xml","Content-Type":"application/xml"}})}))},W=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(r.layer&&"vector"===r.layer.type)return M(t,e,r);var n=M(t,e,r),o=n.data,a=n.queryString;return f().Observable.defer((function(){return b().post(a,o,{timeout:6e4,headers:{Accept:"application/json","Content-Type":"application/xml"}})})).let(h.oB).map((function(t){return I(t.data,k(e,r),r.totalFeatures)}))},_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.search,r=void 0===e?{}:e,n=t.url,o=t.name,a=arguments.length>1?arguments[1]:void 0,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=c.sortOptions,u=c.propertyName,l=P(c,S);return W(r.url||n,a&&"object"===F(a)?A(A({},a),{},{typeName:o||a.typeName}):E(T(o,[].concat(j(s?[B(s.sortBy,s.sortOrder)]:[]),j(u?[D(u)]:[]),j(a?i()(a):[]))),l),l).catch((function(t){if("OGCError"===t.name&&"NoApplicableCode"===t.code&&!s&&u&&u[0])return W(r.url||n,a&&"object"===F(a)?A(A({},a),{},{typeName:o||a.typeName}):E(T(o,[B(u[0])].concat(j(u?[D(u)]:[]),j(a?i()(a):[]))),l),l);throw t}))},R=function(t){var e=t.layer;return f().Observable.defer((function(){return b().get(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.name,r=t.search,n=void 0===r?{}:r,a=t.url,i=t.describeFeatureTypeURL,c=o().parse(i||n.url||a,!0);return o().format(A(A({},c),{},{search:void 0,query:A(A({},c.query),{},{service:"WFS",version:"1.1.0",typeName:e,outputFormat:"application/json",request:"DescribeFeatureType"})}))}(e))})).let(h.oB)},Q=function(t){var e=t.layer;return f().Observable.defer((function(){return b().get(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.name,r=t.search,n=void 0===r?{}:r,a=t.url,i=(0,d.Fh)({name:e,url:n&&n.url||a}),c=o().parse(i,!0);return o().format(A(A({},c),{},{search:void 0,query:A(A({},c.query),{},{service:"WFS",version:"1.1.1",request:"GetCapabilities"})}))}(e))})).let(h.oB).switchMap((function(t){return f().Observable.bindNodeCallback((function(t,e){return(0,y.parseString)(t,{tagNameProcessors:[m.stripPrefix],explicitArray:!1,mergeAttrs:!0},e)}))(t.data)}))}},439156:(t,e,r)=>{function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e);if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===n(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c=r(102245),s=r(984596),u=r(378889).wfsToGmlVersion,l=function(t){return'service="WFS" version="'+t+'" '+("1.0.0"===t?'outputFormat="GML2" ':"")+'xmlns:gml="http://www.opengis.net/gml" xmlns:wfs="http://www.opengis.net/wfs" xmlns:ogc="http://www.opengis.net/ogc" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/wfs '+"http://schemas.opengis.net/wfs/".concat(t,"1.0.0"===t?'/WFS-basic.xsd"':'/wfs.xsd"')},p=function(t){return'service="WFS" version="'+t+'" xmlns:wfs="http://www.opengis.net/wfs/2.0" xmlns:fes="http://www.opengis.net/fes/2.0" xmlns:gml="http://www.opengis.net/gml/3.2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/wfs/2.0 http://schemas.opengis.net/wfs/2.0/wfs.xsd http://www.opengis.net/gml/3.2 http://schemas.opengis.net/gml/3.2.1/gml.xsd"'};t.exports=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.wfsVersion,r=void 0===e?"1.1.0":e,n=t.gmlVersion,o=t.filterNS,i=t.wfsNS,f=void 0===i?"wfs":i,y=n;!y&&r?y=u(r):y||(y="3.1.1");var m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.viewParams,n=t.resultType,o=t.outputFormat,a=t.startIndex,i=t.maxFeatures,c=function(t){return 0===r.indexOf("2.")?'count="'.concat(t,'"'):'maxFeatures="'.concat(t,'"')};return(0===r.indexOf("1.")?l(r):p(r))+(n?' resultType="'.concat(n,'"'):"")+(o?' outputFormat="'.concat(o,'"'):"")+(a||0===a?' startIndex="'.concat(a,'"'):"")+(i||0===i?" ".concat(c(i)):"")+(e?' viewParams="'.concat(e,'"'):"")},v=function(t){return s(t).map((function(t){return"<".concat("2.0"===r?"fes":"ogc",":PropertyName>").concat(t,"</").concat("2.0"===r?"fes":"ogc",":PropertyName>")})).join("")};return a(a({propertyName:v},c({gmlVersion:y,wfsVersion:r,filterNS:o||"2.0"===r?"fes":"ogc"})),{},{getFeature:function(t,e){return"<".concat(f,":GetFeature ").concat(m(e),">").concat(Array.isArray(t)?t.join(""):t,"</").concat(f,":GetFeature>")},sortBy:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ASC";return"<".concat(f,":SortBy><").concat(f,":SortProperty>").concat(v(t),"<").concat(f,":SortOrder>").concat(e,"</").concat(f,":SortOrder></").concat(f,":SortProperty></").concat(f,":SortBy>")},query:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.srsName,a=void 0===o?"EPSG:4326":o;return"<".concat(f,":Query ").concat("2.0"===r?"typeNames":"typeName",'="').concat(t,'" ').concat("native"!==a?'srsName="'.concat(a,'"'):"",">")+"".concat(Array.isArray(e)?e.join(""):e)+"</".concat(f,":Query>")}})}}}]);