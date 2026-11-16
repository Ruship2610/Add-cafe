import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { cn } from "../utils/helpers";

export default function PageHero({
  eyebrow = "Add Café & Roastery",
  title,
  subtitle,
  breadcrumbCurrent,
  bgImage,
  dark = false,
  children,
}) {
  return (
    <section
      className={cn(
        "relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b",
        dark
          ? "bg-cafe-dark text-cafe-bg border-cafe-border-dark"
          : "bg-cafe-surface/40 text-cafe-text border-cafe-border/60"
      )}
    >
      {/* Optional atmospheric background image */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt={title}
            className="w-full h-full object-cover object-center opacity-25 filter brightness-90 saturate-75"
          />
          <div
            className={cn(
              "absolute inset-0",
              dark
                ? "bg-gradient-to-t from-cafe-dark via-cafe-dark/85 to-transparent"
                : "bg-gradient-to-t from-cafe-bg via-cafe-surface/85 to-transparent"
            )}
          />
        </div>
      )}

      {/* Subtle paper grain texture */}
      <div className="absolute inset-0 texture-paper opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Breadcrumb navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-cafe-muted mb-6"
        >
          <Link
            to="/"
            className={cn(
              "transition-colors hover:text-cafe-accent",
              dark ? "text-cafe-surface/70" : "text-cafe-muted"
            )}
          >
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-40" />
          <span
            className={cn(
              "font-medium",
              dark ? "text-cafe-accent" : "text-cafe-primary"
            )}
          >
            {breadcrumbCurrent || title}
          </span>
        </nav>

        <div className="max-w-4xl">
          {eyebrow && (
            <span className="font-script text-2xl md:text-3xl text-cafe-accent block mb-3">
              {eyebrow}
            </span>
          )}

          <h1
            className={cn(
              "font-serif font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight",
              dark ? "text-cafe-bg" : "text-cafe-primary"
            )}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className={cn(
                "mt-6 text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-2xl",
                dark ? "text-cafe-surface/80" : "text-cafe-muted"
              )}
            >
              {subtitle}
            </p>
          )}

          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
