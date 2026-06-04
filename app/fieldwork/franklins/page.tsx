import type { Metadata } from 'next'
import Link from 'next/link'
import PracticeBridge from '@/components/PracticeBridge'
import RelatedKnowledge from '@/components/RelatedKnowledge'
import FaqSection from '@/components/FaqSection'

export const metadata: Metadata = {
  title: 'Franklin’s Cafe — Fieldwork | kansei.info',
  description: 'アクセスのしにくさが世界観の一部。細い道を進む不安が、到着した瞬間の安堵と喜びを倍にする。「期待増幅」が地理的に設計されている稀有な事例。',
}

const faqs = [
  { question: "フランクリンズカフェのアクセスの悪さはなぜ強みになるのですか？", answer: "細い道を進む「不安」が、到着した瞬間の「安堵と喜び」を倍にするからです。これは7層モデルの第五層・期待増幅が地理的条件によって実現された珍しい事例です。アクセスの困難さが「たどり着いた達成感」と「特別な場所にいる感覚」を生み出します。" },
  { question: "フランクリンズカフェはSNSでどう見せるべきですか？", answer: "「隠れ家感」「たどり着く体験」を前面に出すことが有効です。「細い道を進んだ先に…」という文脈継続性を意識したコンテンツが、Instagram保存（Save）を促します。アクセスの困難さをネガティブではなく「体験の一部」として表現することがポイントです。" },
]

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/fieldwork" style={{ color: "var(--color-text-muted)" }}>Fieldwork</Link>
          <span>›</span>
          <span>Franklin’s Cafe</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-fieldwork)", marginBottom: "12px" }}>
          Type B — 僻地型 — 那須高原
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: "300", marginBottom: "16px" }}>
          Franklin’s Cafe
        </h1>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "48px", padding: "20px 24px", background: "var(--color-bg-alt)", borderLeft: "3px solid var(--color-fieldwork)" }}>
          アクセスのしにくさが世界観の一部。細い道を進む不安が、到着した瞬間の安堵と喜びを倍にする。「期待増幅」が地理的に設計されている稀有な事例。
        </p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>7層評価</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>①原初物語：○ 僻地の隠れ家という明確なコンセプト。②世界観接触：○ SNSでの「隠れ家感」の演出。③境界侵入：◎ 細い道を進む道中全体が境界侵入。④没入環境：◎ 到着した瞬間の安堵感。⑤期待増幅：◎★ アクセスの困難さが最大の期待増幅。⑥感動体験：○。⑦伝播帰属：○。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>アクセスが世界観の一部になる</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>初めて訪れた時、本当にここに店があるのか不安になるような細い道を進んだ。しかしその不安が、到着した瞬間の安堵と喜びを倍にしていた。アクセスのしにくさが、ネガティブな要素ではなく、体験の一部として機能している。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>期待増幅の地理的設計</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>ディズニーのプレ・ショーが「待ち時間を体験化する」ならば、Franklin’s Cafeは「アクセスを体験化する」。これは7層モデルの⑤期待増幅が、空間設計だけでなく地理的条件によって実現された珍しい事例だ。</p>
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
