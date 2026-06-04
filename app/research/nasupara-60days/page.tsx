import type { Metadata } from 'next'
import Link from 'next/link'
import PracticeBridge from '@/components/PracticeBridge'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: 'なすぱらTV 60日間観測レポート — Research | kansei.info',
  description: '9月12日〜11月12日の60日間。合計468本・300万インプレッション以上。Save→Plan→Impulseモデルの完成とHCII2026学会採択。那須動町テンプレート「黄金の16パターン」の完成。',
}

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/research" style={{ color: "var(--color-text-muted)" }}>Research</Link>
          <span>{">"}</span>
          <span>{"60日間観測レポート"}</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-research)", marginBottom: "12px" }}>
          Report 03 {"—"} {"なすぱらTV Field Study ・ HCII2026基盤データ"}
        </div>
        <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: "300", marginBottom: "16px", lineHeight: "1.4" }}>
          {"なすぱらTV 60日間観測レポート"}
        </h1>
        <p style={{ fontSize: "13px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px" }}>
          {"2025年9月12日～11月12日 / 468本の動町・300万インプレッション以上"}
        </p>

        {/* HCII2026採択バナー */}
        <div style={{ padding: "18px 22px", background: "var(--color-bg-alt)", border: "1px solid var(--color-border)", borderLeft: "4px solid var(--color-frameworks)", marginBottom: "32px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.15em", fontFamily: "var(--font-mono)", color: "var(--color-frameworks)", marginBottom: "6px" }}>
            {"HCII2026 国際学会採択"}
          </div>
          <div style={{ fontSize: "14px", fontWeight: "500", lineHeight: "1.6" }}>
            {"Save-Plan-Impulse: Kansei Driven Regional DX — Action Observation Notes from the Nasu Field Study"}
          </div>
          <div style={{ fontSize: "12px", color: "var(--color-text-muted)", marginTop: "6px" }}>
            {"Fujii, M. (2026). Proceedings of HCII 2026."}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px", marginBottom: "40px" }}>
          {[
            { val: "468本", label: "動町総数" },
            { val: "300万+", label: "インプレッション" },
            { val: "60日", label: "観測期間" },
            { val: "HCII", label: "国際学会採択" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center", padding: "14px 8px", border: "1px solid var(--color-border)", background: "var(--color-surface)" }}>
              <div style={{ fontSize: "1.2rem", fontWeight: "500", fontFamily: "var(--font-mono)", color: "var(--color-text)" }}>{s.val}</div>
              <div style={{ fontSize: "11px", color: "var(--color-text-muted)", marginTop: "4px" }}>{s.label}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "17px", fontWeight: "500", margin: "40px 0 12px" }}>{"60日間投稿内訳"}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--color-border)", marginBottom: "32px" }}>
          {[
            { platform: "YouTubeショート", count: "152本", note: "300万回以上のインプレッション・40万回前後の総視聴回数" },
            { platform: "YouTubeロング", count: "24本", note: "コアファン育成コンテンツ中心" },
            { platform: "Instagram", count: "154本", note: "中心年齢25～44歳女性 72.8％ / Save率最高" },
            { platform: "TikTok", count: "138本", note: "10代～20代女性中心 / 若年履形成層涵養" },
          ].map((row) => (
            <div key={row.platform} style={{ display: "grid", gridTemplateColumns: "140px 80px 1fr", gap: "12px", padding: "12px 18px", background: "var(--color-surface)", alignItems: "center" }}>
              <span style={{ fontSize: "13px", fontWeight: "500" }}>{row.platform}</span>
              <span style={{ fontSize: "13px", fontFamily: "var(--font-mono)", color: "var(--color-research)" }}>{row.count}</span>
              <span style={{ fontSize: "12px", color: "var(--color-text-sub)" }}>{row.note}</span>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "17px", fontWeight: "500", margin: "40px 0 12px" }}>{"Save→Plan→Impulseモデルの完成"}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginBottom: "32px" }}>
          {[
            { key: "Save（Instagram保存）", value: "「後で行く場所」として保存する行動。世界観が正確に伝わるコンテンツほど保存率が高いという相関が游山確立。Instagramのアルゴリズムと利用者の主要行動様式が一致している。", color: "#8B5CF6" },
            { key: "Plan（YouTube比較検討）", value: "実際に行く前に詳細を調べる層。YouTube視聴時間が長い動町指標が高い層は、実際に訪問した後の「事前に調べていた」という言及が多いという現場観察一致。", color: "#3B82F6" },
            { key: "Impulse（TikTok衝動）", value: "動町視聴後の即座の行動。道の馴車場からその場で目的地へ向かう行動が観察された。TikTokのアルゴリズムと短尺動町の即時性が衝動買い的行動を促進する。", color: "#F59E0B" },
          ].map((row) => (
            <div key={row.key} style={{ padding: "14px 18px", border: "1px solid var(--color-border)", background: "var(--color-surface)", borderLeft: `3px solid ${row.color}` }}>
              <div style={{ fontSize: "13px", fontWeight: "500", marginBottom: "6px", color: row.color }}>{row.key}</div>
              <div style={{ fontSize: "13px", color: "var(--color-text-sub)", lineHeight: "1.75" }}>{row.value}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "17px", fontWeight: "500", margin: "40px 0 12px" }}>{"SNS別視聴者層の分析"}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginBottom: "32px" }}>
          {[
            { platform: "YouTube", char: "25～44歳男性中心 / 関東圈多め", role: "那須旅行の意思決定権と購買力を持つ层。実用性・信頼性の高い情報を求める。" },
            { platform: "Instagram", char: "25～44歳女性 72.8％", role: "旅行の計画段階と消費の中心层。Save率が最も高く、来店計画に直結する指標。" },
            { platform: "TikTok", char: "10代～20代女性中心", role: "将来の那須ファン層。バズ拡散力が最も高く、新規認知のこぇ口が機能する。" },
          ].map((row) => (
            <div key={row.platform} style={{ padding: "14px 18px", border: "1px solid var(--color-border)", background: "var(--color-surface)" }}>
              <div style={{ fontSize: "13px", fontWeight: "500", marginBottom: "4px", color: "var(--color-research)" }}>{row.platform}</div>
              <div style={{ fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "4px" }}>{row.char}</div>
              <div style={{ fontSize: "13px", color: "var(--color-text-sub)" }}>{row.role}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "17px", fontWeight: "500", margin: "40px 0 12px" }}>{"60日間の洲教と黄金の16パターン"}</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "16px" }}>
          {"60日間の観測から、那須地域の店舗が自走で動町集客できる「黄金の16パターン」が完成。観光客層（Save・Plan・Impulse）・地域住民層（日常利用）・インバウンド層（多言語・Wabi-Sabi）の全ステークホルダーを包括する終極フレームワーク。"}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--color-border)", marginBottom: "32px" }}>
          {[
            "① グルメ・商品紹介型 　② 居心地よさ・雰囲気型 　③ 店主・スタッフの人物・物語型",
            "④ 個人の挑戦・共感型 　⑤ 街・地域の風景・文化型 　⑥ ビフォー・アフター・経緒型",
            "⑦ テロップ系 　⑧ 比較・Q&A型 　⑨ 季節・トレンド型",
            "⑩ 地域住民の日常利用型 　⑪ 地域貢献・未来共創型",
            "⑫ インバウンド・多言語利便性型 　⑬ インバウンド・文化体験特化型",
            "⑭ UGC創出・ユーザー巧み込み型 　⑮ 意思決定支援・不安解消型",
            "⑯ 進捗感・緊急性訴求型 　⑰ 重複視聴・コアファン育成型",
          ].map((row, i) => (
            <div key={i} style={{ padding: "10px 18px", background: "var(--color-surface)", fontSize: "12px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)", lineHeight: "1.8" }}>{row}</div>
          ))}
        </div>

        <h2 style={{ fontSize: "17px", fontWeight: "500", margin: "40px 0 12px" }}>{"HCII2026採択への道筋"}</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>
          {"60日間・468本の一次データが、国際人間コンピュータインタラクション学会（HCII2026）に採択された「Save-Plan-Impulse: Kansei Driven Regional DX」論文の実証的基盤となった。那須という地方から発した感性ドリブン地域DX論が国際的に認められた。"}
        </p>

        <PracticeBridge
          label="Clip Practice"
          title="黄金の動画パターンを、今日のお店の動画で試してみてください。"
          description="60日間の観測から見えたSNS行動を、1〜3本の短い動画から15秒以内の投稿用動画へ変換できます。"
          href="https://clip.air-s.jp"
          linkLabel="clip.air-s.jpで試す →"
        />

        <RelatedKnowledge
          items={[
            { href: "/research/nasupara-25days", type: "research" as const, title: "25日間レポート", description: "落脅の記録" },
            { href: "/research/nasupara-44days", type: "research" as const, title: "44日間レポート", description: "モデル形成期" },
            { href: "/research/hcii2026", type: "research" as const, title: "HCII2026論文", description: "完全確証版" },
            { href: "/labs/spi-model", type: "lab" as const, title: "Save→Plan→Impulse", description: "行動モデル詳細" },
          ]}
        />
      </div>
    </>
  )
}
