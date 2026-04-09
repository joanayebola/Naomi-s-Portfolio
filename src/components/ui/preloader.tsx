"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Wait for the exit animation duration (1.2s container sweep)
      setTimeout(() => {
        onComplete();
      }, 1200);
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  // Curtain lifting exit transition
  const containerVariants = {
    exit: {
      y: "-100vh",
      transition: {
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1] as any // Fix type mismatch for Bezier array
      },
    },
  };

  const letterVariants = {
    hidden: { y: "110%", opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.15,
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as any, // Smooth suspension
      },
    }),
  };

  const letters = "Néomi".split("");

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader"
          variants={containerVariants}
          exit="exit"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#faf9f6] pointer-events-none overflow-hidden"
        >
          {/* Film-Grain Noise Overlay */}
          <div className="absolute inset-0 z-0 opacity-[0.04] mix-blend-multiply">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <filter id="noiseFilter">
                <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
          </div>

          {/* Subtle gold accent line top center */}
          <div className="absolute top-0 w-[1px] h-16 md:h-24 bg-accent opacity-30 z-10" />

          {/* Name Wrap */}
          <div className="relative z-10 flex overflow-hidden pb-4 mb-2">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-foreground"
              >
                {letter}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
            className="relative z-10 eyebrow tracking-[0.3em] md:tracking-[0.4em] opacity-60 text-[10px] md:text-xs text-foreground"
          >
            LAGOS BASED MODEL
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
