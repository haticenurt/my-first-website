import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <nav className="container mx-auto flex flex-wrap items-center justify-between py-4 px-6">
          {/* Logo */}
          <div className="text-black font-bold text-2xl">BUHARA TAKSİ</div>

          {/* Hamburger Menu for Mobile */}
          <div className="block md:hidden">
            <button
              id="menu-button"
              className="text-black focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
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
          </div>

          {/* Navigation Links */}
          <div
            id="menu"
            className="hidden w-full md:flex md:items-center md:space-x-8 absolute md:static left-0 top-16 bg-white md:bg-transparent md:w-auto shadow-md md:shadow-none"
          >
            <Link
              to="/"
              className="block text-black hover:text-gray-500 text-lg font-medium px-4 py-2 md:p-0"
            >
              Anasayfa
            </Link>
            <Link
              to="/hakkimizda"
              className="block text-black hover:text-gray-500 text-lg font-medium px-4 py-2 md:p-0"
            >
              Hakkımızda
            </Link>
            <Link
              to="/hizmet-bolgelerimiz"
              className="block text-black hover:text-gray-500 text-lg font-medium px-4 py-2 md:p-0"
            >
              Hizmet Bölgelerimiz
            </Link>
            <Link
              to="/iletisim"
              className="block text-black hover:text-gray-500 text-lg font-medium px-4 py-2 md:p-0"
            >
              İletişim
            </Link>
          </div>

          {/* Telefon Butonu */}
          <div className="mt-4 md:mt-0 absolute md:static right-4">
            <div className="bg-yellow-600 text-white px-4 py-2 rounded-full flex items-center shadow-lg space-x-2">
              <a
                href="tel:+905442592557"
                className="text-white text-sm font-bold hover:underline"
              >
                ALO TAKSİ: 0544 259 25 57
              </a>
            </div>
          </div>
        </nav>
      </header>

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

            {/* Hizmet Bölgeleri */}
            <div className="col-span-1">
              <h3 className="font-semibold text-lg text-gray-900">
                Hizmet Bölgeleri
              </h3>
              Buhara Mahallesi <br />
              Yazır Mahallesi <br />
              Şeyh Şamil Mahallesi <br />
              Malazgirt Mahallesi <br />
            </div>

            {/* Sosyal Medya */}
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
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07..." />
                  </svg>
                </a>
              </div>
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
