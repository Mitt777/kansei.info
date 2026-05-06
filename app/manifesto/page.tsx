import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: 'Manifesto — なぜこの知識空間を作るのか',
  description:
    'AI時代に人間はどこで呼吸するのか。世界観マーケティングとは何か。藤井実彦による思想の宣言。',
}

export default function ManifestoPage() {
  return (
    <>
      <style>{`
        .mf-hero {
          padding: 80px 24px 64px;
          border-bottom: 1px solid var(--color-border);
          background: var(--color-bg);
        }
        .mf-hero-inner {
          max-width: 720px;
          margin: 0 auto;
        }
        .mf-label {
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          font-family: var(--font-mono);
          color: var(--color-gold);
          margin-bottom: 24px;
        }
        .mf-title {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 300;
          line-height: 1.3;
          margin-bottom: 24px;
          color: var(--color-text);
        }
        .mf-lead {
          font-size: 16px;
          line-height: 1.9;
          color: var(--color-text-sub);
          border-left: 2px solid var(--color-gold);
          padding-left: 20px;
          margin-bottom: 0;
        }
        .mf-body {
          max-width: 720px;
          margin: 0 auto;
          padding: 64px 24px 96px;
        }
        .mf-section {
          margin-bottom: 56px;
        }
        .mf-section-label {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-family: var(--font-mono);
          color: var(--color-text-muted);
          margin-bottom: 16px;
        }
        .mf-section h2 {
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 16px;
          color: var(--color-text);
        }
        .mf-section p {
          font-size: 15px;
          line-height: 1.9;
          color: var(--color-text-sub);
          margin-bottom: 16px;
        }
        .mf-quote {
          background: var(--color-bg-alt);
          border-left: 3px solid var(--color-gold);
          padding: 20px 24px;
          margin: 24px 0;
          font-size: 15px;
          line-height: 1.85;
          color: var(--color-text);
          font-style: italic;
        }
        .mf-three-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--color-border);
          border: 1px solid var(--color-border);
          margin: 24px 0;
        }
        .mf-three-item {
          background: var(--color-surface);
          padding: 20px;
        }
        .mf-three-label {
          font-size: 10px;
          letter-spacing: 0.15em;
          font-family: var(--font-mono);
          color: var(--color-gold);
          margin-bottom: 8px;
        }
        .mf-three-title {
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 8px;
        }
        .mf-three-desc {
          font-size: 12.5px;
          color: var(--color-text-sub);
          line-height: 1.7;
        }
        .mf-final {
          font-size: 18px;
          font-weight: 300;
          line-height: 1.9;
          color: var(--color-text);
          margin-top: 48px;
          padding-top: 48px;
          border-top: 1px solid var(--color-border);
        }
        @media (max-width: 640px) {
          .mf-three-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="mf-hero">
        <div className="mf-hero-inner">
          <div className="mf-label">Manifesto — 思想宣言</div>
          <h1 className="mf-title">
            AI時代に、<br />人間はどこで<br />呼吸するのか。
          </h1>
          <p className="mf-lead">
            この知識空間は、その問いへの答えを探し続ける場所だ。
            ディズニーランドも、那須の小さなカフェも、動物園も、温泉宿も——
            「また来たい」と思われたいすべての場所のための、共通の物差しを作ることが目的だ。
          </p>
        </div>
      </div>

      <div className="mf-body">

        <div className="mf-section">
          <div className="mf-section-label">01 — 問いの起源</div>
          <h2>那須で、説明できないものに出会った。</h2>
          <p>
            私はここ数年、那須地域で数百本単位の地域観測型動画を制作しながら、多くの店舗や場所を見続けてきた。
            そこで何度も感じたのは、「また来たくなる場所」には、説明しきれない力がある、ということだった。
          </p>
          <p>
            静かなカフェ。温泉街の夜。木の匂い。人の会話の速度。少し古い旅館。地域のパン屋。
            そこには、単なる「機能」では説明できない何かがある。
          </p>
          <div className="mf-quote">
            「また来たい」という感覚は、とても不思議だ。世の中には、もっと便利な店もある。
            もっと安い店もある。それでも人は、なぜか特定の場所へ戻っていく。
          </div>
        </div>

        <div className="mf-section">
          <div className="mf-section-label">02 — 発見</div>
          <h2>三つの場所が、一つの真実を教えてくれた。</h2>
          <p>
            世界観には、三つの類型がある。どれが優れているのではない。それぞれの文脈で機能する、異なる「物語の生み出し方」だ。
          </p>
          <div className="mf-three-grid">
            <div className="mf-three-item">
              <div className="mf-three-label">Type A — 意図的設計型</div>
              <div className="mf-three-title">ディズニーランド</div>
              <div className="mf-three-desc">
                物語を自ら創造・所有する。「It All Begins with a Story」——世界観は内側から作られる。
                土地が変わっても世界観は自己完結する。
              </div>
            </div>
            <div className="mf-three-item">
              <div className="mf-three-label">Type A' — IP活用型</div>
              <div className="mf-three-title">サンリオピューロランド</div>
              <div className="mf-three-desc">
                キャラクターへの愛着を軸に感情的共鳴を生む。
                「かわいい」というPre-Meaning——意味になる前に身体が反応する。
              </div>
            </div>
            <div className="mf-three-item">
              <div className="mf-three-label">Type B — 無意識共鳴型</div>
              <div className="mf-three-title">那須の人気店</div>
              <div className="mf-three-desc">
                地域の物語を無意識に「借景」している。オーナー自身が気づいていないことも多い。
                しかしその空気は、顧客の記憶に深く刻まれる。
              </div>
            </div>
          </div>
        </div>

        <div className="mf-section">
          <div className="mf-section-label">03 — AI時代の文脈</div>
          <h2>AIが進化するほど、「空気」が価値になる。</h2>
          <p>
            AIによって、便利さは加速する。比較・推薦・最適化はさらに高度化する。
            しかしその一方で、人間は「効率」だけでは疲れてしまう。
          </p>
          <p>
            AIが「最適解」を作るのが得意な時代に、人間が求め始めるのは——
            空気、余白、地域性、身体感覚、偶然性、居場所だ。
          </p>
          <div className="mf-quote">
            GEOが「見つけてもらうための技術」だとすれば、
            世界観マーケティングは「また帰りたくなる場所をつくる技術」だ。
            この二つは、AI時代のマーケティングにおいて、車の両輪となる。
          </div>
        </div>

        <div className="mf-section">
          <div className="mf-section-label">04 — この知識空間の目的</div>
          <h2>本書は、特定の業種のための本ではない。</h2>
          <p>
            ディズニーランドを運営する経営者も、那須の山の中でひとりカフェを開く店主も、
            子どもたちに動物の命を伝えたい動物園のスタッフも、旅人に一晩の安らぎを届けたい温泉宿のおかみも——
            「また来たい」と思われたいすべての人のための、共通の物差しを提供することが目的だ。
          </p>
        </div>

        <div className="mf-final">
          あなたは、どんな空気を残したいですか。<br />
          それが、これからの時代の、もっとも人間的な問いなのかもしれない。
          <div style={{ marginTop: '32px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/frameworks" style={{ fontSize: '13px', color: 'var(--color-gold)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>
              → 7層モデルを見る
            </Link>
            <Link href="/books/sekaikan" style={{ fontSize: '13px', color: 'var(--color-text-sub)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>
              → 書籍全文を読む
            </Link>
          </div>
        </div>

        <RelatedKnowledge
          items={[
            { href: '/frameworks/7layers', type: 'framework', title: '世界観設計7層モデル', description: 'また来たくなる体験の因果構造' },
            { href: '/labs/pre-meaning', type: 'lab', title: 'Pre-Meaning論', description: '意味になる前に身体が感じていること' },
            { href: '/fieldwork/nasu', type: 'fieldwork', title: '那須フィールドワーク', description: '60日468本の観測記録' },
            { href: '/books/sekaikan', type: 'book', title: '世界観マーケティングと顧客体験の方程式', description: '書籍全文' },
          ]}
        />
      </div>
    </>
  )
}
