import type { Metadata } from 'next'
import Link from 'next/link'
import PracticeBridge from '@/components/PracticeBridge'
import RelatedKnowledge from '@/components/RelatedKnowledge'
import FaqSection from '@/components/FaqSection'

export const metadata: Metadata = {
  title: 'スパジアム・ジャポン — Fieldwork | kansei.info',
  description: '那須の静けさとは真逆——賑やかさが価値になる都市型スーパー銭湯。「静けさだけが世界観ではない」という発見を得た地元施設。',
}

const faqs = [
  { question: "スパジアムジャポンから世界観について何が学べますか？", answer: "「静けさだけが世界観ではない」という発見です。那須のSHOZO CAFEが「静けさ」を核とするなら、スパジアムは「賑やかさ・多様性・都市型の非日常」を核とします。重要なのはどちらが優れているかではなく、選んだ世界観を一貫させることです。都市型施設における世界観設計の事例として参考になります。" },
  { question: "都市型施設の世界観設計で重要なことは何ですか？", answer: "地域の空気を借景することが難しい都市型施設は、施設そのものが世界観を創出する必要があります。「日常から完全に切り離された非日常空間」「多様な体験の選択肢」「社交の場としての機能」など、都市ならではの強みを原初物語の核に据えることが有効です。" },
]

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/fieldwork" style={{ color: "var(--color-text-muted)" }}>Fieldwork</Link>
          <span>›</span>
          <span>スパジアム・ジャポン</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-fieldwork)", marginBottom: "12px" }}>
          Type A — 都市型 — 東京都東久留米市
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: "300", marginBottom: "16px" }}>
          スパジアム・ジャポン
        </h1>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "48px", padding: "20px 24px", background: "var(--color-bg-alt)", borderLeft: "3px solid var(--color-fieldwork)" }}>
          那須の静けさとは真逆——賑やかさが価値になる都市型スーパー銭湯。「静けさだけが世界観ではない」という発見を得た地元施設。
        </p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>7層評価</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>①原初物語：○ 関東最大級という物語。②世界観接触：○。③境界侵入：○。④没入環境：○ 賑やかさの中の没入。⑤期待増幅：○。⑥感動体験：○ 多様な風呂の体験。⑦伝播帰属：○。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>賑やかさが価値になる逆説</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>那須のSHOZO CAFEは「静けさ」が世界観の核だ。しかしスパジアムは「賑やかさ」が価値になる。地元施設として何度も訪れた観察から、世界観には「静けさ型」と「賑やかさ型」があることを学んだ。重要なのは、どちらが優れているかではなく、選んだ世界観を一貫させることだ。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>都市型世界観の特性</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>都市型施設の世界観は、地域の空気を借景することが難しい。その代わり、施設そのものが世界観を作り出す必要がある。スパジアムの場合、「非日常の湯の体験」「多様な選択肢」「社交の場」というコンセプトが世界観の核となっている。</p>
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "32px", marginTop: "48px" }}>
          <Link href="/fieldwork" style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
            ← フィールドワーク一覧
          </Link>
        </div>
        <FaqSection faqs={faqs} />

        <PracticeBridge />

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
