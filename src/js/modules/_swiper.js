import Swiper from 'swiper';
import { Mousewheel, Pagination, Controller } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/controller';

const indexSwipers = (therapyFromAnim, communityFromAnim) => {
  const animSwiper = new Swiper('.anim__swiper', {
    modules: [Mousewheel],
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

  const islandMobSwiperInfo = new Swiper('.island-mobile__swiper-info', {
    modules: [Controller],
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    allowTouchMove: false,
  });
  const islandMobSwiper = document.querySelector('.island-mobile__swiper-circles');
  const islandMobSwiperItems = new Swiper(islandMobSwiper, {
    modules: [Controller],
    slidesPerView: 4,
    // spaceBetween: 15,
    centeredSlides: true,
    loop: true,
  });
  const islandMobSwiperSlides = islandMobSwiper.querySelectorAll('.swiper-slide');
  islandMobSwiperSlides.forEach((islandMobSwiperSlide) => {
    islandMobSwiperSlide.addEventListener('click', (event) => {
      let slidePrev = event.target.closest('.swiper-slide').classList.contains('swiper-slide-prev');
      let slideNext = event.target.closest('.swiper-slide').classList.contains('swiper-slide-next');
      if (slidePrev) {
        islandMobSwiperItems.slidePrev();
        islandMobSwiperInfo.slidePrev();
      }
      if (slideNext) {
        islandMobSwiperItems.slideNext();
        islandMobSwiperInfo.slideNext();
      }
      event.stopPropagation();
    });
  });
  islandMobSwiper.addEventListener('click', (event) => {
    if (event.target.closest('.island-mobile__swiper-circles')) {
      island.classList.remove('_therapy-inner');
    }
  });
};

export { indexSwipers };
