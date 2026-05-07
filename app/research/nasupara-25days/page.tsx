import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'
import FaqSection from '@/components/FaqSection'

export const metadata: Metadata = {
  title: 'なすぱらTV活動報告（25日間） — Research | kansei.info',
  description: '那須地域SNS行動観測の最初の記録。25日間で何が見えたか——発見の物語の第一章。Instagram・YouTube・TikTokの反応の違いが初めて現れ始めた段階の生データ。',
}

const faqs = [
  { question: "なすぱらTVとは何ですか？", answer: "なすぱらTVは、藤井実彦が2025年に立ち上げたYouTube・Instagram・TikTokを横断するSNS動画企画です。那須地域の自然・食・人をテーマに、3ヶ月で600本以上の動画を制作・配信しました。この観測活動がSave→Plan→ImpulseモデルとHCII2026採択論文の実証的基盤となっています。" },
  { question: "25日間の観測で何がわかりましたか？", answer: "最初の25日間で、SNSプラットフォームによって反応の質が全く異なることが判明しました。同じ場所を紹介しても、Instagramでは保存が多く、YouTubeでは再生時間が長く、TikTokでは即座の反応が起きる。これがSave→Plan→Impulseモデルの萌芽となりました。" },
]

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/research" style={{ color: "var(--color-text-muted)" }}>Research</Link>
          <span>›</span>
          <span>Report 01</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-research)", marginBottom: "12px" }}>
          Report 01 — 観測レポート
        </div>
        <h1 style={{ fontSize: "clamp(1.3rem, 2.8vw, 2rem)", fontWeight: "300", marginBottom: "12px", lineHeight: "1.4" }}>
          なすぱらTV活動報告（25日間）
        </h1>
        <p style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "24px" }}>
          観測期間：9/12〜10/6
        </p>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "48px", padding: "20px 24px", background: "var(--color-bg-alt)", borderLeft: "3px solid var(--color-research)" }}>
          那須地域SNS行動観測の最初の記録。25日間で何が見えたか——発見の物語の第一章。Instagram・YouTube・TikTokの反応の違いが初めて現れ始めた段階の生データ。
        </p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>初期観測で気づいたこと</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>動画を投稿し始めた最初の25日間で、SNSプラットフォームによって反応の質が全く異なることに気づいた。同じ場所を紹介しても、Instagramでは「保存」が多く、YouTubeでは再生時間が長く、TikTokでは即座の反応が起きる。これが後のSave→Plan→Impulseモデルの萌芽だ。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>那須という場所の最初の印象</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>那須インターを降りた瞬間から、空気が変わる。それは単なる田舎の風景ではなく、「世界観」として機能している何かだった。この感覚を言語化しようと試みたことが、本フィールドワーク全体の出発点となった。</p>
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "40px", marginTop: "48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <Link href="/research" style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
            ← レポート一覧
          </Link>
          <Link href="/research/nasupara-44days" className="btn-primary">44日間報告へ →</Link>
        </div>
        <FaqSection faqs={faqs} />

        <RelatedKnowledge
          items={[
            { href: "/research/nasupara-44days", type: "research" as const, title: "44日間報告", description: "発見の深化" },
            { href: "/labs/spi-model", type: "lab" as const, title: "Save→Plan→Impulse", description: "行動モデルの発見" },
            { href: "/fieldwork/nasu", type: "fieldwork" as const, title: "那須フィールドワーク", description: "観測の舞台" },
          ]}
        />
      </div>
    </>
  )
}
