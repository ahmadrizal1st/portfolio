import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { SpiralAnimation } from "../components/ui/spiral-animation";

interface SplashPageProps {
  onComplete: () => void;
}

const welcomes = [
  "Welcome",
  "欢迎",
  "ようこそ",
  "환영합니다",
  "Добро пожаловать",
  "مرحباً",
  "Selamat Datang",
];

export function SplashPage({ onComplete }: SplashPageProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % welcomes.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem("hasVisited", "true");
      onComplete();
    }, 3300);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 text-white flex items-center justify-center"
    >
      <SpiralAnimation />
      <div className="text-center px-4 relative z-10">
        <motion.h1
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="text-6xl md:text-8xl font-black"
        >
          {welcomes[index]}
        </motion.h1>
      </div>
    </motion.div>
  );
}
