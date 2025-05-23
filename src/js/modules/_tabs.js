export function tabClick(item, btns, items) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('js-tab-data');
    let currentTabs = document.querySelectorAll(`[js-tab-data="${tabId}"]`);

    if (!currentBtn.hasAttribute('js-tab-active')) {
      btns.forEach((item) => item.removeAttribute('js-tab-active'));
      currentBtn.setAttribute('js-tab-active', '');
      items.forEach((item) => item.removeAttribute('js-tab-active'));

      currentTabs.forEach((item) => item.setAttribute('js-tab-active', ''));
    }
  });
}