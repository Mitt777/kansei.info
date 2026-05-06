import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: '第一層 原初物語（Origin Story）— 7層モデル | kansei.info',
  description: '世界観の最も深い層。理念・哲学・起源・物語。ここが弱い場所は、長期的に世界観が不安定になる。ディズニーの「It All Begins with a Story」はこの層の完璧な実践。',
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "第一層 原初物語 — Origin Story",
      "description": "世界観の最も深い層。理念・哲学・起源・物語。ここが弱い場所は、長期的に世界観が不安定になる。ディズニーの「It All Begins with a Story」はこの層の完璧な実践。",
      "url": "https://kansei.info/frameworks/7layers/origin-story",
      "author": { "@type": "Person", "name": "藤井実彦", "url": "https://kansei.info/about" },
      "isPartOf": { "@type": "Article", "name": "世界観設記7層モデル", "url": "https://kansei.info/frameworks/7layers" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [{"@type": "Question", "name": "原初物語は一度決めたら変わらないものですか？", "acceptedAnswer": {"@type": "Answer", "text": "基本的な価値観・理念は変わらなくても、表現の仕方は時代とともに進化します。ディズニーも「夢と魔法」という核心は変わらずに、IPや表現方法は時代に合わせて変化してきました。重要なのは、核心となる「なぜ」の部分が一貫していることです。"}}, {"@type": "Question", "name": "小さな個人店でも原初物語は必要ですか？", "acceptedAnswer": {"@type": "Answer", "text": "むしろ小さな店ほど重要です。大資本がない分、「なぜここに来るのか」という理由が原初物語によって形成されるからです。那須の人気カフェオーナーたちは、莫大な資本ではなく「この場所への思い」という原初物語で強い世界観を作っています。"}}]
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
          <span>原初物語</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "#C9A84C" }}>
            第一層 — Layer 1 of 7
          </div>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: "300", marginBottom: "8px" }}>
          <span style={{ color: "#C9A84C", marginRight: "8px", fontFamily: "var(--font-mono)" }}>第一層</span>
          原初物語
        </h1>
        <div style={{ fontSize: "14px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "8px" }}>Origin Story</div>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "16px" }}>なぜ、あなたの場所は存在するのか</p>

        <div style={{ padding: "14px 18px", background: "var(--color-bg-alt)", border: "1px solid var(--color-border)", borderLeft: "4px solid #C9A84C", marginBottom: "48px" }}>
          <div style={{ fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "6px" }}>Theory Foundation</div>
          <div style={{ fontSize: "12px", color: "var(--color-text-sub)", fontStyle: "italic" }}>Brand Myth / 楠木健「因果論理の一貫性」/ Storytelling Design / Simon Sinek「Start With Why」</div>
        </div>

        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>原初物語とは何か</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>原初物語（Origin Story）とは、「なぜ、この場所は存在するのか」という問いへの答えだ。理念、哲学、起源、創業の動機、オーナーが大切にしている価値観——これらすべてが原初物語を構成する。世界観設計7層モデルの中で最も深い層であり、すべての上位層の判断基準となる。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>なぜこの層が「根」なのか</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>原初物語が弱い場所は、長期的に世界観が不安定になる。なぜなら、判断の基準がないからだ。「なぜBGMをこれにするのか」「なぜこのメニューを置くのか」「なぜこの接客スタイルなのか」——これらすべての答えは、原初物語から導かれる。原初物語が明確な場所ほど、空間のすべてに一貫性が生まれる。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>ディズニーの「It All Begins with a Story」</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>ウォルト・ディズニー・イマジニアリングは「It All Begins with a Story（すべては物語から始まる）」を公式の設計原則として掲げている。ミッキーマウスが生まれた物語、ウォルト・ディズニー自身の「親と子が一緒に楽しめる場所を作りたい」という原初物語——これがディズニーランドの7層すべての判断基準になっている。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>SHOZO CAFEの原初物語</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>「僕の趣味はまちづくりなんですよ」——SHOZO CAFEのオーナーが語ったこの一言が、原初物語の核心だ。カフェを経営しているのではなく、まちをつくっている。この物語があるから、SHOZO周辺に次々と新しい店が生まれ、「SHOZO経済圏」が成立している。原初物語の強さが、地域OSを生み出した。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>原初物語の言語化ワーク</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>次の一文を埋めてみてほしい。「私たちの場所は、＿＿＿＿＿を感じてもらうために存在している。」この一文が書けるかどうかが、原初物語の強さの出発点だ。書けない場合は、「なぜこの場所を始めたのか」「どんな瞬間に喜びを感じるか」「10年後もこの場所が存在する理由は何か」を問い直すところから始めよう。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>Simon Sinekの「Why」との接続</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>Simon Sinekが「Start With Why」で提唱した「ゴールデンサークル」理論も、原初物語の重要性を示している。多くの企業は「何を売るか（What）」「どうやって売るか（How）」は語れるが、「なぜ存在するのか（Why）」を語れない。しかしAppleもディズニーも、「Why」が最も明確だからこそ、強い世界観を持つ。</p>

        <div style={{ padding: "16px 20px", background: "var(--color-bg-alt)", border: "1px solid var(--color-border)", marginTop: "40px", marginBottom: "40px" }}>
          <div style={{ fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "8px" }}>Disney Connection</div>
          <div style={{ fontSize: "13px", color: "var(--color-text-sub)", fontStyle: "italic", lineHeight: "1.7" }}>It All Begins with a Story / ウォルト・ディズニー自身の原初物語</div>
        </div>

        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "12px", marginTop: "48px" }}>FAQ</div>
          <div style={{ border: "1px solid var(--color-border)", background: "var(--color-surface)", padding: "18px 22px", marginBottom: "2px" }}>
            <div style={{ fontSize: "14px", fontWeight: "500", marginBottom: "8px", display: "flex", gap: "10px" }}>
              <span style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)", fontSize: "12px", flexShrink: 0 }}>Q.</span>
              原初物語は一度決めたら変わらないものですか？
            </div>
            <div style={{ fontSize: "13.5px", lineHeight: "1.85", color: "var(--color-text-sub)", display: "flex", gap: "10px" }}>
              <span style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "12px", flexShrink: 0 }}>A.</span>
              基本的な価値観・理念は変わらなくても、表現の仕方は時代とともに進化します。ディズニーも「夢と魔法」という核心は変わらずに、IPや表現方法は時代に合わせて変化してきました。重要なのは、核心となる「なぜ」の部分が一貫していることです。
            </div>
          </div>
          <div style={{ border: "1px solid var(--color-border)", background: "var(--color-surface)", padding: "18px 22px", marginBottom: "2px" }}>
            <div style={{ fontSize: "14px", fontWeight: "500", marginBottom: "8px", display: "flex", gap: "10px" }}>
              <span style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)", fontSize: "12px", flexShrink: 0 }}>Q.</span>
              小さな個人店でも原初物語は必要ですか？
            </div>
            <div style={{ fontSize: "13.5px", lineHeight: "1.85", color: "var(--color-text-sub)", display: "flex", gap: "10px" }}>
              <span style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "12px", flexShrink: 0 }}>A.</span>
              むしろ小さな店ほど重要です。大資本がない分、「なぜここに来るのか」という理由が原初物語によって形成されるからです。那須の人気カフェオーナーたちは、莫大な資本ではなく「この場所への思い」という原初物語で強い世界観を作っています。
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
            { href: "/frameworks/7layers", type: "framework" as const, title: "7層モデル全体", description: "全層の俯瞰" },
            { href: "/fieldwork/shozo", type: "fieldwork" as const, title: "SHOZO CAFE", description: "原初物語の最高事例" },
            { href: "/books/sekaikan/chapter-2", type: "book" as const, title: "第二章", description: "世界観の三層構造" },
          ]}
        />
      </div>
    </>
  )
}
