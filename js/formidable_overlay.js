(()=>{"use strict";var e,r={7:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0});var t=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},a=function(){function e(e,r){for(var t=0;t<r.length;t++){var a=r[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(r,t,a){return t&&e(r.prototype,t),a&&e(r,a),r}}();r.FrmOverlay=function(){function e(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),this.body=document.body}return a(e,[{key:"open",value:function(e){this.overlayData={hero_image:null,heading:null,copy:null,buttons:[]},this.overlayData=t({},this.overlayData,e),this.body.insertBefore(this.buildOverlay(),this.body.firstChild),this.initCloseButton(),this.initOverlayIntroAnimation(200)}},{key:"close",value:function(){var e=document.querySelector(".frm-overlay--wrapper");e&&e.remove()}},{key:"initCloseButton",value:function(){var e=document.querySelector(".frm-overlay--wrapper");if(e){var r=document.createElement("span");r.classList.add("frm-overlay--close"),r.addEventListener("click",this.close),e.prepend(r)}}},{key:"getHeroImage",value:function(){return this.overlayData.hero_image?frmDom.img({src:this.overlayData.hero_image}):""}},{key:"getButtons",value:function(){var e=this.overlayData.buttons.map((function(e){if(!e.url||""===e.url)return"";var r={href:e.url,text:e.label};return e.target&&(r.target=e.target),frmDom.a(r)}));if(e){var r={className:"frm-overlay--cta",children:e};return frmDom.div(r)}return""}},{key:"getHeading",value:function(){return this.overlayData.heading?frmDom.tag("h2",{className:"frm-overlay--heading",text:this.overlayData.heading}):""}},{key:"getCopy",value:function(){if(this.overlayData.copy){var e=frmDom.tag("div");return e.innerHTML=this.overlayData.copy,frmDom.div({className:"frm-overlay--copy",child:e})}return""}},{key:"initOverlayIntroAnimation",value:function(e){var r=document.querySelector(".frm-overlay--wrapper");r&&setTimeout((function(){r.classList.add("frm-active")}),e)}},{key:"buildOverlay",value:function(){var e=frmDom.div({className:"frm-overlay--container",children:[frmDom.div({className:"frm-overlay--hero-image",children:[this.getHeroImage()]}),this.getHeading(),this.getCopy(),this.getButtons()]});return frmDom.div({className:"frm-overlay--wrapper frm_wrap",children:[e]})}}]),e}()}},t={};e=function e(a){var n=t[a];if(void 0!==n)return n.exports;var o=t[a]={exports:{}};return r[a](o,o.exports,e),o.exports}(7),window.frmOverlay=new e.FrmOverlay})();