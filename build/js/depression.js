/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 55:
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

/***/ 56:
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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
!function() {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _modules_video_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56);




document.addEventListener('DOMContentLoaded', () => {
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

}();
/******/ })()
;