import { motion } from "framer-motion";

export default function Profile() {
    return (
      <div className="relative flex flex-col items-center text-center bg-linear-to-b/oklch from-white to-sky-200 mx-auto pt-100 pb-50">
        <div className="absolute -top-8 left-0 w-full overflow-hidden leading-none bg-sky-400">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1440 320"
            className="w-full h-45 text-sky-300 scale-125 drop-shadow-[0_0_20px_rgba(0,229,255,0.7)]"
            fill="#50d1fe"
            initial={{ y: 0 }}
            animate={{ y: ["0%", "-10%", "0%"] }} // gerak kanan kiri
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}>
            <path fillOpacity="1" d="M0,96L1440,192L1440,320L0,320Z"></path>
          </motion.svg>
        </div>
        <div className="absolute -top-7 left-0 w-full overflow-hidden leading-none ">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1440 320"
            className="w-full h-45 text-sky-200/90 scale-125 drop-shadow-[0_0_20px_rgba(0,229,255,0.7)]"
            fill="#a1e6fe"
            initial={{ y: 5 }}
            animate={{ y: ["0%", "-10%", "0%"] }} // gerak kanan kiri
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}>
            <path fillOpacity="1" d="M0,288L120,277.3C240,267,480,245,720,213.3C960,181,1200,139,1320,117.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
          </motion.svg>
        </div>
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1440 320"
            className="w-full h-45 text-blue-500 scale-125 drop-shadow-[0_0_20px_rgb(0,229,255,0.7)]"
            fill="#f2fbfe"
            initial={{ y: 0 }}
            animate={{ y: ["0%", "10%", "0%"] }} // gerak kanan kiri
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}>
            <path fillOpacity="1" d="M0,96L120,112C240,128,480,160,720,181.3C960,203,1200,213,1320,218.7L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
          </motion.svg>
        </div>
        {/* Foto dengan efek glow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-60 h-60 rounded-full overflow-hidden shadow-lg shadow-sky-400/40 border-4 border-white hover:scale-105 transition-transform duration-500">
          <img src="/image/livip1.jpg" alt="Lievia Veren" className="object-cover w-full h-full" />
        </motion.div>

        {/* Garis */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}className="w-40 h-[2px] bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-70 my-6"></motion.div>
        {/* Nama */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }} className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">Lievia Veren</motion.p>

        {/* Tombol Instagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-6">
          <a
            href="https://www.instagram.com/lieviaveren/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-linear-to-r from-sky-500 to-sky-400 rounded-full text-white px-5 py-2 flex items-center gap-x-2 hover:bg-linear-to-r/oklch hover:from-sky-400 hover:bg-sky-600 transition duration-300 shadow-md hover:shadow-lg hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" className="w-5 h-5 fill-current group-hover:rotate-6 transition-transform duration-300">
              <path
                d="M20,10c-5.5,0-10,4.5-10,10v32c0,5.5,4.5,10,10,10h32c5.5,0,10-4.5,10-10V20c0-5.5-4.5-10-10-10H20z M36,52
            c-2.2,0-4.3-0.4-6.2-1.3c-1.9-0.8-3.6-2-5.1-3.4c-1.5-1.5-2.6-3.2-3.4-5.1c-0.8-2-1.3-4.1-1.3-6.2c0-2.2,0.4-4.3,1.3-6.2
            c0.8-1.9,2-3.6,3.4-5.1c1.5-1.5,3.2-2.6,5.1-3.4c2-0.8,4.1-1.3,6.2-1.3c2.2,0,4.3,0.4,6.2,1.3c1.9,0.8,3.6,2,5.1,3.4
            c1.5,1.5,2.6,3.2,3.4,5.1c0.8,2,1.3,4.1,1.3,6.2c0,2.2-0.4,4.3-1.3,6.2c-0.8,1.9-2,3.6-3.4,5.1c-1.5,1.5-3.2,2.6-5.1,3.4
            C40.3,51.6,38.2,52,36,52z M36,26c-5.5,0-10,4.5-10,10c0,5.5,4.5,10,10,10c5.5,0,10-4.5,10-10C46,30.5,41.5,26,36,26z M54,21
            c-1.7,0-3-1.3-3-3s1.3-3,3-3h0c1.7,0,3,1.3,3,3S55.7,21,54,21z M52,68H20c-8.8,0-16-7.2-16-16V20c0-8.8,7.2-16,16-16h32
            c8.8,0,16,7.2,16,16v32C68,60.8,60.8,68,52,68z"
              />
            </svg>
            <span className="font-medium">@lieviaveren</span>
          </a>
        </motion.div>
      </div>
  );
}