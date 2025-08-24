import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Music from "./Music";

export default function Card() {
  const [showCard, setShowCard] = useState(true);
  const musicRef = useRef<{ toggleMusic: () => void } | null>(null);

  useEffect(() => {
    document.body.style.overflow = showCard ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showCard]);

  const handleClose = () => {
    setShowCard(false);
    // trigger musik saat card ditutup
    if (musicRef.current) {
      musicRef.current.toggleMusic();
    }
  };

  return (
    <div className="relative">
      {/* Music component */}
      <div className="fixed top-4 right-4 z-50">
        <Music ref={musicRef} />
      </div>

      {/* Overlay */}
      <AnimatePresence>
        {showCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/40 "
          >
            {/* Card */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-white rounded-2xl p-6 w-80 text-center shadow-[0_0_30px_5px_rgba(255,255,255,0.6)]"
            >
              <div className="flex justify-center">
                <img
                  src="/image/cake.jpeg"
                  alt="Cake"
                  className="w-40 h-40 object-cover rounded-lg"
                />
              </div>
              <h1 className="text-6xl font-kapakana mt-4 [text-shadow:_5px_5px_20px_rgba(0,0,0,0.8)]">
                Lievia Veren
              </h1>
              <p className="text-gray-700 text-sm mt-1 text-shadow-sm">
                Kepada Teman-Teman
              </p>
              <p className="text-gray-700 text-sm my-1 text-shadow-sm">
                Kamu Diundang Di Acara Ulang Tahun Aku
              </p>
              <div className="justify-center flex">
                <button
                  onClick={handleClose}
                  className="mt-4 flex items-center gap-2  text-white px-4 py-2 bg-linear-to-r/oklch from-pink-300 to-pink-400 rounded-full hover:bg-linear-to-r hover:from-pink-400 hover:to-pink-300 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 12H8m0 0l4-4m-4 4l4 4"
                    />
                  </svg>
                  View Invitation
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
