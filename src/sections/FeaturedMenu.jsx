import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { MENU_ITEMS } from "../data/menuData";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";

const TABS = [
  { id: "all", label: "Curated Highlights" },
  { id: "espresso-craft", label: "Espresso & Pour-Over" },
  { id: "signatures", label: "House Signatures" },
  { id: "cold-brew", label: "Cold Brews" },
  { id: "bakery", label: "Artisanal Bakery" },
  { id: "kitchen", label: "Morning Kitchen" },
];

export default function FeaturedMenu() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredItems =
    activeTab === "all"
      ? MENU_ITEMS.filter((item) => item.featured).slice(0, 6)
      : MENU_ITEMS.filter((item) => item.category === activeTab).slice(0, 6);

  return (
    <section className="py-24 md:py-36 bg-cafe-bg text-cafe-text relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-cafe-border">
          <SectionHeading
            eyebrow="Crafted With Integrity"
            title="Featured From Our Kitchen & Bar"
            subtitle="From micro-lot Ethiopia pour-overs to 72-hour wild sourdough pastries, each selection reflects pure terroir and patient technique."
          />
          <div className="shrink-0">
            <Button to="/menu" variant="primary" size="md">
              <span>View Full Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-xs uppercase tracking-widest px-4 py-2 whitespace-nowrap transition-all duration-300 border ${
                activeTab === tab.id
                  ? "bg-cafe-primary text-cafe-bg border-cafe-primary shadow-xs"
                  : "bg-transparent text-cafe-muted border-cafe-border hover:border-cafe-primary hover:text-cafe-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Editorial Menu Listing (not generic cards!) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-10">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group flex gap-5 sm:gap-6 items-start pb-8 border-b border-cafe-border/70 hover:border-cafe-accent transition-colors duration-300"
            >
              {/* Product Thumbnail with hover effect */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 overflow-hidden bg-cafe-surface border border-cafe-border relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Product Editorial Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-lg sm:text-xl text-cafe-primary font-normal group-hover:text-cafe-accent transition-colors truncate">
                    {item.name}
                  </h3>
                  <span className="font-serif text-lg font-medium text-cafe-primary shrink-0">
                    {item.price}
                  </span>
                </div>

                {/* Origin or Bean lot */}
                {item.origin && (
                  <span className="text-[11px] uppercase tracking-wider text-cafe-accent/90 block mt-0.5 font-medium">
                    {item.origin}
                  </span>
                )}

                <p className="mt-2 text-xs sm:text-sm text-cafe-muted leading-relaxed font-light line-clamp-2">
                  {item.description}
                </p>

                {/* Dietary badges */}
                {item.dietary && item.dietary.length > 0 && (
                  <div className="mt-2.5 flex items-center gap-2">
                    {item.dietary.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-cafe-surface text-cafe-text font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-16 p-8 sm:p-10 bg-cafe-surface/60 border border-cafe-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-cafe-primary text-cafe-bg flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-cafe-accent" />
            </div>
            <div>
              <h4 className="font-serif text-xl text-cafe-primary font-normal">
                Take Home Freshly Roasted Micro-Lots
              </h4>
              <p className="text-xs sm:text-sm text-cafe-muted font-light mt-0.5">
                Every whole bean bag is roasted within 48 hours and includes harvest coordinates & tasting wheel notes.
              </p>
            </div>
          </div>
          <Link
            to="/menu"
            className="text-xs uppercase tracking-widest font-semibold px-6 py-3 bg-cafe-primary text-cafe-bg hover:bg-cafe-dark transition-colors shrink-0 whitespace-nowrap"
          >
            Explore All 24 Offerings
          </Link>
        </div>
      </div>
    </section>
  );
}

