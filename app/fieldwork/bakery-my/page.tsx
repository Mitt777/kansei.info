import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: 'ベーカリーハウス・マイ（MY） — Fieldwork | kansei.info',
  description: '観光地でも、SNS映えスポットでもない地元のパン屋。「世界観は観光地だけの話ではない」という命題を証明する事例。常連客の振る舞いが世界観を作る。',
}

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/fieldwork" style={{ color: "var(--color-text-muted)" }}>Fieldwork</Link>
          <span>›</span>
          <span>ベーカリーハウス・マイ（MY）</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-fieldwork)", marginBottom: "12px" }}>
          Type B — 日常型 — 東京都東久留米市
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: "300", marginBottom: "16px" }}>
          ベーカリーハウス・マイ（MY）
        </h1>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "48px", padding: "20px 24px", background: "var(--color-bg-alt)", borderLeft: "3px solid var(--color-fieldwork)" }}>
          観光地でも、SNS映えスポットでもない地元のパン屋。「世界観は観光地だけの話ではない」という命題を証明する事例。常連客の振る舞いが世界観を作る。
        </p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>7層評価</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>①原初物語：○ 地域に愛されるパン屋という静かな哲学。②世界観接触：△ SNS展開は最小限。③境界侵入：○。④没入環境：○ 焼きたてパンの香り。⑤期待増幅：○。⑥感動体験：◎ 出来立てパンの体験。⑦伝播帰属：◎ 強い常連コミュニティ。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>日常の世界観</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>MYは観光地でもSNS映えスポットでもない。しかし地元で長年愛され続けている。これは世界観マーケティングが、観光地や特別な場所だけに適用される理論ではないことを証明する。日常の中にも、強い世界観は存在できる。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>社会層（第三層）の強さ</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>MYの世界観の核は、社会層（第三層）だ。常連客同士のコミュニティ、店主との関係、地域コミュニティの中心としての役割——これらが世界観を支えている。売上より「場所としての価値」が際立つ事例だ。</p>
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
