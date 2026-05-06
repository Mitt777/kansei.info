import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: 'Save → Plan → Impulse — Labs | kansei.info',
  description: 'Instagram保存（Save）・YouTube比較検討（Plan）・TikTok衝動（Impulse）——SNSプラットフォームによって世界観の伝わり方が根本的に異なる観測モデル。HCII2026採択論文の核心。',
}

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/labs" style={{ color: "var(--color-text-muted)" }}>Labs</Link>
          <span>›</span>
          <span>Save → Plan → Impulse</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-labs)", marginBottom: "12px" }}>
          Original Concept — SNS行動モデル
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: "300", marginBottom: "16px" }}>
          Save → Plan → Impulse
        </h1>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "16px" }}>
          Instagram保存（Save）・YouTube比較検討（Plan）・TikTok衝動（Impulse）——SNSプラットフォームによって世界観の伝わり方が根本的に異なる観測モデル。HCII2026採択論文の核心。
        </p>
        <div style={{ padding: "16px 20px", background: "var(--color-bg-alt)", border: "1px solid var(--color-border)", borderLeft: "3px solid var(--color-labs)", marginBottom: "48px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.15em", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "6px" }}>Theory Foundation</div>
          <p style={{ fontSize: "13px", color: "var(--color-text-sub)", lineHeight: "1.7", fontStyle: "italic" }}>那須地域での60日間・468本の動画観測から帰納的に導き出された行動モデル。国際HCI学会HCII2026に採択。</p>
        </div>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>定義</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>Save→Plan→Impulseとは、SNSプラットフォームによって、顧客の世界観への接触様式と行動様式が根本的に異なるという観測モデルだ。Instagram保存（Save：後で行く場所として保存）、YouTube比較検討（Plan：実際に行く前に詳細を調べる）、TikTok衝動（Impulse：動画を見た直後に行動する）の三段階。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>発見のプロセス</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>那須地域での60日間・468本の動画観測から帰納的に導き出した。同じ場所・同じ内容の動画でも、どのSNSに投稿するかによって、ユーザーの反応の質が根本的に異なることを観測した。これはSNS運用論ではなく、「世界観がどのように人間の行動へ変換されるか」という問題だ。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>HCII2026での採択</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>このSave→Plan→Impulseモデルは、国際HCI学会HCII2026に採択された論文の核心をなす。「Save-Plan-Impulse: Kansei Driven Regional DX——Action Observation Notes from the Nasu Field Study」として発表。学術的に検証されたフィールドワーク発の理論だ。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>世界観マーケティングへの接続</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>このモデルは7層モデルの②世界観接触層と直結する。Instagramで「保存」された時点で、顧客の体験はすでに始まっている。媒体によって「期待の種類」が変わるため、SNS戦略も世界観設計の一部として考える必要がある。</p>
        <RelatedKnowledge
          items={[
            { href: "/research/hcii2026", type: "research" as const, title: "HCII2026論文", description: "学術的検証" },
            { href: "/research/nasupara-60days", type: "research" as const, title: "60日間観測", description: "一次データ" },
            { href: "/frameworks/7layers", type: "framework" as const, title: "7層モデル——②世界観接触", description: "SNSが機能する層" },
          ]}
        />
      </div>
    </>
  )
}
