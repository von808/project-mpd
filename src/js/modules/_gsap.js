import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
// import { ScrollSmoother } from 'gsap/ScrollSmoother.js';

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
gsap.registerPlugin(ScrollTrigger);

const indexGsap = () => {
  function heroAnims() {
    const heroTl = gsap.timeline();
    heroTl
      .to(
        '.header',
        {
          opacity: 1,
          duration: 2,
          ease: 'power1.out',
        },
        0
      )
      .from(
        '.hero__title',
        {
          // fontSize: '10dvw',
          // fontSize: 200,
          // scale: 2,
          scale: 1.75,
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
      .to(
        '.hero__info',
        {
          opacity: 1,
          duration: 1.5,
        },
        0
      )
      .to(
        '.hero__hint',
        {
          opacity: 1,
          duration: 2,
          delay: 1,
        },
        0
      );
  }
  heroAnims();

  function islandHoverAnims() {
    const therapy = document.querySelector('.island__therapy');
    const community = document.querySelector('.island__community');

    const tlTherapy = gsap.timeline({
      paused: true,
      defaults: { duration: 1.5, ease: 'power1.out' },
    });
    const tlCommunity = gsap.timeline({
      paused: true,
      defaults: { duration: 1.5, ease: 'power1.out' },
    });

    const therapyAnim = tlTherapy
      .to(
        '.island__therapy-text',
        {
          scale: 1.5,
        },
        0
      )
      .to(
        '.island__therapy .island__link',
        {
          opacity: 1,
          top: '55%',
          left: '65%',
        },
        0
      )
      .to(
        '.island__therapy .island__link',
        {
          pointerEvents: 'all',
        },
        1
      )
      .to(
        '.island__therapy-colud-1',
        {
          opacity: 1,
          top: '-15%',
          left: '45%',
        },
        0
      )
      .to(
        '.island__therapy-colud-2',
        {
          opacity: 1,
          bottom: '-5%',
          left: '40%',
        },
        0
      );

    const communityAnim = tlCommunity
      .to(
        '.island__community-text',
        {
          scale: 1.5,
        },
        0
      )
      .to(
        '.island__community .island__link',
        {
          opacity: 1,
          top: '50%',
          left: '80%',
        },
        0
      )
      .to(
        '.island__community .island__link',
        {
          pointerEvents: 'all',
        },
        1
      )
      .to(
        '.island__community-colud-1',
        {
          opacity: 1,
          top: '-50%',
          left: '100%',
        },
        0
      )
      .to(
        '.island__community-colud-2',
        {
          opacity: 1,
          bottom: '-5%',
          left: '30%',
        },
        0
      );

    therapy.addEventListener('mouseenter', () => {
      therapyAnim.play();
    });
    therapy.addEventListener('mouseleave', () => {
      therapyAnim.reverse();
    });
    community.addEventListener('mouseenter', () => {
      communityAnim.play();
    });
    community.addEventListener('mouseleave', () => {
      communityAnim.reverse();
    });
  }
  islandHoverAnims();
};
const therapyFromAnim = gsap.from('.island__therapy', {
  rotate: '-45deg',
  scale: 1.5,
  opacity: 0,
  duration: 2,
  ease: 'ease',
});
const communityFromAnim = gsap.from('.island__community', {
  rotate: '-45deg',
  scale: 2,
  opacity: 0,
  duration: 2,
  ease: 'ease',
});
const depressionGsap = () => {
  gsap.to('.depression', {
    scrollTrigger: {
      trigger: '.wrapper',
      start: 'top top',
      end: '+=785',
      scrub: true,
    },
    scale: 2,
  });
};

export { indexGsap, therapyFromAnim, communityFromAnim, depressionGsap };
