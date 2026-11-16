import React from "react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import { CAFE_INFO } from "../data/cafeInfo";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Our straightforward approach to guest privacy, newsletter communications, and reservations data."
        canonical="/privacy-policy"
      />

      <main className="w-full">
        <PageHero
          eyebrow="Legal & Integrity"
          title="Privacy & Data Practices"
          subtitle="We treat your personal information with the same care and respect that we bring to our single-origin coffees."
          breadcrumbCurrent="Privacy Policy"
        />

        <section className="py-20 md:py-28 bg-cafe-bg text-cafe-text">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-cafe-primary font-normal mb-4">
                1. Information We Collect
              </h2>
              <p className="text-sm sm:text-base text-cafe-muted font-light leading-relaxed">
                When you interact with {CAFE_INFO.fullName} (such as booking a
                table, submitting an event or wholesale inquiry, or subscribing
                to our newsletter), we only collect the minimum information
                necessary: your name, email address, and phone number.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-cafe-primary font-normal mb-4">
                2. How We Use Your Data
              </h2>
              <p className="text-sm sm:text-base text-cafe-muted font-light leading-relaxed">
                We use your details strictly to confirm table reservations,
                reply to your inquiries, or dispatch our occasional seasonal
                roast journal. We never sell, rent, or trade your data with
                third-party marketing agencies or data brokers.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-cafe-primary font-normal mb-4">
                3. Cookies & Analytics
              </h2>
              <p className="text-sm sm:text-base text-cafe-muted font-light leading-relaxed">
                Our website utilizes minimal, privacy-conscious telemetry to
                ensure page responsiveness and prevent broken links. We do not
                employ invasive cross-site advertising trackers or surveillance
                scripts.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-cafe-primary font-normal mb-4">
                4. Contacting the Roastery
              </h2>
              <p className="text-sm sm:text-base text-cafe-muted font-light leading-relaxed">
                For questions regarding your data or to request removal from our
                newsletter, please contact us directly at{" "}
                <a
                  href={`mailto:${CAFE_INFO.contact.email}`}
                  className="text-cafe-accent underline hover:text-cafe-primary"
                >
                  {CAFE_INFO.contact.email}
                </a>{" "}
                or visit our café at {CAFE_INFO.address.display}.
              </p>
              <p className="text-xs font-mono text-cafe-muted/70 mt-4">
                Last updated: November 2026
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

