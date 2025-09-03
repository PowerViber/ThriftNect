import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white rounded-t-xl shadow-md p-6 md:p-12">
      <div className="grid md:grid-cols-4 gap-8 text-gray-600">
        <div>
          <h3 className="font-bold text-xl text-green-main mb-4">ThriftNect</h3>
          <p>
            Jelajahi kembali pakaian bekas berkualitas dari brand ternama dengan harga terjangkau dan ramah lingkungan.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg text-green-main mb-4">Tentang Kami</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Visi &amp; Misi</a></li>
            <li><a href="#" className="hover:underline">Tim Kami</a></li>
            <li><a href="#" className="hover:underline">Karir</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg text-green-main mb-4">Dukungan</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Pusat Bantuan</a></li>
            <li><a href="#" className="hover:underline">Kebijakan Privasi</a></li>
            <li><a href="#" className="hover:underline">Syarat &amp; Ketentuan</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg text-green-main mb-4">Ikuti Kami</h4>
          <div className="flex space-x-4">
            <a href="#" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-gray-500 hover:text-green-main transition-colors duration-300">
                <path d="M12 2.163c3.204 0 3.584.012 4.851.07 1.272.058 1.954.264 2.457.457.781.306 1.144.695 1.637 1.188.492.492.881.854 1.188 1.636.193.503.4.1.264 1.27.058 1.267.07 1.648.07 4.851s-.012 3.584-.07 4.851c-.058 1.272-.264 1.954-.457 2.457-.306.781-.695 1.144-1.188 1.637-.492.492-.854.881-1.636 1.188-.503.193-1.185.4-2.457.457-1.267.058-1.648.07-4.851.07s-3.584-.012-4.851-.07c-1.27-.058-1.953-.264-2.457-.457-.781-.306-1.144-.695-1.636-1.188-.492-.492-.881-.854-1.188-1.636-.193-.503-.4-1.185-.457-2.457-.058-1.267-.07-1.648-.07-4.851s.012-3.584.07-4.851c.058-1.27.264-1.953.457-2.457.306-.781.695-1.144 1.188-1.636.492-.492.854-.881 1.636-1.188.503-.193 1.185-.4 2.457-.457 1.267-.058 1.648-.07 4.851-.07z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; 2024 ThriftNect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
