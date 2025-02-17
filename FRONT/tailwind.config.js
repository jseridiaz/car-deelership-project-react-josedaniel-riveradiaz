/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         flexGrow: {
            2: "2",
         },
         animation: { toast: "toast 1s ease-in-out forwards" },
         colors: {
            "continuo-slate": "#e1e8ef",
         },
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
            toast: {
               "0%": { bottom: "-10%" },
               "100%": { bottom: "5%" },
            },
         },
         backgroundImage: {
            "post-pattern":
               "url('https://www.transparenttextures.com/patterns/brushed-alum.png')",
         },
      },
      screens: {
         xs: "500px",
         xxs: "400px",
      },
   },
   plugins: [],
   darkMode: "selector",
}
