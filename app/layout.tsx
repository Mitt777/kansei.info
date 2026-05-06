import type { Metadata } from 'next'
import '@/styles/globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: {
    default: 'kansei.info — 世界観マーケティングと知識の設計',
    template: '%s | kansei.info',
  },
  description:
    '世界観マーケティング・Atmospheric UX・Save→Plan→Impulse・Pre-Meaning・HCI研究・フィールドワーク・書籍・論文を統合した知識空間。藤井実彦による「AI時代の知識OS」。',
  keywords: [
    '世界観マーケティング', '顧客体験', 'Atmospheric UX',
    'Pre-Meaning', 'Save Plan Impulse', 'HCI', '感性', '地域DX',
    'kansei', 'fieldwork', '那須', 'フィールドワーク',
  ],
  authors: [{ name: '藤井実彦', url: 'https://kansei.info/about' }],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://kansei.info',
    siteName: 'kansei.info',
    title: 'kansei.info — 世界観マーケティングと知識の設計',
    description: 'AI時代の知識OS。世界観マーケティング・HCI研究・フィールドワーク・書籍を統合した知識空間。',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'kansei.info — 世界観マーケティングと知識の設計',
    description: 'AI時代の知識OS。世界観マーケティング・HCI研究・フィールドワーク・書籍を統合した知識空間。',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <footer style={{
          borderTop: '1px solid var(--color-border)',
          padding: '40px 24px',
          textAlign: 'center',
          color: 'var(--color-text-muted)',
          fontSize: '13px',
          marginTop: '96px',
        }}>
          <div className="container">
            <p style={{ marginBottom: '8px', color: 'var(--color-gold)', letterSpacing: '0.15em', fontSize: '11px' }}>
              KANSEI.INFO
            </p>
            <p>© 2025 藤井実彦 / Mitsuhiko Fujii — AI時代の知識OS</p>
            <p style={{ marginTop: '8px', fontSize: '12px' }}>
              世界観マーケティング · Atmospheric UX · Pre-Meaning · HCI Research · Fieldwork · Books
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
