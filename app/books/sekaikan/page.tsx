import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'
import PracticeBridge from '@/components/PracticeBridge'

export const metadata: Metadata = {
  title: '世界観マーケティングと顧客体験の方程式 — 抜粋公開',
  description: '「また来たい」の構造——ディズニーも那須の小さなカフェも使える、AI時代の世界観設計の物差し。7層モデル・三類型・世界観価値の方程式を体系化。藤井実彦著。抜粋公開。',
}

const chapters = [
  { href: '/books/sekaikan/prologue', num: '序章', title: 'なぜ今、「世界観」なのか', desc: 'AI時代に、人はどこへ帰るのか。三類型の導入と三つの読み方。' },
  { href: '/books/sekaikan/chapter-1', num: '第一章', title: 'なぜ「また来たくなる場所」が生まれるのか', desc: '人は何に帰りたくなるのか。便利だけでは記憶に残らない理由。' },
  { href: '/books/sekaikan/chapter-2', num: '第二章', title: '世界観マーケティングとは何か', desc: '「また来たくなる場所」の構造。三類型比較表・楠木健接続。' },
  { href: '/books/sekaikan/chapter-3', num: '第三章', title: '顧客体験の方程式', desc: '世界観設計7層モデルとその理論的基盤。ディズニー×学術理論対応表。' },
  { href: '/books/sekaikan/chapter-4', num: '第四章', title: '物語の源泉', desc: 'Type A/A’/B三類型・借景概念・文脈継続性の詳細解説。' },
  { href: '/books/sekaikan/chapter-5', num: '第五章', title: '戦わないマーケティング', desc: '共鳴型経済圏と地域価値の守り方。地域OS戦略。' },
  { href: '/books/sekaikan/chapter-6', num: '第六章', title: 'AI時代に、なぜ「空気」が価値になるのか', desc: 'Pre-Meaning・Human-side Alignment・GEO論。' },
  { href: '/books/sekaikan/chapter-7', num: '第七章', title: '世界観マーケティング実践チェックリスト', desc: '各STEPにチェック表。「また来たい場所」の設計方法。' },
  { href: '/books/sekaikan/epilogue', num: '終章', title: '小さな灯の時代へ', desc: 'AI時代に、人間はどこで呼吸するのか。7層を存在論的問いとして。' },
]

export default function SekaikanBookPage() {
  return (
    <>
      <div style={{
        background: 'var(--color-bg-alt)',
        borderBottom: '1px solid var(--color-border)',
        padding: '80px 24px 64px',
      }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <div style={{
            fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase',
            fontFamily: 'var(--font-mono)', color: 'var(--color-gold)', marginBottom: '12px',
          }}>
            <Link href="/books" style={{ color: 'var(--color-text-muted)' }}>Books</Link>
            {' › '}世界観マーケティング
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr auto',
            gap: '48px', alignItems: 'start',
          }}>
            <div>
              <h1 style={{
                fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', fontWeight: '300',
                lineHeight: '1.3', marginBottom: '12px', color: 'var(--color-text)',
              }}>
                世界観マーケティングと<br />顧客体験の方程式
              </h1>
              <p style={{
                fontSize: '15px', color: 'var(--color-text-sub)',
                lineHeight: '1.75', marginBottom: '8px',
              }}>
                「また来たい」の構造——ディズニーも那須の小さなカフェも使える、AI時代の世界観設計の物差し
              </p>
              <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '28px' }}>
                藤井実彦 著 / 2025
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <Link href="/books/sekaikan/prologue" className="btn-primary">
                  序章から読む →
                </Link>
                <a
                  href="https://amzn.asia/d/0dPiL65s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Amazonで購入
                </a>
              </div>
            </div>
            <div style={{
              display: 'flex', flexDirection: 'column', gap: '12px', minWidth: '160px',
            }}>
              {[
                { val: '9章', label: '章構成' },
                { val: '7層', label: 'コアモデル' },
                { val: '21本', label: '参考文献' },
                { val: '抜粋', label: '一部公開' },
              ].map((s) => (
                <div key={s.label} style={{
                  textAlign: 'center', padding: '14px',
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-surface)',
                }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: '500', fontFamily: 'var(--font-mono)', color: 'var(--color-text)' }}>{s.val}</div>
                  <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginTop: '3px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="page-body">
        {/* 本書について */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{
            fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase',
            fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', marginBottom: '16px',
          }}>About This Book</div>
          <p style={{ fontSize: '15px', color: 'var(--color-text-sub)', lineHeight: '1.9', marginBottom: '16px' }}>
            本書は、「また来たい場所」の構造を設計可能にするための物差しだ。
            ディズニーランドの経営者も、那須の山の中でひとりカフェを開く店主も、
            動物園のスタッフも、温泉宿のおかみも——全員が同じ問いを持っている。
          </p>
          <div style={{
            background: 'var(--color-bg-alt)', borderLeft: '3px solid var(--color-gold)',
            padding: '20px 24px', fontSize: '15px', lineHeight: '1.85',
            color: 'var(--color-text)', fontStyle: 'italic',
          }}>
            世界観マーケティングとは、単なる販促技術ではない。
            それは、AI時代に「人間が安心して存在できる場所」を設計することなのではないか。
          </div>
        </div>

        {/* 目次 */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{
            fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase',
            fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', marginBottom: '20px',
          }}>Table of Contents — 目次</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {chapters.map((ch) => (
              <Link
                key={ch.href}
                href={ch.href}
                className="toc-link"
                style={{
                  display: 'grid', gridTemplateColumns: '80px 1fr',
                  gap: '16px', padding: '16px 20px',
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-surface)',
                  textDecoration: 'none', color: 'inherit',
                  transition: 'background 0.2s, border-color 0.2s',
                }}
              >
                <span style={{
                  fontSize: '11px', fontFamily: 'var(--font-mono)',
                  color: 'var(--color-gold)', paddingTop: '2px',
                }}>{ch.num}</span>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: '500', marginBottom: '4px' }}>{ch.title}</div>
                  <div style={{ fontSize: '12.5px', color: 'var(--color-text-sub)' }}>{ch.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* キーワード */}
        <div style={{
          padding: '28px 32px', background: 'var(--color-bg-alt)',
          border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)',
          marginBottom: '48px',
        }}>
          <div style={{
            fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase',
            fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', marginBottom: '14px',
          }}>Key Concepts</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {[
              '世界観設計7層モデル', '三類型（A/A’/B）', '世界観価値の方程式',
              '文脈継続性', '共鳴型経済圏', '借景', 'Atmospheric UX',
              'Pre-Meaning', 'Human-side Alignment', '地域OS',
              'ディズニー イマジニアリング', 'Pine & Gilmore', '楠木健',
            ].map((kw) => (
              <span key={kw} style={{
                fontSize: '12px', padding: '4px 10px',
                border: '1px solid var(--color-border)',
                borderRadius: '2px', color: 'var(--color-text-sub)',
                fontFamily: 'var(--font-mono)',
              }}>{kw}</span>
            ))}
          </div>
        </div>

        <PracticeBridge
          title="世界観を読んだあとに、あなたのお店の見え方を確認してみてください。"
          description="お客様.COMでは、Google Maps、口コミ、写真、SNS、入りやすさ、世界観を、初めて客目線のお店診断として整理できます。"
          linkLabel="お客様.COMでお店の健康診断を試す →"
        />

        <RelatedKnowledge
          items={[
            { href: '/frameworks/7layers', type: 'framework', title: '世界観設計7層モデル', description: '本書の核心フレームワーク' },
            { href: '/labs/pre-meaning', type: 'lab', title: 'Pre-Meaning', description: '意味になる前の感覚' },
            { href: '/fieldwork/shozo', type: 'fieldwork', title: 'SHOZO CAFE', description: 'Type B世界観の最高峰' },
            { href: '/research/hcii2026', type: 'research', title: 'HCII2026', description: '学術的実証' },
          ]}
        />
      </div>
    </>
  )
}
