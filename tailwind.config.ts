import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
    content: [
        "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities({
                ".noise": {
                    "@apply backdrop-blur-xl border border-white/50 transition duration-500":
                        {},
                    "&::before": {
                        "@apply -z-10 absolute top-0 left-0 size-full bg-blend-overlay opacity-20":
                            {},
                        content: '""',
                        "background-image": `url("../assets/images/noise.png"),linear-gradient(rgb(255 255 255 / 15%),rgb(255 255 255 / 15%))`,
                        "box-shadow": "0 1px 1.5rem -1px rgba(0, 0, 0, .25)",
                    },
                },
            });
        }),
    ],
};
export default config;
