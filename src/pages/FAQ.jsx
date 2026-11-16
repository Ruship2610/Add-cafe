import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Search, HelpCircle, MessageSquare } from "lucide-react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import Button from "../components/Button";
import { FAQ_CATEGORIES, FAQ_ITEMS } from "../data/faqData";

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState([1]); // default open first

  const toggleItem = (id) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter((item) => item !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    if (activeCategory !== "all" && item.category !== activeCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <>
      <SEO
        title="Frequently Asked Questions & Policies"
        description="Got questions about Add Café? Find answers regarding roasting, bean origins, Wi-Fi policy, dogs on the patio, table reservations, and private events."
        canonical="/faq"
      />

      <main className="w-full">
        {/* Editorial Page Hero */}
        <PageHero
          eyebrow="Help & Information"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our sourcing, space, reservations, dietary accommodations, and café rhythm."
          breadcrumbCurrent="FAQ"
          bgImage="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=85&w=1800"
        />

        {/* Search & Category Filter Section */}
        <section className="py-8 bg-cafe-surface/40 border-b border-cafe-border sticky top-[68px] z-30 backdrop-blur-md">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
              {FAQ_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-xs uppercase tracking-widest px-3.5 py-2 whitespace-nowrap transition-all duration-300 font-medium ${
                    activeCategory === cat.id
                      ? "bg-cafe-primary text-cafe-bg"
                      : "bg-cafe-bg text-cafe-muted hover:text-cafe-primary border border-cafe-border"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-cafe-muted absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions..."
                className="w-full pl-9 pr-4 py-2 text-xs bg-cafe-bg border border-cafe-border text-cafe-text placeholder-cafe-muted focus:outline-none focus:border-cafe-primary transition-colors"
              />
            </div>
          </div>
        </section>

        {/* Accordion FAQ Listing */}
        <section className="py-20 md:py-28 bg-cafe-bg text-cafe-text">
          <div className="max-w-4xl mx-auto px-6 sm:px-8">
            {filteredFaqs.length === 0 ? (
              <div className="py-16 text-center">
                <HelpCircle className="w-10 h-10 text-cafe-muted/60 mx-auto mb-3" />
                <h3 className="font-serif text-2xl text-cafe-primary">
                  No matching questions found
                </h3>
                <p className="text-sm text-cafe-muted mt-1">
                  Try a different search term or check all categories.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory("all");
                    setSearchQuery("");
                  }}
                  className="mt-6 text-xs uppercase tracking-widest px-5 py-2.5 bg-cafe-primary text-cafe-bg"
                >
                  Reset Search
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFaqs.map((faq) => {
                  const isOpen = openItems.includes(faq.id);
                  return (
                    <div
                      key={faq.id}
                      className="border border-cafe-border bg-cafe-surface/40 overflow-hidden transition-all duration-300"
                    >
                      <button
                        type="button"
                        onClick={() => toggleItem(faq.id)}
                        className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                      >
                        <span className="font-serif text-lg sm:text-xl text-cafe-primary font-normal">
                          {faq.question}
                        </span>
                        <div
                          className={`w-7 h-7 rounded-full bg-cafe-bg border border-cafe-border flex items-center justify-center shrink-0 transition-transform duration-300 ${
                            isOpen ? "rotate-180 bg-cafe-primary text-cafe-bg" : ""
                          }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-cafe-muted font-light leading-relaxed border-t border-cafe-border/50 animate-in fade-in duration-200">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Still have questions? Callout */}
            <div className="mt-16 p-8 bg-cafe-surface border-2 border-cafe-border text-center">
              <span className="font-script text-2xl text-cafe-accent block mb-1">
                Have a Unique Inquiry?
              </span>
              <h3 className="font-serif text-2xl text-cafe-primary font-normal">
                Speak With Our Baristas & Hospitality Team
              </h3>
              <p className="mt-2 text-sm text-cafe-muted max-w-md mx-auto font-light leading-relaxed">
                Whether organizing a private cupping or asking about bean wholesale,
                we’re always delighted to chat.
              </p>
              <div className="mt-6">
                <Button to="/contact" variant="primary" size="md">
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Us a Direct Message</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

