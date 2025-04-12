'use client';

import { useState } from 'react';

export default function Iletisim() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Başlık */}
      <header className="bg-gray-400 py-10 shadow">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-yellow-400 tracking-wider">
            İletişim
          </h1>
        </div>
      </header>

      {/* Adres ve Harita */}
      <section className="container mx-auto py-16 flex flex-col items-center space-y-8">
        {/* Telefon ve Adres Bilgisi */}
        <div className="text-center space-y-4">
          <p className="text-lg font-semibold text-gray-800  tracking-wider ">
            Telefon: <a href="tel:+905386847883" className="text-indigo-600 hover:underline">+90 538 684 78 83</a>
          </p>
          <p className="text-lg font-semibold text-gray-800  tracking-wider ">
            Adres: <span className="text-gray-600">Parsana, Barış Cd. No: 105/A, 42130 Selçuklu/Konya</span>
          </p>
          <p className="text-lg font-semibold text-gray-800  tracking-wider ">
            E-Posta: <span className="text-gray-600">buharataksi42@gmail.com  </span>
          </p>
        </div>

        {/* Harita Alanı */}
        <div className="w-full h-64 bg-gray-200 text-center flex items-center justify-center rounded-md shadow-inner overflow-hidden">
          <iframe
            title="Google Maps Konumu"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d656.2288398159131!2d32.49273080456082!3d37.94742937539944!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d08e57d74b7e6b%3A0x799ce61e22aa6fc1!2zUGFyc2FuYSwgQmFyxLHFnyBDZC4gMTA1L0EsIDQyMjUwIFNlbMOndWtsdS9Lb255YQ!5e0!3m2!1str!2str!4v1742496659548!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Form ve Fotoğraf */}
      <main className="container mx-auto py-16 flex flex-wrap items-start gap-8">
        {/* Sol Taraf: Form */}
        <div className="flex-1 bg-white p-6 shadow-md rounded-md">
        <form
  action="https://formspree.io/f/mkggdzdv"
  method="POST"
  className="grid grid-cols-1 gap-6"
>
  <div>
    <label htmlFor="first-name" className="block text-sm font-semibold text-gray-700">
      Ad
    </label>
    <input
      id="first-name"
      name="firstName"
      type="text"
      className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      required
    />
  </div>
  <div>
    <label htmlFor="last-name" className="block text-sm font-semibold text-gray-700">
      Soyad
    </label>
    <input
      id="last-name"
      name="lastName"
      type="text"
      className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      required
    />
  </div>
  <div>
    <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
      E-Posta
    </label>
    <input
      id="email"
      name="email"
      type="email"
      className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      required
    />
  </div>
  <div>
    <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
      Mesajınız
    </label>
    <textarea
      id="message"
      name="message"
      rows={4}
      className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      required
    />
  </div>
  <button
    type="submit"
    className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md text-sm font-semibold shadow-sm hover:bg-indigo-500"
  >
    Gönder
  </button>
</form>

        </div>

        {/* Sağ Taraf: Fotoğraf */}
        <div className="flex-1 bg-gray-100 shadow-md rounded-md overflow-hidden">
          <img
            src="/119.jpg"
            alt="İletişim Fotoğrafı"
            className="w-full h-full object-cover"
          />
        </div>
      </main>
    </div>
  );
}
