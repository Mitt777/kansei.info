import type { Metadata } from 'next'
import Link from 'next/link'
import PracticeBridge from '@/components/PracticeBridge'
import RelatedKnowledge from '@/components/RelatedKnowledge'
import FaqSection from '@/components/FaqSection'

export const metadata: Metadata = {
  title: '共鳴型経済圏（Resonance Economy） — Frameworks | kansei.info',
  description: '共鳴型経済圏とは、個々の店舗や人が、相互に世界観を傷つけず、共鳴し合うことで成立する経済構造。地域＝OS、店舗＝アプリケーション。',
}

const faqs = [
  { question: "共鳴型経済圏とは何ですか？", answer: "共鳴型経済圏（Resonance Economy）とは、個々の店舗や人が相互に世界観を傷つけず、共鳴し合うことで成立する地域経済構造です。那須での観測から発見した概念で、同業者同士が自然に紹介し合い、地域全体で一つの空気を育てている経済モデルです。藤井実彦によるkansei.infoの独自概念です。" },
  { question: "共鳴型経済圏を作るために個店ができることは何ですか？", answer: "最も重要なのは「地域の空気価値を壊さないこと」です。価格競争・過剰集客・世界観と合わない改装——これらは地域OS全体を傷つけます。同業者を紹介する、地域の空気と合った営業スタイルを選ぶ、地域の物語と共鳴した世界観を守る——これらが個店にできる共鳴型経済圏への貢献です。" },
]

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/frameworks" style={{ color: "var(--color-text-muted)" }}>Frameworks</Link>
          <span>›</span>
          <span>共鳴型経済圏（Resonance Economy）</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-frameworks)", marginBottom: "12px" }}>
          Framework — 理論フレームワーク
        </div>
        <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: "300", marginBottom: "12px", lineHeight: "1.35" }}>
          共鳴型経済圏（Resonance Economy）
        </h1>
        <p style={{ fontSize: "14px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "48px" }}>
          ―― 個々の店舗が世界観を傷つけず、共鳴し合うことで成立する地域経済構造
        </p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>定義</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>共鳴型経済圏（Resonance Economy）とは、個々の店舗や人が、相互に世界観を傷つけず、共鳴し合うことで成立する地域経済構造だ。那須での観測から導き出した概念。巨大プラットフォーム型経済とは異なり、地域全体の空気価値を核に据えた経済モデル。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>なぜ同業者を紹介するのか</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>那須で、同業者同士が普通に互いを紹介していることに驚いた。「あっちのパン屋さんも美味しいですよ」——東京的感覚では理解しにくい行動だ。しかしこれは感情論ではなく、「世界観を壊さないための合理性」だ。地域全体の空気価値を守ることが、長期的には自店の価値を守ることにつながる。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>地域OS理論</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>地域の人気店は「地域というOS」の上で動く「アプリケーション」として機能している。OSが強い（地域の世界観が豊か）ほど、個々のアプリケーション（店舗）も輝きやすい。逆に、OSを破壊するアプリケーション（世界観を壊す店舗）が増えると、OS全体のパフォーマンスが落ちる。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>過剰競争は世界観を壊す</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>価格競争、クーポン競争、回転率競争——これらは短期的には効果があるが、地域全体の空気価値を壊すリスクがある。静けさが魅力だったカフェが回転率を優先し始めると、「あの場所らしさ」が失われる。これが「世界観崩壊」の始まりだ。共鳴型経済圏では、競争の軸が「価格」ではなく「世界観の磨き合い」になる。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>AI時代との相性</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>AI時代は「単体性能より接続性」が重要になる。共鳴型経済圏の考え方は、AI時代の地域経営において特に有効だ。AIが「便利」を最適化するほど、人間は「帰れる場所」を求める。共鳴し合う地域の世界観こそが、その「帰れる場所」を作る。</p>
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "32px", marginTop: "48px" }}>
          <Link href="/frameworks" style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
            ← フレームワーク一覧
          </Link>
        </div>
        <FaqSection faqs={faqs} />

        <PracticeBridge />

        <RelatedKnowledge
          items={[
            { href: "/fieldwork/shozo", type: "fieldwork" as const, title: "SHOZO CAFE", description: "共鳴型経済圏の核" },
            { href: "/fieldwork/kusatsu", type: "fieldwork" as const, title: "草津温泉街", description: "地域全体が世界観の事例" },
            { href: "/books/sekaikan/chapter-5", type: "book" as const, title: "第五章", description: "戦わないマーケティング" },
          ]}
        />
      </div>
    </>
  )
}
