"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const contactDetails = [
    {
      id: "email",
      label: "Email",
      value: "Okohnaomi153@gmail.com",
      href: "mailto:Okohnaomi153@gmail.com",
      icon: <Mail size={16} strokeWidth={1.5} />,
    },
    {
      id: "instagram",
      label: "Instagram",
      value: "@na0miverse",
      href: "https://instagram.com/na0miverse",
      icon: <MessageCircle size={16} strokeWidth={1.5} />,
    },
    {
      id: "location",
      label: "Location",
      value: "Lagos, Nigeria",
      href: "#",
      icon: <MapPin size={16} strokeWidth={1.5} />,
      isStatic: true,
    },
  ];

  return (
    <section id="contact" className="relative w-full py-24 md:py-40 bg-[#FDFCF8] overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-pink-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-shell relative z-10 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <span className="font-heading text-[10px] tracking-[0.6em] uppercase text-purple-600/80 font-medium mb-8 block">
              Contact
            </span>
            <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tighter text-foreground mb-8">
              Let’s create something <span className="italic text-pink-500/80">striking.</span>
            </h2>
            <p className="text-zinc-500 text-lg md:text-xl font-light max-w-xl mx-auto">
              For bookings, collaborations, and creative inquiries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-20">
            {contactDetails.map((detail, index) => (
              <motion.div
                key={detail.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + (index * 0.1) }}
                className="flex items-center justify-center"
              >
                {detail.isStatic ? (
                  <div className="flex flex-col items-center group">
                    <div className="text-zinc-300 mb-4 group-hover:text-pink-500/80 transition-colors duration-500">
                      {detail.icon}
                    </div>
                    <span className="text-[10px] tracking-[0.4em] uppercase text-zinc-400 mb-2 font-medium text-center">
                      {detail.label}
                    </span>
                    <span className="text-base md:text-lg font-medium text-foreground text-center">
                      {detail.value}
                    </span>
                  </div>
                ) : (
                  <Link 
                    href={detail.href}
                    target={detail.id === "instagram" ? "_blank" : undefined}
                    rel={detail.id === "instagram" ? "noopener noreferrer" : undefined}
                    className="flex flex-col items-center group"
                  >
                    <div className="text-zinc-300 mb-4 group-hover:text-purple-500/80 transition-colors duration-500">
                      {detail.icon}
                    </div>
                    <span className="text-[10px] tracking-[0.4em] uppercase text-zinc-400 mb-2 font-medium text-center">
                      {detail.label}
                    </span>
                    <div className="flex items-center gap-2 border-b border-transparent group-hover:border-foreground/20 pb-1 transition-all duration-500">
                      <span className="text-base md:text-lg font-medium text-foreground">
                        {detail.value}
                      </span>
                      <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                    </div>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
