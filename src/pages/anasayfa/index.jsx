export default function Anasayfa() {
    return (
      <main className="min-h-screen bg-gray-100">
        {/* Sayfa 1 */}
        <section className="h-screen flex flex-col items-center justify-center bg-white">
          <div className="group relative flex items-center justify-center">
            <img
              src="../public/110.jpg"
              alt="Taksi 1"
              className="w-1/2 h-auto transform transition duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mt-8">Konforlu Araçlarımız</h2>
          <p className="text-lg text-gray-600 text-center max-w-md mt-4">
            Şehir içi ve şehir dışı konforlu yolculuklar için en iyi seçenek.
          </p>
          <a
            href="tel:+905442592557"
            className="text-yellow-500 text-2xl font-bold hover:underline mt-6"
          >
            ALO TAKSİ: 0544 259 25 57
          </a>
        </section>
  
        {/* Sayfa 2 */}
        <section className="h-screen flex flex-col items-center justify-center bg-gray-100">
          <div className="group relative flex items-center justify-center">
            <img
              src="../public/116.jpg"
              alt="Taksi 2"
              className="w-1/2 h-auto transform transition duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mt-8">Güvenli Yolculuk</h2>
          <p className="text-lg text-gray-600 text-center max-w-md mt-4">
            Deneyimli sürücülerimizle daima güvendesiniz.
          </p>
          <a
            href="tel:+905442592557"
            className="text-yellow-500 text-2xl font-bold hover:underline mt-6"
          >
            ALO TAKSİ: 0544 259 25 57
          </a>
        </section>
  
        {/* Sayfa 3 */}
        <section className="h-screen flex flex-col items-center justify-center bg-white">
          <div className="group relative flex items-center justify-center">
            <img
              src="../public/117.jpg"
              alt="Taksi 3"
              className="w-1/2 h-auto transform transition duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mt-8">Hızlı Hizmet</h2>
          <p className="text-lg text-gray-600 text-center max-w-md mt-4">
            Hızlı taksi çağırma hizmetimizle zaman kaybetmeyin.
          </p>
          <a
            href="tel:+905442592557"
            className="text-yellow-500 text-2xl font-bold hover:underline mt-6"
          >
            ALO TAKSİ: 0544 259 25 57
          </a>
        </section>
  
        {/* Telefon Numarası */}
        <footer className="h-32 flex items-center justify-center bg-yellow-400">
          <a
            href="tel:+905442592557"
            className="text-white text-2xl font-bold hover:underline"
          >
            ALO TAKSİ: 0544 259 25 57
          </a>
        </footer>
      </main>
    );
  }
  