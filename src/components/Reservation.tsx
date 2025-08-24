import { useState } from "react";
import { motion } from "framer-motion";

export default function Reservation() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [attend, setAttend] = useState("");
  const [error, setError] = useState("");
  const phoneNumber = "6285647716477"; // ganti nomor WA tujuan (pakai format internasional, 62 untuk Indonesia)

  const handleReserve = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() && !attend) {
      setError("⚠️ Nama dan opsi tidak boleh kosong!");
      setTimeout(() => setError(""), 5000);
      return;
    }
    if (!name.trim()) {
    setError("⚠️ Nama tidak boleh kosong!");
      setTimeout(() => setError(""), 5000);
      return;
    }
    if (!attend) {
    setError("⚠️ Opsi tidak boleh kosong!");
      setTimeout(() => setError(""), 5000);
      return;
    }

    const text = `Halo, saya ${name}.
Pesan: ${message || "-"}
Konfirmasi Kehadiran: ${attend}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (  
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
      className="p-6 bg-gradient-to-br from-green-400/40 to-blue-500/40 rounded-2xl shadow-xl mt-20 backdrop-blur-md">
      <h2 className="text-2xl font-extrabold text-center mb-6 text-white tracking-wide">
        📩 Reservasi Kehadiran
      </h2>
        {error && (
        <div className="mb-4 p-3 rounded-lg bg-red-500/80 text-white text-center font-semibold shadow-md animate-bounce">
          {error}
        </div>
        )}
      <form
        onSubmit={handleReserve}
        className="flex flex-col gap-4 max-w-md mx-auto"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Namamu..."
          className="p-3 rounded-lg border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Pesan tambahan (opsional)..."
          rows={3}
          className="p-3 rounded-lg border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <div className="flex flex-col gap-2 text-white">
          <label className="font-semibold">Konfirmasi Kehadiran:</label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="attend"
              value="Iya, saya akan datang"
              checked={attend === "Iya, saya akan datang"}
              onChange={(e) => setAttend(e.target.value)}
              className="accent-green-500"
            />
            Iya, saya akan datang
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="attend"
              value="Maaf, saya tidak bisa datang"
              checked={attend === "Maaf, saya tidak bisa datang"}
              onChange={(e) => setAttend(e.target.value)}
              className="accent-red-500"
            />
            Maaf, saya tidak bisa datang
          </label>
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition mt-4"
        >
          Kirim Reservasi via WhatsApp
        </button>
      </form>
    </motion.div>
  );
}
