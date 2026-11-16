import React from "react";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "../components/SocialIcons";
import { CAFE_INFO } from "../data/cafeInfo";

const INSTAGRAM_SHOTS = [
  {
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600",
    caption: "The morning pour. Ethiopia Yirgacheffe on Chemex.",
  },
  {
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
    caption: "Flaky wild thyme croissants pulled at 5:15 AM.",
  },
  {
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=600",
    caption: "Velvet flat whites in Sarah Lee hand-thrown ceramics.",
  },
  {
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=600",
    caption: "Sunlight slanting across our quiet library corner.",
  },
  {
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=600",
    caption: "Whisked to order ceremonial Uji matcha clouds.",
  },
  {
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=80&w=600",
    caption: "18-hour Kyoto slow tower cold brew in low glasses.",
  },
];

export default function SocialFeed() {
  return (
    <section className="py-20 bg-cafe-surface/50 border-t border-cafe-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Top Line */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="font-script text-2xl text-cafe-accent block mb-1">
              Follow Our Daily Rhythm
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-cafe-primary font-normal">
              On the Gram: @addcaferoasters
            </h3>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-cafe-primary hover:text-cafe-accent transition-colors"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Visit Instagram Feed</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 6 Grid Images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_SHOTS.map((item, idx) => (
            <a
              key={idx}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-cafe-surface block"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3 text-center">
                <InstagramIcon className="w-6 h-6 text-white" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
