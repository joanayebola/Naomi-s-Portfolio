"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Bookings() {
  const bookingMethods = [
    {
      id: "email",
      label: "Direct Inquiry",
      title: "Email",
      value: "Okohnaomi153@gmail.com",
      href: "mailto:Okohnaomi153@gmail.com",
      icon: <Mail size={20} strokeWidth={1.2} />,
      color: "from-purple-500/20 to-transparent",
    },
    {
      id: "instagram",
      label: "Social Connectivity",
      title: "Instagram DM",
      value: "@na0miverse",
      href: "https://instagram.com/na0miverse",
      icon: <MessageCircle size={20} strokeWidth={1.2} />,
      color: "from-pink-500/20 to-transparent",
    },
  ];

  return (
    <section id="bookings" className="relative w-full py-18 md:py-48 bg-[#050505] text-white overflow-hidden">

      {/* Editorial Decorative Background Elements - Subtle Glare */}
      <div className="absolute top-1/4 -left-1/4 w-[60vw] h-[60vw] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 -right-1/4 w-[60vw] h-[60vw] bg-pink-900/10 rounded-full blur-[160px] pointer-events-none mix-blend-screen" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Narrative Side: Strong Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-10 overflow-hidden">
                <div className="w-12 h-[1px] bg-purple-500/50" />
                <span className="font-heading text-[10px] tracking-[0.8em] uppercase text-purple-400 font-medium whitespace-nowrap">
                  Bookings
                </span>
              </div>

              <h2 className="font-heading text-4xl md:text-6xl xl:text-7xl leading-[1.05] tracking-tight text-white mb-12">
                Available for editorials, <span className="italic font-light text-purple-200/90">campaigns</span>, beauty, and special projects.
              </h2>

              <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                For bookings, collaborations, and creative inquiries, reach out via email or Instagram DM.

              </p>
            </motion.div>
          </div>

          {/* Action Side: Premium Contact Blocks */}
          <div className="lg:col-span-5 flex flex-col gap-6 self-center">
            {bookingMethods.map((method, index) => (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + (index * 0.15), ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={method.href}
                  target={method.id === "instagram" ? "_blank" : undefined}
                  rel={method.id === "instagram" ? "noopener noreferrer" : undefined}
                  className="group relative block w-full outline-none"
                >
                  <div className="relative overflow-hidden p-8 md:p-12 bg-white/[0.02] border border-white/10 transition-all duration-700 hover:border-white/20">

                    {/* Hover Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                    {/* Subtle Top Border Glow */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                    <div className="relative z-10 flex items-start justify-between">
                      <div className="flex flex-col">
                        <span className="text-[9px] tracking-[0.4em] uppercase text-zinc-500 mb-6 font-medium group-hover:text-zinc-300 transition-colors duration-500">
                          {method.label}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-heading tracking-tight text-white mb-2">
                          {method.title}
                        </h3>
                        <p className="text-zinc-400 font-light text-sm md:text-base group-hover:text-white transition-colors duration-500">
                          {method.value}
                        </p>
                      </div>

                      <div className="flex items-center justify-center w-12 h-12 border border-white/10 text-white/40 group-hover:text-white group-hover:border-white/30 transition-all duration-500 rounded-full">
                        <ArrowUpRight size={20} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* Fine Print / Branding */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-4 flex items-center justify-between"
            >

              <div className="flex gap-4">
                <div className="w-1 h-1 rounded-full bg-purple-500" />
                <div className="w-1 h-1 rounded-full bg-pink-500" />
                <div className="w-1 h-1 rounded-full bg-zinc-500" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Vertical Side Label - Desktop Only */}
      <div className="hidden xl:block absolute right-12 top-1/2 -rotate-90 origin-right pointer-events-none">
        <span className="font-heading text-[9px] tracking-[1.5em] uppercase text-white/5 whitespace-nowrap">
          Creative Collaboration / Direct Bookings
        </span>
      </div>
    </section>
  );
}
