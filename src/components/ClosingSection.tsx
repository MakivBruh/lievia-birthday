import { motion } from "framer-motion";


export default function ClosingSection() {
    return(
      <div className="relative h-[40rem] w-full flex flex-col justify-center items-center text-center text-white select-none">
            <div className="">
              {/* Background Image */}
              <div className="absolute z-0 inset-0">
                <img
                  src="/image/bg11.jpg"
                  alt="blue elegant background birthday"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>  
                {/* Overlay efek gelap biar teks lebih jelas */}
              </div>
                      {/* wave transition */}
              <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-30">
                {/* Layer depan */}
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  viewBox="0 0 1440 320"
                  className="sm:w-250 md:w-300 lg:w-full h-30 sm:h-36 md:h-40 lg:h-48 text-sky-200 scale-125 rotate-180 drop-shadow-[0_0_20px_rgba(184,230,254,0.6)]"
                  fill="currentColor"
                  initial={{ y: 0 }}
                  animate={{ y: ["0%", "10%", "0%"] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path fill-opacity="1" d="M0,96L48,90.7C96,85,192,75,288,90.7C384,107,480,149,576,154.7C672,160,768,128,864,117.3C960,107,1056,117,1152,112C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </motion.svg>
              </div>
              <div className="absolute top-10 left-0 w-full overflow-hidden leading-none z-20">
                {/* Layer belakang */}
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  viewBox="0 0 1440 320"
                  className="sm:w-250 md:w-300 lg:w-full h-30 sm:h-36 md:h-40 lg:h-48  scale-125 rotate-180 drop-shadow-[0_0_20px_rgba(184,230,254,0.6)]"
                  fill="#76a3c0"
                  initial={{ y: 0 }}
                  animate={{ y: ["0%", "-5%", "0%"] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path d="M0,224L80,202.7C160,181,320,139,480,144C640,149,800,203,960,197.3C1120,192,1280,128,1360,96L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </motion.svg>
              </div>

              <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pb-20">
                {/* Layer tengah */}
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  viewBox="0 0 1440 320"
                  className="sm:w-250 md:w-300 lg:w-full h-30 sm:h-36 md:h-40 lg:h-48sm:w-250 md:w-300 lg:w-full h-30 sm:h-36 md:h-40 lg:h-48  scale-125 scale-x-[-1] rotate-180 drop-shadow-[0_0_20px_rgba(184,230,254,0.6)]"
                  fill="#335f81"
                  initial={{ y: 5 }}
                  animate={{ y: ["0%", "-20%", "0%"] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path  d="M0,224L80,202.7C160,181,320,139,480,144C640,149,800,203,960,197.3C1120,192,1280,128,1360,96L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </motion.svg>
              </div>

              </div>

        {/* Teks */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }} className="relative px-4 mt-30">
          <p className="text-xl mb-2 drop-shadow-lg">Hadirmu berarti banget,</p>
          <p className="text-sm mb-4 drop-shadow-lg">
            dan ada hadiah kenangan kecil yang udah aku siapin khusus buat kamu 🎁
          </p>
          <h1 className="text-6xl md:text-7xl mt-10 font-bold font-kapakana drop-shadow-lg">
            Lievia Veren
          </h1>
        </motion.div>
      </div>
    );
}