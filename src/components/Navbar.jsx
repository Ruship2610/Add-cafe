import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Coffee, Clock, MapPin, Phone } from "lucide-react";
import { CAFE_INFO } from "../data/cafeInfo";
import Button from "./Button";
import { cn } from "../utils/helpers";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Our Story", path: "/our-story" },
  { name: "Menu", path: "/menu" },
  { name: "Gallery", path: "/gallery" },
  { name: "Events", path: "/events" },
  { name: "Contact", path: "/contact" },
  { name: "FAQ", path: "/faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Navbar transparent state: only on homepage when not scrolled and mobile menu is not open
  const isTransparent = isHomePage && !isScrolled && !mobileMenuOpen;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isTransparent
            ? "bg-gradient-to-b from-black/60 via-black/20 to-transparent py-5 text-white"
            : "bg-cafe-bg/95 backdrop-blur-md py-4 text-cafe-text shadow-xs border-b border-cafe-border/70"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="group flex flex-col items-start focus:outline-none"
            aria-label={`${CAFE_INFO.name} Home`}
          >
            <span
              className={cn(
                "font-serif tracking-widest text-xl sm:text-2xl font-bold uppercase transition-colors duration-300",
                isTransparent
                  ? "text-white group-hover:text-cafe-accent"
                  : "text-cafe-primary group-hover:text-cafe-accent"
              )}
            >
              ADD CAFÉ
            </span>
            <span
              className={cn(
                "text-[9px] uppercase tracking-[0.28em] -mt-1 font-sans transition-colors duration-300",
                isTransparent ? "text-white/80" : "text-cafe-muted"
              )}
            >
              Roastery & Kitchen
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-7 xl:gap-8"
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    "text-xs uppercase tracking-[0.18em] font-medium py-1 transition-all duration-300 relative group",
                    isTransparent
                      ? isActive
                        ? "text-white font-semibold"
                        : "text-white/85 hover:text-white"
                      : isActive
                      ? "text-cafe-primary font-semibold"
                      : "text-cafe-muted hover:text-cafe-primary"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {/* Active / Hover Underline indicator */}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 right-0 h-[1.5px] transition-all duration-300 origin-left",
                        isActive
                          ? "bg-cafe-accent scale-x-100"
                          : isTransparent
                          ? "bg-white/70 scale-x-0 group-hover:scale-x-100"
                          : "bg-cafe-accent scale-x-0 group-hover:scale-x-100"
                      )}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action: Find a Table CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <Button
              to="/reservations"
              size="sm"
              variant={isTransparent ? "light" : "primary"}
              className="tracking-widest shadow-xs"
            >
              Find a Table
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <Link
              to="/reservations"
              className={cn(
                "text-[10px] uppercase tracking-widest px-3 py-1.5 font-medium border transition-colors",
                isTransparent
                  ? "border-white/60 text-white hover:bg-white hover:text-cafe-primary"
                  : "border-cafe-primary text-cafe-primary hover:bg-cafe-primary hover:text-cafe-bg"
              )}
            >
              Reserve
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className={cn(
                "p-2 transition-colors focus:outline-none",
                isTransparent ? "text-white hover:text-cafe-accent" : "text-cafe-primary"
              )}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Tablet Menu Toggle (between sm and lg) */}
          <div className="hidden sm:flex lg:hidden items-center gap-3">
            <Button
              to="/reservations"
              size="sm"
              variant={isTransparent ? "light" : "primary"}
            >
              Find a Table
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className={cn(
                "p-2 transition-colors focus:outline-none ml-1",
                isTransparent ? "text-white hover:text-cafe-accent" : "text-cafe-primary"
              )}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / Tablet Full-Screen Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-40 bg-cafe-dark text-cafe-bg flex flex-col justify-between pt-24 pb-8 px-6 sm:px-10 lg:hidden overflow-y-auto animate-in fade-in duration-300"
        >
          {/* Subtle paper grain */}
          <div className="absolute inset-0 texture-paper opacity-10 pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-6 mt-4">
            <span className="font-script text-xl text-cafe-accent">
              Welcome to Add Café
            </span>

            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link, idx) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "font-serif text-2xl sm:text-3xl py-1 transition-all duration-300 flex items-center justify-between border-b border-cafe-bg/10",
                      isActive
                        ? "text-cafe-accent font-semibold translate-x-2"
                        : "text-cafe-bg hover:text-cafe-accent"
                    )
                  }
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-sans tracking-widest text-cafe-muted opacity-60">
                    0{idx + 1}
                  </span>
                </NavLink>
              ))}

              <NavLink
                to="/reservations"
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl sm:text-3xl py-2 text-cafe-accent hover:text-cafe-bg flex items-center justify-between border-b border-cafe-bg/10"
              >
                <span>Find a Table</span>
                <span className="text-xs font-sans tracking-widest bg-cafe-accent text-cafe-bg px-2 py-0.5 uppercase">
                  Reserve
                </span>
              </NavLink>
            </nav>
          </div>

          {/* Quick info in mobile drawer */}
          <div className="relative z-10 pt-8 mt-6 border-t border-cafe-bg/15 space-y-3 text-xs text-cafe-surface/70">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-cafe-accent shrink-0" />
              <span>{CAFE_INFO.address.display}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-cafe-accent shrink-0" />
              <span>Mon-Sun: 6:30 AM – 7:00 PM</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-cafe-accent shrink-0" />
              <a
                href={`tel:${CAFE_INFO.contact.phone}`}
                className="hover:text-white"
              >
                {CAFE_INFO.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
