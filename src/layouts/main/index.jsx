import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-lg relative z-20">
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Hamburger Menu for Mobile */}
          <button
            id="menu-button"
            className="text-black md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          {/* Logo */}
          <div className="text-black font-bold text-2xl">BUHARA TAKSİ</div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-black hover:text-gray-500 text-lg font-medium"
            >
              Anasayfa
            </Link>
            <Link
              to="/hakkimizda"
              className="text-black hover:text-gray-500 text-lg font-medium"
            >
              Hakkımızda
            </Link>
            <Link
              to="/hizmet-bolgelerimiz"
              className="text-black hover:text-gray-500 text-lg font-medium"
            >
              Hizmet Bölgelerimiz
            </Link>
            <Link
              to="/iletisim"
              className="text-black hover:text-gray-500 text-lg font-medium"
            >
              İletişim
            </Link>
          </div>

          {/* Telefon Butonu */}
          <div className="bg-yellow-600 text-white px-4 py-2 rounded-full flex items-center shadow-lg space-x-2">
            <a
              href="tel:+905386847883"
              className="text-white text-sm font-bold hover:underline"
            >
              ALO TAKSİ: 0538 684 78 83
            </a>
          </div>
        </nav>
      </header>

      {/* Açılan Menü */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 text-white transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-30`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <button
            onClick={toggleMenu}
            className="absolute top-8 right-8 text-white text-3xl"
          >
            &times;
          </button>
          <Link
            to="/"
            onClick={toggleMenu}
            className="text-2xl font-semibold hover:text-yellow-400"
          >
            Anasayfa
          </Link>
          <Link
            to="/hakkimizda"
            onClick={toggleMenu}
            className="text-2xl font-semibold hover:text-yellow-400"
          >
            Hakkımızda
          </Link>
          <Link
            to="/hizmet-bolgelerimiz"
            onClick={toggleMenu}
            className="text-2xl font-semibold hover:text-yellow-400"
          >
            Hizmet Bölgelerimiz
          </Link>
          <Link
            to="/iletisim"
            onClick={toggleMenu}
            className="text-2xl font-semibold hover:text-yellow-400"
          >
            İletişim
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 container mx-auto py-8 px-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white py-10 border-t border-gray-300">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo ve Tanım */}
            <div className="col-span-1">
              <div className="flex items-center mb-4">
                <img
                  src="https://e7.pngegg.com/pngimages/681/680/png-clipart-checker-taxi-yellow-cab-taxicabs-of-new-york-city-taxi-logo-smiley-thumbnail.png"
                  alt="Taksi Logo"
                  className="h-12 w-auto"
                />
                <div className="text-xl font-bold text-yellow-600 ml-2">
                    BUHARA TAKSİ
                    <div className="text-sm font-medium text-gray-500">
                    7/24 AKTİF
                  </div>
                </div>
              </div>
            </div>

            {/* Kurumsal Bağlantılar */}
            <div className="col-span-1">
              <h3 className="font-semibold text-lg text-gray-900">Kurumsal</h3>
                <ul className="mt-4 space-y-2 text-sm">
                 <li>
                   <Link to="/" className="text-gray-600 hover:underline">
                    Anasayfa
                   </Link>
                 </li>
                 <li>
                    <Link to="/hakkimizda" className="text-gray-600 hover:underline">
                     Hakkımızda
                   </Link>
                </li>
               <li>
                  <Link to="/hizmet-bolgelerimiz" className="text-gray-600 hover:underline">
                    Hizmet Bölgelerimiz
                  </Link>
              </li>
              <li>
                  <Link to="/iletisim" className="text-gray-600 hover:underline">
                   İletişim
                 </Link>
               </li>
             </ul>
           </div>

            <div className="col-span-1">
              <h3 className="font-semibold text-lg text-gray-900">
                Sosyal Medyada Biz
              </h3>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://www.instagram.com/42t2557/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800"
                  aria-label="Instagram"
                >
                  <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  class="w-6 h-6 text-pink-500 hover:text-blue-300"
  fill="currentColor"
>
  <path
    d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.315.975.975 1.253 2.242 1.315 3.608.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.34 2.633-1.315 3.608-.975.975-2.242 1.253-3.608 1.315-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.34-3.608-1.315-.975-.975-1.253-2.242-1.315-3.608-.058-1.266-.07-1.645-.07-4.85s.012-3.584.07-4.85c.062-1.366.34-2.633 1.315-3.608C5.767 2.503 7.034 2.225 8.4 2.163c1.266-.058 1.645-.07 4.85-.07zm0-2.163C8.756 0 8.331.014 7.052.072 5.773.13 4.563.397 3.513 1.447 2.463 2.497 2.196 3.707 2.138 4.986c-.058 1.279-.072 1.695-.072 4.948s.014 3.678.072 4.948c.058 1.279.325 2.489 1.375 3.539 1.05 1.05 2.26 1.317 3.539 1.375 1.27.058 1.695.072 4.948.072s3.678-.014 4.948-.072c1.279-.058 2.489-.325 3.539-1.375 1.05-1.05 1.317-2.26 1.375-3.539.058-1.27.072-1.695.072-4.948s-.014-3.678-.072-4.948c-.058-1.279-.325-2.489-1.375-3.539-1.05-1.05-2.26-1.317-3.539-1.375-1.27-.058-1.695-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.76-6.162 6.162s2.76 6.162 6.162 6.162 6.162-2.76 6.162-6.162-2.76-6.162-6.162-6.162zm0 10.324c-2.295 0-4.162-1.867-4.162-4.162s1.867-4.162 4.162-4.162 4.162 1.867 4.162 4.162-1.867 4.162-4.162 4.162zm6.406-11.845c-.796 0-1.443.647-1.443 1.443s.647 1.443 1.443 1.443 1.443-.647 1.443-1.443-.647-1.443-1.443-1.443z"
  />
</svg>

                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-10 pt-6 text-center text-sm text-gray-500">@En Yakın Taksi. Tüm Hakları Saklıdır.
          </div>
        </div>
      </footer>
    </div>
  );
}
