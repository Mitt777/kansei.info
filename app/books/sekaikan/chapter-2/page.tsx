import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: '第二章 世界観マーケティングとは何か — 世界観マーケティング',
  description: '「また来たくなる場所」の構造を考える。世界観マーケティングと顧客体験の方程式・第二章・抜粋公開。',
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
          <span>第二章</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-gold)", marginBottom: "16px" }}>
          第二章
        </div>
        <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: "300", marginBottom: "8px", lineHeight: "1.35" }}>
          世界観マーケティングとは何か
        </h1>
        <p style={{ fontSize: "14px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "48px" }}>
          ―― 「また来たくなる場所」の構造を考える
        </p>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>那須で、不思議な感覚に出会った。ある有名店の店主が、冬の間は店を土日しか開けず、平日はスキー場でアルバイトをしているという話を、まるで天気の話をするように自然に語っていた。東京で長く仕事をしてきた私にとって、それは衝撃だった。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>世界観は「雰囲気」ではない</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>本書では、世界観を単なる感覚的な言葉として扱わない。世界観とは、顧客がその場所・ブランド・体験に触れた時に感じる、「意味」「感情」「空気」の一貫性である。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>世界観の三層構造</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>第一層：意味層——「なぜ存在するのか」。理念、起源、哲学、物語。第二層：感覚層——音、匂い、光、温度、素材感、導線。私はこれをAtmospheric UX（空気のUX）と呼んでいる。第三層：社会層——「誰とそこにいるのか」。常連客、店主、地域、コミュニティ。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>SHOZO CAFEが強い理由</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>「僕の趣味はまちづくりなんですよ」——以前オーナーにお会いした時、彼が私の目を正面に見据えて語った言葉が忘れられない。実際に有言実行されていて、SHOZO CAFEを中心としてたくさんのお店が出店し、SHOZO経済圏ができていることを目の当たりにすると、驚きを通り越して尊敬の念を感じる。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>世界観は、設計できる</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>入口、導線、音、光、接客、写真導線、地域との関係——これらには、一定の因果構造が存在する。そして、その一貫性が高いほど、人は「また来たい」と感じやすくなる。次章では、この構造を「世界観設計7層モデル」として整理する。</p>
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "40px", marginTop: "48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <Link href="/books/sekaikan/chapter-1" style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
            ← 第一章
          </Link>
          <Link href="/books/sekaikan/chapter-3" className="btn-primary">第三章 →</Link>
        </div>
        <RelatedKnowledge
          items={[
            { href: "/labs/atmospheric-ux", type: "lab" as const, title: "Atmospheric UX", description: "感覚層の設計概念" },
            { href: "/frameworks/three-types", type: "framework" as const, title: "三類型", description: "三つの世界観" },
            { href: "/books/sekaikan/chapter-3", type: "book" as const, title: "第三章", description: "顧客体験の方程式" },
          ]}
        />
      </div>
    </>
  )
}
