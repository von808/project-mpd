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
    // document.body.style.pointerEvents = 'none';
  });

  animSwiper.on('slideChangeTransitionEnd', function () {
    // document.body.style.pointerEvents = 'all';
  });

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

  let startX = 0;
  let startY = 0;
  // Обработчик события touchstart (или mousedown)
  function swipeStart(event) {
    // event.preventDefault(); // Предотвращает стандартное поведение браузера
    startX = event.touches ? event.touches[0].clientX : event.clientX; // Получаем начальную координату X
    startY = event.touches ? event.touches[0].clientY : event.clientY; // Получаем начальную координату Y
  }
  // Обработчик события touchmove (или mousemove)
  function swipeAction(event) {
    // event.preventDefault(); // Предотвращаем стандартное поведение браузера
    // Здесь можно обрабатывать движение, например, если требуется непрерывное обновление
    // элементов на экране во время свайпа
  }
  // Обработчик события touchend (или mouseup)
  function swipeEnd(event) {
    // event.preventDefault(); // Предотвращаем стандартное поведение браузера
    let endX = event.changedTouches ? event.changedTouches[0].clientX : event.clientX; // Получаем конечную координату X
    let endY = event.changedTouches ? event.changedTouches[0].clientY : event.clientY; // Получаем конечную координату Y

    // Расчет расстояния и направления свайпа
    let deltaX = endX - startX;
    let deltaY = endY - startY;

    // Проверка на свайп (можно настроить пороги расстояния и времени)
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      // Если по горизонтали свайп сильнее, чем по вертикали и расстояние больше 50 пикселей
      if (deltaX > 0) {
        // console.log('Свайп вправо');
        // Действия при свайпе вправо
      } else {
        // console.log('Свайп влево');
        // Действия при свайпе влево
      }
    } else if (Math.abs(deltaY) > 50) {
      // Если по вертикали свайп сильнее и расстояние больше 50 пикселей
      if (deltaY > 0) {
        // console.log('Свайп вниз');
        // Действия при свайпе вниз
        animSwiper.slidePrev();
      } else {
        // console.log('Свайп вверх');
        // Действия при свайпе вверх
        animSwiper.slideNext();
      }
    }
  }
  // Добавление обработчиков событий
  const element = document.body; // Замените на нужный элемент
  element.addEventListener('touchstart', swipeStart, { passive: false });
  element.addEventListener('touchmove', swipeAction, { passive: false });
  element.addEventListener('touchend', swipeEnd, { passive: false });
  // Для имитации свайпа мышью (на десктопе)
  // document.addEventListener('mousedown', swipeStart, { passive: false });
  // document.addEventListener('mousemove', swipeAction, { passive: false });
  // document.addEventListener('mouseup', swipeEnd, { passive: false });
  // console.log(document);
};

export { indexSwipers };
