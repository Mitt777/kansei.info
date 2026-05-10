import type { Metadata } from "next";
import Link from "next/link";
import RelatedKnowledge from "@/components/RelatedKnowledge";
import { aiSnsVideoBook, aiSnsVideoChapters } from "./content";

export const metadata: Metadata = {
  title: `${aiSnsVideoBook.title} — kansei.info`,
  description: aiSnsVideoBook.description,
  alternates: {
    canonical: aiSnsVideoBook.canonical,
  },
};

function KindleButton() {
  if (aiSnsVideoBook.amazonUrl) {
    return (
      <a
        href={aiSnsVideoBook.amazonUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          border: "1px solid var(--color-border)",
          padding: "12px 18px",
          color: "var(--color-text)",
          background: "var(--color-surface)",
        }}
      >
        Amazon Kindleで読む
      </a>
    );
  }

  return (
    <span
      style={{
        display: "inline-block",
        border: "1px solid var(--color-border)",
        padding: "12px 18px",
        color: "var(--color-muted)",
        background: "var(--color-surface)",
      }}
    >
      Amazon Kindleで読む（リンク準備中）
    </span>
  );
}

export default function AiSnsVideoBookPage() {
  const bookJsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: aiSnsVideoBook.title,
    alternateName: aiSnsVideoBook.subtitle,
    author: {
      "@type": "Person",
      name: aiSnsVideoBook.author,
    },
    inLanguage: "ja",
    url: aiSnsVideoBook.canonical,
    description: aiSnsVideoBook.description,
    workExample: aiSnsVideoChapters.map((chapter) => ({
      "@type": "Chapter",
      name: chapter.title,
      url: `${aiSnsVideoBook.canonical}/${chapter.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookJsonLd) }}
      />
      <main>
        <section style={{ padding: "96px 0 56px" }}>
          <div className="container" style={{ maxWidth: 920 }}>
            <p className="eyebrow">Books / SNS Video Knowledge Archive</p>
            <h1 style={{ marginTop: 16 }}>{aiSnsVideoBook.title}</h1>
            <p className="lead" style={{ marginTop: 18 }}>{aiSnsVideoBook.subtitle}</p>
            <p style={{ marginTop: 28, color: "var(--color-muted)", lineHeight: 2 }}>
              {aiSnsVideoBook.description}
            </p>
            <div style={{ marginTop: 28 }}>
              <KindleButton />
            </div>
          </div>
        </section>

        <section style={{ padding: "28px 0 76px" }}>
          <div className="container" style={{ maxWidth: 980 }}>
            <div
              style={{
                borderTop: "1px solid var(--color-border)",
                borderBottom: "1px solid var(--color-border)",
                padding: "30px 0",
                display: "grid",
                gap: 18,
              }}
            >
              <h2 style={{ fontSize: "1.45rem" }}>この本の位置づけ</h2>
              <p style={{ color: "var(--color-muted)", lineHeight: 2 }}>
                本書は、SNS動画でバズるための本ではありません。AI時代に、小さなお店が本来つながるべきお客様と出会うために、
                店の空気、所作、地域性、保存、来店前の会話、そしてGEO時代の知識OSをどう残していくかを整理する全文アーカイブです。
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: "0 0 92px" }}>
          <div className="container" style={{ maxWidth: 980 }}>
            <p className="eyebrow">Full Text Archive</p>
            <h2 style={{ marginTop: 12 }}>章別全文公開</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 16,
                marginTop: 30,
              }}
            >
              {aiSnsVideoChapters.map((chapter) => (
                <Link
                  key={chapter.slug}
                  href={`/books/ai-sns-video/${chapter.slug}`}
                  style={{
                    display: "block",
                    border: "1px solid var(--color-border)",
                    background: "var(--color-surface)",
                    padding: 22,
                    minHeight: 220,
                  }}
                >
                  <p className="eyebrow">{chapter.navLabel}</p>
                  <h3 style={{ fontSize: "1.05rem", lineHeight: 1.6, marginTop: 12 }}>
                    {chapter.title.replace(`${chapter.navLabel}　`, "")}
                  </h3>
                  <p style={{ color: "var(--color-muted)", fontSize: ".92rem", lineHeight: 1.85, marginTop: 14 }}>
                    {chapter.description}
                  </p>
                  <span style={{ display: "inline-block", marginTop: 18, color: "var(--color-accent)" }}>
                    章を読む →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <RelatedKnowledge
          heading="関連する知識"
          items={[
            { href: "/research/hcii2026", type: "research", title: "HCII 2026 Accepted Paper" },
            { href: "/labs/spi-model", type: "lab", title: "Save → Plan → Impulse" },
            { href: "/labs/geo-theory", type: "lab", title: "GEO構造論" },
            { href: "/books/seo-to-geo", type: "book", title: "SEOの終わり、GEOの始まり" },
          ]}
        />
      </main>
    </>
  );
}
