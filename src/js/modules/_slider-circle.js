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
  }
  function prevSlider() {
    active = active - 1 < 0 ? countItem - 1 : active - 1;
    rotate = rotate + rotateAdd;
    show();
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
  function imgRotations() {
    let itemActive = document.querySelector('.island-slider__item.active');
    console.log(itemActive);
  }
  imgRotations();
  show();
  islandSliderNext.onclick = nextSlider;
  islandSliderPrev.onclick = prevSlider;
  // const autoNext = setInterval(nextSlider, 3000);
});
