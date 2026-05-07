import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'
import FaqSection from '@/components/FaqSection'

export const metadata: Metadata = {
  title: 'HCII2026 Save-Plan-Impulse: Kansei Driven Regional DX — Research | kansei.info',
  description: '国際HCI学会（HCII2026）採択論文。Save-Plan-Impulse: Kansei Driven Regional DX — Action Observation Notes from the Nasu Field Study。藤井実彦著。那須地域60日間・468本・300万インプレッションのフィールドデータに基づく感性ドリブン地域DX論。',
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "headline": "Save-Plan-Impulse: Kansei Driven Regional DX — Action Observation Notes from the Nasu Field Study",
  "description": "This paper presents the Save-Plan-Impulse model derived from 60-day field observation of SNS behavior in the Nasu region of Japan. Based on 468 videos and 3 million impressions, the model identifies three distinct behavioral patterns: Save (Instagram bookmarking), Plan (YouTube comparative viewing), and Impulse (TikTok immediate action).",
  "url": "https://kansei.info/research/hcii2026",
  "author": {
    "@type": "Person",
    "name": "Mitsuhiko Fujii",
    "url": "https://kansei.info/about"
  },
  "isPartOf": {
    "@type": "Event",
    "name": "Human-Computer Interaction International 2026 (HCII2026)"
  },
  "about": [
    { "@type": "Thing", "name": "Save-Plan-Impulse Model" },
    { "@type": "Thing", "name": "Kansei Design" },
    { "@type": "Thing", "name": "Regional DX" },
    { "@type": "Thing", "name": "SNS Behavior" }
  ],
  "inLanguage": "en"
}

const faqs = [
  {
    question: "Save-Plan-Impulseモデルとは何ですか？",
    answer: "Save-Plan-Impulseとは、SNSプラットフォームによって顧客の世界観への接触様式と行動様式が根本的に異なるという観測モデルです。Instagram保存（Save：後で行く場所として保存）、YouTube比較検討（Plan：実際に行く前に詳細を調べる）、TikTok衝動（Impulse：動画を見た直後に行動する）の三段階からなります。那須地域での60日間・468本の動画観測から帰納的に導き出された行動モデルで、HCII2026国際学会に採択されています。"
  },
  {
    question: "HCII2026とはどのような学会ですか？",
    answer: "HCII（Human-Computer Interaction International）は、人間とコンピュータの相互作用を研究する国際学会です。UIデザイン・UX・人間工学・AI・アクセシビリティなど幅広いテーマを扱い、世界中の研究者が参加する権威ある学術イベントです。藤井実彦のSave-Plan-Impulse論文はHCII2026に採択されました。"
  },
  {
    question: "論文のデータ規模はどのくらいですか？",
    answer: "那須地域での60日間（2025年9月12日〜11月12日）にわたるフィールドワークで、468本の動画を制作・観測しました。総インプレッション数は300万以上に達しました。このデータからSave・Plan・Impulseの三種類の行動パターンを帰納的に導き出しました。"
  },
]

export default function Hcii2026Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/research" style={{ color: "var(--color-text-muted)" }}>Research</Link>
          <span>{"\u203a"}</span>
          <span>HCII2026</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-frameworks)", marginBottom: "12px" }}>
          Report 08 {"\u2605"} {"\u2014"} 国際学会発表
        </div>
        <h1 style={{ fontSize: "clamp(1.3rem, 2.8vw, 2rem)", fontWeight: "300", marginBottom: "12px", lineHeight: "1.4" }}>
          HCII2026学会発表<br />Save Plan Impulse: Kansei Driven Regional DX
        </h1>
        <p style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "24px" }}>
          国際HCI学会（HCII2026）採択・発表資料 / 藤井実彦
        </p>

        {/* 引用形式 */}
        <div style={{ padding: "16px 20px", background: "var(--color-bg-alt)", border: "1px solid var(--color-border)", borderLeft: "3px solid var(--color-frameworks)", marginBottom: "32px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.15em", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "8px" }}>Citation / 引用形式</div>
          <p style={{ fontSize: "13px", fontFamily: "var(--font-mono)", color: "var(--color-text-sub)", lineHeight: "1.8" }}>
            Fujii, M. (2026). Save-Plan-Impulse: Kansei Driven Regional DX — Action Observation Notes from the Nasu Field Study. <em>Proceedings of HCII 2026</em>.
          </p>
        </div>

        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "48px", padding: "20px 24px", background: "var(--color-bg-alt)", borderLeft: "3px solid var(--color-frameworks)" }}>
          国際HCI学会（HCII2026）採択・発表資料。那須フィールドスタディから導かれたSave-Plan-Impulseモデルの国際的な学術検証。最高権威の一次資料。
        </p>

        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px" }}>採択の意義</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>
          国際HCI学会（Human-Computer Interaction International）への採択は、本フィールドワークの学術的妥当性を国際的に認められたことを意味する。「感性ドリブン地域DX」という概念が、HCI・UX・地域研究の交差点として世界に認知された。
        </p>

        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px" }}>Save-Plan-Impulseの学術的定義</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>
          本論文では、Save（Instagram保存行動）・Plan（YouTube比較検討行動）・Impulse（TikTok衝動行動）を、SNSプラットフォームの設計特性と人間の認知・感情反応の相互作用として学術的に定義した。60日間・468本のフィールドデータが実証的根拠となっている。
        </p>

        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px" }}>Kansei Designとの接続</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>
          本論文は、日本の感性工学（Kansei Engineering）の概念をSNS行動観測に応用した。感性（Kansei）——人間が感覚・感情・心理を通じて体験を評価する能力——が、地域DXを駆動するという新しい視点を提示した。
        </p>

        <FaqSection faqs={faqs} heading="HCII2026論文について" />

        <RelatedKnowledge
          items={[
            { href: "/research/nasupara-60days", type: "research" as const, title: "60日間観測レポート", description: "一次データ" },
            { href: "/labs/spi-model", type: "lab" as const, title: "Save→Plan→Impulse", description: "行動モデルの詳細" },
            { href: "/en/books/spi-regional-dx", type: "book" as const, title: "English Edition", description: "英語版書籍" },
          ]}
        />
      </div>
    </>
  )
}
