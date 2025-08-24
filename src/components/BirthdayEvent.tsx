import React from "react";
import { motion } from "framer-motion";

const BirthdayEvents: React.FC = () => {
  return (
    <div className="py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-10">
        
        {/* Card 1 - Acara Ulang Tahun */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/10 border border-blue-300/30 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden p-8 text-center hover:border-blue-400/70 transition-all duration-300"
        >
          <h2 className="text-3xl font-bold text-white mb-2">🎂 Acara Ulang Tahun</h2>
          <p className="text-white/80">Sabtu, 6 September 2025</p>
          <p className="text-white/80">18.30 WIB</p>
          <p className="mt-5 text-white font-semibold text-lg">Gigel Garden, Ruang VIP 2 lantai 2</p>
          <p className="text-white/70 text-sm">Jl. P. Diponegoro No.109, Mangkukusuman, Kec. Tegal Tim., Kota Tegal, Jawa Tengah 52125</p>
          <a
            href="https://maps.app.goo.gl/ExDQq8tTKTXRLnUq5"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-6 py-2 bg-linear-to-r/oklch from-blue-500 to-blue-400 hover:bg-blue-500 text-white font-medium rounded-full shadow-lg transition duration-300 hover:from-blue-400 hover:to-blue-500 hover:scale-105"
          >
            📍 Lihat Lokasi
          </a>
        </motion.div>

      </div>
    </div>
  );
};

export default BirthdayEvents;
