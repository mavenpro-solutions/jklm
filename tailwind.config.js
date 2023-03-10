/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["index.html"],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
            },
        },
        extend: {
            colors: {
                "color-1": "#f7941e",
                "color-2": "#FBB160",
                "color-3": "#DE9242",
                "color-4": "#a8a9ad",
            },
            fontFamily: {
                graphik: ["Graphik", "sans-serif"],
                "bubblegum-sans": ["Bubblegum Sans", "sans-serif"],
            },
        },
    },
    plugins: [],
}
