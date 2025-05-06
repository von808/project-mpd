if (document.querySelector('.modal-open')) {
  const modalOpen = document.querySelectorAll('.modal-open');
  const modalClose = document.querySelectorAll('.modal-close');
  const modalOverlay = document.querySelector('.modal-overlay ');
  const modals = document.querySelectorAll('.modal');

  modalOpen.forEach((el) => {
    el.addEventListener('click', (e) => {
      let path = e.currentTarget.getAttribute('data-path');

      modals.forEach((el) => {
        el.classList.remove('modal--visible');
      });

      let modalItem = document.querySelector(`[data-target="${path}"]`);
      modalItem.classList.add('modal--visible');

      modalOverlay.classList.add('modal-overlay--visible');
      document.body.classList.add('no-scroll');
    });
  });

  modalClose.forEach((el) => {
    el.addEventListener('click', (e) => {
      let path = e.currentTarget.getAttribute('data-path');

      modals.forEach((el) => {
        el.classList.remove('modal--visible');
        modalOverlay.classList.remove('modal-overlay--visible');
        document.body.classList.remove('no-scroll');
      });

      document
        .querySelector(`[data-target="${path}"]`)
        .classList.remove('modal--visible');
    });
  });

  modalOverlay.addEventListener('click', (e) => {
    if (e.target == modalOverlay) {
      modalOverlay.classList.remove('modal-overlay--visible');
      modals.forEach((el) => {
        el.classList.remove('modal--visible');
        document.body.classList.remove('no-scroll');
      });
    }
  });
}
