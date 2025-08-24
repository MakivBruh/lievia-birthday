import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownTimerProps {
  targetDate: string; // Format ISO: 2025-09-06T18:30:00+07:00
  endDate: string; // Format ISO: 2025-09-06T24:00:00+07:00
  title?: string;
  details?: string;
  location?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, endDate, title = "🎉 Ulang Tahun Lievia Veren 🎂", details = "Ayo datang & rayakan bareng! 🥳", location = "Jakarta, Indonesia" }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Format ke UTC untuk calendar
  const startUTC = new Date(targetDate).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const endUTC = new Date(endDate).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

  const googleCalendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startUTC}/${endUTC}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;

  const iCalData = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
URL:${googleCalendarLink}
DTSTART:${startUTC}
DTEND:${endUTC}
SUMMARY:${title}
DESCRIPTION:${details}
LOCATION:${location}
END:VEVENT
END:VCALENDAR`;

  const handleSaveDate = () => {
    const isApple = /iPad|iPhone|Macintosh/.test(navigator.userAgent);
    if (isApple) {
      const blob = new Blob([iCalData], { type: "text/calendar;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "event.ics";
      a.click();
      URL.revokeObjectURL(url);
    } else {
      window.open(googleCalendarLink, "_blank");
    }
  };

  // Countdown logic
  useEffect(() => {
    const target = new Date(targetDate).getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="select-none flex flex-col items-center justify-center text-white p-6">
      <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg animate-bounce">🎉 Countdown 🎂</motion.h1>

      <div className="flex gap-4 md:gap-8 text-center">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div key={label} className="bg-white/20 backdrop-blur-lg rounded-2xl p-4 w-20 md:w-24 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <p className="text-3xl md:text-4xl font-bold">{value}</p>
            <span className="capitalize text-sm md:text-base">{label}</span>
          </div>
        ))}
      </div>

      <p className="mt-6 text-lg md:text-xl font-medium drop-shadow-md">Siap-siap buat pesta seru! 🥳</p>

      <button onClick={handleSaveDate} className="mt-4 px-6 py-3 bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-600 hover:to-pink-400 text-white text-shadow-md font-semibold rounded-full shadow-lg transform hover:scale-105 transition duration-300">
        📅 Save the Date
      </button>
    </motion.div>
  );
};

export default CountdownTimer;
