import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: '終章 小さな灯の時代へ — 世界観マーケティング',
  description: 'AI時代に、人間はどこで呼吸するのか。世界観マーケティングと顧客体験の方程式・終章・抜粋公開。',
}

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <Link href="/books" style={{ color: "var(--color-text-muted)" }}>Books</Link>
          <span>›</span>
          <Link href="/books/sekaikan" style={{ color: "var(--color-text-muted)" }}>世界観マーケティング</Link>
          <span>›</span>
          <span>終章</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-gold)", marginBottom: "16px" }}>
          終章
        </div>
        <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: "300", marginBottom: "8px", lineHeight: "1.35" }}>
          小さな灯の時代へ
        </h1>
        <p style={{ fontSize: "14px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "48px" }}>
          ―― AI時代に、人間はどこで呼吸するのか
        </p>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>私は、この本を書き始めた時、単純に「また来たくなる場所」の構造を整理したかった。なぜ、人は特定の場所に惹かれるのか。なぜ、また帰りたくなるのか。しかし書き進めるうちに、少しずつ別の問いが立ち上がってきた。それは、AI時代に、人間はどこで呼吸するのか、という問いだった。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>7層モデルが問うていること</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>本書で提示した「世界観設計7層モデル」は、表面上はマーケティングのフレームワークだ。しかしその根底には、もっと大きな問いがある。①原初物語——「なぜ、あなたはそこに存在するのか」。④没入環境——「あなたの場所で、人間はどんな空気を呼吸するのか」。⑦伝播帰属——「その体験は、人の記憶の中でどう生き続けるのか」。これらは、存在論的な問いでもある。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>三つの場所が教えてくれたこと</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>ディズニーは、物語を「創造する」ことで世界観を作る。サンリオは、「愛着」を通じて世界観を作る。那須の小さなカフェは、地域という「外部の物語」と無意識に共鳴することで世界観を作る。三つの道は異なるが、終着点は同じだ。「また帰りたい場所」という、人間にとっての意味空間である。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>小さな灯は、消えていない</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>AI時代になると、大きなプラットフォームや巨大システムばかりが注目される。しかし私は、那須で、別の強さを見た。小さなカフェ、個人店、地域のパン屋、静かな宿。そこには、巨大資本では作れない空気があった。</p>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>世界観マーケティングとは、単なる販促技術ではない。それは、人間が安心して存在できる場所を、丁寧に育てる技術なのである。あなたは、どんな空気を残したいですか。それが、これからの時代の、もっとも人間的な問いなのかもしれない。</p>
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "40px", marginTop: "48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <Link href="/books/sekaikan/chapter-7" style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
            ← 第七章
          </Link>
          <Link href="/books/sekaikan" className="btn-secondary">目次に戻る</Link>
        </div>
        <RelatedKnowledge
          items={[
            { href: "/manifesto", type: "essay" as const, title: "Manifesto", description: "思想宣言" },
            { href: "/diagnosis", type: "framework" as const, title: "7層診断ツール", description: "今すぐ診断する" },
            { href: "/contact", type: "essay" as const, title: "無料相談", description: "世界観設計のサポート" },
          ]}
        />
      </div>
    </>
  )
}
