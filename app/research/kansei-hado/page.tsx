import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'
import FaqSection from '@/components/FaqSection'

export const metadata: Metadata = {
  title: '実地検証レポート × 感性波動レポート — Research | kansei.info',
  description: '観測データから「感性波動」という概念を抽出した分析フェーズ。なぜある動画が爆発的に拡散するのか——感性の波動構造を解明する。',
}

const faqs = [
  { question: "感性波動とは何ですか？", answer: "感性波動（Kansei Wave）とは、ある場所・体験・コンテンツが持つ感性的な力が、SNSを通じて波のように周囲に広がる現象です。「また行きたい」という感覚が個人から個人へと伝播していく構造を指します。那須地域での動画観測から帰納的に導き出された概念です。" },
  { question: "感性波動が起きる条件は何ですか？", answer: "感性波動が起きる動画には共通点があります。①場所の空気（Atmospheric UX）が伝わっている、②Pre-Meaning——見た瞬間に「行きたい」と感じる何か——がある、③世界観の一貫性が保たれている。この三要素が揃った時に感性波動が起きます。" },
]

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/research" style={{ color: "var(--color-text-muted)" }}>Research</Link>
          <span>›</span>
          <span>Report 04</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-research)", marginBottom: "12px" }}>
          Report 04 — 分析レポート
        </div>
        <h1 style={{ fontSize: "clamp(1.3rem, 2.8vw, 2rem)", fontWeight: "300", marginBottom: "12px", lineHeight: "1.4" }}>
          実地検証レポート × 感性波動レポート
        </h1>
        <p style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "24px" }}>
          観測データからの概念抽出フェーズ
        </p>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "48px", padding: "20px 24px", background: "var(--color-bg-alt)", borderLeft: "3px solid var(--color-research)" }}>
          観測データから「感性波動」という概念を抽出した分析フェーズ。なぜある動画が爆発的に拡散するのか——感性の波動構造を解明する。
        </p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>感性波動論の定義</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>感性波動（Kansei Wave）とは、ある場所・体験・コンテンツが持つ感性的な力が、SNSを通じて波のように周囲に広がる現象だ。「また行きたい」という感覚が、個人から個人へと伝播していく構造を指す。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>波動が起きる条件</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>感性波動が起きる動画には共通点があった。①場所の空気（Atmospheric UX）が伝わっている、②Pre-Meaning——見た瞬間に「行きたい」と感じる何か——がある、③世界観の一貫性が保たれている。この三要素が揃った時、拡散が起きる。</p>
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "40px", marginTop: "48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <Link href="/research" style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
            ← レポート一覧
          </Link>
          <Link href="/research/kansei-hado-theory" className="btn-primary">論文思想編へ →</Link>
        </div>
        <FaqSection faqs={faqs} />

        <RelatedKnowledge
          items={[
            { href: "/labs/atmospheric-ux", type: "lab" as const, title: "Atmospheric UX", description: "感性波動を生む要素" },
            { href: "/labs/pre-meaning", type: "lab" as const, title: "Pre-Meaning", description: "感性波動の核" },
            { href: "/research/kansei-hado-theory", type: "research" as const, title: "論文思想編", description: "理論化フェーズ" },
          ]}
        />
      </div>
    </>
  )
}
