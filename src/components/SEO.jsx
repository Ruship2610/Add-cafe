import React from "react";
import { Helmet } from "react-helmet-async";
import { CAFE_INFO } from "../data/cafeInfo";

export default function SEO({
  title,
  description,
  canonical,
  ogImage = "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1200",
  type = "website",
  jsonLd = null,
}) {
  const siteTitle = title
    ? `${title} | ${CAFE_INFO.fullName}`
    : `${CAFE_INFO.fullName} | Artisanal Coffee & Slow Living`;

  const metaDesc =
    description ||
    "Add Café is a boutique artisanal coffee roastery and kitchen in Portland, OR. Single-origin micro-lots, sourdough viennoiserie, and unhurried hospitality.";

  const canonicalUrl = canonical
    ? `https://addcafe.com${canonical}`
    : "https://addcafe.com";

  // Default Restaurant / Café schema
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "name": CAFE_INFO.fullName,
    "image": ogImage,
    "url": "https://addcafe.com",
    "telephone": CAFE_INFO.contact.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": CAFE_INFO.address.street,
      "addressLocality": CAFE_INFO.address.city,
      "addressRegion": CAFE_INFO.address.state,
      "postalCode": CAFE_INFO.address.zip,
      "addressCountry": "US",
    },
    "servesCuisine": ["Coffee", "Artisanal Bakery", "Breakfast", "Brunch"],
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "06:30",
        "closes": "17:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "06:30",
        "closes": "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "07:30",
        "closes": "19:00",
      },
    ],
  };

  const activeSchema = jsonLd || defaultSchema;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={metaDesc} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={CAFE_INFO.name} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(activeSchema)}
      </script>
    </Helmet>
  );
}

