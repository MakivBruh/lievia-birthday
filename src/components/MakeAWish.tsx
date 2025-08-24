import { useEffect, useState } from "react";
import { db } from "../firebase";
import { ref, push, onValue } from "firebase/database";
import { motion } from "framer-motion";

export default function MakeAWish() {
  const [name, setName] = useState("");
  const [wish, setWish] = useState("");
  const [wishes, setWishes] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(""); // alert state
  const perPage = 5;

  // ambil data realtime
  useEffect(() => {
    const wishesRef = ref(db, "wishes");
    onValue(wishesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setWishes(
          Object.values(data).sort((a: any, b: any) => b.createdAt - a.createdAt)
        );
      } else {
        setWishes([]);
      }
    });
  }, []);

  // simpan wish
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() && !wish.trim()) {
      setError("⚠️ Nama dan ucapan tidak boleh kosongs!");
      setTimeout(() => setError(""), 5000);
      return;
    }
    if (!name.trim()) {
      setError("⚠️ Nama masih kosong!");
      setTimeout(() => setError(""), 4000);
      return;
    }
    if (!wish.trim()) {
      setError("⚠️ Ucapan masih kosong!");
      setTimeout(() => setError(""), 4000);
      return;
    }

    const wishesRef = ref(db, "wishes");
    push(wishesRef, {
      name,
      text: wish,
      createdAt: Date.now(),
    });

    setWish("");
    setError("");
  };

  // format tanggal
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // pagination
  const totalPages = Math.ceil(wishes.length / perPage);
  const startIndex = (page - 1) * perPage;
  const currentWishes = wishes.slice(startIndex, startIndex + perPage);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
      className="p-6 bg-gradient-to-br from-pink-400/40 to-purple-500/40 rounded-2xl shadow-xl mt-8 backdrop-blur-md">
        <h2 className="text-2xl font-extrabold text-center mb-6 text-white tracking-wide">
          💫 Make a Wish 💫
        </h2>

      {/* ALERT CUSTOM */}
      {error && (
        <div className="mb-4 p-3 rounded-lg bg-red-500/80 text-white text-center font-semibold shadow-md animate-bounce">
          {error}
        </div>
      )}

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 mb-8">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Namamu..."
          className="flex-1 p-3 rounded-lg border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400"/>
        <input
          type="text"
          value={wish}
          onChange={(e) => setWish(e.target.value)}
          placeholder="Tulis ucapanmu..."
          className="flex-1 p-3 rounded-lg border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400"/>
        <button
          type="submit"
          className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow hover:bg-pink-600 transition">
          Kirim
        </button>
      </form>

      {/* LIST WISHES */}
      <div className="space-y-3 mb-4">
        {currentWishes.map((w, i) => (
          <div
            key={i}
            className="p-4 bg-white/20 rounded-xl text-white shadow flex flex-col"
          >
            <p className="font-semibold text-pink-200">{w.name}</p>
            <p className="text-white text-lg">{w.text}</p>
            <span className="text-sm text-white/70 mt-1">
              {formatDate(w.createdAt)}
            </span>
          </div>
        ))}

        {currentWishes.length === 0 && (
          <p className="text-center text-white/70">Belum ada ucapan.</p>
        )}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center mx-auto gap-4 mt-4">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className={`px-4 py-2 rounded-lg flex font-semibold ${
              page === 1
                ? "bg-white/20 text-white/50 cursor-not-allowed"
                : "bg-white/30 text-white hover:bg-white/40"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <p className="ml-1 hidden md:block ">Previous</p>
          </button>
          <div className="text-white font-semibold my-auto">
            {page} / {totalPages}
          </div>
          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className={`px-4 py-2 rounded-lg flex font-semibold ${
              page === totalPages
                ? "bg-white/20 text-white/50 cursor-not-allowed"
                : "bg-white/30 text-white hover:bg-white/40"
            }`}
          >
            <p className="mr-1 hidden md:block">
            Next 
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>
        </div>
      )}
    </motion.div>
  );
}
