import { motion } from "motion/react";
import { useEffect } from "react";
import { personalInfo } from "../lib/data";
import { SpiralAnimation } from "../components/ui/spiral-animation";

interface SplashPageProps {
  onComplete: () => void;
}

export function SplashPage({ onComplete }: SplashPageProps) {
  useEffect(() => {
    const handleKeyPress = () => {
      localStorage.setItem("hasVisited", "true");
      onComplete();
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [onComplete]);

  const handleClick = () => {
    localStorage.setItem("hasVisited", "true");
    onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 text-white flex items-center justify-center cursor-pointer"
      onClick={handleClick}
    >
      <SpiralAnimation />
      <div className="text-center px-4 relative z-10">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-black mb-6"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl mb-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {personalInfo.title}
          </motion.p>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-6 h-10 border-2 border-red-500/80 rounded-full flex justify-center pt-2 mx-auto mb-12"
          >
            <motion.div className="w-1 h-2 bg-red-500/90 rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-lg"
            >
              Press <span className="font-bold">any key</span> or{" "}
              <span className="font-bold">CLICK</span> to continue
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
