"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative w-full min-h-[90vh] md:min-h-0 lg:min-h-screen bg-black text-white overflow-hidden py-20 md:py-20 lg:py-32 flex flex-col justify-center">

      {/* Premium Bubbly Glows - Fashion Forward Accents */}
      <div className="absolute top-1/4 -left-20 w-[40vw] h-[40vw] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[35vw] h-[35vw] bg-pink-600/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-shell relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">

          {/* Text-led side: Narrative & Profile */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col gap-6 md:gap-10">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-heading text-[10px] tracking-[0.6em] uppercase text-pink-500/80 font-medium">
                About
              </span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mt-6">
                Presence, poise, and a <span className="italic text-purple-300">distinct</span> visual language.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-sm"
            >
              <p className="text-zinc-400/90 leading-relaxed text-sm md:text-base font-light">
                Okoh Naomi is an editorial and commercial model based in Lagos, Nigeria.
                With a background in diverse fashion narratives, she brings an architectural
                presence to every frame, blending high-fashion discipline with contemporary
                African creativity.
              </p>
            </motion.div>

            {/* Identity Panel / Profile Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-y-4 md:gap-y-6 pt-6 border-t border-white/5"
            >
              <div>
                <span className="block text-[7px] tracking-[0.4em] uppercase text-zinc-500/60 mb-1.5">Focus</span>
                <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase font-medium">Editorial</span>
              </div>
              <div>
                <span className="block text-[7px] tracking-[0.4em] uppercase text-zinc-500/60 mb-1.5">Market</span>
                <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase font-medium">Commercial</span>
              </div>
              <div>
                <span className="block text-[7px] tracking-[0.4em] uppercase text-zinc-500/60 mb-1.5">Style</span>
                <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase font-medium">Beauty</span>
              </div>
              <div>
                <span className="block text-[7px] tracking-[0.4em] uppercase text-zinc-500/60 mb-1.5">Base</span>
                <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase font-medium text-pink-400/80">Lagos, Nigeria</span>
              </div>
            </motion.div>
          </div>

          {/* Image-led side: High-Impact Portrait */}
          <div className="md:col-span-6 md:col-start-7 lg:col-span-4 lg:col-start-8 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-[1px] shadow-2xl z-10"
            >
              <Image
                src="/naomi-images/img_3009.jpg"
                alt="Okoh Naomi Editorial Portrait"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-[3s] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Decorative Grid Elements & Editorial Box */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-purple-500/10 z-0 hidden lg:block" />

            {/* The "Box Underneath" - A solid editorial accent offset */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-pink-500/5 rounded-[1px] -z-10 hidden md:block border border-pink-500/10" />

            <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-pink-500/10 z-0 hidden lg:block" />
          </div>

        </div>
      </div>

      {/* Vertical Side Label */}
      <div className="hidden lg:block absolute right-12 top-1/2 -rotate-90 origin-center opacity-20 transform -translate-y-1/2">
        <span className="font-heading text-[10px] tracking-[2em] uppercase whitespace-nowrap">Editorial / Profile</span>
      </div>

    </section>
  );
}
