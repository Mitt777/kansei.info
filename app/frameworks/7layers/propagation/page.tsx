import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: '第七層 伝播帰属（Propagation）— 7層モデル | kansei.info',
  description: '体験した顧客が「また来たい」「誰かに伝えたい」と感じ、行動する層。「あの場所にいた自分」を記憶しているから、また戻りたくなる。この層が第二層（世界観接触）の原材料になることで、サイクルが完成する。',
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "第七層 伝播帰属 — Propagation",
      "description": "体験した顧客が「また来たい」「誰かに伝えたい」と感じ、行動する層。「あの場所にいた自分」を記憶しているから、また戻りたくなる。この層が第二層（世界観接触）の原材料になることで、サイクルが完成する。",
      "url": "https://kansei.info/frameworks/7layers/propagation",
      "author": { "@type": "Person", "name": "藤井実彦", "url": "https://kansei.info/about" },
      "isPartOf": { "@type": "Article", "name": "世界観設記7層モデル", "url": "https://kansei.info/frameworks/7layers" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [{"@type": "Question", "name": "再訪率を高めるにはどうすればいいですか？", "acceptedAnswer": {"@type": "Answer", "text": "「また来たい理由」を意図的に残すことが重要です。季節限定メニュー・限定イベント・常連への特別な関係——これらは「また行く理由」になります。ただし最も強いのは「あの場所にいた自分が好き」という場所帰属感で、これは第一〜六層の設計から生まれます。"}}, {"@type": "Question", "name": "SNS投稿を促すにはどうすればいいですか？", "acceptedAnswer": {"@type": "Answer", "text": "「映えスポット」を作るより、「語りたくなる体験」を作ることが優先です。世界観が強い場所では、顧客が「うまく言葉にできないけど、伝えたい」という衝動を持ちます。それが自然なSNS投稿につながります。「撮影スポット」という誘導より、「語りたくなる空気」の設計が長期的に効果的です。"}}]
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
          <span>伝播帰属</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "#6366F1" }}>
            第七層 — Layer 7 of 7
          </div>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: "300", marginBottom: "8px" }}>
          <span style={{ color: "#6366F1", marginRight: "8px", fontFamily: "var(--font-mono)" }}>第七層</span>
          伝播帰属
        </h1>
        <div style={{ fontSize: "14px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "8px" }}>Propagation</div>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "16px" }}>SNS投稿・口コミ・再訪のサイクルが回っているか</p>

        <div style={{ padding: "14px 18px", background: "var(--color-bg-alt)", border: "1px solid var(--color-border)", borderLeft: "4px solid #6366F1", marginBottom: "48px" }}>
          <div style={{ fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "6px" }}>Theory Foundation</div>
          <div style={{ fontSize: "12px", color: "var(--color-text-sub)", fontStyle: "italic" }}>Social Identity Theory / Place Attachment（Tuan, 1977）/ Word of Mouth Research / Fan Experience Design</div>
        </div>

        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>伝播帰属とは何か</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>伝播帰属（Propagation）とは、体験した顧客が「また来たい」「誰かに伝えたい」という感情を持ち、実際に行動する層だ。SNS投稿、口コミ、再訪、ファン化——これらすべてが伝播帰属の現象だ。重要なのは、伝播帰属が第二層（世界観接触）の原材料になることで、世界観のサイクルが完成するという点だ。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>「あの場所にいた自分」の記憶</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>人は単に「良かった体験」を記憶するだけでなく、「あの場所にいた自分」を記憶する。「SHOZO CAFEの静けさの中にいた自分」「那須の朝の空気の中にいた自分」——この場所帰属感（Place Attachment）が、再訪の動機になる。Yi-Fu Tuanが提唱したPlace Attachmentの概念は、伝播帰属の心理的メカニズムを説明する。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>SNS投稿は「記憶の外部化」</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>顧客がSNSに投稿するのは、単に「映えを求める行動」ではない。「あの体験を記録したい」「誰かに伝えたい」という感情の表現だ。世界観が強い場所ほど、「うまく言葉にできないけど、何か伝えたい」という投稿が生まれる。これが「空気が写っている」コンテンツだ。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>ディズニーのFan Experience拡張</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>ディズニーはFan Experienceの設計においても卓越している。DisneyBounding（ディズニーキャラクターをモチーフにした普段着）、Disney Pin Trading（ピン交換文化）、公式ファンクラブ——これらはすべて、パーク体験を「日常に持ち帰る」仕組みだ。「魔法を持ち帰る」という設計思想が、伝播帰属を長期間持続させる。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>伝播帰属から世界観接触へのサイクル</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>伝播帰属（第七層）が生み出すSNS投稿・口コミは、次の新規顧客の世界観接触（第二層）になる。この循環が回り始めると、世界観は自己増殖する。SHOZO CAFEが「SHOZO経済圏」を生み出したのも、強い伝播帰属が地域全体の世界観接触を強化し続けたからだ。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>常連と新規のバランス</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>伝播帰属の設計で注意が必要なのは、「常連」と「新規」のバランスだ。常連は場所帰属感（Place Attachment）が強く、再訪・口コミの中心になる。しかし常連が「閉じたコミュニティ」になると、新規顧客が入りにくくなる。「常連が新規を歓迎する空気」を作ることも、伝播帰属の設計の一部だ。</p>

        <div style={{ padding: "16px 20px", background: "var(--color-bg-alt)", border: "1px solid var(--color-border)", marginTop: "40px", marginBottom: "40px" }}>
          <div style={{ fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "8px" }}>Disney Connection</div>
          <div style={{ fontSize: "13px", color: "var(--color-text-sub)", fontStyle: "italic", lineHeight: "1.7" }}>Fan Experience拡張 / DisneyBounding / Disney Pin Trading / 「魔法を持ち帰る」設計思想</div>
        </div>

        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "12px", marginTop: "48px" }}>FAQ</div>
          <div style={{ border: "1px solid var(--color-border)", background: "var(--color-surface)", padding: "18px 22px", marginBottom: "2px" }}>
            <div style={{ fontSize: "14px", fontWeight: "500", marginBottom: "8px", display: "flex", gap: "10px" }}>
              <span style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)", fontSize: "12px", flexShrink: 0 }}>Q.</span>
              再訪率を高めるにはどうすればいいですか？
            </div>
            <div style={{ fontSize: "13.5px", lineHeight: "1.85", color: "var(--color-text-sub)", display: "flex", gap: "10px" }}>
              <span style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "12px", flexShrink: 0 }}>A.</span>
              「また来たい理由」を意図的に残すことが重要です。季節限定メニュー・限定イベント・常連への特別な関係——これらは「また行く理由」になります。ただし最も強いのは「あの場所にいた自分が好き」という場所帰属感で、これは第一〜六層の設計から生まれます。
            </div>
          </div>
          <div style={{ border: "1px solid var(--color-border)", background: "var(--color-surface)", padding: "18px 22px", marginBottom: "2px" }}>
            <div style={{ fontSize: "14px", fontWeight: "500", marginBottom: "8px", display: "flex", gap: "10px" }}>
              <span style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)", fontSize: "12px", flexShrink: 0 }}>Q.</span>
              SNS投稿を促すにはどうすればいいですか？
            </div>
            <div style={{ fontSize: "13.5px", lineHeight: "1.85", color: "var(--color-text-sub)", display: "flex", gap: "10px" }}>
              <span style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "12px", flexShrink: 0 }}>A.</span>
              「映えスポット」を作るより、「語りたくなる体験」を作ることが優先です。世界観が強い場所では、顧客が「うまく言葉にできないけど、伝えたい」という衝動を持ちます。それが自然なSNS投稿につながります。「撮影スポット」という誘導より、「語りたくなる空気」の設計が長期的に効果的です。
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

        <RelatedKnowledge
          items={[
            { href: "/frameworks/resonance-economy", type: "framework" as const, title: "共鳴型経済圏", description: "伝播帰属が作る地域経済" },
            { href: "/labs/spi-model", type: "lab" as const, title: "Save→Plan→Impulse", description: "伝播と第二層の接続" },
            { href: "/fieldwork/shozo", type: "fieldwork" as const, title: "SHOZO CAFE", description: "SHOZO経済圏の形成" },
          ]}
        />
      </div>
    </>
  )
}
