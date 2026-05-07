import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: '第一章 なぜ「また来たくなる場所」が生まれるのか — 世界観マーケティング',
  description: '人は、何に帰りたくなるのか。世界観マーケティングと顧客体験の方程式・第一章・抜粋公開。',
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
          <span>第一章</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-gold)", marginBottom: "16px" }}>
          第一章
        </div>
        <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: "300", marginBottom: "8px", lineHeight: "1.35" }}>
          なぜ「また来たくなる場所」が生まれるのか
        </h1>
        <p style={{ fontSize: "14px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "48px" }}>
          ―― 人は、何に帰りたくなるのか
        </p>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>「また来たい」という感覚は、とても不思議だ。世の中には、もっと便利な店もある。もっと安い店もある。それでも人は、なぜか特定の場所へ戻っていく。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>「便利」だけでは、記憶に残らない</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>AIエージェントが最適な店を推薦し、予約し、提案してくれる時代になる。しかし、便利な場所が、必ずしも記憶に残るわけではない。多少不便でも、なぜか何年も記憶に残る場所がある。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>人は「その場にいた感覚」を記憶している</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>那須で店舗観察を続ける中で気づいた。「また来たくなる場所」には、空気の一貫性が存在している。SHOZO CAFEのようなカフェ——静けさ、木の感触、光、ゆっくり流れる時間、店員の距離感、那須の空気。それらが一つの感覚としてつながっている。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>ディズニーは、なぜ強いのか</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>ディズニーの強さは、単なるアトラクション数ではない。入口に入る前から、世界観が始まっている。音楽、看板、待機列、キャストの言葉遣い、匂い、光——「現実から別世界へ移行する体験」が、極めて丁寧に設計されている。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>那須で感じた、小さな発見</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>ある人気カフェの店主が、土日にのみ店を開けて、平日は近くの農家で働いていた。それをとっても楽しそうに語る。幸せそうなその顔に、嘘は感じなかった。しかもこのオーナーが、無意識のうちに那須という地域の空気と完全に一致した営業スタイルを選んでいることに気づいた。ここに「地域と共鳴する世界観」の核心がある。</p>
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "40px", marginTop: "48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <Link href="/books/sekaikan/prologue" style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
            ← 序章
          </Link>
          <Link href="/books/sekaikan/chapter-2" className="btn-primary">第二章 →</Link>
        </div>
        <RelatedKnowledge
          items={[
            { href: "/frameworks/7layers", type: "framework" as const, title: "7層モデル", description: "体験の連続性" },
            { href: "/fieldwork/shozo", type: "fieldwork" as const, title: "SHOZO CAFE", description: "那須の代表的事例" },
            { href: "/books/sekaikan/chapter-2", type: "book" as const, title: "第二章", description: "世界観マーケティングとは何か" },
          ]}
        />
      </div>
    </>
  )
}
