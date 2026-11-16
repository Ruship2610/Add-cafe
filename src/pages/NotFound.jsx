import React from "react";
import { Coffee, ArrowLeft } from "lucide-react";
import SEO from "../components/SEO";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you were looking for cannot be found. Return to Add Café & Roastery."
      />

      <main className="min-h-[80vh] flex items-center justify-center py-32 px-6 bg-cafe-bg text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 rounded-full bg-cafe-surface border border-cafe-border flex items-center justify-center mx-auto text-cafe-accent mb-6 shadow-xs">
            <Coffee className="w-8 h-8" />
          </div>

          <span className="font-script text-3xl text-cafe-accent block mb-2">
            An Empty Cup
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl text-cafe-primary font-normal">
            Page Not Found
          </h1>

          <p className="mt-4 text-sm sm:text-base text-cafe-muted font-light leading-relaxed">
            The brew you are seeking seems to have vanished or been moved to a different corner of our café.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Button to="/" variant="primary" size="md">
              <ArrowLeft className="w-4 h-4" />
              <span>Return Home</span>
            </Button>
            <Button to="/menu" variant="secondary" size="md">
              Explore Menu
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}

