import { getGsap } from './gsap-core';
import { userConfig } from '../site-config';

interface SectionRevealOptions {
  selector: string;
}

export class SectionRevealController {
  private selector: string;
  private cleanup: Array<() => void> = [];

  constructor(options: SectionRevealOptions) {
    this.selector = options.selector;
  }

  init() {
    const cards = Array.from(document.querySelectorAll<HTMLElement>(this.selector));

    if (!cards.length) {
      return;
    }

    if (
      userConfig.motion.respectReducedMotion &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    this.destroy();

    const { gsap, ScrollTrigger } = getGsap();

    const triggers = cards.map((card, index) => {
      return ScrollTrigger.create({
        trigger: card,
        start: 'top 84%',
        once: true,
        onEnter: () => {
          gsap.fromTo(
            card,
            {
              y: 56,
              opacity: 0,
              scale: 0.92,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.78,
              delay: index * 0.05,
              ease: 'back.out(1.2)',
              clearProps: 'transform,opacity',
            },
          );
        },
        onLeaveBack: () => {
          if (window.scrollY < card.offsetTop) {
            gsap.set(card, { clearProps: 'transform,opacity' });
          }
        },
      });
    });

    this.cleanup.push(() => {
      triggers.forEach((trigger) => trigger.kill());
      cards.forEach((card) => gsap.set(card, { clearProps: 'all' }));
    });
  }

  destroy() {
    this.cleanup.forEach((callback) => callback());
    this.cleanup = [];
  }
}
