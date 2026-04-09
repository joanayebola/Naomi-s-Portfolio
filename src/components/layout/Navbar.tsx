"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Monitor scroll for the structural border reveal
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  });

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.8, duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
        className="fixed top-0 left-0 w-full z-40 px-6 md:px-12 py-6 text-foreground bg-[#FDFCF8] border-b border-black/5 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]"
      >
        <div className="relative mx-auto flex items-center justify-between uppercase">

          {/* Left Navigation Suite */}
          <nav className="hidden md:flex items-center gap-12 flex-1 tracking-[0.25em] text-[10px] md:text-[10px] text-[#db2777]">
            <Link href="#portfolio" className="relative group flex items-center justify-center">
              <div className="relative overflow-hidden inline-flex">
                <span className="relative z-10 transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:-translate-y-[110%] inline-block font-medium">
                  Portfolio
                </span>
                <span className="absolute top-0 left-0 z-10 transition-transform duration-500 ease-[0.16,1,0.3,1] translate-y-[110%] group-hover:translate-y-0 text-foreground inline-block drop-shadow-sm font-semibold">
                  Portfolio
                </span>
              </div>
              <span className="absolute -bottom-[6px] left-0 w-full h-[1px] bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[0.16,1,0.3,1] origin-left" />
            </Link>
            <Link href="#about" className="relative group flex items-center justify-center">
              <div className="relative overflow-hidden inline-flex">
                <span className="relative z-10 transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:-translate-y-[110%] inline-block font-medium">
                  About
                </span>
                <span className="absolute top-0 left-0 z-10 transition-transform duration-500 ease-[0.16,1,0.3,1] translate-y-[110%] group-hover:translate-y-0 text-foreground inline-block drop-shadow-sm font-semibold">
                  About
                </span>
              </div>
              <span className="absolute -bottom-[6px] left-0 w-full h-[1px] bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[0.16,1,0.3,1] origin-left" />
            </Link>
          </nav>

          {/* Heroic Brand Mark */}
          <div className="flex-1 flex justify-center z-10">
            <Link
              href="/"
              className="group relative flex flex-col items-center justify-center"
            >
              {/* Fine architectural line above */}
              <span className="w-3 group-hover:w-12 h-[1px] bg-current mb-2 md:mb-3 transition-all duration-700 ease-[0.16,1,0.3,1] opacity-60" />

              {/* The name */}
              <div className="font-heading flex flex-col items-center leading-none">
                <span className="text-[9px] md:text-xs tracking-[0.8em] md:tracking-[1em] uppercase ml-[0.8em] md:ml-[1em] font-light opacity-80">
                  Okoh
                </span>
                <span className="text-2xl md:text-4xl tracking-[0.15em] uppercase font-bold mt-1 md:mt-2">
                  Naomi
                </span>
              </div>

              {/* Fine architectural line below */}
              <span className="w-3 group-hover:w-12 h-[1px] bg-current mt-2 md:mt-3 transition-all duration-700 ease-[0.16,1,0.3,1] opacity-60" />
            </Link>
          </div>

          {/* Right Navigation Suite */}
          <nav className="hidden md:flex items-center justify-end gap-12 flex-1 tracking-[0.25em] text-[10px] md:text-[10px] text-[#db2777]">
            <Link href="#bookings" className="relative group flex items-center justify-center">
              <div className="relative overflow-hidden inline-flex">
                <span className="relative z-10 transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:-translate-y-[110%] inline-block font-medium">
                  Bookings
                </span>
                <span className="absolute top-0 left-0 z-10 transition-transform duration-500 ease-[0.16,1,0.3,1] translate-y-[110%] group-hover:translate-y-0 text-foreground inline-block drop-shadow-sm font-semibold">
                  Bookings
                </span>
              </div>
              <span className="absolute -bottom-[6px] right-0 w-full h-[1px] bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[0.16,1,0.3,1] origin-right" />
            </Link>
            <Link href="#connect" className="relative group flex items-center justify-center">
              <div className="relative overflow-hidden inline-flex">
                <span className="relative z-10 transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:-translate-y-[110%] inline-block font-medium">
                  CONNECT
                </span>
                <span className="absolute top-0 left-0 z-10 transition-transform duration-500 ease-[0.16,1,0.3,1] translate-y-[110%] group-hover:translate-y-0 text-foreground inline-block drop-shadow-sm font-semibold">
                  CONNECT
                </span>
              </div>
              <span className="absolute -bottom-[6px] right-0 w-full h-[1px] bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[0.16,1,0.3,1] origin-right" />
            </Link>
          </nav>

          {/* Abstract Mobile Menu Dots */}
          <button
            className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-[6px] p-2 z-50"
            aria-label="Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.span
              animate={{ scale: isMenuOpen ? 1.5 : 1, opacity: isMenuOpen ? 0 : 1 }}
              className="w-1 h-1 rounded-full bg-[#db2777] transition-transform duration-300"
            />
            <motion.span
              animate={{ scale: isMenuOpen ? 2 : 1 }}
              className="w-1 h-1 rounded-full bg-[#db2777] transition-colors duration-300"
            />
            <motion.span
              animate={{ scale: isMenuOpen ? 1.5 : 1, opacity: isMenuOpen ? 0 : 1 }}
              className="w-1 h-1 rounded-full bg-[#db2777] transition-transform duration-300"
            />
          </button>
        </div>

        {/* Structural Scroll Line - A deeply architectural aesthetic. Smoothly spans out from center on scroll. */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-[1px] bg-current opacity-30"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: hasScrolled ? 1 : 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] as any }}
          style={{ originX: 0.5 }}
        />
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)", background: "rgba(253, 252, 248, 0)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)", background: "rgba(253, 252, 248, 0.98)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)", background: "rgba(253, 252, 248, 0)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as any }}
            className="fixed inset-0 z-30 flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-10 text-2xl font-light tracking-[0.2em] text-[#db2777] uppercase">
              <Link href="#portfolio" onClick={() => setIsMenuOpen(false)} className="hover:scale-110 transition-transform duration-500 ease-[0.16,1,0.3,1]">Portfolio</Link>
              <Link href="#about" onClick={() => setIsMenuOpen(false)} className="hover:scale-110 transition-transform duration-500 ease-[0.16,1,0.3,1]">About</Link>
              <Link href="#bookings" onClick={() => setIsMenuOpen(false)} className="hover:scale-110 transition-transform duration-500 ease-[0.16,1,0.3,1]">Bookings</Link>
              <Link href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:scale-110 transition-transform duration-500 ease-[0.16,1,0.3,1]">Contact</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
