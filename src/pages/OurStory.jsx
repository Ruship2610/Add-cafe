import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, MapPin, Award, Heart, ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import Button from "../components/Button";
import { STORY_DATA } from "../data/storyData";
import { CAFE_INFO } from "../data/cafeInfo";

export default function OurStory() {
  return (
    <>
      <SEO
        title="Our Story & Philosophy"
        description="Discover the story behind Add Café & Roastery. Direct-trade coffee sourcing, small-batch cast iron roasting, and an architectural space designed for slow mornings."
        canonical="/our-story"
      />

      <main className="w-full">
        {/* Editorial Page Hero */}
        <PageHero
          eyebrow="Our Story & Philosophy"
          title="The Quiet Craft of Intentional Coffee"
          subtitle="Born in 2021 from a conviction that coffee should be an unhurried ritual, not a rushed daily utility."
          breadcrumbCurrent="Our Story"
          bgImage="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=85&w=1800"
        />

        {/* Editorial Manifesto Section */}
        <section className="py-20 md:py-28 bg-cafe-bg text-cafe-text">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="border-l-2 border-cafe-accent pl-6 sm:pl-10">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cafe-primary font-normal leading-tight">
                "We built Add Café as a physical pause button in an era where everyone is in a frantic rush to nowhere."
              </h2>
              <span className="font-script text-xl sm:text-2xl text-cafe-accent block mt-4">
                The Founding Journal, 2021
              </span>
            </div>

            <div className="mt-12 space-y-6 text-base sm:text-lg text-cafe-muted leading-relaxed font-light">
              <p>{STORY_DATA.manifesto[0]}</p>
              <p>{STORY_DATA.manifesto[1]}</p>
            </div>
          </div>
        </section>

        {/* Photographic Essay & Philosophy Pillars (Asymmetrical Alternating) */}
        <section className="py-20 md:py-28 bg-cafe-surface/40 border-t border-b border-cafe-border">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-24">
            {STORY_DATA.pillars.map((pillar, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={pillar.number}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Photo Column (7 cols) */}
                  <div
                    className={`lg:col-span-7 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative aspect-[16/11] overflow-hidden bg-cafe-surface border-4 border-cafe-bg shadow-xl">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 bg-cafe-primary text-cafe-bg text-xs font-mono px-3 py-1 tracking-widest uppercase">
                        Chapter {pillar.number}
                      </div>
                    </div>
                  </div>

                  {/* Narrative Column (5 cols) */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <span className="text-xs uppercase tracking-[0.25em] text-cafe-accent font-semibold block mb-2">
                      {pillar.subtitle}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl text-cafe-primary font-normal leading-tight">
                      {pillar.title}
                    </h3>
                    <p className="mt-6 text-base sm:text-lg text-cafe-muted font-light leading-relaxed">
                      {pillar.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Coffee Sourcing & Farm Partners (Editorial Contrast Dark Section) */}
        <section className="py-24 md:py-32 bg-cafe-dark text-cafe-bg border-b border-cafe-border-dark">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <span className="font-script text-2xl text-cafe-accent block mb-2">
                Origin Transparency
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cafe-bg font-normal leading-tight">
                The Farmers Behind the Harvest
              </h2>
              <p className="mt-4 text-cafe-surface/80 text-base sm:text-lg font-light leading-relaxed">
                Great coffee begins 5,000 miles away in fertile volcanic soil. We
                maintain direct, multi-year relationships with family farms and
                indigenous cooperatives who prioritize environmental stewardship.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {STORY_DATA.farmers.map((farm, index) => (
                <div
                  key={index}
                  className="p-8 bg-cafe-dark-surface border border-cafe-border-dark flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 text-cafe-accent text-xs uppercase tracking-widest mb-4">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{farm.region}</span>
                    </div>

                    <h3 className="font-serif text-2xl text-cafe-bg font-normal mb-1">
                      {farm.name}
                    </h3>

                    <div className="space-y-1.5 text-xs text-cafe-surface/70 mt-4 pt-4 border-t border-cafe-bg/10 font-mono">
                      <div>Variety: {farm.variety}</div>
                      <div>Altitude: {farm.altitude}</div>
                      <div className="text-cafe-accent">Notes: {farm.notes}</div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-cafe-bg/10 text-xs text-cafe-accent font-sans uppercase tracking-widest">
                    Direct-Trade Partnered
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Guild / Team Behind Add Café */}
        <section className="py-24 md:py-32 bg-cafe-bg text-cafe-text">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-script text-2xl text-cafe-accent block mb-2">
                The Artisans
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cafe-primary font-normal">
                Hands That Craft Every Sip
              </h2>
              <p className="mt-4 text-cafe-muted text-base sm:text-lg font-light">
                Roasters, pastry chefs, and hospitality curators united by an
                obsession with pure flavor and warmth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {STORY_DATA.team.map((member, index) => (
                <div key={index} className="group">
                  <div className="relative aspect-[3/4] overflow-hidden bg-cafe-surface border border-cafe-border mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-serif text-2xl text-cafe-primary font-normal group-hover:text-cafe-accent transition-colors">
                    {member.name}
                  </h3>
                  <span className="text-xs uppercase tracking-widest text-cafe-accent block font-medium mt-1">
                    {member.role}
                  </span>
                  <p className="mt-3 text-sm text-cafe-muted leading-relaxed font-light">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dedicated Story Page CTA */}
        <section className="py-20 bg-cafe-surface border-t border-cafe-border text-center">
          <div className="max-w-3xl mx-auto px-6 sm:px-8">
            <span className="font-script text-3xl text-cafe-accent block mb-2">
              Experience It In Person
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cafe-primary font-normal">
              Come Sit With Us This Morning
            </h2>
            <p className="mt-4 text-base sm:text-lg text-cafe-muted font-light max-w-xl mx-auto">
              Our doors open at 6:30 AM with fresh viennoiserie hot from the oven
              and warm porcelain waiting for you.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button to="/menu" variant="primary" size="lg">
                Explore The Menu
              </Button>
              <Button to="/reservations" variant="secondary" size="lg">
                Find a Table
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
