import type { Metadata } from 'next'
import Link from 'next/link'
import PracticeBridge from '@/components/PracticeBridge'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: 'なすぱらTV 25日間観測レポート — Research | kansei.info',
  description: '9月12日〜10月6日の25日間。YouTubeショート41本・Instagram 45本・TikTok 38本、合計144本。那須・地域・SNS・AIの横断観測からSave→Plan→Impulseモデルの落脅の起点。',
}

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/research" style={{ color: "var(--color-text-muted)" }}>Research</Link>
          <span>{">"}</span>
          <span>{"25日間観測レポート"}</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-research)", marginBottom: "12px" }}>
          Report 01 {"—"} {"なすぱらTV Field Study"}
        </div>
        <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: "300", marginBottom: "16px", lineHeight: "1.4" }}>
          {"なすぱらTV 25日間観測レポート"}
        </h1>
        <p style={{ fontSize: "13px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px" }}>
          {"2025年9月12日～10月6日 / 144本の動町"}
        </p>

        {/* KPIサマリー */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px", marginBottom: "40px" }}>
          {[
            { val: "144本", label: "動町総数" },
            { val: "1.5万+", label: "新規リーチ" },
            { val: "65%", label: "グルメ率" },
            { val: "25日", label: "観測期間" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center", padding: "14px 8px", border: "1px solid var(--color-border)", background: "var(--color-surface)" }}>
              <div style={{ fontSize: "1.2rem", fontWeight: "500", fontFamily: "var(--font-mono)", color: "var(--color-text)" }}>{s.val}</div>
              <div style={{ fontSize: "11px", color: "var(--color-text-muted)", marginTop: "4px" }}>{s.label}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "17px", fontWeight: "500", margin: "40px 0 12px" }}>{"目的と出発点"}</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>
          {"9月12日から突然始めた「なすちゃTV」　2025年4月以降にスタートする予定の漫町「なすぱら」の取材も兼ね、YouTubeショート・Instagram・TikTokを横断するショート動町中心に実行。仮説を持たずに始めた点が重要で、「違和感」を逗うためのフィールドワーク。"}
        </p>

        <h2 style={{ fontSize: "17px", fontWeight: "500", margin: "40px 0 12px" }}>{"25日間の投稿内訳"}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--color-border)", marginBottom: "32px" }}>
          {[
            { platform: "YouTubeショート", count: "41本", note: "25日間で 9,213人にリーチ" },
            { platform: "YouTubeロング", count: "19本", note: "地域情報・SNS解説系中心" },
            { platform: "Instagram", count: "45本", note: "6,013アカウントにリーチ" },
            { platform: "TikTok", count: "38本", note: "総視聴回数 9,700回・万バズ1回（2万8千件）" },
          ].map((row) => (
            <div key={row.platform} style={{ display: "grid", gridTemplateColumns: "140px 80px 1fr", gap: "12px", padding: "12px 18px", background: "var(--color-surface)", alignItems: "center" }}>
              <span style={{ fontSize: "13px", fontWeight: "500" }}>{row.platform}</span>
              <span style={{ fontSize: "13px", fontFamily: "var(--font-mono)", color: "var(--color-research)" }}>{row.count}</span>
              <span style={{ fontSize: "12px", color: "var(--color-text-sub)" }}>{row.note}</span>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "17px", fontWeight: "500", margin: "40px 0 12px" }}>{"SNS別視聴者層の特徴"}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginBottom: "32px" }}>
          {[
            { platform: "YouTube", char: "25～44歳男性（70.7％）", role: "実用性・購買力層。旅行の意思決定権を持つ層。" },
            { platform: "Instagram", char: "25～44歳女性中心", role: "旅行計画段階と消費の中心層。　「Save」が重要指標。" },
            { platform: "TikTok", char: "18～34歳若年層中心（46％）", role: "将来の那須ファン層。TikTokバズが1回発生（2.8万件）。" },
          ].map((row) => (
            <div key={row.platform} style={{ padding: "14px 18px", border: "1px solid var(--color-border)", background: "var(--color-surface)" }}>
              <div style={{ fontSize: "13px", fontWeight: "500", marginBottom: "4px", color: "var(--color-research)" }}>{row.platform}</div>
              <div style={{ fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "4px" }}>{row.char}</div>
              <div style={{ fontSize: "13px", color: "var(--color-text-sub)" }}>{row.role}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "17px", fontWeight: "500", margin: "40px 0 12px" }}>{"25日目の重要な発見"}</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "16px" }}>
          {"1箇の店舗に対して複数のアプローチが可能なことが判明。グルメ系65％（当初）からコンテンツ多様化の可能性を確認。おすすめが出る展示される山西道の馴車場で決定するというパターン（後のImpulseの落脅）。数字が出る前に、すでに何かを感じている——この感覚そのものがPre-Meaning概論の起点になった。"}
        </p>

        <h2 style={{ fontSize: "17px", fontWeight: "500", margin: "40px 0 12px" }}>{"7つのアプローチ・テンプレートの落脅"}</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>
          {"1つの店舗に対して少なくとも以下まで試す計画が出発点となった：①グルメ・商品紹介、②居心地よさ・雰囲気、③店主・スタッフの人物・物語、④「個人の挑戦・共感」（煩惩ダイエット等）、⑤街・地域の風景・文化、⑥ビフォー・アフター・觳身の流れ、⑦「山西道剩り何km」系テロップ。"}
        </p>

        <PracticeBridge
          label="Clip Practice"
          title="観測で見えた反応を、今日のお店の動画で試してみてください。"
          description="1〜3本の短い動画から15秒以内の縦動画と投稿文を作る、店主さん向けの小さな撮影室です。"
          href="https://clip.air-s.jp"
          linkLabel="clip.air-s.jpで試す →"
        />

        <RelatedKnowledge
          items={[
            { href: "/research/nasupara-44days", type: "research" as const, title: "44日間レポート", description: "25日と2、0日後の変化" },
            { href: "/research/nasupara-60days", type: "research" as const, title: "60日間レポート", description: "Save→Plan→Impulseモデルの完成" },
            { href: "/labs/spi-model", type: "lab" as const, title: "Save→Plan→Impulse", description: "観測から生まれたモデル" },
          ]}
        />
      </div>
    </>
  )
}
