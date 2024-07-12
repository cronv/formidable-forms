!function(){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,n(r.key),r)}}function n(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var r=i.call(t,"string");if("object"!=e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(n)?n:String(n)}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),void 0!==t&&(this.wrapper=t instanceof Element?t:document.querySelector(t),null!==this.wrapper&&(this.flexboxSlidesGap="16px",this.navs=this.wrapper.querySelectorAll(".frm-tabs-navs ul > li"),this.slideTrackLine=this.wrapper.querySelector(".frm-tabs-active-underline"),this.slideTrack=this.wrapper.querySelector(".frm-tabs-slide-track"),this.slides=this.wrapper.querySelectorAll(".frm-tabs-slide-track > div"),this.init()))}var n,i;return n=e,(i=[{key:"init",value:function(){var e=this;null!==this.wrapper&&this.navs.length&&null!==this.trackLine&&null!==this.slideTrack&&this.slides.length&&(this.initDefaultSlideTrackerWidth(),this.navs.forEach((function(t,n){t.addEventListener("click",(function(t){return e.onNavClick(t,n)}))})))}},{key:"onNavClick",value:function(e,t){this.removeActiveClassnameFromNavs(),e.target.classList.add("frm-active"),this.initSlideTrackUnderline(e.target,t),this.changeSlide(t)}},{key:"initDefaultSlideTrackerWidth",value:function(){this.slideTrackLine.dataset.initialWidth&&(this.slideTrackLine.style.width="".concat(this.slideTrackLine.dataset.initialWidth,"px"))}},{key:"initSlideTrackUnderline",value:function(e,t){this.slideTrackLine.classList.remove("frm-first","frm-last");var n=void 0!==e?e:this.navs.filter((function(e){return e.classList.contains("frm-active")}));this.slideTrackLine.style.transform="translateX(".concat(n.offsetLeft,"px)"),this.slideTrackLine.style.width=n.clientWidth+"px",this.navs.length!==t+1?0===t&&this.slideTrackLine.classList.add("frm-first"):this.slideTrackLine.classList.add("frm-last")}},{key:"changeSlide",value:function(e){this.removeActiveClassnameFromSlides();var t=0==e?"0px":"calc( ( ".concat(100*e,"% + ").concat(parseInt(this.flexboxSlidesGap,10)*e,"px ) * -1 )");this.slideTrack.style.transform="translateX(".concat(t,")"),e in this.slides&&this.slides[e].classList.add("frm-active")}},{key:"removeActiveClassnameFromSlides",value:function(){this.slides.forEach((function(e){return e.classList.remove("frm-active")}))}},{key:"removeActiveClassnameFromNavs",value:function(){this.navs.forEach((function(e){return e.classList.remove("frm-active")}))}}])&&t(n.prototype,i),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,l(i.key),i)}}function s(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function l(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!=r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==r(t)?t:String(t)}var c=function(){function e(){o(this,e),0!==document.querySelectorAll(".frm-style-component.frm-radio-component").length&&(this.elements=document.querySelectorAll(".frm-style-component.frm-radio-component"),this.init())}return s(e,[{key:"init",value:function(){var e=this;this.elements.forEach((function(t){e.initOnRadioChange(t)}))}},{key:"initOnRadioChange",value:function(e){var t=this;e.querySelectorAll('input[type="radio"]').forEach((function(e){e.addEventListener("change",(function(e){t.onRadioChange(e.target.closest(".frm-style-component.frm-radio-component"))}))}))}},{key:"onRadioChange",value:function(e){var t=e.querySelector('input[type="radio"]:checked + label');this.moveTracker(t,e)}},{key:"getRadioIndex",value:function(e){return Array.from(wrapper.querySelectorAll('input[type="radio"]')).indexOf(e)}},{key:"moveTracker",value:function(e,t){var n=e.offsetLeft,i=e.offsetWidth,r=t.querySelector(".frm-radio-active-tracker");r.style.left=0,r.style.width=i,r.style.transform="translateX(".concat(n,"px)")}}]),e}(),u=function(){function e(){o(this,e),0!==document.querySelectorAll(".frm-slider-component").length&&(this.eventsChange=[],this.elements=document.querySelectorAll(".frm-slider-component"),this.initOptions(),this.init())}return s(e,[{key:"initOptions",value:function(){var e=this;this.options=[],this.elements.forEach((function(t,n){var i=t.classList.contains("frm-has-multiple-values")?t.closest(".frm-style-component"):t;e.options.push({dragging:!1,startX:0,translateX:0,maxValue:parseInt(t.dataset.maxValue,10),element:t,index:n,value:0,dependendUpdater:i.classList.contains("frm-style-dependend-updater-component")?new f(i):null})}))}},{key:"init",value:function(){this.initSlidersPosition(),this.initDraggable()}},{key:"initDraggable",value:function(){var e=this;this.elements.forEach((function(t,n){e.eventsChange[n]=new Event("change",{bubbles:!0,cancelable:!0});var i=t.querySelector(".frm-slider-bullet");i.addEventListener("mousedown",(function(t){e.enableDragging(t,n)})),i.addEventListener("mousemove",(function(t){e.moveTracker(t,n)})),i.addEventListener("mouseup",(function(){e.disableDragging(n)})),i.addEventListener("mouseleave",(function(){e.disableDragging(n)}))}))}},{key:"initSlidersPosition",value:function(){var e=this,t=document.querySelectorAll("#frm_style_sidebar .accordion-section h3");null!==document.querySelector(".frm-quick-settings")&&this.initSlidersWidth(document.querySelector(".frm-quick-settings")),t.forEach((function(t,n){0===n&&e.initSlidersWidth(t.closest(".accordion-section")),t.addEventListener("click",(function(t){e.initSlidersWidth(t.target.closest(".accordion-section"))}))}))}},{key:"initSlidersWidth",value:function(e){var t=this;e.querySelectorAll(".frm-slider-component").forEach((function(e){setTimeout((function(){t.initSliderWidth(e)}),100)}))}},{key:"initSliderWidth",value:function(e){var t=this.getSliderIndex(e),n=e.querySelector(".frm-slider").offsetWidth-14,i=parseInt(e.querySelector('.frm-slider-value input[type="text"]').value,10),r=e.querySelector("select").value,o="%"===r?Math.round(n*i/100):Math.ceil(i/this.options[t].maxValue*n);e.querySelector(".frm-slider-active-track").style.width="".concat(o,"px"),this.options[t].translateX=o,this.options[t].value=i+r}},{key:"getSliderIndex",value:function(e){return this.options.filter((function(t){return t.element===e}))[0].index}},{key:"moveTracker",value:function(e,t){if(this.options[t].dragging){var n=this.elements[t],i=e.clientX-this.options[t].startX,r=n.querySelector(".frm-slider").offsetWidth;if(!(i+12>=r)){var o=n.querySelector("select").value,a="%"===o?100:this.options[t].maxValue,s=this.calculateValue(r,i,a);n.querySelector('.frm-slider-value input[type="text"]').value=s,n.querySelector(".frm-slider-active-track").style.width="".concat(i,"px"),this.options[t].translateX=i,this.options[t].value=s+o,this.options[t].fullValue=this.updateValue(n,this.options[t].value)}}}},{key:"enableDragging",value:function(e,t){this.options[t].dragging=!0,this.options[t].startX=e.clientX-this.options[t].translateX}},{key:"disableDragging",value:function(e){!1!==this.options[e].dragging&&(null===this.options[e].dependendUpdater?(this.elements[e].classList.contains("frm-has-multiple-values")?this.elements[e].closest(".frm-style-component").querySelector('input[type="hidden"]'):this.elements[e].querySelector('.frm-slider-value input[type="hidden"]')).dispatchEvent(this.eventsChange[e]):this.options[e].dependendUpdater.updateAllDependendElements(this.options[e].fullValue),this.options[e].dragging=!1)}},{key:"calculateValue",value:function(e,t,n){var i=Math.ceil((t+14)/e*n);return i<0?0:i>n?n:i}},{key:"updateValue",value:function(e,t){if(e.classList.contains("frm-has-multiple-values")){var n=e.closest(".frm-style-component").querySelector('input[type="hidden"]'),i=n.value.split(" ");"vertical"===e.dataset.type?i[0]=t:i[1]=t;var r=i.join(" ");return n.value=r,r}return e.querySelector('.frm-slider-value input[type="hidden"]').value=t,t}}]),e}(),d=function(){function e(){o(this,e),0!==document.querySelectorAll(".frm-style-tabs-wrapper").length&&(this.elements=document.querySelectorAll(".frm-style-tabs-wrapper"),this.init())}return s(e,[{key:"init",value:function(){this.elements.forEach((function(e){new i(e)}))}},{key:"initOnTabClick",value:function(e){var t=this;this.initActiveBackgroundWidth(e),e.querySelectorAll(".frm-tab-item").forEach((function(e){e.addEventListener("click",(function(e){t.onTabClick(e.target.closest(".frm-tabs-wrapper"))}))}))}}]),e}(),f=function(){function e(t){o(this,e),this.component=t,this.data={propagateInputs:this.initPropagationList(JSON.parse(this.component.dataset.willChange)),changeEvent:new Event("change",{bubbles:!0})}}return s(e,[{key:"initPropagationList",value:function(e){var t=[];return e.forEach((function(e){var n=document.querySelector('input[name="'.concat(e,'"]'));null!==n&&t.push(n)})),t}},{key:"updateAllDependendElements",value:function(e){this.data.propagateInputs.forEach((function(t){t.value=e})),this.data.propagateInputs[0].dispatchEvent(this.data.changeEvent)}}]),e}();new(function(){function e(){o(this,e),this.init(),this.initHover()}return s(e,[{key:"init",value:function(){new c,new u,new d,this.initColorPickerDependendUpdaterComponents()}},{key:"initColorPickerDependendUpdaterComponents",value:function(){var e=document.querySelectorAll(".frm-style-dependend-updater-component.frm-colorpicker"),t=[];e.forEach((function(e){var n=e.querySelector("input.hex"),i=void 0!==n?n.getAttribute("id"):null;null!==i&&t.push({id:i,dependendUpdaterClass:new f(e,"colorpicker")})})),wp.hooks.addAction("frm_style_options_color_change","formidable",(function(e){var n=e.event,i=e.value,r=n.target.getAttribute("id");t.forEach((function(e){e.id===r&&e.dependendUpdaterClass.updateAllDependendElements(i)}))}))}},{key:"initHover",value:function(){var e=document.querySelector(".frm-right-panel .styling_settings .accordion-container");if(null!==e){var t=document.createElement("div");t.classList.add("frm_hidden"),t.classList.add("frm-style-settings-hover"),e.appendChild(t),e.querySelector(":scope > ul").querySelectorAll(":scope > li").forEach((function(e){e.querySelector("h3").addEventListener("mouseover",(function(e){t.style.transform="translateY(".concat(e.target.closest("li").offsetTop,"px)"),t.classList.add("frm-animating"),t.classList.remove("frm_hidden"),setTimeout((function(){t.classList.remove("frm-animating")}),250)}))})),document.querySelectorAll("#frm_style_sidebar .accordion-section h3").forEach((function(e){e.addEventListener("click",(function(){t.classList.add("frm_hidden")}))}))}}}]),e}())}();