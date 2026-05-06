'use client'
import { useState } from 'react'
import Link from 'next/link'

const layers = [
  { num: '①', name: '原初物語', en: 'Origin Story', color: '#C9A84C', question: '「なぜ、あなたの場所は存在するのか」を一言で言えるか' },
  { num: '②', name: '世界観接触', en: 'World Contact', color: '#8B5CF6', question: 'SNS・動画・口コミで、空気感が正確に伝わっているか' },
  { num: '③', name: '境界侵入', en: 'Threshold Crossing', color: '#3B82F6', question: '駐車場・入口・看板で、「別の空気」が始まっているか' },
  { num: '④', name: '没入環境', en: 'Immersive Environment', color: '#10B981', question: '音・匂い・光・接客・導線が一つの空気として一致しているか' },
  { num: '⑤', name: '期待増幅', en: 'Anticipation', color: '#F59E0B', question: '待ち時間や行列が「予感」として体験化されているか' },
  { num: '⑥', name: '感動体験', en: 'Peak Experience', color: '#EC4899', question: '提供する体験の核心が前段の世界観と一致しているか' },
  { num: '⑦', name: '伝播帰属', en: 'Propagation', color: '#6366F1', question: 'SNS投稿・口コミ・再訪のサイクルが回っているか' },
]

export default function DiagnosisPage() {
  const [scores, setScores] = useState<number[]>(Array(7).fill(5))
  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [industry, setIndustry] = useState('')
  const [question, setQuestion] = useState('')
  const [sent, setSent] = useState(false)

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

  const buildResultText = () => {
    const layerResults = layers.map((l, i) => `${l.num}${l.name}: ${scores[i]}/10`).join('\n')
    const weak = weakLayers.map(l => l.name).join('、') || 'なし'
    const strong = strongLayers.map(l => l.name).join('、') || 'なし'
    return `【世界観力診断結果】\n総合スコア: ${total}/100\n\n${layerResults}\n\n優先改善層: ${weak}\n強い層: ${strong}`
  }

  const handleSubmit = () => {
    if (!name || !email) return
    const body = encodeURIComponent(
      `送信者: ${name}\nメール: ${email}\n業種: ${industry || '未入力'}\n\n` +
      buildResultText() +
      (question ? `\n\nご質問:\n${question}` : '') +
      '\n\n---\nkansei.info 世界観力診断より'
    )
    const subject = encodeURIComponent(`【世界観力診断】${name}様 スコア${total}/100`)
    window.location.href = `mailto:mitfujii@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  const msg = getMessage()

  if (sent) {
    return (
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>✓</div>
        <h2 style={{ fontSize: '22px', fontWeight: '300', marginBottom: '12px' }}>メールアプリが開きました</h2>
        <p style={{ fontSize: '14px', color: 'var(--color-text-sub)', lineHeight: '1.85', marginBottom: '24px' }}>
          診断結果が本文に入った状態でメールアプリが開いています。そのまま送信してください。
        </p>
        <button onClick={() => { setSent(false); setShowForm(false) }} className="btn-secondary" style={{ cursor: 'pointer' }}>
          診断に戻る
        </button>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '680px', margin: '0 auto', padding: '80px 24px 96px' }}>
      <div style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: '#10B981', marginBottom: '20px' }}>
        Self Diagnosis — 7層セルフ診断
      </div>
      <h1 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: '300', marginBottom: '16px', color: 'var(--color-text)' }}>
        あなたの場所の「世界観力」を測る
      </h1>
      <p style={{ fontSize: '14px', color: 'var(--color-text-sub)', lineHeight: '1.85', marginBottom: '40px' }}>
        7つの層を1〜10で評価するだけ。弱い層が可視化され、改善の優先順位がわかる。
      </p>

      {/* スライダー */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '40px' }}>
        {layers.map((layer, i) => (
          <div key={layer.num} style={{ border: '1px solid var(--color-border)', background: 'var(--color-surface)', padding: '18px 22px', borderLeft: `4px solid ${layer.color}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <div>
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: layer.color, marginRight: '8px' }}>{layer.num}</span>
                <span style={{ fontSize: '15px', fontWeight: '500' }}>{layer.name}</span>
                <span style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginLeft: '8px', fontFamily: 'var(--font-mono)' }}>{layer.en}</span>
              </div>
              <span style={{ fontSize: '1.2rem', fontWeight: '500', fontFamily: 'var(--font-mono)', color: getColor(scores[i]) }}>{scores[i]}</span>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--color-text-sub)', marginBottom: '10px' }}>{layer.question}</p>
            <input type="range" min={1} max={10} value={scores[i]} step={1}
              onChange={(e) => { const n = [...scores]; n[i] = Number(e.target.value); setScores(n) }}
              style={{ width: '100%', accentColor: layer.color }} />
            <div style={{ height: '3px', background: 'var(--color-border)', borderRadius: '2px', marginTop: '6px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${scores[i] * 10}%`, background: getColor(scores[i]), transition: 'width 0.3s' }} />
            </div>
          </div>
        ))}
      </div>

      {/* スコア */}
      <div style={{ border: '1px solid var(--color-border)', background: 'var(--color-bg-alt)', padding: '28px', textAlign: 'center', marginBottom: '20px' }}>
        <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', marginBottom: '10px' }}>総合スコア</div>
        <div style={{ fontSize: '3.5rem', fontWeight: '500', fontFamily: 'var(--font-mono)', color: getColor(total / 10), lineHeight: '1', marginBottom: '6px' }}>{total}</div>
        <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '14px' }}>/100</div>
        <div style={{ height: '6px', background: 'var(--color-border)', borderRadius: '3px', overflow: 'hidden', marginBottom: '14px' }}>
          <div style={{ height: '100%', width: `${total}%`, background: getColor(total / 10), transition: 'width 0.4s' }} />
        </div>
        <p style={{ fontSize: '14px', color: msg.color, fontWeight: '500' }}>{msg.text}</p>
      </div>

      {weakLayers.length > 0 && (
        <div style={{ border: '1px solid rgba(239,68,68,0.3)', background: 'rgba(239,68,68,0.03)', padding: '14px 18px', marginBottom: '10px' }}>
          <div style={{ fontSize: '10px', letterSpacing: '0.15em', fontFamily: 'var(--font-mono)', color: '#EF4444', marginBottom: '8px' }}>優先改善層</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {weakLayers.map(l => <span key={l.num} style={{ fontSize: '12px', padding: '3px 10px', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '2px', color: '#EF4444', fontFamily: 'var(--font-mono)' }}>{l.num} {l.name}</span>)}
          </div>
        </div>
      )}
      {strongLayers.length > 0 && (
        <div style={{ border: '1px solid rgba(16,185,129,0.3)', background: 'rgba(16,185,129,0.03)', padding: '14px 18px', marginBottom: '28px' }}>
          <div style={{ fontSize: '10px', letterSpacing: '0.15em', fontFamily: 'var(--font-mono)', color: '#10B981', marginBottom: '8px' }}>強い層</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {strongLayers.map(l => <span key={l.num} style={{ fontSize: '12px', padding: '3px 10px', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '2px', color: '#10B981', fontFamily: 'var(--font-mono)' }}>{l.num} {l.name}</span>)}
          </div>
        </div>
      )}

      {/* CTA + フォーム */}
      {!showForm ? (
        <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '28px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button onClick={() => setShowForm(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: 'var(--color-text)', color: 'var(--color-text-inv)', border: 'none', borderRadius: 'var(--radius-sm)', fontSize: '13px', fontWeight: '500', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>
            結果をメールで送ってアドバイスを受ける →
          </button>
          <Link href="/frameworks/7layers" className="btn-secondary">7層モデルを詳しく見る</Link>
        </div>
      ) : (
        <div style={{ border: '2px solid var(--color-gold)', borderRadius: 'var(--radius-md)', padding: '28px', background: 'var(--color-gold-pale)' }}>
          <div style={{ fontSize: '15px', fontWeight: '500', marginBottom: '8px', color: 'var(--color-text)' }}>診断結果を送信する</div>
          <p style={{ fontSize: '13px', color: 'var(--color-text-sub)', marginBottom: '20px', lineHeight: '1.75' }}>
            送信ボタンを押すと、診断結果が本文に入った状態でメールアプリが開きます。そのまま送信するだけでOKです。
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
            {[
              { label: 'お名前 *', value: name, setter: setName, placeholder: '山田 太郎', type: 'text' },
              { label: 'メールアドレス *', value: email, setter: setEmail, placeholder: 'example@email.com', type: 'email' },
              { label: '業種・業態（任意）', value: industry, setter: setIndustry, placeholder: '例：カフェ / 旅館 / 観光施設', type: 'text' },
            ].map((field) => (
              <div key={field.label}>
                <label style={{ fontSize: '12px', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '4px' }}>{field.label}</label>
                <input type={field.type} value={field.value} onChange={(e) => field.setter(e.target.value)} placeholder={field.placeholder}
                  style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', fontSize: '14px', background: 'var(--color-surface)', outline: 'none', fontFamily: 'var(--font-sans)', boxSizing: 'border-box' }} />
              </div>
            ))}
            <div>
              <label style={{ fontSize: '12px', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '4px' }}>ご質問・ご相談（任意）</label>
              <textarea value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="診断結果について、改善方法について等" rows={3}
                style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', fontSize: '14px', background: 'var(--color-surface)', resize: 'vertical', outline: 'none', fontFamily: 'var(--font-sans)', boxSizing: 'border-box' }} />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button onClick={handleSubmit} disabled={!name || !email}
              style={{ padding: '12px 24px', background: name && email ? 'var(--color-text)' : 'var(--color-border)', color: name && email ? 'var(--color-text-inv)' : 'var(--color-text-muted)', border: 'none', borderRadius: 'var(--radius-sm)', fontSize: '13px', fontWeight: '500', cursor: name && email ? 'pointer' : 'not-allowed', fontFamily: 'var(--font-sans)' }}>
              メールで送信する →
            </button>
            <button onClick={() => setShowForm(false)} className="btn-secondary" style={{ cursor: 'pointer' }}>キャンセル</button>
          </div>
        </div>
      )}
    </div>
  )
}
