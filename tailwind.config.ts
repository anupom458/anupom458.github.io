import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: "#f8fafc",
          100: "#e2e8f0",
          200: "#94a3b8",
          300: "#64748b",
          400: "#475569",
          500: "#1e293b",
          600: "#0f172a",
          700: "#0c1222",
          800: "#080d19",
          900: "#050911",
        },
        accent: { DEFAULT: "#3b82f6", light: "#60a5fa", dark: "#2563eb" },
        cyan: { DEFAULT: "#06b6d4", light: "#22d3ee" },
        purple: { DEFAULT: "#8b5cf6", light: "#a78bfa" },
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
