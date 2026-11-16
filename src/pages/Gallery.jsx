import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2, Camera, MapPin } from "lucide-react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from "../data/galleryData";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  // Filter items
  const filteredGallery =
    selectedCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeLightboxIndex === null) return;
      if (e.key === "Escape") {
        setActiveLightboxIndex(null);
      } else if (e.key === "ArrowLeft") {
        setActiveLightboxIndex((prev) =>
          prev === 0 ? filteredGallery.length - 1 : prev - 1
        );
      } else if (e.key === "ArrowRight") {
        setActiveLightboxIndex((prev) =>
          prev === filteredGallery.length - 1 ? 0 : prev + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, filteredGallery.length]);

  // Lock body scroll when lightbox is active
  useEffect(() => {
    if (activeLightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeLightboxIndex]);

  const activePhoto =
    activeLightboxIndex !== null ? filteredGallery[activeLightboxIndex] : null;

  return (
    <>
      <SEO
        title="Visual Journal & Spaces"
        description="A photographic exploration of Add Café: morning light, single-origin pour-overs, handmade ceramics, artisanal viennoiserie, and slow community living."
        canonical="/gallery"
      />

      <main className="w-full">
        {/* Editorial Page Hero */}
        <PageHero
          eyebrow="The Visual Journal"
          title="Spaces, Rituals & Fleeting Light"
          subtitle="A photographic tribute to the unhurried craft of coffee, the warmth of timber and linen, and the quiet beauty of everyday mornings."
          breadcrumbCurrent="Gallery"
          bgImage="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=85&w=1800"
        />

        {/* Category Filters Bar */}
        <section className="py-8 bg-cafe-surface/40 border-b border-cafe-border sticky top-[68px] z-30 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between gap-4 overflow-x-auto scrollbar-none">
            <div className="flex items-center gap-2">
              {GALLERY_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setActiveLightboxIndex(null);
                  }}
                  className={`text-xs uppercase tracking-widest px-4 py-2.5 whitespace-nowrap transition-all duration-300 font-medium cursor-pointer ${selectedCategory === cat.id
                    ? "bg-cafe-primary text-cafe-bg shadow-xs"
                    : "bg-cafe-bg text-cafe-muted hover:text-cafe-primary border border-cafe-border"
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <span className="text-xs text-cafe-muted uppercase tracking-widest hidden md:inline">
              {filteredGallery.length} Photographs
            </span>
          </div>
        </section>

        {/* Asymmetrical Masonry-Style Gallery Grid */}
        <section className="py-16 md:py-24 bg-cafe-bg text-cafe-text">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-lg:grid max-md:grid-cols-1 max-lg:grid-cols-2 lg:columns-3  gap-6 sm:gap-8 items-start">
              {filteredGallery.map((item, index) => {
                // Vary aspect ratios intentionally for editorial composition
                const aspectClasses = {
                  portrait: "aspect-[3/4]",
                  landscape: "aspect-[16/11]",
                  square: "aspect-square",
                  wide: "aspect-[16/9]",
                };
                const aspect = aspectClasses[item.aspect] || "aspect-[4/3]";

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveLightboxIndex(index)}
                    className="group max-lg:flex max-lg:flex-col max-lg:h-full mb-6 cursor-pointer relative overflow-hidden bg-cafe-surface border border-cafe-border shadow-xs hover:shadow-xl transition-all duration-500"
                  >
                    <div className={`w-full ${aspect} max-lg:flex-1 overflow-hidden relative`}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                        loading="lazy"
                      />

                      {/* Editorial Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                        <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-cafe-accent font-mono mb-1">
                          <MapPin className="w-3 h-3" />
                          <span>{item.location}</span>
                        </div>
                        <h3 className="font-serif text-xl font-normal leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs text-cafe-surface/80 mt-1 line-clamp-2 font-light">
                          {item.caption}
                        </p>

                        <div className="mt-4 flex items-center justify-between pt-2 border-t border-white/20 text-[10px] uppercase tracking-wider text-white/70">
                          <span>Click to expand</span>
                          <Maximize2 className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>

                    {/* Minimalist Bottom Caption Card */}
                    <div className="p-4 bg-cafe-bg border-t border-cafe-border flex items-baseline justify-between">
                      <span className="font-serif text-base text-cafe-primary font-normal truncate">
                        {item.title}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-cafe-muted shrink-0 ml-2">
                        {item.year}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Interactive Fullscreen Lightbox Modal */}
        {activePhoto && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={activePhoto.title}
            className="fixed inset-0 z-50 bg-cafe-dark/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200"
            onClick={() => setActiveLightboxIndex(null)}
          >
            {/* Top Lightbox Bar */}
            <div
              className="flex items-center justify-between text-white pb-4 border-b border-white/15"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="font-serif text-lg sm:text-xl text-cafe-accent">
                  {activePhoto.title}
                </span>
                <span className="text-xs text-white/60 font-mono">
                  ({activeLightboxIndex + 1} / {filteredGallery.length})
                </span>
              </div>

              <button
                type="button"
                onClick={() => setActiveLightboxIndex(null)}
                aria-label="Close Lightbox"
                className="p-2 text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Middle: Image & Navigation Controls */}
            <div
              className="relative flex-1 flex items-center justify-center p-2 sm:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Previous Button */}
              <button
                type="button"
                onClick={() =>
                  setActiveLightboxIndex((prev) =>
                    prev === 0 ? filteredGallery.length - 1 : prev - 1
                  )
                }
                aria-label="Previous image"
                className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors focus:outline-none cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Image */}
              <div className="max-h-[75vh] max-w-5xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="max-h-[75vh] w-auto object-contain mx-auto"
                />
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={() =>
                  setActiveLightboxIndex((prev) =>
                    prev === filteredGallery.length - 1 ? 0 : prev + 1
                  )
                }
                aria-label="Next image"
                className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors focus:outline-none cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption Bar */}
            <div
              className="pt-4 border-t border-white/15 text-center text-xs sm:text-sm text-cafe-surface/80 font-light max-w-2xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <p>{activePhoto.caption}</p>
              <div className="mt-1 flex items-center justify-center gap-4 text-[11px] text-cafe-accent uppercase tracking-widest font-mono">
                <span>Location: {activePhoto.location}</span>
                <span>•</span>
                <span>Category: {activePhoto.category}</span>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
