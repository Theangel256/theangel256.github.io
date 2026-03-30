import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let initialized = false;

export function getGsap() {
  if (!initialized) {
    gsap.registerPlugin(ScrollTrigger);
    initialized = true;
  }

  return { gsap, ScrollTrigger };
}
