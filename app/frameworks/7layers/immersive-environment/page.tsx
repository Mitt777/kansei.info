import type { Metadata } from 'next'
import Link from 'next/link'
import PracticeBridge from '@/components/PracticeBridge'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: '第四層 没入環境（Immersive Environment）— 7層モデル | kansei.info',
  description: 'Atmospheric UXが最も機能する層。世界観とは「ノイズを減らす技術」でもある。過剰POP・世界観に合わないBGM・情報過多は没入を壊す。ディズニーのArt of the Show・Mickey’s Ten Commandmentsと直結。',
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "第四層 没入環境 — Immersive Environment",
      "description": "Atmospheric UXが最も機能する層。世界観とは「ノイズを減らす技術」でもある。過剰POP・世界観に合わないBGM・情報過多は没入を壊す。ディズニーのArt of the Show・Mickey’s Ten Commandmentsと直結。",
      "url": "https://kansei.info/frameworks/7layers/immersive-environment",
      "author": { "@type": "Person", "name": "藤井実彦", "url": "https://kansei.info/about" },
      "isPartOf": { "@type": "Article", "name": "世界観設記7層モデル", "url": "https://kansei.info/frameworks/7layers" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [{"@type": "Question", "name": "BGMはどう選べばいいですか？", "acceptedAnswer": {"@type": "Answer", "text": "「世界観の言語化」が先です。原初物語（第一層）が明確になれば、自然と合うBGMが見えてきます。ルールは一つ：「この音楽があることで、うちの空気は強くなるか、弱くなるか」を問うことです。迷ったら「無音」か「自然音」が安全な選択肢になることが多いです。"}}, {"@type": "Question", "name": "照明は変えた方がいいですか？", "acceptedAnswer": {"@type": "Answer", "text": "照明は没入環境の中で最もコスパが高い投資の一つです。白色蛍光灯から電球色への変更だけで、空間の雰囲気が大きく変わります。ただし「明るさ」より「方向性」が重要で、どこに光を当て、どこに影を作るかが世界観を決めます。"}}]
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
          <span>没入環境</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "#10B981" }}>
            第四層 — Layer 4 of 7
          </div>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: "300", marginBottom: "8px" }}>
          <span style={{ color: "#10B981", marginRight: "8px", fontFamily: "var(--font-mono)" }}>第四層</span>
          没入環境
        </h1>
        <div style={{ fontSize: "14px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "8px" }}>Immersive Environment</div>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "16px" }}>音・匂い・光・接客・導線が一つの空気として一致しているか</p>

        <div style={{ padding: "14px 18px", background: "var(--color-bg-alt)", border: "1px solid var(--color-border)", borderLeft: "4px solid #10B981", marginBottom: "48px" }}>
          <div style={{ fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "6px" }}>Theory Foundation</div>
          <div style={{ fontSize: "12px", color: "var(--color-text-sub)", fontStyle: "italic" }}>Atmosphere Theory（Böhme, 1993）/ Atmospheric UX（藤井実彦）/ Art of the Show（Disney）/ Calm Technology（Weiser, 1996）</div>
        </div>

        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>没入環境とは何か</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>没入環境（Immersive Environment）とは、顧客が空間の中に入った後、「その場所の世界観」の中に深く入り込むための環境設計だ。音・匂い・光・温度・素材感・接客・導線——これらすべてが一つの空気として一致している状態が、強い没入環境だ。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>Atmospheric UXとの接続</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>没入環境は、Atmospheric UX（空気のUX設計）が最も機能する層だ。Gernot Böhme（1993）が提唱した「雰囲気（Atmosphäre）」理論——空間が人間に与える感覚的な存在様式——がここで実践される。重要なのは、「足す」のではなく「引く」という設計思想だ。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>ノイズを減らすことが世界観を強くする</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>那須で店舗観察を続ける中で気づいたことがある。強い場所ほど、「削っている」。過剰なPOP、世界観に合わないBGM、情報過多、SNS映えだけの装飾——これらは、顧客の没入を妨げる「ノイズ」だ。ディズニーのMickey’s Ten Commandmentsの「Avoid overload（過負荷を避けよ）」も同じ思想だ。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>Art of the Showという設計哲学</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>ディズニーの「Art of the Show」は、「すべての要素がショーの一部である」という設計哲学だ。清掃員の動き方も、ゴミ箱の位置も、植栽の高さも——すべてが「世界観のショー」を構成する要素として設計されている。これは没入環境設計の極致だ。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>SHOZO CAFEの静けさの設計</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>SHOZO CAFEには独特の静けさがある。大音量のBGMもない。過剰な接客もない。しかし、あの空気に惹かれる人がいる。照明、席間距離、木材の質感、音響、スタッフの所作——それらが積み重なって、没入環境が形成されている。「なんか落ち着く」というPre-Meaningは、この没入環境が生み出している。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>接客は没入環境の一部</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>接客のトーン・速度・距離感も、没入環境の重要な要素だ。静けさが世界観のカフェで、テキパキした早口の接客は没入を壊す。お酒の場で、物静かな接客は場の空気と合わない。接客は「サービス」である前に、「世界観の一部」として設計される必要がある。</p>

        <div style={{ padding: "16px 20px", background: "var(--color-bg-alt)", border: "1px solid var(--color-border)", marginTop: "40px", marginBottom: "40px" }}>
          <div style={{ fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "8px" }}>Disney Connection</div>
          <div style={{ fontSize: "13px", color: "var(--color-text-sub)", fontStyle: "italic", lineHeight: "1.7" }}>Art of the Show / Mickey’s Ten Commandments「Avoid overload」/ 全要素の世界観統合</div>
        </div>

        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "12px", marginTop: "48px" }}>FAQ</div>
          <div style={{ border: "1px solid var(--color-border)", background: "var(--color-surface)", padding: "18px 22px", marginBottom: "2px" }}>
            <div style={{ fontSize: "14px", fontWeight: "500", marginBottom: "8px", display: "flex", gap: "10px" }}>
              <span style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)", fontSize: "12px", flexShrink: 0 }}>Q.</span>
              BGMはどう選べばいいですか？
            </div>
            <div style={{ fontSize: "13.5px", lineHeight: "1.85", color: "var(--color-text-sub)", display: "flex", gap: "10px" }}>
              <span style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "12px", flexShrink: 0 }}>A.</span>
              「世界観の言語化」が先です。原初物語（第一層）が明確になれば、自然と合うBGMが見えてきます。ルールは一つ：「この音楽があることで、うちの空気は強くなるか、弱くなるか」を問うことです。迷ったら「無音」か「自然音」が安全な選択肢になることが多いです。
            </div>
          </div>
          <div style={{ border: "1px solid var(--color-border)", background: "var(--color-surface)", padding: "18px 22px", marginBottom: "2px" }}>
            <div style={{ fontSize: "14px", fontWeight: "500", marginBottom: "8px", display: "flex", gap: "10px" }}>
              <span style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)", fontSize: "12px", flexShrink: 0 }}>Q.</span>
              照明は変えた方がいいですか？
            </div>
            <div style={{ fontSize: "13.5px", lineHeight: "1.85", color: "var(--color-text-sub)", display: "flex", gap: "10px" }}>
              <span style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "12px", flexShrink: 0 }}>A.</span>
              照明は没入環境の中で最もコスパが高い投資の一つです。白色蛍光灯から電球色への変更だけで、空間の雰囲気が大きく変わります。ただし「明るさ」より「方向性」が重要で、どこに光を当て、どこに影を作るかが世界観を決めます。
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

        <PracticeBridge />

        <RelatedKnowledge
          items={[
            { href: "/labs/atmospheric-ux", type: "lab" as const, title: "Atmospheric UX", description: "没入環境の設計概念" },
            { href: "/labs/pre-meaning", type: "lab" as const, title: "Pre-Meaning", description: "没入環境が生み出す感覚" },
            { href: "/fieldwork/shozo", type: "fieldwork" as const, title: "SHOZO CAFE", description: "没入環境の最高峰" },
          ]}
        />
      </div>
    </>
  )
}
