import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Compass, Coffee } from "lucide-react";
import Button from "../components/Button";
import heroBanner from "/banner.jpeg";

export default function Hero() {
  const scrollToContent = () => {
    const nextSection = document.getElementById("manifesto-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-[100dvh] min-h-[600px] overflow-hidden flex items-end sm:items-center">
      {/* High-Resolution Cinematic Café Background Photography */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Warm atmospheric café counter with espresso machine, warm hanging pendant lights and natural timber"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow duration-[10000ms]"
          loading="eager"
        />

        {/* Cinematic Multi-layered Dark Vignette & Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-black/25" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 texture-paper opacity-15 pointer-events-none" />
      </div>

      {/* Hero Content - Editorial Left-Aligned Composition */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-24 sm:pb-16 pt-32 sm:pt-24">
        <div className="max-w-3xl">
          {/* Eyebrow / Brand Essence */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-4 sm:mb-6"
          >
            <span className="font-script text-2xl sm:text-3xl text-cafe-accent tracking-normal">
              Slow living & single-origin craft
            </span>
            <span className="hidden sm:inline-block w-12 h-[1px] bg-cafe-accent/40" />
            <span className="hidden sm:inline-block text-[11px] uppercase tracking-[0.25em] text-white/70 font-sans">
              Est. 2021
            </span>
          </motion.div>

          {/* Large Expressive Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-serif font-normal text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-cafe-bg leading-[1.04] tracking-tight"
          >
            Good Coffee.
            <br />
            Slow Mornings.
            <br />
            <span className="italic font-normal text-cafe-accent">
              Better Moments.
            </span>
          </motion.h1>

          {/* Supporting Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-cafe-surface/90 max-w-xl font-light leading-relaxed"
          >
            An independent roastery and kitchen in the Arts Quarter. Small-batch
            single origins, hearth viennoiserie baked at dawn, and an unhurried
            table awaiting your conversation.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-5"
          >
            <Button
              to="/menu"
              variant="accent"
              size="lg"
              className="shadow-xl"
            >
              Explore Our Menu
            </Button>
            <Button
              to="/reservations"
              variant="lightOutline"
              size="lg"
            >
              Visit Our Café
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.button
        type="button"
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        aria-label="Scroll down to explore"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer group"
      >
        <span className="text-[10px] uppercase tracking-[0.24em] font-sans">
          Scroll to Discover
        </span>
        <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1 group-hover:border-white/60 transition-colors">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full bg-cafe-accent"
          />
        </div>
      </motion.button>
    </section>
  );
}
