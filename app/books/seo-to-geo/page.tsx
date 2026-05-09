import type { Metadata } from "next";
import Link from "next/link";
import RelatedKnowledge from "@/components/RelatedKnowledge";
import { seoToGeoBook, seoToGeoChapters } from "./content";

export const metadata: Metadata = {
  title: `${seoToGeoBook.title} — kansei.info`,
  description: seoToGeoBook.description,
  alternates: {
    canonical: seoToGeoBook.canonical,
  },
};

export default function SeoToGeoBookPage() {
  const bookJsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: seoToGeoBook.title,
    alternateName: seoToGeoBook.subtitle,
    author: {
      "@type": "Person",
      name: seoToGeoBook.author,
    },
    inLanguage: "ja",
    url: seoToGeoBook.canonical,
    description: seoToGeoBook.description,
    workExample: seoToGeoChapters.map((chapter) => ({
      "@type": "Chapter",
      name: chapter.title,
      url: `${seoToGeoBook.canonical}/${chapter.slug}`,
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
            <p className="eyebrow">Books / GEO Knowledge Archive</p>
            <h1 style={{ marginTop: 16 }}>{seoToGeoBook.title}</h1>
            <p className="lead" style={{ marginTop: 18 }}>{seoToGeoBook.subtitle}</p>
            <p style={{ marginTop: 28, color: "var(--color-muted)", lineHeight: 2 }}>
              {seoToGeoBook.description}
            </p>
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
                本書は、検索順位を上げるための小手先の技術ではなく、AIが企業・店舗・思想・実績を横断的に読み取る時代に、
                何をどう構造化すべきかを整理するための知識OSです。SEO、Google Maps、口コミ、SNS、生成AI推薦を
                ひとつの情報流通史として扱い、GEOを「実体と情報の高度な一致」として定義します。
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: "0 0 92px" }}>
          <div className="container" style={{ maxWidth: 980 }}>
            <p className="eyebrow">Chapter Archive</p>
            <h2 style={{ marginTop: 12 }}>章別アーカイブ</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 16,
                marginTop: 30,
              }}
            >
              {seoToGeoChapters.map((chapter) => (
                <Link
                  key={chapter.slug}
                  href={`/books/seo-to-geo/${chapter.slug}`}
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
                    {chapter.title.replace(`${chapter.navLabel}｜`, "")}
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

        <section style={{ padding: "0 0 92px" }}>
          <div className="container" style={{ maxWidth: 980 }}>
            <div
              style={{
                background: "var(--color-ink)",
                color: "white",
                padding: "34px 30px",
                display: "grid",
                gap: 16,
              }}
            >
              <p className="eyebrow" style={{ color: "rgba(255,255,255,.62)" }}>Practical Connection</p>
              <h2 style={{ color: "white", fontSize: "1.45rem" }}>実務への接続</h2>
              <p style={{ color: "rgba(255,255,255,.72)", lineHeight: 2 }}>
                kansei.info は思想・研究・長文アーカイブとして設計し、実務支援や具体的なWeb制作・SEO/GEO相談は
                Xbrains 側に役割を分けています。研究から実装へ進みたい場合の静かな入口です。
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <a href="https://xbrains.jp/seomarketing/" style={{ color: "white", textDecoration: "underline" }}>
                  Xbrains SEO/GEO支援
                </a>
                <a href="https://xbrains.jp/webmarketing/" style={{ color: "white", textDecoration: "underline" }}>
                  Xbrains Webマーケティング
                </a>
              </div>
            </div>
          </div>
        </section>

        <RelatedKnowledge
          heading="関連する知識"
          items={[
            { href: "/labs/geo-theory", type: "lab", title: "GEO構造論" },
            { href: "/frameworks", type: "framework", title: "Frameworks" },
            { href: "/books", type: "book", title: "Books" },
            { href: "/research/hcii2026", type: "research", title: "HCII 2026 Accepted Paper" },
          ]}
        />
      </main>
    </>
  );
}
