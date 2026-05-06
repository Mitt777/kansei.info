'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [type, setType] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = () => {
    if (!name || !email || !message) return
    const body = encodeURIComponent(
      `【お名前】${name}\n【メール】${email}\n【会社・店舗名】${company || '未入力'}\n【お問い合わせ種別】${type || '未選択'}\n\n【お問い合わせ内容】\n${message}\n\n---\nkansei.info お問い合わせフォームより`
    )
    const subject = encodeURIComponent(`【kansei.info】${name}様よりお問い合わせ`)
    window.location.href = `mailto:mitfujii@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  if (sent) {
    return (
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>✓</div>
        <h2 style={{ fontSize: '22px', fontWeight: '300', marginBottom: '12px' }}>メールアプリが開きました</h2>
        <p style={{ fontSize: '14px', color: 'var(--color-text-sub)', lineHeight: '1.85', marginBottom: '24px' }}>
          お問い合わせ内容が本文に入った状態でメールアプリが開いています。<br />
          そのまま送信してください。
        </p>
        <button onClick={() => setSent(false)} className="btn-secondary" style={{ cursor: 'pointer' }}>
          フォームに戻る
        </button>
      </div>
    )
  }

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-label" style={{ color: 'var(--color-gold)' }}>
            Contact — お問い合わせ
          </div>
          <h1 className="page-title">相談・依頼・連携</h1>
          <p className="page-desc">
            世界観マーケティングの導入支援・講演・取材・共同研究など、
            お気軽にご連絡ください。通常2〜3営業日以内にご返信します。
          </p>
        </div>
      </div>

      <div className="page-body" style={{ maxWidth: '720px' }}>

        {/* 相談メニュー */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', marginBottom: '16px' }}>
            What We Can Help
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--color-border)' }}>
            {[
              { icon: '🏪', title: '店舗・施設の世界観診断', desc: '7層モデルで現状を分析し、改善の優先順位を提示します。' },
              { icon: '🎤', title: '講演・研修', desc: '世界観マーケティング・AI時代の感性設計・地域DXをテーマとした講演。' },
              { icon: '🌏', title: '地域・観光地のブランディング', desc: '共鳴型経済圏の設計と地域OS戦略の策定をサポートします。' },
              { icon: '📝', title: '取材・メディア出演', desc: '世界観マーケティング・AI×感性・地域DXに関する取材対応。' },
              { icon: '🎓', title: '共同研究・学術連携', desc: 'HCI・UX・地域研究者との共同研究・論文執筆の連携。' },
              { icon: '🌐', title: 'English Inquiry', desc: 'International collaboration, research partnership, and speaking engagements.' },
            ].map((item) => (
              <div key={item.title} style={{ display: 'flex', gap: '16px', padding: '16px 20px', background: 'var(--color-surface)', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '18px', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '500', marginBottom: '3px' }}>{item.title}</div>
                  <div style={{ fontSize: '13px', color: 'var(--color-text-sub)', lineHeight: '1.6' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* フォーム */}
        <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '32px', background: 'var(--color-surface)' }}>
          <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--color-gold)', marginBottom: '20px' }}>
            お問い合わせフォーム
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>

            {/* お問い合わせ種別 */}
            <div>
              <label style={{ fontSize: '12px', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '6px' }}>
                お問い合わせ種別
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['世界観診断・コンサルティング', '講演・研修', '取材・メディア', '共同研究', 'その他'].map((t) => (
                  <button key={t} onClick={() => setType(t)}
                    style={{
                      padding: '6px 14px', border: '1px solid',
                      borderColor: type === t ? 'var(--color-gold)' : 'var(--color-border)',
                      borderRadius: '2px', fontSize: '12px', cursor: 'pointer',
                      background: type === t ? 'var(--color-gold-pale)' : 'var(--color-surface)',
                      color: type === t ? 'var(--color-gold)' : 'var(--color-text-sub)',
                      fontFamily: 'var(--font-sans)',
                    }}>
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {[
              { label: 'お名前 *', value: name, setter: setName, placeholder: '山田 太郎', type: 'text' },
              { label: 'メールアドレス *', value: email, setter: setEmail, placeholder: 'example@email.com', type: 'email' },
              { label: '会社・店舗名（任意）', value: company, setter: setCompany, placeholder: '株式会社〇〇 / △△カフェ', type: 'text' },
            ].map((field) => (
              <div key={field.label}>
                <label style={{ fontSize: '12px', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '6px' }}>
                  {field.label}
                </label>
                <input type={field.type} value={field.value} onChange={(e) => field.setter(e.target.value)}
                  placeholder={field.placeholder}
                  style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', fontSize: '14px', background: 'var(--color-bg)', outline: 'none', fontFamily: 'var(--font-sans)', boxSizing: 'border-box' }} />
              </div>
            ))}

            <div>
              <label style={{ fontSize: '12px', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '6px' }}>
                お問い合わせ内容 *
              </label>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)}
                placeholder="ご相談内容・ご質問をご記入ください"
                rows={5}
                style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', fontSize: '14px', background: 'var(--color-bg)', resize: 'vertical', outline: 'none', fontFamily: 'var(--font-sans)', boxSizing: 'border-box' }} />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
            <button onClick={handleSubmit} disabled={!name || !email || !message}
              style={{
                padding: '12px 28px',
                background: name && email && message ? 'var(--color-text)' : 'var(--color-border)',
                color: name && email && message ? 'var(--color-text-inv)' : 'var(--color-text-muted)',
                border: 'none', borderRadius: 'var(--radius-sm)',
                fontSize: '14px', fontWeight: '500',
                cursor: name && email && message ? 'pointer' : 'not-allowed',
                fontFamily: 'var(--font-sans)',
              }}>
              送信する →
            </button>
            <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
              * は必須項目です
            </span>
          </div>
        </div>

        {/* 先に診断を試す */}
        <div style={{ marginTop: '40px', padding: '24px', background: 'var(--color-bg-alt)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '500', marginBottom: '4px' }}>まず7層診断を試してみませんか？</div>
            <div style={{ fontSize: '13px', color: 'var(--color-text-sub)' }}>診断結果をお問い合わせに添付すると、より具体的なアドバイスができます。</div>
          </div>
          <Link href="/diagnosis" className="btn-secondary" style={{ flexShrink: 0 }}>
            無料診断を試す →
          </Link>
        </div>

      </div>
    </>
  )
}
