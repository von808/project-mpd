document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('#header');

  function headerFixed() {
    let headerHeight = header.offsetHeight;
    let scrollDistance = window.scrollY;

    if (scrollDistance >= headerHeight) {
      header.classList.add('header--fixed');
      document.body.style.paddingTop = `${headerHeight}px`;
      header.style.top = `-${headerHeight}px`;
      header.style.transform = `translateY(${headerHeight}px)`;
    } else {
      header.classList.remove('header--fixed');
      document.body.style.paddingTop = null;
      header.style.top = null;
      header.style.transform = null;
    }
  }

  window.addEventListener('scroll', headerFixed);

  window.addEventListener('resize', headerFixed);
});
