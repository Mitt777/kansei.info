import type { Metadata } from 'next'
import SectionCard from '@/components/SectionCard'

export const metadata: Metadata = {
  title: 'Fieldwork \u2014 \u611f\u6027\u6c11\u65cf\u8a8c | kansei.info',
  description: '\u90a3\u9808\u30fb\u8349\u6d25\u30fbSHOZO CAFE\u30fbFranklin\u2019s Cafe\u30fb\u30c7\u30a3\u30ba\u30cb\u30fc\u3002\u73fe\u5834\u3067\u89b3\u6e2c\u3057\u305f\u4e16\u754c\u89b3\u306e\u751f\u6210\u3068\u5d29\u58ca\u306e\u30d7\u30ed\u30bb\u30b9\u30027\u5c64\u30e2\u30c7\u30eb\u306b\u3088\u308b\u5206\u6790\u3002',
}

const spots = [
  { href: "/fieldwork/shozo", label: "Type B", labelJa: "\u9ed2\u78ef", title: "SHOZO CAFE", description: "\u90a3\u9808\u9ed2\u78ef\u3092\u8857\u3054\u3068\u5909\u3048\u305f\u30ab\u30d5\u30a7\u3002\u5171\u9cf4\u578b\u7d4c\u6e08\u5708\u306e\u6838\u3002", accentColor: "var(--color-fieldwork)", tags: ["\u5171\u9cf4\u578b\u7d4c\u6e08\u5708", "Type B", "\u5730\u57dfOS\u6838"] },
  { href: "/fieldwork/kusatsu", label: "Type B", labelJa: "\u8349\u6d25\u6e29\u6cc9\u8857", title: "\u8349\u6d25\u6e29\u6cc9\u8857", description: "\u6e6f\u754c\u3092\u4e2d\u5fc3\u306b\u5730\u57df\u5168\u4f53\u304c\u4e00\u3064\u306e\u30c6\u30fc\u30de\u30d1\u30fc\u30af\u3068\u3057\u3066\u6a5f\u80fd\u3059\u308b\u3002", accentColor: "var(--color-fieldwork)", tags: ["\u5730\u57df\u5168\u4f53\u578b", "\u6e6f\u754c", "\u8857OS"] },
  { href: "/fieldwork/pennyln", label: "Type A\u2019", labelJa: "\u90a3\u9808\u9ad8\u539f", title: "\u30da\u30cb\u30fc\u30ec\u30a4\u30f3", description: "\u99d0\u8eca\u5834\u304b\u3089Beatles\u304c\u805e\u3053\u3048\u308b\u3002\u5883\u754c\u4fb5\u5165\u304c\u6700\u3082\u65e9\u304f\u59cb\u307e\u308b\u5e97\u3002", accentColor: "var(--color-fieldwork)", tags: ["Beatles IP", "\u5883\u754c\u4fb5\u5165\u2605", "\u90a3\u9808\u9ad8\u539f"] },
  { href: "/fieldwork/franklins", label: "Type B", labelJa: "\u90a3\u9808\u9ad8\u539f", title: "Franklin\u2019s Cafe", description: "\u30a2\u30af\u30bb\u30b9\u306e\u3057\u306b\u304f\u3055\u304c\u671f\u5f85\u5897\u5e45\u306b\u306a\u308b\u3002\u5730\u7406\u7684\u306b\u8a2d\u8a08\u3055\u308c\u305f\u5f85\u6a5f\u4f53\u9a13\u3002", accentColor: "var(--color-fieldwork)", tags: ["\u671f\u5f85\u5897\u5e45\u2605", "\u50fb\u5730\u578b", "\u9690\u308c\u5bb6"] },
  { href: "/fieldwork/nasu-animal", label: "Type A", labelJa: "\u90a3\u9808\u9ad8\u539f", title: "\u90a3\u9808\u3069\u3046\u3076\u3064\u738b\u56fd", description: "\u90a3\u9808\u306e\u7a7a\u3092\u501f\u666f\u3057\u305f\u30d0\u30fc\u30c9\u30b7\u30e7\u30fc\u3002\u81ea\u7136\u3092\u821e\u53f0\u88c5\u7f6e\u306b\u3057\u305f\u552f\u4e00\u306e\u4e8b\u4f8b\u3002", accentColor: "var(--color-fieldwork)", tags: ["\u7a7a\u3092\u501f\u666f\u2605", "\u30d0\u30fc\u30c9\u30b7\u30e7\u30fc", "Type A"] },
  { href: "/fieldwork/spajam", label: "Type A", labelJa: "\u6771\u4e45\u7559\u7c73", title: "\u30b9\u30d1\u30b8\u30a2\u30e0\u30fb\u30b8\u30e3\u30dd\u30f3", description: "\u90a3\u9808\u306e\u9759\u3051\u3055\u3068\u306f\u771f\u9006\u2014\u2014\u8ce6\u304b\u3055\u304c\u4fa1\u5024\u306b\u306a\u308b\u90fd\u5e02\u578b\u30b9\u30fc\u30d1\u30fc\u9322\u6e6f\u3002", accentColor: "var(--color-fieldwork)", tags: ["\u90fd\u5e02\u578b", "\u8ce6\u304b\u3055\u306e\u4fa1\u5024", "\u6771\u4e45\u7559\u7c73"] },
  { href: "/fieldwork/ashino-onsen", label: "Type B", labelJa: "\u90a3\u9808 \u82a6\u91ce", title: "\u82a6\u91ce\u6e29\u6cc9\u65c5\u9928", description: "\u9053\u4e2d\u304b\u3089\u59cb\u307e\u308b\u5883\u754c\u4fb5\u5165\u3002\u6587\u8108\u7d99\u7d9a\u6027\u3092\u6700\u3082\u6df1\u304f\u611f\u3058\u305f\u5834\u6240\u3002", accentColor: "var(--color-fieldwork)", tags: ["\u6587\u8108\u7d99\u7d9a\u6027\u2605", "\u5230\u7740\u524d\u304b\u3089", "\u8001\u8217\u65c5\u9928"] },
  { href: "/fieldwork/bakery-my", label: "Type B", labelJa: "\u6771\u4e45\u7559\u7c73", title: "\u30d9\u30fc\u30ab\u30ea\u30fc\u30cf\u30a6\u30b9\u30fb\u30de\u30a4", description: "\u89b3\u5149\u5730\u3067\u3082\u3001SNS\u6620\u3048\u30b9\u30dd\u30c3\u30c8\u3067\u3082\u306a\u3044\u5730\u5143\u306e\u30d1\u30f3\u5c4b\u3002\u65e5\u5e38\u578b\u4e16\u754c\u89b3\u306e\u4e8b\u4f8b\u3002", accentColor: "var(--color-fieldwork)", tags: ["\u65e5\u5e38\u578b", "\u5730\u57df\u5bc6\u7740", "Type B"] },
  { href: "/fieldwork/ramen-takahashi", label: "Type B", labelJa: "\u90a3\u9808\u5854\u539f", title: "\u30e9\u30fc\u30e1\u30f3\u305f\u304b\u306f\u3057", description: "\u5e97\u4e3b\u304c\u5e38\u9023\u5ba2\u306e\u540d\u524d\u3092\u547c\u3093\u3067\u3044\u305f\u3002\u793e\u4f1a\u5c64\u304c\u4e16\u754c\u89b3\u3092\u4f5c\u308b\u4e8b\u4f8b\u3002", accentColor: "var(--color-fieldwork)", tags: ["\u793e\u4f1a\u5c64\u2605", "\u5e38\u9023\u306e\u540d\u524d", "\u90a3\u9808\u5854\u539f"] },
  { href: "/fieldwork/disney", label: "Type A", labelJa: "\u5343\u8449 \u821e\u6d5c", title: "\u6771\u4eac\u30c7\u30a3\u30ba\u30cb\u30fc\u30e9\u30f3\u30c9", description: "\u4e16\u754c\u89b3\u8a2d\u8a08\u306e\u9802\u70b9\u3002Weenie\u7406\u8ad6\u30fbArt of the Show\u30fbPlussing\u3002", accentColor: "var(--color-frameworks)", tags: ["Type A", "Weenie\u7406\u8ad6", "\u30a4\u30de\u30b8\u30cb\u30a2\u30ea\u30f3\u30b0"] },
  { href: "/fieldwork/sanrio", label: "Type A\u2019", labelJa: "\u6771\u4eac \u591a\u6469", title: "\u30b5\u30f3\u30ea\u30aa\u30d4\u30e5\u30fc\u30ed\u30e9\u30f3\u30c9", description: "Pre-Meaning\u304c\u4e16\u754c\u89b3\u306e\u6838\u3002IP\u6d3b\u7528\u578b\u4e16\u754c\u89b3\u306e\u5178\u578b\u4e8b\u4f8b\u3002", accentColor: "var(--color-labs)", tags: ["Pre-Meaning", "IP\u6d3b\u7528", "\u304b\u308f\u3044\u3044"] },
]

export default function FieldworkPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-label" style={{ color: "var(--color-fieldwork)" }}>
            Fieldwork {"\u2014"} {"\u611f\u6027\u6c11\u65cf\u8a8c"}
          </div>
          <h1 className="page-title">{"\u73fe\u5834\u3067\u89b3\u6e2c\u3057\u305f"}<br />{"\u4e16\u754c\u89b3\u306e\u751f\u6210\u3068\u5d29\u58ca"}</h1>
          <p className="page-desc">
            {"\u90a3\u9808\u30fb\u8349\u6d25\u30fbSHOZO CAFE\u30fbFranklin\u2019s Cafe\u30fb\u30c7\u30a3\u30ba\u30cb\u30fc"}
            {"\u2014\u2014\u5b9f\u969b\u306b\u8a3a\u308c\u3001\u7a7a\u6c17\u3092\u611f\u3058\u30017\u5c64\u30e2\u30c7\u30eb\u3067\u69cb\u9020\u5316\u3057\u305f\u73fe\u5834\u8a18\u9332\u3002"}
          </p>
        </div>
      </div>
      <div className="page-body">
        <div className="sections-grid">
          {spots.map((spot) => (
            <SectionCard key={spot.href} {...spot} />
          ))}
        </div>
      </div>
    </>
  )
}
