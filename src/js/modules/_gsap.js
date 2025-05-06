import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
// import { ScrollSmoother } from 'gsap/ScrollSmoother.js';

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

document.addEventListener('DOMContentLoaded', () => {
  const heroTl = gsap.timeline();
  heroTl
    .from(
      '.hero__title',
      {
        // fontSize: '10dvw',
        // fontSize: 200,
        scale: 2,
        duration: 2.5,
        ease: 'power1.out',
      },
      0
    )
    .from(
      '.hero__info',
      {
        y: '100%',
        duration: 2.5,
        ease: 'power1.out',
      },
      0
    )
    .from(
      '.hero__hint',
      {
        opacity: 0,
        duration: 2,
        delay: 1,
      },
      0
    );
});
