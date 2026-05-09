import type { Metadata } from "next";
import Link from "next/link";
import FaqSection from "@/components/FaqSection";
import RelatedKnowledge from "@/components/RelatedKnowledge";

export const metadata: Metadata = {
  title: "GEO構造論 — Generative Engine Optimization",
  description:
    "GEOをAI攻略ではなく、企業や店舗の意味構造を人間にもAIにも理解できる形へ整理する設計思想として定義する。",
  alternates: {
    canonical: "https://kansei.info/labs/geo-theory",
  },
};

const faqItems = [
  {
    question: "GEOとは何ですか？",
    answer:
      "GEOは、特定のAIをだます技術ではありません。企業・店舗・思想・実績・FAQ・口コミ・SNS・地図情報などを、人間にもAIにも理解できる意味構造として整理する設計思想です。",
  },
  {
    question: "SEOとGEOは何が違いますか？",
    answer:
      "SEOが検索結果の順位やクリック導線を中心に考えてきたのに対し、GEOはAIが複数の情報源を横断して比較・要約・推薦する時代に、実体と情報がどれだけ一致しているかを重視します。",
  },
  {
    question: "中小企業にGEOは必要ですか？",
    answer:
      "必要です。中小企業や地域店舗には、まだWeb化されていない一次情報、接客思想、実例、地域性、顧客の不安への応答が眠っています。それらを整理することがAI時代の信頼資産になります。",
  },
];

const osItems = [
  "会社概要・代表者の思想",
  "サービスの向き不向き",
  "料金・流れ・FAQ",
  "実績・事例・失敗からの学び",
  "Google Maps・口コミ・SNSとの一貫性",
  "現場写真・動画・フィールドノート",
];

export default function GeoTheoryPage() {
  return (
    <main>
      <section style={{ padding: "92px 0 62px" }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <p className="eyebrow">Labs / GEO Theory</p>
          <h1 style={{ marginTop: 16 }}>GEO構造論</h1>
          <p className="lead" style={{ marginTop: 20 }}>
            AIに参照されるための小手先の最適化ではなく、実体と情報を高度に一致させるための知識設計。
          </p>
          <p style={{ marginTop: 30, color: "var(--color-muted)", lineHeight: 2 }}>
            GEOとは、AI時代において、自分たちが何者であるかを、誠実に、正確に、構造的に伝えるための考え方です。
            ChatGPT、Gemini、Claude、Grok、GoogleのAI検索が発展するほど、Webサイトは単なる会社案内ではなく、
            企業や店舗の意味を整理した「知識OS」に近づいていきます。
          </p>
        </div>
      </section>

      <section style={{ padding: "0 0 72px" }}>
        <div className="container" style={{ maxWidth: 980 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
            }}
          >
            <div style={{ border: "1px solid var(--color-border)", background: "var(--color-surface)", padding: 28 }}>
              <p className="eyebrow">Definition</p>
              <h2 style={{ fontSize: "1.3rem", marginTop: 12 }}>AI攻略ではない</h2>
              <p style={{ color: "var(--color-muted)", lineHeight: 2, marginTop: 16 }}>
                GEOは、生成AIのアルゴリズムの裏をかく技術ではありません。むしろ、ごまかしが効きにくくなる時代に、
                事業の意味、実体、実績、顧客への応答を矛盾なく整理するための設計思想です。
              </p>
            </div>
            <div style={{ border: "1px solid var(--color-border)", background: "var(--color-surface)", padding: 28 }}>
              <p className="eyebrow">Core</p>
              <h2 style={{ fontSize: "1.3rem", marginTop: 12 }}>実体と情報の高度な一致</h2>
              <p style={{ color: "var(--color-muted)", lineHeight: 2, marginTop: 16 }}>
                公式サイト、Maps、口コミ、SNS、FAQ、写真、動画、事例がばらばらに存在するのではなく、
                ひとつの文脈として読める状態をつくることが、GEO時代の信頼構造になります。
              </p>
            </div>
            <div style={{ border: "1px solid var(--color-border)", background: "var(--color-surface)", padding: 28 }}>
              <p className="eyebrow">Knowledge OS</p>
              <h2 style={{ fontSize: "1.3rem", marginTop: 12 }}>会社案内から知識OSへ</h2>
              <p style={{ color: "var(--color-muted)", lineHeight: 2, marginTop: 16 }}>
                これからのWebサイトは、AIにも人間にも読める「自己紹介」「推薦状」「思想の地図」になります。
                それは順位を取るためのページ群ではなく、存在理由を構造化した知識基盤です。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 76px" }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>GEO時代の情報構造</h2>
          <pre
            style={{
              marginTop: 24,
              overflowX: "auto",
              whiteSpace: "pre-wrap",
              border: "1px solid var(--color-border)",
              background: "var(--color-surface)",
              padding: "22px 24px",
              lineHeight: 1.9,
              fontSize: ".9rem",
            }}
          >{`従来SEO
検索者
  ↓
Google検索
  ↓
リンク一覧
  ↓
クリック
  ↓
個別ページ

GEO時代
ユーザーの相談・不安・目的
  ↓
AI
  ↓
公式サイト / Google Maps / 口コミ / SNS / FAQ / 動画 / 事例
  ↓
比較・要約・推薦
  ↓
来店・問い合わせ・購入・引用`}</pre>
        </div>
      </section>



      <section style={{ padding: "0 0 78px" }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <p className="eyebrow">Worldview Connection</p>
          <h2 style={{ marginTop: 12 }}>AIは情報だけでなく、文脈・一貫性・世界観を読む</h2>
          <p style={{ marginTop: 24, color: "var(--color-muted)", lineHeight: 2 }}>
            GEOで重要なのは、情報量だけではありません。AIは、公式サイト、Google Maps、口コミ、SNS、FAQ、写真、動画、記事、書籍ページを横断しながら、
            その企業や場所が「何者なのか」を推測します。
          </p>
          <p style={{ marginTop: 18, color: "var(--color-muted)", lineHeight: 2 }}>
            そのとき読まれるのは、単なるスペックではなく、語り口の一貫性、顧客への向き合い方、空間の雰囲気、写真の印象、口コミに現れる感情、
            そして全体としての世界観です。つまりGEOは、世界観マーケティングをAI時代の情報構造へ接続する考え方でもあります。
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 26 }}>
            <Link href="/frameworks/worldview-value">世界観価値の方程式を読む →</Link>
            <Link href="/books/seo-to-geo/chapter-7">第7章：AIは文脈を読み始める →</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 82px" }}>
        <div className="container" style={{ maxWidth: 980 }}>
          <p className="eyebrow">GEO Maturity</p>
          <h2 style={{ marginTop: 12 }}>GEO成熟度の観点</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 14,
              marginTop: 26,
            }}
          >
            {osItems.map((item) => (
              <div
                key={item}
                style={{
                  borderTop: "1px solid var(--color-border)",
                  padding: "18px 0",
                  color: "var(--color-muted)",
                  lineHeight: 1.8,
                }}
              >
                {item}
              </div>
            ))}
          </div>
          <p style={{ marginTop: 24 }}>
            <Link href="/books/seo-to-geo/chapter-12">GEOチェックリストを読む →</Link>
          </p>
        </div>
      </section>

      <FaqSection faqs={faqItems} />

      <RelatedKnowledge
        heading="関連する知識"
        items={[
          { href: "/books/seo-to-geo", type: "book", title: "SEOの終わり、GEOの始まり" },
          { href: "/books/seo-to-geo/chapter-4", type: "book", title: "GEOとは何か" },
          { href: "/frameworks/worldview-value", type: "framework", title: "世界観価値の方程式" },
          { href: "/labs/atmospheric-ux", type: "lab", title: "Atmospheric UX" },
          { href: "/research/hcii2026", type: "research", title: "HCII 2026 Accepted Paper" },
        ]}
      />
    </main>
  );
}
