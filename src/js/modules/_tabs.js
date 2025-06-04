export function tabClick(item, btns, items) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-js-tab-path');
    let currentTabs = document.querySelectorAll(`[data-js-tab-path="${tabId}"]`);

    if (!currentBtn.hasAttribute('data-js-tab-active')) {
      btns.forEach((item) => item.removeAttribute('data-js-tab-active'));
      currentBtn.setAttribute('data-js-tab-active', '');
      items.forEach((item) => item.removeAttribute('data-js-tab-active'));
      currentTabs.forEach((item) => item.setAttribute('data-js-tab-active', ''));
    }
  });
}