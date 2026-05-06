import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: '那須どうぶつ王国 — Fieldwork | kansei.info',
  description: '那須の空を借景したバードショー——空そのものをショーの舞台装置にした唯一の事例。高原の自然と動物の共存という世界観。',
}

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/fieldwork" style={{ color: "var(--color-text-muted)" }}>Fieldwork</Link>
          <span>›</span>
          <span>那須どうぶつ王国</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-fieldwork)", marginBottom: "12px" }}>
          Type A — 意図的設計型 — 那須高原
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: "300", marginBottom: "16px" }}>
          那須どうぶつ王国
        </h1>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "48px", padding: "20px 24px", background: "var(--color-bg-alt)", borderLeft: "3px solid var(--color-fieldwork)" }}>
          那須の空を借景したバードショー——空そのものをショーの舞台装置にした唯一の事例。高原の自然と動物の共存という世界観。
        </p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>7層評価</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>①原初物語：○ 動物と自然の共存。②世界観接触：○。③境界侵入：○。④没入環境：◎ 那須の自然を借景した没入感。⑤期待増幅：○。⑥感動体験：◎★ 空を借景したバードショー。⑦伝播帰属：○。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>空を借景するショー</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>那須どうぶつ王国のバードショーは、那須の空そのものをショーの舞台装置にしている。鳥が青空を背景に飛ぶ瞬間——これはディズニーのArt of the Showとは異なる、自然を借景した「借景型パフォーマンス」だ。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>地域OSとテーマパークの共存</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>那須どうぶつ王国は、那須という地域OSの上で動くType A的なアプリケーションだ。地域の自然を活かしながら、意図的な設計も施している。Type AとType Bの特性を両方持つ、ハイブリッドな事例といえる。</p>
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
