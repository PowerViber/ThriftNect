import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="bg-[#f7f9fc]">
      <main className="max-w-7xl mx-auto p-4 md:p-8">
        
        {/* Landing Page Hero Section */}
        <section id="hero" className="bg-white rounded-3xl shadow-lg p-6 md:p-12 mb-12 mt-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-green-main">
                Penampilan Stylish, Harga Bersahabat, Ramah Lingkungan
              </h1>
              <p className="text-lg text-gray-700">
                ThriftNect adalah platform e-commerce yang berfokus pada pakaian bekas berkualitas dari berbagai merek ternama. Kami mendukung gaya hidup berkelanjutan dengan menyediakan fashion yang _stylish_, terjangkau, dan ramah lingkungan.
              </p>
              <button className="bg-green-main text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-opacity duration-300">
                Jelajahi Sekarang
              </button>
            </div>
            <div>
              <img src="https://placehold.co/600x400/1a4f4d/ffffff?text=Stylish+Thrifting" alt="Seorang pria tersenyum sambil mengenakan jaket" className="rounded-2xl shadow-xl w-full h-auto" />
            </div>
          </div>
        </section>

        {/* Why Choose ThriftNect? */}
        <section id="why-choose" className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-main mb-8">Mengapa Harus Memilih ThriftNect?</h2>
          <div className="grid md:grid-cols-3 gap-6">
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
                Kami menyediakan produk fashion bekas dari merek-merek besar seperti Zara, H&M, dan Uniqlo.
              </p>
            </div>
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
            <div className="bg-white rounded-2xl p-6 shadow-md transition-transform transform hover:scale-105 duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-green-main">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m0 0l3-3m-3 3l-3-3" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6l3 3m-3-3l-3 3" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-green-main">Keberlanjutan & Ramah Lingkungan</h3>
              </div>
              <p className="text-gray-600">
                Mendukung fashion yang lebih berkelanjutan dengan mengurangi limbah pakaian melalui penjualan kembali barang _preloved_.
              </p>
            </div>
          </div>
        </section>

        {/* Current Fashion Trends Section */}
        <section id="trends" className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-main mb-8">Temukan Tren Fashion Terkini di ThriftNect</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img src="https://placehold.co/400x400/d1d5db/ffffff?text=Oversized+Tee" alt="Foto produk 1" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img src="https://placehold.co/400x400/d1d5db/ffffff?text=Vintage+Jacket" alt="Foto produk 2" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img src="https://placehold.co/400x400/d1d5db/ffffff?text=Cargo+Pants" alt="Foto produk 3" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img src="https://placehold.co/400x400/d1d5db/ffffff?text=Knitwear" alt="Foto produk 4" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img src="https://placehold.co/400x400/d1d5db/ffffff?text=Sneakers" alt="Foto produk 5" className="w-full h-auto object-cover" />
            </div>
          </div>
        </section>

        {/* Innovative Features Section */}
        <section id="features" className="bg-white rounded-3xl shadow-lg p-6 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-green-main">Fitur Inovatif ThriftNect</h2>
              <p className="text-gray-700">
                Kami terus berinovasi untuk memberikan pengalaman belanja terbaik. Dengan fitur-fitur ini, mencari pakaian favorit jadi lebih mudah dan menyenangkan.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                  <span className="font-semibold text-green-main">Sistem _Pre-order_ Barang Bekas / _Custom_:</span> Buat _wishlist_ untuk barang yang sulit ditemukan dan dapatkan notifikasi saat tersedia.
                </li>
                <li>
                  <span className="font-semibold text-green-main">Fitur Donasi Pakaian untuk Diskon:</span> Sumbangkan pakaian bekas dan dapatkan diskon atau poin untuk pembelian selanjutnya.
                </li>
                <li>
                  <span className="font-semibold text-green-main">Rekomendasi Produk:</span> Algoritma kami mempersonalisasi rekomendasi berdasarkan riwayat pencarian Anda.
                </li>
              </ul>
            </div>
            <div>
              <img src="https://placehold.co/600x400/d1d5db/ffffff?text=Innovative+Features" alt="Ilustrasi fitur inovatif" className="rounded-2xl shadow-xl w-full h-auto" />
            </div>
          </div>
        </section>

        {/* Customer Testimonials Section */}
        <section id="testimonials" className="bg-gray-100 rounded-3xl p-6 md:p-12 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-main mb-8">Apa Kata Mereka?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <p className="text-gray-700 italic mb-4">
                "Saya suka sekali ThriftNect! Pilihan bajunya banyak, mereknya terkenal, dan harganya terjangkau. Saya bisa tampil _stylish_ tanpa merusak lingkungan."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-green-main">Sarah W.</p>
                  <p className="text-sm text-gray-500">Pelanggan Setia</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <p className="text-gray-700 italic mb-4">
                "Sebagai penjual, platform ini sangat membantu saya menjual stok lama. Prosesnya mudah dan _customer service_-nya cepat tanggap. Sangat direkomendasikan!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-green-main">Budi S.</p>
                  <p className="text-sm text-gray-500">Mitra Penjual</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <p className="text-gray-700 italic mb-4">
                "Fitur donasi untuk diskon adalah ide yang brilian! Saya bisa membersihkan lemari dan mendapatkan diskon di saat yang sama. _Win-win solution_!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-green-main">Rani D.</p>
                  <p className="text-sm text-gray-500">Donatur</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Dashboard;
