"use strict";function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){_defineProperty(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _defineProperty(e,t,n){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}function _iterableToArrayLimit(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,o,s,a,r=[],c=!0,l=!1;try{if(s=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(i=s.call(n)).done)&&(r.push(i.value),r.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return r}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,_toPropertyKey(i.key),i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"==_typeof(t)?t:t+""}function _toPrimitive(e,t){if("object"!=_typeof(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}if(!window.frontendUtils){var FrontendUtils=function(){return _createClass((function e(){_classCallCheck(this,e),this.listenersMap=new WeakMap}),[{key:"getCookie",value:function(e){var t=document.cookie.match(new RegExp("".concat(e,"=([^;]*)?(;|$)"),"im"));return t&&t[1]&&decodeURIComponent(t[1])||null}},{key:"setCookie",value:function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=i.encode,s=void 0===o||o,a=i.hostname,r=void 0===a?window.location.hostname||"":a,c=i.path,l=void 0===c||c,d=i.secure,u=void 0===d||d,h=r.includes("ring.com")?".ring.com":r,p=s?encodeURIComponent(t):t;document.cookie="".concat(e,"=").concat(p,"; ").concat(n?";expires=".concat(n.toUTCString()):""," ").concat(h?";domain=".concat(h,";"):""," ").concat(l?";path=/;":""," ").concat(u?";secure":"")}},{key:"getQueryParam",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.search;return new URLSearchParams(t).get(e)}},{key:"isURL",value:function(e){try{return Boolean(new URL(e))}catch(e){return!1}}},{key:"getDevice",value:function(){return window.innerWidth<=600?"mobile":window.innerWidth<=768?"tablet":"desktop"}},{key:"searchTermInType",value:function(e,t){var n=t&&t.find((function(t){return t.terms.includes(e.toLowerCase())}));return n?n.value:void 0}},{key:"fixTypoInSearch",value:function(e){return this.searchTermInType(e,window.searchConfig.typos)}},{key:"getRedirectForKey",value:function(e){return this.searchTermInType(e,window.searchConfig.redirections)}},{key:"removeProductSubTitle",value:function(e){var t=/((5|10|14)-Piece)/g,n=/\((.*)\)/,i=/\([Ff]or (.*)\)/;return i.test(e)?e.replace(i,"").trim():n.test(e)?e.replace(n,"").trim():t.test(e)?e.replace(",","").replace(t,"").trim():e}},{key:"getLocaleFromPath",value:function(e){var t=e.match(/(\/.{2,3}\/.{2,3})\/products/);return t&&t[1]||""}},{key:"addEventListenerOnce",value:function(e,t,n){this.listenersMap.has(e)||this.listenersMap.set(e,new Set);var i=this.listenersMap.get(e);i.has(t)||(e.addEventListener(t,n),i.add(t))}},{key:"parseLocaleFromPath",value:function(e){var t=this.getLocaleFromPath(e);if(!t)return"en-US";t.startsWith("/")&&(t=t.replace("/",""));var n=_slicedToArray(t.split("/"),2),i=n[0],o=n[1];return"".concat(o.toLowerCase(),"-").concat(i.toUpperCase())}},{key:"formatPrice",value:function(e,t,n){var i=new Intl.NumberFormat(n,{minimumFractionDigits:e.toString().includes(".")?2:0,maximumFractionDigits:2}).format(e);return"$denom$$price$".replace("$denom$",t).replace("$price$",i)}},{key:"safePushState",value:function(e,t,n){if(e.history.pushState&&"function"==typeof e.history.pushState&&"complete"===t.readyState){var i=new URL(e.location.href);if(i.pathname!==n){i.pathname=n;var o=i.toString();return e.history.pushState({},"",o),o}}}}])}();window.frontendUtils=new FrontendUtils,"undefined"!=typeof module&&module.exports&&(module.exports={FrontendUtils:FrontendUtils,frontendUtils:window.frontendUtils})}var _frontendUtils=frontendUtils,setCookie=_frontendUtils.setCookie,getCookie=_frontendUtils.getCookie,ConsentManagerComponent=function(){return _createClass((function e(){_classCallCheck(this,e),this.consentVersion=12,this.consentTimeout=5e3,this.bannerLoadedCookie="privacy-banner",this.bannerClickedCookie="privacy-banner-clicked",this.bucketCookie="privacy-cookie",this.controlCenterCookie="cc-privacy-cookie",this.geoCookie="rs_geo",this.appCookie="app-view",this.marketplaceCookie="rw_mp",this.storageKey="consentStorage",this.cookieDays=390,this.currentSrc=document.querySelector("script#consent-script").src,this.topDomain=window.location.hostname,this.locale=this.getParam("locale")||getCookie(this.geoCookie)||"en-US",this.local=this.getParam("local"),this.gdpr=!!this.getParam("region")&&"eu"===this.getParam("region").toLowerCase(),this.defaultCountry="US",this.cookieDomain=this.getCookieDomain(),this.hasControlCenterCookie=null!==getCookie(this.controlCenterCookie),this.hasAppCookie=null!==getCookie(this.appCookie),this.settingsIcon='<svg class="icon icon--settings" width="40" height="42" viewBox="0 0 40 42" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Settings Icon</title><path class="fill_color" fill-rule="evenodd" clip-rule="evenodd" d="M20 13.0001C15.582 13.0001 12 16.5821 12 21.0001C12 25.4181 15.582 29.0001 20 29.0001C24.418 29.0001 28 25.4181 28 21.0001C28 16.5821 24.418 13.0001 20 13.0001ZM20 27.0001C16.686 27.0001 14 24.3141 14 21.0001C14 17.6861 16.686 15.0001 20 15.0001C23.314 15.0001 26 17.6861 26 21.0001C26 24.3141 23.314 27.0001 20 27.0001ZM34.84 23.2001C34.948 22.5421 35.01 21.7841 35.01 21.0101C35.01 20.2361 34.948 19.4781 34.83 18.7381L38.98 14.8201C39.092 14.7001 39.16 14.5381 39.16 14.3601C39.16 14.2441 39.13 14.1341 39.078 14.0361L35.58 8.04009C35.458 7.84609 35.246 7.72009 35.004 7.72009C34.946 7.72009 34.89 7.72809 34.836 7.74009L29.32 9.31809C28.232 8.38809 26.976 7.60809 25.614 7.03209L24.12 1.41609C24.016 1.17009 23.778 1.00009 23.5 0.996094H16.5C16.208 1.01009 15.964 1.20409 15.882 1.47209L14.48 6.99609C13.026 7.56809 11.77 8.31009 10.654 9.21609L5.16001 7.67609C5.11201 7.66409 5.05401 7.65609 4.99601 7.65609C4.75401 7.65609 4.54201 7.78209 4.42001 7.97409L0.918013 13.9761C0.868013 14.0681 0.838013 14.1781 0.838013 14.2961C0.838013 14.4741 0.906013 14.6361 1.01801 14.7581L5.15801 18.7581C5.05001 19.4161 4.98801 20.1741 4.98801 20.9481C4.98801 21.7221 5.05001 22.4801 5.16801 23.2201L1.01801 27.1381C0.906013 27.2581 0.838013 27.4201 0.838013 27.5981C0.838013 27.7141 0.868013 27.8241 0.920013 27.9221L4.41801 33.9181C4.54001 34.1121 4.75201 34.2381 4.99401 34.2381C5.05201 34.2381 5.10801 34.2301 5.16201 34.2181L10.678 32.6401C11.766 33.5861 13.02 34.3781 14.386 34.9641L15.878 40.5801C15.962 40.8521 16.206 41.0461 16.496 41.0601H23.498C23.79 41.0461 24.034 40.8521 24.116 40.5841L25.518 35.0001C26.972 34.4281 28.228 33.6861 29.344 32.7801L34.838 34.3801C34.886 34.3921 34.944 34.4001 35.002 34.4001C35.244 34.4001 35.456 34.2741 35.578 34.0821L39.08 28.0801C39.13 27.9881 39.16 27.8781 39.16 27.7601C39.16 27.5821 39.092 27.4201 38.98 27.2981L34.84 23.2001ZM36.6 28.2801L34.6 31.7401C34.478 31.9321 34.266 32.0561 34.026 32.0561C33.974 32.0561 33.924 32.0501 33.876 32.0401L31 31.2001L28.78 30.5801L28.42 30.9001L28.22 31.0601L28.06 31.2001L27.48 31.6401L26.94 32.0001L26.48 32.2801L26 32.5401L25.44 32.8201L24.78 33.1001H24.34L23.9 33.2401L23.34 35.4801L22.6 38.3801C22.572 38.7041 22.322 38.9621 22.004 39.0001H18C17.708 38.9861 17.464 38.7921 17.382 38.5241L16.66 35.6201L16.1 33.3801L15.64 33.2401H15.18L14.52 32.9601L14.2 32.8001L14 32.5001L13.54 32.2401L13.08 31.9601L12.84 31.8001L12.56 31.6001L11.76 31.0001L11.58 30.8401L11.26 30.5401L9.04001 31.1601L6.16001 31.9801C6.11201 31.9921 6.05401 32.0001 5.99601 32.0001C5.75401 32.0001 5.54201 31.8741 5.42001 31.6821L3.41801 28.2201C3.37201 28.1301 3.34601 28.0261 3.34601 27.9141C3.34601 27.7301 3.42001 27.5621 3.53801 27.4401L5.69801 25.4401L7.35801 23.8401C7.35801 23.6801 7.35801 23.5201 7.25801 23.3601V22.9001C7.25801 22.6601 7.25801 22.4201 7.25801 22.1801C7.25801 21.9401 7.25801 21.9401 7.25801 21.8401C7.25801 21.7401 7.25801 21.6601 7.25801 21.5601C7.25801 21.4601 7.25801 21.2001 7.25801 21.0201C7.25801 20.8401 7.25801 20.6601 7.25801 20.4801C7.25801 20.3001 7.25801 20.3001 7.25801 20.2001C7.25801 20.1001 7.25801 19.9601 7.25801 19.8601C7.25801 19.7601 7.25801 19.3801 7.25801 19.1401V18.6801C7.25801 18.5401 7.25801 18.4001 7.25801 18.2601L5.65801 16.6001L3.51801 14.6001C3.40601 14.4801 3.33801 14.3181 3.33801 14.1401C3.33801 14.0241 3.36801 13.9141 3.42001 13.8161L5.41801 10.3601C5.54001 10.1661 5.75201 10.0401 5.99401 10.0401C6.05201 10.0401 6.10801 10.0481 6.16201 10.0601L8.99801 10.7981L11.218 11.4181L11.578 11.0981L11.758 10.9981L11.998 10.8181L12.578 10.3781L13.118 10.0181L13.578 9.73809L13.998 9.49809L14.258 9.35809L14.578 9.19809L15.218 8.99809H15.658L15.998 8.63809L16.578 6.39809L17.318 3.49809C17.4 3.20809 17.662 2.99809 17.974 2.99809C17.982 2.99809 17.99 2.99809 18 2.99809H21.998C22.29 3.01209 22.534 3.20609 22.616 3.47409L23.338 6.37809L23.898 8.61809L24.358 8.75809H24.798L25.458 9.03809L25.778 9.19809L26.038 9.33809L26.518 9.59809L26.978 9.87809L27.518 10.2381L28.098 10.6781L28.258 10.8181L28.458 10.9781L28.798 11.2781L31.018 10.6381L33.898 9.81809C33.946 9.80609 34.004 9.79809 34.062 9.79809C34.304 9.79809 34.516 9.92409 34.638 10.1161L36.64 13.5781C36.686 13.6681 36.712 13.7721 36.712 13.8841C36.712 14.0681 36.638 14.2361 36.52 14.3581L34.36 16.3581L32.7 17.9581C32.7 18.1181 32.7 18.2781 32.8 18.4381V18.8981C32.8 19.1381 32.8 19.3781 32.8 19.6181C32.8 19.7381 32.8 19.8581 32.8 19.9581C32.8 20.0581 32.8 20.1581 32.8 20.2381C32.8 20.3181 32.8 20.5981 32.8 20.7781C32.8 20.9581 32.8 21.1381 32.8 21.3181V21.5981C32.8 21.7181 32.8 21.8381 32.8 21.9581C32.8 22.0781 32.8 22.4381 32.8 22.6781V23.1381C32.8 23.2781 32.8 23.4381 32.8 23.5781L34.46 25.1781L36.6 27.1781C36.758 27.3041 36.856 27.4961 36.856 27.7101C36.856 27.9341 36.748 28.1321 36.58 28.2561L36.6 28.2801Z" fill="#424242"/></svg>',this.revolveIcon='<svg width="16" height="16" viewBox="0 0 16 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L8 6L15 1" stroke="#424242" stroke-width="1.4" stroke-linecap="round"/></svg>',this.checkIcon='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.435974 2.18404C0 3.03969 0 4.15979 0 6.4V17.6C0 19.8402 0 20.9603 0.435974 21.816C0.819467 22.5686 1.43139 23.1805 2.18404 23.564C3.03969 24 4.15979 24 6.4 24H17.6C19.8402 24 20.9603 24 21.816 23.564C22.5686 23.1805 23.1805 22.5686 23.564 21.816C24 20.9603 24 19.8402 24 17.6V6.4C24 4.15979 24 3.03969 23.564 2.18404C23.1805 1.43139 22.5686 0.819467 21.816 0.435974C20.9603 0 19.8402 0 17.6 0H6.4C4.15979 0 3.03969 0 2.18404 0.435974C1.43139 0.819467 0.819467 1.43139 0.435974 2.18404ZM7.19808 11.4225L10.0038 14.2855L17.1291 7.02152L18.0778 7.98959L10.0038 16.2285L6.24266 12.3905L7.19808 11.4225Z" fill="#1998D5"/></svg>',this.consentPath="/partials/consent/".concat(this.locale,"/strings.json"),this.headWrapper=null,this.bodyWrapper=null,this.callCounter=0,this.storageContent={},this.firstLoad=!this.bannerLoaded(),this.loggedIn="1"===this.getParam("loggedIn"),this.essential3ps=["solvvy","acec","acec-v2","zva","impact"],this.defaultThirdParties={version:this.consentVersion,analytics_optimizely:!0,analytics_yext:!0,analytics_heap:!0,advertising_kenshoo:!0,advertising_amazonDisplay:!0,advertising_sizmek:!0},this.minimalThirdParties={version:this.consentVersion},this.appliedThirdParties=[],"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),this.COOKIES={session:"_a_id"},this.COOKIE_DURATION_DAYS=7}),[{key:"inEnv",value:function(e){return this.topDomain.includes(e)}},{key:"getEnv",value:function(){return["localhost","alpha","beta","dev","stg"].filter(this.inEnv.bind(this)).length?"www.dev.":["qa"].filter(this.inEnv.bind(this)).length?"www.qa.":""}},{key:"getConsentURL",value:function(){var e=this.getEnv();return this.local&&e.includes("dev")?this.consentPath:"https://".concat(e,"ring.com").concat(this.consentPath)}},{key:"getCookieDomain",value:function(){return this.topDomain.indexOf("ring.com")<0?this.topDomain:".ring.com"}},{key:"start",value:function(){this.hasAppCookie||(this.handleOldCookie(),this.createWrappers(),this.setFooterLink(),this.loadConsent(),this.addClickListener(),this.insertThirdParties(),this.createAnonymousSessionCookie())}},{key:"createAnonymousSessionCookie",value:function(){if(!this.isAppView()&&!getCookie(this.COOKIES.session)){var e=window.crypto.randomUUID(),t=new Date;t.setDate(t.getDate()+this.COOKIE_DURATION_DAYS),setCookie(this.COOKIES.session,e,t,{encode:!1,hostname:"",domain:this.cookieDomain})}}},{key:"isAppView",value:function(){return this.hasAppCookie}},{key:"getSessionId",value:function(){try{var e=JSON.parse(sessionStorage.getItem(this.storageKey));return e&&e.sessionId?e.sessionId:this.setSessionId(e)}catch(e){}return!1}},{key:"setSessionId",value:function(e){var t=Math.random().toString(36).slice(2,8)+Math.floor(Date.now()/1e3);return e.sessionId=t,sessionStorage.setItem(this.storageKey,JSON.stringify(e)),e.sessionId}},{key:"setFooterLink",value:function(e){var t=e||!1,n=document.querySelector('.consent-manage-link, a[href*="manageconsent"]');if(n){var i=this.bannerClicked();t||!i?n.style.display="none":i&&(n.classList.add("consent-manage-link"),n.setAttribute("href","#"),n.style.display="inline")}}},{key:"createWrappers",value:function(){this.headWrapper=this.Elem("span"),this.headWrapper.classList.add("consent-head"),this.bodyWrapper=this.Elem("span"),this.bodyWrapper.classList.add("consent-body"),this.addToDOM(this.headWrapper,!0),this.addToDOM(this.bodyWrapper,!1)}},{key:"addClickListener",value:function(){var e=this;document.addEventListener("click",(function(t){return e.bindEvents(t)}))}},{key:"bindEvents",value:function(e){var t=e.target,n=t.parentElement;t.classList.contains("consent--manage")||t.classList.contains("consent-manage-link")||n&&n.classList.contains("consent-manage-link")?this.showModal():t.classList.contains("consent--accept")||t.classList.contains("consent-close")?this.acceptAll():(t.classList.contains("consent-modal-bg")||t.classList.contains("consent-modal-close"))&&this.closeModal()}},{key:"getConsentStorage",value:function(){return!!sessionStorage.getItem(this.storageKey)&&JSON.parse(sessionStorage.getItem(this.storageKey))}},{key:"loadConsent",value:function(){var e=this.getConsentStorage();e.cdn?this.prepFiles(e):this.getConsent()}},{key:"getConsent",value:function(e){var t=e||0;this.getConsentJSON().then(function(e){this.parseConsent(e,t)}.bind(this)).catch((function(e){console.error("Failed to get consent storage: ".concat(e))}))}},{key:"parseConsent",value:function(e,t){return!e.cdn&&t<3?(setTimeout(this.getConsent(t+1),this.consentTimeout),!1):!e.cdn&&t>=3?(this.setFooterLink(!0),!1):(sessionStorage.setItem(this.storageKey,JSON.stringify(e)),this.getSessionId(),this.prepFiles(e),!1)}},{key:"getConsentJSON",value:function(){var e=this,t=this.Elem("script"),n="ringconsent_".concat(this.callCounter++);t.src="".concat(this.getConsentURL(),"?callback=").concat(n);return new Promise((function(i){var o=setTimeout((function(){return function(e){e({})}(i)}),e.consentTimeout);window[n]=function(e){clearTimeout(o),i(e)},t.onerror=function(){clearTimeout(o),i({})},document.body.appendChild(t),t.parentNode.removeChild(t)}))}},{key:"prepFiles",value:function(e){this.storageContent=e,this.createStyleElements(this.storageContent),this.bannerClicked()||this.showBanner()}},{key:"clearWrappers",value:function(){this.headWrapper.innerHTML="",this.bodyWrapper.innerHTML=""}},{key:"createStyleElements",value:function(e){var t="".concat(e.cdn,"css/").concat(e.baseCSS),n="".concat(e.cdn,"css/").concat(e.consentCSS),i=this.local?"":'<link rel="stylesheet" type="text/css" href="'.concat(t,'">'),o='<link rel="stylesheet" type="text/css" href="'.concat(n,'">'),s=this.Elem("div");for(s.innerHTML=i+o;s.firstChild;)this.addToDOM(s.firstChild,!0)}},{key:"createBannerElements",value:function(){var e=this.Elem("div");e.classList.add("consent-banner"),this.gdpr&&e.classList.add("consent-banner--gdpr");var t=this.Elem("span");t.classList.add("consent-banner-copy","font__default","size-small"),t.innerText=this.storageContent.bannerCopy,e.appendChild(t);var n='<button class="consent--manage btn--secondary btn--secondary">'.concat(this.storageContent.manageSettingsButton,"</button>"),i='<button class="consent--accept btn--primary">'.concat(this.storageContent.acceptButton,"</button>"),o=this.Elem("div");o.classList.add("consent-banner-buttons"),o.innerHTML=n+i,e.appendChild(o),this.addToDOM(e,!1)}},{key:"getBuckets",value:function(){return this.storageContent.buckets}},{key:"createModalElements",value:function(){var e=this,t=this.Elem("div");t.classList.add("consent-modal");var n=this.Elem("div");n.classList.add("consent-modal-bg"),t.appendChild(n);var i=this.Elem("div");i.classList.add("consent-modal-container");var o='<div class="consent-modal-heading font-medium">'.concat(this.storageContent.modalHeading,"</div>"),s=this.Elem("div");s.classList.add("consent-modal-header","size-small"),s.innerHTML=o+'<div class="consent-modal-close"></div>',i.appendChild(s);var a=this.Elem("div");a.classList.add("consent-modal-content");var r=this.Elem("div");r.classList.add("consent-modal-icon","fill__primary-500","icon--large"),r.innerHTML=this.settingsIcon,a.appendChild(r);var c=this.Elem("div");c.classList.add("h3"),c.innerHTML=this.storageContent.selectCookieText,a.appendChild(c);var l=this.storageContent,d=l.cookiePolicyText,u=l.cookiePolicyLink;if(d&&u){var h=this.Elem("div");h.classList.add("consent-subtitle"),h.innerHTML=d.replace("<a>",'<a href="'.concat(u,'">')),c.appendChild(h)}var p=this.getBuckets();p&&p.forEach((function(t){var n=e.Elem("div");n.setAttribute("data-bucket",t.id),n.classList.add("consent-bucket","fill__primary-500","icon--large"),n.innerHTML='<div class="consent-info"><div class="consent-bucket-icon">'.concat(e.revolveIcon,'</div>                <div class="consent-bucket-copy size-small">                    <b>').concat(t.name,'</b>                    <div class="consent-bucket-description">').concat(t.description+'<div><label class="switch"><input type="checkbox" class="consent-check"><span class="slider"></span></label></div>','</div>                </div></div>                <div class="status size-small font-medium">').concat(e.storageContent.disabledText,"</div>");var o=n.querySelector(".status");if(t.thirdParties){var s=e.Elem("div");s.setAttribute("data-third-party-container",t.id),s.classList.add("third-parties-container");var r=function(){s.querySelectorAll(".third-party.active").length>0?(o.innerHTML=e.storageContent.enabledText,n.classList.add("active")):(o.innerHTML=e.storageContent.disabledText,n.classList.remove("active"))};if(t.thirdParties.forEach((function(t){var i=e.Elem("div");i.setAttribute("data-third-party",t.id),i.classList.add("third-party"),i.innerHTML='<div class="size-small"><b>'.concat(t.name,"</b></div>");var o=e.Elem("div");o.innerHTML='<div class="check-icon">'.concat(e.checkIcon,"</div>");o.addEventListener("click",(function(e){return function(){i.classList.toggle("active");var e=s.querySelectorAll(".third-party.active").length;n.querySelector('.switch input[type="checkbox"]').checked=e>0,r()}()})),i.appendChild(o),s.appendChild(i);var a=n.querySelector(".slider");null!==a&&a.addEventListener("click",(function(){var e=a.parentElement.querySelector('.switch input[type="checkbox"]').checked;Array.from(s.querySelectorAll(".third-party")).forEach((function(t){e?t.classList.remove("active"):t.classList.add("active")})),r()}))})),void 0!==t.moreInfoCopy){var c=e.Elem("div");c.classList.add("disclaimer","font-medium"),c.innerHTML=t.moreInfoCopy,s.appendChild(c)}n.appendChild(s),a.appendChild(n),n.querySelector(".consent-bucket-icon").addEventListener("click",(function(){this.classList.toggle("active"),s.classList.toggle("active"),a.querySelectorAll(".third-parties-container.active").length>0?(i.classList.add("expanded"),a.style.maxHeight=window.innerWidth>=768?"".concat(a.offsetHeight,"px"):null):i.classList.remove("expanded")}))}}));var v='<button class="btn--secondary consent-save">'.concat(this.storageContent.saveButton,"</button>"),C=this.Elem("div");C.classList.add("consent-save-bar"),C.innerHTML=v,C.addEventListener("click",(function(t){return e.saveConsent(t)})),i.appendChild(a),i.appendChild(C),t.appendChild(i),this.addToDOM(t,!1)}},{key:"handleActiveThirdPartiesOnLoad",value:function(){var e=this.getThirdPartiesCookie();for(var t in e)if(!0===e[t]){var n=t.split("_")[1];if(n){var i=document.querySelector('.third-party[data-third-party="'.concat(n,'"]'));i&&i.querySelector(".check-icon").click()}}}},{key:"handleOldCookie",value:function(){var e=this,t=function(){try{var t=getCookie(e.bucketCookie);if(!t)return!1;var n=JSON.parse(t);if(n.version&&n.version>=e.consentVersion)return!1}catch(e){}return!0}();return t&&(this.firstLoad=!0,this.removeCookie(this.bucketCookie),this.removeCookie(this.bannerClickedCookie),this.removeCookie(this.bannerLoadedCookie)),t}},{key:"getThirdPartiesCookie",value:function(){var e=getCookie(this.bucketCookie);return e=e?JSON.parse(e):this.gdpr?this.minimalThirdParties:this.defaultThirdParties}},{key:"setThirdPartiesCookie",value:function(e,t){this.setConsentManagerCookie(this.bucketCookie,JSON.stringify(e),t),this.sendBucketCookieToEventStream(e)}},{key:"sendBucketCookieToEventStream",value:function(e){var t=new XMLHttpRequest,n={sessionId:this.getSessionId()};"object"===_typeof(e)&&null!==e&&void 0!==n.sessionId&&(this.setMarketplace(e),t.open("POST",this.local?"/ec-api/session-cookie":"https://".concat(this.getEnv(),"ring.com/ec-api/session-cookie"),!0),t.setRequestHeader("Content-Type","application/json"),t.send(JSON.stringify({privacyCookie:e,sessionStorage:n})))}},{key:"setMarketplace",value:function(e){e.rw_mp=getCookie(this.marketplaceCookie)||this.defaultCountry}},{key:"consentEqual",value:function(e,t){for(var n in e)if(void 0===t[n]||t[n]!==e[n])return!1;return!0}},{key:"createNewCookie",value:function(){var e={version:this.consentVersion},t=document.querySelectorAll('.consent-bucket:not([data-bucket="essential"])');return Array.from(t).forEach((function(t){var n=t.getAttribute("data-bucket"),i=t.querySelectorAll(".third-party");i.length>0&&Array.from(i).forEach((function(t){var i=t.getAttribute("data-third-party");e["".concat(n,"_").concat(i)]=t.classList.contains("active")}))})),e}},{key:"saveConsent",value:function(){this.disableSaveButton(!0),this.setConsentManagerCookie(this.bannerClickedCookie,!0,this.cookieDays),this.setConsentManagerCookie(this.bannerLoadedCookie,!0,this.cookieDays);var e=this.getThirdPartiesCookie(),t=this.fillCookie(this.createNewCookie());this.setThirdPartiesCookie(t,this.cookieDays),this.updateCookieSafe(t),this.consentEqual(t,e)||setTimeout((function(){window.location.reload()}),1e3),this.disableSaveButton(!1),this.closeModal(),this.insertThirdParties(),this.triggerTrackingEvents(),this.setFooterLink()}},{key:"insertThirdParties",value:function(){var e=this,t=_objectSpread({},this.hasControlCenterCookie?this.handleLoggedInCookie():this.firstLoad?{}:this.getThirdPartiesCookie());this.essential3ps.forEach((function(e){t["essential_".concat(e)]=!0}));var n=function(){if(!0===t[i]){var n=i.split("_")[1];n&&!e.appliedThirdParties.includes(n)&&Array.from(document.querySelectorAll(".consent-".concat(n))).forEach((function(t){(t.classList.contains("append-to-head")?e.headWrapper:e.bodyWrapper).appendChild(e.getTemplateContent(t).cloneNode(!0)),e.appliedThirdParties.push(n)}))}};for(var i in t)n()}},{key:"handleLoggedInCookie",value:function(){var e=getCookie(this.controlCenterCookie),t=this.getThirdPartiesCookie(),n=t;if(e){n={};var i=JSON.parse(e);for(var o in i){var s=!0===i[o]||"true"===i[o];void 0===t[o]?n[o]=s:n[o]=!0===t[o]&&!0===s}}return n}},{key:"fillCookie",value:function(e){return _objectSpread(_objectSpread({},e),{},{consentUrl:window.location.href,consentDate:(new Date).toUTCString()})}},{key:"updateCookieSafe",value:function(e){try{var t=new XMLHttpRequest;t.open("POST",this.local?"/update-consent/":"https://".concat(this.getEnv(),"ring.com/update-consent/"),!0),t.setRequestHeader("Content-Type","application/json"),t.send(JSON.stringify({domain:this.cookieDomain.startsWith(".")?this.cookieDomain.replace(".",""):this.cookieDomain,value:e}))}catch(e){}}},{key:"showBanner",value:function(){document.body.classList.add("has-banner"),setCookie(this.bannerLoadedCookie,!0),this.createBannerElements()}},{key:"closeBanner",value:function(){document.body.classList.remove("has-banner");var e=document.querySelector(".consent-banner");e&&e.remove()}},{key:"showModal",value:function(){document.body.classList.add("consent-active"),this.createModalElements(),this.handleActiveThirdPartiesOnLoad(),this.closeBanner()}},{key:"disableSaveButton",value:function(e){document.querySelector(".consent-save").disabled=e}},{key:"closeModal",value:function(){document.body.classList.remove("consent-active");var e=document.querySelector(".consent-modal");e&&e.remove(),this.bannerClicked()||this.showBanner()}},{key:"triggerTrackingEvents",value:function(){try{eventTracking.start()}catch(e){}}},{key:"bucketArray",value:function(){return getCookie(this.bucketCookie)}},{key:"bannerClicked",value:function(){return getCookie(this.bannerClickedCookie)}},{key:"setConsentManagerCookie",value:function(e,t,n){var i=null;n&&(i=new Date).setDate(i.getDate()+n),setCookie(e,t,i)}},{key:"bannerLoaded",value:function(){return getCookie(this.bannerLoadedCookie)}},{key:"acceptAll",value:function(e){var t=e?0:this.cookieDays;this.setConsentManagerCookie(this.bannerClickedCookie,!0,t),this.setConsentManagerCookie(this.bannerLoadedCookie,!0,t);var n=this.fillCookie(this.defaultThirdParties);this.setThirdPartiesCookie(n,this.cookieDays),this.updateCookieSafe(n),this.firstLoad=!1,this.insertThirdParties(),this.triggerTrackingEvents(),this.closeBanner(),this.setFooterLink()}},{key:"getParam",value:function(e){try{for(var t=this.currentSrc.replace(/^[^\?]+\??/,"").split("&"),n={},i=0,o=t.length;i<o;i++){var s=t[i].split("=");n[s[0]]=decodeURI(s[1]).replace(/\+/g," ")}return n[e]}catch(e){return!1}}},{key:"removeCookie",value:function(e){setCookie(e,"",new Date,{hostname:"",secure:!1})}},{key:"isTemplateSupported",value:function(){return"content"in this.Elem("template")}},{key:"getTemplateContent",value:function(e){if(e&&this.isTemplateSupported())return e.content.cloneNode(!0);var t=document.createDocumentFragment();if(e)for(var n=e.childNodes,i=0;i<n.length;i++)t.appendChild(n[i].cloneNode(!0));else t.appendChild(this.Elem("div"));return t}},{key:"Elem",value:function(e){return document.createElement(e)}},{key:"addToDOM",value:function(e,t){var n=t?document.head:document.body;try{n.appendChild(e)}catch(e){}}}])}(),consentManager=function(){var e=new ConsentManagerComponent;return"loading"!==document.readyState?e.start():document.addEventListener("DOMContentLoaded",(function(){return e.start()})),e}();"undefined"!=typeof module&&module.exports&&(module.exports=ConsentManagerComponent);