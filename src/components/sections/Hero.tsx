"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Helper component for elegant image animation in the contact sheet
function EditorialImage({ src, aspect, delay, className }: { src: string, aspect: string, delay: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      // Base delay balances the preloader completion
      transition={{ delay: 2.5 + delay, duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
      className={`relative overflow-hidden bg-[#f6f6f6] ${aspect} ${className}`}
    >
      <Image
        src={src}
        alt="Editorial feature of Naomi"
        fill
        className="object-cover transition-transform duration-[2s] hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-0 lg:min-h-screen pt-24 md:pt-40 lg:pt-[20vh] pb-12 md:pb-16 lg:pb-24 px-4 md:px-6 lg:px-8 flex flex-col items-center justify-start lg:justify-center overflow-hidden">

      {/* Structural Editorial Grid Composer */}
      {/* 
        Desktop: Bottom-aligned (items-end) grid ensures a disciplined, sharp baseline across the image triad.
        Mobile: True 2-column grid. The CTA is integrated as a tile to resolve the bottom edge.
      */}
      <div className="relative z-10 max-w-[1450px] mx-auto w-full grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-5 lg:gap-4 items-end group/hero transition-all duration-700">

        {/* Left Column Supporting Images */}
        <div className="flex flex-col gap-3 md:gap-4 w-full z-10 order-2 md:order-1 col-span-1 md:col-span-3">
          <EditorialImage
            src="/naomi-images/onas9033.jpeg"
            aspect="aspect-[3/4]"
            delay={0.2}
            className="w-full"
          />
          <EditorialImage
            src="/naomi-images/img_1737.jpg"
            aspect="aspect-[1/1]"
            delay={0.4}
            className="w-full md:w-[90%] md:ml-auto"
          />
        </div>

        {/* Dominant Image - Central focal point */}
        <div className="col-span-2 md:col-span-5 w-full z-20 order-1 md:order-2">
          <EditorialImage
            src="/naomi-images/onas9169.jpeg"
            aspect="aspect-[4/5]"
            delay={0.1}
            className="w-full shadow-2xl"
          />
          {/* Subtle Branding Focal Point */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 3, duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
            className="hidden md:block absolute -right-12 top-1/2 -rotate-90 origin-center"
          >
            <span className="font-heading text-[10px] tracking-[1em] uppercase whitespace-nowrap">Editorial Board / 24</span>
          </motion.div>
        </div>

        {/* Right Column Supporting Images & CTA */}
        {/* On mobile, this takes the right col. On desktop, it's the final 4-col span. */}
        <div className="flex flex-col gap-3 md:gap-4 w-full z-30 order-3 col-span-1 md:col-span-4 h-full">
          <EditorialImage
            src="/naomi-images/img_3944.jpg"
            aspect="aspect-[4/3]"
            delay={0.3}
            className="w-full md:w-[85%]"
          />
          <EditorialImage
            src="/naomi-images/beauty-shoot-with-luwatifee-3.jpeg"
            aspect="aspect-[4/5]"
            delay={0.5}
            className="w-full md:w-[75%] md:ml-6"
          />

          {/* Resolved CTA Tile - Integrated as a grid block that aligns perfectly with the other column bottoms */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 1 }}
            className="mt-auto w-full md:w-[85%] bg-[#f6f6f6] md:bg-transparent px-4 md:px-0 pt-8 pb-0 md:py-0 flex items-center justify-center md:justify-start border-t md:border-t-0 border-black/5"
          >
            <Link
              href="#portfolio"
              className="group flex items-center gap-3 text-foreground/70 hover:text-foreground transition-colors md:pb-0"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 text-center md:text-left pb-1">
                <span className="font-heading text-[10px] md:text-sm uppercase tracking-[0.3em] font-medium border-b border-foreground/30 pb-1 group-hover:border-foreground transition-all duration-500">
                  View Full Portfolio
                </span>
                <ArrowDownRight
                  size={14}
                  strokeWidth={1.5}
                  className="mx-auto md:mx-0 transition-transform duration-500 ease-out group-hover:translate-y-1 group-hover:translate-x-1 opacity-60"
                />
              </div>
            </Link>
          </motion.div>
        </div>

      </div>

    </section>
  );
}
