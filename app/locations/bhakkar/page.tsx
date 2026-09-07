import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";
const PAGE_URL = `${BASE_URL}/locations/bhakkar`;
const WA_LINK =
  "https://wa.me/923474825228?text=Hi!%20I%27m%20a%20Bhakkar%20business%20and%20I%27d%20love%20to%20discuss%20local%20SEO%20to%20grow%20my%20business.%20Can%20you%20help%3F";
const IG_LINK = "https://www.instagram.com/small_business_marketing_profe/";

export const metadata: Metadata = {
  title: "Local SEO Services in Bhakkar | Digital Marketing Expert",
  description:
    "Expert local SEO & digital marketing in Bhakkar. Get your business to page 1 of Google in 30–90 days. Serving Bhakkar City, Darya Khan, Mankera & surrounding areas. Free audit.",
  keywords: [
    "local SEO Bhakkar",
    "digital marketing Bhakkar",
    "SEO agency Bhakkar",
    "Google Business Profile Bhakkar",
    "Bhakkar marketing agency",
    "online marketing Bhakkar",
    "web design Bhakkar",
    "Google Ads Bhakkar",
    "small business marketing Bhakkar",
    "local marketing Bhakkar",
    "SEO expert Bhakkar",
    "Bhakkar SEO services",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Local SEO Services in Bhakkar | Digital Marketing Expert",
    description: "Expert local SEO & digital marketing in Bhakkar. Get to page 1 of Google in 30–90 days. Free audit.",
    url: PAGE_URL,
    type: "website",
    siteName: "SBMP — Local Digital Marketing",
    images: [{ url: `${BASE_URL}/sbmp-logo.png`, width: 1200, height: 630, alt: "Local SEO Bhakkar — SBMP" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Services in Bhakkar | SBMP",
    description: "Expert local SEO & digital marketing in Bhakkar. Free audit.",
    images: [`${BASE_URL}/sbmp-logo.png`],
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${PAGE_URL}#localbusiness`,
  name: "SBMP — Local SEO Services Bhakkar",
  description: "Expert local SEO & digital marketing for businesses in Bhakkar. Google Business Profile optimisation, local SEO, and web design.",
  url: PAGE_URL,
  logo: `${BASE_URL}/sbmp-logo.png`,
  image: `${BASE_URL}/sbmp-logo.png`,
  email: "hello@sbmp.com",
  priceRange: "PKR 55,000–PKR 195,000",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bhakkar",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  geo: { "@type": "GeoCoordinates", latitude: 31.6268, longitude: 71.0645 },
  areaServed: [
    { "@type": "City", name: "Bhakkar" },
    { "@type": "Place", name: "Bhakkar City" },
    { "@type": "Place", name: "Darya Khan, Bhakkar" },
    { "@type": "Place", name: "Mankera, Bhakkar" },
    { "@type": "Place", name: "Kallur Kot, Bhakkar" },
    { "@type": "Place", name: "Dullewala, Bhakkar" },
  ],
  sameAs: [
    "https://www.facebook.com/profile.php?id=61583689962796",
    "https://www.instagram.com/small_business_marketing_profe/",
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: 4.9, reviewCount: 45, bestRating: 5, worstRating: 1 },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Locations", item: `${BASE_URL}/locations` },
    { "@type": "ListItem", position: 3, name: "Bhakkar", item: PAGE_URL },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How can local SEO help my Bhakkar business?", acceptedAnswer: { "@type": "Answer", text: "Local SEO gets your Bhakkar business ranking at the top of Google when nearby customers search for your services. More visibility means more calls and revenue within 30–90 days." } },
    { "@type": "Question", name: "Do you cover Darya Khan and Mankera?", acceptedAnswer: { "@type": "Answer", text: "Yes — we cover all Bhakkar district areas including Bhakkar City, Darya Khan, Mankera, Kallur Kot, and Dullewala." } },
    { "@type": "Question", name: "How long before I see results in Bhakkar?", acceptedAnswer: { "@type": "Answer", text: "Most Bhakkar businesses see early ranking movement within 30–60 days. Bhakkar is less competitive than major cities, so results often come faster." } },
    { "@type": "Question", name: "What does local SEO cost in Bhakkar?", acceptedAnswer: { "@type": "Answer", text: "Plans start from PKR 55,000/month with no long-term contracts. Most businesses invest PKR 95,000/month for full local SEO, Google Ads, and reputation management." } },
  ],
};

const services = [
  { icon: "📍", slug: "local-seo", label: "Local SEO" },
  { icon: "🎯", slug: "google-ads", label: "Google Ads" },
  { icon: "💻", slug: "web-design", label: "Web Design" },
  { icon: "📱", slug: "social-media", label: "Social Media" },
  { icon: "⭐", slug: "reputation", label: "Reputation" },
];

const industries = ["Agriculture & Farming", "Retail Shops", "Clinics & Pharmacies", "Building Materials", "Petrol Stations", "Restaurants & Dhabas", "Transport & Logistics", "Education & Schools", "Auto Workshops", "Hardware Stores"];

const faqs = [
  { q: "How can local SEO help my Bhakkar business?", a: "Local SEO places your Bhakkar business at the top of Google when local customers search for your services — driving more calls and revenue within 30–90 days. Bhakkar is less competitive online than major cities, so results often come even faster." },
  { q: "Do you cover Darya Khan, Mankera, and other Bhakkar areas?", a: "Yes — we cover all areas including Bhakkar City, Darya Khan, Mankera, Kallur Kot, Dullewala, and the entire Bhakkar district." },
  { q: "How quickly will I see results in Bhakkar?", a: "Bhakkar is less digitally competitive than larger cities, which means early ranking improvements often appear in 30–45 days." },
  { q: "What does local SEO cost in Bhakkar?", a: "Plans start at PKR 55,000/month, no contracts. Most businesses invest PKR 95,000/month for the full local SEO, Google Ads, and reputation package." },
  { q: "Can you help my Google Business Profile appear in Bhakkar searches?", a: "Absolutely. Google Business Profile optimisation is the fastest way to appear in local Bhakkar searches and Google Maps results." },
];

export default function BhakkarPage() {
  return (
    <div style={{ backgroundColor: "#080D1A" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([localBusinessSchema, breadcrumbSchema, faqSchema]) }} />

      {/* Hero */}
      <section style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,142,247,0.18) 0%, transparent 70%), #080D1A", borderBottom: "1px solid rgba(255,255,255,0.07)" }} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm mb-8" style={{ color: "#4A5A6E" }}>
            <Link href="/" className="hover:text-white transition-colors" style={{ color: "#4A5A6E" }}>Home</Link>
            <span>→</span>
            <Link href="/locations" className="hover:text-white transition-colors" style={{ color: "#4A5A6E" }}>Locations</Link>
            <span>→</span>
            <span style={{ color: "#8B9CB8" }}>Bhakkar</span>
          </div>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white mb-6" style={{ backgroundColor: "rgba(79,142,247,0.15)", border: "1px solid rgba(79,142,247,0.3)" }}>
              🏆 Helping Bhakkar businesses rank on Google
            </div>
            <h1 className="gradient-text text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6" style={{ fontFamily: "var(--font-display, sans-serif)" }}>
              Local SEO Services in Bhakkar
            </h1>
            <p className="text-lg sm:text-xl mb-10" style={{ color: "#8B9CB8" }}>
              Get your Bhakkar business to the top of Google. From Bhakkar City to Darya Khan and Mankera — I help local businesses generate real calls, real enquiries, and real revenue. Being early with SEO in Bhakkar means your competitors won&apos;t catch up.
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
              { icon: "📍", label: "Bhakkar Businesses Ranked", value: "10+" },
              { icon: "⭐", label: "Average Results", value: "Page 1 in 45 days" },
              { icon: "💰", label: "Revenue Generated", value: "PKR 10M+" },
              { icon: "🏆", label: "Years Active in Bhakkar", value: "5+" },
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

      {/* Why Local SEO */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#080D1A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-5" style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}>
              Why Local SEO Matters in Bhakkar
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#8B9CB8" }}>
              Bhakkar is growing rapidly and local customers increasingly search Google before choosing a business. Most local businesses haven&apos;t yet invested in SEO — which means the opportunity to dominate Google in Bhakkar is massive right now, before the competition catches up.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🗺️", title: "Google Maps Visibility", desc: "Appear in the Google Maps 3-pack when Bhakkar customers search for your services. Be the first local business they call." },
              { icon: "🔍", title: "First-Mover Advantage", desc: "Bhakkar's SEO competition is still low. Rank on page 1 now and build a lead over competitors before they realise what's happening." },
              { icon: "📞", title: "More Calls & Walk-Ins", desc: "More Google visibility means more calls and walk-in customers. Every lead is tracked so you see exactly what you're getting." },
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
          <h2 className="text-3xl font-extrabold mb-3 text-center" style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}>Industries Served in Bhakkar</h2>
          <p className="text-center mb-10" style={{ color: "#8B9CB8" }}>We help all types of local businesses rank higher on Google in Bhakkar.</p>
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
              &ldquo;Nobody else in Bhakkar was doing SEO when we started. Now we&apos;re on the first page of Google and customers call us every day asking about our services. The best decision I made for my business.&rdquo;
            </blockquote>
            <div>
              <div className="font-bold" style={{ color: "#E2E8F0" }}>Tariq Mehmood</div>
              <div className="text-sm" style={{ color: "#8B9CB8" }}>Owner, Mehmood Hardware Store, Bhakkar City</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#0D1627", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-12 text-center" style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}>Services for Bhakkar Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="p-6 rounded-xl transition-all hover:border-blue-400" style={{ backgroundColor: "rgba(79,142,247,0.08)", border: "1px solid rgba(79,142,247,0.20)" }}>
                <div className="text-3xl mb-3">{s.icon}</div>
                <div className="font-semibold text-sm" style={{ color: "#E2E8F0" }}>{s.label}</div>
                <div className="text-xs mt-2" style={{ color: "#8B9CB8" }}>for Bhakkar</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#080D1A" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold mb-10 text-center" style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}>Frequently Asked Questions — Bhakkar</h2>
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
            Ready to dominate Bhakkar&apos;s local search results?
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "#8B9CB8" }}>Start with a completely free audit — no obligation, no hard sell.</p>
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
