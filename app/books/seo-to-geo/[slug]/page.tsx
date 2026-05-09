import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import RelatedKnowledge from "@/components/RelatedKnowledge";
import { seoToGeoBook, seoToGeoChapters } from "../content";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return seoToGeoChapters.map((chapter) => ({ slug: chapter.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const chapter = seoToGeoChapters.find((item) => item.slug === params.slug);
  if (!chapter) {
    return {};
  }

  return {
    title: `${chapter.title} — ${seoToGeoBook.title}`,
    description: chapter.description,
    keywords: chapter.keywords,
    alternates: {
      canonical: `${seoToGeoBook.canonical}/${chapter.slug}`,
    },
  };
}

export default function SeoToGeoChapterPage({ params }: Props) {
  const index = seoToGeoChapters.findIndex((item) => item.slug === params.slug);
  const chapter = seoToGeoChapters[index];

  if (!chapter) {
    notFound();
  }

  const previous = seoToGeoChapters[index - 1];
  const next = seoToGeoChapters[index + 1];
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: chapter.title,
    description: chapter.description,
    author: {
      "@type": "Person",
      name: seoToGeoBook.author,
    },
    isPartOf: {
      "@type": "Book",
      name: seoToGeoBook.title,
      url: seoToGeoBook.canonical,
    },
    inLanguage: "ja",
    url: `${seoToGeoBook.canonical}/${chapter.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <main>
        <article style={{ padding: "82px 0 72px" }}>
          <div className="container" style={{ maxWidth: 760 }}>
            <nav style={{ marginBottom: 34, fontSize: ".88rem", color: "var(--color-muted)" }}>
              <Link href="/books">Books</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/books/seo-to-geo">SEOの終わり、GEOの始まり</Link>
            </nav>

            <p className="eyebrow">{chapter.navLabel}</p>
            <h1 style={{ marginTop: 16, lineHeight: 1.45 }}>{chapter.title}</h1>
            <p className="lead" style={{ marginTop: 20 }}>{chapter.description}</p>

            <div style={{ marginTop: 48, display: "grid", gap: 28 }}>
              {chapter.blocks.map((block, blockIndex) => {
                if (block.type === "heading") {
                  return (
                    <h2 key={blockIndex} style={{ fontSize: "1.42rem", marginTop: 14, lineHeight: 1.6 }}>
                      {block.text}
                    </h2>
                  );
                }

                if (block.type === "diagram") {
                  return (
                    <pre
                      key={blockIndex}
                      style={{
                        overflowX: "auto",
                        whiteSpace: "pre-wrap",
                        border: "1px solid var(--color-border)",
                        background: "var(--color-surface)",
                        padding: "18px 20px",
                        fontSize: ".86rem",
                        lineHeight: 1.8,
                      }}
                    >
                      {block.text}
                    </pre>
                  );
                }

                return (
                  <p key={blockIndex} style={{ color: "var(--color-text)", lineHeight: 2.18 }}>
                    {block.text}
                  </p>
                );
              })}
            </div>

            {chapter.slug === "chapter-7" && (
              <aside
                style={{
                  borderTop: "1px solid var(--color-border)",
                  borderBottom: "1px solid var(--color-border)",
                  marginTop: 52,
                  padding: "26px 0",
                }}
              >
                <p className="eyebrow">Related Concepts</p>
                <h2 style={{ fontSize: "1.24rem", marginTop: 12 }}>GEOと世界観マーケティングをつなぐ概念</h2>
                <p style={{ color: "var(--color-muted)", lineHeight: 2, marginTop: 16 }}>
                  AIが読む文脈とは、情報の羅列ではありません。語り口の一貫性、空間の雰囲気、口コミの感情、写真の印象、FAQの誠実さ、
                  そしてその企業や場所が持つ世界観の連続性です。この章は、GEOを世界観価値・Atmospheric UX・文脈継続性へ接続する入口です。
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 22 }}>
                  <Link href="/frameworks/worldview-value">世界観価値の方程式 →</Link>
                  <Link href="/labs/geo-theory">GEO構造論 →</Link>
                  <Link href="/labs/atmospheric-ux">Atmospheric UX →</Link>
                </div>
              </aside>
            )}

            <nav
              style={{
                borderTop: "1px solid var(--color-border)",
                marginTop: 58,
                paddingTop: 26,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 16,
              }}
            >
              {previous ? (
                <Link href={`/books/seo-to-geo/${previous.slug}`}>← {previous.navLabel}</Link>
              ) : (
                <Link href="/books/seo-to-geo">← 書籍トップへ</Link>
              )}
              {next ? (
                <Link href={`/books/seo-to-geo/${next.slug}`} style={{ textAlign: "right" }}>
                  {next.navLabel} →
                </Link>
              ) : (
                <Link href="/books/seo-to-geo" style={{ textAlign: "right" }}>
                  書籍トップへ →
                </Link>
              )}
            </nav>
          </div>
        </article>

        <RelatedKnowledge
          heading="この章に関連する知識"
          items={[
            { href: "/books/seo-to-geo", type: "book", title: "SEOの終わり、GEOの始まり" },
            { href: "/labs/geo-theory", type: "lab", title: "GEO構造論" },
            { href: "/frameworks/worldview-value", type: "framework", title: "世界観価値の方程式" },
            { href: "/research", type: "research", title: "Research" },
          ]}
        />
      </main>
    </>
  );
}
