export default function Hakkimizda() {
    return (
      <section className="flex items-center justify-center min-h-screen bg-gray-100 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 container mx-auto items-center">
          {/* Sol Taraf: Yazı */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-800 transition-transform duration-500 hover:scale-105">
              Hakkımızda
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Konya Taksi, 7/24 aktif hizmet anlayışıyla şehir içi ve şehir dışı ulaşım ihtiyaçlarınızda yanınızda
              olmayı hedeflemektedir. Müşteri memnuniyetini esas alarak kurulan durağımız, güvenli, konforlu ve zamanında
              ulaşım hizmeti sunar.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Deneyimli sürücülerimiz, modern araçlarımız ve profesyonel ekibimizle yolculuklarınızı keyifli bir deneyime
              dönüştürüyoruz. İhtiyacınız olan her an, tek bir telefonla yanınızdayız.
            </p>
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg shadow-lg transition-all duration-300 hover:bg-yellow-600 hover:shadow-xl">
              Daha Fazla Bilgi
            </button>
            <br/> <br/>
            <a
              href="tel:+905442592557"
              className="bg-red-600 text-white px-6 py-2 rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-400 hover:shadow-xl"
       
            >
             HEMEN ARAYIN: 0544 259 25 57
            </a>
          </div>
  
          {/* Sağ Taraf: Fotoğraf */}
          <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-500 hover:scale-105">
            <img
              src="../public/118.jpg"
              alt="buhara taksi"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    );
  }
  