// tailwind.config.js
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--color-text)", // Ajuste as cores conforme o seu projeto
        secondary: "var(--bg-secondary)",
        secondaryHover: "var(--bg-secondary-hover)",
      },
      animation: {
        pulseUpDown: "pulseUpDown 4s ease-in-out infinite", // A animação
      },
      keyframes: {
        pulseUpDown: {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-5px)", // Ajuste a intensidade do movimento
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
