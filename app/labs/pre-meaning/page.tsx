import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: 'Pre-Meaning — Labs | kansei.info',
  description: '「なんか落ち着く」「また来たい気がする」——意味として言語化する前に、すでに身体が感じていること。AI時代に特に重要になる概念。',
}

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/labs" style={{ color: "var(--color-text-muted)" }}>Labs</Link>
          <span>›</span>
          <span>Pre-Meaning</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-labs)", marginBottom: "12px" }}>
          Original Concept — 意味になる前の感覚
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: "300", marginBottom: "16px" }}>
          Pre-Meaning
        </h1>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "16px" }}>
          「なんか落ち着く」「また来たい気がする」——意味として言語化する前に、すでに身体が感じていること。AI時代に特に重要になる概念。
        </p>
        <div style={{ padding: "16px 20px", background: "var(--color-bg-alt)", border: "1px solid var(--color-border)", borderLeft: "3px solid var(--color-labs)", marginBottom: "48px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.15em", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "6px" }}>Theory Foundation</div>
          <p style={{ fontSize: "13px", color: "var(--color-text-sub)", lineHeight: "1.7", fontStyle: "italic" }}>Maurice Merleau-Ponty の Phenomenology of Perception（1945）——「身体は意味を理解する前に世界を感じている」という現象学の核心。HCIの身体性研究とも接続。</p>
        </div>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>定義</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>Pre-Meaningとは、人が場所・体験・ブランドに触れた時、「意味」として言語化・理解する前の段階で、すでに身体的反応として生じている感覚的状態のことだ。「なんか落ち着く」「この場所、好きかもしれない」「また来たい気がする」——これらはすべて、論理的評価に先行する身体的感知である。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>哲学的基盤</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>Merleau-Pontyの現象学によれば、人間の知覚は意識的理解に先行する。身体は、意味を理解する前に世界を感じている。これがPre-Meaningの哲学的根拠だ。また、HCIの身体性（Embodied Interaction）研究も、人間のコンピュータ操作が意識的認知に先行する身体感覚に基づくことを示している。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>サンリオピューロランドの「かわいい」</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>「かわいい」という感覚は、Pre-Meaningの典型例だ。Hello Kittyを見た時、人は論理的評価をする前に、すでに感情的反応を示す。サンリオがIP活用型世界観として成立している理由は、このPre-Meaningを増幅させることに特化しているからだ。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>AI時代にPre-Meaningが重要な理由</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>AIは意味情報の処理が得意だ。しかし、Pre-Meaningは依然として人間の身体経験に強く依存している。那須の静かな朝、木々の音、少し冷たい空気、店に入った瞬間の匂い——それらは単なる情報ではない。AI時代になるほど、Pre-Meaningの価値は上がる。</p>
        <RelatedKnowledge
          items={[
            { href: "/labs/atmospheric-ux", type: "lab" as const, title: "Atmospheric UX", description: "Pre-Meaningを生む設計" },
            { href: "/labs/human-side-alignment", type: "lab" as const, title: "Human-side Alignment", description: "人間性への整合" },
            { href: "/books/sekaikan/chapter-6", type: "book" as const, title: "第六章", description: "AI時代と空気の価値" },
          ]}
        />
      </div>
    </>
  )
}
