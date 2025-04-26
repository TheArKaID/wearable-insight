import type { Config } from "tailwindcss";

export default {
    darkMode: ["class", '[data-theme="dark"]'], // Enable dark mode based on class or data-theme attribute
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Removed ShadCN specific theme extensions
    extend: {
        // Keep other extensions if needed, but remove ShadCN specific ones like keyframes and animations
        // Keyframes and animations related to accordion are removed as they were ShadCN specific
    }
  },
  plugins: [
      require("daisyui") // Add DaisyUI plugin
  ],
  // DaisyUI config
  daisyui: {
    themes: [
        {
            light: { // Light theme based on proposal
              "primary": "#1A237E", // Dark Blue
              "secondary": "#EEEEEE", // Light Gray
              "accent": "#00BCD4", // Teal
              "neutral": "#3d4451", // Default neutral
              "base-100": "#ffffff", // White background
              "info": "#3abff8",
              "success": "#36d399",
              "warning": "#fbbd23",
              "error": "#f87272",
              "--rounded-box": "0.5rem", // Apply rounded corners
              "--rounded-btn": "0.5rem",
            },
        },
        {
            dark: { // Dark theme based on proposal (adjusting for DaisyUI names)
              "primary": "#00BCD4", // Teal as primary in dark
              "secondary": "#2a323c", // Default dark secondary
              "accent": "#1A237E", // Dark Blue as accent in dark
              "neutral": "#191d24",
              "base-100": "#202020", // Dark background
              "info": "#3abff8",
              "success": "#36d399",
              "warning": "#fbbd23",
              "error": "#f87272",
               "--rounded-box": "0.5rem", // Apply rounded corners
              "--rounded-btn": "0.5rem",
            }
        }
    ], // Add desired themes
    // darkTheme: "dark", // REMOVED: next-themes handles the data-theme attribute
    base: true, // Apply base styles
    styled: true, // Apply DaisyUI component styles
    utils: true, // Add DaisyUI utility classes
    logs: true, // Show logs - good for development
  },
} satisfies Config;
