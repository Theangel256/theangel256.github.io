import { HeroMotionController } from './hero-motion';
import { SectionRevealController } from './section-reveal';

let heroController: HeroMotionController | null = null;
let revealController: SectionRevealController | null = null;
let initialized = false;

function mount() {
  heroController?.destroy();
  revealController?.destroy();

  heroController = new HeroMotionController({ rootSelector: '[data-hero]' });
  revealController = new SectionRevealController({ selector: '[data-reveal-card]' });

  heroController.init();
  revealController.init();
}

export function initHomePageMotion() {
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
