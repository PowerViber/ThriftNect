import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="bg-[#f7f9fc]">
      <main className="max-w-7xl mx-auto p-4 md:p-8">
        {/* Hero */}
        <section id="hero" className="bg-white rounded-3xl shadow-lg p-6 md:p-12 mb-12 mt-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-green-main">
                Penampilan Stylish, Harga Bersahabat, Ramah Lingkungan
              </h1>
              <p className="text-lg text-gray-700">
                ThriftNect adalah platform e-commerce yang berfokus pada pakaian bekas berkualitas dari berbagai merek ternama. Kami mendukung gaya hidup berkelanjutan dengan menyediakan fashion yang <i>stylish</i>, terjangkau, dan ramah lingkungan.
              </p>
              <button className="bg-green-main text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-opacity duration-300">
                Jelajahi Sekarang
              </button>
            </div>
            <div>
              <img
                src="https://placehold.co/600x400/1a4f4d/ffffff?text=Stylish+Thrifting"
                alt="Seorang pria tersenyum sambil mengenakan jaket"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Why choose */}
        <section id="why-choose" className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-main mb-8">
            Mengapa Harus Memilih ThriftNect?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-md transition-transform transform hover:scale-105 duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-green-main">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.03 60.03 0 0113.6-5.065l-2.28-2.28a.75.75 0 00-1.06 0L9.48 11.22c-1.385 1.385-3.626 1.385-5.011 0a3.375 3.375 0 01-.634-4.505 3.375 3.375 0 014.505-.634l3.879 3.88c.45-.45.98-.82 1.554-1.096A7.5 7.5 0 0010.5 5.25v-.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v.375c0 .574-.184 1.132-.504 1.624L20.25 15.39a3.375 3.375 0 01-.634 4.505 3.375 3.375 0 01-4.505-.634l-2.28-2.28c-1.285.421-2.585.659-3.88.706V19.5c0 1.036-.84 1.875-1.875 1.875h-.375a3.75 3.75 0 01-3.75-3.75v-.375c0-.574.184-1.132.504-1.624L3.39 18.256c-1.385-1.385-1.385-3.626 0-5.011z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-green-main">Akses ke Merek Ternama</h3>
              </div>
              <p className="text-gray-600">
                Kami menyediakan produk fashion bekas dari merek-merek besar seperti Zara, H&amp;M, dan Uniqlo.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-md transition-transform transform hover:scale-105 duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-green-main">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-green-main">Platform Terintegrasi</h3>
              </div>
              <p className="text-gray-600">
                Menghubungkan penjual dan pembeli dalam satu ekosistem yang mudah diakses melalui aplikasi dan website.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-md transition-transform transform hover:scale-105 duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-green-main">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m0 0l3-3m-3 3l-3-3" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6l3 3m-3-3l-3 3" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-green-main">Keberlanjutan &amp; Ramah Lingkungan</h3>
              </div>
              <p className="text-gray-600">
                Mendukung fashion yang lebih berkelanjutan dengan mengurangi limbah pakaian melalui penjualan kembali barang <i>preloved</i>.
              </p>
            </div>
          </div>
        </section>

        {/* Trends */}
        <section id="trends" className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-main mb-8">
            Temukan Tren Fashion Terkini di ThriftNect
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {["Oversized+Tee","Vintage+Jacket","Cargo+Pants","Knitwear","Sneakers"].map((label) => (
              <div key={label} className="rounded-xl overflow-hidden shadow-md">
                <img
                  src={`https://placehold.co/400x400/d1d5db/ffffff?text=${label}`}
                  alt={label.replace(/\+/g, " ")}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="bg-white rounded-3xl shadow-lg p-6 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-green-main">Fitur Inovatif ThriftNect</h2>
              <p className="text-gray-700">
                Kami terus berinovasi untuk memberikan pengalaman belanja terbaik. Dengan fitur-fitur ini, mencari pakaian favorit jadi lebih mudah dan menyenangkan.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><span className="font-semibold text-green-main">Sistem <i>Pre-order</i> Barang Bekas / <i>Custom</i>:</span> Buat <i>wishlist</i> dan dapatkan notifikasi saat tersedia.</li>
                <li><span className="font-semibold text-green-main">Fitur Donasi Pakaian untuk Diskon:</span> Sumbangkan pakaian dan dapatkan diskon/poin.</li>
                <li><span className="font-semibold text-green-main">Rekomendasi Produk:</span> Rekomendasi personal berdasarkan riwayat pencarian.</li>
              </ul>
            </div>
            <div>
              <img
                src="https://placehold.co/600x400/d1d5db/ffffff?text=Innovative+Features"
                alt="Ilustrasi fitur inovatif"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="bg-gray-100 rounded-3xl p-6 md:p-12 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-main mb-8">Apa Kata Mereka?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name:"Sarah W.", role:"Pelanggan Setia", quote:'"Saya suka sekali ThriftNect! Pilihan bajunya banyak, mereknya terkenal, dan harganya terjangkau. Saya bisa tampil stylish tanpa merusak lingkungan."' },
              { name:"Budi S.", role:"Mitra Penjual", quote:'"Sebagai penjual, platform ini sangat membantu saya menjual stok lama. Prosesnya mudah dan customer service-nya cepat tanggap. Sangat direkomendasikan!"' },
              { name:"Rani D.", role:"Donatur", quote:'"Fitur donasi untuk diskon adalah ide yang brilian! Saya bisa membersihkan lemari dan mendapatkan diskon di saat yang sama. Win-win solution!"' },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 shadow-md">
                <p className="text-gray-700 italic mb-4">{t.quote}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-4" />
                  <div>
                    <p className="font-semibold text-green-main">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
