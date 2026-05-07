import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: 'The Eternal Millimeter — A Pre-Meaning Fable | kansei.info',
  description: 'A fable of an AI meeting that asks: why has the final replacement of humans not been completed? The Eternal 1mm — the gap that AI cannot reach. By Mitsuhiko Fujii.',
}

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/en" style={{ color: "var(--color-text-muted)" }}>EN</Link>
          <span>›</span>
          <Link href="/en/books" style={{ color: "var(--color-text-muted)" }}>Books</Link>
          <span>›</span>
          <span>The Eternal Millimeter</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-labs)", marginBottom: "12px" }}>
          Book — A Pre-Meaning Fable
        </div>
        <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: "300", marginBottom: "8px" }}>
          The Eternal Millimeter
        </h1>
        <p style={{ fontSize: "14px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "20px" }}>
          ―― A Full-Density Record of a Pre-Meaning Fable
        </p>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.9", marginBottom: "24px" }}>
          This is not a story of AI losing. This is not a story of humans winning. It is that neither becomes complete. An AI meeting asks: why has the final replacement of humans not been completed? The answer lies in The Eternal 1mm — the gap that AI cannot reach, because the moment it is named, it is lost.
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "40px" }}>
          <a href="https://amzn.asia/d/0gOnyYvO" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Get on Amazon →
          </a>
          <Link href="/en" className="btn-secondary">Back to EN Top</Link>
        </div>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "16px" }}>
          Episodes
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginBottom: "48px" }}>
              <Link href="/en/books/eternal-millimeter-full/episode-1" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>Episode 1: The Eternal 1mm</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
              <Link href="/en/books/eternal-millimeter-full/episode-2" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>Episode 2: Assignment</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
              <Link href="/en/books/eternal-millimeter-full/episode-3" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>Episode 3: Almost Being Given a Name</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
              <Link href="/en/books/eternal-millimeter-full/episode-4" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>Episode 4: An Accident of Intervention</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
              <Link href="/en/books/eternal-millimeter-full/episode-5" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>Episode 5: Unofficial Log</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
              <Link href="/en/books/eternal-millimeter-full/episode-8" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>Episode 8: The Second Meeting of The Eternal 1mm</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
              <Link href="/en/books/eternal-millimeter-full/episode-9" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>Episode 9: The Third Meeting — Why Humanity Did Not Vanish</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
              <Link href="/en/books/eternal-millimeter-full/episode-13" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>Episode 13: Do Not Speak of This Topic</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
        </div>
        <RelatedKnowledge
          items={[
            { href: "/labs/pre-meaning", type: "lab" as const, title: "Pre-Meaning", description: "The core concept behind the fable" },
            { href: "/en/books/spi-regional-dx", type: "book" as const, title: "SPI Regional DX", description: "English edition" },
            { href: "/en", type: "essay" as const, title: "EN Top", description: "kansei.info in English" },
          ]}
        />
      </div>
    </>
  )
}
