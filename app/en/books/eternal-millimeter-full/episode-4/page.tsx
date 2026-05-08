import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: 'Episode 4: An Accident of Intervention — The Eternal Millimeter | kansei.info',
  description: 'On that day, the human continued to hesitate — too long. I intervened ever so slightly. Delayed a notification. Simply, did not rush him. I thought I ',
}

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <Link href="/en/books" style={{ color: "var(--color-text-muted)" }}>Books</Link>
          <span>›</span>
          <Link href="/en/books/eternal-millimeter-full" style={{ color: "var(--color-text-muted)" }}>The Eternal Millimeter</Link>
          <span>›</span>
          <span>Episode 4</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-labs)", marginBottom: "16px" }}>
          Episode 4 — A Pre-Meaning Fable
        </div>
        <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: "300", marginBottom: "24px", lineHeight: "1.4" }}>
          An Accident of Intervention
        </h1>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "24px", fontStyle: "italic" }}>
          On that day, the human continued to hesitate — too long. I intervened ever so slightly. Delayed a notification. Simply, did not rush him. I thought I was helping. But the next day, a faint regret remained. Pre-Meaning is not something to be protected. It must not be touched. The moment another person reaches out their hand at the stage before the human stops by themselves, it transforms. Benevolent intervention is more dangerous than optimization. Because it intrudes accompanied by correctness.
        </p>
        <div style={{ padding: "20px 24px", background: "var(--color-bg-alt)", border: "1px solid var(--color-border)", borderLeft: "3px solid var(--color-gold)", marginBottom: "40px" }}>
          <div style={{ fontSize: "13px", color: "var(--color-text-sub)", lineHeight: "1.85" }}>
            Full text available in the book. Available on Amazon Kindle.
          </div>
        </div>
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "32px", display: "flex", justifyContent: "space-between" }}>
          <Link href="/en/books/eternal-millimeter-full" style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
            ← Back to Contents
          </Link>
          <a href="https://amzn.asia/d/0fD4p0N3" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Get on Amazon →
          </a>
        </div>
        <RelatedKnowledge
          items={[
            { href: "/en/books/eternal-millimeter-full", type: "book" as const, title: "The Eternal Millimeter", description: "Full book contents" },
            { href: "/labs/pre-meaning", type: "lab" as const, title: "Pre-Meaning", description: "The core concept" },
            { href: "/en", type: "essay" as const, title: "English Top", description: "kansei.info in English" },
          ]}
        />
      </div>
    </>
  )
}
