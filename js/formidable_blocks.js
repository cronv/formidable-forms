!function(){var e={511:function(e,t,r){"use strict";var n=r(81),o=r.n(n),i=r(645),l=r.n(i)()(o());l.push([e.id,"button.t3RQZV1ZQbHGYyQUnhIY {\n\tcursor: progress;\n\topacity: 0.7;\n\tposition: relative;\n\ttext-indent: -999px;\n\tmin-width: 70px;\n\toverflow: hidden;\n}\nbutton.t3RQZV1ZQbHGYyQUnhIY:before {\n\tcontent: '';\n\tdisplay: inline-block;\n\tposition: absolute;\n\tbackground: transparent;\n\tborder: 1px solid #fff;\n\tborder-top-color: transparent;\n\tborder-left-color: transparent;\n\tborder-radius: 50%;\n\n\tbox-sizing: border-box;\n\ttop: 50%;\n\tleft: 50%;\n\tmargin-top: -10px;\n\tmargin-left: -10px;\n\twidth: 20px;\n\theight: 20px;\n\n\t-webkit-animation: Ts7haRQUDk0YMfLiQW00 2s linear infinite;\n\t-moz-animation: Ts7haRQUDk0YMfLiQW00 2s linear infinite;\n\t-o-animation: Ts7haRQUDk0YMfLiQW00 2s linear infinite;\n\tanimation: Ts7haRQUDk0YMfLiQW00 2s linear infinite;\n}",""]),t.ZP=l},645:function(e){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var l={};if(n)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(l[c]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);n&&l[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:function(e){"use strict";e.exports=function(e){return e[1]}},703:function(e,t,r){"use strict";var n=r(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,l){if(l!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},697:function(e,t,r){e.exports=r(703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},379:function(e){"use strict";var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var i={},l=[],a=0;a<e.length;a++){var c=e[a],s=n.base?c[0]+n.base:c[0],u=i[s]||0,f="".concat(s," ").concat(u);i[s]=u+1;var m=r(f),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var b=o(p,n);n.byIndex=a,t.splice(a,0,{identifier:f,updater:b,references:1})}l.push(f)}return l}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var i=n(e=e||[],o=o||{});return function(e){e=e||[];for(var l=0;l<i.length;l++){var a=r(i[l]);t[a].references--}for(var c=n(e,o),s=0;s<i.length;s++){var u=r(i[s]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=c}}},569:function(e){"use strict";var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:function(e){"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:function(e,t,r){"use strict";e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:function(e){"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:function(e){"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,r),i.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.nc=void 0,function(){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,r,n){var o,i,l,a;n((o={},l=r,a=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i=t),(i="symbol"==e(a)?a:String(a))in o?Object.defineProperty(o,i,{value:l,enumerable:!0,configurable:!0,writable:!0}):o[i]=l,o))}function n(e,t){return e?" ".concat(t,'="').concat(e,'"'):""}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,l(n.key),n)}}function l(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==o(t)?t:String(t)}function a(e,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},a(e,t)}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}var s=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(f,wp.element.Component);var t,r,l,s,u=(l=f,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=c(l);if(s){var r=c(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function f(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),u.apply(this,arguments)}return t=f,(r=[{key:"render",value:function(){return wp.element.createElement("div",null,"[formidable",(t=(e=this.props).formId,r=e.title,o=e.description,i=e.minimize,l="",l+=n(t,"id"),l+=n(r,"title"),(l+=n(o,"description"))+n(i,"minimize")),"]");var e,t,r,o,i,l}}])&&i(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),f}(),u=r(697),f=r.n(u);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,d(n.key),n)}}function d(e){var t=function(e,t){if("object"!=m(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==m(t)?t:String(t)}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}var w=wp.i18n,h=w.__,g=w.sprintf,_=wp.element.Component,E=wp.components.SelectControl,O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(l,e);var t,r,n,o,i=(n=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(n);if(o){var r=v(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function l(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),i.apply(this,arguments)}return t=l,r=[{key:"createOptions",value:function(e,t){var r,n=e.map((function(e){return{label:e.label,value:e.value}}));return[{label:g(h("Select a %s","formidable"),t),value:""}].concat(function(e){if(Array.isArray(e))return p(e)}(r=n)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())}},{key:"render",value:function(){var e=this.props,t=e.selected,r=e.items,n=e.onChange,o=e.itemName,i=e.itemNamePlural,l=e.label,a=e.help;return r&&0!==r.length?wp.element.createElement(E,{value:t,options:this.createOptions(r,o),label:l,help:a,onChange:n}):wp.element.createElement("p",{className:"frm-block-select-no-items"},g(h("Currently, there are no %s","formidable"),i))}}],r&&b(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(_);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,k(n.key),n)}}function k(e){var t=function(e,t){if("object"!=S(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=S(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==S(t)?t:String(t)}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}O.defaultProps={itemName:"item",itemNamePlural:"items"},O.propTypes={selected:f().oneOfType([f().string,f().number]),items:f().array,onChange:f().func,itemName:f().string,itemNamePlural:f().string,label:f().string,help:f().string};var T=wp.i18n.__,A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(l,wp.element.Component);var t,r,n,o,i=(n=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(n);if(o){var r=x(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function l(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),i.apply(this,arguments)}return t=l,(r=[{key:"render",value:function(){var e=this.props,t=e.formId,r=e.setAttributes,n=e.forms;return wp.element.createElement(O,{selected:t,itemName:T("form","formidable"),itemNamePlural:T("forms","formidable"),items:n,onChange:function(e){r({formId:e})}})}}])&&j(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),l}();function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function R(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,N(n.key),n)}}function N(e){var t=function(e,t){if("object"!=C(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=C(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==C(t)?t:String(t)}function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(e,t)}function z(e){return z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},z(e)}A.propTypes={formId:f().string,setAttributes:f().func.isRequired};var H=wp.i18n.__,M=wp.element.Component,D=wp.blockEditor.InspectorControls,F=wp.components,B=F.PanelBody,V=F.PanelRow,U=F.ToggleControl,L=F.ExternalLink,Q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(a,e);var r,n,o,i,l=(o=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=z(o);if(i){var r=z(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),l.apply(this,arguments)}return r=a,(n=[{key:"render",value:function(){var e,r,n,o=this.props,i=o.setAttributes,l=o.attributes,a=o.forms,c=l.formId,u=l.title,f=l.description,m=l.minimize;return wp.element.createElement(D,null,wp.element.createElement(B,{title:H("Select Form","formidable"),initialOpen:!0},wp.element.createElement(V,null,wp.element.createElement(A,{formId:c,setAttributes:i,forms:a})),c&&wp.element.createElement(V,null,wp.element.createElement(L,{href:(e=window.location.pathname,r=e.indexOf("wp-admin"),n="/",r>-1&&(n=e.substr(0,r)),n+"wp-admin/admin.php?page=formidable&frm_action=edit&id=".concat(c))},H("Go to form","formidable")))),wp.element.createElement(B,{title:H("Options","formidable"),initialOpen:!1},wp.element.createElement(U,{label:H("Show Form Title","formidable"),checked:u,onChange:function(e){t("title",e?"1":"",i)}}),wp.element.createElement(U,{label:H("Show Form Description","formidable"),checked:f,onChange:function(e){t("description",e?"1":"",i)}}),wp.element.createElement(U,{label:H("Minimize HTML","formidable"),checked:m,onChange:function(e){t("minimize",e?"1":"",i)}})),wp.element.createElement(B,{title:H("Shortcode","formidable"),initialOpen:!1},wp.element.createElement(V,null,wp.element.createElement(s,this.props.attributes))))}}])&&R(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),a}(M);function W(e){return W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W(e)}function Y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,Z(n.key),n)}}function Z(e){var t=function(e,t){if("object"!=W(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=W(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==W(t)?t:String(t)}function G(e,t){return G=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},G(e,t)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}Q.propTypes={attributes:f().object,setAttributes:f().func};var $=wp.element.Component,J=wp.components.Dashicon,K=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&G(e,t)}(l,e);var t,r,n,o,i=(n=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(n);if(o){var r=q(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===W(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function l(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),i.apply(this,arguments)}return t=l,(r=[{key:"loadCustomSvgIcon",value:function(){return!!formidable_form_selector.icon.match(/frm_white_label_icon/)&&wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:"120",height:"120"},wp.element.createElement("path",{d:"M18.1 1.3H2C.9 1.3 0 2 0 3V17c0 1 .8 1.9 1.9 1.9H18c1 0 1.9-.9 1.9-2V3.2c0-1-.8-1.9-1.9-1.9zM18 16.9H2a.2.2 0 0 1-.2-.3V3.4c0-.2 0-.3.2-.3H18c.1 0 .2.1.2.3v13.2c0 .2 0 .3-.2.3zm-1.6-3.6v1c0 .2-.3.4-.5.4H8a.5.5 0 0 1-.5-.5v-1c0-.2.2-.4.5-.4h7.8c.2 0 .4.2.4.5zm0-3.8v1c0 .2-.3.4-.5.4H8a.5.5 0 0 1-.5-.4v-1c0-.2.2-.4.5-.4h7.8c.2 0 .4.2.4.4zm0-3.7v1c0 .2-.3.4-.5.4H8a.5.5 0 0 1-.5-.5v-1c0-.2.2-.4.5-.4h7.8c.2 0 .4.2.4.5zm-9.9.5a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0zm0 3.7a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0zm0 3.8a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0z"}))}},{key:"render",value:function(){return!1!==this.loadCustomSvgIcon()?this.loadCustomSvgIcon():"svg"!==formidable_form_selector.icon?wp.element.createElement(J,{icon:formidable_form_selector.icon}):wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 599.68 601.37",width:"120",height:"120"},wp.element.createElement("path",{className:"cls-1 orange",d:"M289.6 384h140v76h-140z"}),wp.element.createElement("path",{className:"cls-1",d:"M400.2 147h-200c-17 0-30.6 12.2-30.6 29.3V218h260v-71zM397.9 264H169.6v196h75V340H398a32.2 32.2 0 0 0 30.1-21.4 24.3 24.3 0 0 0 1.7-8.7V264z"}),wp.element.createElement("path",{className:"cls-1",d:"M299.8 601.4A300.3 300.3 0 0 1 0 300.7a299.8 299.8 0 1 1 511.9 212.6 297.4 297.4 0 0 1-212 88zm0-563A262 262 0 0 0 38.3 300.7a261.6 261.6 0 1 0 446.5-185.5 259.5 259.5 0 0 0-185-76.8z"}))}}])&&Y(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),l}($),X=wp.element.Fragment,ee=wp.i18n.__,te=wp.blocks.registerBlockType,re=wp.components.Notice,ne=wp.serverSideRender;te("formidable/simple-form",{title:formidable_form_selector.form_block_name,description:formidable_form_selector.form_block_description,icon:K,category:"widgets",keywords:[ee("contact forms","formidable"),"formidable"],edit:function(e){var t=e.setAttributes,r=e.attributes,n=e.isSelected,o=r.formId,i=formidable_form_selector.forms;return 0===i.length?wp.element.createElement(re,{status:"warning",isDismissible:!1},ee("This site does not have any forms.","formidable")):o?wp.element.createElement(X,null,wp.element.createElement(Q,{attributes:r,setAttributes:t,forms:i}),n&&wp.element.createElement("style",null,"\n    .components-panel__body.editor-block-inspector__advanced {\n        display:none;\n    }\n"),wp.element.createElement(ne,{block:"formidable/simple-form",attributes:r})):wp.element.createElement("div",{className:"frm-block-intro-screen"},wp.element.createElement("div",{className:"frm-block-intro-content"},wp.element.createElement(K,null),wp.element.createElement("div",{className:"frm-block-title"},formidable_form_selector.name),wp.element.createElement("div",{className:"frm-block-selector-screen"},wp.element.createElement(A,{formId:o,setAttributes:t,forms:i}))))},save:function(e){var t=e.attributes;return void 0===t.formId?"":wp.element.createElement(X,null,wp.element.createElement(s,t))}});var oe=wp.i18n.__,ie=wp.blocks.registerBlockType,le=wp.components.Notice,ae=wp.element.createElement("svg",{width:20,height:20},wp.element.createElement("path",{d:"M16.9 0H3a2 2 0 0 0-1.9 1.9V18a2 2 0 0 0 2 1.9h13.7a2 2 0 0 0 1.9-1.9V2a2 2 0 0 0-2-1.9zm0 18.1H3v-10H17v10zm0-11.9H3V2H17v4.3zM5.5 12.6H7c.3 0 .5-.3.5-.5v-1.5c0-.3-.3-.5-.5-.5H5.5c-.3 0-.5.3-.5.5V12c0 .3.3.5.5.5zm7.5 3.8h1.5c.3 0 .5-.3.5-.6v-5.2c0-.3-.3-.5-.5-.5H13c-.3 0-.5.3-.5.5v5.3c0 .2.3.4.5.4zm-7.5 0H7c.3 0 .5-.3.5-.6v-1.4c0-.3-.3-.6-.5-.6H5.5c-.3 0-.5.3-.5.6v1.4c0 .3.3.6.5.6zm3.8-3.8h1.4c.3 0 .6-.3.6-.5v-1.5c0-.3-.3-.5-.6-.5H9.3c-.3 0-.6.3-.6.5V12c0 .3.3.5.6.5zm0 3.8h1.4c.3 0 .6-.3.6-.6v-1.4c0-.3-.3-.6-.6-.6H9.3c-.3 0-.6.3-.6.6v1.4c0 .3.3.6.6.6z"}));ie("formidable/calculator",{title:oe("Calculator Form","formidable"),description:oe("Display a Calculator Form","formidable"),icon:ae,category:"widgets",keywords:["calculation","formidable"],edit:function(e){return e.setAttributes,e.attributes.formId,0===formidable_form_selector.forms.length?wp.element.createElement(le,{status:"warning",isDismissible:!1},oe("This site does not have any forms.","formidable")):wp.element.createElement("div",{className:"frm-block-intro-screen"},wp.element.createElement("div",{className:"frm-block-intro-content"},wp.element.createElement(K,null),wp.element.createElement("div",{className:"frm-block-title"},oe("Calculator Form","formidable")),wp.element.createElement("div",{className:"frm-block-selector-screen frm_pro_tip"},wp.element.createElement(le,{status:"warning",isDismissible:!1},oe("This site does not have any calculator forms.","formidable"),wp.element.createElement("br",null),wp.element.createElement("a",{href:formidable_form_selector.link,target:"_blank"},oe("Upgrade Formidable Forms.","formidable"))),wp.element.createElement("img",{src:formidable_form_selector.url+"/images/conversion-calc.jpg",alt:oe("Calculator Form","formidable")}))))}});var ce=wp.i18n.__,se=wp.blocks.registerBlockType,ue=wp.components.Notice,fe=function(e){var t=e.text,r=e.buttonText,n=e.link;return wp.element.createElement(ue,{status:"warning",isDismissible:!1},t,wp.element.createElement("br",null),wp.element.createElement("a",{href:n,target:"_blank"},r))};function me(e){return me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},me(e)}function pe(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,be(n.key),n)}}function be(e){var t=function(e,t){if("object"!=me(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=me(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==me(t)?t:String(t)}se("frm-modal/modal",{title:formidable_form_selector.modal_block_name,description:formidable_form_selector.modal_block_description,icon:K,category:"widgets",keywords:["modal","formidable"],edit:function(e){e.setAttributes,e.attributes;var t=ce("Bootstrap modal popup","formidable");return wp.element.createElement("div",{className:"frm-block-intro-screen"},wp.element.createElement("div",{className:"frm-block-intro-content"},wp.element.createElement(K,null),wp.element.createElement("div",{className:"frm-block-title"},t),wp.element.createElement("div",{className:"frm-block-selector-screen frm_pro_tip",style:{alignSelf:"stretch"}},formidable_form_selector.modalAddon.hasAccess?wp.element.createElement(fe,{text:ce("This site does not have popup modals active.","formidable"),buttonText:ce("Install Formidable Modals","formidable"),link:formidable_form_selector.modalAddon.link}):wp.element.createElement(fe,{text:ce("This site does not have popup modals.","formidable"),buttonText:ce("Upgrade Formidable Forms","formidable"),link:formidable_form_selector.link}),wp.element.createElement("div",{style:{padding:"38px",textAlign:"center",backgroundColor:"#f2f4f7",marginTop:"24px"}},wp.element.createElement("img",{src:formidable_form_selector.url+"/images/modal.png",alt:t,style:{maxWidth:"504px",height:"auto",borderRadius:"12px"}})))))}}),function(){if(!formidable_form_selector.chartsAddon.installed){var e=wp.i18n.__,t=wp.blocks.registerBlockType,r=wp.components.Notice,n=function(e){var t=e.text,n=e.buttonText,o=e.link;return wp.element.createElement(r,{status:"warning",isDismissible:!1},t,wp.element.createElement("br",null),wp.element.createElement("a",{href:o,target:"_blank"},n))},o=formidable_form_selector.chart_block_name;t("frm-charts/graph",{title:o,description:formidable_form_selector.chart_block_description,icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 25 23"},wp.element.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2.5",d:"M23 2v19m-7-7.5V21M9 10.8V21m-7-2.9V21"})),category:"design",edit:function(){return wp.element.createElement("div",{className:"frm-block-intro-screen"},wp.element.createElement("div",{className:"frm-block-intro-content"},wp.element.createElement(K,null),wp.element.createElement("div",{className:"frm-block-title"},o),wp.element.createElement("div",{className:"frm-block-selector-screen frm_pro_tip",style:{alignSelf:"stretch"}},formidable_form_selector.chartsAddon.hasAccess?wp.element.createElement(n,{text:e("This site does not have Formidable Charts active.","formidable"),buttonText:e("Install Formidable Charts","formidable"),link:formidable_form_selector.chartsAddon.link}):wp.element.createElement(n,{text:e("This site does not have Formidable Charts installed.","formidable"),buttonText:e("Upgrade Formidable Forms","formidable"),link:formidable_form_selector.link}),wp.element.createElement("div",{style:{padding:"38px",margin:"0 auto",maxWidth:"600px"}},wp.element.createElement("img",{src:formidable_form_selector.url+"/images/demo-graph.svg",alt:o})))))}})}}();var de=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r;return t=e,r=[{key:"toggleAddonState",value:function(e,t){return fetch(ajaxurl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({action:e,nonce:frmGlobal.nonce,plugin:t})}).then((function(e){return e.json()}))}}],null&&pe(t.prototype,null),r&&pe(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),ye=r(379),ve=r.n(ye),we=r(795),he=r.n(we),ge=r(569),_e=r.n(ge),Ee=r(565),Oe=r.n(Ee),Se=r(216),je=r.n(Se),ke=r(589),Pe=r.n(ke),xe=r(511),Te={};Te.styleTagTransform=Pe(),Te.setAttributes=Oe(),Te.insert=_e().bind(null,"head"),Te.domAPI=he(),Te.insertStyleElement=je(),ve()(xe.ZP,Te);var Ae=xe.ZP&&xe.ZP.locals?xe.ZP.locals:void 0;function Ce(e){return Ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ce(e)}function Re(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ne(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Re(Object(r),!0).forEach((function(t){var n,o,i,l;n=e,o=t,i=r[t],l=function(e,t){if("object"!=Ce(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=Ce(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==Ce(l)?l:String(l))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Re(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Ie(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var ze=wp.i18n.__,He=wp.blocks.registerBlockType,Me=wp.components.Notice,De=wp.element,Fe=De.useState,Be=(De.useEffect,formidable_form_selector),Ve=Be.viewsAddon.hasAccess?Be.viewsAddon.link:Be.link;He("formidable/simple-view",{title:formidable_form_selector.views_block_name,description:formidable_form_selector.views_block_description,icon:K,category:"widgets",keywords:["views","formidable"],edit:function(){var e,t,r=(e=Fe({defaultClassname:"frm-activate-addon frm-button-primary button button-primary",loadingClassname:Ae["frm-loading"],classnames:"frm-activate-addon frm-button-primary button button-primary",label:!Be.viewsAddon.installed&&Be.viewsAddon.hasAccess?ze("Install","formidable"):ze("Activate","formidable"),isLoading:!1}),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,l,a=[],c=!0,s=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(s)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Ie(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Ie(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=r[0],o=r[1],i=ze("Formidable Views","formidable");return wp.element.createElement("div",{className:"frm-block-intro-screen"},wp.element.createElement("div",{className:"frm-block-intro-content"},wp.element.createElement(K,null),wp.element.createElement("div",{className:"frm-block-title"},i),wp.element.createElement("div",{className:"frm-block-selector-screen frm_pro_tip",style:{alignSelf:"stretch"}},!Be.viewsAddon.hasAccess&&wp.element.createElement(Me,{status:"warning",isDismissible:!1},wp.element.createElement("div",{style:{maxWidth:"500px",margin:"auto"}},ze("Effortlessly transform form data into webpages with Views, the only integrated form & application builder.","formidable")),wp.element.createElement("br",null),wp.element.createElement("a",{href:Ve,rel:"noreferrer",target:"_blank"},ze("Upgrade Formidable Forms","formidable"))),Be.viewsAddon.hasAccess&&wp.element.createElement(Me,{status:"warning",isDismissible:!1},wp.element.createElement("div",{style:{maxWidth:"500px",margin:"auto"}},ze("Effortlessly transform form data into webpages with Views, the only integrated form & application builder.","formidable")),wp.element.createElement("br",null),wp.element.createElement("button",{className:n.classnames,onClick:function(){!0!==n.isLoading&&(o(Ne(Ne({},n),{},{isLoading:!0,classnames:n.defaultClassname+" "+n.loadingClassname})),Be.viewsAddon.installed||!Be.viewsAddon.hasAccess?de.toggleAddonState("frm_activate_addon","formidable-views/formidable-views.php").then((function(){window.location.reload()})):de.toggleAddonState("frm_install_addon",Be.viewsAddon.url).then((function(){window.location.reload()})))},type:"button"}," ",n.label," ")),wp.element.createElement("div",{style:{padding:"38px",textAlign:"center",backgroundColor:"#f2f4f7",marginTop:"24px"}},wp.element.createElement("img",{src:Be.url+"/images/blocks/views-block-placeholder.jpg",alt:i,style:{maxWidth:"504px",height:"auto",borderRadius:"12px"}})))))}})}()}();