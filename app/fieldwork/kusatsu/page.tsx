import type { Metadata } from 'next'
import Link from 'next/link'
import PracticeBridge from '@/components/PracticeBridge'
import RelatedKnowledge from '@/components/RelatedKnowledge'
import FaqSection from '@/components/FaqSection'

export const metadata: Metadata = {
  title: '草津温泉街 — Fieldwork | kansei.info',
  description: '湯畑を中心に半径500mに凝縮された世界観。街全体が一つのテーマパークとして機能する。那須との比較から多くを学んだスポット。',
}

const faqs = [
  { question: "草津温泉街が世界観設計の参考になる理由は何ですか？", answer: "草津温泉街は「街全体が一つの世界観」として機能している稀有な事例です。湯畑という圧倒的なWeenie（視覚的磁石）を中心に、硫黄の香り・石畳・温泉の湯煙・湯もみショーが一体となって世界観を形成しています。個店ではなく、地域全体が世界観設計の単位になっています。" },
  { question: "那須と草津の世界観の違いは何ですか？", answer: "那須が「静けさ・木・余白」を世界観の核とするなら、草津は「温泉という体験・賑わい・歴史」を核とします。どちらも地域全体が世界観として機能していますが、源泉が異なります。両者の比較から、Type B（無意識共鳴型）世界観にも多様なかたちがあることがわかります。" },
]

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/fieldwork" style={{ color: "var(--color-text-muted)" }}>Fieldwork</Link>
          <span>›</span>
          <span>草津温泉街</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-fieldwork)", marginBottom: "12px" }}>
          Type B — 地域全体型 — 群馬県草津町
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: "300", marginBottom: "16px" }}>
          草津温泉街
        </h1>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "48px", padding: "20px 24px", background: "var(--color-bg-alt)", borderLeft: "3px solid var(--color-fieldwork)" }}>
          湯畑を中心に半径500mに凝縮された世界観。街全体が一つのテーマパークとして機能する。那須との比較から多くを学んだスポット。
        </p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>7層評価</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>①原初物語：◎ 温泉地としての数百年の歴史が物語になっている。②世界観接触：◎ 草津ブランドの圧倒的な知名度。③境界侵入：◎ 湯畑という圧倒的なWeenie。④没入環境：◎ 湯の煙・硫黄の香り・石畳。⑤期待増幅：○ 湯もみショーなど。⑥感動体験：◎ 温泉そのもの。⑦伝播帰属：◎ 圧倒的なリピート率。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>湯畑というWeenie</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>草津の湯畑は、ディズニーの「Weenie」理論の完璧な実例だ。街に着いた瞬間から視覚的磁石として機能し、意識的な決断をする前に人を引き寄せる。しかも湯畑は、匂い・音・温度まで含んだ多感覚的なWeeniだ。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>那須との比較</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>那須が「静けさ」を世界観の核とするなら、草津は「温泉という体験」を核とする。どちらも地域全体が世界観として機能しているが、その源泉は異なる。比較することで、Type B世界観の多様性が見えてくる。</p>
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
