import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: 'HCII2026学会発表 — Save Plan Impulse: Kansei Driven Regional DX — Research | kansei.info',
  description: '国際HCI学会（HCII2026）採択・発表資料。那須フィールドスタディから導かれたSave-Plan-Impulseモデルの国際的な学術検証。最高権威の一次資料。',
}

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/research" style={{ color: "var(--color-text-muted)" }}>Research</Link>
          <span>›</span>
          <span>Report 08 ★</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-frameworks)", marginBottom: "12px" }}>
          Report 08 ★ — 国際学会発表
        </div>
        <h1 style={{ fontSize: "clamp(1.3rem, 2.8vw, 2rem)", fontWeight: "300", marginBottom: "12px", lineHeight: "1.4" }}>
          HCII2026学会発表 — Save Plan Impulse: Kansei Driven Regional DX
        </h1>
        <p style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "24px" }}>
          国際HCI学会（HCII2026）採択・発表資料
        </p>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "48px", padding: "20px 24px", background: "var(--color-bg-alt)", borderLeft: "3px solid var(--color-frameworks)" }}>
          国際HCI学会（HCII2026）採択・発表資料。那須フィールドスタディから導かれたSave-Plan-Impulseモデルの国際的な学術検証。最高権威の一次資料。
        </p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>採択の意義</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>国際HCI学会（Human-Computer Interaction International）への採択は、本フィールドワークの学術的妥当性を国際的に認められたことを意味する。「感性ドリブン地域DX」という概念が、HCI・UX・地域研究の交差点として世界に認知された。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>Save-Plan-Impulseの学術的定義</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>本論文では、Save（Instagram保存行動）・Plan（YouTube比較検討行動）・Impulse（TikTok衝動行動）を、SNSプラットフォームの設計特性と人間の認知・感情反応の相互作用として学術的に定義した。60日間・468本のフィールドデータが実証的根拠となっている。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>Kansei Designとの接続</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>本論文は、日本の感性工学（Kansei Engineering）の概念をSNS行動観測に応用した。感性（Kansei）——人間が感覚・感情・心理を通じて体験を評価する能力——が、地域DXを駆動するという新しい視点を提示した。</p>
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "40px", marginTop: "48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <Link href="/research" style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
            ← レポート一覧
          </Link>
          <Link href="/research" className="btn-secondary">レポート一覧に戻る</Link>
        </div>
        <RelatedKnowledge
          items={[
            { href: "/research/nasupara-60days", type: "research" as const, title: "60日間観測", description: "一次データ" },
            { href: "/books/spi-regional-dx", type: "book" as const, title: "Save→Plan→Impulse書籍", description: "書籍版" },
            { href: "/en/books/spi-regional-dx", type: "book" as const, title: "English Edition", description: "英語版" },
          ]}
        />
      </div>
    </>
  )
}
