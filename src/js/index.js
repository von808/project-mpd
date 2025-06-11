import './modules/_slider-circle.js';

import { indexGsap, therapyFromAnim, communityFromAnim } from './modules/_gsap.js';
import { indexSwipers } from './modules/_swiper.js';

document.addEventListener('DOMContentLoaded', () => {
  const island = document.querySelector('.island');
  const islandDesk = document.querySelector('.island__box');
  const islandMob = document.querySelector('.island__box-mobile');

  const islandSlider = document.querySelector('.island-slider');

  const islTheraphyLinkDesk = islandDesk.querySelector('.island__therapy .island__link');
  const islTheraphyLinkMob = islandMob.querySelector('.island__therapy-text');
  const islTheraphyInfoLinks = island.querySelectorAll('.island-info__item-btn');

  const islCommunityLinkDesk = islandDesk.querySelector('.island__community .island__link');
  const islCommunityLinkMob = islandMob.querySelector('.island__community-text');
  const islCommunityMobClose = islandMob.querySelector('.island__community-close');

  const islCommunity = island.querySelector('.island-community');

  indexGsap();
  indexSwipers(therapyFromAnim, communityFromAnim);

  islTheraphyLinkDesk.addEventListener('click', (e) => {
    e.stopPropagation;
    e.preventDefault;
    island.classList.add('_therapy-inner');
  });
  islTheraphyLinkMob.addEventListener('click', (e) => {
    e.stopPropagation;
    e.preventDefault;
    island.classList.add('_therapy-inner');
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

  islCommunityLinkDesk.addEventListener('click', (e) => {
    e.stopPropagation;
    e.preventDefault;
    island.classList.add('_community-inner');
  });
  islCommunityLinkMob.addEventListener('click', (e) => {
    e.stopPropagation;
    e.preventDefault;
    island.classList.add('_community-inner');
  });
  islCommunityMobClose.addEventListener('click', (e) => {
    e.stopPropagation;
    e.preventDefault;
    island.classList.remove('_community-inner');
  });

  islandSlider.addEventListener('click', (e) => {
    e.stopPropagation;
    if (!e.target.closest('.island-slider__items-wrapper') && !e.target.closest('.island-info__content')) {
      island.classList.remove('_therapy-inner');
    }
  });
  islCommunity.addEventListener('click', (e) => {
    e.stopPropagation;
    if (!e.target.closest('.island-community__info')) {
      island.classList.remove('_community-inner');
    }
  });
});
