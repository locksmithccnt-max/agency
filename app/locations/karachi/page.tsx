import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";
const PAGE_URL = `${BASE_URL}/locations/karachi`;
const WA_LINK =
  "https://wa.me/923474825228?text=Hi!%20I%27m%20a%20Karachi%20business%20and%20I%27d%20love%20to%20discuss%20local%20SEO%20to%20grow%20my%20business.%20Can%20you%20help%3F";
const IG_LINK = "https://www.instagram.com/small_business_marketing_profe/";

export const metadata: Metadata = {
  title: "Local SEO Services in Karachi | Digital Marketing Expert",
  description:
    "Top local SEO & digital marketing services in Karachi. Get your business to page 1 of Google in 30–90 days. Serving DHA, Clifton, Gulshan & all Karachi areas. Free audit.",
  keywords: [
    "local SEO Karachi",
    "digital marketing Karachi",
    "SEO agency Karachi",
    "Google Business Profile Karachi",
    "Karachi marketing agency",
    "online marketing Karachi",
    "web design Karachi",
    "Google Ads Karachi",
    "small business marketing Karachi",
    "local marketing Karachi",
    "SEO expert Karachi",
    "Karachi SEO services",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Local SEO Services in Karachi | Digital Marketing Expert",
    description:
      "Top local SEO & digital marketing in Karachi. Get to page 1 of Google in 30–90 days. Free audit.",
    url: PAGE_URL,
    type: "website",
    siteName: "SBMP — Local Digital Marketing",
    images: [{ url: `${BASE_URL}/sbmp-logo.png`, width: 1200, height: 630, alt: "Local SEO Karachi — SBMP" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Services in Karachi | SBMP",
    description: "Top local SEO & digital marketing in Karachi. Free audit.",
    images: [`${BASE_URL}/sbmp-logo.png`],
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${PAGE_URL}#localbusiness`,
  name: "SBMP — Local SEO Services Karachi",
  description: "Expert local SEO & digital marketing for businesses in Karachi. Google Business Profile optimisation, local SEO, and web design.",
  url: PAGE_URL,
  logo: `${BASE_URL}/sbmp-logo.png`,
  image: `${BASE_URL}/sbmp-logo.png`,
  email: "hello@sbmp.com",
  priceRange: "PKR 55,000–PKR 195,000",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressRegion: "Sindh",
    addressCountry: "PK",
  },
  geo: { "@type": "GeoCoordinates", latitude: 24.8607, longitude: 67.0011 },
  areaServed: [
    { "@type": "City", name: "Karachi" },
    { "@type": "Place", name: "DHA, Karachi" },
    { "@type": "Place", name: "Clifton, Karachi" },
    { "@type": "Place", name: "Gulshan-e-Iqbal, Karachi" },
    { "@type": "Place", name: "Saddar, Karachi" },
    { "@type": "Place", name: "PECHS, Karachi" },
    { "@type": "Place", name: "North Nazimabad, Karachi" },
  ],
  sameAs: [
    "https://www.facebook.com/profile.php?id=61583689962796",
    "https://www.instagram.com/small_business_marketing_profe/",
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: 4.9, reviewCount: 120, bestRating: 5, worstRating: 1 },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Locations", item: `${BASE_URL}/locations` },
    { "@type": "ListItem", position: 3, name: "Karachi", item: PAGE_URL },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How can local SEO help my business in Karachi?",
      acceptedAnswer: { "@type": "Answer", text: "Local SEO gets your Karachi business ranking at the top of Google when nearby customers search for your services. More visibility means more calls, bookings, and consistent revenue — typically within 30–90 days." },
    },
    {
      "@type": "Question",
      name: "How long does it take to rank on page 1 in Karachi?",
      acceptedAnswer: { "@type": "Answer", text: "Most Karachi businesses see early ranking movement within 30–60 days. Strong page-1 positions for competitive keywords typically take 90–120 days." },
    },
    {
      "@type": "Question",
      name: "Do you offer local SEO in all Karachi areas?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. We serve all areas of Karachi including DHA, Clifton, Gulshan-e-Iqbal, PECHS, Saddar, North Nazimabad, and surrounding neighbourhoods." },
    },
    {
      "@type": "Question",
      name: "What is the cost of local SEO services in Karachi?",
      acceptedAnswer: { "@type": "Answer", text: "Plans start from PKR 55,000/month with no long-term contracts. Most Karachi businesses invest PKR 95,000/month for full local SEO, Google Ads management, and reputation management." },
    },
  ],
};

const services = [
  { icon: "📍", slug: "local-seo", label: "Local SEO" },
  { icon: "🎯", slug: "google-ads", label: "Google Ads" },
  { icon: "💻", slug: "web-design", label: "Web Design" },
  { icon: "📱", slug: "social-media", label: "Social Media" },
  { icon: "⭐", slug: "reputation", label: "Reputation" },
];

const industries = ["Restaurants", "Clinics & Doctors", "Real Estate", "Retail Shops", "Law Firms", "Education & Tutoring", "Gyms & Fitness", "Auto Services", "IT & Tech", "Wedding Services"];

const faqs = [
  { q: "How can local SEO help my Karachi business?", a: "Local SEO ensures your business appears at the top of Google when Karachi customers search for your services. More visibility means more calls and revenue — typically within 30–90 days." },
  { q: "Do you cover all areas of Karachi?", a: "Yes — DHA, Clifton, Gulshan-e-Iqbal, PECHS, Saddar, North Nazimabad, Korangi, and all other Karachi areas." },
  { q: "How long before I see results in Karachi?", a: "Early movement within 30–60 days. Strong page-1 positions usually take 90–120 days depending on competition." },
  { q: "What does local SEO cost in Karachi?", a: "Plans start from PKR 55,000/month with no contracts. Most businesses invest PKR 95,000/month for full local SEO + Google Ads + reputation management." },
  { q: "Do you optimise Google Business Profile?", a: "Absolutely. Google Business Profile optimisation is a core part of every plan — it's the fastest way to get visibility in Karachi's Google Maps results." },
];

export default function KarachiPage() {
  return (
    <div style={{ backgroundColor: "#080D1A" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([localBusinessSchema, breadcrumbSchema, faqSchema]) }} />

      {/* Hero */}
      <section
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,142,247,0.18) 0%, transparent 70%), #080D1A", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
        className="py-16 md:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm mb-8" style={{ color: "#4A5A6E" }}>
            <Link href="/" className="hover:text-white transition-colors" style={{ color: "#4A5A6E" }}>Home</Link>
            <span>→</span>
            <Link href="/locations" className="hover:text-white transition-colors" style={{ color: "#4A5A6E" }}>Locations</Link>
            <span>→</span>
            <span style={{ color: "#8B9CB8" }}>Karachi</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white mb-6" style={{ backgroundColor: "rgba(79,142,247,0.15)", border: "1px solid rgba(79,142,247,0.3)" }}>
              🏆 Helping Karachi businesses rank on Google
            </div>

            <h1 className="gradient-text text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6" style={{ fontFamily: "var(--font-display, sans-serif)" }}>
              Local SEO Services in Karachi
            </h1>

            <p className="text-lg sm:text-xl mb-10" style={{ color: "#8B9CB8" }}>
              Get your Karachi business to the top of Google. I help local businesses across DHA, Clifton, Gulshan and all of Karachi generate real calls, real enquiries, and real revenue through proven local SEO strategies.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/free-audit" className="inline-flex items-center px-7 py-3.5 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl" style={{ backgroundColor: "#4F8EF7" }}>
                Get Free Audit →
              </Link>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl" style={{ backgroundColor: "#22C55E" }}>
                💬 WhatsApp Me
              </a>
              <a href={IG_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5" style={{ background: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)", borderRadius: "0.75rem" }}>
                📸 Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: "#0D1627" }} className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "📍", label: "Karachi Businesses Ranked", value: "25+" },
              { icon: "⭐", label: "Average Results", value: "Page 1 in 60 days" },
              { icon: "💰", label: "Revenue Generated", value: "PKR 50M+" },
              { icon: "🏆", label: "Years Serving Karachi", value: "5+" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl p-6 text-center" style={{ backgroundColor: "#111E33", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-xl font-extrabold mb-1" style={{ fontFamily: "var(--font-display, sans-serif)", color: "#4F8EF7" }}>{stat.value}</div>
                <div className="text-xs" style={{ color: "#8B9CB8" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local SEO Matters */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#080D1A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-5" style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}>
              Why Local SEO Matters in Karachi
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#8B9CB8" }}>
              Karachi is Pakistan&apos;s most competitive business hub. With millions of daily searches on Google, your business must appear at the top — or your competitors will take those customers. Local SEO puts your business in front of Karachi customers exactly when they&apos;re looking.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🗺️", title: "Google Maps Domination", desc: "Appear in the Google Maps 3-pack when Karachi customers search for your services. That's where the clicks and calls come from — especially on mobile." },
              { icon: "🔍", title: "Page 1 Organic Rankings", desc: "Own the top organic positions on Google for your most valuable Karachi keywords — long-term, sustainable visibility that compounds over time." },
              { icon: "📞", title: "More Local Calls & Leads", desc: "More visibility means more calls. Every lead is tracked so you know exactly what your investment is delivering every single month." },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl p-8 transition-all hover:-translate-y-1" style={{ backgroundColor: "#111E33", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#E2E8F0" }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#8B9CB8" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section style={{ backgroundColor: "#0D1627" }} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold mb-3 text-center" style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}>Industries Served in Karachi</h2>
          <p className="text-center mb-10" style={{ color: "#8B9CB8" }}>We help all types of local businesses rank higher on Google in Karachi.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <span key={ind} className="px-5 py-2.5 rounded-full text-sm font-semibold" style={{ backgroundColor: "#111E33", color: "#4F8EF7", border: "1px solid rgba(79,142,247,0.30)" }}>
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#080D1A" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl p-10" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="text-4xl mb-6">⭐⭐⭐⭐⭐</div>
            <blockquote className="text-xl font-semibold italic mb-6 leading-relaxed" style={{ color: "#E2E8F0" }}>
              &ldquo;We went from zero online presence to ranking #1 for our main keywords in Karachi within 3 months. The enquiries tripled and we&apos;ve had to hire two more staff to handle the workload.&rdquo;
            </blockquote>
            <div>
              <div className="font-bold" style={{ color: "#E2E8F0" }}>Ahmed Raza</div>
              <div className="text-sm" style={{ color: "#8B9CB8" }}>Owner, Raza Plumbing Services, DHA Karachi</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#0D1627", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-12 text-center" style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}>
            Services for Karachi Businesses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="p-6 rounded-xl transition-all hover:border-blue-400" style={{ backgroundColor: "rgba(79,142,247,0.08)", border: "1px solid rgba(79,142,247,0.20)" }}>
                <div className="text-3xl mb-3">{s.icon}</div>
                <div className="font-semibold text-sm" style={{ color: "#E2E8F0" }}>{s.label}</div>
                <div className="text-xs mt-2" style={{ color: "#8B9CB8" }}>for Karachi</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#080D1A" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold mb-10 text-center" style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}>
            Frequently Asked Questions — Karachi
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl p-6" style={{ backgroundColor: "#111E33", border: "1px solid rgba(255,255,255,0.08)" }}>
                <h3 className="font-bold mb-2" style={{ color: "#E2E8F0" }}>{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#8B9CB8" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24" style={{ background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(79,142,247,0.10) 0%, #080D1A 70%)", borderTop: "1px solid rgba(79,142,247,0.20)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="gradient-text text-3xl sm:text-4xl font-extrabold mb-5" style={{ fontFamily: "var(--font-display, sans-serif)" }}>
            Ready to dominate Karachi&apos;s local search results?
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "#8B9CB8" }}>
            Start with a completely free audit — no obligation, no hard sell.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/free-audit" className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl" style={{ backgroundColor: "#4F8EF7" }}>
              Get My FREE Audit →
            </Link>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl" style={{ backgroundColor: "#22C55E" }}>
              💬 WhatsApp Me Now
            </a>
            <a href={IG_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5" style={{ background: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)", borderRadius: "0.75rem" }}>
              📸 Follow on Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
