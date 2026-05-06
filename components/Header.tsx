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
      <style>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(250, 250, 248, 0.95);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--color-border);
        }
        .header-inner {
          max-width: var(--max-width);
          margin: 0 auto;
          padding: 0 24px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .header-logo {
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 0.08em;
          color: var(--color-text);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .header-logo-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-gold);
        }
        .header-nav {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .nav-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 6px 10px;
          border-radius: var(--radius-sm);
          transition: background var(--transition);
          font-size: 11px;
          color: var(--color-text-sub);
          letter-spacing: 0.05em;
        }
        .nav-link:hover {
          background: var(--color-bg-alt);
          color: var(--color-text);
        }
        .nav-link.active {
          color: var(--color-gold);
          background: var(--color-gold-pale);
        }
        .nav-link-en {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          padding: 6px 12px;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
        }
        .nav-link-ja {
          font-size: 9px;
          color: var(--color-text-muted);
          margin-top: 1px;
        }
        .menu-btn {
          display: none;
          flex-direction: column;
          gap: 5px;
          padding: 8px;
          cursor: pointer;
        }
        .menu-btn span {
          display: block;
          width: 22px;
          height: 1.5px;
          background: var(--color-text);
          transition: var(--transition);
        }
        .mobile-menu {
          display: none;
          position: fixed;
          inset: 0;
          background: var(--color-surface);
          z-index: 99;
          padding: 80px 32px 40px;
          flex-direction: column;
          gap: 8px;
        }
        .mobile-menu.open { display: flex; }
        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 0;
          border-bottom: 1px solid var(--color-border-light);
          font-size: 18px;
          color: var(--color-text);
          font-weight: 300;
        }
        .mobile-nav-link.active { color: var(--color-gold); }
        .mobile-close {
          position: fixed;
          top: 16px;
          right: 24px;
          font-size: 24px;
          color: var(--color-text-sub);
          cursor: pointer;
          padding: 8px;
        }
        @media (max-width: 768px) {
          .header-nav { display: none; }
          .menu-btn { display: flex; }
        }
      `}</style>

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
