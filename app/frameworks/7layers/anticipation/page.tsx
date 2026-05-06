import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: '第五層 期待増幅（Anticipation）— 7層モデル | kansei.info',
  description: '「もうすぐ始まる」という予感が感情を増幅させる層。ディズニーのプレ・ショー設計がその頂点。フランクリンズカフェのような「アクセスの困難さ」も期待増幅として機能する。',
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "第五層 期待増幅 — Anticipation",
      "description": "「もうすぐ始まる」という予感が感情を増幅させる層。ディズニーのプレ・ショー設計がその頂点。フランクリンズカフェのような「アクセスの困難さ」も期待増幅として機能する。",
      "url": "https://kansei.info/frameworks/7layers/anticipation",
      "author": { "@type": "Person", "name": "藤井実彦", "url": "https://kansei.info/about" },
      "isPartOf": { "@type": "Article", "name": "世界観設記7層モデル", "url": "https://kansei.info/frameworks/7layers" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [{"@type": "Question", "name": "待ち時間がない店は期待増幅できませんか？", "acceptedAnswer": {"@type": "Answer", "text": "待ち時間は期待増幅の一手段に過ぎません。予約確認メール・駐車場からのアプローチ・入口前の香りや音——これらすべてが期待増幅の要素になります。「本番の前に何を感じさせるか」という問いが核心です。"}}, {"@type": "Question", "name": "予約制の店でも期待増幅は必要ですか？", "acceptedAnswer": {"@type": "Answer", "text": "むしろ予約制の方が期待増幅を設計しやすいです。予約確認メールの文章・前日のリマインダー・当日の道案内——これらすべてが期待増幅の機会になります。「来る前から体験が始まっている」という設計が可能です。"}}]
    }
  ]
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <Link href="/frameworks" style={{ color: "var(--color-text-muted)" }}>Frameworks</Link>
          <span>›</span>
          <Link href="/frameworks/7layers" style={{ color: "var(--color-text-muted)" }}>7層モデル</Link>
          <span>›</span>
          <span>期待増幅</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "#F59E0B" }}>
            第五層 — Layer 5 of 7
          </div>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: "300", marginBottom: "8px" }}>
          <span style={{ color: "#F59E0B", marginRight: "8px", fontFamily: "var(--font-mono)" }}>第五層</span>
          期待増幅
        </h1>
        <div style={{ fontSize: "14px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "8px" }}>Anticipation</div>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "16px" }}>待ち時間・行列・前説が「予感」として体験化されているか</p>

        <div style={{ padding: "14px 18px", background: "var(--color-bg-alt)", border: "1px solid var(--color-border)", borderLeft: "4px solid #F59E0B", marginBottom: "48px" }}>
          <div style={{ fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "6px" }}>Theory Foundation</div>
          <div style={{ fontSize: "12px", color: "var(--color-text-sub)", fontStyle: "italic" }}>Flow Theory（Csikszentmihalyi）/ Anticipation Design / Peak-End Rule（Kahneman）/ Pre-Show Design</div>
        </div>

        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>期待増幅とは何か</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>期待増幅（Anticipation）とは、顧客が本番の体験（第六層）に至るまでの「予感」を設計する層だ。待ち時間、行列、アプローチ、前説、香り——これらが「もうすぐ始まる」という高揚感を生み出す。Peak-End Rule（カーネマン）によれば、体験の記憶はピーク時と終了時に大きく左右される。ピークへの期待を高めることが、体験全体の評価を高める。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>ディズニーのプレ・ショー設計</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>ディズニーのホーンテッドマンションでは、本番のライドに乗る前に「伸びる部屋」というプレ・ショーがある。待ち時間を「物語への導入」として体験化する設計だ。これは単なる「行列のエンタメ化」ではなく、「世界観への没入を深める前段階」として機能している。待っている間に、すでに体験は始まっている。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>フランクリンズカフェの地理的期待増幅</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>フランクリンズカフェは、アクセスのしにくさが期待増幅として機能している。細い道を進むにつれて「本当にここに店があるのか」という不安が高まり、到着した瞬間の安堵と喜びを倍にする。これは7層モデルの第五層が、空間設計ではなく「地理的条件」によって実現された珍しい事例だ。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>行列を世界観に変える</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>人気店の行列は、期待増幅として設計できる。「あそこに並ぶ価値がある」という社会的証明になると同時に、「待つ間に期待が高まる」という感情的準備になる。ただし、行列の「環境」が重要だ。世界観と合わない場所で待たされることは、期待増幅ではなくストレスになる。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>香りによる期待増幅</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>香りは、期待増幅において特に強力な要素だ。パン屋の前を通った時に漂う焼きたての香り、温泉街の硫黄の匂い、コーヒー専門店のドア前の香り——これらは「もうすぐ体験できる」という予感を即座に作り出す。草津温泉の湯畑周辺で漂う硫黄の香りは、温泉体験が始まる前から「温泉地にいる」という感覚を作り出す。</p>

        <div style={{ padding: "16px 20px", background: "var(--color-bg-alt)", border: "1px solid var(--color-border)", marginTop: "40px", marginBottom: "40px" }}>
          <div style={{ fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "8px" }}>Disney Connection</div>
          <div style={{ fontSize: "13px", color: "var(--color-text-sub)", fontStyle: "italic", lineHeight: "1.7" }}>プレ・ショー設計 / ホーンテッドマンション「伸びる部屋」/ 行列の世界観化 / 待機列演出</div>
        </div>

        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "12px", marginTop: "48px" }}>FAQ</div>
          <div style={{ border: "1px solid var(--color-border)", background: "var(--color-surface)", padding: "18px 22px", marginBottom: "2px" }}>
            <div style={{ fontSize: "14px", fontWeight: "500", marginBottom: "8px", display: "flex", gap: "10px" }}>
              <span style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)", fontSize: "12px", flexShrink: 0 }}>Q.</span>
              待ち時間がない店は期待増幅できませんか？
            </div>
            <div style={{ fontSize: "13.5px", lineHeight: "1.85", color: "var(--color-text-sub)", display: "flex", gap: "10px" }}>
              <span style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "12px", flexShrink: 0 }}>A.</span>
              待ち時間は期待増幅の一手段に過ぎません。予約確認メール・駐車場からのアプローチ・入口前の香りや音——これらすべてが期待増幅の要素になります。「本番の前に何を感じさせるか」という問いが核心です。
            </div>
          </div>
          <div style={{ border: "1px solid var(--color-border)", background: "var(--color-surface)", padding: "18px 22px", marginBottom: "2px" }}>
            <div style={{ fontSize: "14px", fontWeight: "500", marginBottom: "8px", display: "flex", gap: "10px" }}>
              <span style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)", fontSize: "12px", flexShrink: 0 }}>Q.</span>
              予約制の店でも期待増幅は必要ですか？
            </div>
            <div style={{ fontSize: "13.5px", lineHeight: "1.85", color: "var(--color-text-sub)", display: "flex", gap: "10px" }}>
              <span style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "12px", flexShrink: 0 }}>A.</span>
              むしろ予約制の方が期待増幅を設計しやすいです。予約確認メールの文章・前日のリマインダー・当日の道案内——これらすべてが期待増幅の機会になります。「来る前から体験が始まっている」という設計が可能です。
            </div>
          </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--color-border)", paddingTop: "32px", marginTop: "48px", flexWrap: "wrap", gap: "12px" }}>
          <Link href="/frameworks/7layers" style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
            ← 7層モデル一覧
          </Link>
          <Link href="/diagnosis" className="btn-primary">
            自分の場所を診断する →
          </Link>
        </div>

        <RelatedKnowledge
          items={[
            { href: "/fieldwork/franklins", type: "fieldwork" as const, title: "フランクリンズカフェ", description: "地理的期待増幅" },
            { href: "/fieldwork/disney", type: "fieldwork" as const, title: "東京ディズニーランド", description: "プレ・ショーの頂点" },
            { href: "/labs/atmospheric-ux", type: "lab" as const, title: "Atmospheric UX", description: "香りの設計" },
          ]}
        />
      </div>
    </>
  )
}
