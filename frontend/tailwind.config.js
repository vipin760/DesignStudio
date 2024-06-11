/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                "great-vibes": ['"Great Vibes"', "cursive"],
                "lateef-vibes": ['"Lateef"', "cursive"],
            },
            colors: {
                customBrown: "#9C684C",
            },

            animation: {
                scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
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
    plugins: [],
};
