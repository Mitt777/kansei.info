import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: 'ペニーレイン — Fieldwork | kansei.info',
  description: 'ビートルズへの愛着というIPを軸に構築された世界観。駐車場から音楽が聞こえる——「境界侵入」が最も早く始まる店。',
}

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/fieldwork" style={{ color: "var(--color-text-muted)" }}>Fieldwork</Link>
          <span>›</span>
          <span>ペニーレイン</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-fieldwork)", marginBottom: "12px" }}>
          Type A’ — IP活用型 — 那須高原
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: "300", marginBottom: "16px" }}>
          ペニーレイン
        </h1>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "48px", padding: "20px 24px", background: "var(--color-bg-alt)", borderLeft: "3px solid var(--color-fieldwork)" }}>
          ビートルズへの愛着というIPを軸に構築された世界観。駐車場から音楽が聞こえる——「境界侵入」が最も早く始まる店。
        </p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>7層評価</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>①原初物語：◎ Beatles愛という明確なIP。②世界観接触：○ SNSでのビジュアル展開。③境界侵入：◎★ 駐車場から音楽——最も早い境界侵入。④没入環境：○ Beatles世界観の徹底。⑤期待増幅：○。⑥感動体験：○ パンの美味しさ。⑦伝播帰属：○。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>音という感覚層の設計</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>ペニーレインで最も印象的なのは、駐車場に着いた瞬間からBeatlesが聞こえることだ。建物の外まで音楽が届いている。これは③境界侵入の設計として極めて優秀だ。音という感覚が、日常から世界観への移行を促している。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>IP活用型の限界と強み</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>Type A'（IP活用型）の強みは、すでに世界中にファンがいるIPを活用できること。しかし、IPの人気変動リスクも存在する。ペニーレインの場合、Beatlesという時代を超えたIPを選択したことで、このリスクを最小化している。</p>
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "32px", marginTop: "48px" }}>
          <Link href="/fieldwork" style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
            ← フィールドワーク一覧
          </Link>
        </div>
        <RelatedKnowledge
          items={[
            { href: "/frameworks/7layers", type: "framework" as const, title: "7層モデル", description: "分析のフレームワーク" },
            { href: "/fieldwork", type: "fieldwork" as const, title: "全スポット一覧", description: "11スポットの比較" },
            { href: "/diagnosis", type: "framework" as const, title: "自分の場所を診断", description: "7層セルフ診断ツール" },
          ]}
        />
      </div>
    </>
  )
}
