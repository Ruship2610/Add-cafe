import React from "react";
import { cn } from "../utils/helpers";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  theme = "light", // 'light' (on light background) or 'dark' (on dark background)
  className = "",
  titleClassName = "",
}) {
  const isDark = theme === "dark";

  const alignmentStyles = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div
      className={cn(
        "flex flex-col max-w-3xl",
        alignmentStyles[align] || alignmentStyles.left,
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "font-script text-xl md:text-2xl mb-2 tracking-normal",
            isDark ? "text-cafe-accent" : "text-cafe-accent"
          )}
        >
          {eyebrow}
        </span>
      )}

      {title && (
        <h2
          className={cn(
            "font-serif font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.12]",
            isDark ? "text-cafe-bg" : "text-cafe-primary",
            titleClassName
          )}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg leading-relaxed font-normal",
            isDark ? "text-cafe-surface/80" : "text-cafe-muted"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
