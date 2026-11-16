import React from "react";
import { Link } from "react-router-dom";
import { Volume2, Sun, Sparkles, Compass } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";

export default function Experience() {
  const sensoryDetails = [
    {
      icon: Sun,
      title: "Natural Morning Illumination",
      desc: "Architecturally positioned skylights bathe our white oak communal tables in soft, diffuse light.",
    },
    {
      icon: Volume2,
      title: "Warm Acoustic Sanctuary",
      desc: "Felted wool ceiling baffles soften the room, allowing gentle conversations and vintage jazz vinyl to breathe.",
    },
    {
      icon: Sparkles,
      title: "Bespoke Ceramic Tactility",
      desc: "Every mug and pour-over dripper is hand-thrown by Oregon ceramicists to preserve ideal heat dissipation.",
    },
    {
      icon: Compass,
      title: "The Garden Courtyard",
      desc: "An outdoor brick terrace framed by olive trees and heirloom herbs for open-air morning contemplation.",
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-cafe-dark text-cafe-bg relative overflow-hidden border-t border-b border-cafe-border-dark">
      {/* Subtle texture */}
      <div className="absolute inset-0 texture-paper opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Top Heading */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <SectionHeading
            theme="dark"
            eyebrow="The Sensory Atmosphere"
            title="A Space Designed to Make Time Stand Still"
            subtitle="We didn't design Add Café merely to sell coffee. We designed a sanctuary where morning thoughts can wander, books can be opened, and human connections find honest soil."
          />
        </div>

        {/* Asymmetrical Editorial Composition with Overlapping Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Overlapping Photos */}
          <div className="lg:col-span-7 relative">
            {/* Primary Large Interior Image */}
            <div className="relative aspect-[16/10] overflow-hidden shadow-2xl border border-cafe-bg/20">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=85&w=1400"
                alt="Café interior bathed in soft warm morning light with minimal wooden tables and linen"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-6 text-xs uppercase tracking-widest text-cafe-accent font-sans">
                The Main Salon • 8:30 AM
              </div>
            </div>

            {/* Overlapping Secondary Portrait Image */}
            <div className="hidden sm:block absolute -bottom-10 -right-6 sm:-right-8 w-52 sm:w-64 aspect-[3/4] overflow-hidden shadow-2xl border-4 border-cafe-dark bg-cafe-dark">
              <img
                src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=85&w=800"
                alt="Courtyard garden with brick patio and foliage"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-black/75 p-2 text-center text-xs text-cafe-bg">
                <span className="font-script text-base text-cafe-accent block">
                  Outdoor Garden Patio
                </span>
                <span className="text-[10px] tracking-widest uppercase opacity-75">
                  Olive Trees & Herbs
                </span>
              </div>
            </div>
          </div>

          {/* Right: Sensory Details List */}
          <div className="lg:col-span-5 space-y-8 pt-6 lg:pt-0">
            {sensoryDetails.map((detail, idx) => {
              const Icon = detail.icon;
              return (
                <div key={idx} className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-full bg-cafe-dark-surface border border-cafe-border-dark flex items-center justify-center text-cafe-accent shrink-0 group-hover:bg-cafe-accent group-hover:text-cafe-bg transition-colors duration-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl text-cafe-bg font-normal group-hover:text-cafe-accent transition-colors">
                      {detail.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-cafe-surface/70 leading-relaxed font-light">
                      {detail.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="pt-4 flex items-center gap-4">
              <Button to="/reservations" variant="accent" size="md">
                Reserve a Table
              </Button>
              <Button to="/gallery" variant="lightOutline" size="md">
                View Photo Journal
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
