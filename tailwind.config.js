    module.exports = {
    content: [
      "./index.html", // HTML dosyanız
      "./src/**/*.{js,ts,jsx,tsx}", // React dosyalarınız
      "./assets/css/tailwind.css", // Tailwind CSS dosyanız
    ],
    extend: {
        boxShadow:{
          box:'rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px'
        }
      },
    plugins: [],
  };
  