import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: '第三章 顧客体験の方程式 — 世界観マーケティング',
  description: '世界観設計7層モデルと、その理論的基盤。世界観マーケティングと顧客体験の方程式・第三章・抜粋公開。',
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
          <span>第三章</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-gold)", marginBottom: "16px" }}>
          第三章
        </div>
        <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: "300", marginBottom: "8px", lineHeight: "1.35" }}>
          顧客体験の方程式
        </h1>
        <p style={{ fontSize: "14px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "48px" }}>
          ―― 世界観設計7層モデルと、その理論的基盤
        </p>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>「また来たい店」と、「一度行けば十分な店」の違いは、何なのだろう。「また来たくなる場所」には、体験が線でつながっている。入口から、駐車場、空気、接客、時間の流れ、帰り道、SNS投稿に至るまで。それらがバラバラではなく、一つの方向へ向かっている。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>世界観設計7層モデル</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>顧客体験を七つの層で整理する。①原初物語——なぜ存在するのか。②世界観接触——SNS・動画・口コミ。③境界侵入——入口・看板・駐車場。④没入環境——音・匂い・光・接客・導線。⑤期待増幅——待ち時間・行列・前説。⑥感動体験——飲食・景色・ライブ。⑦伝播帰属——SNS・再訪・ファン化。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>ディズニーが実証した「体験の連続性」</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>このモデルは、ウォルト・ディズニー・イマジニアリングが70年以上にわたり実践してきた設計哲学と驚くほど重なる。「It All Begins with a Story」から始まり、入口での境界移行、感覚を総動員した没入環境、期待を高める待機設計、ピーク体験、「魔法を持ち帰る」伝播・帰属——と、本モデルは極めて高い構造的親和性を持つ。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>世界観価値の方程式</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>世界観価値＝意味的一貫性×感覚的没入×社会的帰属×伝播性。重要なのは、「世界観は偶然ではなく、構造である」という点だ。どれか一つが弱いと、世界観全体が崩れる。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>AI時代、なぜこの構造が重要か</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>AIによって、機能や情報はさらに均質化していく。だが、人間は身体を持っている。匂いを感じる。空気を読む。余白に安心する。だからこそ、AI時代になるほど、「その場にいる感覚」の価値が上がる。</p>
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "40px", marginTop: "48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <Link href="/books/sekaikan/chapter-2" style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
            ← 第二章
          </Link>
          <Link href="/books/sekaikan/chapter-4" className="btn-primary">第四章 →</Link>
        </div>
        <RelatedKnowledge
          items={[
            { href: "/frameworks/7layers", type: "framework" as const, title: "7層モデル詳細", description: "ディズニー対応表付き" },
            { href: "/diagnosis", type: "framework" as const, title: "7層診断ツール", description: "自分の場所を測定" },
            { href: "/books/sekaikan/chapter-4", type: "book" as const, title: "第四章", description: "物語の源泉" },
          ]}
        />
      </div>
    </>
  )
}
