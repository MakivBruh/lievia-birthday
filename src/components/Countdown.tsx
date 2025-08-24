import CountdownTimer from "./CountdownTimer";
import { motion } from "framer-motion";

export default function Countdown() {
    return ( 
<div className="relative h-180 w-full flex flex-col justify-center items-center text-center bg-sky-300">
      <div className="pb-30">
                {/* wave transition */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none bg-sky-300">
          {/* Layer belakang */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1440 320"
            className="w-full h-45  scale-125 rotate-180 drop-shadow-[0_0_20px_rgba(56,189,248,0.7)]"
            fill="#8adafe"
            initial={{ y: 0 }}
            animate={{ y: ["0%", "-10%", "0%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M0,96L1440,192L1440,320L0,320Z"></path>
          </motion.svg>
        </div>

        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          {/* Layer tengah */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1440 320"
            className="w-full h-45  scale-125 rotate-180 drop-shadow-[0_0_20px_rgba(56,189,248,0.7)]"
            fill="#a1e0fe"
            initial={{ y: 5 }}
            animate={{ y: ["0%", "-10%", "0%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <path  d="M0,288L120,277.3C240,267,480,245,720,213.3C960,181,1200,139,1320,117.3L1440,96L1440,320L0,320Z"></path>
          </motion.svg>
        </div>

        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
          {/* Layer depan */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1440 320"
            className="w-full h-45 text-sky-200 scale-125 rotate-180 drop-shadow-[0_0_20px_rgba(56,189,248,0.7)]"
            fill="currentColor"
            initial={{ y: 0 }}
            animate={{ y: ["0%", "10%", "0%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M0,96L120,112C240,128,480,160,720,181.3C960,203,1200,213,1320,218.7L1440,224L1440,320L0,320Z"></path>
          </motion.svg>
        </div>
      </div>
        <CountdownTimer targetDate="2025-09-06T18:30:00+07:00" endDate="2025-09-07T00:00:00+07:00" title="🎉 Ulang Tahun Lievia Veren 🎂" details="Ayo datang & rayakan bareng! 🥳" location="Gigel Garden, tepatnya di ruang VIP 2 lantai 2, Jl. P. Diponegoro No.109, Mangkukusuman, Kec. Tegal Tim., Kota Tegal, Jawa Tengah 52125" />
        <div className="pt-30">
                {/* wave transition */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none bg-sky-300">
            {/* Layer belakang */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 1440 320"
              className="w-full h-45  scale-125 drop-shadow-[0_0_20px_rgba(184,230,254,0.6)]"
              fill="#4db9f0"
              initial={{ y: 0 }}
              animate={{ y: ["0%", "-10%", "0%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M0,96L1440,192L1440,320L0,320Z"></path>
            </motion.svg>
          </div>

          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            {/* Layer tengah */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 1440 320"
              className="w-full h-45  scale-125 drop-shadow-[0_0_20px_rgba(184,230,254,0.6)]"
              fill="#279ee1"
              initial={{ y: 5 }}
              animate={{ y: ["0%", "-10%", "0%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <path  d="M0,288L120,277.3C240,267,480,245,720,213.3C960,181,1200,139,1320,117.3L1440,96L1440,320L0,320Z"></path>
            </motion.svg>
          </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
          {/* Layer depan */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1440 320"
            className="w-full h-45 text-sky-600 scale-125 drop-shadow-[0_0_20px_rgba(184,230,254,0.6)]"
            fill="currentColor"
            initial={{ y: 0 }}
            animate={{ y: ["0%", "10%", "0%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M0,96L120,112C240,128,480,160,720,181.3C960,203,1200,213,1320,218.7L1440,224L1440,320L0,320Z"></path>
          </motion.svg>
        </div>
        </div>
      </div>
      );
    }