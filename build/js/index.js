/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 2:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider_circle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _modules_gsap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _modules_swiper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);





document.addEventListener('DOMContentLoaded', () => {
  const island = document.querySelector('.island');
  const islandSlider = document.querySelector('.island-slider');
  const islTheraphyLink = island.querySelector('.island__therapy .island__link');
  const islTheraphyInfoLink = island.querySelector('.island-info__item-btn');

  (0,_modules_gsap_js__WEBPACK_IMPORTED_MODULE_1__.indexGsap)();
  (0,_modules_swiper_js__WEBPACK_IMPORTED_MODULE_2__.indexSwipers)(_modules_gsap_js__WEBPACK_IMPORTED_MODULE_1__.therapyFromAnim, _modules_gsap_js__WEBPACK_IMPORTED_MODULE_1__.communityFromAnim);

  islTheraphyLink.addEventListener('click', (e) => {
    e.stopPropagation;
    e.preventDefault;
    island.classList.add('_therapy-inner');
  });

  islandSlider.addEventListener('click', (e) => {
    e.stopPropagation;
    if (!e.target.closest('.island-slider__items-wrapper') && !e.target.closest('.island-info__content')) {
      island.classList.remove('_therapy-inner');
    }
  });

  islTheraphyInfoLink.addEventListener('click', (e) => {
    e.preventDefault;
    island.classList.remove('_therapy-inner');
    island.classList.add('_therapy-page');
    setTimeout(() => {
      window.location.href = islTheraphyInfoLink.dataset.path;
    }, 4000);
    setTimeout(() => {
      island.classList.remove('_therapy-page');
    }, 4500);
  });
});


/***/ }),

/***/ 3:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
document.addEventListener('DOMContentLoaded', () => {
  let islandSliderNext = document.querySelector('.island-slider-next');
  let islandSliderPrev = document.querySelector('.island-slider-prev');
  let islandSliderItemsWrapper = document.querySelector('.island-slider__items');
  let islandSliderItems = document.querySelectorAll('.island-slider__item');
  let contents = document.querySelectorAll('.island-info__item');

  let active = 0;
  let countItem = islandSliderItems.length;
  let rotate = -360 / countItem;
  let rotateAdd = 360 / countItem;

  function nextSlider() {
    active = active + 1 > countItem - 1 ? 0 : active + 1;
    rotate = rotate - rotateAdd;
    show();
    nextImg();
  }
  function prevSlider() {
    // console.log('coming soon!');
    active = active - 1 < 0 ? countItem - 1 : active - 1;
    rotate = rotate + rotateAdd;
    show();
    prevImg();
  }
  function show() {
    islandSliderItemsWrapper.style.setProperty('--rotate', rotate + 'deg');
    contents.forEach((content, key) => {
      if (key == active) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
    islandSliderItems.forEach((content, key) => {
      if (key == active) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
    islandSliderItemsWrapper.style.setProperty('--imageItems', countItem);
  }
  function nextImg() {
    let itemActive = document.querySelector('.island-slider__item.active');
    let classNames = [...document.querySelectorAll('.island-slider__item')];
    let index = classNames.indexOf(itemActive);
    if (itemActive.previousElementSibling) {
      itemActive.previousElementSibling.querySelector('.island-slider__item-box').style.setProperty('--imgRotate', '-58deg');
    }
    if (index > 0) {
      let firstItem = classNames.splice(0, index);
      classNames.push(...firstItem);
      classNames.forEach((el) => {
        setTimeout(() => {
          islandSliderItemsWrapper.append(el);
        }, 500);
      });
    }
  }
  function prevImg() {
    let itemActive = document.querySelector('.island-slider__item.active');
    let classNames = [...document.querySelectorAll('.island-slider__item')];
    let index = classNames.indexOf(itemActive);
    if (index === classNames.length - 1) {
      let lastItem = classNames.splice(index, 1);
      classNames.unshift(...lastItem);
      classNames.forEach((el) => {
        setTimeout(() => {
          islandSliderItemsWrapper.append(el);
        }, 500);
      });
    }
  }
  show();
  islandSliderNext.onclick = nextSlider;
  islandSliderPrev.onclick = prevSlider;
  // const autoNext = setInterval(nextSlider, 3000);
});


/***/ }),

/***/ 4:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   communityFromAnim: function() { return /* binding */ communityFromAnim; },
/* harmony export */   indexGsap: function() { return /* binding */ indexGsap; },
/* harmony export */   therapyFromAnim: function() { return /* binding */ therapyFromAnim; }
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

// import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
// import { ScrollSmoother } from 'gsap/ScrollSmoother.js';

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

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
          scale: 2,
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




/***/ }),

/***/ 8:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   indexSwipers: function() { return /* binding */ indexSwipers; }
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);




const indexSwipers = (therapyFromAnim, communityFromAnim) => {
  const animSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.anim__swiper', {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Mousewheel],
    slidesPerView: 1,
    speed: 2000,
    allowTouchMove: false,
    mousewheel: true,
    vertical: true,
    direction: 'vertical',
    // initialSlide: 2,
  });

  const header = document.querySelector('.header');
  const night = document.querySelector('.sunrise__night-bg');
  const why = document.querySelector('.why');
  const dayNebo = document.querySelector('.sunrise__day-nebo');
  const dayOzero = document.querySelector('.sunrise__day-ozero');
  const dayTrava = document.querySelector('.sunrise__day-trava');
  const dayMask = document.querySelector('.sunrise__day-mask');
  const island = document.querySelector('.island');

  animSwiper.on('slideChangeTransitionStart', function () {
    if (animSwiper.activeIndex === 0) {
      night.classList.add('show');
      why.classList.remove('_active');
      header.classList.add('header--white');
    } else if (animSwiper.activeIndex !== 0) {
      night.classList.remove('show');
      header.classList.remove('header--white');
    }
    if (animSwiper.activeIndex === 1) {
      why.classList.add('_active');
    } else if (animSwiper.activeIndex !== 1) {
    }
    if (animSwiper.activeIndex >= 2) {
      dayNebo.classList.add('move');
      dayOzero.classList.add('move');
      dayTrava.classList.add('move');
      dayMask.classList.add('move');
      island.classList.remove('_move');
      setTimeout(() => {
        island.classList.remove('_hoverOff');
      }, 2000);
      therapyFromAnim.play(0);
      communityFromAnim.play(0);
    } else if (animSwiper.activeIndex !== 2) {
      dayNebo.classList.remove('move');
      dayOzero.classList.remove('move');
      dayTrava.classList.remove('move');
      dayMask.classList.remove('move');
      island.classList.add('_move');
      island.classList.add('_hoverOff');
      island.classList.remove('_therapy-inner');
    }
  });

  animSwiper.on('slideChangeTransitionEnd', function () {});
};




/***/ }),

/***/ 54:
/***/ (function(module) {

module.exports = "data:application/font-woff;charset=utf-8;base64, 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";

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
/******/ 			1: 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [2], function() { return __webpack_require__(2); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;