# Jordan Noblejas - Portfolio Landing Page

Project repository for my professional landing page portfolio. Showcasing my expertise in robust Backend Architecture (Laravel 5.8 & Modern), REST API integrations, and scalable Frontend solutions using Vue 3.

## 🚀 Tech Stack

- **Vue 3 (Composition API):** Dynamic interface components.
- **TypeScript:** Strict typing for better scalability.
- **Vite:** Next-generation frontend tooling.
- **TailwindCSS:** Modern atomic styling for clean UIs.
- **Pinia:** State management.
- **Vue Router:** Client-side routing.
- **Lucide Vue:** Lightweight functional icons.

## 📂 Project Structure

```text
├── src/
│   ├── assets/       # Static files
│   ├── components/   # Modular Vue 3 components
│   │   ├── layout/   # Header, Footer
│   │   └── sections/ # Page sections (Hero, About, etc.)
│   ├── composables/  # Vue 3 shared logic
│   ├── router/       # Vue Router configuration
│   ├── stores/       # Pinia state
│   ├── types/        # TypeScript interfaces
│   ├── views/        # Main pages (HomeView)
│   ├── App.vue       # Root component
│   ├── main.ts       # Application entry
│   └── style.css     # Global Tailwind & base styling
├── package.json      # Dependencies and scripts
├── vite.config.ts    # Vite base URL and plugins configuration
└── tailwind.config.js# Tailwind extension config
```

## 🛠️ How to run locally

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## 🌐 How to deploy to GitHub Pages

This project is configured out-of-the-box to be deployed using the `gh-pages` package.

1. Ensure the `base` property in `vite.config.ts` matches your repository name. For example: `base: '/landing-jtx21/'`.
2. Run the automated deploy script:
```bash
npm run deploy
```

This will automatically trigger `npm run build` and push the contents of the `/dist` folder to the `gh-pages` branch. Wait a few minutes and GitHub Pages will serve your site!
