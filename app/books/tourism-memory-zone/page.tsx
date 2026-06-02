import type { Metadata } from "next";
import Link from "next/link";
import RelatedKnowledge from "@/components/RelatedKnowledge";
import { tourismMemoryBook, tourismMemoryChapters } from "./content";

export const metadata: Metadata = {
  title: `${tourismMemoryBook.title} — kansei.info`,
  description: tourismMemoryBook.description,
  alternates: {
    canonical: tourismMemoryBook.canonical,
  },
};

export default function TourismMemoryZoneBookPage() {
  const bookJsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: tourismMemoryBook.title,
    alternateName: tourismMemoryBook.subtitle,
    author: {
      "@type": "Person",
      name: tourismMemoryBook.author,
    },
    inLanguage: "ja",
    url: tourismMemoryBook.canonical,
    description: tourismMemoryBook.description,
    workExample: tourismMemoryChapters.map((chapter) => ({
      "@type": "Chapter",
      name: chapter.title,
      url: `${tourismMemoryBook.canonical}/${chapter.slug}`,
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
            <p className="eyebrow">Books / AIRS System Charter</p>
            <h1 style={{ marginTop: 16 }}>{tourismMemoryBook.title}</h1>
            <p className="lead" style={{ marginTop: 18 }}>{tourismMemoryBook.subtitle}</p>
            <p style={{ marginTop: 28, color: "var(--color-muted)", lineHeight: 2 }}>
              {tourismMemoryBook.description}
            </p>
          </div>
        </section>

        <section style={{ padding: "20px 0 72px" }}>
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
              <h2 style={{ fontSize: "1.45rem" }}>AIRSシステムの理論的バックボーン</h2>
              <p style={{ color: "var(--color-muted)", lineHeight: 2 }}>
                本書は、map-s.site、g-maps.shop、okyakusa-ma.com、air-s.jp、clip.air-s.jp を
                ばらばらのWebサービスではなく、「場所の記憶」を観測し、保存し、発信し、地域へ返礼する
                AIRSシステムとして接続するための憲章的テキストです。
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: "0 0 92px" }}>
          <div className="container" style={{ maxWidth: 980 }}>
            <p className="eyebrow">Chapter Archive</p>
            <h2 style={{ marginTop: 12 }}>章別全文アーカイブ</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 16,
                marginTop: 30,
              }}
            >
              {tourismMemoryChapters.map((chapter) => (
                <Link
                  key={chapter.slug}
                  href={`/books/tourism-memory-zone/${chapter.slug}`}
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
                    {chapter.title}
                  </h3>
                  {chapter.subtitle && (
                    <p style={{ color: "var(--color-accent)", fontSize: ".82rem", marginTop: 8 }}>
                      {chapter.subtitle}
                    </p>
                  )}
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
          heading="AIRSシステムとの接続"
          items={[
            { href: "/books/tourism-memory-zone/chapter-9", type: "book", title: "AIRSという仮説" },
            { href: "/books/ai-sns-video", type: "book", title: "AI時代のバズらないSNS動画基礎講座" },
            { href: "/books/seo-to-geo", type: "book", title: "SEOの終わり、GEOの始まり" },
            { href: "/research/hcii2026", type: "research", title: "HCII 2026 Accepted Paper" },
          ]}
        />
      </main>
    </>
  );
}
