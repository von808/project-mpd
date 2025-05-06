document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.tab')) {
    const tabBtn = document.querySelectorAll('.tab-btn');
    const tabItem = document.querySelectorAll('.tab-item');

    tabBtn.forEach(tabClick);

    function tabClick(item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTabs = document.querySelectorAll(tabId);

        if (!currentBtn.classList.contains('tab-active')) {
          tabBtn.forEach(function (item) {
            item.classList.remove('tab-active');
          });

          tabItem.forEach(function (item) {
            item.classList.remove('tab-active');
          });

          currentBtn.classList.add('tab-active');

          currentTabs.forEach((currentTab) => {
            currentTab.classList.add('tab-active');
          });
        }
      });
    }
  }
});
