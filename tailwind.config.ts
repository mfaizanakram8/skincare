import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

function addVariableForColors({ addBase, theme }: PluginAPI) {
  const allColors = theme('colors', {}) || {};

  const newVars: Record<string, string> = {};

  Object.entries(allColors).forEach(([key, value]) => {
    if (typeof value === 'string') {
      newVars[`--${key}`] = value;
    } else if (typeof value === 'object' && value !== null) {
      Object.entries(value).forEach(([subKey, subValue]) => {
        if (typeof subValue === 'string') {
          newVars[`--${key}-${subKey}`] = subValue;
        }
      });
    }
  });

  addBase({
    ':root': newVars,
  });
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBrown: '#955E1E',
        'light-beige': '#fef7ec',
        'dark-beige': '#d4b895',
        GrayScale: '#d8d8d8d',
        cream: '#FFFDD0',
        blackRussain: '#111827',
      },
      backgroundImage: {
        about: 'linear-gradient(to top right, #fef7ec 70%, #fef7ec 20%, #d4b895 5%)',
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [
      addVariableForColors
  ],
};

export default config;
