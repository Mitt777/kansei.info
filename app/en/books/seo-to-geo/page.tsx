import type { Metadata } from "next";
import Link from "next/link";
import RelatedKnowledge from "@/components/RelatedKnowledge";
import { enSeoToGeoBook, enSeoToGeoSections } from "./content";

export const metadata: Metadata = {
  title: `${enSeoToGeoBook.title} — kansei.info`,
  description: enSeoToGeoBook.description,
  alternates: {
    canonical: enSeoToGeoBook.canonical,
  },
};

export default function EnSeoToGeoBookPage() {
  const bookJsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: enSeoToGeoBook.title,
    alternateName: enSeoToGeoBook.subtitle,
    author: {
      "@type": "Person",
      name: enSeoToGeoBook.author,
    },
    inLanguage: "en",
    url: enSeoToGeoBook.canonical,
    description: enSeoToGeoBook.description,
    workExample: enSeoToGeoSections.map((section) => ({
      "@type": "Chapter",
      name: section.title,
      url: `${enSeoToGeoBook.canonical}/${section.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookJsonLd) }} />
      <main>
        <section style={{ padding: "92px 0 58px" }}>
          <div className="container" style={{ maxWidth: 920 }}>
            <p className="eyebrow">English Book / GEO Knowledge Archive</p>
            <h1 style={{ marginTop: 16 }}>{enSeoToGeoBook.title}</h1>
            <p className="lead" style={{ marginTop: 18 }}>{enSeoToGeoBook.subtitle}</p>
            <p style={{ marginTop: 28, color: "var(--color-muted)", lineHeight: 2 }}>
              This English edition is not a literal translation of the Japanese manuscript. It is a condensed complete edition for international readers, connecting SEO history, generative AI, local discovery, worldview marketing, and the idea of the website as a Knowledge OS.
            </p>
          </div>
        </section>

        <section style={{ padding: "0 0 76px" }}>
          <div className="container" style={{ maxWidth: 980 }}>
            <div style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)", padding: "30px 0", display: "grid", gap: 18 }}>
              <h2 style={{ fontSize: "1.45rem" }}>Why This Archive Exists</h2>
              <p style={{ color: "var(--color-muted)", lineHeight: 2 }}>
                GEO is presented here not as a trick for AI search engines, but as a calm framework for making meaning, evidence, atmosphere, and trust understandable across multiple sources. It belongs to the same knowledge space as Atmospheric UX, Sekaikan, Pre-Meaning, and Human-side Alignment.
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: "0 0 92px" }}>
          <div className="container" style={{ maxWidth: 980 }}>
            <p className="eyebrow">Full English Edition</p>
            <h2 style={{ marginTop: 12 }}>Sections</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginTop: 30 }}>
              {enSeoToGeoSections.map((section) => (
                <Link key={section.slug} href={`/en/books/seo-to-geo/${section.slug}`} style={{ display: "block", border: "1px solid var(--color-border)", background: "var(--color-surface)", padding: 22, minHeight: 220 }}>
                  <p className="eyebrow">{section.navLabel}</p>
                  <h3 style={{ fontSize: "1.05rem", lineHeight: 1.55, marginTop: 12 }}>{section.title}</h3>
                  <p style={{ color: "var(--color-muted)", fontSize: ".92rem", lineHeight: 1.85, marginTop: 14 }}>{section.description}</p>
                  <span style={{ display: "inline-block", marginTop: 18, color: "var(--color-accent)" }}>Read section →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <RelatedKnowledge
          heading="Related Knowledge"
          items={[
            { href: "/en", type: "essay", title: "English Knowledge Space" },
            { href: "/en/glossary", type: "essay", title: "Glossary of Kansei Concepts" },
            { href: "/labs/geo-theory", type: "lab", title: "GEO Theory" },
            { href: "/frameworks/worldview-value", type: "framework", title: "Worldview Value Formula" },
          ]}
        />
      </main>
    </>
  );
}
