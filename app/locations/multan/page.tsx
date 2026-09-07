import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";
const PAGE_URL = `${BASE_URL}/locations/multan`;
const WA_LINK =
  "https://wa.me/923474825228?text=Hi!%20I%27m%20a%20Multan%20business%20and%20I%27d%20love%20to%20discuss%20local%20SEO%20to%20grow%20my%20business.%20Can%20you%20help%3F";
const IG_LINK = "https://www.instagram.com/small_business_marketing_profe/";

export const metadata: Metadata = {
  title: "Local SEO Services in Multan | Digital Marketing Expert",
  description:
    "Expert local SEO & digital marketing in Multan. Get your business to page 1 of Google in 30–90 days. Serving Gulgasht, Cantt, Bosan Road, Shah Rukn-e-Alam & all Multan areas. Free audit.",
  keywords: [
    "local SEO Multan",
    "digital marketing Multan",
    "SEO agency Multan",
    "Google Business Profile Multan",
    "Multan marketing agency",
    "online marketing Multan",
    "web design Multan",
    "Google Ads Multan",
    "small business marketing Multan",
    "local marketing Multan",
    "SEO expert Multan",
    "Multan SEO services",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Local SEO Services in Multan | Digital Marketing Expert",
    description: "Expert local SEO & digital marketing in Multan. Get to page 1 of Google in 30–90 days. Free audit.",
    url: PAGE_URL,
    type: "website",
    siteName: "SBMP — Local Digital Marketing",
    images: [{ url: `${BASE_URL}/sbmp-logo.png`, width: 1200, height: 630, alt: "Local SEO Multan — SBMP" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Services in Multan | SBMP",
    description: "Expert local SEO & digital marketing in Multan. Free audit.",
    images: [`${BASE_URL}/sbmp-logo.png`],
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${PAGE_URL}#localbusiness`,
  name: "SBMP — Local SEO Services Multan",
  description: "Expert local SEO & digital marketing for businesses in Multan. Google Business Profile optimisation, local SEO, and web design.",
  url: PAGE_URL,
  logo: `${BASE_URL}/sbmp-logo.png`,
  image: `${BASE_URL}/sbmp-logo.png`,
  email: "hello@sbmp.com",
  priceRange: "PKR 55,000–PKR 195,000",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Multan",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  geo: { "@type": "GeoCoordinates", latitude: 30.1575, longitude: 71.5249 },
  areaServed: [
    { "@type": "City", name: "Multan" },
    { "@type": "Place", name: "Gulgasht Colony, Multan" },
    { "@type": "Place", name: "Cantt, Multan" },
    { "@type": "Place", name: "Bosan Road, Multan" },
    { "@type": "Place", name: "New Multan, Multan" },
    { "@type": "Place", name: "Shah Rukn-e-Alam, Multan" },
    { "@type": "Place", name: "Chungi Amer Sidhu, Multan" },
  ],
  sameAs: [
    "https://www.facebook.com/profile.php?id=61583689962796",
    "https://www.instagram.com/small_business_marketing_profe/",
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: 4.9, reviewCount: 80, bestRating: 5, worstRating: 1 },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Locations", item: `${BASE_URL}/locations` },
    { "@type": "ListItem", position: 3, name: "Multan", item: PAGE_URL },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How can local SEO help my Multan business?", acceptedAnswer: { "@type": "Answer", text: "Local SEO gets your Multan business ranking at the top of Google when nearby customers search for your services, generating more calls and revenue within 30–90 days." } },
    { "@type": "Question", name: "Which areas of Multan do you cover?", acceptedAnswer: { "@type": "Answer", text: "We cover all Multan areas including Gulgasht Colony, Cantt, Bosan Road, New Multan, Shah Rukn-e-Alam, Chungi Amer Sidhu, and surrounding localities." } },
    { "@type": "Question", name: "How long before I see results in Multan?", acceptedAnswer: { "@type": "Answer", text: "Most Multan businesses see early ranking movement within 30–60 days, with strong page-1 positions typically in 90–120 days." } },
    { "@type": "Question", name: "What does local SEO cost in Multan?", acceptedAnswer: { "@type": "Answer", text: "Plans start from PKR 55,000/month with no long-term contracts. Most businesses invest PKR 95,000/month for full local SEO, Google Ads, and reputation management." } },
  ],
};

const services = [
  { icon: "📍", slug: "local-seo", label: "Local SEO" },
  { icon: "🎯", slug: "google-ads", label: "Google Ads" },
  { icon: "💻", slug: "web-design", label: "Web Design" },
  { icon: "📱", slug: "social-media", label: "Social Media" },
  { icon: "⭐", slug: "reputation", label: "Reputation" },
];

const industries = ["Textile & Clothing", "Restaurants & Hotels", "Clinics & Doctors", "Real Estate", "Agriculture & Farm Supply", "Retail Shops", "Auto Services", "Education", "Wedding Services", "Construction"];

const faqs = [
  { q: "How can local SEO help my Multan business?", a: "Local SEO places your Multan business at the top of Google when local customers search for your services — driving more calls, bookings, and consistent revenue within 30–90 days." },
  { q: "Which Multan areas do you cover?", a: "All major areas — Gulgasht Colony, Cantt, Bosan Road, New Multan, Shah Rukn-e-Alam, Chungi Amer Sidhu, and all surrounding Multan localities." },
  { q: "How quickly will I see results in Multan?", a: "Early ranking improvements typically appear in 30–60 days. Competitive page-1 positions take 90–120 days depending on keyword difficulty." },
  { q: "What does local SEO cost in Multan?", a: "Plans start at PKR 55,000/month, no contracts. Most businesses invest PKR 95,000/month for the full local SEO, Google Ads, and reputation package." },
  { q: "Do you help with Google Business Profile in Multan?", a: "Yes — Google Business Profile optimisation is core to every plan and the fastest way to achieve visibility in Multan's Google Maps results." },
];

export default function MultanPage() {
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
            <span style={{ color: "#8B9CB8" }}>Multan</span>
          </div>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white mb-6" style={{ backgroundColor: "rgba(79,142,247,0.15)", border: "1px solid rgba(79,142,247,0.3)" }}>
              🏆 Helping Multan businesses rank on Google
            </div>
            <h1 className="gradient-text text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6" style={{ fontFamily: "var(--font-display, sans-serif)" }}>
              Local SEO Services in Multan
            </h1>
            <p className="text-lg sm:text-xl mb-10" style={{ color: "#8B9CB8" }}>
              Get your Multan business to the top of Google. From Gulgasht to Cantt, Bosan Road to New Multan — I help local businesses generate real calls, real enquiries, and real revenue through proven local SEO strategies.
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
              { icon: "📍", label: "Multan Businesses Ranked", value: "15+" },
              { icon: "⭐", label: "Average Results", value: "Page 1 in 60 days" },
              { icon: "💰", label: "Revenue Generated", value: "PKR 25M+" },
              { icon: "🏆", label: "Years Serving Multan", value: "5+" },
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
              Why Local SEO Matters in Multan
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#8B9CB8" }}>
              Multan — the City of Saints — is a fast-growing commercial centre with increasing digital adoption. Local customers are searching Google for products and services every day. Without local SEO, your competitors are capturing those customers while your business stays invisible online.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🗺️", title: "Google Maps Domination", desc: "Appear in the Google Maps 3-pack when Multan customers search for your services. That's where the clicks and calls come from — especially on mobile." },
              { icon: "🔍", title: "Page 1 Organic Rankings", desc: "Own the top organic positions for your most valuable Multan keywords — sustainable visibility that drives enquiries month after month." },
              { icon: "📞", title: "More Local Calls & Leads", desc: "More visibility means more calls. Every lead is tracked so you know exactly what your investment is delivering every month." },
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
          <h2 className="text-3xl font-extrabold mb-3 text-center" style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}>Industries Served in Multan</h2>
          <p className="text-center mb-10" style={{ color: "#8B9CB8" }}>We help all types of local businesses rank higher on Google in Multan.</p>
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
              &ldquo;I was sceptical at first, but within two months our textile shop in Gulgasht was ranking number 1 in Google for Multan. Our online orders and walk-in customers both increased significantly.&rdquo;
            </blockquote>
            <div>
              <div className="font-bold" style={{ color: "#E2E8F0" }}>Hassan Butt</div>
              <div className="text-sm" style={{ color: "#8B9CB8" }}>Owner, Butt Textiles, Gulgasht Colony Multan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#0D1627", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-12 text-center" style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}>Services for Multan Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="p-6 rounded-xl transition-all hover:border-blue-400" style={{ backgroundColor: "rgba(79,142,247,0.08)", border: "1px solid rgba(79,142,247,0.20)" }}>
                <div className="text-3xl mb-3">{s.icon}</div>
                <div className="font-semibold text-sm" style={{ color: "#E2E8F0" }}>{s.label}</div>
                <div className="text-xs mt-2" style={{ color: "#8B9CB8" }}>for Multan</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#080D1A" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold mb-10 text-center" style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}>Frequently Asked Questions — Multan</h2>
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
            Ready to dominate Multan&apos;s local search results?
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
