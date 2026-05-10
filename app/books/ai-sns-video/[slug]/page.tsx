import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import RelatedKnowledge from "@/components/RelatedKnowledge";
import { aiSnsVideoBook, aiSnsVideoChapters } from "../content";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return aiSnsVideoChapters.map((chapter) => ({ slug: chapter.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const chapter = aiSnsVideoChapters.find((item) => item.slug === params.slug);
  if (!chapter) {
    return {};
  }

  return {
    title: `${chapter.title} — ${aiSnsVideoBook.title}`,
    description: chapter.description,
    keywords: chapter.keywords,
    alternates: {
      canonical: `${aiSnsVideoBook.canonical}/${chapter.slug}`,
    },
  };
}

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
          padding: "11px 16px",
          color: "var(--color-text)",
          background: "var(--color-surface)",
          fontSize: ".92rem",
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
        padding: "11px 16px",
        color: "var(--color-muted)",
        background: "var(--color-surface)",
        fontSize: ".92rem",
      }}
    >
      Amazon Kindleで読む（リンク準備中）
    </span>
  );
}

export default function AiSnsVideoChapterPage({ params }: Props) {
  const index = aiSnsVideoChapters.findIndex((item) => item.slug === params.slug);
  const chapter = aiSnsVideoChapters[index];

  if (!chapter) {
    notFound();
  }

  const previous = aiSnsVideoChapters[index - 1];
  const next = aiSnsVideoChapters[index + 1];
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: chapter.title,
    description: chapter.description,
    author: {
      "@type": "Person",
      name: aiSnsVideoBook.author,
    },
    isPartOf: {
      "@type": "Book",
      name: aiSnsVideoBook.title,
      url: aiSnsVideoBook.canonical,
    },
    inLanguage: "ja",
    url: `${aiSnsVideoBook.canonical}/${chapter.slug}`,
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
              <Link href="/books/ai-sns-video">AI時代のバズらないSNS動画基礎講座</Link>
            </nav>

            <p className="eyebrow">{chapter.navLabel}</p>
            <h1 style={{ marginTop: 16, lineHeight: 1.45 }}>{chapter.title}</h1>
            <p className="lead" style={{ marginTop: 20 }}>{chapter.description}</p>
            <div style={{ marginTop: 28 }}>
              <KindleButton />
            </div>

            <div style={{ marginTop: 48, display: "grid", gap: 24 }}>
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
                  <p key={blockIndex} style={{ color: "var(--color-text)", lineHeight: 2.12 }}>
                    {block.text}
                  </p>
                );
              })}
            </div>

            <aside
              style={{
                borderTop: "1px solid var(--color-border)",
                borderBottom: "1px solid var(--color-border)",
                marginTop: 52,
                padding: "24px 0",
                display: "grid",
                gap: 14,
              }}
            >
              <p className="eyebrow">Kindle</p>
              <p style={{ color: "var(--color-muted)", lineHeight: 1.9 }}>
                Webでは全文を章ごとに公開しています。読書体験としてまとめて読みたい方には、Kindle版への導線も用意しています。
              </p>
              <KindleButton />
            </aside>

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
                <Link href={`/books/ai-sns-video/${previous.slug}`}>← {previous.navLabel}</Link>
              ) : (
                <Link href="/books/ai-sns-video">← 書籍トップへ</Link>
              )}
              {next ? (
                <Link href={`/books/ai-sns-video/${next.slug}`} style={{ textAlign: "right" }}>
                  {next.navLabel} →
                </Link>
              ) : (
                <Link href="/books/ai-sns-video" style={{ textAlign: "right" }}>
                  書籍トップへ →
                </Link>
              )}
            </nav>
          </div>
        </article>

        <RelatedKnowledge
          heading="この章に関連する知識"
          items={[
            { href: "/books/ai-sns-video", type: "book", title: "AI時代のバズらないSNS動画基礎講座" },
            { href: "/research/hcii2026", type: "research", title: "HCII 2026 Accepted Paper" },
            { href: "/labs/spi-model", type: "lab", title: "Save → Plan → Impulse" },
            { href: "/labs/geo-theory", type: "lab", title: "GEO構造論" },
          ]}
        />
      </main>
    </>
  );
}
