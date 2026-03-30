import { getGsap } from './gsap-core';
import { userConfig } from '../site-config';

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

    if (!root) {
      return;
    }

    if (
      userConfig.motion.respectReducedMotion &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    this.destroy();

    const { gsap } = getGsap();
    const textItems = root.querySelectorAll<HTMLElement>('[data-hero-item]');
    const badgeItems = root.querySelectorAll<HTMLElement>('[data-hero-badge]');
    const buttonItems = root.querySelectorAll<HTMLElement>('[data-hero-button]');
    const metaItems = root.querySelectorAll<HTMLElement>('[data-hero-meta]');
    const visualWrap = root.querySelector<HTMLElement>('[data-hero-visual-wrap]');
    const copy = root.querySelector<HTMLElement>('[data-hero-copy]');
    const portrait = root.querySelector<HTMLElement>('[data-hero-portrait]');
    const glow = root.querySelector<HTMLElement>('[data-hero-glow]');
    const aurora = root.querySelector<HTMLElement>('[data-hero-aurora]');
    const backdrop = root.querySelector<HTMLElement>('[data-hero-backdrop]');
    const mesh = root.querySelector<HTMLElement>('[data-hero-mesh]');
    const chips = root.querySelectorAll<HTMLElement>('[data-hero-chip]');
    const panels = root.querySelectorAll<HTMLElement>('[data-hero-panel]');
    const orbits = root.querySelectorAll<HTMLElement>('[data-hero-orbit]');

    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

      timeline
        .fromTo(
          textItems,
          {
            y: 36,
            autoAlpha: 0,
            scale: 0.965,
            filter: 'blur(16px)',
          },
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            filter: 'blur(0px)',
            duration: 0.9,
            stagger: 0.1,
            ease: 'power4.out',
            clearProps: 'opacity,filter',
          },
        )
        .fromTo(
          [aurora, backdrop].filter(Boolean),
          {
            autoAlpha: 0,
            scale: 1.08,
            y: 10,
            filter: 'blur(74px) saturate(0.68)',
          },
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            filter: 'blur(0px) saturate(1.15)',
            duration: 1.15,
            stagger: 0.08,
            ease: 'power3.out',
            clearProps: 'opacity,filter',
          },
          '-=0.78',
        )
        .fromTo(
          mesh,
          {
            autoAlpha: 0,
            scale: 1.16,
            rotate: -6,
            filter: 'blur(20px)',
          },
          {
            autoAlpha: 0.26,
            scale: 1,
            rotate: 0,
            filter: 'blur(0px)',
            duration: 1,
            ease: 'power2.out',
            clearProps: 'opacity,filter',
          },
          '-=1.02',
        )
        .fromTo(
          visualWrap,
          {
            y: 24,
            autoAlpha: 0,
            scale: 1.08,
            rotate: -1.5,
            filter: 'blur(28px)',
          },
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            rotate: 0,
            filter: 'blur(0px)',
            duration: 1.1,
            ease: 'power4.out',
            clearProps: 'opacity,filter',
          },
          '-=1.04',
        )
        .fromTo(
          [...orbits, ...chips, ...panels],
          {
            y: 18,
            autoAlpha: 0,
            scale: 1.06,
            rotate: (index) => (index % 2 === 0 ? -12 : 12),
            filter: 'blur(12px)',
          },
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            rotate: 0,
            filter: 'blur(0px)',
            duration: 0.88,
            stagger: 0.06,
            ease: 'back.out(1.6)',
            clearProps: 'opacity,filter',
          },
          '-=0.74',
        )
        .fromTo(
          portrait,
          {
            autoAlpha: 0,
            scale: 1.12,
            filter: 'blur(22px)',
          },
          {
            autoAlpha: 1,
            scale: 1,
            filter: 'blur(0px)',
            duration: 0.95,
            ease: 'power3.out',
            clearProps: 'opacity,filter',
          },
          '-=0.78',
        );

      if (badgeItems.length) {
        timeline.fromTo(
          badgeItems,
          {
            autoAlpha: 0,
            y: 14,
            scale: 1.04,
            filter: 'blur(10px)',
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 0.56,
            stagger: 0.06,
            ease: 'power3.out',
            clearProps: 'opacity,filter',
          },
          '-=0.58',
        );
      }

      if (buttonItems.length) {
        timeline.fromTo(
          buttonItems,
          {
            autoAlpha: 0,
            y: 18,
            scale: 0.96,
            filter: 'blur(12px)',
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 0.62,
            stagger: 0.08,
            ease: 'power3.out',
            clearProps: 'opacity,filter',
          },
          '-=0.48',
        );
      }

      if (metaItems.length) {
        timeline.fromTo(
          metaItems,
          {
            autoAlpha: 0,
            y: 18,
            scale: 0.98,
            filter: 'blur(14px)',
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 0.64,
            stagger: 0.08,
            ease: 'power3.out',
            clearProps: 'opacity,filter',
          },
          '-=0.36',
        );
      }

      if (glow) {
        timeline.fromTo(
          glow,
          {
            autoAlpha: 0,
            scale: 0.72,
            filter: 'blur(40px)',
          },
          {
            autoAlpha: 0.92,
            scale: 1,
            filter: 'blur(26px)',
            duration: 0.95,
            ease: 'power2.out',
            clearProps: 'opacity',
          },
          '-=1.15',
        );

        gsap.to(glow, {
          scale: 1.2,
          opacity: 1,
          duration: 2.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      if (aurora) {
        gsap.to(aurora, {
          xPercent: 4,
          yPercent: -5,
          scale: 1.08,
          duration: 4.4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      if (backdrop) {
        gsap.to(backdrop, {
          y: -12,
          scale: 1.04,
          duration: 3.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      if (mesh) {
        gsap.to(mesh, {
          backgroundPosition: '1.4rem 1.8rem',
          duration: 6.4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      orbits.forEach((orbit, index) => {
        gsap.to(orbit, {
          rotate: index % 2 === 0 ? 360 : -360,
          duration: index % 2 === 0 ? 24 : 18,
          repeat: -1,
          ease: 'none',
        });
      });

      chips.forEach((chip, index) => {
        gsap.to(chip, {
          y: index % 2 === 0 ? -18 : 16,
          x: index % 2 === 0 ? 6 : -8,
          rotate: index % 2 === 0 ? -7 : 7,
          duration: 2.6 + index * 0.22,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });

      panels.forEach((panel, index) => {
        gsap.to(panel, {
          y: index === 0 ? -14 : 14,
          x: index === 0 ? 8 : -8,
          duration: 3.2 + index * 0.4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });

      if (portrait) {
        gsap.to(portrait, {
          scale: 1.012,
          duration: 2.8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      if (copy || visualWrap || backdrop || aurora) {
        const scrollTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.9,
          },
        });

        if (copy) {
          scrollTimeline.to(
            copy,
            {
              yPercent: 14,
              opacity: 0.16,
              ease: 'none',
            },
            0,
          );
        }

        if (visualWrap) {
          scrollTimeline.to(
            visualWrap,
            {
              yPercent: -10,
              scale: 1.08,
              ease: 'none',
            },
            0,
          );
        }

        scrollTimeline.to(
          [backdrop, aurora].filter(Boolean),
          {
            scale: 1.1,
            opacity: 0.52,
            filter: 'saturate(1.3)',
            ease: 'none',
          },
          0,
        );
      }
    }, root);

    this.cleanup.push(() => context.revert());

    const mm = gsap.matchMedia();

    mm.add('(min-width: 721px)', () => {
      const handlePointerMove = (event: PointerEvent) => {
        const bounds = root.getBoundingClientRect();
        const moveX = (event.clientX - bounds.left) / bounds.width - 0.5;
        const moveY = (event.clientY - bounds.top) / bounds.height - 0.5;

        chips.forEach((chip) => {
          const depth = Number(chip.dataset.depth || 0.2);

          gsap.to(chip, {
            x: moveX * 54 * depth,
            y: moveY * 40 * depth,
            duration: 0.45,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        });

        panels.forEach((panel, index) => {
          const intensity = index === 0 ? 10 : 14;

          gsap.to(panel, {
            x: moveX * intensity,
            y: moveY * intensity * 0.8,
            duration: 0.55,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        });

        if (aurora) {
          gsap.to(aurora, {
            x: moveX * 26,
            y: moveY * 20,
            duration: 0.8,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        }

        if (backdrop) {
          gsap.to(backdrop, {
            rotateX: moveY * -4,
            rotateY: moveX * 6,
            transformPerspective: 900,
            transformOrigin: 'center center',
            duration: 0.7,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        }

        document.documentElement.style.setProperty('--ambient-x', `${50 + moveX * 18}%`);
        document.documentElement.style.setProperty('--ambient-y', `${18 + moveY * 12}%`);
        document.documentElement.style.setProperty('--ambient-drift-x', `${moveX * 60}px`);
        document.documentElement.style.setProperty('--ambient-drift-y', `${moveY * 50}px`);
      };

      const resetTransforms = () => {
        gsap.to([aurora, backdrop, ...chips, ...panels].filter(Boolean), {
          x: 0,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          duration: 0.65,
          ease: 'power3.out',
          overwrite: 'auto',
        });

        document.documentElement.style.setProperty('--ambient-x', '50%');
        document.documentElement.style.setProperty('--ambient-y', '18%');
        document.documentElement.style.setProperty('--ambient-drift-x', '0px');
        document.documentElement.style.setProperty('--ambient-drift-y', '0px');
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
