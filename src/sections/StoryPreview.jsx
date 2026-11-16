import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Button from "../components/Button";

export default function StoryPreview() {
  return (
    <section className="py-24 md:py-36 bg-cafe-surface/40 text-cafe-text relative border-t border-b border-cafe-border/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="font-script text-2xl md:text-3xl text-cafe-accent mb-3 block">
              Slow Sourcing & Roasting Craft
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cafe-primary font-normal leading-[1.12]">
              More Than Just a Cup of Coffee.
            </h2>

            <div className="mt-6 sm:mt-8 space-y-4 text-cafe-muted text-base sm:text-lg leading-relaxed font-light">
              <p>
                Coffee is one of the most chemically complex fruits on Earth,
                yielding over eight hundred volatile aromatic compounds. Yet for
                decades, industrial roasting masked these nuances under scorched,
                dark carbon.
              </p>
              <p>
                We take the opposite path. We roast slowly on cast iron drum
                burners, preserving the bright wild jasmine of Ethiopia, the crisp
                pink grapefruit notes of Colombian high-altitude honey lots, and
                the creamy cocoa richness of Antigua.
              </p>
            </div>

            {/* Handwritten note element */}
            <div className="mt-8 p-4 bg-cafe-bg border-l-2 border-cafe-accent inline-block">
              <p className="font-script text-xl sm:text-2xl text-cafe-primary">
                "We don't brew coffee to rush you out the door. We brew coffee so you remember to pause."
              </p>
              <span className="block text-xs uppercase tracking-widest text-cafe-muted mt-2 font-sans font-medium">
                — Marcus Vance, Head Roaster
              </span>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <Button to="/our-story" variant="primary" size="md">
                Read Our Full Story
              </Button>
              <Link
                to="/menu"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-cafe-primary hover:text-cafe-accent transition-colors"
              >
                <span>Browse Single Origins</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Overlapping Asymmetric Photography */}
          <div className="lg:col-span-6 relative mt-8 lg:mt-0">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Primary Large Image */}
              <div className="relative aspect-[4/5] overflow-hidden shadow-xl border-4 border-cafe-bg">
                <img
                  src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=85&w=1200"
                  alt="Barista executing precise pour-over coffee using Chemex and gooseneck kettle"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase tracking-widest block text-cafe-accent">
                    Precision Extraction
                  </span>
                  <span className="font-serif text-base sm:text-lg">
                    93°C Mountain Spring Mineral Water
                  </span>
                </div>
              </div>

              {/* Secondary Overlapping Floating Detail Card */}
              <div className="hidden sm:block absolute -bottom-8 -left-8 sm:-left-12 w-48 sm:w-60 aspect-square overflow-hidden shadow-2xl border-4 border-cafe-bg bg-cafe-bg">
                <img
                  src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=85&w=800"
                  alt="Golden flaky croissants fresh from the baker's oven"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-cafe-dark/85 backdrop-blur-xs text-cafe-bg p-2 text-center">
                  <span className="text-[9px] uppercase tracking-widest font-sans block text-cafe-accent">
                    Dawn Bake
                  </span>
                  <span className="font-serif text-xs block">
                    72-Hour Lamination
                  </span>
                </div>
              </div>

              {/* Decorative stamp element */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border border-cafe-accent/40 bg-cafe-bg/90 backdrop-blur-xs flex items-center justify-center p-2 text-center shadow-md rotate-12">
                <span className="text-[10px] uppercase tracking-wider font-mono text-cafe-primary font-bold">
                  Single Origin • Direct Trade
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

