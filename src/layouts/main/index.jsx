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
              href="tel:+905442592557"
              className="text-white text-sm font-bold hover:underline"
            >
              ALO TAKSİ: 0544 259 25 57
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
                  <a href="/" className="text-gray-600 hover:underline">
                    Anasayfa
                  </a>
                </li>
                <li>
                  <a
                    href="/hakkimizda"
                    className="text-gray-600 hover:underline"
                  >
                    Hakkımızda
                  </a>
                </li>
                <li>
                  <a
                    href="/hizmet-bolgelerimiz"
                    className="text-gray-600 hover:underline"
                  >
                    Hizmet Bölgelerimiz
                  </a>
                </li>
                <li>
                  <a href="/iletisim" className="text-gray-600 hover:underline">
                    İletişim
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-10 pt-6 text-center text-sm text-gray-500">
            @Buhara Taksi. Tüm Hakları Saklıdır.
          </div>
        </div>
      </footer>
    </div>
  );
}
