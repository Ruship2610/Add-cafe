import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Filter,
  Sparkles,
  Coffee,
  X,
  Info,
  Check,
  ChevronRight,
  Printer,
} from "lucide-react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import Button from "../components/Button";
import { MENU_CATEGORIES, MENU_ITEMS } from "../data/menuData";
import { CAFE_INFO } from "../data/cafeInfo";

const DIETARY_FILTERS = ["All", "Vegan", "Vegetarian", "Gluten-Free"];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDietary, setSelectedDietary] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalItem, setActiveModalItem] = useState(null);

  // Filter items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (selectedCategory !== "all" && item.category !== selectedCategory) {
        return false;
      }
      // Dietary filter
      if (selectedDietary !== "All") {
        if (!item.dietary || !item.dietary.includes(selectedDietary)) {
          return false;
        }
      }
      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesOrigin = item.origin?.toLowerCase().includes(query);
        return matchesName || matchesDesc || matchesOrigin;
      }
      return true;
    });
  }, [selectedCategory, selectedDietary, searchQuery]);

  return (
    <>
      <SEO
        title="Artisanal Menu & Offerings"
        description="Explore the Add Café menu: single-origin pour-overs, house signature creations, 18-hour Kyoto cold brews, ceremonial matcha, and dawn-baked viennoiserie."
        canonical="/menu"
      />

      <main className="w-full">
        {/* Editorial Page Hero */}
        <PageHero
          eyebrow="Crafted Daily"
          title="The Season's Coffee & Kitchen Offerings"
          subtitle="Direct-trade micro-lots roasted on cast iron, botanical house syrups made from real botanicals, and hearth-baked pastry."
          breadcrumbCurrent="Menu"
          bgImage="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=85&w=1800"
        />

        {/* Filter & Search Bar Section */}
        <section className="py-8 bg-cafe-surface/50 border-b border-cafe-border sticky top-[68px] z-30 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              {/* Category Navigation Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
                {MENU_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`text-xs uppercase tracking-widest px-4 py-2.5 whitespace-nowrap transition-all duration-300 font-medium cursor-pointer ${
                      selectedCategory === cat.id
                        ? "bg-cafe-primary text-cafe-bg shadow-xs"
                        : "bg-cafe-bg text-cafe-muted hover:text-cafe-primary hover:bg-cafe-surface border border-cafe-border"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search & Dietary Controls */}
              <div className="flex flex-wrap items-center gap-4">
                {/* Search Input */}
                <div className="relative flex-1 sm:w-64">
                  <Search className="w-4 h-4 text-cafe-muted absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search menu or origins..."
                    className="w-full pl-9 pr-4 py-2 text-xs bg-cafe-bg border border-cafe-border text-cafe-text placeholder-cafe-muted focus:outline-none focus:border-cafe-primary transition-colors"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-cafe-muted hover:text-cafe-primary"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Dietary Filter Pills */}
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="text-cafe-muted hidden sm:inline mr-1 text-[11px] uppercase tracking-wider">
                    Dietary:
                  </span>
                  {DIETARY_FILTERS.map((d) => (
                    <button
                      key={d}
                      onClick={() => setSelectedDietary(d)}
                      className={`text-[11px] px-2.5 py-1 transition-colors cursor-pointer ${
                        selectedDietary === d
                          ? "bg-cafe-accent text-cafe-bg font-medium"
                          : "bg-cafe-bg text-cafe-muted hover:text-cafe-primary border border-cafe-border"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Listings (Editorial Layout) */}
        <section className="py-20 md:py-28 bg-cafe-bg text-cafe-text">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            {/* Results count & active query notice */}
            <div className="flex items-center justify-between pb-8 mb-12 border-b border-cafe-border text-xs uppercase tracking-widest text-cafe-muted">
              <span>
                Showing {filteredItems.length} of {MENU_ITEMS.length} offerings
              </span>
              {(selectedCategory !== "all" ||
                selectedDietary !== "All" ||
                searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedDietary("All");
                    setSearchQuery("");
                  }}
                  className="text-cafe-accent hover:underline cursor-pointer"
                >
                  Reset all filters
                </button>
              )}
            </div>

            {filteredItems.length === 0 ? (
              <div className="py-24 text-center max-w-md mx-auto">
                <Coffee className="w-12 h-12 text-cafe-muted/50 mx-auto mb-4" />
                <h3 className="font-serif text-2xl text-cafe-primary">
                  No offerings match your search
                </h3>
                <p className="text-sm text-cafe-muted mt-2">
                  Try adjusting your keywords or clearing dietary preferences.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedDietary("All");
                    setSearchQuery("");
                  }}
                  className="mt-6 text-xs uppercase tracking-widest px-6 py-2.5 bg-cafe-primary text-cafe-bg cursor-pointer"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-12">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveModalItem(item)}
                    className="group cursor-pointer flex gap-5 sm:gap-6 items-start pb-8 border-b border-cafe-border/80 hover:border-cafe-accent transition-all duration-300"
                  >
                    {/* Item Image */}
                    <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 overflow-hidden bg-cafe-surface border border-cafe-border relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                        loading="lazy"
                      />
                      {item.featured && (
                        <div className="absolute top-1 left-1 bg-cafe-accent text-cafe-bg text-[9px] uppercase tracking-wider px-1.5 py-0.5">
                          Star
                        </div>
                      )}
                    </div>

                    {/* Item Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="font-serif text-xl sm:text-2xl text-cafe-primary font-normal group-hover:text-cafe-accent transition-colors">
                          {item.name}
                        </h3>
                        <span className="font-serif text-xl font-medium text-cafe-primary shrink-0">
                          {item.price}
                        </span>
                      </div>

                      {/* Origin tag */}
                      {item.origin && (
                        <span className="text-[11px] uppercase tracking-wider text-cafe-accent/90 block mt-1 font-medium">
                          {item.origin}
                        </span>
                      )}

                      <p className="mt-2 text-xs sm:text-sm text-cafe-muted leading-relaxed font-light line-clamp-2">
                        {item.description}
                      </p>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          {item.dietary?.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-cafe-surface text-cafe-text"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <span className="text-[11px] text-cafe-muted group-hover:text-cafe-accent flex items-center gap-0.5 transition-colors">
                          <span>Details</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Sourcing & Milk Philosophy Callout (Editorial Dark section) */}
        <section className="py-20 bg-cafe-dark text-cafe-bg border-t border-cafe-border-dark">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-cafe-dark-surface border border-cafe-border-dark">
              <span className="text-xs uppercase tracking-widest text-cafe-accent font-semibold block mb-2">
                Milk Craft
              </span>
              <h4 className="font-serif text-xl text-cafe-bg font-normal mb-2">
                House Organic Oat & A2 Dairy
              </h4>
              <p className="text-xs sm:text-sm text-cafe-surface/70 font-light leading-relaxed">
                We make our own oat milk in-house using gluten-free oats, sea salt,
                and filtered water—free of gums or industrial seed oils.
              </p>
            </div>

            <div className="p-6 bg-cafe-dark-surface border border-cafe-border-dark">
              <span className="text-xs uppercase tracking-widest text-cafe-accent font-semibold block mb-2">
                Sugar & Botanicals
              </span>
              <h4 className="font-serif text-xl text-cafe-bg font-normal mb-2">
                Real Syrups & Honey
              </h4>
              <p className="text-xs sm:text-sm text-cafe-surface/70 font-light leading-relaxed">
                We simmer whole Tahitian vanilla pods, cracked green cardamom, and
                raw Pacific Northwest wildflower honey. Zero synthetic syrups.
              </p>
            </div>

            <div className="p-6 bg-cafe-dark-surface border border-cafe-border-dark">
              <span className="text-xs uppercase tracking-widest text-cafe-accent font-semibold block mb-2">
                Hearth Baking
              </span>
              <h4 className="font-serif text-xl text-cafe-bg font-normal mb-2">
                72-Hour Lamination
              </h4>
              <p className="text-xs sm:text-sm text-cafe-surface/70 font-light leading-relaxed">
                Our viennoiserie is rolled with cultured AOP Normandy butter and
                cold-fermented for 3 days before baking at dawn.
              </p>
            </div>
          </div>
        </section>

        {/* Menu Page Bottom CTA */}
        <section className="py-20 bg-cafe-surface border-t border-cafe-border text-center">
          <div className="max-w-3xl mx-auto px-6 sm:px-8">
            <span className="font-script text-2xl text-cafe-accent block mb-2">
              Ready for Your Cup?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-cafe-primary font-normal">
              Visit Our Bar or Reserve a Brunch Table
            </h2>
            <p className="mt-4 text-sm sm:text-base text-cafe-muted font-light max-w-md mx-auto">
              Our espresso bar is always open to walk-ins. For weekend brunch or
              salon seating, reserve a table in advance.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button to="/reservations" variant="primary" size="lg">
                Find a Table
              </Button>
              <Button to="/contact" variant="secondary" size="lg">
                Location & Hours
              </Button>
            </div>
          </div>
        </section>

        {/* Quick View Item Modal */}
        {activeModalItem && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={activeModalItem.name}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
            onClick={() => setActiveModalItem(null)}
          >
            <div
              className="relative w-full max-w-lg bg-cafe-bg border-2 border-cafe-border shadow-2xl p-6 sm:p-8 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 text-cafe-muted hover:text-cafe-primary p-2 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/10] overflow-hidden bg-cafe-surface mb-6 border border-cafe-border">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-2xl text-cafe-primary">
                  {activeModalItem.name}
                </h3>
                <span className="font-serif text-2xl font-semibold text-cafe-primary">
                  {activeModalItem.price}
                </span>
              </div>

              {activeModalItem.origin && (
                <span className="text-xs uppercase tracking-widest text-cafe-accent font-mono block mt-1">
                  {activeModalItem.origin}
                </span>
              )}

              <p className="mt-4 text-sm text-cafe-muted leading-relaxed font-light">
                {activeModalItem.description}
              </p>

              <div className="mt-6 pt-4 border-t border-cafe-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {activeModalItem.dietary?.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs uppercase tracking-wider px-2 py-0.5 bg-cafe-surface text-cafe-text"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  to="/reservations"
                  onClick={() => setActiveModalItem(null)}
                  variant="primary"
                  size="sm"
                >
                  Reserve a Table
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
