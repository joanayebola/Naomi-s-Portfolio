"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="connect" className="w-full bg-[#FDFCF8] pb-6 pt-8 px-6 md:px-12">
      <div className="container-shell max-w-[1400px] mx-auto">

        {/* Subtle top divider */}
        <div className="w-full h-[1px] bg-black/5 mb-16" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">

          {/* Brand Mark */}
          <div className="flex flex-col gap-2">
            <span className="font-heading text-xl md:text-2xl uppercase tracking-[0.2em] font-bold">
              Okoh Naomi
            </span>
            <span className="text-[10px] tracking-[0.4em] uppercase text-black-400 font-medium">
              Fashion Model
            </span>
          </div>

          {/* Rapid Navigation / Social Links */}
          <nav className="flex items-center gap-10 md:gap-16">
            <Link
              href="https://instagram.com/na0miverse"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center p-2"
            >
              <span className="font-heading text-[10px] tracking-[0.4em] uppercase font-medium relative z-10 group-hover:text-purple-600 transition-colors duration-500">
                Instagram
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-purple-600/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left" />
            </Link>

            <Link
              href="https://x.com/62ftNaomi"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center p-2"
            >
              <span className="font-heading text-[10px] tracking-[0.4em] uppercase font-medium relative z-10 group-hover:text-pink-600 transition-colors duration-500">
                X
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-pink-600/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left" />
            </Link>

            <Link
              href="https://tiktok.com/@na0miverse"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center p-2"
            >
              <span className="font-heading text-[10px] tracking-[0.4em] uppercase font-medium relative z-10 group-hover:text-purple-600 transition-colors duration-500">
                TikTok
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-purple-600/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left" />
            </Link>
          </nav>

          {/* Legal / Copyright */}
          <div className="text-[10px] tracking-[0.3em] uppercase text-zinc-400 font-medium">
            © {currentYear} Okoh Naomi / Lagos, NG
          </div>

        </div>

        {/* Closing decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-black/10 to-transparent mt-24 mb-4"
        />

      </div>
    </footer>
  );
}
