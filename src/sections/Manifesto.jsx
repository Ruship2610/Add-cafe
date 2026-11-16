import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Award, HeartHandshake, Flame } from "lucide-react";
import { CAFE_INFO } from "../data/cafeInfo";

export default function Manifesto() {
  const highlights = [
    {
      icon: Award,
      metric: "88+",
      label: "Cup Score Standard",
      desc: "Only the top 3% of global specialty green coffee micro-lots make our roaster.",
    },
    {
      icon: HeartHandshake,
      metric: "100%",
      label: "Direct-Trade Ethos",
      desc: "Guaranteed premium farm-gate prices that support regenerative soil and living wages.",
    },
    {
      icon: Flame,
      metric: "12kg",
      label: "Cast-Iron Drum Batches",
      desc: "Slow acoustic profiling to unlock delicate florals, stone fruits, and chocolate notes.",
    },
    {
      icon: Sparkles,
      metric: "5:00 AM",
      label: "Daily Hearth Bake",
      desc: "72-hour sourdough fermentation and French Normandy butter viennoiserie.",
    },
  ];

  return (
    <section
      id="manifesto-section"
      className="py-24 md:py-36 bg-cafe-bg text-cafe-text relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Brand Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <span className="font-script text-2xl md:text-3xl text-cafe-accent block mb-3">
              Our Manifesto
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cafe-primary leading-tight font-normal">
              A gentle rebellion against the hurried world.
            </h2>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6 text-base sm:text-lg md:text-xl text-cafe-muted font-light leading-relaxed">
            <p>
              We believe a café should never be a conveyor belt. It is one of the
              last truly democratic civic spaces—a place where conversation,
              contemplation, and craft meet over warm ceramic.
            </p>
            <p className="text-cafe-text font-normal">
              At Add Café, every espresso is pulled with deliberate patience. Every
              batch of green beans is tracked to its hillside in Yirgacheffe or Huila.
              And our doors open each morning to give you what our modern lives so
              rarely offer: <span className="italic font-serif text-cafe-primary text-xl md:text-2xl">space to simply be.</span>
            </p>
          </div>
        </div>

        {/* Highlight Grid - Asymmetrical Editorial Layout */}
        <div className="mt-20 pt-16 border-t border-cafe-border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-cafe-surface/40 hover:bg-cafe-surface/80 border border-cafe-border/80 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-3xl sm:text-4xl text-cafe-primary font-normal">
                    {item.metric}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-cafe-bg flex items-center justify-center text-cafe-accent shadow-2xs group-hover:bg-cafe-accent group-hover:text-cafe-bg transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-serif text-lg text-cafe-primary font-semibold mb-2">
                  {item.label}
                </h3>
                <p className="text-xs sm:text-sm text-cafe-muted leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

