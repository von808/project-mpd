import Swiper from 'swiper';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const animSwiper = new Swiper('.anim__swiper', {
  modules: [Mousewheel],
  slidesPerView: 1,
  speed: 2000,
  allowTouchMove: false,
  mousewheel: true,
  vertical: true,
  direction: 'vertical',
});

const night = document.querySelector('.sunrise__night-bg');
const why = document.querySelector('.why');
const dayNebo = document.querySelector('.sunrise__day-nebo');
const dayOzero = document.querySelector('.sunrise__day-ozero');
const dayTrava = document.querySelector('.sunrise__day-trava');

animSwiper.on('slideChangeTransitionStart', function () {
  if (animSwiper.activeIndex === 0) {
    night.classList.add('show');
  } else if (animSwiper.activeIndex !== 0) {
    night.classList.remove('show');
  }
  if (animSwiper.activeIndex === 1) {
    why.classList.add('_active');
  } else if (animSwiper.activeIndex !== 1) {
    why.classList.remove('_active');
  }
  if (animSwiper.activeIndex === 2) {
    dayNebo.classList.add('move');
    dayOzero.classList.add('move');
    dayTrava.classList.add('move');
  } else if (animSwiper.activeIndex !== 2) {
    dayNebo.classList.remove('move');
    dayOzero.classList.remove('move');
    dayTrava.classList.remove('move');
  }
});

animSwiper.on('slideChangeTransitionEnd', function () {});
