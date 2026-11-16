import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Users,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Info,
  CalendarCheck,
  RotateCcw,
} from "lucide-react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import Button from "../components/Button";
import { CAFE_INFO } from "../data/cafeInfo";

const TIME_SLOTS = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:15 AM",
  "12:30 PM",
  "1:45 PM",
  "3:00 PM",
  "4:30 PM",
];

const SEATING_AREAS = [
  {
    id: "main-salon",
    title: "Main Light Salon",
    desc: "Sunlit white oak banquettes surrounded by soft acoustic felt and greenery.",
  },
  {
    id: "library-nook",
    title: "The Library Nook",
    desc: "A quieter corner lined with architectural journals, ideal for reading and slow focus.",
  },
  {
    id: "garden-courtyard",
    title: "The Garden Courtyard",
    desc: "Open-air brick terrace shaded by olive trees (weather permitting, heaters active).",
  },
  {
    id: "bar-experience",
    title: "Slow Pour-Over Bar",
    desc: "High stools directly facing our Synesso machines and Chemex brew stations.",
  },
];

export default function Reservations() {
  const [formData, setFormData] = useState({
    date: new Date(Date.now() + 86400000).toISOString().split("T")[0], // default tomorrow
    time: "10:00 AM",
    guests: "2 Guests",
    area: "main-salon",
    fullName: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your full name";
    }
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Please provide a contact phone number";
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const bookingCode = "ACR-" + Math.floor(10000 + Math.random() * 90000);
      setConfirmedBooking({
        ...formData,
        code: bookingCode,
        createdAt: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  const handleReset = () => {
    setConfirmedBooking(null);
    setFormData({
      date: new Date(Date.now() + 86400000).toISOString().split("T")[0],
      time: "10:00 AM",
      guests: "2 Guests",
      area: "main-salon",
      fullName: "",
      email: "",
      phone: "",
      specialRequests: "",
    });
  };

  return (
    <>
      <SEO
        title="Reserve a Table"
        description="Book a table at Add Café & Roastery. Experience our peaceful salon, garden courtyard, or slow brew bar for your morning coffee or weekend brunch."
        canonical="/reservations"
      />

      <main className="w-full">
        {/* Editorial Page Hero */}
        <PageHero
          eyebrow="Table Hospitality"
          title="Reserve an Unhurried Morning"
          subtitle="While our espresso bar is always open to spontaneous walk-ins, we welcome reservations for brunch parties and quiet salon tables."
          breadcrumbCurrent="Reservations"
          bgImage="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=85&w=1800"
        />

        {/* Booking Interface */}
        <section className="py-20 md:py-28 bg-cafe-bg text-cafe-text">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
            {confirmedBooking ? (
              /* Success / Confirmation Card */
              <div className="bg-cafe-surface p-8 sm:p-12 border-2 border-cafe-border shadow-xl text-center animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-cafe-bg border border-cafe-border flex items-center justify-center mx-auto mb-6">
                  <CalendarCheck className="w-9 h-9 text-cafe-secondary" />
                </div>

                <span className="font-script text-2xl text-cafe-accent block mb-1">
                  Table Held With Intention
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-cafe-primary font-normal">
                  Demo Reservation Confirmed
                </h2>

                <p className="mt-3 text-sm sm:text-base text-cafe-muted max-w-lg mx-auto leading-relaxed">
                  We look forward to hosting you,{" "}
                  <strong className="text-cafe-primary font-semibold">
                    {confirmedBooking.fullName}
                  </strong>
                  . A confirmation summary has been generated for your visit.
                </p>

                {/* Booking Details Ticket */}
                <div className="mt-8 max-w-md mx-auto bg-cafe-bg p-6 border border-cafe-border text-left space-y-3 font-mono text-xs">
                  <div className="flex justify-between pb-2 border-b border-cafe-border">
                    <span className="text-cafe-muted uppercase">Reservation Code</span>
                    <span className="font-bold text-cafe-primary text-sm">
                      {confirmedBooking.code}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cafe-muted uppercase">Date</span>
                    <span className="text-cafe-primary">{confirmedBooking.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cafe-muted uppercase">Time Slot</span>
                    <span className="text-cafe-primary">{confirmedBooking.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cafe-muted uppercase">Party Size</span>
                    <span className="text-cafe-primary">{confirmedBooking.guests}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cafe-muted uppercase">Seating Area</span>
                    <span className="text-cafe-primary capitalize">
                      {confirmedBooking.area.replace("-", " ")}
                    </span>
                  </div>
                  {confirmedBooking.specialRequests && (
                    <div className="pt-2 border-t border-cafe-border">
                      <span className="text-cafe-muted uppercase block">
                        Special Notes:
                      </span>
                      <p className="font-sans text-xs text-cafe-text mt-0.5">
                        {confirmedBooking.specialRequests}
                      </p>
                    </div>
                  )}
                </div>

                {/* Demo Transparency Notice */}
                <div className="mt-6 p-4 bg-cafe-bg border border-cafe-border text-xs text-cafe-primary max-w-md mx-auto text-left flex items-start gap-3">
                  <Info className="w-4 h-4 text-cafe-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block">Frontend Demo Notice:</span>
                    This is an interactive simulation of the Add Café table reservation system.
                    No real credit cards or restaurant reservation databases are connected.
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-center gap-4">
                  <Button onClick={handleReset} variant="primary" size="md">
                    <RotateCcw className="w-4 h-4" />
                    <span>Make Another Booking</span>
                  </Button>
                </div>
              </div>
            ) : (
              /* Interactive Booking Form */
              <div className="bg-cafe-surface p-8 sm:p-12 border-2 border-cafe-border shadow-lg">
                <div className="mb-10 text-center max-w-xl mx-auto">
                  <span className="font-script text-2xl text-cafe-accent block mb-1">
                    Reserve Your Table
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-cafe-primary font-normal">
                    Select Your Date & Atmosphere
                  </h2>
                  <p className="mt-2 text-sm text-cafe-muted font-light">
                    Reservations are held for 15 minutes past your booking time.
                    For parties over 8 guests, please reach out via our contact page.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                  {/* Step 1: Party size, Date, Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {/* Guests */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-cafe-primary font-medium mb-2">
                        Party Size
                      </label>
                      <div className="relative">
                        <Users className="w-4 h-4 text-cafe-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <select
                          value={formData.guests}
                          onChange={(e) =>
                            setFormData({ ...formData, guests: e.target.value })
                          }
                          className="w-full pl-9 pr-4 py-3 bg-cafe-bg border border-cafe-border text-cafe-text text-sm focus:outline-none focus:border-cafe-primary cursor-pointer"
                        >
                          <option>1 Guest (Solo Coffee Ritual)</option>
                          <option>2 Guests</option>
                          <option>3 Guests</option>
                          <option>4 Guests</option>
                          <option>5 Guests</option>
                          <option>6 Guests</option>
                          <option>7-8 Guests (Communal Oak Table)</option>
                        </select>
                      </div>
                    </div>

                    {/* Date */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-cafe-primary font-medium mb-2">
                        Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          value={formData.date}
                          min={new Date().toISOString().split("T")[0]}
                          onChange={(e) =>
                            setFormData({ ...formData, date: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-cafe-bg border border-cafe-border text-cafe-text text-sm focus:outline-none focus:border-cafe-primary cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* Time */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-cafe-primary font-medium mb-2">
                        Time Slot
                      </label>
                      <div className="relative">
                        <Clock className="w-4 h-4 text-cafe-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <select
                          value={formData.time}
                          onChange={(e) =>
                            setFormData({ ...formData, time: e.target.value })
                          }
                          className="w-full pl-9 pr-4 py-3 bg-cafe-bg border border-cafe-border text-cafe-text text-sm focus:outline-none focus:border-cafe-primary cursor-pointer"
                        >
                          {TIME_SLOTS.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Seating Area Selection */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-cafe-primary font-medium mb-3">
                      Preferred Seating Area
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {SEATING_AREAS.map((area) => (
                        <div
                          key={area.id}
                          onClick={() =>
                            setFormData({ ...formData, area: area.id })
                          }
                          className={`p-4 cursor-pointer border transition-all duration-300 ${
                            formData.area === area.id
                              ? "bg-cafe-bg border-cafe-primary shadow-xs ring-1 ring-cafe-primary"
                              : "bg-cafe-bg/60 border-cafe-border hover:border-cafe-muted"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="font-serif text-base text-cafe-primary font-medium">
                              {area.title}
                            </h4>
                            <div
                              className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                formData.area === area.id
                                  ? "border-cafe-accent bg-cafe-accent"
                                  : "border-cafe-border"
                              }`}
                            >
                              {formData.area === area.id && (
                                <div className="w-1.5 h-1.5 rounded-full bg-cafe-bg" />
                              )}
                            </div>
                          </div>
                          <p className="text-xs text-cafe-muted mt-1 leading-relaxed font-light">
                            {area.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Guest Contact Info */}
                  <div className="pt-6 border-t border-cafe-border grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-cafe-primary font-medium mb-2">
                        Full Name <span className="text-cafe-accent">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="e.g. Elena Vance"
                        className={`w-full px-4 py-3 bg-cafe-bg border text-sm text-cafe-text focus:outline-none ${
                          errors.fullName
                            ? "border-red-500"
                            : "border-cafe-border focus:border-cafe-primary"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-600 mt-1">
                          {errors.fullName}
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
                        placeholder="elena@example.com"
                        className={`w-full px-4 py-3 bg-cafe-bg border text-sm text-cafe-text focus:outline-none ${
                          errors.email
                            ? "border-red-500"
                            : "border-cafe-border focus:border-cafe-primary"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-cafe-primary font-medium mb-2">
                        Phone Number <span className="text-cafe-accent">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="(503) 555-0199"
                        className={`w-full px-4 py-3 bg-cafe-bg border text-sm text-cafe-text focus:outline-none ${
                          errors.phone
                            ? "border-red-500"
                            : "border-cafe-border focus:border-cafe-primary"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-600 mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-cafe-primary font-medium mb-2">
                      Special Requests or Dietary Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.specialRequests}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          specialRequests: e.target.value,
                        })
                      }
                      placeholder="e.g. Celebrating an anniversary, quiet table needed, wheelchair accessibility, severe nut allergy..."
                      className="w-full px-4 py-3 bg-cafe-bg border border-cafe-border text-sm text-cafe-text focus:outline-none focus:border-cafe-primary"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-4 text-center">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      variant="primary"
                      size="lg"
                      className="w-full sm:w-auto min-w-[240px]"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-cafe-bg/40 border-t-cafe-bg rounded-full animate-spin" />
                          <span>Reserving Table...</span>
                        </span>
                      ) : (
                        <span>Confirm Table Reservation</span>
                      )}
                    </Button>
                    <p className="text-[11px] text-cafe-muted mt-3 font-light">
                      * Interactive demo reservation experience. No payment required.
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>
        </section>

        {/* Walk-in & Reservation FAQ Note */}
        <section className="py-16 bg-cafe-surface/40 border-t border-cafe-border">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
            <h3 className="font-serif text-2xl text-cafe-primary font-normal">
              Prefer Spontaneous Mornings?
            </h3>
            <p className="mt-3 text-sm text-cafe-muted max-w-xl mx-auto leading-relaxed font-light">
              We always keep 40% of our seating unreserved for walk-in coffee lovers,
              book readers, and neighborhood friends. Drop in anytime.
            </p>
            <div className="mt-6">
              <Button to="/faq" variant="secondary" size="sm">
                View Seating Policies in FAQ
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
