import React from "react";
import SEO from "../components/SEO";
import Hero from "../sections/Hero";
import Manifesto from "../sections/Manifesto";
import StoryPreview from "../sections/StoryPreview";
import FeaturedMenu from "../sections/FeaturedMenu";
import Experience from "../sections/Experience";
import GalleryPreview from "../sections/GalleryPreview";
import Testimonials from "../sections/Testimonials";
import VisitUs from "../sections/VisitUs";
import SocialFeed from "../sections/SocialFeed";
import { CAFE_INFO } from "../data/cafeInfo";

export default function Home() {
  return (
    <>
      <SEO
        title="Good Coffee. Slow Mornings. Better Moments."
        description="Experience Add Café & Roastery in Portland's Arts Quarter. Single-origin micro-lot roasting, sourdough hearth viennoiserie, and tactile sanctuary for slow living."
        canonical="/"
      />

      <main className="w-full">
        {/* Fullscreen 100dvh Hero */}
        <Hero />

        {/* Brand Statement / Manifesto */}
        <Manifesto />

        {/* Our Story Preview */}
        <StoryPreview />

        {/* Featured Menu Selection */}
        <FeaturedMenu />

        {/* Café Atmosphere & Sensory Experience (Dark Contrast) */}
        <Experience />

        {/* Asymmetrical Gallery Preview */}
        <GalleryPreview />

        {/* Elegant Minimal Testimonials */}
        <Testimonials />

        {/* Location & Opening Hours Preview */}
        <VisitUs />

        {/* Instagram / Social Editorial Strip */}
        <SocialFeed />
      </main>
    </>
  );
}

