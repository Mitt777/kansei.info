import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'
import FaqSection from '@/components/FaqSection'

export const metadata: Metadata = {
  title: 'なすぱらTV活動報告（60日間） — Research | kansei.info',
  description: '468本・300万インプレッション以上。60日間の観測が完結し、世界観マーケティング理論の実証的基盤となったデータの全記録。HCII2026論文の一次データ。',
}

const faqs = [
  { question: "60日間の観測データの全体像を教えてください。", answer: "2025年9月12日〜11月12日の60日間で468本の動画を制作・観測し、総インプレッション数は300万以上に達しました。この一次データからSave→Plan→Impulseモデルが確立され、HCII2026国際学会に採択された論文の実証的基盤となっています。" },
  { question: "300万インプレッションはどのように達成されましたか？", answer: "那須という地域の「世界観の強さ」が大きな要因です。同じ内容でも、地域の空気感・世界観が伝わる動画ほど多くの人に届き、より多くの保存・比較検討・衝動を引き起こしました。特定のバズ動画ではなく、継続的な世界観の蓄積が300万インプレッションを生み出しました。" },
]

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/research" style={{ color: "var(--color-text-muted)" }}>Research</Link>
          <span>›</span>
          <span>Report 03 ★</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-research)", marginBottom: "12px" }}>
          Report 03 ★ — 観測レポート・集大成
        </div>
        <h1 style={{ fontSize: "clamp(1.3rem, 2.8vw, 2rem)", fontWeight: "300", marginBottom: "12px", lineHeight: "1.4" }}>
          なすぱらTV活動報告（60日間）
        </h1>
        <p style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "24px" }}>
          観測期間：9/12〜11/12 / 468本 / 300万インプレッション以上
        </p>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "48px", padding: "20px 24px", background: "var(--color-bg-alt)", borderLeft: "3px solid var(--color-research)" }}>
          468本・300万インプレッション以上。60日間の観測が完結し、世界観マーケティング理論の実証的基盤となったデータの全記録。HCII2026論文の一次データ。
        </p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>60日間で確立されたモデル</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>468本の動画観測を通じて、Save→Plan→Impulseモデルが確立された。また、「世界観が強い場所」ほど各プラットフォームでの反応が均一に高いことが判明した。世界観の一貫性が、あらゆるSNSでの拡散を支える根拠となる。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>300万インプレッションが意味すること</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>300万インプレッションという数字は、那須という地域の「世界観の強さ」を示している。同じ内容でも、地域の空気感・世界観が伝わる動画ほど、より多くの人に届き、より多くの「保存」「比較検討」「衝動」を引き起こした。データが理論を裏付けた瞬間だった。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>HCII2026への接続</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>この60日間データが、国際HCI学会HCII2026に採択された論文の実証的基盤となった。フィールドワークが学術に接続した瞬間であり、「観測→理論→学術」という本プロジェクト全体の流れの核心をなす。</p>
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "40px", marginTop: "48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <Link href="/research" style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
            ← レポート一覧
          </Link>
          <Link href="/research/hcii2026" className="btn-primary">HCII2026論文へ →</Link>
        </div>
        <FaqSection faqs={faqs} />

        <RelatedKnowledge
          items={[
            { href: "/research/hcii2026", type: "research" as const, title: "HCII2026論文", description: "学術的検証" },
            { href: "/labs/spi-model", type: "lab" as const, title: "Save→Plan→Impulse", description: "導き出されたモデル" },
            { href: "/research/kansei-hado", type: "research" as const, title: "感性波動レポート", description: "次の分析フェーズ" },
          ]}
        />
      </div>
    </>
  )
}
