type MapBridgeProps = {
  label?: string
  title?: string
  description?: string
  href?: string
  linkLabel?: string
}

export default function MapBridge({
  label = 'Map Layer',
  title = '場所の記憶を、地域MAPとして見つけやすくする。',
  description = 'map-s.site は、観光地・商店街・小さなお店のまとまりを、Google Mapsリンク付きの軽い地域MAPとして公開するための実践ツールです。',
  href = 'https://map-s.site',
  linkLabel = 'map-s.siteで地域MAPを見る →',
}: MapBridgeProps) {
  return (
    <section className="practice-bridge map-bridge" aria-label="地域MAPへの導線">
      <div>
        <p className="practice-bridge-label">{label}</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <a href={href} className="practice-bridge-link map-bridge-link">
        {linkLabel}
      </a>
    </section>
  )
}
