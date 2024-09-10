/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         boxSizing: {
            content: "content-box",
         },
         transitionDuration: {
            2000: "2000ms",
         },
         strokeWidth: {
            5: "5px",
         },
         keyframes: {
            display: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
         },
      },
   },
   plugins: [],
   darkMode: "selector",
}
