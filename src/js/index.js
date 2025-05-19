import './modules/_slider-circle.js';

import { indexGsap, therapyFromAnim, communityFromAnim } from './modules/_gsap.js';
import { indexSwipers } from './modules/_swiper.js';

document.addEventListener('DOMContentLoaded', () => {
  const island = document.querySelector('.island');
  const islandSlider = document.querySelector('.island-slider');
  const islTheraphyLink = island.querySelector('.island__therapy .island__link');
  const islTheraphyInfoLinks = island.querySelectorAll('.island-info__item-btn');
  const islCommunity = island.querySelector('.island-community');
  const islCommunityLink = island.querySelector('.island__community .island__link');

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

  islTheraphyInfoLinks.forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault;
      island.classList.remove('_therapy-inner');
      island.classList.add('_therapy-page');
      setTimeout(() => {
        window.location.href = el.dataset.path;
      }, 4000);
      setTimeout(() => {
        island.classList.remove('_therapy-page');
      }, 4500);
    });
  });

  islCommunityLink.addEventListener('click', (e) => {
    e.stopPropagation;
    e.preventDefault;
    island.classList.add('_community-inner');
  });

  islCommunity.addEventListener('click', (e) => {
    e.stopPropagation;
    if (!e.target.closest('.island-community__info')) {
      island.classList.remove('_community-inner');
    }
  });
});
