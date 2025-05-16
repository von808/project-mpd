import './modules/_slider-circle.js';

import { indexGsap, therapyFromAnim, communityFromAnim } from './modules/_gsap.js';
import { indexSwipers } from './modules/_swiper.js';

document.addEventListener('DOMContentLoaded', () => {
  const island = document.querySelector('.island');
  const islandSlider = document.querySelector('.island-slider');
  const islTheraphyLink = island.querySelector('.island__therapy .island__link');
  const islTheraphyInfoLink = island.querySelector('.island-info__item-btn');

  indexGsap();
  indexSwipers(therapyFromAnim, communityFromAnim);

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

  islTheraphyInfoLink.addEventListener('click', (e) => {
    e.preventDefault;
    island.classList.remove('_therapy-inner');
    island.classList.add('_therapy-page');
    setTimeout(() => {
      window.location.href = islTheraphyInfoLink.dataset.path;
    }, 4000);
    setTimeout(() => {
      island.classList.remove('_therapy-page');
    }, 4500);
  });
});
