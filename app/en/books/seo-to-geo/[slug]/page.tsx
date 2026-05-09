import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import RelatedKnowledge from "@/components/RelatedKnowledge";
import { enSeoToGeoBook, enSeoToGeoSections } from "../content";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return enSeoToGeoSections.map((section) => ({ slug: section.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const section = enSeoToGeoSections.find((item) => item.slug === params.slug);
  if (!section) return {};

  return {
    title: `${section.title} — ${enSeoToGeoBook.title}`,
    description: section.description,
    keywords: section.keywords,
    alternates: {
      canonical: `${enSeoToGeoBook.canonical}/${section.slug}`,
    },
  };
}

export default function EnSeoToGeoSectionPage({ params }: Props) {
  const index = enSeoToGeoSections.findIndex((item) => item.slug === params.slug);
  const section = enSeoToGeoSections[index];
  if (!section) notFound();

  const previous = enSeoToGeoSections[index - 1];
  const next = enSeoToGeoSections[index + 1];
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: section.title,
    description: section.description,
    author: {
      "@type": "Person",
      name: enSeoToGeoBook.author,
    },
    isPartOf: {
      "@type": "Book",
      name: enSeoToGeoBook.title,
      url: enSeoToGeoBook.canonical,
    },
    inLanguage: "en",
    url: `${enSeoToGeoBook.canonical}/${section.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <main>
        <article style={{ padding: "82px 0 72px" }}>
          <div className="container" style={{ maxWidth: 760 }}>
            <nav style={{ marginBottom: 34, fontSize: ".88rem", color: "var(--color-muted)" }}>
              <Link href="/en">English</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/en/books/seo-to-geo">From SEO to GEO</Link>
            </nav>

            <p className="eyebrow">{section.navLabel}</p>
            <h1 style={{ marginTop: 16, lineHeight: 1.35 }}>{section.title}</h1>
            <p className="lead" style={{ marginTop: 20 }}>{section.description}</p>

            <div style={{ marginTop: 48, display: "grid", gap: 28 }}>
              {section.blocks.map((block, blockIndex) => {
                if (block.type === "heading") {
                  return <h2 key={blockIndex} style={{ fontSize: "1.42rem", marginTop: 14, lineHeight: 1.55 }}>{block.text}</h2>;
                }
                if (block.type === "diagram") {
                  return <pre key={blockIndex} style={{ overflowX: "auto", whiteSpace: "pre-wrap", border: "1px solid var(--color-border)", background: "var(--color-surface)", padding: "18px 20px", fontSize: ".86rem", lineHeight: 1.8 }}>{block.text}</pre>;
                }
                return <p key={blockIndex} style={{ color: "var(--color-text)", lineHeight: 2.08 }}>{block.text}</p>;
              })}
            </div>

            {section.slug === "chapter-6" && (
              <aside style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)", marginTop: 52, padding: "26px 0" }}>
                <p className="eyebrow">Related Concepts</p>
                <h2 style={{ fontSize: "1.24rem", marginTop: 12 }}>GEO, Worldview, and Atmospheric UX</h2>
                <p style={{ color: "var(--color-muted)", lineHeight: 2, marginTop: 16 }}>
                  This chapter connects GEO with Sekaikan, Atmospheric UX, and Contextual Continuity. AI does not only process facts. It increasingly reads patterns of consistency across atmosphere, language, evidence, and human response.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 22 }}>
                  <Link href="/en/glossary">English Glossary →</Link>
                  <Link href="/labs/geo-theory">GEO Theory →</Link>
                  <Link href="/frameworks/worldview-value">Worldview Value Formula →</Link>
                </div>
              </aside>
            )}

            <nav style={{ borderTop: "1px solid var(--color-border)", marginTop: 58, paddingTop: 26, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
              {previous ? <Link href={`/en/books/seo-to-geo/${previous.slug}`}>← {previous.navLabel}</Link> : <Link href="/en/books/seo-to-geo">← Book top</Link>}
              {next ? <Link href={`/en/books/seo-to-geo/${next.slug}`} style={{ textAlign: "right" }}>{next.navLabel} →</Link> : <Link href="/en/books/seo-to-geo" style={{ textAlign: "right" }}>Book top →</Link>}
            </nav>
          </div>
        </article>

        <RelatedKnowledge
          heading="Related Knowledge"
          items={[
            { href: "/en/books/seo-to-geo", type: "book", title: "From SEO to GEO" },
            { href: "/en/glossary", type: "essay", title: "Glossary of Kansei Concepts" },
            { href: "/labs/geo-theory", type: "lab", title: "GEO Theory" },
            { href: "/labs/atmospheric-ux", type: "lab", title: "Atmospheric UX" },
          ]}
        />
      </main>
    </>
  );
}
