'use client'
import { useState } from 'react'
import Link from 'next/link'

const layers = [
  {
    num: '①', name: '原初物語', en: 'Origin Story',
    color: '#C9A84C',
    question: '「なぜ、あなたの場所は存在するのか」を一言で言えるか',
    hints: ['理念・哲学・起源が明確か', 'スタッフ全員が語れるか', 'デザインや接客の基準になっているか'],
  },
  {
    num: '②', name: '世界観接触', en: 'World Contact',
    color: '#8B5CF6',
    question: 'SNS・口コミ・検索で、空気感が正確に伝わっているか',
    hints: ['InstagramでSaveされているか', 'YouTubeで比較検討されているか', '実店舗の空気とSNSが一致しているか'],
  },
  {
    num: '③', name: '境界侵入', en: 'Threshold Crossing',
    color: '#3B82F6',
    question: '駐車場・入口・看板で、「別の空気」が始まっているか',
    hints: ['駐車場から世界観が始まっているか', '入口で空気が変わる感覚があるか', '「ここから別の世界」という境界があるか'],
  },
  {
    num: '④', name: '没入環境', en: 'Immersive Environment',
    color: '#10B981',
    question: '音・匂い・光・接客・導線が一つの空気として一致しているか',
    hints: ['世界観と合わないBGMはないか', '過剰なPOP・情報過多はないか', 'スタッフの所作が空間と一致しているか'],
  },
  {
    num: '⑤', name: '期待増幅', en: 'Anticipation',
    color: '#F59E0B',
    question: '待ち時間や行列が「予感」として体験化されているか',
    hints: ['待機中も世界観の中にいるか', '「もうすぐ始まる」という予感があるか', '到着前から期待が高まるか'],
  },
  {
    num: '⑥', name: '感動体験', en: 'Peak Experience',
    color: '#EC4899',
    question: '提供する体験の核心（飲食・景色・会話）が前段の世界観と一致しているか',
    hints: ['同じコーヒーでも空間が記憶を変えているか', 'ピーク体験が設計されているか', '常に「上乗せ」する意識があるか'],
  },
  {
    num: '⑦', name: '伝播帰属', en: 'Propagation',
    color: '#6366F1',
    question: '「あの場所にいた自分」として記憶され、また来たくなっているか',
    hints: ['SNS投稿が「空気」を伝えているか', 'また来たい理由が価格以外にあるか', '常連・ファンが形成されているか'],
  },
]

export default function DiagnosisPage() {
  const [scores, setScores] = useState<number[]>(Array(7).fill(5))

  const total = Math.round((scores.reduce((a, b) => a + b, 0) / 70) * 100)
  const weakLayers = layers.filter((_, i) => scores[i] <= 4)
  const strongLayers = layers.filter((_, i) => scores[i] >= 8)

  const getColor = (score: number) => {
    if (score >= 8) return '#10B981'
    if (score >= 5) return '#F59E0B'
    return '#EF4444'
  }

  const getMessage = () => {
    if (total >= 80) return { text: '強固な世界観が成立しています', color: '#10B981' }
    if (total >= 60) return { text: 'ある程度機能しています。弱い層を補強しましょう', color: '#F59E0B' }
    if (total >= 40) return { text: '改善余地が大きいです。特に低い層から着手を', color: '#F59E0B' }
    return { text: '世界観の再構築を検討してください', color: '#EF4444' }
  }

  const msg = getMessage()

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto', padding: '80px 24px 96px' }}>
      {/* ヘッダー */}
      <div style={{
        fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase',
        fontFamily: 'var(--font-mono)', color: 'var(--color-green, #10B981)', marginBottom: '20px',
      }}>
        Self Diagnosis — 7層セルフ診断
      </div>
      <h1 style={{
        fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: '300',
        marginBottom: '16px', color: 'var(--color-text)',
      }}>
        あなたの場所の<br />「世界観力」を測る
      </h1>
      <p style={{
        fontSize: '14px', color: 'var(--color-text-sub)',
        lineHeight: '1.85', marginBottom: '48px',
      }}>
        7つの層を1〜10で評価するだけ。弱い層が可視化され、改善の優先順位がわかる。
        ディズニーも地域の人気カフェも、同じ物差しで測れる。
      </p>

      {/* スライダー */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '40px' }}>
        {layers.map((layer, i) => (
          <div key={layer.num} style={{
            border: '1px solid var(--color-border)',
            background: 'var(--color-surface)',
            padding: '20px 24px',
            borderLeft: `4px solid ${layer.color}`,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
              <div>
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: layer.color, marginRight: '8px' }}>
                  {layer.num}
                </span>
                <span style={{ fontSize: '15px', fontWeight: '500' }}>{layer.name}</span>
                <span style={{ fontSize: '11px', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', marginLeft: '8px' }}>
                  {layer.en}
                </span>
              </div>
              <span style={{
                fontSize: '1.2rem', fontWeight: '500',
                fontFamily: 'var(--font-mono)', color: getColor(scores[i]),
              }}>
                {scores[i]}
              </span>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--color-text-sub)', marginBottom: '12px', lineHeight: '1.6' }}>
              {layer.question}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '11px', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>弱</span>
              <input
                type="range" min={1} max={10} value={scores[i]} step={1}
                onChange={(e) => {
                  const next = [...scores]
                  next[i] = Number(e.target.value)
                  setScores(next)
                }}
                style={{ flex: 1, accentColor: layer.color }}
              />
              <span style={{ fontSize: '11px', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>強</span>
            </div>
            {/* バー */}
            <div style={{ height: '3px', background: 'var(--color-border)', borderRadius: '2px', marginTop: '8px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${scores[i] * 10}%`, background: getColor(scores[i]), borderRadius: '2px', transition: 'width 0.3s, background 0.3s' }} />
            </div>
          </div>
        ))}
      </div>

      {/* 総合スコア */}
      <div style={{
        border: '1px solid var(--color-border)', background: 'var(--color-bg-alt)',
        padding: '32px', textAlign: 'center', marginBottom: '24px',
      }}>
        <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', marginBottom: '12px' }}>
          世界観総合スコア
        </div>
        <div style={{ fontSize: '3.5rem', fontWeight: '500', fontFamily: 'var(--font-mono)', color: getColor(total / 10), lineHeight: '1', marginBottom: '8px' }}>
          {total}
        </div>
        <div style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '16px' }}>/100</div>
        <div style={{ height: '6px', background: 'var(--color-border)', borderRadius: '3px', overflow: 'hidden', marginBottom: '16px' }}>
          <div style={{ height: '100%', width: `${total}%`, background: getColor(total / 10), borderRadius: '3px', transition: 'width 0.4s' }} />
        </div>
        <p style={{ fontSize: '14px', color: msg.color, fontWeight: '500' }}>{msg.text}</p>
      </div>

      {/* 弱い層のアドバイス */}
      {weakLayers.length > 0 && (
        <div style={{
          border: '1px solid rgba(239,68,68,0.3)', background: 'rgba(239,68,68,0.03)',
          padding: '20px 24px', marginBottom: '16px',
        }}>
          <div style={{ fontSize: '10px', letterSpacing: '0.15em', fontFamily: 'var(--font-mono)', color: '#EF4444', marginBottom: '10px' }}>
            優先改善層
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {weakLayers.map((l) => (
              <span key={l.num} style={{
                fontSize: '12px', padding: '4px 10px',
                border: '1px solid rgba(239,68,68,0.3)',
                borderRadius: '2px', color: '#EF4444',
                fontFamily: 'var(--font-mono)',
              }}>
                {l.num} {l.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* 強い層 */}
      {strongLayers.length > 0 && (
        <div style={{
          border: '1px solid rgba(16,185,129,0.3)', background: 'rgba(16,185,129,0.03)',
          padding: '20px 24px', marginBottom: '40px',
        }}>
          <div style={{ fontSize: '10px', letterSpacing: '0.15em', fontFamily: 'var(--font-mono)', color: '#10B981', marginBottom: '10px' }}>
            強い層 — 伸ばすポイント
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {strongLayers.map((l) => (
              <span key={l.num} style={{
                fontSize: '12px', padding: '4px 10px',
                border: '1px solid rgba(16,185,129,0.3)',
                borderRadius: '2px', color: '#10B981',
                fontFamily: 'var(--font-mono)',
              }}>
                {l.num} {l.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div style={{
        borderTop: '1px solid var(--color-border)', paddingTop: '40px',
        display: 'flex', gap: '12px', flexWrap: 'wrap',
      }}>
        <Link href="/frameworks/7layers" className="btn-primary">
          7層モデルを詳しく見る →
        </Link>
        <Link href="/contact" className="btn-secondary">
          無料相談する
        </Link>
      </div>
    </div>
  )
}
