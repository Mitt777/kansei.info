import type { Metadata } from 'next'
import Link from 'next/link'
import MapBridge from '@/components/MapBridge'
import PracticeBridge from '@/components/PracticeBridge'
import SectionCard from '@/components/SectionCard'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: '那須フィールドワーク — Fieldwork | kansei.info',
  description: '60日間468本・300万インプレッション。那須地域での地域観測型動町制作から生まれたSave Plan Impulseモデル。',
}

const nasuSpots = [
  { href: "/fieldwork/shozo", label: "Type B — 最高峰", labelJa: "黒磯", title: "SHOZO CAFE", description: "那須黒磯を街ごと変えたカフェ。共鳴型経済圈の核。地域OS最大の評価を得るスポット。", accentColor: "var(--color-fieldwork)", tags: ["Type B★", "地域OS核", "共鳴型経済圈"] },
  { href: "/fieldwork/pennyln", label: "Type A’ — 音の設計", labelJa: "那須高原", title: "ペニーレイン", description: "駐車場からBeatlesが聞こえる。境界侵入が最も早く始まる店。音という感覚層の設計が際立つ。", accentColor: "var(--color-fieldwork)", tags: ["Type A’", "音の設計★", "境界侵入"] },
  { href: "/fieldwork/franklins", label: "Type B — 僻地型", labelJa: "那須高原", title: "Franklin’s Cafe", description: "アクセスのしにくさが期待増幅になる。地理的に設計された待機体験。", accentColor: "var(--color-fieldwork)", tags: ["Type B", "期待増幅★", "僻地型"] },
  { href: "/fieldwork/nasu-animal", label: "Type A — 天空を借景", labelJa: "那須高原", title: "那須どうぶつ王国", description: "那須の空を借景したバードショー。自然を舞台装置にした唯一の事例。", accentColor: "var(--color-fieldwork)", tags: ["Type A", "空を借景★", "バードショー"] },
  { href: "/fieldwork/ashino-onsen", label: "Type B — 旅館型", labelJa: "那須 芦野", title: "芦野温泉旅館", description: "道中から始まる境界侵入。文脈継続性を最も深く感じた場所。", accentColor: "var(--color-fieldwork)", tags: ["Type B", "文脈継続性★", "到着前から"] },
  { href: "/fieldwork/ramen-takahashi", label: "Type B — 社会層", labelJa: "那須塔原", title: "ラーメンたかはし", description: "店主が常連客の名前を呼んでいた。社会層が世界観を作る事例。", accentColor: "var(--color-fieldwork)", tags: ["Type B", "社会層★", "常連の名前"] },
]

export default function NasuPage() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "var(--max-width)", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/fieldwork" style={{ color: "var(--color-text-muted)" }}>Fieldwork</Link>
          <span>{"›"}</span>
          <span>{"那須フィールドワーク"}</span>
        </div>
      </div>
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-fieldwork)", marginBottom: "12px" }}>
          Nasu Field Study {"—"} 60{"日間の観測記録"}
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: "300", marginBottom: "16px" }}>
          {"那須フィールドワーク"}
        </h1>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.9", marginBottom: "32px", maxWidth: "640px" }}>
          60{"日間・"}468{"本・"}300{"万インプレッション以上。那須地域での地域観測型動町制作から生まれたSave→Plan→Impulseモデル。感性マーケティング理論の実証的基盤となったフィールドの全記録。"}
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", marginBottom: "56px" }}>
          {[
            { val: "60日", label: "観測期間" },
            { val: "468本", label: "制作動町数" },
            { val: "300万+", label: "インプレッション" },
            { val: "HCII", label: "国際学会採択" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center", padding: "16px", border: "1px solid var(--color-border)", background: "var(--color-surface)" }}>
              <div style={{ fontSize: "1.4rem", fontWeight: "500", fontFamily: "var(--font-mono)", color: "var(--color-text)" }}>{s.val}</div>
              <div style={{ fontSize: "11px", color: "var(--color-text-muted)", marginTop: "4px" }}>{s.label}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "18px", fontWeight: "500", marginBottom: "14px" }}>{"なぜ那須だったのか"}</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "16px" }}>
          {"那須インターを降りた瞬間から、空気が変わる。それは単なる田舎の風景ではなく、「世界観」として機能している何かだった。この感覚を言語化しようと試みたことが、本フィールドワーク全体の出発点となった。"}
        </p>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "48px" }}>
          {"那須には、SHOZO CAFEを核とした共鳴型経済圈が形成されている。同業者同士が自然に紹介し合い、地域全体で一つの空気を育てている。過剰競争ではなく、共鳴——この構造が「また来たくなる地域」を作っている。"}
        </p>

        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "20px" }}>
          {"那須エリア 観測スポット"}
        </div>
        <div className="sections-grid" style={{ marginBottom: "56px" }}>
          {nasuSpots.map((spot) => (
            <SectionCard key={spot.href} {...spot} />
          ))}
        </div>

        <MapBridge
          title="那須で観測した場所を、那須MAPとして見る。"
          description="カフェ、ランチ、犬連れ、温泉、黒磯、那須高原。那須フィールドワークで見えた場所のまとまりを、map-s.site の地域MAPへ接続します。"
          href="https://map-s.site/nasu"
          linkLabel="map-s.siteの那須MAPを見る →"
        />
        <PracticeBridge />

        <RelatedKnowledge
          items={[
            { href: "/research/nasupara-60days", type: "research" as const, title: "60日間観測レポート", description: "全データの記録" },
            { href: "/research/hcii2026", type: "research" as const, title: "HCII2026論文", description: "学術的検証" },
            { href: "/labs/spi-model", type: "lab" as const, title: "Save→Plan→Impulse", description: "那須から生まれたモデル" },
            { href: "/frameworks/resonance-economy", type: "framework" as const, title: "共鳴型経済圈", description: "那須で発見した経済構造" },
          ]}
        />
      </div>
    </>
  )
}
