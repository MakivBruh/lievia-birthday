import { forwardRef, useImperativeHandle, useRef, useEffect, useState } from "react";

const Music = forwardRef<{ toggleMusic: () => void }, {}>((_, ref) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useImperativeHandle(ref, () => ({
    toggleMusic() {
      if (!audioRef.current) return;
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }));

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        audio.pause();
      } else if (isPlaying) {
        audio.play().catch(() => {});
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isPlaying]);

  return <audio ref={audioRef} src="/audio/ulang_tahun.mp3" loop preload="auto" />;
});

export default Music;
