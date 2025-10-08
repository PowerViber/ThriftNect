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
            <a href="https://www.instagram.com/inasindriani" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <img src="/src/assets/icon/icon-instagram.png" alt="Instagram" className="w-6 h-6 text-gray-500 hover:text-green-main transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; 2025 ThriftNect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
