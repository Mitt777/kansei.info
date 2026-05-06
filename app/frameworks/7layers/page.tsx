import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: '世界観設記7層モデル — Frameworks | kansei.info',
  description: '原初物語→世界観接触→境界侵入→没入環境→期待増幅→感動体験→伝播帰属。7層の因果構造。',
}

const layers = [
  { num: '\u2460', name: '\u539f\u521d\u7269\u8a9e', en: 'Origin Story', color: '#C9A84C', desc: '\u300c\u306a\u305c\u5b58\u5728\u3059\u308b\u306e\u304b\u300d\u2014\u2014\u7406\u5ff5\u30fb\u54f2\u5b66\u30fb\u8d77\u6e90\u3002\u3053\u3053\u304c\u5f31\u3044\u5834\u6240\u306f\u9577\u671f\u7684\u306b\u4e16\u754c\u89b3\u304c\u4e0d\u5b89\u5b9a\u306b\u306a\u308b\u3002', disney: 'It All Begins with a Story', theory: 'Brand Myth / \u6954\u6728\u5065\u300c\u56e0\u679c\u8ad6\u7406\u300d' },
  { num: '\u2461', name: '\u4e16\u754c\u89b3\u63a5\u89e6', en: 'World Contact', color: '#8B5CF6', desc: 'SNS\u30fb\u52d5\u753a\u30fb\u53e3\u30b3\u30df\u2014\u2014\u6700\u521d\u306e\u63a5\u89e6\u3068\u671f\u5f85\u5f62\u6210\u3002Instagram\u3067\u300c\u4fdd\u5b58\u300d\u3055\u308c\u305f\u6642\u70b9\u3067\u3001\u9867\u5ba2\u306e\u4f53\u9a13\u306f\u3059\u3067\u306b\u59cb\u307e\u3063\u3066\u3044\u308b\u3002', disney: '\u30d1\u30fc\u30af\u524d\u306e\u671f\u5f85\u5f62\u6210\u8a2d\u8a08', theory: 'Customer Journey / Anticipation Design' },
  { num: '\u2462', name: '\u5883\u754c\u4fb5\u5165', en: 'Threshold Crossing', color: '#3B82F6', desc: '\u99d0\u8eca\u5834\u30fb\u5165\u53e3\u30fb\u770b\u677f\u2014\u2014\u65e5\u5e38\u304b\u3089\u4e16\u754c\u89b3\u3078\u306e\u79fb\u884c\u3002Weenie\u7406\u8ad6\u3002\u826f\u3044\u5e97\u8217\u307b\u3069\u3001\u5c11\u3057\u305a\u3064\u7a7a\u6c17\u304c\u5909\u308f\u3063\u3066\u3044\u304f\u3002', disney: 'Weenie\u7406\u8ad6 / \u30b7\u30f3\u30c7\u30ec\u30e9\u57ce', theory: 'Transition Design / Environmental Psychology' },
  { num: '\u2463', name: '\u6ca1\u5165\u74b0\u5883', en: 'Immersive Environment', color: '#10B981', desc: '\u97f3\u30fb\u5306\u3044\u30fb\u5149\u30fb\u63a5\u5ba2\u30fb\u5c0e\u7dda\u2014\u2014\u7a7a\u9593\u5168\u4f53\u304c\u6a5f\u80fd\u3059\u308b\u3002\u4e16\u754c\u89b3\u3068\u306f\u300c\u30ce\u30a4\u30ba\u3092\u6e1b\u3089\u3059\u6280\u8853\u300d\u3067\u3082\u3042\u308b\u3002', disney: 'Art of the Show / Mickey\u2019s 10\u6212', theory: 'Atmosphere Theory / Atmospheric UX' },
  { num: '\u2464', name: '\u671f\u5f85\u5897\u5e45', en: 'Anticipation', color: '#F59E0B', desc: '\u5f85\u3061\u6642\u9593\u30fb\u884c\u5217\u30fb\u524d\u8aac\u2014\u2014\u300c\u4e88\u611f\u300d\u306e\u8a2d\u8a08\u3002\u30c7\u30a3\u30ba\u30cb\u30fc\u306e\u30d7\u30ec\u30fb\u30b7\u30e7\u30fc\u3002\u300c\u3082\u3046\u3059\u3050\u59cb\u307e\u308b\u300d\u3068\u3044\u3046\u4e88\u611f\u304c\u611f\u60c5\u3092\u5897\u5e45\u3055\u305b\u308b\u3002', disney: '\u30d7\u30ec\u30fb\u30b7\u30e7\u30fc / \u300c\u4f38\u3073\u308b\u90e8\u5c4b\u300d', theory: 'Flow Theory / Anticipation Design' },
  { num: '\u2465', name: '\u611f\u52d5\u4f53\u9a13', en: 'Peak Experience', color: '#EC4899', desc: '\u98f2\u98df\u30fb\u666f\u8272\u30fb\u30e9\u30a4\u30d6\u30fb\u4f1a\u8a71\u2014\u2014\u30d4\u30fc\u30af\u4f53\u9a13\u306e\u8cea\u3002\u524d\u6bb5\u306e\u4e16\u754c\u89b3\u304c\u3042\u308b\u304b\u3089\u3001\u611f\u52d5\u304c\u6df1\u304f\u306a\u308b\u3002', disney: 'Plussing\u6587\u5316 / \u5e38\u306b\u4e0a\u4e57\u305b\u3059\u308b', theory: 'Experience Economy / Peak-End Rule' },
  { num: '\u2466', name: '\u4f1d\u64ad\u5e30\u5c5e', en: 'Propagation', color: '#6366F1', desc: 'SNS\u30fb\u518d\u8a2a\u30fb\u30d5\u30a1\u30f3\u5316\u2014\u2014\u300c\u3042\u306e\u5834\u6240\u306b\u3044\u305f\u81ea\u5206\u300d\u306e\u8a18\u61b6\u3002\u300c\u3042\u306e\u5834\u6240\u306b\u3044\u305f\u81ea\u5206\u300d\u3092\u8a18\u61b6\u3057\u3066\u3044\u308b\u304b\u3089\u3001\u307e\u305f\u623b\u308a\u305f\u304f\u306a\u308b\u3002', disney: 'Fan Experience\u62e1\u5f35 / \u300c\u9b54\u6cd5\u3092\u6301\u3061\u5e30\u308b\u300d', theory: 'Social Identity Theory / Place Attachment' },
]

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/frameworks" style={{ color: "var(--color-text-muted)" }}>Frameworks</Link>
          <span>{"\u203a"}</span>
          <span>{"7\u5c64\u30e2\u30c7\u30eb"}</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-frameworks)", marginBottom: "12px" }}>
          Framework {"\u2014"} 7 Layers Model
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: "300", marginBottom: "16px" }}>
          {"\u4e16\u754c\u89b3\u8a2d\u8a187\u5c64\u30e2\u30c7\u30eb"}
        </h1>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "48px" }}>
          {"\u300c\u307e\u305f\u6765\u305f\u304f\u306a\u308b\u5834\u6240\u300d\u306b\u306f\u3001\u4f53\u9a13\u304c\u7dda\u3067\u3064\u306a\u304c\u3063\u3066\u3044\u308b\u3002\u539f\u521d\u7269\u8a9e\u304b\u3089\u4f1d\u64ad\u5e30\u5c5e\u307e\u3067\u2014\u2014\u9867\u5ba2\u4f53\u9a13\u306e\u56e0\u679c\u69cb\u9020\u30027\u5c64\u3067\u6574\u7406\u3057\u305f\u30e2\u30c7\u30eb\u3002"}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginBottom: "48px" }}>
          {layers.map((layer) => (
            <div key={layer.num} style={{ border: "1px solid var(--color-border)", background: "var(--color-surface)", borderLeft: "4px solid " + layer.color }}>
              <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "16px", padding: "18px 22px", alignItems: "center" }}>
                <div style={{ fontSize: "1.4rem", fontWeight: "300", color: layer.color, fontFamily: "var(--font-mono)" }}>{layer.num}</div>
                <div>
                  <div style={{ fontSize: "16px", fontWeight: "500", marginBottom: "2px" }}>{layer.name}</div>
                  <div style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)" }}>{layer.en}</div>
                </div>
              </div>
              <div style={{ padding: "0 22px 18px 72px" }}>
                <p style={{ fontSize: "14px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "10px" }}>{layer.desc}</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                  <div>
                    <div style={{ fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "3px" }}>Disney</div>
                    <div style={{ fontSize: "12px", color: layer.color, fontStyle: "italic" }}>{layer.disney}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "3px" }}>Theory</div>
                    <div style={{ fontSize: "12px", color: "var(--color-text-sub)" }}>{layer.theory}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <RelatedKnowledge
          items={[
            { href: "/frameworks/three-types", type: "framework" as const, title: "\u4e09\u985e\u578b\uff08A / A\u2019 / B\uff09", description: "\u30c7\u30a3\u30ba\u30cb\u30fc\u30fb\u30b5\u30f3\u30ea\u30aa\u30fb\u5730\u57df\u5e97\u306e\u9055\u3044" },
            { href: "/diagnosis", type: "framework" as const, title: "7\u5c64\u8a3a\u65ad\u30c4\u30fc\u30eb", description: "\u81ea\u5206\u306e\u5834\u6240\u3092\u6e2c\u5b9a\u3059\u308b" },
            { href: "/books/sekaikan/chapter-3", type: "book" as const, title: "\u7b2c\u4e09\u7ae0", description: "7\u5c64\u30e2\u30c7\u30eb\u306e\u8a73\u7d30\u89e3\u8aac" },
          ]}
        />
      </div>
    </>
  )
}
