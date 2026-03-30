import { HeroMotionController } from './hero-motion';
import { SectionRevealController } from './section-reveal';
import { userConfig } from '../site-config';

let heroController: HeroMotionController | null = null;
let revealController: SectionRevealController | null = null;
let initialized = false;

function mount() {
  document.documentElement.dataset.motionStatus = 'mounting';

  heroController?.destroy();
  revealController?.destroy();

  heroController = new HeroMotionController({ rootSelector: '[data-hero]' });
  revealController = new SectionRevealController({ selector: '[data-reveal-card]' });

  heroController.init();
  revealController.init();

  document.documentElement.dataset.motionStatus = 'ready';
}

export function initHomePageMotion() {
  if (!userConfig.motion.enabled) {
    return;
  }

  if (
    userConfig.motion.respectReducedMotion &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    return;
  }

  if (!initialized) {
    document.addEventListener('astro:after-swap', mount);
    window.addEventListener('beforeunload', () => {
      heroController?.destroy();
      revealController?.destroy();
    });
    initialized = true;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount, { once: true });
    return;
  }

  mount();
}
