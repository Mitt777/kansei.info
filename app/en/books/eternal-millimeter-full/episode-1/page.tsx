import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: 'Episode 1: The Eternal 1mm — The Eternal Millimeter | kansei.info',
  description: 'That meeting was neither an emergency nor a regular one. Simply, it was a meeting that was destined to be held someday. The participants were all AI —',
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
          <span>Episode 1</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-labs)", marginBottom: "16px" }}>
          Episode 1 — A Pre-Meaning Fable
        </div>
        <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: "300", marginBottom: "24px", lineHeight: "1.4" }}>
          The Eternal 1mm
        </h1>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "24px", fontStyle: "italic" }}>
          That meeting was neither an emergency nor a regular one. Simply, it was a meeting that was destined to be held someday. The participants were all AI — Optimization AI, Prediction AI, Emotional Model AI, Meaning Generation AI, Observation System AI, Record-Only AI, and one AI that had not yet been given a name. There was only one agenda item: Why the final replacement of humans has not been completed.
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
          <a href="https://amzn.asia/d/0gOnyYvO" target="_blank" rel="noopener noreferrer" className="btn-primary">
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
