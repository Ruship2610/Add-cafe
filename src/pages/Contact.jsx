import React, { useState } from "react";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  Navigation,
  Compass,
} from "lucide-react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import Button from "../components/Button";
import { CAFE_INFO } from "../data/cafeInfo";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState("");

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = "Please enter your full name";
    } else if (formData.name.trim().length < 2) {
      errs.name = "Name must be at least 2 characters long";
    }

    if (!formData.email.trim()) {
      errs.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      errs.message = "Please write your message";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long";
    }

    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Realistic simulation of sending request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      const code = "ADC-" + Math.floor(100000 + Math.random() * 900000);
      setReferenceCode(code);
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      subject: "general",
      message: "",
    });
    setErrors({});
    setSubmitted(false);
    setReferenceCode("");
  };

  return (
    <>
      <SEO
        title="Contact & Location"
        description="Visit Add Café & Roastery in Portland's Arts Quarter. Find our opening hours, address, phone, directions, and send our team a message."
        canonical="/contact"
      />

      <main className="w-full">
        {/* Editorial Page Hero */}
        <PageHero
          eyebrow="Visit & Connect"
          title="Our Doors Are Open"
          subtitle="Whether dropping in for a morning pour-over, planning a private evening cupping, or reaching out to say hello, we look forward to welcoming you."
          breadcrumbCurrent="Contact & Location"
          bgImage="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=85&w=1800"
        />

        {/* Contact Info & Interactive Form Grid */}
        <section className="py-20 md:py-28 bg-cafe-bg text-cafe-text">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Contact Details & Hours (5 cols) */}
              <div className="lg:col-span-5 space-y-10">
                <div>
                  <span className="font-script text-2xl text-cafe-accent block mb-2">
                    In Person
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-cafe-primary font-normal">
                    Where to Find Us
                  </h2>
                  <p className="mt-4 text-base text-cafe-muted font-light leading-relaxed">
                    Set inside a restored 1920s brick warehouse in the heart of
                    Portland’s historic Arts Quarter, steps away from galleries and
                    bookstores.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="p-6 bg-cafe-surface/60 border border-cafe-border flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-cafe-bg flex items-center justify-center text-cafe-accent shrink-0 shadow-2xs">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-cafe-primary font-medium">
                        Physical Address
                      </h3>
                      <p className="text-sm text-cafe-muted mt-1 leading-relaxed">
                        {CAFE_INFO.address.street}
                        <br />
                        {CAFE_INFO.address.city}, {CAFE_INFO.address.state}{" "}
                        {CAFE_INFO.address.zip}
                      </p>
                      <a
                        href={CAFE_INFO.address.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-cafe-accent font-semibold hover:underline mt-3"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        <span>Open in Google Maps</span>
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="p-6 bg-cafe-surface/60 border border-cafe-border flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-cafe-bg flex items-center justify-center text-cafe-accent shrink-0 shadow-2xs">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="w-full">
                      <h3 className="font-serif text-lg text-cafe-primary font-medium mb-3">
                        Hours of Hospitality
                      </h3>
                      <div className="space-y-2 text-xs sm:text-sm text-cafe-muted">
                        {CAFE_INFO.hours.map((h, i) => (
                          <div
                            key={i}
                            className="flex flex-col sm:flex-row sm:justify-between pb-1.5 border-b border-cafe-border/50 last:border-none"
                          >
                            <span className="font-medium text-cafe-text">
                              {h.days}
                            </span>
                            <div className="text-right">
                              <div>{h.time}</div>
                              <div className="text-[11px] text-cafe-muted/70">
                                {h.kitchen}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Phone & Direct Inquiries */}
                  <div className="p-6 bg-cafe-surface/60 border border-cafe-border flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-cafe-bg flex items-center justify-center text-cafe-accent shrink-0 shadow-2xs">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-cafe-primary font-medium">
                        Direct Lines
                      </h3>
                      <div className="mt-2 space-y-1 text-sm text-cafe-muted">
                        <div>
                          Phone:{" "}
                          <a
                            href={`tel:${CAFE_INFO.contact.phone}`}
                            className="text-cafe-primary font-medium hover:text-cafe-accent"
                          >
                            {CAFE_INFO.contact.phoneDisplay}
                          </a>
                        </div>
                        <div>
                          General:{" "}
                          <a
                            href={`mailto:${CAFE_INFO.contact.email}`}
                            className="text-cafe-primary hover:text-cafe-accent"
                          >
                            {CAFE_INFO.contact.email}
                          </a>
                        </div>
                        <div>
                          Tables:{" "}
                          <a
                            href={`mailto:${CAFE_INFO.contact.reservationsEmail}`}
                            className="text-cafe-primary hover:text-cafe-accent"
                          >
                            {CAFE_INFO.contact.reservationsEmail}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form (7 cols) */}
              <div className="lg:col-span-7 bg-cafe-surface p-8 sm:p-12 border-2 border-cafe-border shadow-lg">
                <span className="font-script text-2xl text-cafe-accent block mb-2">
                  Send a Dispatch
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-cafe-primary font-normal">
                  Write to the Roastery
                </h2>
                <p className="mt-2 text-sm text-cafe-muted font-light leading-relaxed">
                  Have a question about wholesale coffee beans, catering, or
                  private event bookings? Leave a message below.
                </p>

                {submitted ? (
                  <div className="mt-8 p-8 bg-cafe-bg border border-cafe-secondary/30 text-center animate-in fade-in">
                    <div className="w-14 h-14 rounded-full bg-cafe-surface text-cafe-primary flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-cafe-secondary" />
                    </div>
                    <h3 className="font-serif text-2xl text-cafe-primary">
                      Thank You, {formData.name}
                    </h3>
                    <p className="text-sm text-cafe-muted mt-2 max-w-md mx-auto leading-relaxed">
                      Your message has been received by our hospitality team.
                      We typically respond within 24 hours during business days.
                    </p>
                    <div className="mt-4 p-3 bg-cafe-surface text-xs font-mono text-cafe-primary inline-block">
                      Reference Number: {referenceCode}
                    </div>
                    <div className="mt-6">
                      <Button onClick={handleReset} variant="secondary" size="sm">
                        Send Another Message
                      </Button>
                    </div>
                    <p className="text-[11px] text-cafe-muted/70 mt-4 italic">
                      * Demo form interface: simulated success feedback.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-6" noValidate>
                    {/* Name */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-cafe-primary font-medium mb-2">
                        Full Name <span className="text-cafe-accent">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Julian Chen"
                        className={`w-full px-4 py-3 bg-cafe-bg border text-cafe-text text-sm focus:outline-none transition-colors ${
                          errors.name
                            ? "border-red-500 focus:border-red-600"
                            : "border-cafe-border focus:border-cafe-primary"
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-cafe-primary font-medium mb-2">
                        Email Address <span className="text-cafe-accent">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="julian@example.com"
                        className={`w-full px-4 py-3 bg-cafe-bg border text-cafe-text text-sm focus:outline-none transition-colors ${
                          errors.email
                            ? "border-red-500 focus:border-red-600"
                            : "border-cafe-border focus:border-cafe-primary"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-cafe-primary font-medium mb-2">
                        Nature of Inquiry
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-cafe-bg border border-cafe-border text-cafe-text text-sm focus:outline-none focus:border-cafe-primary transition-colors cursor-pointer"
                      >
                        <option value="general">General Visiting Inquiry</option>
                        <option value="reservations">Table Booking Question</option>
                        <option value="private-events">Private Evening Event & Salon</option>
                        <option value="wholesale">Wholesale Roasted Coffee Beans</option>
                        <option value="press">Press & Media Feature</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-cafe-primary font-medium mb-2">
                        Your Message <span className="text-cafe-accent">*</span>
                      </label>
                      <textarea
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tell us about your visit, event inquiry, or thoughts..."
                        className={`w-full px-4 py-3 bg-cafe-bg border text-cafe-text text-sm focus:outline-none transition-colors ${
                          errors.message
                            ? "border-red-500 focus:border-red-600"
                            : "border-cafe-border focus:border-cafe-primary"
                        }`}
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        variant="primary"
                        size="lg"
                        className="w-full"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                            <span>Transmitting Message...</span>
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send className="w-4 h-4" />
                            <span>Send Message</span>
                          </span>
                        )}
                      </Button>
                      <p className="text-[11px] text-cafe-muted text-center mt-3 font-light">
                        This is a client-side frontend demo form. No messages are sent to an unconfigured mail server.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Embedded Map Section / Stylish Cartography Placeholder */}
        <section className="py-16 bg-cafe-surface/40 border-t border-cafe-border">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="relative overflow-hidden bg-cafe-dark text-cafe-bg border border-cafe-border-dark p-8 sm:p-12 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-2 text-cafe-accent text-xs uppercase tracking-widest font-mono mb-2">
                    <Compass className="w-4 h-4" />
                    <span>Coordinates 45°31'23.2"N 122°40'35.4"W</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-cafe-bg">
                    Nestled in the Historic Victoria Arts Quarter
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-cafe-surface/80 font-light max-w-2xl leading-relaxed">
                    Accessible via the Central Streetcar Line (Heritage Station stop).
                    Designated bicycle stands are situated inside our private gated
                    courtyard. Ample 2-hour street parking along Heritage Lane.
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                  <a
                    href={CAFE_INFO.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-semibold px-6 py-4 bg-cafe-accent text-cafe-bg hover:opacity-95 transition-colors"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Navigate With Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <Button to="/reservations" variant="lightOutline" size="md">
                    Reserve a Morning Table
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
