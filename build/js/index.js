/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 53:
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
    console.log('coming soon!');
    // active = active - 1 < 0 ? countItem - 1 : active - 1;
    // rotate = rotate + rotateAdd;
    // show();
    // prevImg();
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
/* harmony import */ var _modules_slider_circle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);


document.addEventListener('DOMContentLoaded', () => {
  const island = document.querySelector('.island');
  const islandSlider = document.querySelector('.island-slider');
  const islTheraphyLink = island.querySelector('.island__therapy .island__link');

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
});

}();
/******/ })()
;