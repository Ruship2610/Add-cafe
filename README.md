# ADD CAFÉ & ROASTERY — Premium Multi-Page Café Website

An editorial, creative, and visually stunning multi-page website built for a modern artisanal café and roastery. Designed with the aesthetic depth and tactile typography of an independent boutique hospitality brand.

---

## ☕ Visual Identity & Design System

### 1. Color Palette

| Swatch | Color Name | Hex Code | Purpose |
|---|---|---|---|
| 🟨 | Warm Ivory | `#F5F5F1` | Primary light canvas, main backgrounds (`cafe-bg`) |
| 🪨 | Soft Blue Grey | `#E9EDEB` | Cards and content surfaces (`cafe-surface`) |
| 🔵 | Slate Blue | `#344D5B` | Primary buttons, headers, brand mark (`cafe-primary`) |
| 🌊 | Dusty Blue | `#718895` | Secondary actions, decorative details (`cafe-secondary`) |
| 🌾 | Warm Sand | `#C49A70` | Small highlights, badges, accents (`cafe-accent`) |
| ⬛ | Charcoal | `#252F35` | Main headings and body text (`cafe-text`) |
| 🔘 | Muted Grey | `#758087` | Secondary descriptions, captions (`cafe-muted`) |
| 🌑 | Dark Slate | `#25343D` | Dark sections, evening salons, footer (`cafe-dark`) |
| 🌫️ | Soft Grey Border | `#DCE3E5` | Light section dividers and borders (`cafe-border`) |
| 🛸 | Deep Slate Border | `#506571` | Dark section dividers and borders (`cafe-border-dark`) |

### 2. Typography
- **Headings**: `Cormorant Garamond` (Classic high-contrast serif inspired by editorial periodicals)
- **Body**: `DM Sans` (Clean, legible modern geometric sans-serif)
- **Accents & Script**: `Caveat` (Understated handwritten touch for barista notes and craftsmanship signatures)

---

## 🛠️ Technology Stack

- **React 19** with **Vite 8**
- **Tailwind CSS v4** (using `@tailwindcss/vite` and `@theme` tokens)
- **React Router DOM v7** (Full multi-page client-side routing with automatic scroll restoration)
- **Motion (Framer Motion)** (Subtle, tasteful entrance animations and scroll indicators)
- **Lucide React** (Clean, minimalist stroke iconography)
- **React Helmet Async** (Page-by-page SEO title, description, Open Graph, and JSON-LD schema)
- **Code-Splitting via `React.lazy`** (Blistering sub-second page loads)

---

## 🗺️ Multi-Page Architecture

| Route | Page | Key Features |
|---|---|---|
| `/` | **Home** | Exactly 100dvh cinematic hero with dark vignette, brand manifesto, 2-column asymmetric story preview, interactive featured menu filter, dark atmosphere section, editorial photo grid, guest quotes, visit preview, and Instagram reel strip. |
| `/our-story` | **Our Story** | Magazine editorial layout detailing the founding narrative, direct-trade farm partners (Ethiopia, Colombia, Guatemala), small-batch drum roasting craft, water mineral chemistry, space architecture, and the team. |
| `/menu` | **Full Menu** | 6 interactive categories (Espresso & Pour-Over, Signatures, Slow Cold Brews, Artisanal Teas, Morning Bakery, Kitchen), instant keyword search, dietary filter pills (Vegan, Vegetarian, Gluten-Free), and click-to-view item modal. |
| `/gallery` | **Gallery** | Dynamic asymmetric photo masonry with mixed aspect ratios (portrait, landscape, square), category filtering (Spaces, Roastery, Hearth, Rituals), and interactive fullscreen Lightbox with keyboard navigation (`Esc`, `←`, `→`). |
| `/reservations` | **Reservations** | Elegant table booking interface with party size, date picker, time slot selector, seating area preference (Salon, Library Nook, Courtyard, Bar), guest details validation, and realistic demo booking confirmation ticket. |
| `/contact` | **Contact & Location** | Complete business hours breakdown, address, phone lines, transit guide, Google Maps button, and client-side validated contact form with loading state and confirmation reference. |
| `/events` | **Events & Workshops** | Sensory cupping masterclasses, latte art workshops, acoustic Sunday jazz evenings, and interactive spot registration modal. |
| `/faq` | **FAQ & Policies** | Categorized accordion FAQ covering coffee sourcing, house oat milk, remote work & Wi-Fi guidelines, pet policy, and parking. |
| `/privacy-policy`| **Privacy Policy** | Straightforward, transparent guest data and communications policy. |

---

## 🚀 Getting Started

### Development
```bash
npm install
npm run dev
```
Open `http://localhost:5173` in your browser.

### Production Build
```bash
npm run build
npm run preview
```

---

## 🔍 SEO & Technical Highlights

- **Dynamic Head Metadata**: Every page manages its own title, description, canonical URL, and Open Graph tags.
- **Structured Data**: Injected JSON-LD `CafeOrCoffeeShop` schema with address, operating hours, telephone, and cuisine categories.
- **Search Engine Assets**: `robots.txt` and `sitemap.xml` included in `public/`.
- **Zero Horizontal Overflow**: Carefully clamped fluid typography and responsive grid structures.

