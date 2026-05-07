import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'
import FaqSection from '@/components/FaqSection'

export const metadata: Metadata = {
  title: 'Calm Technology — Labs | kansei.info',
  description: 'Mark Weiser & John Seely Brown（1996）の「主張しすぎない技術」をAI時代の世界観設計へ接続。情報密度が爆発するAI時代に、ノイズを減らすことが世界観の強さになる。',
}

const faqs = [
  { question: "Calm Technologyとは何ですか？", answer: "Calm Technologyとは、1996年にMark Weiser & John Seely Brownが提唱した概念で、情報や刺激が最小限で、人間の注意を中心から周辺へと穏やかに移しながら機能する技術・設計思想です。「主張しすぎない」ことで人間の認知負荷を下げ、生活の質を高めます。kansei.infoではこれをAI時代の世界観設計に拡張しています。" },
  { question: "Calm TechnologyをAI時代の店舗設計に活かすにはどうすればいいですか？", answer: "AIが大量のコンテンツを生成する時代に、「静かな場所」「余白のある空間」「主張しない存在」の価値が上がります。過剰POPを削る、BGMを下げる、情報量を減らす——これらがCalm Technology的な設計です。強い世界観を持つ場所ほど「削っている」という観察と一致します。" },
]

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/labs" style={{ color: "var(--color-text-muted)" }}>Labs</Link>
          <span>›</span>
          <span>Calm Technology</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-labs)", marginBottom: "12px" }}>
          Original Concept — 主張しない設計
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: "300", marginBottom: "16px" }}>
          Calm Technology
        </h1>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "16px" }}>
          Mark Weiser & John Seely Brown（1996）の「主張しすぎない技術」をAI時代の世界観設計へ接続。情報密度が爆発するAI時代に、ノイズを減らすことが世界観の強さになる。
        </p>
        <div style={{ padding: "16px 20px", background: "var(--color-bg-alt)", border: "1px solid var(--color-border)", borderLeft: "3px solid var(--color-labs)", marginBottom: "48px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.15em", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "6px" }}>Theory Foundation</div>
          <p style={{ fontSize: "13px", color: "var(--color-text-sub)", lineHeight: "1.7", fontStyle: "italic" }}>Mark Weiser & John Seely Brown, The Coming Age of Calm Technology, Xerox PARC Technical Report, 1996.</p>
        </div>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>原典と定義</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>Calm Technologyとは、1996年にMark Weiser & John Seely Brownが提唱した概念。情報や刺激が最小限で、人間の注意を中心から周辺へと穏やかに移しながら機能する技術・設計思想。「主張しすぎない」ことで、人間の認知負荷を下げ、生活の質を高める。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>AI時代における意義</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>AIが大量のコンテンツ・情報・広告を生成する時代において、Calm Technologyの思想はますます重要になる。世界が「騒がしく」なればなるほど、「静かな場所」「余白のある空間」「主張しない存在」の価値が上がる。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>世界観設計への接続</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>那須の人気店が「ノイズを減らしている」という観察は、Calm Technologyの実践と一致する。過剰POP、不自然なBGM、情報過多——これらは、顧客の認知に過剰な負荷をかけ、世界観への没入を妨げる。Calm Technologyの思想を取り入れた空間設計が、「また来たい場所」を作る。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>ディズニーとのパラドックス</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>興味深いのは、ディズニーランドがCalm Technologyとは真逆の「情報豊富な空間」でありながら、没入感が高い点だ。これは、情報の「量」ではなく「一貫性」が重要だということを示している。すべての情報が同じ世界観を指向していれば、情報が多くてもノイズにならない。</p>
        <FaqSection faqs={faqs} />

        <RelatedKnowledge
          items={[
            { href: "/labs/atmospheric-ux", type: "lab" as const, title: "Atmospheric UX", description: "感覚的設計" },
            { href: "/labs/human-side-alignment", type: "lab" as const, title: "Human-side Alignment", description: "人間性への整合" },
            { href: "/frameworks/7layers", type: "framework" as const, title: "7層モデル——④没入環境", description: "ノイズ除去が機能する層" },
          ]}
        />
      </div>
    </>
  )
}
