import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: '感性波動論 × 二流立地 × 地域SNS — Research | kansei.info',
  description: '三つの軸を接続した独自理論フレームの構築。「立地が悪い場所でもSNSで逆転できる」——二流立地理論の誕生。感性波動論・二流立地・地域SNSの統合。',
}

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/research" style={{ color: "var(--color-text-muted)" }}>Research</Link>
          <span>›</span>
          <span>Report 05</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-research)", marginBottom: "12px" }}>
          Report 05 — 論文思想編
        </div>
        <h1 style={{ fontSize: "clamp(1.3rem, 2.8vw, 2rem)", fontWeight: "300", marginBottom: "12px", lineHeight: "1.4" }}>
          感性波動論 × 二流立地 × 地域SNS
        </h1>
        <p style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "24px" }}>
          論文思想編——三軸を接続した独自理論フレームの構築
        </p>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "48px", padding: "20px 24px", background: "var(--color-bg-alt)", borderLeft: "3px solid var(--color-research)" }}>
          三つの軸を接続した独自理論フレームの構築。「立地が悪い場所でもSNSで逆転できる」——二流立地理論の誕生。感性波動論・二流立地・地域SNSの統合。
        </p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>二流立地理論の定義</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>二流立地とは、交通の便が悪い、人通りが少ない、観光地の中心から外れているなど、従来の「立地評価」では不利とされる場所のことだ。しかし那須での観測から、二流立地でも感性波動を起こせる場所が「また来たい場所」として成立することが判明した。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>なぜ二流立地が逆転できるか</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>二流立地が逆転できる理由は、SNSによって「空気」が伝わるようになったからだ。従来は「知られない」ことが最大の不利だったが、動画によって空気感を事前に届けられる時代になった。感性波動が起きれば、立地のハンデを超えられる。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>三軸の統合</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>感性波動論（なぜ拡散するか）× 二流立地理論（どこでも成立するか）× 地域SNS（どう伝わるか）——この三軸を統合することで、地域の小さな店舗が「また来たい場所」になるための包括的な理論フレームが完成した。</p>
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "40px", marginTop: "48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <Link href="/research" style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
            ← レポート一覧
          </Link>
          <Link href="/research/1000stores-strategy" className="btn-primary">1000店舗戦略へ →</Link>
        </div>
        <RelatedKnowledge
          items={[
            { href: "/research/kansei-hado", type: "research" as const, title: "感性波動レポート", description: "分析の出発点" },
            { href: "/research/1000stores-strategy", type: "research" as const, title: "1000店舗戦略", description: "実践への応用" },
            { href: "/labs/spi-model", type: "lab" as const, title: "Save→Plan→Impulse", description: "SNS行動との接続" },
          ]}
        />
      </div>
    </>
  )
}
