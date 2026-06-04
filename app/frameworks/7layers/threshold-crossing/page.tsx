import type { Metadata } from 'next'
import Link from 'next/link'
import PracticeBridge from '@/components/PracticeBridge'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: '第三層 境界侵入（Threshold Crossing）— 7層モデル | kansei.info',
  description: '日常から世界観への移行を設計する層。ディズニーのWeenie理論がここに該当。「良い店ほど、突然世界観が始まるのではなく、少しずつ空気が変わっていく」という観察が核心。',
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "第三層 境界侵入 — Threshold Crossing",
      "description": "日常から世界観への移行を設計する層。ディズニーのWeenie理論がここに該当。「良い店ほど、突然世界観が始まるのではなく、少しずつ空気が変わっていく」という観察が核心。",
      "url": "https://kansei.info/frameworks/7layers/threshold-crossing",
      "author": { "@type": "Person", "name": "藤井実彦", "url": "https://kansei.info/about" },
      "isPartOf": { "@type": "Article", "name": "世界観設記7層モデル", "url": "https://kansei.info/frameworks/7layers" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [{"@type": "Question", "name": "テナントビルの中にある店は境界侵入が難しいのでは？", "acceptedAnswer": {"@type": "Answer", "text": "確かに制約はあります。しかし看板・のれん・ドアの前の匂い・BGMの漏れ方・床の素材——テナント内でも設計できる境界侵入の要素は多くあります。フランクリンズカフェのように「たどり着くまでの道」を世界観にする発想も有効です。"}}, {"@type": "Question", "name": "境界侵入はいつから始まるべきですか？", "acceptedAnswer": {"@type": "Answer", "text": "理想は「SNSで見た瞬間から」です。第二層（世界観接触）でSaveした時点で期待が形成され、現地への移動中・駐車場・アプローチと連続して空気が変わっていく。第二層と第三層は有機的につながっています。"}}]
    }
  ]
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <Link href="/frameworks" style={{ color: "var(--color-text-muted)" }}>Frameworks</Link>
          <span>›</span>
          <Link href="/frameworks/7layers" style={{ color: "var(--color-text-muted)" }}>7層モデル</Link>
          <span>›</span>
          <span>境界侵入</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "#3B82F6" }}>
            第三層 — Layer 3 of 7
          </div>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: "300", marginBottom: "8px" }}>
          <span style={{ color: "#3B82F6", marginRight: "8px", fontFamily: "var(--font-mono)" }}>第三層</span>
          境界侵入
        </h1>
        <div style={{ fontSize: "14px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "8px" }}>Threshold Crossing</div>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "16px" }}>駐車場・入口・看板で、「別の空気」が始まっているか</p>

        <div style={{ padding: "14px 18px", background: "var(--color-bg-alt)", border: "1px solid var(--color-border)", borderLeft: "4px solid #3B82F6", marginBottom: "48px" }}>
          <div style={{ fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "6px" }}>Theory Foundation</div>
          <div style={{ fontSize: "12px", color: "var(--color-text-sub)", fontStyle: "italic" }}>Weenie Theory（Walt Disney Imagineering）/ Transition Design / Environmental Psychology / Rites of Passage</div>
        </div>

        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>境界侵入とは何か</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>境界侵入（Threshold Crossing）とは、顧客が「日常」から「その場所の世界観」へと移行するプロセスを設計する層だ。駐車場、アプローチ、看板、入口——これらはすべて、日常と世界観の「境界」だ。この境界の設計が、顧客が最初に感じる「空気の変化」を決定する。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>ディズニーのWeenie理論</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>ウォルト・ディズニーは、パークの設計で「Weenie（ウィニー）」という概念を使った。犬が香りに引き寄せられるように、人を引き寄せる「視覚的磁石」のことだ。シンデレラ城がその代表例。入口から城が見えることで、人は無意識に「あそこへ行きたい」と感じ、歩き始める。Weeniesは、境界侵入を「意識せずに越えさせる」設計だ。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>ペニーレインの駐車場設計</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>那須高原のペニーレインで最も印象的なのは、駐車場に着いた瞬間からBeatlesが聞こえることだ。建物の外まで音楽が届いている。これは第三層・境界侵入の設計として極めて優秀だ。「車を降りた瞬間」という境界で、すでに世界観が始まっている。音という感覚が、日常から世界観への移行を促している。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>芦野温泉旅館の「道中」設計</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>芦野温泉旅館への道を車で進んでいると、周囲の木々の密度が増すにつれて、車内の会話が自然に静かになっていく。到着する前に、すでに空気が変わっている。これは第三層が、施設の「入口」ではなく「道中」から始まっている事例だ。境界侵入は、必ずしも物理的な入口で起きる必要はない。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>境界侵入の設計チェックリスト</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>駐車場から世界観が始まっているか。看板・サイン・外観が世界観と一致しているか。入口で「日常と違う空気」を感じられるか。最初の5秒で「ここは違う」と感じられるか。アプローチの長さ・素材・音・匂いが設計されているか。これらが「なんとなく」ではなく、意図を持って設計されているかを確認しよう。</p>

        <div style={{ padding: "16px 20px", background: "var(--color-bg-alt)", border: "1px solid var(--color-border)", marginTop: "40px", marginBottom: "40px" }}>
          <div style={{ fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "8px" }}>Disney Connection</div>
          <div style={{ fontSize: "13px", color: "var(--color-text-sub)", fontStyle: "italic", lineHeight: "1.7" }}>Weenie理論 / シンデレラ城の視覚的誘導 / 入場ゲートの演出設計</div>
        </div>

        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "12px", marginTop: "48px" }}>FAQ</div>
          <div style={{ border: "1px solid var(--color-border)", background: "var(--color-surface)", padding: "18px 22px", marginBottom: "2px" }}>
            <div style={{ fontSize: "14px", fontWeight: "500", marginBottom: "8px", display: "flex", gap: "10px" }}>
              <span style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)", fontSize: "12px", flexShrink: 0 }}>Q.</span>
              テナントビルの中にある店は境界侵入が難しいのでは？
            </div>
            <div style={{ fontSize: "13.5px", lineHeight: "1.85", color: "var(--color-text-sub)", display: "flex", gap: "10px" }}>
              <span style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "12px", flexShrink: 0 }}>A.</span>
              確かに制約はあります。しかし看板・のれん・ドアの前の匂い・BGMの漏れ方・床の素材——テナント内でも設計できる境界侵入の要素は多くあります。フランクリンズカフェのように「たどり着くまでの道」を世界観にする発想も有効です。
            </div>
          </div>
          <div style={{ border: "1px solid var(--color-border)", background: "var(--color-surface)", padding: "18px 22px", marginBottom: "2px" }}>
            <div style={{ fontSize: "14px", fontWeight: "500", marginBottom: "8px", display: "flex", gap: "10px" }}>
              <span style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)", fontSize: "12px", flexShrink: 0 }}>Q.</span>
              境界侵入はいつから始まるべきですか？
            </div>
            <div style={{ fontSize: "13.5px", lineHeight: "1.85", color: "var(--color-text-sub)", display: "flex", gap: "10px" }}>
              <span style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "12px", flexShrink: 0 }}>A.</span>
              理想は「SNSで見た瞬間から」です。第二層（世界観接触）でSaveした時点で期待が形成され、現地への移動中・駐車場・アプローチと連続して空気が変わっていく。第二層と第三層は有機的につながっています。
            </div>
          </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--color-border)", paddingTop: "32px", marginTop: "48px", flexWrap: "wrap", gap: "12px" }}>
          <Link href="/frameworks/7layers" style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
            ← 7層モデル一覧
          </Link>
          <Link href="/diagnosis" className="btn-primary">
            自分の場所を診断する →
          </Link>
        </div>

        <PracticeBridge />

        <RelatedKnowledge
          items={[
            { href: "/fieldwork/pennyln", type: "fieldwork" as const, title: "ペニーレイン", description: "駐車場からの境界侵入" },
            { href: "/fieldwork/ashino-onsen", type: "fieldwork" as const, title: "芦野温泉旅館", description: "道中から始まる境界" },
            { href: "/fieldwork/disney", type: "fieldwork" as const, title: "東京ディズニーランド", description: "Weenie理論の完璧な実践" },
          ]}
        />
      </div>
    </>
  )
}
