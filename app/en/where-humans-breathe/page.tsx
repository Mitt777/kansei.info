import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { book, chapterRoutes, chapters, conceptRoutes, concepts, coreLinks, kindleUrl } from './content'

export const metadata: Metadata = {
  title: 'Where Humans Breathe — English Book Section',
  description:
    'The English book section for Where Humans Breathe: Atmosphere, Experience, and Return Motivation in the AI Era by Mitsuhiko Fujii with AI.',
}

export default function WhereHumansBreathePage() {
  return (
    <>
      <section className="whb-hero">
        <div className="whb-hero-text">
          <div className="whb-kicker">English Book Section</div>
          <h1>{book.title}</h1>
          <p className="whb-subtitle">{book.subtitle}</p>
          <p className="whb-author">{book.author}</p>
          <p className="whb-lead">
            {book.description} This section is designed as a quiet conceptual archive rather than a marketing landing page.
          </p>
          <div className="whb-actions">
            <Link href="/en/introduction" className="btn-primary">Read Introduction</Link>
            {kindleUrl ? (
              <a href={kindleUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">Kindle Page</a>
            ) : (
              <span className="btn-secondary whb-disabled-button">Kindle link coming soon</span>
            )}
          </div>
        </div>
        <div className="whb-cover" aria-label="Atmospheric cover image for Where Humans Breathe">
          <Image src={book.image} alt="" fill sizes="(max-width: 768px) 100vw, 420px" className="quiet-image" priority />
          <div className="whb-cover-title">
            <span>Where Humans Breathe</span>
            <small>Atmosphere · Experience · Return Motivation</small>
          </div>
        </div>
      </section>

      <section className="whb-section whb-narrow">
        <div className="whb-section-label">Book Introduction</div>
        <h2>How humans remain emotionally alive in the AI era.</h2>
        <div className="whb-essay">
          <p>
            When information becomes abundant, human value may appear somewhere quieter: atmosphere, continuity, memory, and the reasons people choose to return.
          </p>
          <p>
            <em>Where Humans Breathe</em> gathers ideas from rural Japanese fieldwork, SNS observation, Atmospheric UX, Sekaikan, and Human-side Alignment into one English-language entry point.
          </p>
        </div>
      </section>

      <section className="whb-section">
        <div className="whb-section-label">Key Concepts</div>
        <div className="whb-heading-row">
          <h2>Concepts for atmosphere and return.</h2>
          <Link href="/en/glossary-kansei-concepts">View concept glossary</Link>
        </div>
        <div className="whb-card-grid">
          {conceptRoutes.map((concept) => (
            <Link key={concept.href} href={concept.href} className="whb-card">
              <div className="whb-card-label">{concept.label}</div>
              <h3>{concept.title}</h3>
              <p>{concept.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="whb-section">
        <div className="whb-section-label">Chapter Overview</div>
        <div className="whb-chapter-list">
          {chapterRoutes.map((chapter) => (
            <Link key={chapter.href} href={chapter.href} className="whb-chapter-row">
              <span>{chapter.label}</span>
              <strong>{chapter.title}</strong>
              <small>{chapter.description}</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="whb-band">
        <div>
          <div className="whb-section-label">Fieldwork from Rural Japan</div>
          <h2>Walking, observing, filming, returning.</h2>
        </div>
        <p>
          The theory is grounded in cafes, tourism spaces, rural towns, SNS behavior, and the emotional reactions that appear when people encounter atmosphere through media and place.
        </p>
      </section>

      <section className="whb-section">
        <div className="whb-section-label">Why Atmosphere Matters</div>
        <div className="whb-quiet-grid">
          {[
            ['Information is abundant', 'AI makes text, images, and interfaces increasingly available and interchangeable.'],
            ['Experience needs continuity', 'People remember places that hold emotional tone across time and interaction.'],
            ['Return begins before logic', 'The decision to come back often begins in the body, before language fully explains it.'],
          ].map(([title, body]) => (
            <div key={title} className="whb-note">
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="whb-cta">
        <div>
          <div className="whb-section-label">Kindle Link</div>
          <h2>Where Humans Breathe</h2>
          <p>{book.subtitle}</p>
        </div>
        {kindleUrl ? (
          <a href={kindleUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Open Kindle Page</a>
        ) : (
          <span className="btn-primary whb-disabled-button">Kindle link coming soon</span>
        )}
      </section>

      <section className="rk-section whb-related">
        <div className="rk-heading">Continue Exploring</div>
        <div className="rk-grid">
          {[...coreLinks, ...chapters.slice(1, 4).map((chapter) => ({ href: `/en/${chapter.slug}`, label: chapter.label, description: chapter.title }))].map((item) => (
            <Link key={item.href} href={item.href} className="rk-item" style={{ '--item-color': 'var(--color-en)' } as React.CSSProperties}>
              <div className="rk-dot" />
              <div className="rk-content">
                <div className="rk-type">English Section</div>
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
