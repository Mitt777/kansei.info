import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: '第六層 感動体験（Peak Experience）— 7層モデル | kansei.info',
  description: '顧客が最も記憶する瞬間を設計する層。同じコーヒーでも、空間によって記憶が変わる。ディズニーの「Plussing（常に上乗せする）」文化がここに当たる。体験の質より「世界観との一致」が記憶を左右する。',
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "第六層 感動体験 — Peak Experience",
      "description": "顧客が最も記憶する瞬間を設計する層。同じコーヒーでも、空間によって記憶が変わる。ディズニーの「Plussing（常に上乗せする）」文化がここに当たる。体験の質より「世界観との一致」が記憶を左右する。",
      "url": "https://kansei.info/frameworks/7layers/peak-experience",
      "author": { "@type": "Person", "name": "藤井実彦", "url": "https://kansei.info/about" },
      "isPartOf": { "@type": "Article", "name": "世界観設記7層モデル", "url": "https://kansei.info/frameworks/7layers" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [{"@type": "Question", "name": "感動体験はどう「設計」できますか？", "acceptedAnswer": {"@type": "Answer", "text": "まず「うちの場所の核心的な体験は何か」を言語化することから始めます。コーヒーなのか、景色なのか、会話なのか、静けさなのか。その核心が前段の世界観と一致しているか確認します。一致していない場合は、どちらかを調整する必要があります。"}}, {"@type": "Question", "name": "体験の品質と世界観の一致、どちらが重要ですか？", "acceptedAnswer": {"@type": "Answer", "text": "両方必要ですが、「世界観との一致」の方が記憶への影響が大きいです。平均的な品質でも世界観と完全に一致した体験は強く記憶されます。逆に高品質でも世界観と乖離した体験は「良かったけど、また行くかな」になりやすいです。"}}]
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
          <span>感動体験</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "#EC4899" }}>
            第六層 — Layer 6 of 7
          </div>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: "300", marginBottom: "8px" }}>
          <span style={{ color: "#EC4899", marginRight: "8px", fontFamily: "var(--font-mono)" }}>第六層</span>
          感動体験
        </h1>
        <div style={{ fontSize: "14px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "8px" }}>Peak Experience</div>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "16px" }}>提供する体験の核心が前段の世界観と一致しているか</p>

        <div style={{ padding: "14px 18px", background: "var(--color-bg-alt)", border: "1px solid var(--color-border)", borderLeft: "4px solid #EC4899", marginBottom: "48px" }}>
          <div style={{ fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "6px" }}>Theory Foundation</div>
          <div style={{ fontSize: "12px", color: "var(--color-text-sub)", fontStyle: "italic" }}>Experience Economy（Pine & Gilmore, 1998）/ Peak-End Rule（Kahneman）/ Plussing（Disney）/ Maslow自己実現</div>
        </div>

        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>感動体験とは何か</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>感動体験（Peak Experience）とは、顧客が最も強く記憶する瞬間を設計する層だ。飲食・景色・ライブ・会話・発見——それぞれの場所が提供する「核心的な体験」がここに当たる。重要なのは、体験そのものの「品質」だけでなく、前段の世界観（第一〜五層）との「一致」が記憶を大きく左右するという点だ。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>同じコーヒーが、空間によって違う記憶になる</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>那須での観察から、同じ品質のコーヒーでも、空間によって全く異なる記憶になることがわかった。SHOZO CAFEのコーヒーは「あの静けさの中で飲んだコーヒー」として記憶される。スターバックスのコーヒーは「便利な場所で飲んだコーヒー」として記憶される。Peak-End Ruleが示すように、体験の記憶はピーク時の「感情的文脈」に大きく左右される。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>Pine & Gilmoreの経験経済論</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>B. Joseph Pine IIとJames H. Gilmoreが1998年にハーバード・ビジネス・レビューで発表した「経験経済論（Experience Economy）」は、商品・サービスの次の段階として「体験（Experience）」の価値を論じた。顧客は商品を買うのではなく、体験を買う——この思想は、感動体験設計の学術的基盤となっている。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>Plussing——ディズニーの「常に上乗せする」文化</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>ディズニーには「Plussing（プラッシング）」という文化がある。現在の体験に常に「何か一つ上乗せする」という思想だ。ウォルト・ディズニー自身が、パレードを見ながら「もっとここに何か追加できないか」と常に考えていたというエピソードが残っている。完成した瞬間から、次の改善が始まる。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>那須どうぶつ王国の「空を借景したバードショー」</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>那須どうぶつ王国のバードショーは、那須の空そのものをショーの舞台装置にしている。鳥が青空を背景に飛ぶ瞬間——これはPeak Experienceの設計として際立っている。人工的な装置ではなく、那須という場所の「自然の力」をPeak Experienceに借景している。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>体験と世界観の一致が記憶を決める</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>感動体験（第六層）が強く機能するのは、前段の世界観（第一〜五層）とが一致している時だ。「静けさ」を世界観とするカフェで、「静かな朝のコーヒー」を飲む——この一致が、単なる「おいしいコーヒー」を「あの場所の記憶」に変える。体験の質と世界観の一致——両方が揃った時に、「また来たい」が生まれる。</p>

        <div style={{ padding: "16px 20px", background: "var(--color-bg-alt)", border: "1px solid var(--color-border)", marginTop: "40px", marginBottom: "40px" }}>
          <div style={{ fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "8px" }}>Disney Connection</div>
          <div style={{ fontSize: "13px", color: "var(--color-text-sub)", fontStyle: "italic", lineHeight: "1.7" }}>Plussing文化 / 常に上乗せする / ウォルト・ディズニー自身のパレード観察</div>
        </div>

        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "12px", marginTop: "48px" }}>FAQ</div>
          <div style={{ border: "1px solid var(--color-border)", background: "var(--color-surface)", padding: "18px 22px", marginBottom: "2px" }}>
            <div style={{ fontSize: "14px", fontWeight: "500", marginBottom: "8px", display: "flex", gap: "10px" }}>
              <span style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)", fontSize: "12px", flexShrink: 0 }}>Q.</span>
              感動体験はどう「設計」できますか？
            </div>
            <div style={{ fontSize: "13.5px", lineHeight: "1.85", color: "var(--color-text-sub)", display: "flex", gap: "10px" }}>
              <span style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "12px", flexShrink: 0 }}>A.</span>
              まず「うちの場所の核心的な体験は何か」を言語化することから始めます。コーヒーなのか、景色なのか、会話なのか、静けさなのか。その核心が前段の世界観と一致しているか確認します。一致していない場合は、どちらかを調整する必要があります。
            </div>
          </div>
          <div style={{ border: "1px solid var(--color-border)", background: "var(--color-surface)", padding: "18px 22px", marginBottom: "2px" }}>
            <div style={{ fontSize: "14px", fontWeight: "500", marginBottom: "8px", display: "flex", gap: "10px" }}>
              <span style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)", fontSize: "12px", flexShrink: 0 }}>Q.</span>
              体験の品質と世界観の一致、どちらが重要ですか？
            </div>
            <div style={{ fontSize: "13.5px", lineHeight: "1.85", color: "var(--color-text-sub)", display: "flex", gap: "10px" }}>
              <span style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "12px", flexShrink: 0 }}>A.</span>
              両方必要ですが、「世界観との一致」の方が記憶への影響が大きいです。平均的な品質でも世界観と完全に一致した体験は強く記憶されます。逆に高品質でも世界観と乖離した体験は「良かったけど、また行くかな」になりやすいです。
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
            { href: "/fieldwork/nasu-animal", type: "fieldwork" as const, title: "那須どうぶつ王国", description: "空を借景したPeak Experience" },
            { href: "/frameworks/worldview-value", type: "framework" as const, title: "世界観価値の方程式", description: "体験と世界観の関係" },
            { href: "/labs/pre-meaning", type: "lab" as const, title: "Pre-Meaning", description: "体験が生む身体感覚" },
          ]}
        />
      </div>
    </>
  )
}
