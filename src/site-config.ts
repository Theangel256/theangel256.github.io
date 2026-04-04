export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface HeroCta {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
  target?: '_blank' | '_self';
}

export interface HeroPortraitConfig {
  src: string;
  alt: string;
  badge: string;
}

export interface HeroBadgeConfig {
  id: string;
  label: string;
}

export interface HeroHexagonConfig {
  id: string;
  size: string;
  tone: 'primary' | 'secondary' | 'tertiary' | 'surface';
  rotation: string;
  offsetX: string;
  offsetY: string;
  depth: number;
  mobile: boolean;
  label: string;
}

export interface ProjectConfig {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface UserConfig {
  name: string;
  role: string;
  bio: string;
  motion: {
    enabled: boolean;
    respectReducedMotion: boolean;
  };
  theme: {
    baseColor: string;
    defaultMode: 'light' | 'dark';
  };
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    description: string;
    badges: HeroBadgeConfig[];
    ctas: HeroCta[];
    portrait: HeroPortraitConfig;
    hexagons: HeroHexagonConfig[];
  };
  socials: SocialLink[];
  projects: ProjectConfig[];
}

export const userConfig: UserConfig = {
  name: 'Angel Amarillas',
  role: 'Full-Stack Developer',
  bio: 'Desarrollador Full-Stack con experiencia en el desarrollo de aplicaciones web y móviles. Me gusta crear productos visuales con jerarquia fuerte, animaciones fluidas y sistemas que se sienten nativos tanto en movil como en desktop.',
  motion: {
    enabled: true,
    respectReducedMotion: false,
  },
  theme: {
    baseColor: '#d11fb0',
    defaultMode: 'dark',
  },
  hero: {
    eyebrow: 'Portfolio personal',
    title: 'Hola, soy Angel Amarillas.',
    titleAccent: 'Angel Amarillas.',
    subtitle: 'Full-Stack Developer',
    description:
      'Desarrollador Full-Stack con experiencia en el desarrollo de aplicaciones web y móviles. Me gusta crear productos visuales con jerarquia fuerte, animaciones fluidas y sistemas que se sienten nativos tanto en movil como en desktop.',
    badges: [
      { id: 'badge-motion', label: 'React' },
      { id: 'badge-material', label: 'Node.js' },
      { id: 'badge-adaptive', label: 'TypeScript' },
      { id: 'badge-adaptive', label: 'Python' },
      { id: 'badge-adaptive', label: 'MongoDB' },
      { id: 'badge-adaptive', label: 'Java' },
      { id: 'badge-adaptive', label: 'Kotlin' },
      { id: 'badge-adaptive', label: 'GO' },
    ],
    ctas: [
      {
        label: 'Ver proyectos',
        href: '#projects',
        variant: 'primary',
        target: '_self',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/theangel256',
        variant: 'secondary',
        target: '_blank',
      },
    ],
    portrait: {
      src: '/assets/hero/portrait.png',
      alt: 'Foto de presentacion del portfolio',
      badge: 'Foto de perfil',
    },
    hexagons: [
      {
        id: 'signal',
        size: 'clamp(5rem, 10vw, 7.5rem)',
        tone: 'primary',
        rotation: '-8deg',
        offsetX: '9%',
        offsetY: '14%',
        depth: 0.32,
        mobile: true,
        label: 'Motion',
      },
      {
        id: 'accent',
        size: 'clamp(4rem, 8vw, 6rem)',
        tone: 'tertiary',
        rotation: '6deg',
        offsetX: '84%',
        offsetY: '66%',
        depth: 0.18,
        mobile: true,
        label: 'Depth',
      },
    ],
  },
  socials: [
    { name: 'GitHub', url: 'https://github.com/theangel256', icon: 'github' },
    { name: 'LinkedIn', url: '#', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://x.com/Theangel256', icon: 'twitter' },
  ],
  projects: [
    {
      id: 'proyecto-viper4windows-go',
      title: 'Viper4Windows in GO',
      description:
        'Interfaz shadcn/ui con superficies limpias, color adaptable y transiciones disenadas para sentirse suaves en cada recorrido.',
      image: 'https://i.imgur.com/ax72v6s.png',
      tags: ['GO', 'React', 'TypeScript'],
      link: 'https://github.com/Theangel256/Viper4Windows/releases',
    },
    {
      id: 'portfolio',
      title: 'Web Portfolio',
      description:
        'Experiencia visual construida con Astro y GSAP que prioriza composicion, performance y una base modular lista para crecer.',
      image: 'https://i.imgur.com/QLhNj5X.png',
      tags: ['Astro', 'GSAP', 'Material 3'],
      link: '#',
    },
    {
      id: 'myspawn-plugin',
      title: 'Myspawn',
      description:
        'Lenguaje visual para productos moviles con foco en accesibilidad, ritmo tipografico y consistencia entre pantallas.',
      image: 'https://i.imgur.com/c4e8kjt.jpeg',
      tags: ['Java', 'Minecraft'],
      link: 'https://www.spigotmc.org/resources/myspawn.64762/',
    },
  ],
};
