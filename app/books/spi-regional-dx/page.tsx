import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: 'Save → Plan → Impulse 感性ドリブン地域DX論 — Books | kansei.info',
  description: '那須地域でのSNS行動観測から導き出されたSave→Plan→Impulseモデルの詳細。468本・300万インプレッションの一次データに基づく、感性ドリブン地域DXの実践論。',
}

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/books" style={{ color: "var(--color-text-muted)" }}>Books</Link>
          <span>›</span>
          <span style={{ color: "var(--color-text)" }}>Save → Plan → Impuls...</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-books)", marginBottom: "12px" }}>
          Book — 全文公開
        </div>
        <h1 style={{ fontSize: "clamp(1.3rem, 2.8vw, 2rem)", fontWeight: "300", marginBottom: "8px", lineHeight: "1.4" }}>
          Save → Plan → Impulse 感性ドリブン地域DX論
        </h1>
        <p style={{ fontSize: "14px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "8px" }}>
          ―― 那須フィールドスタディからの行動観測ノート
        </p>
        <p style={{ fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "28px" }}>
          藤井実彦 著<span style={{ marginLeft: "8px" }}>ネクストドアー出版</span>
        </p>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.9", marginBottom: "24px" }}>
          那須地域でのSNS行動観測から導き出されたSave→Plan→Impulseモデルの詳細。468本・300万インプレッションの一次データに基づく、感性ドリブン地域DXの実践論。
        </p>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.9", marginBottom: "32px", padding: "20px 24px", background: "var(--color-bg-alt)", borderLeft: "3px solid var(--color-books)" }}>
          本書は、那須地域でのフィールドワークから生まれた。60日間・468本の動画を観測する中で、InstagramユーザーはSave（保存）し、YouTubeユーザーはPlan（比較検討）し、TikTokユーザーはImpulse（衝動行動）するというパターンを発見した。この行動モデルが、地域DXを感性で駆動する理論的基盤となっている。
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
          <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>Save Plan Impulse</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>感性ドリブン</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>地域DX</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>那須フィールドワーク</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>SNS行動</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>468本</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>300万IMP</span>
        </div>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "64px" }}>
          <a href="https://amzn.asia/d/017s4Zwp" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Amazonで購入 →
          </a>
          <Link href="/books" className="btn-secondary">著作一覧に戻る</Link>
        </div>
        <RelatedKnowledge
          items={[
            { href: "/labs/spi-model", type: "lab" as const, title: "Save→Plan→Impulse", description: "行動モデルの詳細" },
            { href: "/research/nasupara-60days", type: "research" as const, title: "60日間観測レポート", description: "一次データ" },
            { href: "/en/books/spi-regional-dx", type: "book" as const, title: "English Edition", description: "英語版" },
          ]}
        />
      </div>
    </>
  )
}
