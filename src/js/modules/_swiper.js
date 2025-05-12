import { therapyFromAnim, communityFromAnim } from './_gsap.js';

import Swiper from 'swiper';
import { Mousewheel } from 'swiper/modules';

import 'swiper/css';

document.addEventListener('DOMContentLoaded', () => {
  const animSwiper = new Swiper('.anim__swiper', {
    modules: [Mousewheel],
    slidesPerView: 1,
    speed: 2000,
    allowTouchMove: false,
    mousewheel: true,
    vertical: true,
    direction: 'vertical',
    initialSlide: 3,
  });

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
    } else if (animSwiper.activeIndex !== 0) {
      night.classList.remove('show');
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
      // therapyFromAnim.reverse();
      // communityFromAnim.reverse();
    }
  });

  animSwiper.on('slideChangeTransitionEnd', function () {});
});
