import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../utils/helpers";

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  type = "button",
  target,
  rel,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cafe-accent/50 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5 uppercase tracking-widest",
    md: "text-sm px-6 py-3 gap-2 uppercase tracking-widest",
    lg: "text-base px-8 py-4 gap-2.5 tracking-wider",
  };

  const variantStyles = {
    primary:
      "bg-cafe-primary text-cafe-bg hover:bg-cafe-dark hover:shadow-md active:scale-[0.99]",
    accent:
      "bg-cafe-accent text-cafe-bg hover:bg-cafe-accent/90 hover:shadow-md active:scale-[0.99]",
    secondary:
      "border border-cafe-secondary text-cafe-secondary bg-transparent hover:bg-cafe-secondary hover:text-cafe-bg active:scale-[0.99]",
    light:
      "bg-cafe-bg text-cafe-primary hover:bg-cafe-surface hover:shadow-md active:scale-[0.99]",
    lightOutline:
      "border border-cafe-bg/70 text-cafe-bg hover:bg-cafe-bg hover:text-cafe-primary active:scale-[0.99]",
    ghost:
      "text-cafe-primary hover:text-cafe-accent px-0 py-1 bg-transparent hover:translate-x-1",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size] || sizeStyles.md,
    variantStyles[variant] || variantStyles.primary,
    className
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target || (href.startsWith("http") ? "_blank" : undefined)}
        rel={rel || (href.startsWith("http") ? "noopener noreferrer" : undefined)}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
}
