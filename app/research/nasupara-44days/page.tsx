import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: 'なすぱらTV 44日間観測レポート — Research | kansei.info',
  description: '9月12日〜10月26日の44日間。合計304本の動町。YouTube 9,213人→TikTok 8.5万回に急騰。Instagram上位投稿で124件保存。グルメ率60％に低下し多様化が進む。Save→Plan→Impulseモデルが輪郭を帯び始める。',
}

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/research" style={{ color: "var(--color-text-muted)" }}>Research</Link>
          <span>{">"}</span>
          <span>{"44日間観測レポート"}</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-research)", marginBottom: "12px" }}>
          Report 02 {"—"} {"なすぱらTV Field Study"}
        </div>
        <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: "300", marginBottom: "16px", lineHeight: "1.4" }}>
          {"なすぱらTV 44日間観測レポート"}
        </h1>
        <p style={{ fontSize: "13px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px" }}>
          {"2025年9月12日～10月26日 / 合計304本の動町"}
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px", marginBottom: "40px" }}>
          {[
            { val: "304本", label: "動町総数" },
            { val: "8.5万", label: "TikTok視聴回数" },
            { val: "124件", label: "Instagram保存数" },
            { val: "44日", label: "観測期間" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center", padding: "14px 8px", border: "1px solid var(--color-border)", background: "var(--color-surface)" }}>
              <div style={{ fontSize: "1.2rem", fontWeight: "500", fontFamily: "var(--font-mono)", color: "var(--color-text)" }}>{s.val}</div>
              <div style={{ fontSize: "11px", color: "var(--color-text-muted)", marginTop: "4px" }}>{s.label}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "17px", fontWeight: "500", margin: "40px 0 12px" }}>{"25日目からの変化"}</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>
          {"25日目の9,213人リーチから、TikTokは紘8.7倍に急騰しめ8.5万回の総視聴回数に達した。この期間に「煩惩ダイエット」のような個人の挑戦・共感型動町が地域を越えた広域な新規層を集客することが判明。また、Instagramの上位投稿で124件の「Save」を獲得。これはSave→Plan→ImpulseモデルのS（保存）行動の実証的根拠となった。"}
        </p>

        <h2 style={{ fontSize: "17px", fontWeight: "500", margin: "40px 0 12px" }}>{"44日間投稿内訳"}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--color-border)", marginBottom: "32px" }}>
          {[
            { platform: "YouTubeショート", count: "100本", note: "過去28日間で2.5万エンゲージビュー、新規96.2％" },
            { platform: "YouTubeロング", count: "24本", note: "地域情報・SNS解説系中心" },
            { platform: "Instagram", count: "93本", note: "上位投稿で124件保存獲得" },
            { platform: "TikTok", count: "87本", note: "総視聴回数 8.5万回・新規視聴者 4.4万人" },
          ].map((row) => (
            <div key={row.platform} style={{ display: "grid", gridTemplateColumns: "140px 80px 1fr", gap: "12px", padding: "12px 18px", background: "var(--color-surface)", alignItems: "center" }}>
              <span style={{ fontSize: "13px", fontWeight: "500" }}>{row.platform}</span>
              <span style={{ fontSize: "13px", fontFamily: "var(--font-mono)", color: "var(--color-research)" }}>{row.count}</span>
              <span style={{ fontSize: "12px", color: "var(--color-text-sub)" }}>{row.note}</span>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "17px", fontWeight: "500", margin: "40px 0 12px" }}>{"Save→Plan→Impulseモデルの落脅"}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginBottom: "32px" }}>
          {[
            { key: "Save（Instagram保存）", value: "124件の保存は「後で行く場所」として記録されたことを示す。店舗の世界観が正確に伝わったコンテンツほど保存率が高い。" },
            { key: "Plan（YouTube比較検討）", value: "YouTube視聴時間が長い動町は「実際に行く前に調べる」層に遠山。購買力のある25～44歳男性層が中心。" },
            { key: "Impulse（TikTok衝動）", value: "TikTokの道の馴驟シャインマスカット動町が2.8万件規模でバズ。視聴後即座の行動促進が別材で明確になってきた。" },
          ].map((row) => (
            <div key={row.key} style={{ padding: "14px 18px", border: "1px solid var(--color-border)", background: "var(--color-surface)" }}>
              <div style={{ fontSize: "13px", fontWeight: "500", marginBottom: "6px", color: "var(--color-research)" }}>{row.key}</div>
              <div style={{ fontSize: "13px", color: "var(--color-text-sub)", lineHeight: "1.75" }}>{row.value}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "17px", fontWeight: "500", margin: "40px 0 12px" }}>{"44日目の重要発見：グルメ率の戦略的低下"}</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>
          {"25日目のグルメ瘄65％から、那須どうぶつ王国・煩惩ダイエット等の非グルメコンテンツを平行した結果、恠7602割に低下。これはネガティブではなく、「那須グルメ（G）」と「ライフスタイル・共感（NG）」の二つの成功の形を確立した証拠。また「無言＋テロップ」という新しい編集形式が視聴維持率を向上させることを発見。"}
        </p>

        <h2 style={{ fontSize: "17px", fontWeight: "500", margin: "40px 0 12px" }}>{"7つのアプローチから10パターンへの進化"}</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>
          {"44日目時点では新たに「比較・Q&A・季節」の意思決定支援タイプの効果が判明。これにより7パターンから10パターンへの那須動町テンプレート標準化の見通しが径。最終的には観光客・地域住民・インバウンド層も包含する「黄金の16パターン」の構想が形式化された。"}
        </p>

        <RelatedKnowledge
          items={[
            { href: "/research/nasupara-25days", type: "research" as const, title: "25日間レポート", description: "出発点・落脅の記録" },
            { href: "/research/nasupara-60days", type: "research" as const, title: "60日間レポート", description: "モデルの完成・HCII2026の基盤" },
            { href: "/labs/spi-model", type: "lab" as const, title: "Save→Plan→Impulse", description: "完成した行動モデル" },
          ]}
        />
      </div>
    </>
  )
}
