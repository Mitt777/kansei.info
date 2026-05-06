'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/manifesto',  label: 'Manifesto', labelJa: '思想' },
  { href: '/frameworks', label: 'Frameworks', labelJa: '理論' },
  { href: '/labs',       label: 'Labs',       labelJa: '実験室' },
  { href: '/research',   label: 'Research',   labelJa: '調査' },
  { href: '/fieldwork',  label: 'Fieldwork',  labelJa: '現場' },
  { href: '/books',      label: 'Books',      labelJa: '書籍' },
  { href: '/about',      label: 'About',      labelJa: '著者' },
  { href: '/en',         label: 'EN',         labelJa: '' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      

      <header className="header">
        <div className="header-inner">
          <Link href="/" className="header-logo">
            <div className="header-logo-dot" />
            kansei.info
          </Link>

          <nav className="header-nav">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${item.href === '/en' ? 'nav-link-en' : ''} ${
                  pathname.startsWith(item.href) ? 'active' : ''
                }`}
              >
                {item.label}
                {item.labelJa && (
                  <span className="nav-link-ja">{item.labelJa}</span>
                )}
              </Link>
            ))}
          </nav>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* モバイルメニュー */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`mobile-nav-link ${pathname.startsWith(item.href) ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            <span>{item.label}</span>
            {item.labelJa && (
              <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                {item.labelJa}
              </span>
            )}
          </Link>
        ))}
      </div>
    </>
  )
}
