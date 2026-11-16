import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Music,
  MapPin,
  Clock,
  Phone,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { InstagramIcon, SpotifyIcon } from "./SocialIcons";
import { CAFE_INFO } from "../data/cafeInfo";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes("@")) {
      setSubscribed(true);
      setNewsletterEmail("");
    }
  };

  return (
    <footer className="bg-cafe-dark text-cafe-bg pt-20 pb-12 border-t border-cafe-border-dark relative overflow-hidden">
      {/* Subtle paper grain */}
      <div className="absolute inset-0 texture-paper opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-cafe-bg/10">
          {/* Brand Manifesto Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link to="/" className="inline-block group focus:outline-none">
                <span className="font-serif tracking-widest text-2xl sm:text-3xl font-bold uppercase text-cafe-bg group-hover:text-cafe-accent transition-colors">
                  {CAFE_INFO.name}
                </span>
                <span className="block text-[10px] uppercase tracking-[0.3em] text-cafe-surface/60 -mt-1 font-sans">
                  Roastery & Artisanal Kitchen
                </span>
              </Link>

              <p className="mt-6 text-cafe-surface/80 text-sm sm:text-base leading-relaxed max-w-md font-light">
                An intentional sanctuary dedicated to single-origin sourcing,
                the slow alchemy of cast-iron roasting, and sourdough baked fresh
                at dawn. Crafted for slow mornings and unhurried conversation.
              </p>

              {/* Newsletter / Roast Drops */}
              <div className="mt-8">
                <span className="text-xs uppercase tracking-widest text-cafe-accent font-medium block mb-2">
                  Micro-Lot Roast Drops & Journal
                </span>
                {subscribed ? (
                  <div className="flex items-center gap-2 text-xs text-cafe-accent bg-cafe-primary/40 border border-cafe-accent/40 py-2.5 px-4 max-w-md">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Welcome to the circle. First harvest dispatch soon.</span>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubscribe}
                    className="flex max-w-md border-b border-cafe-bg/30 focus-within:border-cafe-accent transition-colors pb-1"
                  >
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your email for harvest notes..."
                      required
                      className="bg-transparent text-sm w-full py-2 text-cafe-bg placeholder-cafe-surface/40 focus:outline-none font-light"
                    />
                    <button
                      type="submit"
                      aria-label="Subscribe to newsletter"
                      className="text-cafe-accent hover:text-cafe-bg px-2 transition-colors flex items-center justify-center cursor-pointer"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
                <span className="text-[11px] text-cafe-surface/40 mt-1.5 block">
                  No promotional spam. Only seasonal single-origin releases.
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Column 1 (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-lg text-cafe-bg mb-5 tracking-wide">
              Explore
            </h3>
            <ul className="space-y-3 text-xs uppercase tracking-[0.16em] text-cafe-surface/70">
              <li>
                <Link
                  to="/"
                  className="hover:text-cafe-accent transition-colors block py-0.5"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/our-story"
                  className="hover:text-cafe-accent transition-colors block py-0.5"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="hover:text-cafe-accent transition-colors block py-0.5"
                >
                  Full Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-cafe-accent transition-colors block py-0.5"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="hover:text-cafe-accent transition-colors block py-0.5"
                >
                  Events & Cuppings
                </Link>
              </li>
              <li>
                <Link
                  to="/reservations"
                  className="hover:text-cafe-accent transition-colors block py-0.5 text-cafe-accent"
                >
                  Find a Table
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Column 2 (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-lg text-cafe-bg mb-5 tracking-wide">
              Information
            </h3>
            <ul className="space-y-3 text-xs uppercase tracking-[0.16em] text-cafe-surface/70">
              <li>
                <Link
                  to="/contact"
                  className="hover:text-cafe-accent transition-colors block py-0.5"
                >
                  Contact & Location
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-cafe-accent transition-colors block py-0.5"
                >
                  FAQ & Policies
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-cafe-accent transition-colors block py-0.5"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href={CAFE_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cafe-accent transition-colors block py-0.5 text-cafe-surface/90"
                >
                  Get Directions ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Visit Column (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-lg text-cafe-bg mb-5 tracking-wide">
              Visit Us
            </h3>
            <div className="space-y-4 text-xs text-cafe-surface/80 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cafe-accent shrink-0 mt-0.5" />
                <span>{CAFE_INFO.address.display}</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-cafe-accent shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-cafe-bg">
                    Mon – Thu: 6:30 AM – 5:30 PM
                  </div>
                  <div>Friday: 6:30 AM – 7:00 PM</div>
                  <div>Sat – Sun: 7:30 AM – 7:00 PM</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-cafe-accent shrink-0" />
                <a
                  href={`tel:${CAFE_INFO.contact.phone}`}
                  className="hover:text-cafe-accent transition-colors"
                >
                  {CAFE_INFO.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cafe-accent shrink-0" />
                <a
                  href={`mailto:${CAFE_INFO.contact.email}`}
                  className="hover:text-cafe-accent transition-colors"
                >
                  {CAFE_INFO.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Social Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cafe-surface/50">
          <p>
            © {new Date().getFullYear()} {CAFE_INFO.fullName}. All rights reserved.
            Slow living by design.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center gap-1.5 hover:text-cafe-accent transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
              <span className="text-[11px] uppercase tracking-wider">Instagram</span>
            </a>
            <a
              href="https://spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Spotify Playlist"
              className="flex items-center gap-1.5 hover:text-cafe-accent transition-colors"
            >
              <SpotifyIcon className="w-4 h-4" />
              <span className="text-[11px] uppercase tracking-wider">Soundtrack</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
