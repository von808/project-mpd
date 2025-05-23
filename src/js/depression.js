import './modules/_tabs.js';
import { tabClick } from './modules/_tabs.js';
// import './modules/video.js';

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('[js-tab]')) {
    const tabs = document.querySelectorAll('[js-tab]');

    tabs.forEach((tab) => {
      const tabBtns = tab.querySelectorAll('[js-tab-btn]');
      const tabItems = tab.querySelectorAll('[js-tab-item]');
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
