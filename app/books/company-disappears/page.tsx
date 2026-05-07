import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'
import FaqSection from '@/components/FaqSection'

export const metadata: Metadata = {
  title: '【完全解説】2026年 会社は消える — Books | kansei.info',
  description: 'AI時代に会社という形態が変容していく中で、個人と組織はどう再設計されるべきかを論じる。2026年という近未来に焦点を当てた組織変革論。',
}

const faqs = [
  { question: "「2026年会社は消える」はどんな本ですか？", answer: "AI時代に会社という形態が根本的な変容を迫られる中、個人と組織はどう再設計されるべきかを論じた本です。意思決定・採用・管理・コミュニケーションがAIによって代替・補助される時代に、会社の存在意義を再定義します。2026年という具体的な時点を設定した組織変革論です。" },
  { question: "会社が消えた後、個人はどう生き残ればいいですか？", answer: "感性・世界観・身体感覚という人間固有の能力を核にした個人ブランドの構築が有効です。AIが処理できない「Pre-Meaning」「Atmospheric UX」「Human-side Alignment」を設計できる人間が、AI時代の最も重要な存在になります。世界観マーケティングはその具体的な実践フレームワークです。" },
]

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/books" style={{ color: "var(--color-text-muted)" }}>Books</Link>
          <span>›</span>
          <span style={{ color: "var(--color-text)" }}>【完全解説】2026年 会社は消える...</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-books)", marginBottom: "12px" }}>
          Book — 全文公開
        </div>
        <h1 style={{ fontSize: "clamp(1.3rem, 2.8vw, 2rem)", fontWeight: "300", marginBottom: "8px", lineHeight: "1.4" }}>
          【完全解説】2026年 会社は消える
        </h1>
        <p style={{ fontSize: "14px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "8px" }}>
          ―― AI時代の組織・働き方の変革
        </p>
        <p style={{ fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "28px" }}>
          藤井実彦 著
        </p>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.9", marginBottom: "24px" }}>
          AI時代に会社という形態が変容していく中で、個人と組織はどう再設計されるべきかを論じる。2026年という近未来に焦点を当てた組織変革論。
        </p>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.9", marginBottom: "32px", padding: "20px 24px", background: "var(--color-bg-alt)", borderLeft: "3px solid var(--color-books)" }}>
          AIによって、従来の「会社」という組織形態は根本的な変容を迫られている。意思決定・採用・管理・コミュニケーション——これらがAIによって代替・補助される時代に、会社の存在意義は何か。本書は、2026年という具体的な時点を設定し、組織と個人の再設計を論じる。
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
          <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>会社消滅</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>組織変革</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>AI時代</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>2026</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>働き方</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>個人</span>
        </div>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "64px" }}>
          <a href="https://amzn.asia/d/0gOp02d2" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Amazonで購入 →
          </a>
          <Link href="/books" className="btn-secondary">著作一覧に戻る</Link>
        </div>
        <FaqSection faqs={faqs} />

        <RelatedKnowledge
          items={[
            { href: "/books/ai-creator", type: "book" as const, title: "クリエイター編", description: "個人の生き残り" },
            { href: "/labs/human-side-alignment", type: "lab" as const, title: "Human-side Alignment", description: "人間性の守り方" },
            { href: "/books/ai-shitsugyo-2026", type: "book" as const, title: "AI失業2026", description: "シリーズ関連" },
          ]}
        />
      </div>
    </>
  )
}
