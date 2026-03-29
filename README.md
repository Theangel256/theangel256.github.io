# Theangel256 - Personal Portfolio

Welcome to the source code of my personal portfolio! This project is built using **Astro**, **Material Design 3**, and **GSAP** for smooth animations. It features a dynamic theming system that calculates harmonious color palettes based on a base color (similar to Android's Monet/Material You framework).    

## ✨ Features

- **🚀 Built with Astro:** Lightning-fast static site generation.
- **🎨 Material Design 3 Theming:** Uses `@material/material-color-utilities` to generate dynamic, harmonious color palettes (dark and light modes) from a single base color.
- **✨ Smooth Animations:** Powered by `gsap` for seamless transitions and scroll effects.
- **🧩 Reusable Components:** Custom Material 3 components (like Project Cards, Buttons, etc.) built with Astro.
- **⚙️ highly Configurable:** Easily customize the portfolio content, theme color, and projects via `src/config.ts`.

## 🛠️ Tech Stack

- [Astro](https://astro.build/) (Framework)
- [Material Web](https://github.com/material-components/material-web) & Color Utilities
- [GSAP](https://gsap.com/) (Animations)
- [Lucide Icons](https://lucide.dev/) (Astro integration)
- [Plus Jakarta Sans](https://fontsource.org/fonts/plus-jakarta-sans) (Typography)

## 📂 Project Structure

```text
/
├── public/                # Static assets (images, fonts, etc.)
├── src/
│   ├── components/        # Astro components (MD3 cards, ThemeSetter, etc.)
│   ├── layouts/           # Page layouts
│   ├── pages/             # Routing (index.astro, etc.)
│   ├── styles/            # Global CSS styles
│   └── config.ts          # ⚙️ MAIN CONFIG FILE (Edit content here!)
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
