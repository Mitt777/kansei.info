import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: '東京ディズニーランド — Fieldwork | kansei.info',
  description: '世界観設計の頂点。7層モデルのすべてがイマジニアリング哲学と接続している。比較基準点として最重要なスポット。1983年開園。',
}

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/fieldwork" style={{ color: "var(--color-text-muted)" }}>Fieldwork</Link>
          <span>›</span>
          <span>東京ディズニーランド</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-frameworks)", marginBottom: "12px" }}>
          Type A — 意図的設計型 — 千葉県浦安市
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: "300", marginBottom: "16px" }}>
          東京ディズニーランド
        </h1>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "48px", padding: "20px 24px", background: "var(--color-bg-alt)", borderLeft: "3px solid var(--color-frameworks)" }}>
          世界観設計の頂点。7層モデルのすべてがイマジニアリング哲学と接続している。比較基準点として最重要なスポット。1983年開園。
        </p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>7層評価</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>①原初物語：◎★ It All Begins with a Story。②世界観接触：◎ 世界的なIPと事前期待形成。③境界侵入：◎★ Weenie理論・シンデレラ城。④没入環境：◎★ Art of the Show・Mickey's 10戒。⑤期待増幅：◎★ プレ・ショー・行列の世界観化。⑥感動体験：◎★ Plussing文化。⑦伝播帰属：◎★ Fan Experience拡張。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>なぜディズニーが基準点なのか</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>世界観マーケティングを論じる上で、ディズニーは欠かせない比較基準だ。70年以上にわたり、世界観設計を意図的・体系的・公式に実践してきた唯一の組織だからだ。その設計哲学（Weenie理論・Art of the Show・Mickey's Ten Commandments）は、7層モデルとほぼ完全に対応している。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>ミッキーの10戒との対応</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>Marty Sklar が策定したMickey's Ten Commandmentsの各原則は、7層モデルの各層に対応する。特に「Wear your guest's shoes」（顧客の立場に立つ）「Avoid overload」（過負荷を避ける）「Tell one story at a time」（一度に一つの物語を語る）は、世界観設計の核心だ。</p>
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
