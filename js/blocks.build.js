!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=13)}([function(e,t,n){(function(t){if("production"!==t.env.NODE_ENV){var r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,o=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r};e.exports=n(15)(o,!0)}else e.exports=n(18)()}).call(t,n(2))},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t,n){n(r({},e,t))}function i(e){return e?Object.keys(e).reduce(function(t,n){return e[n].hasOwnProperty("parent_form_id")&&"0"!==e[n].parent_form_id||!e[n].hasOwnProperty("status")||"published"!==e[n].status||e[n].hasOwnProperty("is_template")&&"0"!==e[n].is_template||!e[n].hasOwnProperty("name")||!e[n].name?t:Object.assign({},t,r({},n,e[n]))},{}):{}}function a(e,t){return e?" "+t+'="'+e+'"':""}function l(){var e=window.location.pathname,t=e.indexOf("wp-admin"),n="/";return t>-1&&(n=e.substr(0,t)),n}t.d=o,t.a=i,t.c=a,t.b=l},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(s===setTimeout)return setTimeout(e,0);if((s===n||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}function i(e){if(p===clearTimeout)return clearTimeout(e);if((p===r||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(t){try{return p.call(null,e)}catch(t){return p.call(this,e)}}}function a(){y&&m&&(y=!1,m.length?b=m.concat(b):d=-1,b.length&&l())}function l(){if(!y){var e=o(a);y=!0;for(var t=b.length;t;){for(m=b,b=[];++d<t;)m&&m[d].run();d=-1,t=b.length}m=null,y=!1,i(e)}}function c(e,t){this.fun=e,this.array=t}function u(){}var s,p,f=e.exports={};!function(){try{s="function"===typeof setTimeout?setTimeout:n}catch(e){s=n}try{p="function"===typeof clearTimeout?clearTimeout:r}catch(e){p=r}}();var m,b=[],y=!1,d=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];b.push(new c(e,t)),1!==b.length||y||o(l)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=u,f.addListener=u,f.once=u,f.off=u,f.removeListener=u,f.removeAllListeners=u,f.emit=u,f.prependListener=u,f.prependOnceListener=u,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),l=n.n(a),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=(wp.i18n.__,wp.element.Component),s=wp.components.Notice,p=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.message,n=e.type,r=n||"warning";return wp.element.createElement(s,{status:r,isDismissible:!1},t)}}]),t}(u);t.a=p,p.propTypes={message:l.a.string.isRequired,type:l.a.string}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),l=n.n(a),c=n(19),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=(wp.i18n.__,wp.element.Component),p=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){var e=this.props.className;return wp.element.createElement("div",{className:e},"[formidable",Object(c.a)(this.props),"]")}}]),t}(s);t.a=p,p.propTypes={className:l.a.string}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(7),l=n(0),c=n.n(l),u=n(8),s=n(1),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=wp.i18n.__,m=wp.element.Component,b=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),p(t,[{key:"render",value:function(){var e=this.props,t=e.form_id,n=e.setAttributes,r=formidable_simple_script_vars.forms;return r=Object(s.a)(r),wp.element.createElement(a.a,{selected:t,itemName:f("form"),itemNamePlural:f("forms"),items:Object(u.a)(r),onChange:function(e){n({form_id:e})}})}}]),t}(m);t.a=b,b.propTypes={form_id:c.a.string,setAttributes:c.a.func.isRequired}},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(0),c=n.n(l),u=n(4),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=wp.i18n.__,f=wp.element.Component,m=wp.components,b=m.SelectControl,y=m.Spinner,d=function(e){function t(e){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"createOptions",value:function(e,t,n){var o=e.map(function(e){return{label:e.label,value:e.value}});return n?o:[{label:p("Select "+(n?"":" a ")+t),value:""}].concat(r(o))}},{key:"render",value:function(){var e=this.props,t=e.selected,n=e.items,r=e.onChange,o=e.itemName,i=e.itemNamePlural,a=e.label,l=e.help,c=e.multiple,s=e.dependent,f=e.form_id,m=e.complete,d=e.className,w=this.props.dependent_item_name;return w=w||"form",s&&!f?wp.element.createElement(u.a,{message:p("A list of "+i+" will be loaded when a "+w+" is selected above."),type:"success"}):n&&0!==n.length||!m?n&&0!==n.length?c?wp.element.createElement(b,{multiple:!0,value:t,options:this.createOptions(n,o,c),label:a,help:l,onChange:r,className:d}):wp.element.createElement(b,{value:t,options:this.createOptions(n,o),label:a,help:l,onChange:r,className:d}):wp.element.createElement("p",{className:"frm-block-spinner"},wp.element.createElement(y,null),p("Loading "+i)):wp.element.createElement("p",{className:"frm-block-select-no-items"},p("Currently, there are no "+i+"."))}}]),t}(f);t.a=d,d.defaultProps={itemName:"item",itemNamePlural:"items"},d.propTypes={selected:c.a.oneOfType([c.a.string,c.a.number,c.a.array]),items:c.a.array,onChange:c.a.func,itemName:c.a.string,itemNamePlural:c.a.string,label:c.a.string,help:c.a.string,multiple:c.a.bool,dependent:c.a.bool,form_id:c.a.oneOfType([c.a.string,c.a.number]),complete:c.a.bool}},function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"name",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"id",r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];if(!e||0===Object.keys(e).length)return[];var i=Object.keys(e).map(function(r){return{label:e[r][t],value:e[r][n]}});return r&&o(i),i}function o(e){e.sort(function(e,t){var n=e.label.toUpperCase(),r=t.label.toUpperCase();return n<r?-1:n>r?1:0})}t.a=r},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),l=n.n(a),c=n(1),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=(wp.i18n.__,wp.element.Component),p=wp.components.ExternalLink,f=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.href,n=e.link_text,r=e.add_sub_dir,o=(r?Object(c.b)():"")+t;return wp.element.createElement(p,{href:o},n)}}]),t}(s);t.a=f,f.propTypes={href:l.a.string,link_text:l.a.string,add_sub_dir:l.a.bool}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=(wp.i18n.__,wp.element.Component),c=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){return wp.element.createElement("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 599.68 601.37"},wp.element.createElement("defs",null),wp.element.createElement("rect",{className:"cls-1 orange",x:"289.64",y:"383.96",width:"140",height:"76"}),wp.element.createElement("path",{className:"cls-1",d:"M400.21,147H200.12c-17,0-30.48,12.2-30.48,29.31V218h260V147Z"}),wp.element.createElement("path",{className:"cls-1",d:"M397.86,264H169.64V460h75V340H397.86A32.22,32.22,0,0,0,428,318.56a24.29,24.29,0,0,0,1.66-8.69V264Z"}),wp.element.createElement("path",{className:"cls-1",d:"M299.84,601.37A300.26,300.26,0,0,1,0,300.68,299.84,299.84,0,1,1,511.85,513.3,297.44,297.44,0,0,1,299.84,601.37Zm0-563A261.94,261.94,0,0,0,38.26,300.68,261.58,261.58,0,1,0,484.8,115.2,259.47,259.47,0,0,0,299.84,38.37Z"}))}}]),t}(l);t.a=c},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),l=n.n(a),c=n(24),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=(wp.i18n.__,wp.element.Component),p=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){var e=this.props.className;return wp.element.createElement("div",{className:e},"[display-frm-data",Object(c.a)(this.props),"]")}}]),t}(s);t.a=p,p.propTypes={className:l.a.string}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(7),l=n(0),c=n.n(l),u=n(8),s=n(25),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=wp.i18n.__,m=wp.element.Component,b=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),p(t,[{key:"render",value:function(){var e=this.props,t=e.view_id,n=e.setAttributes,r=formidable_simple_script_vars.views;return wp.element.createElement(a.a,{selected:t,itemName:f("View"),itemNamePlural:f("Views"),items:Object(u.a)(r,"post_title","ID"),onChange:function(e){Object(s.a)(e,n)}})}}]),t}(m);t.a=b,b.propTypes={view_id:c.a.string,setAttributes:c.a.func.isRequired}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(14),n(23)},function(e,t,n){"use strict";var r=n(5),o=n(20),i=n(10),a=n(1),l=n(6),c=n(4),u=wp.element.Fragment,s=wp,p=(s.data,wp.i18n.__),f=wp.blocks.registerBlockType,m=wp.components.ServerSideRender;f("formidable/simple-form",{title:p("Formidable Form"),description:p("Display a Formidable form"),icon:i.a,category:"widgets",keywords:[p("contact form")],edit:function(e){var t=(e.className,e.isSelected,e.setAttributes),n=e.attributes,r=n.form_id,s=formidable_simple_script_vars.forms,f=Object(a.a)(s);return 0===Object.keys(f).length?wp.element.createElement(c.a,{message:p("This site doesn't have any Formidable forms."),type:"warning"}):r?wp.element.createElement(u,null,wp.element.createElement(o.a,{attributes:n,setAttributes:t}),wp.element.createElement(m,{block:"formidable/simple-form",attributes:n})):wp.element.createElement("div",{className:"frm-block-intro-screen"},wp.element.createElement("div",{className:"frm-block-intro-content"},wp.element.createElement(i.a,null),wp.element.createElement("div",{className:"frm-block-title"},p("Formidable Forms")),wp.element.createElement("div",{className:"frm-block-selector-screen"},wp.element.createElement(l.a,{form_id:r,setAttributes:t}))))},save:function(e){var t=(e.className,e.attributes);return void 0===t.form_id?"":wp.element.createElement(u,null,wp.element.createElement(r.a,t))}})},function(e,t,n){"use strict";(function(t){function r(){return null}var o=n(16),i=n(3),a=n(17),l=function(){};"production"!==t.env.NODE_ENV&&(l=function(e){var t="Warning: "+e;"undefined"!==typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),e.exports=function(e,n){function c(e){var t=e&&(T&&e[T]||e[k]);if("function"===typeof t)return t}function u(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}function s(e){this.message=e,this.stack=""}function p(e){function r(r,c,u,p,f,m,b){if(p=p||N,m=m||u,b!==i){if(n){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}if("production"!==t.env.NODE_ENV&&"undefined"!==typeof console){var d=p+":"+u;!o[d]&&a<3&&(l("You are manually calling a React.PropTypes validation function for the `"+m+"` prop on `"+p+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),o[d]=!0,a++)}}return null==c[u]?r?new s(null===c[u]?"The "+f+" `"+m+"` is marked as required in `"+p+"`, but its value is `null`.":"The "+f+" `"+m+"` is marked as required in `"+p+"`, but its value is `undefined`."):null:e(c,u,p,f,m)}if("production"!==t.env.NODE_ENV)var o={},a=0;var c=r.bind(null,!1);return c.isRequired=r.bind(null,!0),c}function f(e){function t(t,n,r,o,i,a){var l=t[n];if(g(l)!==e)return new s("Invalid "+o+" `"+i+"` of type `"+E(l)+"` supplied to `"+r+"`, expected `"+e+"`.");return null}return p(t)}function m(e){function t(t,n,r,o,a){if("function"!==typeof e)return new s("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var l=t[n];if(!Array.isArray(l)){return new s("Invalid "+o+" `"+a+"` of type `"+g(l)+"` supplied to `"+r+"`, expected an array.")}for(var c=0;c<l.length;c++){var u=e(l,c,r,o,a+"["+c+"]",i);if(u instanceof Error)return u}return null}return p(t)}function b(e){function t(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||N;return new s("Invalid "+o+" `"+i+"` of type `"+P(t[n])+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}return null}return p(t)}function y(e){function n(t,n,r,o,i){for(var a=t[n],l=0;l<e.length;l++)if(u(a,e[l]))return null;return new s("Invalid "+o+" `"+i+"` of value `"+a+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}return Array.isArray(e)?p(n):("production"!==t.env.NODE_ENV&&l("Invalid argument supplied to oneOf, expected an instance of array."),r)}function d(e){function t(t,n,r,o,a){if("function"!==typeof e)return new s("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var l=t[n],c=g(l);if("object"!==c)return new s("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var u in l)if(l.hasOwnProperty(u)){var p=e(l,u,r,o,a+"."+u,i);if(p instanceof Error)return p}return null}return p(t)}function w(e){function n(t,n,r,o,a){for(var l=0;l<e.length;l++){if(null==(0,e[l])(t,n,r,o,a,i))return null}return new s("Invalid "+o+" `"+a+"` supplied to `"+r+"`.")}if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&l("Invalid argument supplied to oneOfType, expected an instance of array."),r;for(var o=0;o<e.length;o++){var a=e[o];if("function"!==typeof a)return l("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+j(a)+" at index "+o+"."),r}return p(n)}function h(e){function t(t,n,r,o,a){var l=t[n],c=g(l);if("object"!==c)return new s("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var u in e){var p=e[u];if(p){var f=p(l,u,r,o,a+"."+u,i);if(f)return f}}return null}return p(t)}function v(e){function t(t,n,r,a,l){var c=t[n],u=g(c);if("object"!==u)return new s("Invalid "+a+" `"+l+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var p=o({},t[n],e);for(var f in p){var m=e[f];if(!m)return new s("Invalid "+a+" `"+l+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var b=m(c,f,r,a,l+"."+f,i);if(b)return b}return null}return p(t)}function _(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(_);if(null===t||e(t))return!0;var n=c(t);if(!n)return!1;var r,o=n.call(t);if(n!==t.entries){for(;!(r=o.next()).done;)if(!_(r.value))return!1}else for(;!(r=o.next()).done;){var i=r.value;if(i&&!_(i[1]))return!1}return!0;default:return!1}}function O(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"===typeof Symbol&&t instanceof Symbol)}function g(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":O(t,e)?"symbol":t}function E(e){if("undefined"===typeof e||null===e)return""+e;var t=g(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function j(e){var t=E(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function P(e){return e.constructor&&e.constructor.name?e.constructor.name:N}var T="function"===typeof Symbol&&Symbol.iterator,k="@@iterator",N="<<anonymous>>",x={array:f("array"),bool:f("boolean"),func:f("function"),number:f("number"),object:f("object"),string:f("string"),symbol:f("symbol"),any:function(){return p(r)}(),arrayOf:m,element:function(){function t(t,n,r,o,i){var a=t[n];if(!e(a)){return new s("Invalid "+o+" `"+i+"` of type `"+g(a)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}return p(t)}(),instanceOf:b,node:function(){function e(e,t,n,r,o){return _(e[t])?null:new s("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}return p(e)}(),objectOf:d,oneOf:y,oneOfType:w,shape:h,exact:v};return s.prototype=Error.prototype,x.checkPropTypes=a,x.PropTypes=x,x}}).call(t,n(2))},function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,l,c=r(e),u=1;u<arguments.length;u++){n=Object(arguments[u]);for(var s in n)i.call(n,s)&&(c[s]=n[s]);if(o){l=o(n);for(var p=0;p<l.length;p++)a.call(n,l[p])&&(c[l[p]]=n[l[p]])}}return c}},function(e,t,n){"use strict";(function(t){function r(e,n,r,l,c){if("production"!==t.env.NODE_ENV)for(var u in e)if(e.hasOwnProperty(u)){var s;try{if("function"!==typeof e[u]){var p=Error((l||"React class")+": "+r+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[u]+"`.");throw p.name="Invariant Violation",p}s=e[u](n,u,l,r,null,i)}catch(e){s=e}if(!s||s instanceof Error||o((l||"React class")+": type specification of "+r+" `"+u+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof s+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),s instanceof Error&&!(s.message in a)){a[s.message]=!0;var f=c?c():"";o("Failed "+r+" type: "+s.message+(null!=f?f:""))}}}var o=function(){};if("production"!==t.env.NODE_ENV){var i=n(3),a={};o=function(e){var t="Warning: "+e;"undefined"!==typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}e.exports=r}).call(t,n(2))},function(e,t,n){"use strict";function r(){}var o=n(3);e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";function r(e){var t=e.form_id,n=e.title,r=e.description,i=e.minimize,a="";return a+=Object(o.c)(t,"id"),a+=Object(o.c)(n,"title"),a+=Object(o.c)(r,"description"),a+=Object(o.c)(i,"minimize")}t.a=r;var o=n(1);wp.i18n.__},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),l=n.n(a),c=n(6),u=n(21),s=n(5),p=n(22),f=(n(1),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),m=wp.i18n.__,b=wp.element.Component,y=wp.editor.InspectorControls,d=wp.components,w=d.PanelBody,h=d.PanelRow,v=(d.RadioControl,d.ToggleControl,function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),f(t,[{key:"render",value:function(){var e=this.props,t=e.setAttributes,n=e.attributes,r=n.form_id,o=n.title,i=n.description,a=n.minimize;return wp.element.createElement(y,null,wp.element.createElement(w,{title:m("Select Form"),initialOpen:!0},wp.element.createElement(h,null,wp.element.createElement(c.a,{form_id:r,setAttributes:t})),r&&wp.element.createElement(h,null,wp.element.createElement(u.a,{form_id:r}))),wp.element.createElement(w,{title:m("Options"),initialOpen:!1},wp.element.createElement(p.a,{label:m("Display form title?"),setAttributes:t,attribute_name:"title",attribute_value:o}),wp.element.createElement(p.a,{label:m("Display form description?"),setAttributes:t,attribute_name:"description",attribute_value:i}),wp.element.createElement(p.a,{label:m("Minimize?"),setAttributes:t,attribute_name:"minimize",attribute_value:a})),wp.element.createElement(w,{title:m("Shortcode"),initialOpen:!1},wp.element.createElement(h,null,wp.element.createElement(s.a,this.props.attributes))))}}]),t}(b));t.a=v,v.propTypes={attributes:l.a.object,setAttributes:l.a.func}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(9),l=n(0),c=n.n(l),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=wp.i18n.__,p=wp.element.Component,f=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){var e=this.props.form_id;return wp.element.createElement(a.a,{href:"wp-admin/admin.php?page=formidable&frm_action=edit&id="+e,link_text:s("Go to form"),add_sub_dir:!0})}}]),t}(p);t.a=f,a.a.propTypes={form_id:c.a.string}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),l=n.n(a),c=n(1),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=(wp.i18n.__,wp.element.Component),p=wp.components.ToggleControl,f=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.help_true,r=e.help_false,o=e.attribute_name,i=e.attribute_value,a=e.setAttributes,l=n||"Yes",u=r||"No";return wp.element.createElement(p,{label:t,help:"1"===i?l:u,checked:"1"===i,onChange:function(e){Object(c.d)(o,e?"1":"0",a)}})}}]),t}(s);t.a=f,f.propTypes={label:l.a.string,help_true:l.a.string,help_false:l.a.string,attribute_name:l.a.string,attribute_value:l.a.string,setAttributes:l.a.func}},function(e,t,n){"use strict";var r=n(11),o=n(12),i=n(26),a=n(27),l=n(4),c=wp.components.ServerSideRender,u=wp.element.Fragment,s=wp,p=(s.data,wp.i18n.__),f=wp.blocks.registerBlockType;formidable_simple_script_vars.pro&&f("formidable/simple-view",{title:p("Formidable View"),description:p("Display a Formidable View"),icon:i.a,category:"widgets",keywords:[p("data display"),p("show entries")],edit:function(e){var t=(e.className,e.isSelected,e.setAttributes),n=e.attributes,r=n.view_id,s=n.use_default_limit;return 0===formidable_simple_script_vars.views.length?wp.element.createElement(l.a,{message:p("This site doesn't have any Formidable Views."),type:"warning"}):r?wp.element.createElement(u,null,wp.element.createElement(a.a,{attributes:n,setAttributes:t}),s&&wp.element.createElement(l.a,{message:p("The View block displays up to 20 entries. You can preview the page to see all your entries."),type:"success"}),wp.element.createElement(c,{block:"formidable/simple-view",attributes:n})):wp.element.createElement("div",{className:"frm-block-intro-screen"},wp.element.createElement("div",{className:"frm-block-intro-content"},wp.element.createElement(i.a,null),wp.element.createElement("div",{className:"frm-block-title"},p("Formidable View")),wp.element.createElement("div",{className:"frm-block-selector-screen"},wp.element.createElement(o.a,{view_id:r,setAttributes:t}))))},save:function(e){var t=e.attributes;return void 0===t.view_id?"":wp.element.createElement(u,null,wp.element.createElement(r.a,t))}})},function(e,t,n){"use strict";function r(e){var t=e.view_id,n=e.filter,r="";return r+=Object(i.c)(t,"id"),r+=Object(i.c)(n,"filter")}t.a=r;var o=n(0),i=(n.n(o),n(1));wp.i18n.__},function(e,t,n){"use strict";function r(e,t){var n=formidable_simple_script_vars.show_counts,r=n&&n[e]&&n[e].meta_value?n[e].meta_value:"",o=formidable_simple_script_vars.view_options,i=o&&o[e]&&o[e].meta_value&&o[e].meta_value.limits?o[e].meta_value.limits:null;t({view_id:e,use_default_limit:"calendar"!==r&&"one"!==r&&!i})}t.a=r},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=(wp.i18n.__,wp.element.Component),c=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){return wp.element.createElement("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 599.68 601.37"},wp.element.createElement("defs",null),wp.element.createElement("path",{className:"cls-1",d:"M300.27,601.37A300.28,300.28,0,0,1,.43,300.68,299.84,299.84,0,1,1,512.29,513.3,297.46,297.46,0,0,1,300.27,601.37Zm0-563A262,262,0,0,0,38.69,300.68,261.58,261.58,0,1,0,485.24,115.2,259.5,259.5,0,0,0,300.27,38.37Z",transform:"translate(-.43)"}),wp.element.createElement("path",{className:"cls-1 orange",d:"M407.4,314.83l56-137.3H398.91q-30.45,0-40.19,25.37l-36.21,111Z",transform:"translate(-.43)"}),wp.element.createElement("polygon",{className:"cls-1",points:"310.61 349.03 301.06 378.33 234.08 177.53 142.75 177.53 258.44 463.94 346.11 463.94 392.64 349.94 310.61 349.03"}))}}]),t}(l);t.a=c},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),l=n.n(a),c=n(9),u=n(11),s=n(12),p=n(1),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),m=wp.i18n.__,b=wp.element.Component,y=wp.editor.InspectorControls,d=wp.components,w=d.PanelBody,h=d.PanelRow,v=d.RadioControl,_=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),f(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.setAttributes,n=e.attributes,r=n.view_id,o=n.filter;return wp.element.createElement(y,null,wp.element.createElement(w,{title:m("Select View"),initialOpen:!0},wp.element.createElement(h,null,wp.element.createElement(s.a,{view_id:r,setAttributes:t})),r&&wp.element.createElement(h,null,wp.element.createElement(c.a,{href:"wp-admin/post.php?post="+r+"&action=edit",link_text:m("Go to View"),add_sub_dir:!0}))),wp.element.createElement(w,{title:m("Filter"),initialOpen:!1},wp.element.createElement(v,{label:m("Filter the View?"),selected:o,options:[{label:m("Limited (recommended)"),value:"limited"},{label:m("Yes"),value:"1"},{label:m("No"),value:"0"}],help:"Setting filter to limited sends View content through WordPress content filters to process shortcodes inside the View and add auto paragraphs.",onChange:function(e){Object(p.d)("filter",e,t)}})),wp.element.createElement(w,{title:m("Shortcode"),initialOpen:!1},wp.element.createElement(h,null,wp.element.createElement(u.a,this.props.attributes))))}}]),t}(b);t.a=_,_.propTypes={attributes:l.a.object,setAttributes:l.a.func}}]);