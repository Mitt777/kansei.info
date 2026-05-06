import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: 'Contextual Continuity — Labs | kansei.info',
  description: 'SNSで見た世界観→地域へ向かう道→駐車場→入口→匂い→音→店員→料理→帰り道→再訪。この流れに矛盾が少ないことが「また帰りたい」を生む。',
}

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/labs" style={{ color: "var(--color-text-muted)" }}>Labs</Link>
          <span>›</span>
          <span>Contextual Continuity</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-labs)", marginBottom: "12px" }}>
          Original Concept — 文脈継続性
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: "300", marginBottom: "16px" }}>
          Contextual Continuity
        </h1>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "16px" }}>
          SNSで見た世界観→地域へ向かう道→駐車場→入口→匂い→音→店員→料理→帰り道→再訪。この流れに矛盾が少ないことが「また帰りたい」を生む。
        </p>
        <div style={{ padding: "16px 20px", background: "var(--color-bg-alt)", border: "1px solid var(--color-border)", borderLeft: "3px solid var(--color-labs)", marginBottom: "48px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.15em", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "6px" }}>Theory Foundation</div>
          <p style={{ fontSize: "13px", color: "var(--color-text-sub)", lineHeight: "1.7", fontStyle: "italic" }}>楠木健の「因果論理の一貫性」（ストーリーとしての競争戦略、2010）を顧客体験の時間的連鎖へ拡張した独自概念。</p>
        </div>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>定義</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>文脈継続性（Contextual Continuity）とは、顧客が場所と接触する全プロセス——SNSでの初接触から、移動、到着、体験、帰宅後の記憶まで——において、世界観の文脈に矛盾が生じないことだ。この連続性が高いほど、「また帰りたい」という感情が生まれやすくなる。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>なぜ無意識共鳴型（Type B）に重要か</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>地域の人気店が「地域の物語を借景している」状態は、文脈継続性が高い状態だ。那須らしさを体現した店主が、那須らしい速度で営業しているから、SNSで見た空気と実際に来た時の空気が一致する。矛盾がない。これが文脈継続性の核心だ。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>崩れる瞬間</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>文脈継続性は、思いがけないところで崩れる。例えば、静けさが魅力のカフェが、売上を追って情報過多なPOPを増やした瞬間。SNSで見た空気と実際の空気が乖離する。あるいは、地域の時間速度と合わない高速回転の接客。これが「世界観崩壊」の始まりだ。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>意識化の価値</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>多くのType B店舗オーナーは、自分が地域の文脈と接続していることに気づいていない。無意識の共鳴を意識化することが、文脈継続性を守ることになる。本書が提案する実践STEPはすべて、この文脈継続性を高めるための行動だ。</p>
        <RelatedKnowledge
          items={[
            { href: "/frameworks/resonance-economy", type: "framework" as const, title: "共鳴型経済圏", description: "地域全体の文脈" },
            { href: "/fieldwork/shozo", type: "fieldwork" as const, title: "SHOZO CAFE", description: "文脈継続性の最高事例" },
            { href: "/books/sekaikan/chapter-4", type: "book" as const, title: "第四章", description: "借景と文脈継続性" },
          ]}
        />
      </div>
    </>
  )
}
