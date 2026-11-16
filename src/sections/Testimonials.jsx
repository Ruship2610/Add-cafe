import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data/testimonialsData";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const active = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 md:py-36 bg-cafe-surface/40 text-cafe-text relative border-t border-b border-cafe-border/70">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Subtle decorative icon */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cafe-bg border border-cafe-border text-cafe-accent mb-8 shadow-xs">
          <Quote className="w-5 h-5" />
        </div>

        <span className="font-script text-2xl text-cafe-accent block mb-4">
          Words From Our Guests
        </span>

        {/* Minimal Editorial Quote */}
        <div className="min-h-[160px] flex items-center justify-center">
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-cafe-primary font-normal leading-relaxed italic max-w-3xl">
            "{active.quote}"
          </blockquote>
        </div>

        {/* Author Details */}
        <div className="mt-8 flex flex-col items-center">
          <span className="font-sans font-medium text-sm sm:text-base text-cafe-primary tracking-wide">
            {active.author}
          </span>
          <span className="text-xs uppercase tracking-widest text-cafe-muted mt-1 font-light">
            {active.role} • {active.location}
          </span>
          <span className="text-[10px] text-cafe-muted/60 mt-3 font-mono">
            Sample guest review for editorial presentation
          </span>
        </div>

        {/* Minimal Carousel Controls */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full border border-cafe-border bg-cafe-bg hover:bg-cafe-primary hover:text-cafe-bg hover:border-cafe-primary transition-all duration-300 flex items-center justify-center text-cafe-primary"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1.5 px-3">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-1.5 transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-6 bg-cafe-primary"
                    : "w-2 bg-cafe-border hover:bg-cafe-muted"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full border border-cafe-border bg-cafe-bg hover:bg-cafe-primary hover:text-cafe-bg hover:border-cafe-primary transition-all duration-300 flex items-center justify-center text-cafe-primary"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

