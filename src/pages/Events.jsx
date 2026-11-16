import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Ticket,
  Users,
  CheckCircle2,
  X,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import Button from "../components/Button";
import { EVENTS_DATA } from "../data/eventsData";

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [bookingName, setBookingName] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (bookingName && bookingEmail) {
      setIsBooked(true);
    }
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setBookingName("");
    setBookingEmail("");
    setIsBooked(false);
  };

  return (
    <>
      <SEO
        title="Events, Cuppings & Gatherings"
        description="Join our Saturday Sensory Coffee Cuppings, Latte Art Masterclasses, and Acoustic Sunday evenings at Add Café & Roastery."
        canonical="/events"
      />

      <main className="w-full">
        {/* Editorial Page Hero */}
        <PageHero
          eyebrow="Community & Learning"
          title="Workshops, Salons & Evenings"
          subtitle="From guided single-origin sensory cuppings to candlelit acoustic vinyl sessions, explore what’s unfolding at our roastery."
          breadcrumbCurrent="Events"
          bgImage="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=85&w=1800"
        />

        {/* Events Grid */}
        <section className="py-20 md:py-28 bg-cafe-bg text-cafe-text">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
              {EVENTS_DATA.map((evt) => (
                <div
                  key={evt.id}
                  className="group bg-cafe-surface border-2 border-cafe-border flex flex-col justify-between overflow-hidden hover:border-cafe-primary transition-all duration-300 shadow-xs hover:shadow-lg"
                >
                  <div>
                    {/* Event Photo */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-cafe-primary">
                      <img
                        src={evt.image}
                        alt={evt.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 bg-cafe-dark/85 backdrop-blur-xs text-cafe-bg text-[10px] uppercase tracking-widest px-3 py-1 font-mono">
                        {evt.category}
                      </div>
                      <div className="absolute bottom-4 right-4 bg-cafe-accent text-cafe-bg text-xs font-mono px-3 py-1 uppercase tracking-wider font-semibold">
                        {evt.price}
                      </div>
                    </div>

                    {/* Event Content */}
                    <div className="p-6 sm:p-8">
                      <div className="flex flex-wrap items-center gap-4 text-xs text-cafe-muted uppercase tracking-wider font-mono mb-3">
                        <span className="flex items-center gap-1.5 text-cafe-accent font-semibold">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{evt.date}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{evt.time}</span>
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl sm:text-3xl text-cafe-primary font-normal group-hover:text-cafe-accent transition-colors">
                        {evt.title}
                      </h3>

                      <p className="mt-3 text-sm text-cafe-muted font-light leading-relaxed">
                        {evt.description}
                      </p>

                      {/* What's included checklist */}
                      <div className="mt-6 pt-6 border-t border-cafe-border/70">
                        <span className="text-[11px] uppercase tracking-widest text-cafe-primary font-medium block mb-2">
                          Experience Includes:
                        </span>
                        <ul className="space-y-1.5 text-xs text-cafe-muted">
                          {evt.includes.map((inc, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-cafe-accent" />
                              <span>{inc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Action */}
                  <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-cafe-border/50 mt-4">
                    <span className="text-xs text-cafe-muted font-mono">
                      {evt.spotsLeft} places remaining
                    </span>
                    <Button
                      onClick={() => setSelectedEvent(evt)}
                      variant="primary"
                      size="sm"
                    >
                      <span>Reserve Spot</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Host Your Own Gathering Callout */}
            <div className="mt-20 p-8 sm:p-12 bg-cafe-dark text-cafe-bg border border-cafe-border-dark flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <span className="font-script text-2xl text-cafe-accent block mb-2">
                  Private Evenings & Gatherings
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-cafe-bg font-normal">
                  Host a Private Salon at Add Café
                </h3>
                <p className="mt-3 text-sm sm:text-base text-cafe-surface/80 font-light leading-relaxed">
                  After 6:30 PM, our main hall, roastery loft, and garden patio
                  are available for private book launches, acoustic performances,
                  and curated dining pop-ups.
                </p>
              </div>
              <div className="shrink-0">
                <Button to="/contact" variant="accent" size="lg">
                  Inquire About Private Hire
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* RSVP Modal */}
        {selectedEvent && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedEvent.title}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
            onClick={closeModal}
          >
            <div
              className="relative w-full max-w-lg bg-cafe-bg border-2 border-cafe-border shadow-2xl p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeModal}
                aria-label="Close modal"
                className="absolute top-4 right-4 text-cafe-muted hover:text-cafe-primary p-2 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {isBooked ? (
                <div className="text-center py-6">
                  <div className="w-14 h-14 rounded-full bg-cafe-surface text-cafe-primary flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-cafe-secondary" />
                  </div>
                  <h3 className="font-serif text-2xl text-cafe-primary">
                    Spot Reserved!
                  </h3>
                  <p className="text-sm text-cafe-muted mt-2 max-w-sm mx-auto leading-relaxed">
                    Thank you, {bookingName}. We’ve registered you for{" "}
                    <strong>{selectedEvent.title}</strong>. A demo confirmation
                    has been logged.
                  </p>
                  <p className="text-xs font-mono text-cafe-accent mt-4">
                    Confirmation Code: EVT-
                    {Math.floor(10000 + Math.random() * 90000)}
                  </p>
                  <div className="mt-6">
                    <Button onClick={closeModal} variant="primary" size="sm">
                      Close Window
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <span className="text-[10px] uppercase tracking-widest text-cafe-accent font-mono block">
                    {selectedEvent.category} • {selectedEvent.price}
                  </span>
                  <h3 className="font-serif text-2xl text-cafe-primary">
                    {selectedEvent.title}
                  </h3>
                  <p className="text-xs text-cafe-muted leading-relaxed font-light">
                    {selectedEvent.date} at {selectedEvent.time}
                  </p>

                  <div className="pt-2 space-y-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-cafe-primary font-medium mb-1">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={bookingName}
                        onChange={(e) => setBookingName(e.target.value)}
                        placeholder="e.g. Maya Patel"
                        className="w-full px-3 py-2 bg-cafe-surface border border-cafe-border text-sm text-cafe-text focus:outline-none focus:border-cafe-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-cafe-primary font-medium mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={bookingEmail}
                        onChange={(e) => setBookingEmail(e.target.value)}
                        placeholder="maya@example.com"
                        className="w-full px-3 py-2 bg-cafe-surface border border-cafe-border text-sm text-cafe-text focus:outline-none focus:border-cafe-primary"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <span className="text-[11px] text-cafe-muted italic">
                      * Demo booking simulation
                    </span>
                    <Button type="submit" variant="primary" size="md">
                      Confirm Spot
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </main>
    </>
  );
}
