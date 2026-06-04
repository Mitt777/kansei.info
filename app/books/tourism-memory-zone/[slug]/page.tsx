import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PracticeBridge from "@/components/PracticeBridge";
import RelatedKnowledge from "@/components/RelatedKnowledge";
import { tourismMemoryBook, tourismMemoryChapters } from "../content";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return tourismMemoryChapters.map((chapter) => ({ slug: chapter.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const chapter = tourismMemoryChapters.find((item) => item.slug === params.slug);
  if (!chapter) return {};

  return {
    title: `${chapter.title} — ${tourismMemoryBook.title}`,
    description: chapter.description,
    keywords: chapter.keywords,
    alternates: {
      canonical: `${tourismMemoryBook.canonical}/${chapter.slug}`,
    },
  };
}

export default function TourismMemoryZoneChapterPage({ params }: Props) {
  const index = tourismMemoryChapters.findIndex((item) => item.slug === params.slug);
  const chapter = tourismMemoryChapters[index];

  if (!chapter) notFound();

  const previous = tourismMemoryChapters[index - 1];
  const next = tourismMemoryChapters[index + 1];
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: chapter.title,
    description: chapter.description,
    author: {
      "@type": "Person",
      name: tourismMemoryBook.author,
    },
    isPartOf: {
      "@type": "Book",
      name: tourismMemoryBook.title,
      url: tourismMemoryBook.canonical,
    },
    inLanguage: "ja",
    url: `${tourismMemoryBook.canonical}/${chapter.slug}`,
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
              <Link href="/books/tourism-memory-zone">観光記憶圏試論</Link>
            </nav>

            <p className="eyebrow">{chapter.navLabel}</p>
            <h1 style={{ marginTop: 16, lineHeight: 1.45 }}>{chapter.title}</h1>
            {chapter.subtitle && <p className="lead" style={{ marginTop: 20 }}>{chapter.subtitle}</p>}

            <div style={{ marginTop: 48, display: "grid", gap: 26 }}>
              {chapter.blocks.map((block, blockIndex) => {
                if (block.type === "heading") {
                  return (
                    <h2 key={blockIndex} style={{ fontSize: "1.36rem", marginTop: 14, lineHeight: 1.6 }}>
                      {block.text}
                    </h2>
                  );
                }

                return (
                  <p key={blockIndex} style={{ color: "var(--color-text)", lineHeight: 2.18 }}>
                    {block.text}
                  </p>
                );
              })}
            </div>

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
                <Link href={`/books/tourism-memory-zone/${previous.slug}`}>← {previous.navLabel}</Link>
              ) : (
                <Link href="/books/tourism-memory-zone">← 書籍トップへ</Link>
              )}
              {next ? (
                <Link href={`/books/tourism-memory-zone/${next.slug}`} style={{ textAlign: "right" }}>
                  {next.navLabel} →
                </Link>
              ) : (
                <Link href="/books/tourism-memory-zone" style={{ textAlign: "right" }}>
                  書籍トップへ →
                </Link>
              )}
            </nav>

            <PracticeBridge />
          </div>
        </article>

        <RelatedKnowledge
          heading="この章に関連する知識"
          items={[
            { href: "/books/tourism-memory-zone", type: "book", title: "観光記憶圏試論" },
            { href: "/books/ai-sns-video", type: "book", title: "AI時代のバズらないSNS動画基礎講座" },
            { href: "/books/seo-to-geo", type: "book", title: "SEOの終わり、GEOの始まり" },
            { href: "/research", type: "research", title: "Research" },
          ]}
        />
      </main>
    </>
  );
}
