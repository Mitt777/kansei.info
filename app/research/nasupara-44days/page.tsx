import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'
import FaqSection from '@/components/FaqSection'

export const metadata: Metadata = {
  title: 'なすぱらTV活動報告（44日間） — Research | kansei.info',
  description: 'Instagram保存・YouTube比較検討・TikTok衝動——Save/Plan/Impulse三分類が具体的な数字で現れ始めた中期観測。25日版からの「変化」と「発見の深化」を記録。',
}

const faqs = [
  { question: "44日間の観測で新たに何がわかりましたか？", answer: "44日目になると、Save・Plan・Impulseのパターンが明確な数字として現れてきました。特にInstagramでの「保存率」が世界観の強さと相関することが判明しました。単なる情報提供ではなく「その場にいた感覚」を伝える動画が高い保存率を示しました。" },
  { question: "SNSの反応と来店の関係はどうでしたか？", answer: "Instagram保存率が高い動画は、数週間後の来店につながるケースが多く観測されました。YouTube視聴時間が長い動画は、実際に訪問した顧客からの「事前に調べていた」という言及が多かった。プラットフォームによって来店までの時間軸が異なることも確認されました。" },
]

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/research" style={{ color: "var(--color-text-muted)" }}>Research</Link>
          <span>›</span>
          <span>Report 02</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-research)", marginBottom: "12px" }}>
          Report 02 — 観測レポート
        </div>
        <h1 style={{ fontSize: "clamp(1.3rem, 2.8vw, 2rem)", fontWeight: "300", marginBottom: "12px", lineHeight: "1.4" }}>
          なすぱらTV活動報告（44日間）
        </h1>
        <p style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "24px" }}>
          観測期間：9/12〜10/26
        </p>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "48px", padding: "20px 24px", background: "var(--color-bg-alt)", borderLeft: "3px solid var(--color-research)" }}>
          Instagram保存・YouTube比較検討・TikTok衝動——Save/Plan/Impulse三分類が具体的な数字で現れ始めた中期観測。25日版からの「変化」と「発見の深化」を記録。
        </p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>Save・Plan・Impulseが数字で見えてきた</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>44日目になると、パターンが明確になってきた。Instagramでは、那須の風景・カフェ・パン屋の動画が「保存」される——後で行く場所として記録される行動。YouTubeでは、どのスポットが良いかを比較する視聴行動。TikTokでは、動画を見た直後に検索する衝動的行動。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>世界観と拡散の関係</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>「世界観が強いコンテンツ」ほど保存率が高いことを観測した。単なる情報提供ではなく、「その場にいた感覚」を伝える動画が、Instagramでの保存を引き起こす。これはAtmospheric UXとSNSの接続を示す重要な発見だった。</p>
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "40px", marginTop: "48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <Link href="/research" style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
            ← レポート一覧
          </Link>
          <Link href="/research/nasupara-60days" className="btn-primary">60日間（集大成）へ →</Link>
        </div>
        <FaqSection faqs={faqs} />

        <RelatedKnowledge
          items={[
            { href: "/research/nasupara-25days", type: "research" as const, title: "25日間報告", description: "出発点" },
            { href: "/research/nasupara-60days", type: "research" as const, title: "60日間報告", description: "集大成" },
            { href: "/labs/spi-model", type: "lab" as const, title: "Save→Plan→Impulse", description: "行動モデル" },
          ]}
        />
      </div>
    </>
  )
}
