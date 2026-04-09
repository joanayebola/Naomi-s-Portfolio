"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, BookOpen } from "lucide-react";

interface BookCategory {
  id: string;
  title: string;
  cover: string;
  images: string[];
}

const portfolioCategories: BookCategory[] = [
  {
    id: "editorial",
    title: "Editorial",
    cover: "/naomi-images/editorial-with-yourguysas.jpg",
    images: [
      "/naomi-images/editorial-with-yourguysas.jpg",
      "/naomi-images/editorial-with-yourguysas-2.jpg",
      "/naomi-images/editorial-with-yourguysas-3.jpg",
      "/naomi-images/editorial-with-yourguysas-4.jpg",
    ],
  },
  {
    id: "beauty",
    title: "Beauty",
    cover: "/naomi-images/beauty-editorial-with-twinkle-photography.jpeg",
    images: [
      "/naomi-images/beauty-editorial-with-twinkle-photography.jpeg",
      "/naomi-images/beauty-editorial-with-twinkle-photography-2.jpeg",
      "/naomi-images/beauty-shoot-with-luwatifee-4.jpeg",
      "/naomi-images/beauty-shoot-with-luwatifee-7.jpeg",
    ],
  },
  {
    id: "commercial",
    title: "Commercial",
    cover: "/naomi-images/commercial-for-itel-nigeria.jpeg",
    images: [
      "/naomi-images/commercial-for-itel-nigeria.jpeg",
      "/naomi-images/commercial-for-itel-nigeria-2.jpeg",
      "/naomi-images/commercial-for-itel-nigeria-3.jpeg",
      "/naomi-images/commercial-for-itel-nigeria-4.jpeg",
    ],
  },
  {
    id: "lfw",
    title: "Lagos Fashion Week",
    cover: "/naomi-images/lagos-fahion-week.jpeg",
    images: [
      "/naomi-images/lagos-fahion-week.jpeg",
      "/naomi-images/lagos-fahion-week.jpg",
      "/naomi-images/lagos-fashion-week-4.jpg",
      "/naomi-images/lagos-fahion-week-7.jpg",
    ],
  },
  {
    id: "mugshots",
    title: "Mugshots",
    cover: "/naomi-images/mugshots-with-imatination.jpeg",
    images: [
      "/naomi-images/mugshots-with-imatination.jpeg",
      "/naomi-images/mugshots-with-imatination-2.jpeg",
      "/naomi-images/mugshots-with-imatination-3.jpeg",
      "/naomi-images/mugshots-with-imatination-4.jpeg",
    ],
  },
  {
    id: "product",
    title: "Product Shoot",
    cover: "/naomi-images/product-shoot-for-laurensandco-3.png",
    images: [
      "/naomi-images/product-shoot-for-shop-for-style-sake.jpg",
      "/naomi-images/product-shoot-for-shop-for-style-sake-2.jpg",
      "/naomi-images/product-shoot-for-laurensandco-2.png",
      "/naomi-images/product-shoot-for-laurensandco-3.png",
    ],
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<BookCategory | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const openBook = (category: BookCategory) => {
    setSelectedCategory(category);
    setCurrentPage(0);
    setDirection(0);
  };

  const closeBook = () => {
    setSelectedCategory(null);
  };

  const paginate = (newDirection: number) => {
    if (!selectedCategory) return;
    const nextItem = currentPage + newDirection;
    if (nextItem >= 0 && nextItem < selectedCategory.images.length) {
      setDirection(newDirection);
      setCurrentPage(nextItem);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section id="portfolio" className="relative w-full bg-[#FDFCF8] py-24 md:py-32 overflow-hidden selection:bg-purple-100">

      {/* Editorial Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-pink-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-shell relative z-10">

        {/* Section Header */}
        <div className="flex flex-col mb-16 md:mb-24 gap-6 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-heading text-[10px] tracking-[0.6em] uppercase text-purple-600/80 font-medium mb-4 block">
              Portfolio
            </span>
            <h2 className="font-heading text-5xl md:text-7xl text-foreground leading-tight">
              The <span className="italic text-pink-500/80">Archival</span> Books
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-zinc-500 text-sm md:text-base font-light italic"
          >
            Select a category to flip through Naomi&apos;s curated visual narratives.
          </motion.p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-12">
          {portfolioCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onClick={() => openBook(category)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-white shadow-sm border border-black/5 group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2 rounded-[1px]">
                <Image
                  src={category.cover}
                  alt={category.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />

                {/* Book Spine Detail */}
                <div className="absolute inset-y-0 left-0 w-1.5 bg-black/10 z-10" />

                {/* Title Overlay */}
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-3 border border-black/5 scale-95 group-hover:scale-100 transition-transform duration-500">
                    <h3 className="font-heading text-xs md:text-sm uppercase tracking-[0.3em] font-medium text-foreground">
                      {category.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Flipbook Viewer Overlay */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-12"
          >
            {/* Close Button */}
            <button
              onClick={closeBook}
              className="absolute top-8 right-8 p-2 text-foreground/40 hover:text-foreground transition-colors"
            >
              <X size={24} strokeWidth={1.5} />
            </button>

            {/* Viewer Brand Info */}
            <div className="absolute top-8 left-8 flex items-center gap-3">
              <BookOpen size={16} className="text-pink-500/80" />
              <span className="font-heading text-[10px] tracking-[0.4em] uppercase text-foreground/60">
                {selectedCategory.title} — Book / 24
              </span>
            </div>

            {/* Flip Container */}
            <div className="relative w-full max-w-4xl aspect-[4/5] md:aspect-[3/4] flex items-center justify-center overflow-hidden">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentPage}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 200, damping: 30 },
                    opacity: { duration: 0.4 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                  className="absolute inset-0 px-4 md:px-0"
                >
                  <div className="relative w-full h-full bg-white shadow-2xl rounded-[1px] overflow-hidden border border-black/5">
                    <Image
                      src={selectedCategory.images[currentPage]}
                      alt={`${selectedCategory.title} image ${currentPage + 1}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 80vw"
                      className="object-contain p-4 md:p-8"
                      priority
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 md:px-8 pointer-events-none z-20">
                <button
                  disabled={currentPage === 0}
                  onClick={() => paginate(-1)}
                  className={`p-3 rounded-full bg-white shadow-lg pointer-events-auto transition-all ${currentPage === 0 ? 'opacity-0 scale-90' : 'opacity-100 hover:scale-110 active:scale-95'}`}
                >
                  <ChevronLeft size={20} strokeWidth={1.5} />
                </button>
                <button
                  disabled={currentPage === selectedCategory.images.length - 1}
                  onClick={() => paginate(1)}
                  className={`p-3 rounded-full bg-white shadow-lg pointer-events-auto transition-all ${currentPage === selectedCategory.images.length - 1 ? 'opacity-0 scale-90' : 'opacity-100 hover:scale-110 active:scale-95'}`}
                >
                  <ChevronRight size={20} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Pagination / Progress */}
            <div className="mt-8 md:mt-12 flex flex-col items-center gap-4">
              <div className="flex gap-2">
                {selectedCategory.images.map((_, i) => (
                  <div
                    key={i}
                    className={`w-1 h-1 rounded-full transition-all duration-500 ${i === currentPage ? 'bg-pink-500 w-4' : 'bg-black/10'}`}
                  />
                ))}
              </div>
              <span className="font-heading text-[10px] tracking-[0.2em] uppercase text-foreground/40">
                Page {currentPage + 1} of {selectedCategory.images.length}
              </span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
