document.addEventListener('DOMContentLoaded', () => {
  let islandBox = document.querySelector('.island__box');
  let islandSliderNext = islandBox.querySelector('.island-slider-next');
  let islandSliderPrev = islandBox.querySelector('.island-slider-prev');
  let islandSliderItemsWrapper = islandBox.querySelector('.island-slider__items');
  let islandSliderItems = islandBox.querySelectorAll('.island-slider__item');
  let contents = islandBox.querySelectorAll('.island-info__item');

  let rotateBox = 0;
  let rotateItem = 0;
  let active = 0;
  let countItem = islandSliderItems.length;
  let rotateAdd = 360 / countItem;
  islandSliderItemsWrapper.style.setProperty('--itemsLength', countItem);

  for (let i = 0; i < islandSliderItems.length; i++) {
    islandSliderItems[i].style.setProperty('--i', i);
  }

  function nextSlider() {
    active = active + 1 > countItem - 1 ? 0 : active + 1;
    rotateBox = rotateBox - rotateAdd;
    rotateItem = rotateItem + rotateAdd;
    show();
  }
  function prevSlider() {
    active = active - 1 < 0 ? countItem - 1 : active - 1;
    rotateBox = rotateBox + rotateAdd;
    rotateItem = rotateItem - rotateAdd;
    show();
  }
  function show() {
    islandSliderItemsWrapper.style.setProperty('--rotateBox', rotateBox + 'deg');
    islandSliderItemsWrapper.style.setProperty('--rotateItem', rotateItem + 'deg');
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
  }
  show();
  islandSliderNext.onclick = nextSlider;
  islandSliderPrev.onclick = prevSlider;
  // const autoNext = setInterval(nextSlider, 3000);
});
