import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Camera } from "lucide-react";
import { GALLERY_ITEMS } from "../data/galleryData";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";

export default function GalleryPreview() {
  // Select 5 varied images for an asymmetric editorial collage
  const previewImages = [
    GALLERY_ITEMS[0], // Main light interior (wide)
    GALLERY_ITEMS[1], // Pour-over detail (portrait)
    GALLERY_ITEMS[4], // Ceramic latte art (portrait)
    GALLERY_ITEMS[2], // Pastry lamination (square)
    GALLERY_ITEMS[5], // Cast-iron roaster (landscape)
  ];

  return (
    <section className="py-24 md:py-36 bg-cafe-bg text-cafe-text relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-cafe-border">
          <SectionHeading
            eyebrow="Visual Journal"
            title="Moments Captured in Stillness"
            subtitle="Light falling on timber, steam rising from fresh extractions, and the quiet beauty of everyday rituals."
          />
          <div className="shrink-0">
            <Button to="/gallery" variant="secondary" size="md">
              <span>View Full Gallery</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Top Left: Large feature image (7 cols) */}
          <div className="md:col-span-7 group relative overflow-hidden aspect-[16/10] bg-cafe-surface border border-cafe-border">
            <Link to="/gallery" className="block w-full h-full">
              <img
                src={previewImages[0].image}
                alt={previewImages[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] uppercase tracking-widest text-cafe-accent">
                  {previewImages[0].location}
                </span>
                <h4 className="font-serif text-xl sm:text-2xl mt-1">
                  {previewImages[0].title}
                </h4>
                <p className="text-xs text-white/80 font-light mt-1 max-w-md line-clamp-1">
                  {previewImages[0].caption}
                </p>
              </div>
            </Link>
          </div>

          {/* Top Right: Portrait detail shot (5 cols) */}
          <div className="md:col-span-5 group relative overflow-hidden aspect-[4/5] bg-cafe-surface border border-cafe-border">
            <Link to="/gallery" className="block w-full h-full">
              <img
                src={previewImages[1].image}
                alt={previewImages[1].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] uppercase tracking-widest text-cafe-accent">
                  {previewImages[1].location}
                </span>
                <h4 className="font-serif text-xl mt-1">
                  {previewImages[1].title}
                </h4>
              </div>
            </Link>
          </div>

          {/* Bottom Row: 3 items (4 cols each) */}
          <div className="md:col-span-4 group relative overflow-hidden aspect-[4/3] bg-cafe-surface border border-cafe-border">
            <Link to="/gallery" className="block w-full h-full">
              <img
                src={previewImages[2].image}
                alt={previewImages[2].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end text-white">
                <h4 className="font-serif text-lg">{previewImages[2].title}</h4>
              </div>
            </Link>
          </div>

          <div className="md:col-span-4 group relative overflow-hidden aspect-[4/3] bg-cafe-surface border border-cafe-border">
            <Link to="/gallery" className="block w-full h-full">
              <img
                src={previewImages[3].image}
                alt={previewImages[3].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end text-white">
                <h4 className="font-serif text-lg">{previewImages[3].title}</h4>
              </div>
            </Link>
          </div>

          <div className="md:col-span-4 group relative overflow-hidden aspect-[4/3] bg-cafe-surface border border-cafe-border">
            <Link to="/gallery" className="block w-full h-full">
              <img
                src={previewImages[4].image}
                alt={previewImages[4].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end text-white">
                <h4 className="font-serif text-lg">{previewImages[4].title}</h4>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

