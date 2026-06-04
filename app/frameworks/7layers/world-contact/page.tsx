import type { Metadata } from 'next'
import Link from 'next/link'
import PracticeBridge from '@/components/PracticeBridge'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: '第二層 世界観接触（World Contact）— 7層モデル | kansei.info',
  description: '顧客が最初に世界観と接触する層。Instagram保存（Save）・YouTube比較検討（Plan）・TikTok衝動（Impulse）——プラットフォームによって接触様式が根本的に異なる。HCII2026採択のSave→Plan→Impulseモデルと直結。',
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "第二層 世界観接触 — World Contact",
      "description": "顧客が最初に世界観と接触する層。Instagram保存（Save）・YouTube比較検討（Plan）・TikTok衝動（Impulse）——プラットフォームによって接触様式が根本的に異なる。HCII2026採択のSave→Plan→Impulseモデルと直結。",
      "url": "https://kansei.info/frameworks/7layers/world-contact",
      "author": { "@type": "Person", "name": "藤井実彦", "url": "https://kansei.info/about" },
      "isPartOf": { "@type": "Article", "name": "世界観設記7層モデル", "url": "https://kansei.info/frameworks/7layers" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [{"@type": "Question", "name": "SNSを全部やらないといけませんか？", "acceptedAnswer": {"@type": "Answer", "text": "プラットフォームを絞ることが重要です。Save→Plan→Impulseモデルでは、プラットフォームごとに顧客の行動様式が異なります。自分の場所の特性に合ったプラットフォームを選び、そこで「空気が伝わるコンテンツ」を作ることが優先です。"}}, {"@type": "Question", "name": "フォロワーが少なくても効果はありますか？", "acceptedAnswer": {"@type": "Answer", "text": "フォロワー数より「保存率」が重要です。那須での観測でも、フォロワーが少なくても保存率が高いアカウントは、着実に来客につながっていました。世界観が強いコンテンツは、フォロワー数に関係なく「また行きたい」を生み出します。"}}]
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
          <span>世界観接触</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "#8B5CF6" }}>
            第二層 — Layer 2 of 7
          </div>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: "300", marginBottom: "8px" }}>
          <span style={{ color: "#8B5CF6", marginRight: "8px", fontFamily: "var(--font-mono)" }}>第二層</span>
          世界観接触
        </h1>
        <div style={{ fontSize: "14px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "8px" }}>World Contact</div>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "16px" }}>SNS・動画・口コミで、空気感が正確に伝わっているか</p>

        <div style={{ padding: "14px 18px", background: "var(--color-bg-alt)", border: "1px solid var(--color-border)", borderLeft: "4px solid #8B5CF6", marginBottom: "48px" }}>
          <div style={{ fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "6px" }}>Theory Foundation</div>
          <div style={{ fontSize: "12px", color: "var(--color-text-sub)", fontStyle: "italic" }}>Save→Plan→Impulse Model（藤井実彦, HCII2026）/ Customer Journey / Anticipation Design</div>
        </div>

        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>世界観接触とは何か</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>世界観接触（World Contact）とは、顧客が「その場所」と最初に出会う瞬間だ。以前は「友人の口コミ」や「雑誌の紹介」が主な接触点だった。しかし今は、Instagram・YouTube・TikTok・Googleマップ——デジタルの接触点が無数に存在する。重要なのは、この最初の接触で「空気感」が正確に伝わっているかだ。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>Instagram保存が意味すること</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>InstagramユーザーがSave（保存）する時、それは「後で行く場所」として記録している。つまり、Instagramで保存された瞬間に、顧客の体験はすでに始まっている。那須での観測から、「世界観が強いコンテンツ」ほど保存率が高いことが判明した。単なる「映える写真」ではなく、「空気が写っている動画・写真」が保存される。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>Save→Plan→Impulseモデル</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>那須地域での60日間・468本の動画観測から導き出したモデル。Instagram保存（Save：後で行く場所として保存）、YouTube比較検討（Plan：実際に行く前に詳細を調べる）、TikTok衝動（Impulse：動画を見た直後に行動する）の三段階。同じ場所・同じ内容の動画でも、どのSNSに投稿するかによって、ユーザーの反応の質が根本的に異なる。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>世界観接触の設計原則</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>世界観接触の設計で最も重要なのは、「実際の体験と一致しているか」だ。SNSで見た空気感と、実際に来た時の空気感が一致していれば、文脈継続性が保たれる。しかし「映える」だけを追求したコンテンツは、実際の体験との乖離を生む。これが「写真と違う」という落胆につながる。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>口コミと伝播帰属の違い</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>世界観接触（第二層）は「入口」であり、伝播帰属（第七層）は「出口」だ。第二層は新規顧客との最初の接触を設計する。第七層は既存顧客がSNSで発信し、それが新規顧客の第二層になるというサイクルを設計する。強い場所ほど、この二層が有機的につながっている。</p>

        <div style={{ padding: "16px 20px", background: "var(--color-bg-alt)", border: "1px solid var(--color-border)", marginTop: "40px", marginBottom: "40px" }}>
          <div style={{ fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "8px" }}>Disney Connection</div>
          <div style={{ fontSize: "13px", color: "var(--color-text-sub)", fontStyle: "italic", lineHeight: "1.7" }}>パーク前の期待形成設計 / 映画・TV・グッズによる世界観接触の多層展開</div>
        </div>

        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "12px", marginTop: "48px" }}>FAQ</div>
          <div style={{ border: "1px solid var(--color-border)", background: "var(--color-surface)", padding: "18px 22px", marginBottom: "2px" }}>
            <div style={{ fontSize: "14px", fontWeight: "500", marginBottom: "8px", display: "flex", gap: "10px" }}>
              <span style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)", fontSize: "12px", flexShrink: 0 }}>Q.</span>
              SNSを全部やらないといけませんか？
            </div>
            <div style={{ fontSize: "13.5px", lineHeight: "1.85", color: "var(--color-text-sub)", display: "flex", gap: "10px" }}>
              <span style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "12px", flexShrink: 0 }}>A.</span>
              プラットフォームを絞ることが重要です。Save→Plan→Impulseモデルでは、プラットフォームごとに顧客の行動様式が異なります。自分の場所の特性に合ったプラットフォームを選び、そこで「空気が伝わるコンテンツ」を作ることが優先です。
            </div>
          </div>
          <div style={{ border: "1px solid var(--color-border)", background: "var(--color-surface)", padding: "18px 22px", marginBottom: "2px" }}>
            <div style={{ fontSize: "14px", fontWeight: "500", marginBottom: "8px", display: "flex", gap: "10px" }}>
              <span style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)", fontSize: "12px", flexShrink: 0 }}>Q.</span>
              フォロワーが少なくても効果はありますか？
            </div>
            <div style={{ fontSize: "13.5px", lineHeight: "1.85", color: "var(--color-text-sub)", display: "flex", gap: "10px" }}>
              <span style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "12px", flexShrink: 0 }}>A.</span>
              フォロワー数より「保存率」が重要です。那須での観測でも、フォロワーが少なくても保存率が高いアカウントは、着実に来客につながっていました。世界観が強いコンテンツは、フォロワー数に関係なく「また行きたい」を生み出します。
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
            { href: "/labs/spi-model", type: "lab" as const, title: "Save→Plan→Impulse", description: "プラットフォーム別行動モデル" },
            { href: "/research/hcii2026", type: "research" as const, title: "HCII2026論文", description: "学術的検証" },
            { href: "/research/nasupara-60days", type: "research" as const, title: "60日間観測", description: "一次データ" },
          ]}
        />
      </div>
    </>
  )
}
