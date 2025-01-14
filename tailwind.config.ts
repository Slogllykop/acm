import type { Config } from "tailwindcss";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import plugin from "tailwindcss/plugin";
import type { PluginAPI } from "tailwindcss/types/config";

function addVariablesForColors({ addBase, theme }: PluginAPI) {
    const allColors = flattenColorPalette(theme("colors"));
    const newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
    );

    addBase({
        ":root": newVars,
    });
}

const NOISE = {
    ".noise": {
        "@apply backdrop-blur-lg border border-neutral-50 transition duration-500":
            {},
        "&::before": {
            "@apply -z-10 absolute top-0 left-0 size-full bg-blend-overlay opacity-20":
                {},
            content: '""',
            "background-image": `url("../assets/images/noise.png"),linear-gradient(rgb(255 255 255 / 15%),rgb(255 255 255 / 15%))`,
            "box-shadow": "0 1px 1.5rem -1px rgba(0, 0, 0, .25)",
        },
    },
};

const config: Config = {
    content: [
        "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            animation: {
                spotlight: "spotlight 2s ease 0.75s 1 forwards",
                moveX: "moveX 30s linear infinite",
                scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
            },
            keyframes: {
                spotlight: {
                    "0%": {
                        opacity: "0",
                        transform: "translate(-72%, -62%) scale(0.5)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translate(-50%,-40%) scale(1)",
                    },
                },
                moveX: {
                    "0%": {
                        backgroundPosition: "0% 0%",
                    },
                    "100%": {
                        backgroundPosition: "100% 0%",
                    },
                },
                scroll: {
                    to: {
                        transform: "translate(calc(-50% - 0.5rem))",
                    },
                },
            },
        },
    },
    plugins: [
        addVariablesForColors,
        plugin(function ({ addUtilities }) {
            addUtilities(NOISE);
        }),
    ],
};
export default config;
