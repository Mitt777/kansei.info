import type { Metadata } from 'next'
import Link from 'next/link'
import SectionCard from '@/components/SectionCard'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: '那須フィールドワーク — Fieldwork | kansei.info',
  description: '60日間468本・300万インプレッション。那須地域での地域観測型動町制作から生まれたSave Plan Impulseモデル。',
}

const spots = [
  { href: "/fieldwork/shozo", label: "Type B — 最高峰", labelJa: "黒磯", title: "SHOZO CAFE", description: "那須黒磯を街ごと変えたカフェ。共鳴型経済圈の核。", accentColor: "var(--color-fieldwork)", tags: ["Type B★", "地域OS核"] },
  { href: "/fieldwork/pennyln", label: "Type A’ — 音の設計", labelJa: "那須高原", title: "ペニーレイン", description: "駐車場からBeatlesが聞こえる。境界侵入が最も早く始まる店。", accentColor: "var(--color-fieldwork)", tags: ["Type A’", "音の設計★"] },
  { href: "/fieldwork/franklins", label: "Type B — 僻地型", labelJa: "那須高原", title: "Franklin’s Cafe", description: "アクセスのしにくさが期待増幅になる。地理的に設計された待機体験。", accentColor: "var(--color-fieldwork)", tags: ["Type B", "期待増幅★"] },
  { href: "/fieldwork/nasu-animal", label: "Type A — 天空を借景", labelJa: "那須高原", title: "那須どうぶつ王国", description: "那須の空を借景したバードショー。自然を舞台装置にした唯一の事例。", accentColor: "var(--color-fieldwork)", tags: ["Type A", "空を借景★"] },
  { href: "/fieldwork/ashino-onsen", label: "Type B — 旅館型", labelJa: "那須 芦野", title: "芦野温泉旅館", description: "道中から始まる境界侵入。文脈継続性を最も深く感じた場所。", accentColor: "var(--color-fieldwork)", tags: ["Type B", "文脈継続性★"] },
  { href: "/fieldwork/ramen-takahashi", label: "Type B — 社会層", labelJa: "那須塔原", title: "ラーメンたかはし", description: "店主が常連客の名前を呼んでいた。社会層が世界観を作る事例。", accentColor: "var(--color-fieldwork)", tags: ["Type B", "社会層★"] },
]

export default function NasuPage() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "var(--max-width)", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/fieldwork" style={{ color: "var(--color-text-muted)" }}>Fieldwork</Link>
          <span>{"›"}</span>
          <span>{"那須"}</span>
        </div>
      </div>
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-fieldwork)", marginBottom: "12px" }}>
          Nasu Field Study {"—"} {"那須地域観測記録"}
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: "300", marginBottom: "16px" }}>
          {"那須フィールドワーク"}
        </h1>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.9", marginBottom: "32px", maxWidth: "640px" }}>
          {"60日間・468本・300万インプレッション以上。那須地域での地域観測型動町制作から生まれたSave→Plan→Impulseモデル。感性マーケティング理論の実証的基盤となったフィールドの全記録。"}
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", marginBottom: "48px" }}>
          {[
            { val: "60日", label: "観測期間" },
            { val: "468本", label: "制作動町数" },
            { val: "300万+", label: "インプレッション" },
            { val: "HCII", label: "国際学会採択" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center", padding: "14px", border: "1px solid var(--color-border)", background: "var(--color-surface)" }}>
              <div style={{ fontSize: "1.3rem", fontWeight: "500", fontFamily: "var(--font-mono)", color: "var(--color-text)" }}>{s.val}</div>
              <div style={{ fontSize: "11px", color: "var(--color-text-muted)", marginTop: "4px" }}>{s.label}</div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "20px" }}>
          {"那須エリア 観測スポット"}
        </div>
        <div className="sections-grid" style={{ marginBottom: "56px" }}>
          {spots.map((spot) => (
            <SectionCard key={spot.href} {...spot} />
          ))}
        </div>
        <RelatedKnowledge
          items={[
            { href: "/research/nasupara-60days", type: "research" as const, title: "60日間観測レポート", description: "全データの記録" },
            { href: "/research/hcii2026", type: "research" as const, title: "HCII2026論文", description: "学術的検証" },
            { href: "/labs/spi-model", type: "lab" as const, title: "Save→Plan→Impulse", description: "那須から生まれたモデル" },
          ]}
        />
      </div>
    </>
  )
}
