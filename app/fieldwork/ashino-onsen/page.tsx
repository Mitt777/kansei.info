import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'
import FaqSection from '@/components/FaqSection'

export const metadata: Metadata = {
  title: '芦野温泉旅館 — Fieldwork | kansei.info',
  description: '施設への道を進むにつれ木々の密度が増し、車内の会話が自然に静かになっていく——到着前に世界観が始まる。「文脈継続性」を最も深く感じた場所。',
}

const faqs = [
  { question: "芦野温泉旅館の文脈継続性はなぜ高いのですか？", answer: "SNSで見た格式ある旅館のイメージ→那須の山道→木々の密度→静寂→温泉、というすべてのプロセスが矛盾なく接続されているからです。特に「道中から始まる境界侵入」が特徴的で、施設への道を進むにつれ木々の密度が増し、車内の会話が自然に静かになっていく——到着前に世界観が始まっています。" },
  { question: "旅館の世界観設計で最も重要なことは何ですか？", answer: "「到着前から体験が始まっている」という意識を持つことです。予約確認メール・道案内・アプローチ——これらすべてが世界観の一部です。芦野温泉旅館の事例が示すように、施設の入口ではなく「道中」から世界観が始まることで、より深い没入感が生まれます。" },
]

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/fieldwork" style={{ color: "var(--color-text-muted)" }}>Fieldwork</Link>
          <span>›</span>
          <span>芦野温泉旅館</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-fieldwork)", marginBottom: "12px" }}>
          Type B — 旅館型 — 那須町芦野
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: "300", marginBottom: "16px" }}>
          芦野温泉旅館
        </h1>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "48px", padding: "20px 24px", background: "var(--color-bg-alt)", borderLeft: "3px solid var(--color-fieldwork)" }}>
          施設への道を進むにつれ木々の密度が増し、車内の会話が自然に静かになっていく——到着前に世界観が始まる。「文脈継続性」を最も深く感じた場所。
        </p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>7層評価</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>①原初物語：◎ 老舗旅館としての格式と歴史。②世界観接触：○。③境界侵入：◎★ 道中全体が境界侵入。④没入環境：◎ 雑木林に囲まれた静けさ。⑤期待増幅：◎ 道中の期待感。⑥感動体験：◎ 温泉と旅館の体験。⑦伝播帰属：○。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>道中が世界観になる</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>はとバスツアーで初めて訪れた日、施設への道を車で進んでいると、周囲の木々の密度が増すにつれて、車内の会話が自然に静かになっていった。到着する前に、すでに空気が変わっていた。これは7層モデルの③境界侵入が、施設の入口ではなく「道中」から始まっている事例だ。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>文脈継続性の完璧な実例</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>芦野温泉旅館は文脈継続性の完璧な実例だ。SNSで見た格式ある旅館のイメージ→那須の山道→木々の密度→静寂→温泉。これらすべてが矛盾なく接続されている。顧客の意識の動線が途切れない。</p>
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "32px", marginTop: "48px" }}>
          <Link href="/fieldwork" style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
            ← フィールドワーク一覧
          </Link>
        </div>
        <FaqSection faqs={faqs} />

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
