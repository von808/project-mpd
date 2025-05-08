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
  let therapyAnim = tlTherapy
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
        top: '57%',
        left: '60%',
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
        top: '-3%',
        left: '50%',
      },
      0
    )
    .to(
      '.island__therapy-colud-2',
      {
        opacity: 1,
        bottom: '-11%',
        left: '40%',
      },
      0
    );

  let communityAnim = tlCommunity
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
        top: '73%',
        left: '59%',
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
        top: '-18%',
        left: '72%',
      },
      0
    )
    .to(
      '.island__community-colud-2',
      {
        opacity: 1,
        bottom: '-26%',
        left: '35%',
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
});

const therapyTextFrom = gsap.from('.island__therapy-text', {
  top: '75%',
  left: '50%',
  rotate: '0deg',
  scale: 1.5,
  opacity: 0,
  duration: 2,
  ease: 'ease',
});
const communityTextFrom = gsap.from('.island__community-text', {
  top: '0%',
  left: '50%',
  rotate: '-90deg',
  scale: 1.5,
  opacity: 0,
  duration: 2,
  ease: 'ease',
});

export { therapyTextFrom, communityTextFrom };
