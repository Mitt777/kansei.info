import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: '世界観設計7層モデル — Frameworks',
  description: '原初物語→世界観接触→境界侵入→没入環境→期待増幅→感動体験→伝播帰属。ディズニーのイマジニアリング哲学・Pine & Gilmore・楠木健と接続した顧客体験の因果構造モデル。',
}

const layers = [
  {
    num: '①',
    name: '原初物語',
    en: 'Origin Story',
    desc: '「なぜ存在するのか」——理念・哲学・起源。ここが弱い場所は、長期的に世界観が不安定になる。ウォルト・ディズニーは「親と子が共に楽しめる場所」という原初物語を持っていた。那須のカフェ店主は、言語化されていないが確実に存在する原初物語を持っている。',
    disney: 'It All Begins with a Story（ウォルト・ディズニー・イマジニアリング公式原則）',
    theory: 'Brand Myth / 楠木健「因果論理」/ Storytelling',
    examples: ['ディズニー：「夢と魔法の王国」', 'スタバ：「サードプレイス」', 'SHOZO：「まちづくり」への思い'],
    color: '#C9A84C',
  },
  {
    num: '②',
    name: '世界観接触',
    en: 'World Contact',
    desc: 'SNS・動画・口コミ——最初の接触と期待形成。人は体験そのものだけではなく、体験前の想像によって感情を増幅させる。ディズニーランドに向かう高速道路で、すでに気持ちが高まっている人は多い。Instagramで「保存」された時点で、顧客の体験はすでに始まっている。',
    disney: 'パーク前の期待形成設計 / SNS・YouTube戦略',
    theory: 'Customer Journey / Anticipation Design',
    examples: ['Instagram保存（Save行動）', 'YouTube比較検討（Plan行動）', 'TikTok衝動（Impulse行動）'],
    color: '#8B5CF6',
  },
  {
    num: '③',
    name: '境界侵入',
    en: 'Threshold Crossing',
    desc: '駐車場・入口・看板——日常から世界観への移行。ウォルト・ディズニーが命名した「Weenie（ウィニー）」理論がここに該当する。シンデレラ城という視覚的磁石が、意識的な決断をする前に人を引き寄せる。良い店舗ほど、突然世界観が始まるのではなく、少しずつ空気が変わっていく。',
    disney: '「Weenie」理論 / シンデレラ城の視覚誘導 / Mickey’s 10戒：「Create a Wienie」',
    theory: 'Transition Design / Environmental Psychology / Threshold Theory',
    examples: ['駐車場から世界観が始まっているか', 'エントランスで空気が変わるか', '「ここから別の世界」という感覚'],
    color: '#3B82F6',
  },
  {
    num: '④',
    name: '没入環境',
    en: 'Immersive Environment',
    desc: '音・匂い・光・接客・導線——空間全体が機能する。「Art of the Show」という概念が、ここの理論的核心だ。建築・照明・小道具・造園のすべてが、意図された物語と感情的なトーンを伝えるよう機能する。世界観とは「ノイズを減らす技術」でもある。',
    disney: 'Mickey’s 10戒「Communicate with visual literacy」「Avoid overload」/ Art of the Show（John Hench）',
    theory: 'Atmosphere Theory（Böhme）/ Atmospheric UX / Emotional Design（Norman）',
    examples: ['SHOZO CAFEの静けさそのもの', '過剰POPの排除', '木・光・音の一貫性'],
    color: '#10B981',
  },
  {
    num: '⑤',
    name: '期待増幅',
    en: 'Anticipation Amplification',
    desc: '待ち時間・行列・前説——「予感」の設計。ディズニーの「プレ・ショー（Pre-show）」がここに該当する。ホーンテッドマンションの「伸びる部屋」は待ち時間を「物語への導入」へと変換する。人間は「もうすぐ始まる」という感覚で期待を増幅させる。',
    disney: 'プレ・ショー設計 / 行列の世界観化 / 「伸びる部屋」（ホーンテッドマンション）',
    theory: 'Flow Theory（Csikszentmihalyi）/ Anticipation Design / 心理的待機時間',
    examples: ['行列が「退屈」にならないか', '「予感」が存在するか', 'ペニーレインの駐車場から聞こえる音楽'],
    color: '#F59E0B',
  },
  {
    num: '⑥',
    name: '感動体験',
    en: 'Peak Experience',
    desc: '飲食・景色・ライブ・会話——ピーク体験の質。感動は単体で存在しているわけではない。前段の世界観があるから、感動が深くなる。同じコーヒーでも、空間によって記憶が変わる。ディズニーの「Plussing（プラッシング）」——常に上乗せし続ける文化。',
    disney: '「Plussing」文化 / 常に上乗せする / Walt Disney自身の姿勢',
    theory: 'Experience Economy（Pine & Gilmore）/ Emotional Design 3層（Norman）/ Peak-End Rule',
    examples: ['前段の世界観が感動を深める', 'SHOZO：コーヒーより「空気」を記憶する', 'ピーク体験の設計'],
    color: '#EC4899',
  },
  {
    num: '⑦',
    name: '伝播帰属',
    en: 'Propagation & Belonging',
    desc: 'SNS・再訪・ファン化——「あの場所にいた自分」の記憶。人は単に「良かった」だけでは再訪しない。「あの場所にいた自分」を記憶しているから、また戻りたくなる。ディズニーのFan Experienceは、パークを出た後も世界観を持続させるメカニズムを設計している。',
    disney: 'Fan Experience拡張 / Disney Pin Trading / Disney Bounding / 「魔法を持ち帰る」',
    theory: 'Social Identity Theory / Place Attachment（Tuan）/ WOM研究 / Community Theory',
    examples: ['SNS投稿が「空気」を伝えているか', '「また来たい理由」が価格以外にあるか', 'ファン・常連の形成'],
    color: '#6366F1',
  },
]

export default function SevenLayersPage() {
  return (
    <>
      <div className="sl-hero">
        <div className="sl-hero-inner">
          <div className="sl-breadcrumb">
            <Link href="/frameworks">Frameworks</Link>
            <span>›</span>
            <span>7 Layers Model</span>
          </div>
          <div className="sl-label">Framework — 7 Layers Model</div>
          <h1 className="sl-title">世界観設計7層モデル</h1>
          <p className="sl-desc">
            「また来たくなる場所」には、体験が線でつながっている。
            原初物語から伝播帰属まで——顧客体験の因果構造を7層で整理したモデル。
            ディズニーのイマジニアリング哲学・Pine & Gilmoreの経験経済論・楠木健の因果論理と接続している。
          </p>
        </div>
      </div>

      <div className="sl-body">

        {/* 方程式 */}
        <div className="sl-equation">
          <div className="sl-eq-label">Worldview Value Equation — 世界観価値の方程式</div>
          <div className="sl-eq-text">
            <span className="sl-eq-val">世界観価値</span>
            {" ＝ "}
            <span className="sl-eq-val">意味的一貫性</span>
            {" × "}
            <span className="sl-eq-val">感覚的没入</span>
            {" × "}
            <span className="sl-eq-val">社会的帰属</span>
            {" × "}
            <span className="sl-eq-val">伝播性</span>
          </div>
          <p style={{ fontSize: "12px", color: "var(--color-text-muted)", marginTop: "10px", fontFamily: "var(--font-mono)" }}>
            どれか一つが弱いと、世界観全体が崩れる掛け算の構造
          </p>
        </div>

        {/* 7層 */}
        <div className="sl-layers">
          {layers.map((layer) => (
            <div
              key={layer.num}
              className="sl-layer"
              style={{ "--layer-color": layer.color } as React.CSSProperties}
            >
              <div className="sl-layer-head">
                <div className="sl-layer-num">{layer.num}</div>
                <div className="sl-layer-names">
                  <div className="sl-layer-name">{layer.name}</div>
                  <div className="sl-layer-en">{layer.en}</div>
                </div>
              </div>
              <div className="sl-layer-body">
                <p className="sl-layer-desc">{layer.desc}</p>
                <div className="sl-layer-meta">
                  <div className="sl-meta-block">
                    <div className="sl-meta-label">Disney 実践例</div>
                    <div className="sl-meta-text disney">{layer.disney}</div>
                  </div>
                  <div className="sl-meta-block">
                    <div className="sl-meta-label">理論接続</div>
                    <div className="sl-meta-text">{layer.theory}</div>
                  </div>
                </div>
                <div className="sl-examples">
                  {layer.examples.map((ex) => (
                    <span key={ex} className="sl-example">{ex}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 理論接続 */}
        <div className="sl-theory-note">
          <div className="sl-theory-label">Academic Foundations — 学術的接続</div>
          <div className="sl-theory-tags">
            {[
              "Pine & Gilmore — Experience Economy, Harvard Business Review 1998（被引用4294）",
              "Walt Disney Imagineering — Mickey’s Ten Commandments（Marty Sklar）",
              "John Hench — Art of the Show（Designing Disney, 2003）",
              "楠木健 — ストーリーとしての競争戦略（2010）",
              "Don Norman — Emotional Design（2004）",
              "Gernot Böhme — Atmosphere Theory（1993）",
              "Mihaly Csikszentmihalyi — Flow Theory（1990）",
              "Yi-Fu Tuan — Topophilia（1974）",
              "Merleau-Ponty — Phenomenology of Perception（1945）",
              "Michael Porter — Competitive Strategy（1980）",
            ].map((t) => (
              <span key={t} className="sl-theory-tag">{t}</span>
            ))}
          </div>
        </div>

        
        <div style={{ marginTop: "48px", marginBottom: "48px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "16px" }}>
            各層の詳細ページ
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            {[
              { slug: "origin-story", num: "①", name: "原初物語", en: "Origin Story", color: "#C9A84C" },
              { slug: "world-contact", num: "②", name: "世界観接触", en: "World Contact", color: "#8B5CF6" },
              { slug: "threshold-crossing", num: "③", name: "境界侵入", en: "Threshold Crossing", color: "#3B82F6" },
              { slug: "immersive-environment", num: "④", name: "没入環境", en: "Immersive Environment", color: "#10B981" },
              { slug: "anticipation", num: "⑤", name: "期待増幅", en: "Anticipation", color: "#F59E0B" },
              { slug: "peak-experience", num: "⑥", name: "感動体験", en: "Peak Experience", color: "#EC4899" },
              { slug: "propagation", num: "⑦", name: "伝播帰属", en: "Propagation", color: "#6366F1" },
            ].map((l) => (
              <Link key={l.slug} href={`/frameworks/7layers/${l.slug}`} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: `4px solid ${l.color}` }}>
                <span style={{ fontSize: "16px", fontFamily: "var(--font-mono)", color: l.color, minWidth: "24px" }}>{l.num}</span>
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: "14px", fontWeight: "500" }}>{l.name}</span>
                  <span style={{ fontSize: "11px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginLeft: "8px" }}>{l.en}</span>
                </div>
                <span style={{ fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>詳細 →</span>
              </Link>
            ))}
          </div>
        </div>

        <RelatedKnowledge
          items={[
            { href: "/frameworks/three-types", type: "framework", title: "三類型（A / A' / B）", description: "ディズニー・サンリオ・地域店の世界観の違い" },
            { href: "/frameworks/worldview-value", type: "framework", title: "世界観価値の方程式", description: "意味×感覚×帰属×伝播性" },
            { href: "/research/hcii2026", type: "research", title: "HCII2026 Save-Plan-Impulse", description: "国際学会採択論文" },
            { href: "/books/sekaikan", type: "book", title: "世界観マーケティングと顧客体験の方程式", description: "7層モデルを詳述した書籍" },
            { href: "/diagnosis", type: "framework", title: "7層セルフ診断ツール", description: "あなたの場所を7層で測定" },
          ]}
        />
      </div>
    </>
  )
}
