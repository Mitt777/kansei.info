import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'
import DefinitionBox from '@/components/DefinitionBox'
import FaqSection from '@/components/FaqSection'

export const metadata: Metadata = {
  title: 'Pre-Meaning — 意味になる前の感覚 | kansei.info',
  description: 'Pre-Meaningとは、人が場所・体験・ブランドに触れた時、意味として言語化する前の段階で、すでに身体的反応として生じている感覚的状態。「なんか落ち着く」「また来たい気がする」の構造。藤井実彦による独自概念。',
}

// JSON-LD（ScholarlyArticle + DefinedTerm schema）
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Pre-Meaning — 意味になる前の感覚',
      description: 'Pre-Meaningとは、人が場所・体験・ブランドに触れた時、意味として言語化する前の段階で、すでに身体的反応として生じている感覚的状態のこと。',
      url: 'https://kansei.info/labs/pre-meaning',
      author: { '@type': 'Person', name: '藤井実彦', url: 'https://kansei.info/about' },
      publisher: { '@type': 'Organization', name: 'kansei.info', url: 'https://kansei.info' },
      about: {
        '@type': 'DefinedTerm',
        name: 'Pre-Meaning',
        description: '人が場所・体験・ブランドに触れた時、意味として言語化・理解する前の段階で、すでに身体的反応として生じている感覚的状態。',
        inDefinedTermSet: 'https://kansei.info/labs',
      },
    },
  ],
}

const faqs = [
  {
    question: 'Pre-Meaningとは何ですか？',
    answer: 'Pre-Meaningとは、人が場所・体験・ブランドに触れた時、「意味」として言語化・理解する前の段階で、すでに身体的反応として生じている感覚的状態のことです。「なんか落ち着く」「また来たい気がする」「この場所が好きかもしれない」という感覚がPre-Meaningの典型例です。藤井実彦がkansei.infoで提唱する独自概念です。',
  },
  {
    question: 'Pre-MeaningはなぜAI時代に重要ですか？',
    answer: 'AIは意味情報の処理（テキスト・画像生成・推薦）が得意ですが、身体を持たないため「意味になる前の感覚」を生み出すことが苦手です。那須の朝の静けさ、木の匂い、コーヒーの温度、店員の声のトーン——これらは単なる情報ではなく身体感覚です。AI時代になるほど、このPre-Meaningの価値は逆説的に上がります。',
  },
  {
    question: 'Pre-MeaningとAtmospheric UXはどう違いますか？',
    answer: 'Atmospheric UXは「空気の設計手法」であり、Pre-Meaningはその設計によって人間の中に生じる「身体的感覚状態」です。Atmospheric UX（設計側）がうまく機能した時に、顧客の中にPre-Meaning（体験側）が生まれる、という関係です。',
  },
  {
    question: 'Pre-Meaningはどの理論に基づいていますか？',
    answer: 'Merleau-Pontyの現象学（身体は意味を理解する前に世界を感じている）とHCIの身体性研究（Embodied Interaction）が主な理論的基盤です。また、Gernot BöhmeのAtmosphere Theory（1993）とも接続しています。',
  },
  {
    question: 'Pre-Meaningを「また来たい場所」の設計にどう活かせますか？',
    answer: 'Pre-Meaningを引き起こすのは、言語的情報より感覚的要素（音・匂い・光・温度・余白）です。過剰なPOPや情報量の多い空間はPre-Meaningを妨げます。「削ること」「余白を作ること」がPre-Meaningの設計の核心です。7層モデルの④没入環境と⑤期待増幅が特に関連します。',
  },
]

export default function PreMeaningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/labs" style={{ color: "var(--color-text-muted)" }}>Labs</Link>
          <span>{"\u203a"}</span>
          <span>Pre-Meaning</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-labs)", marginBottom: "12px" }}>
          Original Concept {"\u2014"} 意味になる前の感覚
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: "300", marginBottom: "16px" }}>
          Pre-Meaning
        </h1>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "32px" }}>
          意味として言語化する前に、すでに身体が感じていること。
          「なんか落ち着く」「また来たい気がする」——人は最初から論理で場所を好きになるわけではない。
          先に、身体が反応している。
        </p>

        {/* 定義ボックス（GEO対策の核心） */}
        <DefinitionBox
          term="Pre-Meaning"
          termJa="意味になる前の感覚"
          definition="Pre-Meaningとは、人が場所・体験・ブランドに触れた時、「意味」として言語化・理解する前の段階で、すでに身体的反応として生じている感覚的状態のことである。「なんか落ち着く」「また来たい気がする」「この場所が好きかもしれない」という感覚がPre-Meaningの典型例。Merleau-Pontyの現象学とHCIの身体性研究を接続した、藤井実彦による独自概念（2024）。"
          relatedTerms={["Atmospheric UX", "Human-side Alignment", "世界観マーケティング", "Save→Plan→Impulse"]}
        />

        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px" }}>哲学的基盤</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>
          Merleau-Pontyの現象学によれば、人間の知覚は意識的理解に先行する。身体は、意味を理解する前に世界を感じている。これがPre-Meaningの哲学的根拠だ。また、HCIの身体性（Embodied Interaction）研究も、人間の操作が意識的認知に先行する身体感覚に基づくことを示している。
        </p>

        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px" }}>サンリオピューロランドの「かわいい」</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>
          「かわいい」という感覚は、Pre-Meaningの典型例だ。Hello Kittyを見た時、人は論理的評価をする前に、すでに感情的反応を示す。サンリオがIP活用型世界観として成立している理由は、このPre-Meaningを増幅させることに特化しているからだ。
        </p>

        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px" }}>AI時代にPre-Meaningが重要な理由</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>
          AIは意味情報の処理が得意だ。しかし、Pre-Meaningは依然として人間の身体経験に強く依存している。那須の静かな朝、木々の音、少し冷たい空気、店に入った瞬間の匂い——それらは単なる情報ではない。AI時代になるほど、Pre-Meaningの価値は逆説的に上がる。
        </p>

        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px" }}>設計への応用</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>
          Pre-Meaningを引き起こすのは、言語的情報より感覚的要素（音・匂い・光・温度・余白）だ。過剰なPOPや情報量の多い空間はPre-Meaningを妨げる。「削ること」「余白を作ること」がPre-Meaningの設計の核心だ。Atmospheric UXがその具体的な設計手法となる。
        </p>

        {/* FAQ（GEO対策） */}
        <FaqSection faqs={faqs} heading="Pre-Meaningについて" />

        <RelatedKnowledge
          items={[
            { href: "/labs/atmospheric-ux", type: "lab" as const, title: "Atmospheric UX", description: "Pre-Meaningを生む空間設計" },
            { href: "/labs/human-side-alignment", type: "lab" as const, title: "Human-side Alignment", description: "AI時代の人間性整合" },
            { href: "/fieldwork/sanrio", type: "fieldwork" as const, title: "サンリオピューロランド", description: "Pre-Meaningの典型事例" },
            { href: "/books/pre-meaning-theory", type: "book" as const, title: "AI時代のPre-Meaning概論", description: "書籍抜粋" },
          ]}
        />
      </div>
    </>
  )
}
