document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.media')) {
    const medias = document.querySelectorAll('.media');

    medias.forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        el.closest('.video').classList.toggle('video-run');
        el.paused ? el.play() : el.pause();
      });
    });
  }
});
