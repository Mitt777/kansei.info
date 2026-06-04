import type { Metadata } from 'next'
import Link from 'next/link'
import PracticeBridge from '@/components/PracticeBridge'
import RelatedKnowledge from '@/components/RelatedKnowledge'
import FaqSection from '@/components/FaqSection'

export const metadata: Metadata = {
  title: '感性が地域を動かす —— 二流立地×SNS×AIの1000店舗動画戦略 — Research | kansei.info',
  description: '理論・データ・AI戦略を統合した総括論文。1000店舗が自走する感性設計×AI自動化×SNS動画の統合モデル。kansei.infoのサービスの根拠資料。',
}

const faqs = [
  { question: "1000店舗自走モデルとは何ですか？", answer: "1000店舗自走モデルとは、感性設計（世界観マーケティング）・AI動画テンプレート・SNS最適化を組み合わせることで、地域の1000店舗が個別のSNS運用なしに動画マーケティングを実践できる仕組みです。感性波動論・二流立地理論・Save→Plan→Impulseモデルを実装した実践的システムです。" },
  { question: "AI動画テンプレートは世界観を壊しませんか？", answer: "AIが世界観を「作る」のではなく、すでに存在する世界観を「伝える」ために使う点が重要です。各店舗が持つ独自の空気・物語をAIを使って効率的に動画化します。世界観の設計は人間が行い、AIはその表現・配信を補助するという役割分担が核心です。" },
]

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/research" style={{ color: "var(--color-text-muted)" }}>Research</Link>
          <span>›</span>
          <span>Report 06</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-research)", marginBottom: "12px" }}>
          Report 06 — 統合論文
        </div>
        <h1 style={{ fontSize: "clamp(1.3rem, 2.8vw, 2rem)", fontWeight: "300", marginBottom: "12px", lineHeight: "1.4" }}>
          感性が地域を動かす —— 二流立地×SNS×AIの1000店舗動画戦略
        </h1>
        <p style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "24px" }}>
          理論・データ・AI戦略の統合総括論文
        </p>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "48px", padding: "20px 24px", background: "var(--color-bg-alt)", borderLeft: "3px solid var(--color-research)" }}>
          理論・データ・AI戦略を統合した総括論文。1000店舗が自走する感性設計×AI自動化×SNS動画の統合モデル。kansei.infoのサービスの根拠資料。
        </p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>1000店舗自走モデルとは</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>1000店舗自走モデルとは、感性設計（世界観マーケティング）・AI動画テンプレート・SNS最適化を組み合わせることで、地域の1000店舗が個別のSNS運用なしに動画マーケティングを実践できる仕組みだ。感性波動論・二流立地理論・Save→Plan→Impulseモデルを実装した実践的システム。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>AI動画テンプレートの役割</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>AI動画テンプレートは、各店舗の「世界観」を動画として表現するためのフォーマットだ。店舗が持つ独自の空気・物語を、AIを使って効率的に動画化する。ただし重要なのは、AIが世界観を「作る」のではなく、すでに存在する世界観を「伝える」ために使うということだ。</p>
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "40px", marginTop: "48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <Link href="/research" style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
            ← レポート一覧
          </Link>
          <Link href="/research/integrated-theory" className="btn-primary">統合理論へ →</Link>
        </div>
        <FaqSection faqs={faqs} />

        <PracticeBridge
          label="Clip Practice"
          title="1000店舗戦略の入口を、今日のお店の動画で試してみてください。"
          description="店主さんが迷わず撮れる3カット動画から、15秒以内の縦動画と投稿文まで進める小さな撮影室です。"
          href="https://clip.air-s.jp"
          linkLabel="clip.air-s.jpで試す →"
        />

        <RelatedKnowledge
          items={[
            { href: "/research/kansei-hado-theory", type: "research" as const, title: "論文思想編", description: "理論的基盤" },
            { href: "/research/integrated-theory", type: "research" as const, title: "統合理論", description: "学術的体系化" },
            { href: "/labs/spi-model", type: "lab" as const, title: "Save→Plan→Impulse", description: "動画戦略の核" },
          ]}
        />
      </div>
    </>
  )
}
