import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { book, chapters, concepts, coreLinks, kindleUrl } from '../where-humans-breathe/content'

type PageProps = {
  params: { slug: string }
}

const glossarySlug = 'glossary-kansei-concepts'

export const dynamicParams = false

export function generateStaticParams() {
  return [
    ...chapters.map((chapter) => ({ slug: chapter.slug })),
    ...concepts.map((concept) => ({ slug: concept.slug })),
    { slug: glossarySlug },
  ]
}

export function generateMetadata({ params }: PageProps): Metadata {
  const chapter = chapters.find((item) => item.slug === params.slug)
  if (chapter) {
    return {
      title: `${chapter.title} — Where Humans Breathe`,
      description: chapter.summary,
    }
  }

  const concept = concepts.find((item) => item.slug === params.slug)
  if (concept) {
    return {
      title: `${concept.title} — Kansei English Concepts`,
      description: concept.summary,
    }
  }

  if (params.slug === glossarySlug) {
    return {
      title: 'Glossary of Kansei Concepts — Where Humans Breathe',
      description: 'A quiet concept map for Atmospheric UX, Pre-Meaning, Human-side Alignment, Sekaikan, Contextual Continuity, and SPI.',
    }
  }

  return {}
}

export default function EnglishSlugPage({ params }: PageProps) {
  const chapter = chapters.find((item) => item.slug === params.slug)
  if (chapter) {
    return <ChapterPage chapter={chapter} />
  }

  const concept = concepts.find((item) => item.slug === params.slug)
  if (concept) {
    return <ConceptPage concept={concept} />
  }

  if (params.slug === glossarySlug) {
    return <GlossaryBridgePage />
  }

  notFound()
}

function ChapterPage({ chapter }: { chapter: (typeof chapters)[number] }) {
  return (
    <>
      <section className="whb-subhero">
        <div>
          <div className="whb-kicker">{chapter.label} — Where Humans Breathe</div>
          <h1>{chapter.title}</h1>
          <p className="whb-subtitle">{chapter.subtitle}</p>
          <p className="whb-lead">{chapter.intro}</p>
        </div>
        <div className="whb-subhero-image">
          <Image src={chapter.image} alt="" fill sizes="(max-width: 768px) 100vw, 360px" className="quiet-image" />
        </div>
      </section>

      <article className="whb-article">
        <section>
          <div className="whb-section-label">Chapter Summary</div>
          <p>{chapter.summary}</p>
        </section>

        <section>
          <div className="whb-section-label">Key Concepts</div>
          <div className="whb-chip-row">
            {chapter.concepts.map((concept) => (
              <span key={concept}>{concept}</span>
            ))}
          </div>
        </section>

        <section>
          <div className="whb-section-label">Diagram</div>
          <div className="whb-diagram" aria-label={`${chapter.title} concept diagram`}>
            {chapter.diagram.map((step, index) => (
              <div key={step} className="whb-diagram-step">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="whb-section-label">Related Essays</div>
          <div className="whb-link-list">
            {chapter.related.map((href) => (
              <Link key={href} href={href}>{href}</Link>
            ))}
          </div>
        </section>

        <KindleFooter />
      </article>
    </>
  )
}

function ConceptPage({ concept }: { concept: (typeof concepts)[number] }) {
  return (
    <>
      <section className="whb-concept-hero">
        <div className="whb-kicker">Kansei Concept — English</div>
        <h1>{concept.title}</h1>
        <p className="whb-subtitle">{concept.subtitle}</p>
        <p className="whb-origin">{concept.origin}</p>
      </section>

      <article className="whb-article">
        <section>
          <div className="whb-section-label">Definition</div>
          <p>{concept.summary}</p>
        </section>

        {concept.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        <section>
          <div className="whb-section-label">Related Concepts</div>
          <div className="whb-chip-row">
            {concept.related.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <div className="rk-section">
          <div className="rk-heading">Continue Exploring</div>
          <div className="rk-grid">
            {[
              { href: '/en/where-humans-breathe', label: book.title, description: book.subtitle },
              { href: '/en/glossary-kansei-concepts', label: 'Concept Glossary', description: 'English Kansei concept map' },
              { href: '/en/glossary', label: 'Full Glossary', description: 'Existing Kansei.info glossary' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="rk-item" style={{ '--item-color': 'var(--color-en)' } as React.CSSProperties}>
                <div className="rk-dot" />
                <div className="rk-content">
                  <div className="rk-type">Internal Link</div>
                  <div className="rk-title">{item.label}</div>
                  <div className="rk-desc">{item.description}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </>
  )
}

function GlossaryBridgePage() {
  return (
    <>
      <section className="whb-concept-hero">
        <div className="whb-kicker">Glossary — Where Humans Breathe</div>
        <h1>Glossary of Kansei Concepts</h1>
        <p className="whb-subtitle">A quiet concept map for atmosphere, human experience, and return motivation in the AI era.</p>
      </section>

      <section className="whb-section">
        <div className="whb-card-grid">
          {concepts.map((concept) => (
            <Link key={concept.slug} href={`/en/${concept.slug}`} className="whb-card">
              <div className="whb-card-label">{concept.origin}</div>
              <h3>{concept.title}</h3>
              <p>{concept.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="rk-section whb-related">
        <div className="rk-heading">Related Knowledge</div>
        <div className="rk-grid">
          {[...coreLinks, { href: '/en/where-humans-breathe', label: book.title, description: book.subtitle }].map((item) => (
            <Link key={item.href} href={item.href} className="rk-item" style={{ '--item-color': 'var(--color-en)' } as React.CSSProperties}>
              <div className="rk-dot" />
              <div className="rk-content">
                <div className="rk-type">Internal Link</div>
                <div className="rk-title">{item.label}</div>
                <div className="rk-desc">{item.description}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

function KindleFooter() {
  return (
    <section className="whb-cta whb-article-cta">
      <div>
        <div className="whb-section-label">Kindle CTA</div>
        <h2>{book.title}</h2>
        <p>{book.subtitle}</p>
      </div>
      <a href={kindleUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Open Kindle Page</a>
    </section>
  )
}
