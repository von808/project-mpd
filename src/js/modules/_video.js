document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('[data-js-video-box]')) {
    const videoBoxes = document.querySelectorAll('[data-js-video-box]');
    videoBoxes.forEach((videoBox) => {
      const video = videoBox.querySelector('[data-js-video]');
      video.addEventListener('click', (e) => {
        e.preventDefault();
        // console.log(video.closest('[data-js-video-box]'));
        // video.closest('[data-js-video-box]').classList.toggle('_play');
        video.paused
          ? video.closest('[data-js-video-box]').classList.add('_play')
          : video.closest('[data-js-video-box]').classList.remove('_play');
        video.paused ? video.play() : video.pause();
      });
    });
  }
});
