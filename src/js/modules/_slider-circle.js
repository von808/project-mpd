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
