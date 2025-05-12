document.addEventListener('DOMContentLoaded', () => {
  let prev = document.getElementById('prev');
  let next = document.getElementById('next');
  let image = document.querySelector('.slider-new__images');
  // let imageItem = document.querySelector('.slider-new__images img');
  let items = document.querySelectorAll('.slider-new__images .item');
  let contents = document.querySelectorAll('.content .item');

  let active = 0;
  let countItem = items.length;
  let rotate = -360 / countItem;
  // let rotate = 30;
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
    image.style.setProperty('--rotate', rotate + 'deg');
    contents.forEach((content, key) => {
      if (key == active) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
    items.forEach((content, key) => {
      if (key == active) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
    image.style.setProperty('--imageItems', countItem);

    let asdActive = image.querySelector('.item.active');
    console.log(asdActive);
  }
  show();
  next.onclick = nextSlider;
  prev.onclick = prevSlider;
  // const autoNext = setInterval(nextSlider, 3000);
});
