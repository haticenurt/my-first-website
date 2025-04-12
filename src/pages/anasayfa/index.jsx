export default function Anasayfa() {
    return (
      <main className="min-h-screen bg-gray-100">
        {/* Sayfa 1 */}
        <section className="h-screen flex flex-col items-center justify-center bg-white">
          <div className="group relative flex items-center justify-center">
            <img
              src="/110.jpg"
              alt="yazır taksi"
              className="w-1/2 h-auto transform transition duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mt-8">Hızlı Taksi</h2>
          <h3 className="text-lg text-gray-600 text-center max-w-md mt-4">
            Şehir içi ve şehir dışı konforlu yolculuklar için en iyi seçenek.
          </h3>
          <a
            href="tel:+905386847883"
            className="text-yellow-500 text-2xl font-bold hover:underline mt-6"
          >
            ALO TAKSİ: 0538 684 78 83
          </a>
        </section>
  
        {/* Sayfa 2 */}
        <section className="h-screen flex flex-col items-center justify-center bg-gray-100">
          <div className="group relative flex items-center justify-center">
            <img
              src="/116.jpg"
              alt="Taksi 2"
              className="w-1/2 h-auto transform transition duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mt-8">En İyi Taksi Hizmeti</h2>
          <h3 className="text-lg text-gray-600 text-center max-w-md mt-4">
            Deneyimli sürücülerimizle güvenli yolculuk için hemen arayın.
          </h3>
          <a
            href="tel:+905386847883"
            className="text-yellow-500 text-2xl font-bold hover:underline mt-6"
          >
           ALO TAKSİ: 0538 684 78 83
          </a>
        </section>
  
        {/* Sayfa 3 */}
        <section className="h-screen flex flex-col items-center justify-center bg-white">
          <div className="group relative flex items-center justify-center">
            <img
              src="/117.jpg"
              alt="Taksi 3"
              className="w-1/2 h-auto transform transition duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mt-8">Hızlı Hizmet</h2>
          <h3 className="text-lg text-gray-600 text-center max-w-md mt-4">
            Hızlı taksi çağırma hizmetimizle zaman kaybetmeyin.
          </h3>
          <a
            href="tel:+905386847883"
            className="text-yellow-500 text-2xl font-bold hover:underline mt-6"
          >
            ALO TAKSİ: 0538 684 78 83
          </a>
        </section>
  
        {/* Telefon Numarası */}
        <footer className="h-32 flex items-center justify-center bg-yellow-400">
          <a
            href="tel:+905442592557"
            className="text-white text-2xl font-bold hover:underline"
          >
            ALO TAKSİ: 0538 684 78 83
          </a>
        </footer>
      </main>
    );
  }
  