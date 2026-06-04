type PracticeBridgeProps = {
  label?: string
  title?: string
  description?: string
  href?: string
  linkLabel?: string
}

export default function PracticeBridge({
  label = 'Practice',
  title = 'この理論を、あなたのお店で確認してみてください。',
  description = '良い店が、ちゃんと良く見えているか。Google Maps、口コミ、写真、SNS、入りやすさ、世界観まで、初めてのお客様から見たお店を総合診断できます。',
  href = 'https://okyakusa-ma.com',
  linkLabel = 'お客様.COMで無料診断を試す →',
}: PracticeBridgeProps) {
  return (
    <section className="practice-bridge" aria-label="お店診断への導線">
      <div>
        <p className="practice-bridge-label">{label}</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <a href={href} className="practice-bridge-link">
        {linkLabel}
      </a>
    </section>
  )
}
