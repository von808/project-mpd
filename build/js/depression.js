/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 3:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   communityFromAnim: function() { return /* binding */ communityFromAnim; },
/* harmony export */   depressionGsap: function() { return /* binding */ depressionGsap; },
/* harmony export */   indexGsap: function() { return /* binding */ indexGsap; },
/* harmony export */   therapyFromAnim: function() { return /* binding */ therapyFromAnim; }
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var gsap_ScrollTrigger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


// import { ScrollSmoother } from 'gsap/ScrollSmoother.js';

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_ScrollTrigger_js__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);

const indexGsap = () => {
  function heroAnims() {
    const heroTl = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline();
    heroTl
      .to(
        '.header',
        {
          opacity: 1,
          duration: 2,
          ease: 'power1.out',
        },
        0
      )
      .from(
        '.hero__title',
        {
          // fontSize: '10dvw',
          // fontSize: 200,
          // scale: 2,
          scale: 1.75,
          duration: 2.5,
          ease: 'power1.out',
        },
        0
      )
      .from(
        '.hero__info',
        {
          y: '100%',
          duration: 2.5,
          ease: 'power1.out',
        },
        0
      )
      .to(
        '.hero__info',
        {
          opacity: 1,
          duration: 1.5,
        },
        0
      )
      .to(
        '.hero__hint',
        {
          opacity: 1,
          duration: 2,
          delay: 1,
        },
        0
      );
  }
  heroAnims();

  function islandHoverAnims() {
    const therapy = document.querySelector('.island__therapy');
    const community = document.querySelector('.island__community');

    const tlTherapy = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline({
      paused: true,
      defaults: { duration: 1.5, ease: 'power1.out' },
    });
    const tlCommunity = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline({
      paused: true,
      defaults: { duration: 1.5, ease: 'power1.out' },
    });

    const therapyAnim = tlTherapy
      .to(
        '.island__therapy-text',
        {
          scale: 1.5,
        },
        0
      )
      .to(
        '.island__therapy .island__link',
        {
          opacity: 1,
          top: '55%',
          left: '65%',
        },
        0
      )
      .to(
        '.island__therapy .island__link',
        {
          pointerEvents: 'all',
        },
        1
      )
      .to(
        '.island__therapy-colud-1',
        {
          opacity: 1,
          top: '-15%',
          left: '45%',
        },
        0
      )
      .to(
        '.island__therapy-colud-2',
        {
          opacity: 1,
          bottom: '-5%',
          left: '40%',
        },
        0
      );

    const communityAnim = tlCommunity
      .to(
        '.island__community-text',
        {
          scale: 1.5,
        },
        0
      )
      .to(
        '.island__community .island__link',
        {
          opacity: 1,
          top: '50%',
          left: '80%',
        },
        0
      )
      .to(
        '.island__community .island__link',
        {
          pointerEvents: 'all',
        },
        1
      )
      .to(
        '.island__community-colud-1',
        {
          opacity: 1,
          top: '-50%',
          left: '100%',
        },
        0
      )
      .to(
        '.island__community-colud-2',
        {
          opacity: 1,
          bottom: '-5%',
          left: '30%',
        },
        0
      );

    therapy.addEventListener('mouseenter', () => {
      therapyAnim.play();
    });
    therapy.addEventListener('mouseleave', () => {
      therapyAnim.reverse();
    });
    community.addEventListener('mouseenter', () => {
      communityAnim.play();
    });
    community.addEventListener('mouseleave', () => {
      communityAnim.reverse();
    });
  }
  islandHoverAnims();
};
const therapyFromAnim = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.from('.island__therapy', {
  rotate: '-45deg',
  scale: 1.5,
  opacity: 0,
  duration: 2,
  ease: 'ease',
});
const communityFromAnim = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.from('.island__community', {
  rotate: '-45deg',
  scale: 2,
  opacity: 0,
  duration: 2,
  ease: 'ease',
});
const depressionGsap = () => {
  gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to('.depression', {
    scrollTrigger: {
      trigger: '.wrapper',
      start: 'top top',
      end: '+=785',
      scrub: true,
    },
    scale: 2,
  });
};




/***/ }),

/***/ 56:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _modules_gsap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _modules_video_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58);





document.addEventListener('DOMContentLoaded', () => {
  (0,_modules_gsap_js__WEBPACK_IMPORTED_MODULE_1__.depressionGsap)();
  if (document.querySelector('[data-js-tab]')) {
    const tabs = document.querySelectorAll('[data-js-tab]');

    tabs.forEach((tab) => {
      const tabBtns = tab.querySelectorAll('[data-js-tab-btn]');
      const tabItems = tab.querySelectorAll('[data-js-tab-item]');
      tabBtns.forEach((btn) => {
        (0,_modules_tabs_js__WEBPACK_IMPORTED_MODULE_0__.tabClick)(btn, tabBtns, tabItems);
      });
    });
  }
  if (window.innerWidth <= 768) {
    const btnsWr = document.querySelector('.specialist__types-tab-btns');
    const btns = document.querySelectorAll('.specialist__types-btn');
    btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        btnsWr.classList.toggle('_specialist__types-show');
      });
    });
  }
});


/***/ }),

/***/ 57:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tabClick: function() { return /* binding */ tabClick; }
/* harmony export */ });
function tabClick(item, btns, items) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-js-tab-path');
    let currentTabs = document.querySelectorAll(`[data-js-tab-path="${tabId}"]`);

    if (!currentBtn.hasAttribute('data-js-tab-active')) {
      btns.forEach((item) => item.removeAttribute('data-js-tab-active'));
      currentBtn.setAttribute('data-js-tab-active', '');
      items.forEach((item) => item.removeAttribute('data-js-tab-active'));
      currentTabs.forEach((item) => item.setAttribute('data-js-tab-active', ''));
    }
  });
}

/***/ }),

/***/ 58:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('[data-js-video-box]')) {
    const videoBoxes = document.querySelectorAll('[data-js-video-box]');
    videoBoxes.forEach((videoBox) => {
      const video = videoBox.querySelector('[data-js-video]');
      video.addEventListener('click', (e) => {
        e.preventDefault();
        // console.log(video.closest('[data-js-video-box]'));
        // video.closest('[data-js-video-box]').classList.toggle('_play');
        video.paused
          ? video.closest('[data-js-video-box]').classList.add('_play')
          : video.closest('[data-js-video-box]').classList.remove('_play');
        video.paused ? video.play() : video.pause();
      });
    });
  }
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			0: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp"] = self["webpackChunkgulp"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [2], function() { return __webpack_require__(56); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;