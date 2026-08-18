import type { Config } from "tailwindcss";

/**
 * Colors resolve through CSS variables defined in app/globals.css, so the
 * whole palette flips between light and dark without changing class names in
 * components. Channels are space-separated RGB so Tailwind's opacity
 * modifiers (e.g. bg-dark-900/50) keep working.
 *
 * The `dark-*` scale is named for its original dark-only life. Read it
 * semantically instead of literally:
 *   800/900/700/600 -> surfaces      500 -> borders
 *   400/300/200     -> muted text    100/50 -> primary text
 */
const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: v("c-50"),
          100: v("c-100"),
          200: v("c-200"),
          300: v("c-300"),
          400: v("c-400"),
          500: v("c-500"),
          600: v("c-600"),
          700: v("c-700"),
          800: v("c-800"),
          900: v("c-900"),
        },
        accent: {
          DEFAULT: v("accent"),
          light: v("accent-light"),
          dark: v("accent-dark"),
        },
        cyan: { DEFAULT: v("cyan"), light: v("cyan-light") },
        purple: { DEFAULT: v("purple"), light: v("purple-light") },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
