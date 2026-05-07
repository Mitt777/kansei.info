import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'
import FaqSection from '@/components/FaqSection'

export const metadata: Metadata = {
  title: '文脈継続性（Contextual Continuity） — Frameworks | kansei.info',
  description: 'SNSで見た世界観→地域へ向かう道→駐車場→入口→匂い→音→店員→料理→帰り道→再訪。この「流れ」に矛盾が少ないことが「また帰りたい」を生む。',
}

const faqs = [
  { question: "文脈継続性とは何ですか？", answer: "文脈継続性（Contextual Continuity）とは、顧客がSNSで見た世界観から、移動・到着・体験・帰宅後の記憶まで、すべてのプロセスで世界観の文脈に矛盾が生じないことです。この連続性が高いほど「また帰りたい」という感情が生まれやすくなります。楠木健の「因果論理の一貫性」を顧客体験の時間的連鎖へ拡張した藤井実彦の独自概念です。" },
  { question: "文脈継続性を高めるための最初のステップは何ですか？", answer: "「何を削るか」を考えることが核心です。世界観と合わないBGM・過剰なPOP・情報過多——これらのノイズを一つずつ排除することで、文脈継続性は高まります。「足す」より「引く」。強い場所ほど「削っている」という観察が、文脈継続性の設計原則を体現しています。" },
]

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/frameworks" style={{ color: "var(--color-text-muted)" }}>Frameworks</Link>
          <span>›</span>
          <span>文脈継続性（Contextual Continuity）</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-frameworks)", marginBottom: "12px" }}>
          Framework — 理論フレームワーク
        </div>
        <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: "300", marginBottom: "12px", lineHeight: "1.35" }}>
          文脈継続性（Contextual Continuity）
        </h1>
        <p style={{ fontSize: "14px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "48px" }}>
          ―― 顧客の動線に矛盾がない——その連続性が「また帰りたい」を生む
        </p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>定義</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>文脈継続性（Contextual Continuity）とは、顧客が場所と接触する全プロセスにおいて、世界観の文脈に矛盾が生じないことだ。SNSで見た世界観→地域へ向かう道→駐車場→入口→匂い→音→店員→料理→帰り道→再訪したくなる感覚。この「流れ」に矛盾が少ないことが、「また帰りたい」を生む。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>楠木健の因果論理との接続</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>楠木健は「良い戦略とは、個別施策の寄せ集めではなく、因果論理の一貫したつながりである」と述べた。文脈継続性は、この考え方を顧客体験の時間的連鎖へ拡張したものだ。体験のすべてが、同じ方向を向いている——それが文脈継続性だ。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>文脈が途切れる瞬間</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>文脈継続性が崩れる典型的なパターン：SNSで見た「静かなカフェ」が、実際は混雑していてBGMが大音量だった。駐車場に到着したら、雑然とした看板群が迎えた。接客のトーンが、空間の雰囲気と合っていなかった。これらはすべて、文脈が途切れる瞬間だ。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>Type Bにとっての文脈継続性</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>無意識共鳴型（Type B）の地域店舗にとって、文脈継続性は特に重要だ。「那須が好きで、那須らしい速度で生きている」オーナーが経営する店は、意識せずとも文脈継続性が高い。しかし、売上を追って「那須らしくない」要素を増やし始めた瞬間、文脈が途切れ始める。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>設計のポイント</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>文脈継続性を高めるための核心は、「何を足すか」より「何を削るか」だ。世界観と合わないものを排除する——それだけで、文脈継続性は高まる。強い場所ほど、「削っている」という観察は、この原則を体現している。</p>
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "32px", marginTop: "48px" }}>
          <Link href="/frameworks" style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
            ← フレームワーク一覧
          </Link>
        </div>
        <FaqSection faqs={faqs} />

        <RelatedKnowledge
          items={[
            { href: "/labs/contextual-continuity", type: "lab" as const, title: "文脈継続性（Labs）", description: "概念の詳細" },
            { href: "/frameworks/resonance-economy", type: "framework" as const, title: "共鳴型経済圏", description: "地域レベルの文脈" },
            { href: "/books/sekaikan/chapter-4", type: "book" as const, title: "第四章", description: "借景と文脈継続性" },
          ]}
        />
      </div>
    </>
  )
}
