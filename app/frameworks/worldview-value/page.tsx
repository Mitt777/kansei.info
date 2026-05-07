import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'
import FaqSection from '@/components/FaqSection'

export const metadata: Metadata = {
  title: '世界観価値の方程式 — Frameworks | kansei.info',
  description: '世界観価値＝意味的一貫性×感覚的没入×社会的帰属×伝播性。掛け算であるため、どれか一つがゼロに近づくと全体が崩れる。',
}

const faqs = [
  { question: "世界観価値の方程式とは何ですか？", answer: "世界観価値＝意味的一貫性×感覚的没入×社会的帰属×伝播性という方程式です。掛け算であるため、どれか一つがゼロに近づくと世界観全体が崩れます。この方程式は「世界観は偶然ではなく構造だ」という思想を数式化したものです。藤井実彦によるkansei.infoの独自フレームワークです。" },
  { question: "世界観価値の方程式で最初に見直すべき要素はどれですか？", answer: "意味的一貫性（原初物語）が最優先です。「なぜ存在するのか」が明確でなければ、他の三要素のどれを高めても世界観は不安定のままです。原初物語が確立した後、感覚的没入（Atmospheric UX）→社会的帰属（常連コミュニティ）→伝播性（SNS・口コミ）の順で強化していくことが効果的です。" },
]

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/frameworks" style={{ color: "var(--color-text-muted)" }}>Frameworks</Link>
          <span>›</span>
          <span>世界観価値の方程式</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-frameworks)", marginBottom: "12px" }}>
          Framework — 理論フレームワーク
        </div>
        <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: "300", marginBottom: "12px", lineHeight: "1.35" }}>
          世界観価値の方程式
        </h1>
        <p style={{ fontSize: "14px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "48px" }}>
          ―― 意味的一貫性 × 感覚的没入 × 社会的帰属 × 伝播性
        </p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>方程式の定義</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>世界観価値 ＝ 意味的一貫性 × 感覚的没入 × 社会的帰属 × 伝播性。これは数学的な厳密式ではない。しかし重要なのは、「世界観は偶然ではなく、構造である」という点だ。そして掛け算であるため、どれか一つが弱いと世界観全体が崩れる。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>意味的一貫性</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>「なぜ、この場所は存在するのか」という問いへの答えが、すべての判断の基準になっている状態。理念・哲学・物語の軸が明確で、それが空間設計・接客・SNS・メニューのすべてに一貫して反映されている。崩れる時：「なぜ存在するか」が曖昧になり、場当たり的な判断が増えた時。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>感覚的没入</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>音・匂い・光・温度・素材感・導線——すべてが一つの空気として一致している状態。Atmospheric UXが機能している状態。ノイズ（世界観と合わないBGM・過剰POP・情報過多）がない状態。崩れる時：ノイズが増え、空気の一貫性が失われた時。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>社会的帰属</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>常連客のコミュニティ・店主との関係・地域とのつながりが形成されている状態。「ここに来ると、少し自分が落ち着く」という感覚は、社会的帰属から生まれることが多い。崩れる時：顧客が「よそ者」になった時——新しい客層ばかりを追い、常連が離れていく時。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>伝播性</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>SNS投稿・口コミ・再訪・ファン化のサイクルが回っている状態。「あの場所にいた自分」を記憶しているから、また戻りたくなる。そしてその記憶を、誰かに伝えたくなる。崩れる時：「語りたくなる瞬間」がない時——体験が平均的すぎて、記憶に残らない時。</p>
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "32px", marginTop: "48px" }}>
          <Link href="/frameworks" style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
            ← フレームワーク一覧
          </Link>
        </div>
        <FaqSection faqs={faqs} />

        <RelatedKnowledge
          items={[
            { href: "/diagnosis", type: "framework" as const, title: "7層診断ツール", description: "四要素を自己診断" },
            { href: "/frameworks/7layers", type: "framework" as const, title: "7層モデル", description: "方程式と7層の対応" },
            { href: "/books/sekaikan/chapter-3", type: "book" as const, title: "第三章", description: "方程式の詳細解説" },
          ]}
        />
      </div>
    </>
  )
}
