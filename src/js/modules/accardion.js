document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.accardion')) {
    const accBodys = document.querySelectorAll('.accardion-body');

    document.querySelectorAll('.accardion-head').forEach((el) => {
      el.addEventListener('click', () => {
        let content = el.nextElementSibling;

        if (content.style.maxHeight) {
          accBodys.forEach((el) => (el.style.maxHeight = null));
          accBodys.forEach((el) =>
            el.closest('.accardion-item').classList.remove('accardion-show')
          );
        } else {
          accBodys.forEach((el) => (el.style.maxHeight = null));
          accBodys.forEach((el) =>
            el.closest('.accardion-item').classList.remove('accardion-show')
          );
          content.style.maxHeight = `${content.scrollHeight}px`;
          el.closest('.accardion-item').classList.add('accardion-show');
        }
      });
    });
  }
});
