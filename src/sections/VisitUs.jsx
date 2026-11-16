import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, Phone, ArrowUpRight, Navigation } from "lucide-react";
import { CAFE_INFO } from "../data/cafeInfo";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";

export default function VisitUs() {
  return (
    <section className="py-24 md:py-36 bg-cafe-bg text-cafe-text relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Hours & Visit Details */}
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Sanctuary in the City"
              title="Join Us for Morning Light & Coffee"
              subtitle="Located in the historic Victoria Quarter, our sunlit roastery and kitchen welcome you seven days a week."
            />

            <div className="mt-10 space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4 pb-6 border-b border-cafe-border">
                <div className="w-10 h-10 rounded-full bg-cafe-surface flex items-center justify-center text-cafe-accent shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-cafe-primary font-medium">
                    Address
                  </h4>
                  <p className="text-sm text-cafe-muted mt-1">
                    {CAFE_INFO.address.display}
                  </p>
                  <a
                    href={CAFE_INFO.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-cafe-accent hover:underline mt-2 font-medium"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 pb-6 border-b border-cafe-border">
                <div className="w-10 h-10 rounded-full bg-cafe-surface flex items-center justify-center text-cafe-accent shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <h4 className="font-serif text-lg text-cafe-primary font-medium mb-2">
                    Roastery & Kitchen Hours
                  </h4>
                  <div className="space-y-1.5 text-xs sm:text-sm text-cafe-muted">
                    {CAFE_INFO.hours.map((h, i) => (
                      <div key={i} className="flex justify-between items-baseline">
                        <span className="font-medium text-cafe-text">{h.days}:</span>
                        <span>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-cafe-surface flex items-center justify-center text-cafe-accent shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-cafe-primary font-medium">
                    Inquiries & Orders
                  </h4>
                  <a
                    href={`tel:${CAFE_INFO.contact.phone}`}
                    className="text-sm text-cafe-primary font-medium hover:text-cafe-accent block mt-1"
                  >
                    {CAFE_INFO.contact.phoneDisplay}
                  </a>
                  <span className="text-xs text-cafe-muted block mt-0.5">
                    {CAFE_INFO.contact.email}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button to="/contact" variant="primary" size="md">
                Contact & Full Directions
              </Button>
              <Button to="/reservations" variant="secondary" size="md">
                Book a Table
              </Button>
            </div>
          </div>

          {/* Right Column: Architectural Photography & Map Card */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden bg-cafe-surface border-2 border-cafe-border p-4 sm:p-6 shadow-xl">
              {/* Photo of the front facade & courtyard */}
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=85&w=1200"
                  alt="Add Café storefront with wooden entrance and warm natural light"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-cafe-dark/85 text-cafe-bg px-3 py-1.5 text-xs font-mono tracking-wider">
                  45.5231° N, 122.6765° W
                </div>
              </div>

              {/* Transit & neighborhood badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <div>
                  <span className="text-xs uppercase tracking-widest text-cafe-accent block font-medium">
                    Transit & Neighborhood
                  </span>
                  <span className="text-xs text-cafe-muted mt-0.5 block font-light">
                    2 blocks from Victoria Streetcar Line • Bicycle parking on patio
                  </span>
                </div>
                <a
                  href={CAFE_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-semibold px-4 py-2.5 bg-cafe-primary text-cafe-bg hover:bg-cafe-dark transition-colors shrink-0"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

