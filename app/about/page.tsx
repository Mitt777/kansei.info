import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: 'About — 藤井実彦 | kansei.info',
  description: 'WEBマーケッター・漫画原作者・AI・SNSマーケティング実践者。1972年博多生まれ。青山学院大学心理学専攻卒。HCII2026採択。株式会社エックスブレーンズ代表取締役。',
}

const manga = [
  { year: "2013", title: "「韓国脱出マニュアル」（ネクストドアー出版）/ 「Les Faits J」（星雲社）" },
  { year: "2015", title: "「村山談話20年目の真実」（イースト・プレス）" },
  { year: "2017", title: "映画「哲人王」（園田映人監督作品・プロデューサー）" },
  { year: "2019", title: "「マンガでわかるこんなに危ない消費増税」（ビジネス社） ★ Amazon総合2位 / 累計7万部超" },
  { year: "2020", title: "「マンガでわかるこんなに危ない日本経済」（ビジネス社）/ 「マンガでわかるこんなにヤバいコロナ大不況」（宝島社）" },
  { year: "2021", title: "「202X年の大予言」（ビジネス社）/ 映画「君たちはまだ長いトンネルの中」（なるせゆうせい監督・原作）" },
  { year: "2022", title: "「財政破綻の大嘘」（経営科学出版）" },
  { year: "2023", title: "「2031年の黙示録」（ビジネス社）" },
  { year: "2024", title: "「マンガ お金の真実」（宝島社）" },
  { year: "2025", title: "「まんが 安倍晋三物語」（飛鳥新社） ★ YouTube漫画としても制作・配信" },
]

export default function AboutPage() {
  return (
    <>
      <div className="ab-hero">
        <div className="ab-hero-inner">
          <div>
            <div className="ab-portrait" aria-hidden="true">
              <Image src="/images/about-room.jpg" alt="" fill priority sizes="(max-width: 768px) 100vw, 560px" className="quiet-image" />
            </div>
            <div className="ab-label">About — 著者</div>
            <h1 className="ab-name">藤井 実彦</h1>
            <div className="ab-name-en">Mitsuhiko Fujii</div>
            <div className="ab-roles">
              <span className="ab-role">WEBマーケッター</span>
              <span className="ab-role">漫画原作者</span>
              <span className="ab-role">AI・SNSマーケティング実践者</span>
              <span className="ab-role">HCI研究者</span>
              <span className="ab-role">世界観マーケティング提唱者</span>
            </div>
            <p className="ab-lead">
              1972年博多生まれ、新宿育ち。青山学院大学文学部教育学科心理学専攻卒。
              WEBマーケティングコンサルタントとして独立20年目。現在は那須在住。
              「伝わらない」を構造から分解し、人が動く形に再設計することが専門。
            </p>
          </div>
          <div className="ab-stats">
            <div className="ab-stat"><div className="ab-stat-val">20年</div><div className="ab-stat-label">WEB独立歴</div></div>
            <div className="ab-stat"><div className="ab-stat-val">468本</div><div className="ab-stat-label">動画観測数</div></div>
            <div className="ab-stat"><div className="ab-stat-val">9冊</div><div className="ab-stat-label">著書（日英）</div></div>
            <div className="ab-stat"><div className="ab-stat-val">HCII</div><div className="ab-stat-label">国際学会採択</div></div>
          </div>
        </div>
      </div>

      <div className="ab-body">
        <div>
          <div className="ab-section">
            <div className="ab-section-label">Company</div>
            <h2>株式会社エックスブレーンズ</h2>
            <div style={{ display: "grid", gridTemplateColumns: "90px 1fr", gap: "0 16px", fontSize: "14px", color: "var(--color-text-sub)" }}>
              {[["サービス名","エックスブレーンズ"],["会社名","株式会社エックスブレーンズ"],["設立","2011年3月"],["代表取締役","藤井 実彦"],["業務","WEBコンサルティング / 漫画制作（iComiX）/ AIマーケティング"],["所在地","栃木県那須町"]].map(([label, val]) => (
                <div key={label} style={{ display: "contents" }}>
                  <span style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "11px", padding: "6px 0", borderBottom: "1px solid var(--color-border-light)" }}>{label}</span>
                  <span style={{ padding: "6px 0", borderBottom: "1px solid var(--color-border-light)" }}>{val}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "12px" }}>
              <a href="https://xbrains.jp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", color: "var(--color-gold)", fontFamily: "var(--font-mono)" }}>xbrains.jp →</a>
            </div>
          </div>

          <div className="ab-section">
            <div className="ab-section-label">Philosophy</div>
            <h2>WEBマーケティングとは「意思決定の設計」である</h2>
            <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "16px" }}>
              藤井のWEBマーケティングの原点は、机上の理論ではなく現場で「売れる瞬間」を何度も目撃してきた経験にある。大手飲食店・IT企業・ソフトウェア産業を経て、歯科技工業で独立。事業を軌道に乗せた後5年で売却。その後、WEBマーケティングコンサルタントとして本格的に独立した。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)" }}>
              藤井が一貫して重視してきたのは、「人が、どの瞬間に納得し、行動するか」その一点を明確にポジショニングすること。WEBマーケティングとは「集客の技術」ではなく、意思決定の設計である——この思想は、現在の活動すべての基盤となっている。
            </p>
          </div>

          <div className="ab-section">
            <div className="ab-section-label">Achievements</div>
            <h2>主な実績</h2>
          </div>
          <div className="ab-achievements">
            {[
              { title: "HCII2026 国際学会採択", desc: "国際人間コンピュータインタラクション学会（HCII2026）に「Save-Plan-Impulse: Kansei Driven Regional DX」が採択。那須地域60日間・SNS動画観測（468本・300万インプレッション以上）に基づく感性ドリブン地域DX論が国際的に認められた。" },
              { title: "漫画原作 Amazon総合2位・累計7万部超のベストセラー含む13冊以上", desc: "2013年より言論・出版活動を開始。「読み込み、分解し、最高にわかりやすくする」を基本コンセプトに、感情ではなくデータと構造をベースにした漫画表現で社会・経済・政治テーマを「理解可能な形」に変換。" },
              { title: "なすぱらTV ・ 3ヶ月で600本以上の動画制作", desc: "YouTube・Instagram・TikTokを横断するSNS動画企画「なすぱらTV」を立ち上げ、3ヶ月で600本以上制作・配信。なぜ保存される動画と流れる動画があるのか、データと行動ログから分析し、Save→Plan→Impulseモデルを発見。" },
              { title: "YouTube・UFO・宇宙人テーマの動画プロデューサーとして680本以上", desc: "2020年以降、YouTubeを中心にUFO・宇宙人をテーマとした動画を企画・製作・プロデュース。漫画動画シリーズ「200X年 ソラカラの黙示録」を制作・配信。" },
              { title: "WEBマーケティングコンサルタントとして独立20年", desc: "大手飲食店・IT企業・ソフトウェア産業を経て独立。「人がどの瞬間に納得し、行動するか」の一点を常に重視。現在は那須在住で、WEBマーケティング設計・SEOコンテンツ戦略・マンガマーケティング・AI・SNS時代の表現設計を横断するコンサルティング・制作を行っている。" },
            ].map((item) => (
              <div key={item.title} className="ab-achievement">
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--color-gold)", flexShrink: 0, marginTop: "7px" }} />
                <div>
                  <div className="ab-ach-title">{item.title}</div>
                  <div className="ab-ach-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="ab-section">
            <div className="ab-section-label">Manga Works</div>
            <h2>漫画原作・映画実績（2013年〜）</h2>
            <p style={{ fontSize: "14px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "16px" }}>
              すべての情報を徹底的に読み込み、マーケティング的に構造分析したうえで、最高にわかりやすくアウトプットする。感情ではなく、データと構造をベースにした漫画表現。
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--color-border)" }}>
              {manga.map((m) => (
                <div key={m.year} style={{ background: "var(--color-surface)", padding: "12px 18px", display: "flex", gap: "16px" }}>
                  <span style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-gold)", minWidth: "36px", paddingTop: "2px" }}>{m.year}</span>
                  <span style={{ fontSize: "13px", color: "var(--color-text-sub)", lineHeight: "1.65" }}>{m.title}</span>
                </div>
              ))}
            </div>
          </div>

          <RelatedKnowledge
            items={[
              { href: "/manifesto", type: "essay" as const, title: "Manifesto", description: "思想宣言" },
              { href: "/research/hcii2026", type: "research" as const, title: "HCII2026論文", description: "学術的検証" },
              { href: "/fieldwork/nasu", type: "fieldwork" as const, title: "那須フィールドワーク", description: "60日468本の観測記録" },
              { href: "/books", type: "book" as const, title: "著作一覧", description: "9冊全文無料公開" },
            ]}
          />
        </div>

        <div>
          <div className="ab-hcii">
            <div className="ab-hcii-label">HCII2026 — 国際学会採択</div>
            <div className="ab-hcii-title">Save-Plan-Impulse: Kansei Driven Regional DX — Action Observation Notes from the Nasu Field Study</div>
            <div className="ab-hcii-desc">国際HCI学会2026年採択。那須地域での60日間フィールドワークに基づく感性ドリブン地域DX論の学術的検証。</div>
          </div>

          <div className="ab-sidebar-card">
            <div className="ab-sidebar-label">独自概念</div>
            {["世界観マーケティング","Atmospheric UX","Pre-Meaning","Human-side Alignment","文脈継続性","共鳴型経済圏","二流立地理論","感性波動論","Save → Plan → Impulse"].map((c) => (
              <div key={c} className="ab-sidebar-item">{c}</div>
            ))}
          </div>

          <div className="ab-sidebar-card">
            <div className="ab-sidebar-label">専門領域</div>
            {["WEBマーケティング設計","SEOコンテンツ戦略","マンガマーケティング（iComiX）","AI・SNS表現設計","地域DX・地域活性化","HCI研究・論文執筆"].map((s) => (
              <div key={s} className="ab-sidebar-item">{s}</div>
            ))}
          </div>

          <div className="ab-sidebar-card">
            <div className="ab-sidebar-label">Links</div>
            <div className="ab-sidebar-item"><a href="https://xbrains.jp" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-gold)" }}>xbrains.jp →</a></div>
            <div className="ab-sidebar-item"><Link href="/books" style={{ color: "var(--color-gold)" }}>著作一覧 →</Link></div>
            <div className="ab-sidebar-item"><Link href="/research" style={{ color: "var(--color-gold)" }}>調査レポート →</Link></div>
            <div className="ab-sidebar-item"><Link href="/contact" style={{ color: "var(--color-gold)" }}>お問い合わせ →</Link></div>
          </div>
        </div>
      </div>
    </>
  )
}
