import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: '第七章 世界観マーケティング実践チェックリスト — 世界観マーケティング',
  description: '「また来たい場所」は、どう設計できるのか。世界観マーケティングと顧客体験の方程式・第七章・抜粋公開。',
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
          <span>第七章</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-gold)", marginBottom: "16px" }}>
          第七章
        </div>
        <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: "300", marginBottom: "8px", lineHeight: "1.35" }}>
          世界観マーケティング実践チェックリスト
        </h1>
        <p style={{ fontSize: "14px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "48px" }}>
          ―― 「また来たい場所」は、どう設計できるのか
        </p>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>ここまで本書では、世界観の構造、三つの類型、7層モデル、共鳴型経済圏、AI時代の空気価値を整理してきた。では実際に、「何をすれば良いのか」という話に入っていきたい。「また来たくなる場所」は、小さな一貫性から生まれていることが多い。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>STEP 1：「なぜ存在するのか」を言語化する</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>最初に必要なのは、理念や哲学の言語化だ。次の一文を埋めてみてほしい。「私たちの場所は、＿＿＿＿＿を感じてもらうために存在している。」この一文が書けるかどうかが、世界観の強さの出発点になる。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>STEP 2：「入口」を見直す</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>世界観は、店の中から始まるわけではない。むしろ、「境界」から始まっている。駐車場、入口、看板、外観——「日常から空気が変わる感覚」を設計することが重要だ。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>STEP 3：「ノイズ」を減らす</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>強い場所ほど、「足していない」と感じている。むしろ、「削っている」のである。過剰POP、世界観に合わないBGM、情報過多——これらは世界観のノイズになる。ノイズを一つ減らすことで、世界観は一段階上がる場合がある。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>STEP 4〜7：写真導線・待ち時間・地域接続・AI時代の人間性</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>SNS時代において、「映える」ではなく「空気が写る」ことが重要だ。待ち時間は体験化できるか。地域全体の空気価値を壊していないか。AI時代になるほど、偶然、余白、身体感覚、会話、静けさの価値が上がる。重要なのは、「効率だけで設計しない」ことだ。</p>
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "40px", marginTop: "48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <Link href="/books/sekaikan/chapter-6" style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
            ← 第六章
          </Link>
          <Link href="/books/sekaikan/epilogue" className="btn-primary">終章 →</Link>
        </div>
        <RelatedKnowledge
          items={[
            { href: "/diagnosis", type: "framework" as const, title: "7層診断ツール", description: "今すぐセルフ診断" },
            { href: "/books/sekaikan/epilogue", type: "book" as const, title: "終章", description: "小さな灯の時代へ" },
            { href: "/contact", type: "essay" as const, title: "無料相談", description: "世界観設計をサポート" },
          ]}
        />
      </div>
    </>
  )
}
