import './modules/_tabs.js';
import { tabClick } from './modules/_tabs.js';
import { depressionGsap } from './modules/_gsap.js';
import './modules/_video.js';

document.addEventListener('DOMContentLoaded', () => {
  depressionGsap();
  if (document.querySelector('[data-js-tab]')) {
    const tabs = document.querySelectorAll('[data-js-tab]');

    tabs.forEach((tab) => {
      const tabBtns = tab.querySelectorAll('[data-js-tab-btn]');
      const tabItems = tab.querySelectorAll('[data-js-tab-item]');
      tabBtns.forEach((btn) => {
        tabClick(btn, tabBtns, tabItems);
      });
    });
  }
  if (window.innerWidth <= 768) {
    const btnsWr = document.querySelector('.specialist__types-tab-btns');
    const btns = document.querySelectorAll('.specialist__types-btn');
    btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        btnsWr.classList.toggle('_specialist__types-show');
      });
    });
  }
});
