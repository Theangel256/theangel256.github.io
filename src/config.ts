export const userConfig = {
  // Información General
  name: "Angel Amarillas",
  role: "Senior UX/UI Designer & Developer",
  bio: "Especialista en interfaces de usuario modernas, animaciones fluidas con GSAP y sistemas de diseño adaptativos inspirados en el ecosistema Android.",

  // Tema Dinámico: Material 3 Color Picker Base
  // Material 3 calculará paletas armoniosas y pasteles basándose en este color.
  theme: {
    baseColor: "#80ced6", // Un color pastel tenúe por defecto (tipo cyan/teal).
    defaultMode: "dark", // 'light' o 'dark'
  },

  // Redes Sociales
  socials: [
    { name: "GitHub", url: "https://github.com/theangel256", icon: "github" },
    { name: "LinkedIn", url: "#", icon: "linkedin" },
    { name: "Twitter", url: "#", icon: "twitter" }
  ],

  // Proyectos / Trabajos
  projects: [
    {
      id: "proyecto-lunaris",
      title: "Proyecto LunarisAOSP",
      description: "Una interfaz limpia basada en AOSP con ligeros toques de color personalizados y animaciones suaves como la mantequilla.",
      image: "https://i.imgur.com/blAotjz.jpeg",
      tags: ["Android", "Material You", "UI/UX"],
      link: "#"
    },
    {
      id: "portfolio-v2",
      title: "Web Portfolio V2",
      description: "Diseño asombroso y personalizable construido con Astro, GSAP y Web Components.",
      image: "https://i.imgur.com/QLhNj5X.png",
      tags: ["Astro", "GSAP", "Material 3"],
      link: "#"
    },
    {
      id: "nexus-design",
      title: "Nexus System Design",
      description: "Conceptos de diseño visual para aplicaciones móviles enfocados en la legibilidad y accesibilidad.",
      image: "https://i.imgur.com/ezT5jUm.png",
      tags: ["Figma", "Design System"],
      link: "#"
    }
  ]
};
