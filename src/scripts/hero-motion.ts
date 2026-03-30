import { getGsap } from './gsap-core';

interface HeroMotionOptions {
  rootSelector: string;
}

export class HeroMotionController {
  private rootSelector: string;
  private cleanup: Array<() => void> = [];

  constructor(options: HeroMotionOptions) {
    this.rootSelector = options.rootSelector;
  }

  init() {
    const root = document.querySelector<HTMLElement>(this.rootSelector);

    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    this.destroy();

    const { gsap } = getGsap();
    const textItems = root.querySelectorAll('[data-hero-item]');
    const visualWrap = root.querySelector<HTMLElement>('[data-hero-visual-wrap]');
    const copy = root.querySelector<HTMLElement>('[data-hero-copy]');
    const portrait = root.querySelector<HTMLElement>('[data-hero-portrait]');
    const glow = root.querySelector<HTMLElement>('[data-hero-glow]');
    const backdrop = root.querySelector<HTMLElement>('[data-hero-backdrop]');
    const hexagons = root.querySelectorAll<HTMLElement>('[data-hero-hex]');

    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

      timeline
        .fromTo(
          textItems,
          {
            y: 56,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.9,
            stagger: 0.1,
            ease: 'power4.out',
            clearProps: 'opacity',
          },
        )
        .fromTo(
          backdrop,
          {
            autoAlpha: 0,
            scale: 0.88,
            filter: 'blur(18px) saturate(0.86)',
          },
          {
            autoAlpha: 1,
            scale: 1,
            filter: 'blur(0px) saturate(1.1)',
            duration: 1.2,
            ease: 'power2.out',
            clearProps: 'opacity',
          },
          '-=0.82',
        )
        .fromTo(
          visualWrap,
          {
            y: 42,
            autoAlpha: 0,
            scale: 0.84,
          },
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            duration: 1.05,
            ease: 'power4.out',
            clearProps: 'opacity',
          },
          '-=0.96',
        )
        .fromTo(
          hexagons,
          {
            y: 34,
            autoAlpha: 0,
            scale: 0.68,
            rotate: (index) => (index % 2 === 0 ? -18 : 18),
          },
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            rotate: 0,
            duration: 0.82,
            stagger: 0.07,
            ease: 'back.out(1.8)',
            clearProps: 'opacity',
          },
          '-=0.62',
        )
        .fromTo(
          portrait,
          {
            autoAlpha: 0,
            yPercent: 12,
            rotate: -4,
            scale: 0.82,
          },
          {
            autoAlpha: 1,
            yPercent: 0,
            rotate: 0,
            scale: 1,
            duration: 1.2,
            ease: 'elastic.out(1, 0.72)',
            clearProps: 'opacity',
          },
          '-=0.72',
        );

      if (glow) {
        timeline.fromTo(
          glow,
          {
            autoAlpha: 0,
            scale: 0.78,
          },
          {
            autoAlpha: 0.82,
            scale: 1,
            duration: 0.95,
            ease: 'power2.out',
            clearProps: 'opacity',
          },
          '-=1.15',
        );

        gsap.to(glow, {
          scale: 1.16,
          opacity: 1,
          duration: 1.85,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      if (backdrop) {
        gsap.to(backdrop, {
          y: -18,
          scale: 1.03,
          duration: 2.4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      hexagons.forEach((hexagon, index) => {
        gsap.to(hexagon, {
          y: `${index % 2 === 0 ? '-=' : '+='}${16 + index * 4}`,
          rotate: index % 2 === 0 ? -6 : 6,
          duration: 1.6 + index * 0.22,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });

      if (portrait) {
        gsap.to(portrait, {
          y: '-=18',
          rotate: 1.2,
          duration: 1.9,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      if (copy || visualWrap || backdrop) {
        const scrollTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.8,
          },
        });

        if (copy) {
          scrollTimeline.to(
            copy,
            {
              yPercent: 18,
              opacity: 0.08,
              ease: 'none',
            },
            0,
          );
        }

        if (visualWrap) {
          scrollTimeline.to(
            visualWrap,
            {
              yPercent: -14,
              scale: 1.14,
              ease: 'none',
            },
            0,
          );
        }

        if (backdrop) {
          scrollTimeline.to(
            backdrop,
            {
              scale: 1.14,
              opacity: 0.45,
              filter: 'saturate(1.4)',
              ease: 'none',
            },
            0,
          );
        }
      }
    }, root);

    this.cleanup.push(() => context.revert());

    const mm = gsap.matchMedia();

    mm.add('(min-width: 721px)', () => {
      const handlePointerMove = (event: PointerEvent) => {
        const bounds = root.getBoundingClientRect();
        const moveX = (event.clientX - bounds.left) / bounds.width - 0.5;
        const moveY = (event.clientY - bounds.top) / bounds.height - 0.5;

        hexagons.forEach((hexagon) => {
          const depth = Number(hexagon.dataset.depth || 0.2);

          gsap.to(hexagon, {
            x: moveX * 38 * depth,
            y: moveY * 34 * depth,
            duration: 0.5,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        });

        if (portrait) {
          gsap.to(portrait, {
            x: moveX * 18,
            y: moveY * 16,
            duration: 0.6,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        }
      };

      const resetTransforms = () => {
        gsap.to([hexagons, portrait].filter(Boolean), {
          x: 0,
          y: 0,
          duration: 0.65,
          ease: 'power3.out',
          overwrite: 'auto',
        });
      };

      root.addEventListener('pointermove', handlePointerMove);
      root.addEventListener('pointerleave', resetTransforms);

      return () => {
        root.removeEventListener('pointermove', handlePointerMove);
        root.removeEventListener('pointerleave', resetTransforms);
        resetTransforms();
      };
    });

    this.cleanup.push(() => mm.revert());
  }

  destroy() {
    this.cleanup.forEach((callback) => callback());
    this.cleanup = [];
  }
}
