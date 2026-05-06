import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: '感性ドリブン地域DX論 —— 那須における二流立地構造・SNS行動データ・AI動画テンプレートの統合理論 — Research | kansei.info',
  description: '書籍「Save→Plan→Impulse」の学術的基盤。那須地域での実証データを理論として体系化した統合論文。自治体・DMO・研究者への一次資料。',
}

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/research" style={{ color: "var(--color-text-muted)" }}>Research</Link>
          <span>›</span>
          <span>Report 07</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-research)", marginBottom: "12px" }}>
          Report 07 — 統合理論
        </div>
        <h1 style={{ fontSize: "clamp(1.3rem, 2.8vw, 2rem)", fontWeight: "300", marginBottom: "12px", lineHeight: "1.4" }}>
          感性ドリブン地域DX論 —— 那須における二流立地構造・SNS行動データ・AI動画テンプレートの統合理論
        </h1>
        <p style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "24px" }}>
          書籍「Save→Plan→Impulse」の学術的基盤論文
        </p>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "48px", padding: "20px 24px", background: "var(--color-bg-alt)", borderLeft: "3px solid var(--color-research)" }}>
          書籍「Save→Plan→Impulse」の学術的基盤。那須地域での実証データを理論として体系化した統合論文。自治体・DMO・研究者への一次資料。
        </p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>統合理論の全体像</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>感性ドリブン地域DX論は、①感性波動論（なぜ拡散するか）②二流立地理論（どこでも成立するか）③SNS行動データ（どう行動が変わるか）④AI動画テンプレート（どう実装するか）の四層構造を持つ統合理論だ。それぞれが独立した発見でありながら、相互に接続している。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>那須という実証フィールドの意義</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>那須地域という具体的なフィールドでの実証が、この理論の最大の強みだ。60日間・468本という規模の一次データは、机上の理論ではなく現場から生まれた理論であることを証明する。これが書籍・論文・学会発表の根拠となっている。</p>
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "40px", marginTop: "48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <Link href="/research" style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
            ← レポート一覧
          </Link>
          <Link href="/research/hcii2026" className="btn-primary">HCII2026論文へ →</Link>
        </div>
        <RelatedKnowledge
          items={[
            { href: "/research/hcii2026", type: "research" as const, title: "HCII2026論文", description: "学術的頂点" },
            { href: "/books/spi-regional-dx", type: "book" as const, title: "Save→Plan→Impulse書籍", description: "書籍版" },
            { href: "/labs/spi-model", type: "lab" as const, title: "Save→Plan→Impulse", description: "行動モデル" },
          ]}
        />
      </div>
    </>
  )
}
