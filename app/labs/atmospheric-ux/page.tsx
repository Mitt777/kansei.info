import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'
import DefinitionBox from '@/components/DefinitionBox'
import FaqSection from '@/components/FaqSection'

export const metadata: Metadata = {
  title: 'Atmospheric UX — 空気のUX設計 | kansei.info',
  description: 'Atmospheric UXとは、音・匂い・光・温度・素材感・導線という「空気」そのものをUX設計の主要ターゲットとして扱うデザインパラダイム。Gernot BöhmeのAtmosphere Theory（1993）を顧客体験設計へ拡張した藤井実彦による独自概念。',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Atmospheric UX — 空気のUX設計',
      description: 'Atmospheric UXとは、音・匂い・光・温度・素材感・導線という「空気」そのものをUX設計の主要ターゲットとして扱うデザインパラダイム。',
      url: 'https://kansei.info/labs/atmospheric-ux',
      author: { '@type': 'Person', name: '藤井実彦', url: 'https://kansei.info/about' },
      about: {
        '@type': 'DefinedTerm',
        name: 'Atmospheric UX',
        description: '音・匂い・光・温度・素材感・導線という空気そのものをUX設計の主要ターゲットとして扱うデザインパラダイム。',
        inDefinedTermSet: 'https://kansei.info/labs',
      },
    },
  ],
}

const faqs = [
  {
    question: 'Atmospheric UXとは何ですか？',
    answer: 'Atmospheric UXとは、音・匂い・光・温度・素材感・導線といった感覚的要素の総体——すなわち「空気」そのものを、UX設計の主要ターゲットとして扱うデザインパラダイムです。従来のUXが画面・操作・機能に焦点を当てていたのに対し、Atmospheric UXは空間全体が人間に与える感覚的体験を設計の対象とします。藤井実彦がGernot BöhmeのAtmosphere Theory（1993）を顧客体験設計へ拡張した独自概念です。',
  },
  {
    question: 'Atmospheric UXとSHOZO CAFEはどう関係しますか？',
    answer: 'SHOZO CAFEには独特の静けさがあります。大音量のBGMもなく、過剰な接客もない。しかしあの空気に惹かれる人がいる。重要なのは、「空気」は偶然ではないという点です。照明・席間距離・木材・音響・スタッフの所作——それらが積み重なってAtmospheric UXが形成されています。SHOZO CAFEはAtmospheric UXの設計が最も高度に実現された事例の一つです。',
  },
  {
    question: 'Atmospheric UXを設計する際の核心は何ですか？',
    answer: 'Atmospheric UXを設計する際の核心は「ノイズを減らすこと」です。足すのではなく、引く。過剰POP・世界観に合わないBGM・情報過多——これらは没入を壊します。強い場所ほど「削っている」という観察は、Atmospheric UX設計の原則を体現しています。ディズニーのMickey’s Ten Commandmentsの「Avoid overload（過負荷を避けよ）」も同じ思想です。',
  },
  {
    question: 'Atmospheric UXとPre-Meaningの関係は？',
    answer: 'Atmospheric UX（設計手法）がうまく機能した時に、顧客の中にPre-Meaning（身体感覚状態）が生まれるという関係です。Atmospheric UXは「空気の設計側」、Pre-Meaningは「その設計によって人間の中に生じる体験側」です。両者は世界観マーケティングの7層モデルの④没入環境と⑤期待増幅で特に機能します。',
  },
]

export default function AtmosphericUxPage() {
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
          <span>Atmospheric UX</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-labs)", marginBottom: "12px" }}>
          Original Concept {"\u2014"} 空気のUX設計
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: "300", marginBottom: "16px" }}>
          Atmospheric UX
        </h1>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "32px" }}>
          音・匂い・光・温度・素材感——空気そのものをUX設計の対象として扱う概念。
          「なんか落ち着く」の構造を設計可能にする。
          Gernot BöhmeのAtmosphere Theory（1993）を顧客体験設計へ拡張した独自概念。
        </p>

        <DefinitionBox
          term="Atmospheric UX"
          termJa="空気のUX設計"
          definition="Atmospheric UXとは、音・匂い・光・温度・素材感・導線といった感覚的要素の総体——すなわち「空気」そのものを、UX設計の主要ターゲットとして扱うデザインパラダイムである。従来のUXが画面・操作・機能に焦点を当てていたのに対し、Atmospheric UXは空間全体が人間に与える感覚的体験を設計の対象とする。Gernot BöhmeのAtmosphere Theory（1993）を顧客体験設計へ拡張した藤井実彦による独自概念（2024）。"
          relatedTerms={["Pre-Meaning", "Human-side Alignment", "世界観マーケティング", "7層モデル④没入環境"]}
        />

        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px" }}>理論的基盤：Böhmeの雰囲気論</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>
          哲学者Gernot Böhme（1993）は「雰囲気（Atmosphäre）」を美学・空間設計の対象として扱う理論を提唱した。空間が人間に与える「感覚的な存在様式」を設計可能なものとして捉えるこの思想は、Atmospheric UXの直接の理論的基盤となっている。
        </p>

        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px" }}>設計の核心：「削ること」</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>
          Atmospheric UXを設計する際の核心は「ノイズを減らすこと」だ。足すのではなく、引く。過剰POP、世界観に合わないBGM、情報過多——これらは没入を壊す。強い場所ほど「削っている」。ディズニーのMickey’s Ten Commandmentsの「Avoid overload（過負荷を避けよ）」も同じ思想に基づく。
        </p>

        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px" }}>SHOZO CAFEの事例</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>
          SHOZO CAFEには、独特の静けさがある。大音量のBGMもない。過剰な接客もない。しかし、あの空気に惹かれる人がいる。照明、席間距離、木材、音響、スタッフの所作——それらが積み重なって、Atmospheric UXが形成されている。
        </p>

        <FaqSection faqs={faqs} heading="Atmospheric UXについて" />

        <RelatedKnowledge
          items={[
            { href: "/labs/pre-meaning", type: "lab" as const, title: "Pre-Meaning", description: "Atmospheric UXが生み出す身体感覚" },
            { href: "/frameworks/7layers", type: "framework" as const, title: "7層モデル④没入環境", description: "Atmospheric UXが機能する層" },
            { href: "/fieldwork/shozo", type: "fieldwork" as const, title: "SHOZO CAFE", description: "Atmospheric UXの最高峰事例" },
          ]}
        />
      </div>
    </>
  )
}
