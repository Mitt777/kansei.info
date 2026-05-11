export type AiSnsVideoBlock = {
  type: "paragraph" | "heading" | "diagram";
  text: string;
};

export type AiSnsVideoChapter = {
  slug: string;
  navLabel: string;
  title: string;
  description: string;
  keywords: string[];
  blocks: AiSnsVideoBlock[];
};

export const aiSnsVideoBook = {
  title: "AI時代のバズらないSNS動画基礎講座",
  subtitle: "小さなお店が、本来つながるべきお客様と出会う方法",
  description:
    "AI時代に、小さなお店がバズを追わず、本来つながるべきお客様と出会うためのSNS動画実践書。なすぱらTVの900本超の実践、HCII 2026採択のSave → Plan → Impulse理論、SEO→MEO→GEOの知識OSを接続する全文アーカイブ。",
  author: "Mitsuhiko Fujii",
  canonical: "https://kansei.info/books/ai-sns-video",
  amazonUrl: "https://amzn.asia/d/0fQ6wsVL" as string | null,
} as const;

export const aiSnsVideoChapters: AiSnsVideoChapter[] = [
  {
    "slug": "introduction",
    "navLabel": "はじめに",
    "title": "はじめに",
    "description": "本書は、SNS動画の永遠の正解を書いた本ではありません。",
    "keywords": [
      "SNS動画",
      "AI時代",
      "Save Plan Impulse",
      "なすぱらTV",
      "GEO",
      "地域店舗",
      "Instagram",
      "YouTube Shorts",
      "TikTok"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "これは、2026年5月10日の観測記録である"
      },
      {
        "type": "paragraph",
        "text": "本書は、SNS動画の永遠の正解を書いた本ではありません。"
      },
      {
        "type": "paragraph",
        "text": "2026年5月10日時点で、AI時代の初期に、小さなお店とSNS動画のあいだで何が起きているのかを、ひとりの実践者が現場から記録したものです。"
      },
      {
        "type": "paragraph",
        "text": "半年後には、Instagramの仕様も、TikTokのアルゴリズムも、YouTube Shortsの見られ方も、AIによる動画生成の水準も、まったく違うものになっているかもしれません。"
      },
      {
        "type": "paragraph",
        "text": "検索も、地図も、口コミも、AIによる推薦も、これから急速に変わっていくでしょう。"
      },
      {
        "type": "paragraph",
        "text": "だからこそ、私はこの時点の空気感を言語化しておきたいと思いました。"
      },
      {
        "type": "paragraph",
        "text": "今、現場で何が起きているのか。"
      },
      {
        "type": "paragraph",
        "text": "小さなお店は、何に戸惑っているのか。"
      },
      {
        "type": "paragraph",
        "text": "SNS動画は、本当にお店の役に立つのか。"
      },
      {
        "type": "paragraph",
        "text": "AI時代に、人間らしさや地域性や空気感は、むしろ価値になるのか。"
      },
      {
        "type": "paragraph",
        "text": "この本は、その問いへの現時点での観測記録です。"
      },
      {
        "type": "heading",
        "text": "本書が扱わないこと"
      },
      {
        "type": "paragraph",
        "text": "ここで、最初に明確にしておきたいことがあります。"
      },
      {
        "type": "paragraph",
        "text": "本書は、お店の味や技術そのものを評価する本ではありません。"
      },
      {
        "type": "paragraph",
        "text": "私はこれまで、『世界観マーケティングと顧客体験の方程式』や『SEOの終わり、GEOの始まり』、その他のレポートや書籍の中で、できるだけ触れないようにしてきた領域があります。"
      },
      {
        "type": "paragraph",
        "text": "それは、お店自身が長年磨いてきた技術へのこだわりです。"
      },
      {
        "type": "paragraph",
        "text": "飲食店であれば、味、仕込み、素材、調理法、修行の積み重ねがあります。"
      },
      {
        "type": "paragraph",
        "text": "美容室であれば、カット、カラー、パーマ、接客、似合わせの技術があります。"
      },
      {
        "type": "paragraph",
        "text": "接骨院や整体であれば、身体への向き合い方、施術経験、手技の蓄積があります。"
      },
      {
        "type": "paragraph",
        "text": "歯科医院であれば、医療技術、衛生管理、説明責任、診療方針があります。"
      },
      {
        "type": "paragraph",
        "text": "観光スポットや地域の場所にも、それぞれの歴史、維持管理、受け継がれてきた価値があります。"
      },
      {
        "type": "paragraph",
        "text": "それらは、現場の方々が日々全力で磨いている本業の部分です。"
      },
      {
        "type": "paragraph",
        "text": "私は、そこに対して外側から絶対的な価値判断をする立場ではありません。"
      },
      {
        "type": "paragraph",
        "text": "もちろん、私にも一人の客として、味の好みやサービスへの印象はあります。"
      },
      {
        "type": "paragraph",
        "text": "居心地がよい、また来たい、少し合わなかった、という感覚もあります。"
      },
      {
        "type": "paragraph",
        "text": "しかし、それはあくまで一人の客としての感覚であり、その店の技術や味やサービスを断定的に評価するものではありません。"
      },
      {
        "type": "paragraph",
        "text": "衛生面についても同じです。"
      },
      {
        "type": "paragraph",
        "text": "クレンリネスやHACCPのように、別の明確な基準や制度で評価されるべき領域について、私が外側から不用意に語るつもりはありません。"
      },
      {
        "type": "paragraph",
        "text": "たとえば、立ち食いそばのお店を考えてみます。"
      },
      {
        "type": "paragraph",
        "text": "高級な二千円の蕎麦店と同じ素材や製法で比べれば、まったく別の評価になるでしょう。"
      },
      {
        "type": "paragraph",
        "text": "茹で麺であることもある。"
      },
      {
        "type": "paragraph",
        "text": "だしも価格に合わせた設計になる。"
      },
      {
        "type": "paragraph",
        "text": "しかし、お客様はそれだけを求めて来ているわけではありません。"
      },
      {
        "type": "paragraph",
        "text": "早いこと。"
      },
      {
        "type": "paragraph",
        "text": "安いこと。"
      },
      {
        "type": "paragraph",
        "text": "いつもの味であること。"
      },
      {
        "type": "paragraph",
        "text": "駅前でさっと食べられること。"
      },
      {
        "type": "paragraph",
        "text": "仕事前の習慣になっていること。"
      },
      {
        "type": "paragraph",
        "text": "その店の空気や距離感が、自分に合っていること。"
      },
      {
        "type": "paragraph",
        "text": "そうした総体験として、そのお店を選んでいます。"
      },
      {
        "type": "paragraph",
        "text": "味とは、絶対的な点数だけで決まるものではありません。"
      },
      {
        "type": "paragraph",
        "text": "その店に合ったお客様が、その店の味を好きであり、繰り返し来ているなら、そこにはすでに一つの関係があります。"
      },
      {
        "type": "paragraph",
        "text": "それを外側から単純に評価することは、私の仕事ではありません。"
      },
      {
        "type": "paragraph",
        "text": "私がこの本でやりたいことは、その本業の価値判断ではありません。"
      },
      {
        "type": "paragraph",
        "text": "味をこうすべきだ、技術をこう変えるべきだ、サービスをこう直すべきだ、と言うことではありません。"
      },
      {
        "type": "paragraph",
        "text": "むしろ、そのお店がすでに持っている味、技術、こだわり、所作、空気、地域性を、これからの時代にどう伝えていくか。"
      },
      {
        "type": "paragraph",
        "text": "そこを考えたいのです。"
      },
      {
        "type": "paragraph",
        "text": "これからの時代に選ばれるお店になるために、味や技術そのものの外側にある、伝わり方、保存され方、思い出され方、来店前の不安の消し方を整理したい。"
      },
      {
        "type": "paragraph",
        "text": "本書が扱うのは、その部分です。"
      },
      {
        "type": "paragraph",
        "text": "お店の本業への敬意を前提に、その価値が必要な人に届くためのSNS動画の考え方を書く。"
      },
      {
        "type": "paragraph",
        "text": "この立場だけは、最初に明確にしておきたいと思います。"
      },
      {
        "type": "heading",
        "text": "本当は、この本を最初に書けばよかった"
      },
      {
        "type": "paragraph",
        "text": "本当は、この本を最初に書けばよかったのかもしれません。"
      },
      {
        "type": "paragraph",
        "text": "小さなお店がSNS動画をどう使えばいいのか。"
      },
      {
        "type": "paragraph",
        "text": "Instagram、YouTube、TikTokをどう使い分ければいいのか。"
      },
      {
        "type": "paragraph",
        "text": "バズを狙わず、ファンを育てるには何を撮ればいいのか。"
      },
      {
        "type": "paragraph",
        "text": "そのような実用書として、最初からまとめることもできたはずです。"
      },
      {
        "type": "paragraph",
        "text": "けれども私は、なぜかそこへまっすぐ向かいませんでした。"
      },
      {
        "type": "paragraph",
        "text": "まず、なすぱらTVという現場を作りました。"
      },
      {
        "type": "paragraph",
        "text": "動画を撮り、投稿し、反応を見ました。"
      },
      {
        "type": "paragraph",
        "text": "25日間、44日間、60日間とレポートを書きました。"
      },
      {
        "type": "paragraph",
        "text": "感性波動論、二流立地構造、Save → Plan → Impulse といった概念を整理しました。"
      },
      {
        "type": "paragraph",
        "text": "HCIの国際学会に論文を出すところまで行きました。"
      },
      {
        "type": "paragraph",
        "text": "AI関連を含め、書籍も気づけば10冊ほど書いていました。"
      },
      {
        "type": "paragraph",
        "text": "動画も、あらゆるパターンを試したくて900本以上作りました。"
      },
      {
        "type": "paragraph",
        "text": "なぜ、そこまで遠回りしたのか。"
      },
      {
        "type": "paragraph",
        "text": "今振り返ると、おそらく私は、自分が現場で見ていないものを、理論として語りたくなかったのだと思います。"
      },
      {
        "type": "paragraph",
        "text": "誰かの言葉を借りて、もっともらしいSNS論を書くことが、どこか潔くないと感じていたのかもしれません。"
      },
      {
        "type": "paragraph",
        "text": "AI時代には、もっともらしい文章はいくらでも作れます。"
      },
      {
        "type": "paragraph",
        "text": "SNS動画のノウハウも、AIに聞けばすぐに出てきます。"
      },
      {
        "type": "paragraph",
        "text": "だからこそ、その人が本当に見たもの、その人が本当に試したこと、その人が現場で感じた違和感が、これからますます重要になるのではないか。"
      },
      {
        "type": "paragraph",
        "text": "本書は、そのような考えから生まれた本です。"
      },
      {
        "type": "paragraph",
        "text": "現場を通過していない言葉を、私は信用できなかった。"
      },
      {
        "type": "paragraph",
        "text": "AI時代だからこそ、現場を通過した言葉を書き残したかった。"
      },
      {
        "type": "heading",
        "text": "バズを追う時代から、共鳴を育てる時代へ"
      },
      {
        "type": "paragraph",
        "text": "SNS動画というと、多くの人が最初に考えるのは再生数です。"
      },
      {
        "type": "paragraph",
        "text": "何万回見られたのか。"
      },
      {
        "type": "paragraph",
        "text": "どれだけバズったのか。"
      },
      {
        "type": "paragraph",
        "text": "フォロワーは何人増えたのか。"
      },
      {
        "type": "paragraph",
        "text": "たしかに、それらの数字はわかりやすい。"
      },
      {
        "type": "paragraph",
        "text": "けれども、小さなお店にとって本当に大事なのは、100万回再生されることなのでしょうか。"
      },
      {
        "type": "paragraph",
        "text": "それとも、来月また来てくれるお客さんが一人増えることでしょうか。"
      },
      {
        "type": "paragraph",
        "text": "地方のお店、住宅街のカフェ、夫婦で営むレストラン、店主の顔が見える整体院、美容室、歯科医院、学習塾。"
      },
      {
        "type": "paragraph",
        "text": "そうした小さな場所にとって、SNS動画の役割は、大量認知を取ることだけではありません。"
      },
      {
        "type": "paragraph",
        "text": "むしろ、本来つながるべき人に、店の空気を届けることです。"
      },
      {
        "type": "paragraph",
        "text": "この店は、どんな人がやっているのか。"
      },
      {
        "type": "paragraph",
        "text": "どんな時間が流れているのか。"
      },
      {
        "type": "paragraph",
        "text": "どんな光が入るのか。"
      },
      {
        "type": "paragraph",
        "text": "どんな音がするのか。"
      },
      {
        "type": "paragraph",
        "text": "どんな気持ちで仕込みをしているのか。"
      },
      {
        "type": "paragraph",
        "text": "そのような言葉になりにくい情報が、短い動画には入ります。"
      },
      {
        "type": "paragraph",
        "text": "AI時代のSNS動画は、バズのためだけに使うものではありません。"
      },
      {
        "type": "paragraph",
        "text": "小さなお店が、自分たちの感性や日常や世界観を、まだ出会っていない誰かに届けるための、小さな窓です。"
      }
    ]
  },
  {
    "slug": "chapter-1",
    "navLabel": "第1章",
    "title": "第1章　私は、四年間ラーメン店の店長だった",
    "description": "私は大学卒業後、最初に就職した会社がモスフードサービスでした。",
    "keywords": [
      "SNS動画",
      "AI時代",
      "Save Plan Impulse",
      "なすぱらTV",
      "GEO",
      "地域店舗",
      "Instagram",
      "YouTube Shorts",
      "TikTok"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "私は大学卒業後、最初に就職した会社がモスフードサービスでした。"
      },
      {
        "type": "paragraph",
        "text": "ただし、私が配属されたのは、モスバーガーではありません。"
      },
      {
        "type": "paragraph",
        "text": "同社が展開していた「ちりめん亭」というラーメン店舗でした。"
      },
      {
        "type": "paragraph",
        "text": "そこで私は、約四年間、店舗の店長として働きました。"
      },
      {
        "type": "paragraph",
        "text": "朝の仕込み、ピークタイムの厨房、スタッフの教育、クレーム対応、売上管理、常連さんとの何気ない会話。"
      },
      {
        "type": "paragraph",
        "text": "マーケティングという言葉を使う前に、私はまず、店舗の現場で「お客様がまた来る理由」を身体で覚えました。"
      },
      {
        "type": "paragraph",
        "text": "飲食店の現場は、きれいごとだけでは回りません。"
      },
      {
        "type": "paragraph",
        "text": "売上があります。"
      },
      {
        "type": "paragraph",
        "text": "人件費があります。"
      },
      {
        "type": "paragraph",
        "text": "仕入れがあります。"
      },
      {
        "type": "paragraph",
        "text": "スタッフの体調があります。"
      },
      {
        "type": "paragraph",
        "text": "混雑する時間帯があり、暇な時間帯があり、予想外のクレームがあり、常連さんの一言に救われる日もあります。"
      },
      {
        "type": "paragraph",
        "text": "店は、数字だけでできているわけではありません。"
      },
      {
        "type": "paragraph",
        "text": "けれども、数字を無視しても続きません。"
      },
      {
        "type": "paragraph",
        "text": "その両方を、現場は毎日突きつけてきます。"
      },
      {
        "type": "heading",
        "text": "感性波動という言葉"
      },
      {
        "type": "paragraph",
        "text": "モスフードサービスの創業者である櫻田慧氏は、「感性波動」という言葉を使っていました。"
      },
      {
        "type": "paragraph",
        "text": "商品を売るだけではなく、お客様の感性に訴える。"
      },
      {
        "type": "paragraph",
        "text": "効率だけではなく、人が心地よいと感じる空気を大事にする。"
      },
      {
        "type": "paragraph",
        "text": "その思想が、モスバーガーを日本のハンバーガーチェーンの中で独自の位置に押し上げました。"
      },
      {
        "type": "paragraph",
        "text": "私は若い頃、その言葉の意味を完全に理解していたわけではありません。"
      },
      {
        "type": "paragraph",
        "text": "けれども、店舗の現場に立つ中で、なんとなく感じていたことがあります。"
      },
      {
        "type": "paragraph",
        "text": "売れる店には、数字だけでは説明できない空気がある。"
      },
      {
        "type": "paragraph",
        "text": "また来たくなる店には、商品だけではない何かがある。"
      },
      {
        "type": "paragraph",
        "text": "接客の声のかけ方。"
      },
      {
        "type": "paragraph",
        "text": "厨房のリズム。"
      },
      {
        "type": "paragraph",
        "text": "店内の清潔感。"
      },
      {
        "type": "paragraph",
        "text": "常連さんへの距離感。"
      },
      {
        "type": "paragraph",
        "text": "忙しい時でも乱れない空気。"
      },
      {
        "type": "paragraph",
        "text": "そういうものが、少しずつお客様の感性に届いている。"
      },
      {
        "type": "paragraph",
        "text": "今なら、その感覚を「感性波動」と呼ぶ意味が、少しわかる気がします。"
      },
      {
        "type": "heading",
        "text": "東京からは見えにくい地方店の強さ"
      },
      {
        "type": "paragraph",
        "text": "それから長い時間が経ち、私は訳あって那須地域に二年間住むことになりました。"
      },
      {
        "type": "paragraph",
        "text": "東京にいると、地方のお店の成功はなかなか見えません。"
      },
      {
        "type": "paragraph",
        "text": "都心のマーケティングは、競争、市場規模、広告、立地、認知で説明されることが多い。"
      },
      {
        "type": "paragraph",
        "text": "もちろん、それらは重要です。"
      },
      {
        "type": "paragraph",
        "text": "しかし、地方のお店はそれだけでは説明できません。"
      },
      {
        "type": "paragraph",
        "text": "なぜ、山の中のカフェに人が集まるのか。"
      },
      {
        "type": "paragraph",
        "text": "なぜ、車でしか行けない場所に、わざわざ人が向かうのか。"
      },
      {
        "type": "paragraph",
        "text": "なぜ、派手な広告をしていないお店が、長く愛されるのか。"
      },
      {
        "type": "paragraph",
        "text": "なぜ、二流立地に見える場所が、誰かにとって忘れられない目的地になるのか。"
      },
      {
        "type": "paragraph",
        "text": "その答えは、競争戦略だけではなく、感性、空気、関係性、地域性、そして世界観の中にありました。"
      },
      {
        "type": "paragraph",
        "text": "SNS動画とは、本来、その空気を少しだけ外へ運ぶための道具です。"
      },
      {
        "type": "paragraph",
        "text": "バズらせるための装置ではありません。"
      },
      {
        "type": "paragraph",
        "text": "小さなお店が、自分たちの感性や日常や世界観を、まだ出会っていない誰かに届けるための、小さな窓です。"
      },
      {
        "type": "paragraph",
        "text": "この本は、そこから始まります。"
      }
    ]
  },
  {
    "slug": "chapter-2",
    "navLabel": "第2章",
    "title": "第2章　小さなお店の強さは、競争戦略だけでは説明できない",
    "description": "東京にいると、店の成功は競争戦略で説明されることが多くなります。",
    "keywords": [
      "SNS動画",
      "AI時代",
      "Save Plan Impulse",
      "なすぱらTV",
      "GEO",
      "地域店舗",
      "Instagram",
      "YouTube Shorts",
      "TikTok"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "東京にいると、店の成功は競争戦略で説明されることが多くなります。"
      },
      {
        "type": "paragraph",
        "text": "立地がいい。"
      },
      {
        "type": "paragraph",
        "text": "市場が大きい。"
      },
      {
        "type": "paragraph",
        "text": "客数が多い。"
      },
      {
        "type": "paragraph",
        "text": "広告を打てる。"
      },
      {
        "type": "paragraph",
        "text": "認知が取れる。"
      },
      {
        "type": "paragraph",
        "text": "競合との差別化ができている。"
      },
      {
        "type": "paragraph",
        "text": "もちろん、それらは重要です。"
      },
      {
        "type": "paragraph",
        "text": "特に都心では、駅からの距離、通行量、検索順位、広告の出稿量、口コミ件数、予約導線が売上に直結しやすい。"
      },
      {
        "type": "paragraph",
        "text": "だから、マーケティングの言葉も自然と競争の言葉になります。"
      },
      {
        "type": "paragraph",
        "text": "どこで勝つか。"
      },
      {
        "type": "paragraph",
        "text": "誰に勝つか。"
      },
      {
        "type": "paragraph",
        "text": "どう差別化するか。"
      },
      {
        "type": "paragraph",
        "text": "どの市場を取るか。"
      },
      {
        "type": "paragraph",
        "text": "けれども、那須に住み、実際に多くのお店を訪ね、撮影し、動画を投稿し、反応を見ているうちに、私は少し違う感覚を持つようになりました。"
      },
      {
        "type": "paragraph",
        "text": "地方のお店の強さは、競争戦略だけでは説明できない。"
      },
      {
        "type": "paragraph",
        "text": "むしろ、競争という言葉では見落としてしまうものの中に、本当の強さがある。"
      },
      {
        "type": "heading",
        "text": "二流立地に見える場所が、目的地になる"
      },
      {
        "type": "paragraph",
        "text": "那須には、車でなければ行きにくい場所がたくさんあります。"
      },
      {
        "type": "paragraph",
        "text": "駅前の一等地ではありません。"
      },
      {
        "type": "paragraph",
        "text": "大きな商業施設の中でもありません。"
      },
      {
        "type": "paragraph",
        "text": "歩いて回れる観光地でもありません。"
      },
      {
        "type": "paragraph",
        "text": "道を一本間違えると、急に森の中に入る。"
      },
      {
        "type": "paragraph",
        "text": "看板が小さく、駐車場がわかりにくい。"
      },
      {
        "type": "paragraph",
        "text": "雨の日には少し不便で、冬は寒く、平日は人通りが少ない。"
      },
      {
        "type": "paragraph",
        "text": "都心の競争戦略だけで見れば、決して有利とは言えない場所です。"
      },
      {
        "type": "paragraph",
        "text": "けれども、そうした場所に、わざわざ人が向かうことがあります。"
      },
      {
        "type": "paragraph",
        "text": "車で二十分、三十分かけてでも行きたい。"
      },
      {
        "type": "paragraph",
        "text": "旅行の途中で少し遠回りしてでも寄りたい。"
      },
      {
        "type": "paragraph",
        "text": "一度行ったあと、また思い出して訪れたい。"
      },
      {
        "type": "paragraph",
        "text": "そのとき、お店は単なる店舗ではなく、目的地になります。"
      },
      {
        "type": "paragraph",
        "text": "ここが、地方店のおもしろさです。"
      },
      {
        "type": "paragraph",
        "text": "立地が悪いから弱いのではありません。"
      },
      {
        "type": "paragraph",
        "text": "その場所にしかない空気があれば、二流立地に見える場所が、誰かにとっての一流の目的地になる。"
      },
      {
        "type": "paragraph",
        "text": "この感覚は、都市型の競争戦略だけではなかなか説明できません。"
      },
      {
        "type": "heading",
        "text": "人は、店ではなく「時間」を覚えている"
      },
      {
        "type": "paragraph",
        "text": "お客様は、商品だけを覚えているわけではありません。"
      },
      {
        "type": "paragraph",
        "text": "もちろん、料理がおいしいこと、技術が高いこと、サービスが丁寧なことは大切です。"
      },
      {
        "type": "paragraph",
        "text": "しかし、何度も思い出される店には、もう少し別の要素があります。"
      },
      {
        "type": "paragraph",
        "text": "窓際の席に入ってきた午後の光。"
      },
      {
        "type": "paragraph",
        "text": "湯気の立ち方。"
      },
      {
        "type": "paragraph",
        "text": "カップを置く音。"
      },
      {
        "type": "paragraph",
        "text": "店主の声の温度。"
      },
      {
        "type": "paragraph",
        "text": "忙しいのに、どこか落ち着いている厨房のリズム。"
      },
      {
        "type": "paragraph",
        "text": "外の景色。"
      },
      {
        "type": "paragraph",
        "text": "駐車場から入口まで歩く短い時間。"
      },
      {
        "type": "paragraph",
        "text": "そうした小さな記憶が重なって、「また行きたい」という感覚になります。"
      },
      {
        "type": "paragraph",
        "text": "人は、店そのものだけでなく、その店で過ごした時間を覚えています。"
      },
      {
        "type": "paragraph",
        "text": "そしてSNS動画は、この「時間の記憶」を少しだけ運ぶことができます。"
      },
      {
        "type": "paragraph",
        "text": "料理の写真だけでは伝わらないもの。"
      },
      {
        "type": "paragraph",
        "text": "メニュー表だけでは伝わらないもの。"
      },
      {
        "type": "paragraph",
        "text": "Googleマップの星の数だけでは伝わらないもの。"
      },
      {
        "type": "paragraph",
        "text": "それを、短い動画が伝えることがあります。"
      },
      {
        "type": "paragraph",
        "text": "だから私は、地方のお店のSNS動画を考えるとき、単に「何を売るか」ではなく、「どんな時間を思い出してもらうか」を考えるべきだと思っています。"
      },
      {
        "type": "heading",
        "text": "競争市場ではなく、共鳴市場"
      },
      {
        "type": "paragraph",
        "text": "都市型のマーケティングでは、よく「市場」という言葉が使われます。"
      },
      {
        "type": "paragraph",
        "text": "市場規模。"
      },
      {
        "type": "paragraph",
        "text": "競合分析。"
      },
      {
        "type": "paragraph",
        "text": "ターゲット。"
      },
      {
        "type": "paragraph",
        "text": "ポジショニング。"
      },
      {
        "type": "paragraph",
        "text": "シェア。"
      },
      {
        "type": "paragraph",
        "text": "これらは必要な考え方です。"
      },
      {
        "type": "paragraph",
        "text": "ただ、小さなお店にとって、本当に大切なのは、巨大な市場で勝つことだけではありません。"
      },
      {
        "type": "paragraph",
        "text": "その店に共鳴する人と、ちゃんと出会うことです。"
      },
      {
        "type": "paragraph",
        "text": "たとえば、静かなカフェが好きな人がいます。"
      },
      {
        "type": "paragraph",
        "text": "店主と少し話せるお店が好きな人がいます。"
      },
      {
        "type": "paragraph",
        "text": "犬と行ける場所を探している人がいます。"
      },
      {
        "type": "paragraph",
        "text": "一人で落ち着ける席を探している人がいます。"
      },
      {
        "type": "paragraph",
        "text": "子ども連れでも安心できる店を探している人がいます。"
      },
      {
        "type": "paragraph",
        "text": "観光地の派手な店ではなく、地元の人が大切にしている場所に行きたい人がいます。"
      },
      {
        "type": "paragraph",
        "text": "小さなお店がSNS動画で出会うべきなのは、すべての人ではありません。"
      },
      {
        "type": "paragraph",
        "text": "自分たちの空気に合う人です。"
      },
      {
        "type": "paragraph",
        "text": "私はこれを、競争市場ではなく、共鳴市場と呼びたいと思います。"
      },
      {
        "type": "paragraph",
        "text": "共鳴市場は、大きくなくていい。"
      },
      {
        "type": "paragraph",
        "text": "むしろ、小さくていい。"
      },
      {
        "type": "paragraph",
        "text": "しかし、深くつながる。"
      },
      {
        "type": "paragraph",
        "text": "一度来てくれた人が、また来てくれる。"
      },
      {
        "type": "paragraph",
        "text": "誰かに静かに紹介してくれる。"
      },
      {
        "type": "paragraph",
        "text": "保存して、旅の予定に入れてくれる。"
      },
      {
        "type": "paragraph",
        "text": "いつか行きたい場所として、心の中に置いてくれる。"
      },
      {
        "type": "paragraph",
        "text": "この関係を育てることが、AI時代の小さなお店のSNS動画にとって、とても重要になります。"
      },
      {
        "type": "heading",
        "text": "競争戦略だけでは、空気が抜け落ちる"
      },
      {
        "type": "paragraph",
        "text": "競争戦略で考えると、どうしても比較しやすいものに目が向きます。"
      },
      {
        "type": "paragraph",
        "text": "価格。"
      },
      {
        "type": "paragraph",
        "text": "営業時間。"
      },
      {
        "type": "paragraph",
        "text": "立地。"
      },
      {
        "type": "paragraph",
        "text": "メニュー数。"
      },
      {
        "type": "paragraph",
        "text": "口コミ件数。"
      },
      {
        "type": "paragraph",
        "text": "検索順位。"
      },
      {
        "type": "paragraph",
        "text": "フォロワー数。"
      },
      {
        "type": "paragraph",
        "text": "再生回数。"
      },
      {
        "type": "paragraph",
        "text": "これらは確かに見やすい指標です。"
      },
      {
        "type": "paragraph",
        "text": "けれども、お店の魅力は、比較表に入るものだけではありません。"
      },
      {
        "type": "paragraph",
        "text": "むしろ、人が本当に惹かれる理由は、表にしづらいことが多い。"
      },
      {
        "type": "paragraph",
        "text": "なんとなく落ち着く。"
      },
      {
        "type": "paragraph",
        "text": "店主の感じがいい。"
      },
      {
        "type": "paragraph",
        "text": "空気が合う。"
      },
      {
        "type": "paragraph",
        "text": "無理に売り込まれない。"
      },
      {
        "type": "paragraph",
        "text": "季節ごとに思い出す。"
      },
      {
        "type": "paragraph",
        "text": "あの場所に行くと、自分の呼吸が少し戻る。"
      },
      {
        "type": "paragraph",
        "text": "こうした感覚は、競争戦略の言葉では扱いにくい。"
      },
      {
        "type": "paragraph",
        "text": "しかし、実際にはお客様の行動を強く動かしています。"
      },
      {
        "type": "paragraph",
        "text": "私は、那須で多くのお店を見ながら、この「言葉にしにくいけれど、人を動かしているもの」を何度も感じました。"
      },
      {
        "type": "paragraph",
        "text": "それが、感性波動であり、世界観であり、空気感であり、Pre-Meaningなのだと思います。"
      },
      {
        "type": "paragraph",
        "text": "人は、意味になる前に感じています。"
      },
      {
        "type": "paragraph",
        "text": "説明される前に、なんとなく好きになる。"
      },
      {
        "type": "paragraph",
        "text": "比較する前に、もう気になっている。"
      },
      {
        "type": "paragraph",
        "text": "予約する前に、心の中でその場所に行っている。"
      },
      {
        "type": "paragraph",
        "text": "SNS動画は、その「意味になる前」の感覚に届くことがあります。"
      },
      {
        "type": "heading",
        "text": "小さなお店に必要なのは、勝つことより、伝わること"
      },
      {
        "type": "paragraph",
        "text": "もちろん、お店は続かなければ意味がありません。"
      },
      {
        "type": "paragraph",
        "text": "売上も必要です。"
      },
      {
        "type": "paragraph",
        "text": "利益も必要です。"
      },
      {
        "type": "paragraph",
        "text": "新規のお客様も必要です。"
      },
      {
        "type": "paragraph",
        "text": "その現実を無視して、きれいな思想だけを語るつもりはありません。"
      },
      {
        "type": "paragraph",
        "text": "ただ、小さなお店が大手と同じ土俵で、広告量や投稿量や価格競争で勝とうとすると、消耗します。"
      },
      {
        "type": "paragraph",
        "text": "大切なのは、勝つことだけではなく、伝わることです。"
      },
      {
        "type": "paragraph",
        "text": "何を大事にしている店なのか。"
      },
      {
        "type": "paragraph",
        "text": "誰に来てほしい店なのか。"
      },
      {
        "type": "paragraph",
        "text": "どんな時間を提供しているのか。"
      },
      {
        "type": "paragraph",
        "text": "なぜ、この場所で続けているのか。"
      },
      {
        "type": "paragraph",
        "text": "どんな人が作り、どんな人が通っているのか。"
      },
      {
        "type": "paragraph",
        "text": "それが伝わると、お客様は単なる消費者ではなくなります。"
      },
      {
        "type": "paragraph",
        "text": "共鳴する人になります。"
      },
      {
        "type": "paragraph",
        "text": "ファンになります。"
      },
      {
        "type": "paragraph",
        "text": "応援者になります。"
      },
      {
        "type": "paragraph",
        "text": "SNS動画は、この「伝わる」を助ける道具です。"
      },
      {
        "type": "paragraph",
        "text": "バズらなくてもいい。"
      },
      {
        "type": "paragraph",
        "text": "ただし、伝わらなければいけない。"
      },
      {
        "type": "paragraph",
        "text": "小さなお店にとって、SNS動画の本当の役割はここにあります。"
      },
      {
        "type": "heading",
        "text": "地方店は、AI時代に弱くなるのではない"
      },
      {
        "type": "paragraph",
        "text": "AI時代になると、大きな会社だけが有利になると思われがちです。"
      },
      {
        "type": "paragraph",
        "text": "資本があり、人材があり、データがあり、広告予算がある会社が、さらに強くなる。"
      },
      {
        "type": "paragraph",
        "text": "たしかに、その面はあります。"
      },
      {
        "type": "paragraph",
        "text": "しかし私は、同時に逆の可能性も感じています。"
      },
      {
        "type": "paragraph",
        "text": "AIによって、一般的な情報や整った文章やきれいな画像は、誰でも作れるようになります。"
      },
      {
        "type": "paragraph",
        "text": "すると、逆に価値が出るのは、誰にでも作れるものではなくなります。"
      },
      {
        "type": "paragraph",
        "text": "その店の今日の仕込み。"
      },
      {
        "type": "paragraph",
        "text": "その地域の光。"
      },
      {
        "type": "paragraph",
        "text": "その店主の手。"
      },
      {
        "type": "paragraph",
        "text": "常連さんとの会話。"
      },
      {
        "type": "paragraph",
        "text": "地元の農家さんの名前。"
      },
      {
        "type": "paragraph",
        "text": "季節の変化。"
      },
      {
        "type": "paragraph",
        "text": "長く続けてきた理由。"
      },
      {
        "type": "paragraph",
        "text": "そうした固有名詞を持つものです。"
      },
      {
        "type": "paragraph",
        "text": "AIは一般論を作るのが得意です。"
      },
      {
        "type": "paragraph",
        "text": "しかし、あなたのお店の今日の空気までは、勝手には作れません。"
      },
      {
        "type": "paragraph",
        "text": "だからこそ、小さなお店はAI時代に弱くなるだけではない。"
      },
      {
        "type": "paragraph",
        "text": "むしろ、自分たちの固有性をきちんと発信できる店は、これまでより見つけられやすくなる可能性があります。"
      },
      {
        "type": "paragraph",
        "text": "そのために必要なのが、SNS動画です。"
      },
      {
        "type": "paragraph",
        "text": "そして、ただ動画を作るだけではなく、Instagram、YouTube、TikTokを、それぞれの役割に合わせて使うことです。"
      },
      {
        "type": "paragraph",
        "text": "保存される動画。"
      },
      {
        "type": "paragraph",
        "text": "検討される動画。"
      },
      {
        "type": "paragraph",
        "text": "衝動を生む動画。"
      },
      {
        "type": "paragraph",
        "text": "その三つを組み合わせることで、小さなお店は、競争ではなく共鳴の導線を作ることができます。"
      },
      {
        "type": "paragraph",
        "text": "次の章では、AI時代に小さなお店が何を武器にすべきかを、もう少し具体的に考えていきます。"
      }
    ]
  },
  {
    "slug": "chapter-3",
    "navLabel": "第3章",
    "title": "第3章　AI時代に、小さなお店は何を武器にするのか",
    "description": "AI時代に、小さなお店は何を武器にすればいいのでしょうか。",
    "keywords": [
      "SNS動画",
      "AI時代",
      "Save Plan Impulse",
      "なすぱらTV",
      "GEO",
      "地域店舗",
      "Instagram",
      "YouTube Shorts",
      "TikTok"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "AI時代に、小さなお店は何を武器にすればいいのでしょうか。"
      },
      {
        "type": "paragraph",
        "text": "この問いに対して、よくある答えはこうです。"
      },
      {
        "type": "paragraph",
        "text": "AIを使って投稿を増やしましょう。"
      },
      {
        "type": "paragraph",
        "text": "CapCutで編集しましょう。"
      },
      {
        "type": "paragraph",
        "text": "Canvaでサムネイルを作りましょう。"
      },
      {
        "type": "paragraph",
        "text": "毎日投稿しましょう。"
      },
      {
        "type": "paragraph",
        "text": "冒頭3秒で引きを作りましょう。"
      },
      {
        "type": "paragraph",
        "text": "ハッシュタグを工夫しましょう。"
      },
      {
        "type": "paragraph",
        "text": "もちろん、それらは間違いではありません。"
      },
      {
        "type": "paragraph",
        "text": "しかし、それだけなら誰でも書けます。"
      },
      {
        "type": "paragraph",
        "text": "AIにも書けます。"
      },
      {
        "type": "paragraph",
        "text": "本当に大切なのは、その前にあります。"
      },
      {
        "type": "paragraph",
        "text": "小さなお店は、何を撮るべきなのか。"
      },
      {
        "type": "paragraph",
        "text": "何を言葉にすべきなのか。"
      },
      {
        "type": "paragraph",
        "text": "どこに、その店にしかない価値が宿っているのか。"
      },
      {
        "type": "paragraph",
        "text": "AI時代に武器になるのは、ツールの使い方そのものではありません。"
      },
      {
        "type": "paragraph",
        "text": "ツールを通して伝えるべき、店の固有性です。"
      },
      {
        "type": "heading",
        "text": "AIが作れないものを撮る"
      },
      {
        "type": "paragraph",
        "text": "AIは、きれいな料理動画を作れるようになっていきます。"
      },
      {
        "type": "paragraph",
        "text": "AIは、カフェ風の映像も作れます。"
      },
      {
        "type": "paragraph",
        "text": "AIは、湯気の立つラーメンも、木漏れ日の店内も、笑顔のスタッフも、かなり自然に生成できるようになるでしょう。"
      },
      {
        "type": "paragraph",
        "text": "では、本物のお店は何を撮ればいいのか。"
      },
      {
        "type": "paragraph",
        "text": "答えは、AIが勝手には作れないものです。"
      },
      {
        "type": "paragraph",
        "text": "今日の仕込み。"
      },
      {
        "type": "paragraph",
        "text": "今日の光。"
      },
      {
        "type": "paragraph",
        "text": "今日の店主の手。"
      },
      {
        "type": "paragraph",
        "text": "今日入った食材。"
      },
      {
        "type": "paragraph",
        "text": "今日来た常連さんとの空気。"
      },
      {
        "type": "paragraph",
        "text": "その地域の季節。"
      },
      {
        "type": "paragraph",
        "text": "その店の小さな失敗。"
      },
      {
        "type": "paragraph",
        "text": "その店でしか起きない会話。"
      },
      {
        "type": "paragraph",
        "text": "その場所で、実際に流れている時間。"
      },
      {
        "type": "paragraph",
        "text": "AIは「一般的な良い店」を作ることはできます。"
      },
      {
        "type": "paragraph",
        "text": "しかし、「あなたのお店の今日」を勝手に作ることはできません。"
      },
      {
        "type": "paragraph",
        "text": "だから小さなお店は、完璧な映像を目指すより、自分たちの今日を記録することから始めた方がいい。"
      },
      {
        "type": "paragraph",
        "text": "それは、広告ではなく、営業日誌に近い。"
      },
      {
        "type": "paragraph",
        "text": "ただし、誰かに届く形に整えた営業日誌です。"
      },
      {
        "type": "heading",
        "text": "私が900本作ってわかったこと"
      },
      {
        "type": "paragraph",
        "text": "なすぱらTVでは、動画を900本以上作りました。"
      },
      {
        "type": "paragraph",
        "text": "正直に言うと、最初から明確な正解があったわけではありません。"
      },
      {
        "type": "paragraph",
        "text": "グルメ動画を作りました。"
      },
      {
        "type": "paragraph",
        "text": "カフェの雰囲気を撮りました。"
      },
      {
        "type": "paragraph",
        "text": "街の風景を撮りました。"
      },
      {
        "type": "paragraph",
        "text": "動物園も撮りました。"
      },
      {
        "type": "paragraph",
        "text": "温泉も撮りました。"
      },
      {
        "type": "paragraph",
        "text": "道の駅も、パン屋も、ラーメン店も、自然の風景も、個人的な挑戦のような動画も試しました。"
      },
      {
        "type": "paragraph",
        "text": "ナレーションを入れたものもあります。"
      },
      {
        "type": "paragraph",
        "text": "無言でテロップだけのものもあります。"
      },
      {
        "type": "paragraph",
        "text": "長めに見せるものも、短く切るものも試しました。"
      },
      {
        "type": "paragraph",
        "text": "バズったものもあれば、まったく伸びなかったものもあります。"
      },
      {
        "type": "paragraph",
        "text": "その中でわかってきたのは、SNS動画は「何を撮るか」だけでなく、「どの感情に届くか」で考えるべきだということでした。"
      },
      {
        "type": "paragraph",
        "text": "お腹が空く動画。"
      },
      {
        "type": "paragraph",
        "text": "行ってみたくなる動画。"
      },
      {
        "type": "paragraph",
        "text": "保存したくなる動画。"
      },
      {
        "type": "paragraph",
        "text": "ルートを調べたくなる動画。"
      },
      {
        "type": "paragraph",
        "text": "今すぐ向かいたくなる動画。"
      },
      {
        "type": "paragraph",
        "text": "店主を応援したくなる動画。"
      },
      {
        "type": "paragraph",
        "text": "地域そのものを好きになる動画。"
      },
      {
        "type": "paragraph",
        "text": "同じ動画に見えても、届いている感情が違います。"
      },
      {
        "type": "paragraph",
        "text": "ここを見ないまま「再生数が多い、少ない」だけで判断すると、現場では間違えます。"
      },
      {
        "type": "heading",
        "text": "まずは「黄金の7パターン」から始める"
      },
      {
        "type": "paragraph",
        "text": "小さなお店がいきなり16パターンを全部やろうとすると、疲れてしまいます。"
      },
      {
        "type": "paragraph",
        "text": "だから最初は、現場で使いやすい7パターンから始めるのがいいと思います。"
      },
      {
        "type": "paragraph",
        "text": "これは、私が那須で動画を作りながら、最低限この7つがあれば店の空気が伝わり始めると感じたものです。"
      },
      {
        "type": "heading",
        "text": "1. 商品・メニュー紹介型"
      },
      {
        "type": "paragraph",
        "text": "もっともわかりやすい動画です。"
      },
      {
        "type": "paragraph",
        "text": "料理、商品、サービスそのものを見せます。"
      },
      {
        "type": "paragraph",
        "text": "ただし、ただ「おいしそう」に撮るだけでは弱い。"
      },
      {
        "type": "paragraph",
        "text": "このメニューは、なぜこの店らしいのか。"
      },
      {
        "type": "paragraph",
        "text": "どこに手間がかかっているのか。"
      },
      {
        "type": "paragraph",
        "text": "季節のどこを切り取っているのか。"
      },
      {
        "type": "paragraph",
        "text": "そこまで見せると、単なる商品紹介ではなくなります。"
      },
      {
        "type": "heading",
        "text": "2. 居心地・雰囲気型"
      },
      {
        "type": "paragraph",
        "text": "店内の光、席、窓、音、湯気、空間の余白を見せる動画です。"
      },
      {
        "type": "paragraph",
        "text": "これはInstagramと特に相性が良い。"
      },
      {
        "type": "paragraph",
        "text": "なぜなら、保存される動画には「あとで行きたい」と思わせる空気が必要だからです。"
      },
      {
        "type": "paragraph",
        "text": "説明しすぎない方がいい場合もあります。"
      },
      {
        "type": "paragraph",
        "text": "むしろ、少し余白を残す。"
      },
      {
        "type": "paragraph",
        "text": "視聴者が自分の時間を重ねられるようにする。"
      },
      {
        "type": "paragraph",
        "text": "この型は、バズよりも保存に向いています。"
      },
      {
        "type": "heading",
        "text": "3. 店主・スタッフの人物型"
      },
      {
        "type": "paragraph",
        "text": "人を見せる動画です。"
      },
      {
        "type": "paragraph",
        "text": "料理だけを見せるより、作っている人の手や表情や声が少し見えるだけで、店は近くなります。"
      },
      {
        "type": "paragraph",
        "text": "ただし、無理に顔出しをする必要はありません。"
      },
      {
        "type": "paragraph",
        "text": "手元だけでもいい。"
      },
      {
        "type": "paragraph",
        "text": "後ろ姿でもいい。"
      },
      {
        "type": "paragraph",
        "text": "「おはようございます。今日はこの仕込みからです」という声だけでもいい。"
      },
      {
        "type": "paragraph",
        "text": "AI時代には、この人物性がかなり重要になります。"
      },
      {
        "type": "paragraph",
        "text": "なぜなら、人が本当に見たいのは、完璧な広告ではなく、誰がやっている店なのかだからです。"
      },
      {
        "type": "heading",
        "text": "4. 仕込み・舞台裏型"
      },
      {
        "type": "paragraph",
        "text": "開店前、仕込み中、準備中、閉店後。"
      },
      {
        "type": "paragraph",
        "text": "お客様が普段見ない時間を見せる動画です。"
      },
      {
        "type": "paragraph",
        "text": "これは、小さなお店ほど強い。"
      },
      {
        "type": "paragraph",
        "text": "大手チェーンのように完成された映像ではなく、店主の毎日の積み重ねが見えるからです。"
      },
      {
        "type": "paragraph",
        "text": "パンを並べる。"
      },
      {
        "type": "paragraph",
        "text": "スープを火にかける。"
      },
      {
        "type": "paragraph",
        "text": "テーブルを拭く。"
      },
      {
        "type": "paragraph",
        "text": "花を置く。"
      },
      {
        "type": "paragraph",
        "text": "看板を出す。"
      },
      {
        "type": "paragraph",
        "text": "こういう何気ない動作が、「ちゃんとしている店だな」という信頼になります。"
      },
      {
        "type": "heading",
        "text": "5. 地域・風景・文化型"
      },
      {
        "type": "paragraph",
        "text": "店だけでなく、地域を見せる動画です。"
      },
      {
        "type": "paragraph",
        "text": "那須では、この型の重要性を強く感じました。"
      },
      {
        "type": "paragraph",
        "text": "お店は地域から切り離されて存在しているわけではありません。"
      },
      {
        "type": "paragraph",
        "text": "道、山、風、季節、観光の流れ、地元の人の生活。"
      },
      {
        "type": "paragraph",
        "text": "それらが店の文脈になります。"
      },
      {
        "type": "paragraph",
        "text": "地方のお店は、地域の物語を借景にしています。"
      },
      {
        "type": "paragraph",
        "text": "だから、店だけを撮るより、その店がある地域の空気も一緒に撮った方がいい。"
      },
      {
        "type": "heading",
        "text": "6. 共感・挑戦型"
      },
      {
        "type": "paragraph",
        "text": "店主の挑戦、迷い、改善、日々の小さな努力を見せる動画です。"
      },
      {
        "type": "paragraph",
        "text": "これは少し勇気がいります。"
      },
      {
        "type": "paragraph",
        "text": "完璧な店として見せるのではなく、続けている人として見せるからです。"
      },
      {
        "type": "paragraph",
        "text": "新メニューを試作している。"
      },
      {
        "type": "paragraph",
        "text": "うまくいかなかった。"
      },
      {
        "type": "paragraph",
        "text": "雨の日でお客様が少なかった。"
      },
      {
        "type": "paragraph",
        "text": "でも明日も仕込む。"
      },
      {
        "type": "paragraph",
        "text": "こういう動画は、単なる宣伝ではなく、応援したい気持ちを生みます。"
      },
      {
        "type": "heading",
        "text": "7. テロップ・無言型"
      },
      {
        "type": "paragraph",
        "text": "なすぱらTVで試していて、かなり可能性を感じたのが、無言とテロップの組み合わせです。"
      },
      {
        "type": "paragraph",
        "text": "話しすぎない。"
      },
      {
        "type": "paragraph",
        "text": "説明しすぎない。"
      },
      {
        "type": "paragraph",
        "text": "短い言葉だけ置く。"
      },
      {
        "type": "paragraph",
        "text": "映像の空気を邪魔しない。"
      },
      {
        "type": "paragraph",
        "text": "たとえば、静かなカフェの動画に、長いナレーションはいらない場合があります。"
      },
      {
        "type": "paragraph",
        "text": "「朝の仕込み」"
      },
      {
        "type": "paragraph",
        "text": "「雨の日だけの静けさ」"
      },
      {
        "type": "paragraph",
        "text": "「この席に座ると、少し時間が戻る」"
      },
      {
        "type": "paragraph",
        "text": "それくらいの言葉で十分なことがあります。"
      },
      {
        "type": "paragraph",
        "text": "AI時代には、言葉を足しすぎない勇気も必要です。"
      },
      {
        "type": "heading",
        "text": "さらに広げる「黄金の16パターン」"
      },
      {
        "type": "paragraph",
        "text": "60日間の観測を経て、私は那須地域の店舗が自走で動画集客するための型を、最終的に「黄金の16パターン」として整理しました。"
      },
      {
        "type": "paragraph",
        "text": "厳密に言うと、実務上は17番目の「重複視聴・コアファン育成型」まで考えています。"
      },
      {
        "type": "paragraph",
        "text": "ただ、まずは16パターンとして理解すると使いやすい。"
      },
      {
        "type": "paragraph",
        "text": "以下は、その実務整理です。"
      },
      {
        "type": "heading",
        "text": "1. グルメ・商品紹介型"
      },
      {
        "type": "paragraph",
        "text": "料理、商品、メニューの魅力を伝える基本型。"
      },
      {
        "type": "paragraph",
        "text": "ただし、スペックではなく「食べたい感情」を起こすことが目的です。"
      },
      {
        "type": "heading",
        "text": "2. 居心地よさ・雰囲気型"
      },
      {
        "type": "paragraph",
        "text": "空間、光、音、席、窓、余白を見せる型。"
      },
      {
        "type": "paragraph",
        "text": "Instagramの保存行動と相性が良い。"
      },
      {
        "type": "heading",
        "text": "3. 店主・スタッフの人物・物語型"
      },
      {
        "type": "paragraph",
        "text": "誰がやっている店なのかを伝える型。"
      },
      {
        "type": "paragraph",
        "text": "信頼と親近感を作ります。"
      },
      {
        "type": "heading",
        "text": "4. 個人の挑戦・共感型"
      },
      {
        "type": "paragraph",
        "text": "店主やスタッフの挑戦、改善、迷い、日々の努力を見せる型。"
      },
      {
        "type": "paragraph",
        "text": "応援したい気持ちを育てます。"
      },
      {
        "type": "heading",
        "text": "5. 街・地域の風景・文化型"
      },
      {
        "type": "paragraph",
        "text": "地域の景色や文化と店をつなぐ型。"
      },
      {
        "type": "paragraph",
        "text": "地方店では特に重要です。"
      },
      {
        "type": "heading",
        "text": "6. ビフォー・アフター・経過型"
      },
      {
        "type": "paragraph",
        "text": "仕込み前後、開店前後、改装前後、メニュー開発の変化を見せる型。"
      },
      {
        "type": "paragraph",
        "text": "変化があると、人は見続けやすくなります。"
      },
      {
        "type": "heading",
        "text": "7. テロップ系"
      },
      {
        "type": "paragraph",
        "text": "短い言葉と映像で伝える型。"
      },
      {
        "type": "paragraph",
        "text": "音なし視聴にも強く、静かな世界観を壊しにくい。"
      },
      {
        "type": "heading",
        "text": "8. 比較・Q&A型"
      },
      {
        "type": "paragraph",
        "text": "「初めてでも入りやすいですか」「駐車場はありますか」「予約は必要ですか」など、不安に答える型。"
      },
      {
        "type": "paragraph",
        "text": "YouTubeや検索導線と相性が良い。"
      },
      {
        "type": "heading",
        "text": "9. 季節・トレンド型"
      },
      {
        "type": "paragraph",
        "text": "春のメニュー、夏の冷たい飲み物、秋の栗、冬の温かいスープなど、季節と結びつける型。"
      },
      {
        "type": "paragraph",
        "text": "地域性が出やすい。"
      },
      {
        "type": "heading",
        "text": "10. 地域住民の日常利用型"
      },
      {
        "type": "paragraph",
        "text": "観光客だけではなく、地元の人に向けた型。"
      },
      {
        "type": "paragraph",
        "text": "「平日のランチ」「仕事帰り」「子ども連れ」「一人で落ち着ける」など、日常導線を作ります。"
      },
      {
        "type": "heading",
        "text": "11. 地域貢献・未来共創型"
      },
      {
        "type": "paragraph",
        "text": "地元食材、地域イベント、農家、商店街、学校、地域活動とつなぐ型。"
      },
      {
        "type": "paragraph",
        "text": "店が地域の一部であることを伝えます。"
      },
      {
        "type": "heading",
        "text": "12. インバウンド・多言語利便性型"
      },
      {
        "type": "paragraph",
        "text": "英語メニュー、アクセス、支払い方法、駐車場、注文方法を伝える型。"
      },
      {
        "type": "paragraph",
        "text": "海外のお客様の不安を減らします。"
      },
      {
        "type": "heading",
        "text": "13. インバウンド・文化体験特化型"
      },
      {
        "type": "paragraph",
        "text": "日本らしさ、地域らしさ、静けさ、手仕事、季節感を伝える型。"
      },
      {
        "type": "paragraph",
        "text": "単なる便利情報ではなく、文化体験として見せます。"
      },
      {
        "type": "heading",
        "text": "14. UGC創出・ユーザー巻き込み型"
      },
      {
        "type": "paragraph",
        "text": "お客様が撮りたくなる場所、投稿したくなるメニュー、参加したくなる企画を作る型。"
      },
      {
        "type": "paragraph",
        "text": "店からの発信だけでなく、お客様の発信を生みます。"
      },
      {
        "type": "heading",
        "text": "15. 意思決定支援・不安解消型"
      },
      {
        "type": "paragraph",
        "text": "料金、混雑、駐車場、子連れ、予約、アレルギー、支払い方法など、来店前の不安を消す型。"
      },
      {
        "type": "paragraph",
        "text": "Plan行動に強く関係します。"
      },
      {
        "type": "heading",
        "text": "16. 進捗感・緊急性訴求型"
      },
      {
        "type": "paragraph",
        "text": "「今週だけ」「残りわずか」「今日仕込みました」「季節限定」など、行動する理由を作る型。"
      },
      {
        "type": "paragraph",
        "text": "ただし、煽りすぎると世界観を壊します。"
      },
      {
        "type": "heading",
        "text": "17. 重複視聴・コアファン育成型"
      },
      {
        "type": "paragraph",
        "text": "これは16パターンの外側に置いてもいい、特別な型です。"
      },
      {
        "type": "paragraph",
        "text": "何度も見たくなる動画。"
      },
      {
        "type": "paragraph",
        "text": "毎週見たくなる動画。"
      },
      {
        "type": "paragraph",
        "text": "店のリズムそのものを感じる動画。"
      },
      {
        "type": "paragraph",
        "text": "派手ではないけれど、常連さんや未来のファンが繰り返し見る動画です。"
      },
      {
        "type": "paragraph",
        "text": "私は、最終的にはこの型がとても大切になると思っています。"
      },
      {
        "type": "heading",
        "text": "すべての動画にバズを求めない"
      },
      {
        "type": "paragraph",
        "text": "この16パターンを使うときに大切なのは、すべての動画にバズを求めないことです。"
      },
      {
        "type": "paragraph",
        "text": "グルメ動画は伸びやすいかもしれません。"
      },
      {
        "type": "paragraph",
        "text": "TikTokでは衝動が起きやすいかもしれません。"
      },
      {
        "type": "paragraph",
        "text": "しかし、店主の仕込み動画や、地域の風景動画や、Q&A動画は、必ずしも大きく伸びるとは限りません。"
      },
      {
        "type": "paragraph",
        "text": "それでも必要です。"
      },
      {
        "type": "paragraph",
        "text": "なぜなら、動画にはそれぞれ役割があるからです。"
      },
      {
        "type": "paragraph",
        "text": "保存される動画。"
      },
      {
        "type": "paragraph",
        "text": "検討される動画。"
      },
      {
        "type": "paragraph",
        "text": "安心される動画。"
      },
      {
        "type": "paragraph",
        "text": "信頼される動画。"
      },
      {
        "type": "paragraph",
        "text": "応援される動画。"
      },
      {
        "type": "paragraph",
        "text": "思い出される動画。"
      },
      {
        "type": "paragraph",
        "text": "来店直前に背中を押す動画。"
      },
      {
        "type": "paragraph",
        "text": "この役割を分けずに、全部を再生数だけで評価すると、店のSNSは壊れていきます。"
      },
      {
        "type": "heading",
        "text": "現場でまずやるべきこと"
      },
      {
        "type": "paragraph",
        "text": "では、実際のお店は何から始めればいいのでしょうか。"
      },
      {
        "type": "paragraph",
        "text": "私は、最初の一ヶ月は次の7本を撮るだけでいいと思います。"
      },
      {
        "type": "paragraph",
        "text": "1本目。店の外観と入口。"
      },
      {
        "type": "paragraph",
        "text": "2本目。いちばん代表的な商品。"
      },
      {
        "type": "paragraph",
        "text": "3本目。開店前の仕込み。"
      },
      {
        "type": "paragraph",
        "text": "4本目。店主またはスタッフの手元。"
      },
      {
        "type": "paragraph",
        "text": "5本目。店内の一番気持ちいい席。"
      },
      {
        "type": "paragraph",
        "text": "6本目。よく聞かれる質問への答え。"
      },
      {
        "type": "paragraph",
        "text": "7本目。地域の風景と店の関係。"
      },
      {
        "type": "paragraph",
        "text": "この7本を撮れば、その店が何者なのか、かなり見えてきます。"
      },
      {
        "type": "paragraph",
        "text": "逆に言えば、この7本を撮っても何も伝わらないなら、動画以前に、店の世界観や言葉の整理が必要です。"
      },
      {
        "type": "paragraph",
        "text": "この段階で大事なのは、完璧な編集ではありません。"
      },
      {
        "type": "paragraph",
        "text": "自分の店の何を見せるべきかを、店主自身が理解することです。"
      },
      {
        "type": "paragraph",
        "text": "動画を撮ることは、店を見直すことでもあります。"
      },
      {
        "type": "heading",
        "text": "AIは補助者であって、店主の代わりではない"
      },
      {
        "type": "paragraph",
        "text": "AIは大いに使えばいいと思います。"
      },
      {
        "type": "paragraph",
        "text": "キャプションの下書き。"
      },
      {
        "type": "paragraph",
        "text": "テロップ案。"
      },
      {
        "type": "paragraph",
        "text": "投稿スケジュール。"
      },
      {
        "type": "paragraph",
        "text": "英語メニュー。"
      },
      {
        "type": "paragraph",
        "text": "口コミ返信。"
      },
      {
        "type": "paragraph",
        "text": "動画タイトル。"
      },
      {
        "type": "paragraph",
        "text": "Q&Aの整理。"
      },
      {
        "type": "paragraph",
        "text": "これらはAIが得意です。"
      },
      {
        "type": "paragraph",
        "text": "しかし、AIに任せてはいけない部分があります。"
      },
      {
        "type": "paragraph",
        "text": "何を大切にしている店なのか。"
      },
      {
        "type": "paragraph",
        "text": "どんな人に来てほしいのか。"
      },
      {
        "type": "paragraph",
        "text": "どの空気を壊したくないのか。"
      },
      {
        "type": "paragraph",
        "text": "どの常連さんに支えられているのか。"
      },
      {
        "type": "paragraph",
        "text": "どんな地域の中で続けているのか。"
      },
      {
        "type": "paragraph",
        "text": "ここは、店主自身が持っているものです。"
      },
      {
        "type": "paragraph",
        "text": "AIはそれを整えることはできます。"
      },
      {
        "type": "paragraph",
        "text": "しかし、何もないところから本物の世界観を作ることはできません。"
      },
      {
        "type": "paragraph",
        "text": "だから、AI時代の小さなお店の武器は、AIそのものではありません。"
      },
      {
        "type": "paragraph",
        "text": "AIを使って、自分たちの固有性を見つけ直す力です。"
      },
      {
        "type": "heading",
        "text": "この章の結論"
      },
      {
        "type": "paragraph",
        "text": "AI時代に、小さなお店が武器にすべきものは、派手な編集技術ではありません。"
      },
      {
        "type": "paragraph",
        "text": "大量投稿でもありません。"
      },
      {
        "type": "paragraph",
        "text": "バズ狙いの奇抜さでもありません。"
      },
      {
        "type": "paragraph",
        "text": "その店にしかない固有名詞です。"
      },
      {
        "type": "paragraph",
        "text": "その店にしかない時間です。"
      },
      {
        "type": "paragraph",
        "text": "その店にしかない人です。"
      },
      {
        "type": "paragraph",
        "text": "その店にしかない地域との関係です。"
      },
      {
        "type": "paragraph",
        "text": "そして、それらを無理なく動画にして、Instagram、YouTube、TikTokへ役割ごとに届けていくことです。"
      },
      {
        "type": "paragraph",
        "text": "次の章では、いよいよ「バズ動画」と「ファン動画」の違いを整理します。"
      },
      {
        "type": "paragraph",
        "text": "この違いを理解しないままSNSを始めると、多くのお店は数字に振り回され、疲れてしまいます。"
      }
    ]
  },
  {
    "slug": "chapter-4",
    "navLabel": "第4章",
    "title": "第4章　バズ動画とファン動画は、まったく別物である",
    "description": "SNS動画を始めると、多くの人が最初に気にするのは再生数です。",
    "keywords": [
      "SNS動画",
      "AI時代",
      "Save Plan Impulse",
      "なすぱらTV",
      "GEO",
      "地域店舗",
      "Instagram",
      "YouTube Shorts",
      "TikTok"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "SNS動画を始めると、多くの人が最初に気にするのは再生数です。"
      },
      {
        "type": "paragraph",
        "text": "何回見られたのか。"
      },
      {
        "type": "paragraph",
        "text": "どれだけ「いいね」がついたのか。"
      },
      {
        "type": "paragraph",
        "text": "フォロワーは増えたのか。"
      },
      {
        "type": "paragraph",
        "text": "誰かにシェアされたのか。"
      },
      {
        "type": "paragraph",
        "text": "数字はわかりやすい。"
      },
      {
        "type": "paragraph",
        "text": "そして、数字が伸びると嬉しい。"
      },
      {
        "type": "paragraph",
        "text": "これは自然なことです。"
      },
      {
        "type": "paragraph",
        "text": "私自身も、動画を投稿している以上、数字を見ないわけではありません。"
      },
      {
        "type": "paragraph",
        "text": "伸びた動画があれば、やはり理由を考えます。"
      },
      {
        "type": "paragraph",
        "text": "なぜこの動画が見られたのか。"
      },
      {
        "type": "paragraph",
        "text": "なぜ保存されたのか。"
      },
      {
        "type": "paragraph",
        "text": "なぜコメントが来たのか。"
      },
      {
        "type": "paragraph",
        "text": "ただ、900本以上動画を作ってきて、私はかなり強く思うようになりました。"
      },
      {
        "type": "paragraph",
        "text": "小さなお店にとって、バズ動画とファン動画は、まったく別物です。"
      },
      {
        "type": "paragraph",
        "text": "この違いを理解しないままSNSを運用すると、お店はすぐに疲れてしまいます。"
      },
      {
        "type": "heading",
        "text": "バズは悪ではない"
      },
      {
        "type": "paragraph",
        "text": "最初に誤解のないように書いておきます。"
      },
      {
        "type": "paragraph",
        "text": "バズは悪ではありません。"
      },
      {
        "type": "paragraph",
        "text": "動画が多くの人に届くことは、チャンスです。"
      },
      {
        "type": "paragraph",
        "text": "知らなかった人に知ってもらえる。"
      },
      {
        "type": "paragraph",
        "text": "遠くの人にも届く。"
      },
      {
        "type": "paragraph",
        "text": "新しい層が入ってくる。"
      },
      {
        "type": "paragraph",
        "text": "話題になる。"
      },
      {
        "type": "paragraph",
        "text": "取材や問い合わせにつながることもある。"
      },
      {
        "type": "paragraph",
        "text": "特にTikTokでは、思いがけない動画が一気に広がることがあります。"
      },
      {
        "type": "paragraph",
        "text": "なすぱらTVでも、ある動画が想定以上に伸びたことがありました。"
      },
      {
        "type": "paragraph",
        "text": "それは確かに、新しい入口になります。"
      },
      {
        "type": "paragraph",
        "text": "問題は、バズそのものではありません。"
      },
      {
        "type": "paragraph",
        "text": "問題は、バズを目的にしてしまうことです。"
      },
      {
        "type": "paragraph",
        "text": "バズを目的にすると、動画の判断基準が「広く刺さるかどうか」になります。"
      },
      {
        "type": "paragraph",
        "text": "もっと強い言葉にしよう。"
      },
      {
        "type": "paragraph",
        "text": "もっと派手にしよう。"
      },
      {
        "type": "paragraph",
        "text": "もっと驚かせよう。"
      },
      {
        "type": "paragraph",
        "text": "もっと極端にしよう。"
      },
      {
        "type": "paragraph",
        "text": "もっと短く、もっと速く、もっと刺激的にしよう。"
      },
      {
        "type": "paragraph",
        "text": "そうしているうちに、店の空気が薄くなることがあります。"
      },
      {
        "type": "paragraph",
        "text": "本来の常連さんが好きだった静けさが消える。"
      },
      {
        "type": "paragraph",
        "text": "店主が大事にしていた丁寧さが見えにくくなる。"
      },
      {
        "type": "paragraph",
        "text": "その店らしさより、SNSで伸びそうな形が優先される。"
      },
      {
        "type": "paragraph",
        "text": "この状態は危険です。"
      },
      {
        "type": "paragraph",
        "text": "バズによって一時的に知られても、店の世界観が崩れれば、長く続く関係にはなりません。"
      },
      {
        "type": "heading",
        "text": "ファン動画とは何か"
      },
      {
        "type": "paragraph",
        "text": "ファン動画とは、すでに来てくれた人、これから来る可能性のある人、店の空気に合う人に向けて、「また行きたい」「いつか行きたい」「この店を覚えておきたい」という感情を育てる動画です。"
      },
      {
        "type": "paragraph",
        "text": "再生数は、必ずしも大きくなくていい。"
      },
      {
        "type": "paragraph",
        "text": "数百回でもいい。"
      },
      {
        "type": "paragraph",
        "text": "数千回でも十分なことがあります。"
      },
      {
        "type": "paragraph",
        "text": "大切なのは、その動画を見た人が、店との関係を少し深めることです。"
      },
      {
        "type": "paragraph",
        "text": "たとえば、常連さんが見て、"
      },
      {
        "type": "paragraph",
        "text": "「あ、今週もちゃんとやっている」"
      },
      {
        "type": "paragraph",
        "text": "と思う。"
      },
      {
        "type": "paragraph",
        "text": "一度来たことがある人が見て、"
      },
      {
        "type": "paragraph",
        "text": "「また行きたいな」"
      },
      {
        "type": "paragraph",
        "text": "と思う。"
      },
      {
        "type": "paragraph",
        "text": "まだ来たことがない人が見て、"
      },
      {
        "type": "paragraph",
        "text": "「ここ、なんだか自分に合いそうだ」"
      },
      {
        "type": "paragraph",
        "text": "と思う。"
      },
      {
        "type": "paragraph",
        "text": "旅行の予定を立てている人が見て、"
      },
      {
        "type": "paragraph",
        "text": "「保存しておこう」"
      },
      {
        "type": "paragraph",
        "text": "と思う。"
      },
      {
        "type": "paragraph",
        "text": "これがファン動画の力です。"
      },
      {
        "type": "paragraph",
        "text": "バズ動画は、一瞬で広がる波です。"
      },
      {
        "type": "paragraph",
        "text": "ファン動画は、細く長く続く川です。"
      },
      {
        "type": "paragraph",
        "text": "小さなお店にとって大事なのは、この細い流れを切らさないことです。"
      },
      {
        "type": "heading",
        "text": "バズ動画とファン動画の違い"
      },
      {
        "type": "paragraph",
        "text": "整理すると、バズ動画とファン動画は、目的も作り方も違います。"
      },
      {
        "type": "paragraph",
        "text": "| 観点 | バズ動画 | ファン動画 |"
      },
      {
        "type": "paragraph",
        "text": "| --- | --- | --- |"
      },
      {
        "type": "paragraph",
        "text": "| 目的 | 大勢の知らない人に届く | 本来つながるべき人との関係を育てる |"
      },
      {
        "type": "paragraph",
        "text": "| 主な指標 | 再生数・シェア数・フォロワー増 | 保存数・プロフィールアクセス・再訪・口コミ |"
      },
      {
        "type": "paragraph",
        "text": "| 内容 | 意外性・衝撃・トレンド・強いフック | 日常・人柄・仕込み・空気・こだわり |"
      },
      {
        "type": "paragraph",
        "text": "| 時間軸 | 一瞬で伸びる | 少しずつ積み重なる |"
      },
      {
        "type": "paragraph",
        "text": "| 向いている媒体 | TikTokと相性が良い | Instagram・YouTubeと相性が良い |"
      },
      {
        "type": "paragraph",
        "text": "| リスク | 店の世界観が崩れることがある | 短期的には数字が小さく見える |"
      },
      {
        "type": "paragraph",
        "text": "| 本質 | 認知の爆発 | 関係の蓄積 |"
      },
      {
        "type": "paragraph",
        "text": "この表で一番大事なのは、優劣ではありません。"
      },
      {
        "type": "paragraph",
        "text": "役割が違うということです。"
      },
      {
        "type": "paragraph",
        "text": "バズ動画も必要です。"
      },
      {
        "type": "paragraph",
        "text": "ただし、バズだけでは店は育ちません。"
      },
      {
        "type": "paragraph",
        "text": "ファン動画も必要です。"
      },
      {
        "type": "paragraph",
        "text": "ただし、ファン動画だけでは新しい入口が弱くなる場合があります。"
      },
      {
        "type": "paragraph",
        "text": "だからこそ、Instagram、YouTube、TikTokを全部やった方がいいという話になります。"
      },
      {
        "type": "paragraph",
        "text": "媒体ごとに役割が違うからです。"
      },
      {
        "type": "heading",
        "text": "Instagramは「保存される空気」を育てる"
      },
      {
        "type": "paragraph",
        "text": "Instagramで大事なのは、保存です。"
      },
      {
        "type": "paragraph",
        "text": "もちろん「いいね」も嬉しい。"
      },
      {
        "type": "paragraph",
        "text": "フォロワーも大事です。"
      },
      {
        "type": "paragraph",
        "text": "しかし、飲食店や地域店舗にとって、保存はかなり重要な指標です。"
      },
      {
        "type": "paragraph",
        "text": "保存とは、「今すぐではないけれど、後で見返したい」という意思です。"
      },
      {
        "type": "paragraph",
        "text": "それは、未来の来店予約のようなものです。"
      },
      {
        "type": "paragraph",
        "text": "「今度那須に行くときに寄りたい」"
      },
      {
        "type": "paragraph",
        "text": "「友達と行く候補に入れたい」"
      },
      {
        "type": "paragraph",
        "text": "「この雰囲気、覚えておきたい」"
      },
      {
        "type": "paragraph",
        "text": "そういう感情が保存につながります。"
      },
      {
        "type": "paragraph",
        "text": "なすぱらTVの観測でも、InstagramではSave行動が強く出ました。"
      },
      {
        "type": "paragraph",
        "text": "特に、世界観が正確に伝わる動画、空気感がある動画、行く前の想像がしやすい動画は保存されやすい。"
      },
      {
        "type": "paragraph",
        "text": "だからInstagramでは、無理に大声で売り込まない方がいい場合があります。"
      },
      {
        "type": "paragraph",
        "text": "説明しすぎない。"
      },
      {
        "type": "paragraph",
        "text": "余白を残す。"
      },
      {
        "type": "paragraph",
        "text": "空間を見せる。"
      },
      {
        "type": "paragraph",
        "text": "席を見せる。"
      },
      {
        "type": "paragraph",
        "text": "光を見せる。"
      },
      {
        "type": "paragraph",
        "text": "料理だけでなく、その料理を食べる時間を見せる。"
      },
      {
        "type": "paragraph",
        "text": "Instagramは、店の空気を保存してもらう場所です。"
      },
      {
        "type": "heading",
        "text": "YouTubeは「検討される安心」を育てる"
      },
      {
        "type": "paragraph",
        "text": "YouTubeは、Instagramとは違います。"
      },
      {
        "type": "paragraph",
        "text": "YouTubeは検索されます。"
      },
      {
        "type": "paragraph",
        "text": "見返されます。"
      },
      {
        "type": "paragraph",
        "text": "比較されます。"
      },
      {
        "type": "paragraph",
        "text": "少し長く説明できます。"
      },
      {
        "type": "paragraph",
        "text": "特に地方のお店や観光地では、YouTubeの役割はかなり重要です。"
      },
      {
        "type": "paragraph",
        "text": "なぜなら、地方では移動の不安があるからです。"
      },
      {
        "type": "paragraph",
        "text": "駐車場はあるのか。"
      },
      {
        "type": "paragraph",
        "text": "子ども連れでも大丈夫か。"
      },
      {
        "type": "paragraph",
        "text": "混雑しているのか。"
      },
      {
        "type": "paragraph",
        "text": "予約は必要か。"
      },
      {
        "type": "paragraph",
        "text": "駅から遠いのか。"
      },
      {
        "type": "paragraph",
        "text": "雨の日でも行けるのか。"
      },
      {
        "type": "paragraph",
        "text": "近くに他のスポットはあるのか。"
      },
      {
        "type": "paragraph",
        "text": "こうした不安を解消するのは、短い雰囲気動画だけでは難しい。"
      },
      {
        "type": "paragraph",
        "text": "YouTubeは、Planの媒体です。"
      },
      {
        "type": "paragraph",
        "text": "つまり、実際に行く前に調べる場所です。"
      },
      {
        "type": "paragraph",
        "text": "なすぱらTVの観測でも、YouTubeではルート、距離、比較、計画に関する反応が出やすい傾向がありました。"
      },
      {
        "type": "paragraph",
        "text": "だからYouTubeでは、ファン動画でありながら、少し実用情報を入れていい。"
      },
      {
        "type": "paragraph",
        "text": "外観。"
      },
      {
        "type": "paragraph",
        "text": "駐車場。"
      },
      {
        "type": "paragraph",
        "text": "入口。"
      },
      {
        "type": "paragraph",
        "text": "店内の席。"
      },
      {
        "type": "paragraph",
        "text": "注文方法。"
      },
      {
        "type": "paragraph",
        "text": "おすすめの時間帯。"
      },
      {
        "type": "paragraph",
        "text": "周辺スポット。"
      },
      {
        "type": "paragraph",
        "text": "店主の考え。"
      },
      {
        "type": "paragraph",
        "text": "こうした情報が、来店前の安心につながります。"
      },
      {
        "type": "paragraph",
        "text": "YouTubeは、店の信頼を育てる場所です。"
      },
      {
        "type": "heading",
        "text": "TikTokは「入口」と「衝動」を作る"
      },
      {
        "type": "paragraph",
        "text": "TikTokは、偶然の出会いが強い媒体です。"
      },
      {
        "type": "paragraph",
        "text": "見ようと思って検索したわけではない。"
      },
      {
        "type": "paragraph",
        "text": "でも流れてきた。"
      },
      {
        "type": "paragraph",
        "text": "なんとなく見た。"
      },
      {
        "type": "paragraph",
        "text": "気になった。"
      },
      {
        "type": "paragraph",
        "text": "行きたくなった。"
      },
      {
        "type": "paragraph",
        "text": "この偶然性が、TikTokの強さです。"
      },
      {
        "type": "paragraph",
        "text": "なすぱらTVの観測でも、TikTokではImpulse、つまり衝動的な反応が強く出ました。"
      },
      {
        "type": "paragraph",
        "text": "「今から行きます」"
      },
      {
        "type": "paragraph",
        "text": "「さっき行ってきました」"
      },
      {
        "type": "paragraph",
        "text": "「これどこですか」"
      },
      {
        "type": "paragraph",
        "text": "「近いから行ってみたい」"
      },
      {
        "type": "paragraph",
        "text": "そういう反応です。"
      },
      {
        "type": "paragraph",
        "text": "ただし、TikTokでバズったからといって、そのまま常連化するとは限りません。"
      },
      {
        "type": "paragraph",
        "text": "TikTokは入口です。"
      },
      {
        "type": "paragraph",
        "text": "衝動を作る媒体です。"
      },
      {
        "type": "paragraph",
        "text": "だからこそ、TikTokで広がった人を、Instagramの保存やYouTubeの検討へつなげる必要があります。"
      },
      {
        "type": "paragraph",
        "text": "TikTokだけで終わらせない。"
      },
      {
        "type": "paragraph",
        "text": "Instagramで覚えてもらう。"
      },
      {
        "type": "paragraph",
        "text": "YouTubeで安心してもらう。"
      },
      {
        "type": "paragraph",
        "text": "Googleマップで実際に来てもらう。"
      },
      {
        "type": "paragraph",
        "text": "この流れが大切です。"
      },
      {
        "type": "heading",
        "text": "バズの後に、何が残るか"
      },
      {
        "type": "paragraph",
        "text": "動画がバズったときに、私はいつも考えます。"
      },
      {
        "type": "paragraph",
        "text": "このバズの後に、何が残るのか。"
      },
      {
        "type": "paragraph",
        "text": "フォロワーが増えるかもしれない。"
      },
      {
        "type": "paragraph",
        "text": "プロフィールアクセスが増えるかもしれない。"
      },
      {
        "type": "paragraph",
        "text": "一時的にお客様が増えるかもしれない。"
      },
      {
        "type": "paragraph",
        "text": "それはありがたいことです。"
      },
      {
        "type": "paragraph",
        "text": "しかし、それだけで終わるなら、波が過ぎた後に何も残りません。"
      },
      {
        "type": "paragraph",
        "text": "大切なのは、バズの後に、店の理解が深まる導線があるかです。"
      },
      {
        "type": "paragraph",
        "text": "Instagramのプロフィールは整っているか。"
      },
      {
        "type": "paragraph",
        "text": "Googleマップの情報は正しいか。"
      },
      {
        "type": "paragraph",
        "text": "YouTubeに詳しい動画があるか。"
      },
      {
        "type": "paragraph",
        "text": "公式サイトに店の思想やメニューが書かれているか。"
      },
      {
        "type": "paragraph",
        "text": "FAQで不安に答えているか。"
      },
      {
        "type": "paragraph",
        "text": "口コミへの返信があるか。"
      },
      {
        "type": "paragraph",
        "text": "バズ動画は入口です。"
      },
      {
        "type": "paragraph",
        "text": "入口の先に、店を理解できる道がなければ、人は通り過ぎてしまいます。"
      },
      {
        "type": "paragraph",
        "text": "これは、GEOの考え方にもつながります。"
      },
      {
        "type": "paragraph",
        "text": "AI時代には、動画だけでなく、地図、口コミ、公式サイト、SNS、FAQ、写真、記事が横断的に読まれる。"
      },
      {
        "type": "paragraph",
        "text": "だから、バズの後に何が残るかは、ますます重要になります。"
      },
      {
        "type": "heading",
        "text": "ファン動画は、店の体温を保つ"
      },
      {
        "type": "paragraph",
        "text": "ファン動画は、派手ではありません。"
      },
      {
        "type": "paragraph",
        "text": "毎週の仕込み。"
      },
      {
        "type": "paragraph",
        "text": "雨の日の店内。"
      },
      {
        "type": "paragraph",
        "text": "季節のメニュー。"
      },
      {
        "type": "paragraph",
        "text": "店主の一言。"
      },
      {
        "type": "paragraph",
        "text": "常連さんに向けたお礼。"
      },
      {
        "type": "paragraph",
        "text": "新しい花を飾ったこと。"
      },
      {
        "type": "paragraph",
        "text": "小さな改善。"
      },
      {
        "type": "paragraph",
        "text": "こうした動画は、爆発的には伸びないかもしれません。"
      },
      {
        "type": "paragraph",
        "text": "けれども、店の体温を保ちます。"
      },
      {
        "type": "paragraph",
        "text": "SNSは、放っておくと冷たくなります。"
      },
      {
        "type": "paragraph",
        "text": "投稿が止まると、人は少しずつ忘れていく。"
      },
      {
        "type": "paragraph",
        "text": "しかし、週に一本でも、その店らしい動画が流れてくると、"
      },
      {
        "type": "paragraph",
        "text": "「あ、まだちゃんとやっている」"
      },
      {
        "type": "paragraph",
        "text": "「今度行こう」"
      },
      {
        "type": "paragraph",
        "text": "「この季節になったらまた行きたい」"
      },
      {
        "type": "paragraph",
        "text": "と思い出してもらえます。"
      },
      {
        "type": "paragraph",
        "text": "ファン動画は、店の存在を静かに灯し続けるものです。"
      },
      {
        "type": "heading",
        "text": "現場では、どちらも必要"
      },
      {
        "type": "paragraph",
        "text": "ここまで読むと、「ではバズ動画はいらないのか」と思うかもしれません。"
      },
      {
        "type": "paragraph",
        "text": "そうではありません。"
      },
      {
        "type": "paragraph",
        "text": "現場では、どちらも必要です。"
      },
      {
        "type": "paragraph",
        "text": "ただし、比率が大事です。"
      },
      {
        "type": "paragraph",
        "text": "小さなお店が毎回バズを狙う必要はありません。"
      },
      {
        "type": "paragraph",
        "text": "むしろ、基本はファン動画です。"
      },
      {
        "type": "paragraph",
        "text": "そのうえで、ときどき入口を広げる動画を作る。"
      },
      {
        "type": "paragraph",
        "text": "私の感覚では、最初のうちは次のような比率で十分です。"
      },
      {
        "type": "paragraph",
        "text": "ファン動画が7割。"
      },
      {
        "type": "paragraph",
        "text": "入口動画が2割。"
      },
      {
        "type": "paragraph",
        "text": "バズ狙いの実験が1割。"
      },
      {
        "type": "paragraph",
        "text": "このくらいでいい。"
      },
      {
        "type": "paragraph",
        "text": "たとえば、"
      },
      {
        "type": "paragraph",
        "text": "毎週の仕込みやメニュー紹介を続ける。"
      },
      {
        "type": "paragraph",
        "text": "月に一度、少し広がりやすい地域ネタや季節ネタを出す。"
      },
      {
        "type": "paragraph",
        "text": "たまに、TikTok向けに短く強いフックの動画を試す。"
      },
      {
        "type": "paragraph",
        "text": "この程度で十分です。"
      },
      {
        "type": "paragraph",
        "text": "大事なのは、店の世界観を壊さない範囲で実験することです。"
      },
      {
        "type": "heading",
        "text": "「伸びた動画」より「残った感情」を見る"
      },
      {
        "type": "paragraph",
        "text": "SNSでは、つい伸びた動画を正解だと思ってしまいます。"
      },
      {
        "type": "paragraph",
        "text": "しかし、小さなお店では、伸びた動画よりも、残った感情を見るべきです。"
      },
      {
        "type": "paragraph",
        "text": "その動画を見た人は、何を感じたのか。"
      },
      {
        "type": "paragraph",
        "text": "保存したのか。"
      },
      {
        "type": "paragraph",
        "text": "プロフィールを見たのか。"
      },
      {
        "type": "paragraph",
        "text": "Googleマップを開いたのか。"
      },
      {
        "type": "paragraph",
        "text": "コメントで質問したのか。"
      },
      {
        "type": "paragraph",
        "text": "店に来たときに「動画見ました」と言ったのか。"
      },
      {
        "type": "paragraph",
        "text": "常連さんが反応したのか。"
      },
      {
        "type": "paragraph",
        "text": "遠くの人が「いつか行きたい」と言ったのか。"
      },
      {
        "type": "paragraph",
        "text": "これらは、単なる再生数よりも重要です。"
      },
      {
        "type": "paragraph",
        "text": "バズは、見られた量です。"
      },
      {
        "type": "paragraph",
        "text": "ファン化は、残った感情です。"
      },
      {
        "type": "paragraph",
        "text": "お店に必要なのは、最終的には後者です。"
      },
      {
        "type": "heading",
        "text": "この章の結論"
      },
      {
        "type": "paragraph",
        "text": "バズ動画とファン動画は、まったく別物です。"
      },
      {
        "type": "paragraph",
        "text": "バズ動画は入口を作ります。"
      },
      {
        "type": "paragraph",
        "text": "ファン動画は関係を育てます。"
      },
      {
        "type": "paragraph",
        "text": "バズ動画は広げます。"
      },
      {
        "type": "paragraph",
        "text": "ファン動画は深めます。"
      },
      {
        "type": "paragraph",
        "text": "バズ動画は一瞬の波です。"
      },
      {
        "type": "paragraph",
        "text": "ファン動画は細く長く流れる川です。"
      },
      {
        "type": "paragraph",
        "text": "小さなお店は、バズを否定する必要はありません。"
      },
      {
        "type": "paragraph",
        "text": "ただし、バズだけを追ってはいけません。"
      },
      {
        "type": "paragraph",
        "text": "自分たちの店に合う人に、店の空気が伝わり、保存され、思い出され、また来てもらう。"
      },
      {
        "type": "paragraph",
        "text": "そのためにSNS動画を使う。"
      },
      {
        "type": "paragraph",
        "text": "これが、AI時代の小さなお店にとって、もっとも健全なSNS動画の考え方だと思います。"
      },
      {
        "type": "paragraph",
        "text": "次の章では、Instagram、YouTube、TikTokをなぜ全部やった方がいいのかを、Save → Plan → Impulse の前段として整理します。"
      }
    ]
  },
  {
    "slug": "chapter-5",
    "navLabel": "第5章",
    "title": "第5章　Instagram・YouTube・TikTokは、全部やった方がいい",
    "description": "小さなお店がSNS動画を始めるとき、よくある考え方があります。",
    "keywords": [
      "SNS動画",
      "AI時代",
      "Save Plan Impulse",
      "なすぱらTV",
      "GEO",
      "地域店舗",
      "Instagram",
      "YouTube Shorts",
      "TikTok"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "三つのSNSは、同じ動画置き場ではない"
      },
      {
        "type": "paragraph",
        "text": "小さなお店がSNS動画を始めるとき、よくある考え方があります。"
      },
      {
        "type": "paragraph",
        "text": "「Instagramだけでいいのではないか」"
      },
      {
        "type": "paragraph",
        "text": "「TikTokは若い人向けだから、うちには関係ないのではないか」"
      },
      {
        "type": "paragraph",
        "text": "「YouTubeは大変そうだから、後回しでいいのではないか」"
      },
      {
        "type": "paragraph",
        "text": "この感覚は、よくわかります。"
      },
      {
        "type": "paragraph",
        "text": "店主は忙しい。"
      },
      {
        "type": "paragraph",
        "text": "仕込みがある。"
      },
      {
        "type": "paragraph",
        "text": "接客がある。"
      },
      {
        "type": "paragraph",
        "text": "掃除がある。"
      },
      {
        "type": "paragraph",
        "text": "スタッフ管理がある。"
      },
      {
        "type": "paragraph",
        "text": "そこにSNS動画まで入ってくる。"
      },
      {
        "type": "paragraph",
        "text": "だから、できればひとつに絞りたい。"
      },
      {
        "type": "paragraph",
        "text": "しかし、なすぱらTVを通して数百本規模で投稿し、YouTube、Instagram、TikTokを並行して観測していくと、三つのSNSは単なる「投稿先の違い」ではないことが見えてきました。"
      },
      {
        "type": "paragraph",
        "text": "三つのSNSは、見ている人が違う。"
      },
      {
        "type": "paragraph",
        "text": "見ている気分が違う。"
      },
      {
        "type": "paragraph",
        "text": "見たあとに起きる行動が違う。"
      },
      {
        "type": "paragraph",
        "text": "そして何より、"
      },
      {
        "type": "paragraph",
        "text": "同じ那須の動画であっても、各プラットフォームで反応する人間の層がはっきり違っていたのです。"
      },
      {
        "type": "paragraph",
        "text": "これは、小さなお店にとって非常に重要です。"
      },
      {
        "type": "paragraph",
        "text": "なぜなら、お店に来る人は一種類ではないからです。"
      },
      {
        "type": "paragraph",
        "text": "今すぐ来る人。"
      },
      {
        "type": "paragraph",
        "text": "いつか行きたい人。"
      },
      {
        "type": "paragraph",
        "text": "旅行前に調べている人。"
      },
      {
        "type": "paragraph",
        "text": "家族旅行の行き先を決める人。"
      },
      {
        "type": "paragraph",
        "text": "カップルで週末の予定を探す人。"
      },
      {
        "type": "paragraph",
        "text": "ひとりで落ち着ける場所を探す人。"
      },
      {
        "type": "paragraph",
        "text": "地元の人。"
      },
      {
        "type": "paragraph",
        "text": "観光客。"
      },
      {
        "type": "paragraph",
        "text": "若い人。"
      },
      {
        "type": "paragraph",
        "text": "購買力のある大人。"
      },
      {
        "type": "paragraph",
        "text": "これらの人たちは、同じSNS上に均等に存在しているわけではありません。"
      },
      {
        "type": "paragraph",
        "text": "だから、小さなお店ほど、ひとつのSNSだけで勝負しない方がいい。"
      },
      {
        "type": "paragraph",
        "text": "ただし、三つを同じように使うのではありません。"
      },
      {
        "type": "paragraph",
        "text": "それぞれの役割を分けるのです。"
      },
      {
        "type": "heading",
        "text": "YouTubeは「検討する人」に届く"
      },
      {
        "type": "paragraph",
        "text": "なすぱらTVの初期25日間の観測では、YouTube Shortsの中心は25歳から44歳の男性で、男性比率は70.7％でした。"
      },
      {
        "type": "paragraph",
        "text": "これは、とても象徴的な数字です。"
      },
      {
        "type": "paragraph",
        "text": "YouTubeは、単に若者が暇つぶしで見る場所ではありません。"
      },
      {
        "type": "paragraph",
        "text": "少なくとも那須地域の観測では、YouTubeは「旅行先を調べる人」「車で行く場所を検討する人」「失敗したくない人」に届きやすい媒体でした。"
      },
      {
        "type": "paragraph",
        "text": "那須は、車移動の地域です。"
      },
      {
        "type": "paragraph",
        "text": "駅前を歩けば次々に店が見つかる都市型観光地ではありません。"
      },
      {
        "type": "paragraph",
        "text": "目的地と目的地の距離がある。"
      },
      {
        "type": "paragraph",
        "text": "駐車場が気になる。"
      },
      {
        "type": "paragraph",
        "text": "道がわかりにくい。"
      },
      {
        "type": "paragraph",
        "text": "お店の外観を事前に見たい。"
      },
      {
        "type": "paragraph",
        "text": "混雑しているのか知りたい。"
      },
      {
        "type": "paragraph",
        "text": "子ども連れでも大丈夫か知りたい。"
      },
      {
        "type": "paragraph",
        "text": "男性が家族旅行やドライブの下調べをしている場合、YouTubeの動画はかなり相性がいい。"
      },
      {
        "type": "paragraph",
        "text": "これは、単なる「再生数」の話ではありません。"
      },
      {
        "type": "paragraph",
        "text": "YouTubeでは、動画を見たあとに、"
      },
      {
        "type": "paragraph",
        "text": "「ここは行けそうだ」"
      },
      {
        "type": "paragraph",
        "text": "「駐車場がありそうだ」"
      },
      {
        "type": "paragraph",
        "text": "「家族を連れて行っても大丈夫そうだ」"
      },
      {
        "type": "paragraph",
        "text": "「思っていたよりちゃんとしている」"
      },
      {
        "type": "paragraph",
        "text": "という安心感が生まれやすい。"
      },
      {
        "type": "paragraph",
        "text": "つまりYouTubeは、Planの媒体です。"
      },
      {
        "type": "paragraph",
        "text": "計画する人に届く。"
      },
      {
        "type": "paragraph",
        "text": "検討している人の不安を減らす。"
      },
      {
        "type": "paragraph",
        "text": "そして、訪問前の最後の確認に使われる。"
      },
      {
        "type": "paragraph",
        "text": "小さなお店がYouTubeを使うなら、派手な演出よりも、実用的な安心感が大切です。"
      },
      {
        "type": "paragraph",
        "text": "外観。"
      },
      {
        "type": "paragraph",
        "text": "入口。"
      },
      {
        "type": "paragraph",
        "text": "駐車場。"
      },
      {
        "type": "paragraph",
        "text": "席の雰囲気。"
      },
      {
        "type": "paragraph",
        "text": "メニューの見え方。"
      },
      {
        "type": "paragraph",
        "text": "注文の流れ。"
      },
      {
        "type": "paragraph",
        "text": "店内の音。"
      },
      {
        "type": "paragraph",
        "text": "実際にどんな人が来ているのか。"
      },
      {
        "type": "paragraph",
        "text": "これらを淡々と見せるだけで、見る人の中に「行けるかもしれない」という判断材料が増えていきます。"
      },
      {
        "type": "paragraph",
        "text": "YouTubeは、動画の中でお店を説明する場所というより、訪問前の不安を消す場所なのです。"
      },
      {
        "type": "heading",
        "text": "Instagramは「保存する人」に届く"
      },
      {
        "type": "paragraph",
        "text": "一方で、Instagramはまったく違う反応を見せました。"
      },
      {
        "type": "paragraph",
        "text": "60日間の観測では、Instagramは25歳から44歳の女性が72.8％と、非常に厚い層を形成しました。"
      },
      {
        "type": "paragraph",
        "text": "那須の場合、この層は旅行計画や週末のお出かけ先を探す層と重なります。"
      },
      {
        "type": "paragraph",
        "text": "特に関東近郊から那須へ来る人たちにとって、Instagramは「いつか行きたい場所」を保存する媒体として機能しました。"
      },
      {
        "type": "paragraph",
        "text": "ここで重要なのは、Instagramは「今すぐ行く」だけではないということです。"
      },
      {
        "type": "paragraph",
        "text": "むしろ、"
      },
      {
        "type": "paragraph",
        "text": "「ここ、よさそう」"
      },
      {
        "type": "paragraph",
        "text": "「今度那須に行くときに寄りたい」"
      },
      {
        "type": "paragraph",
        "text": "「友達に送っておこう」"
      },
      {
        "type": "paragraph",
        "text": "「家族旅行の候補に入れておこう」"
      },
      {
        "type": "paragraph",
        "text": "という、まだ行動になる前の感情を受け止める場所でした。"
      },
      {
        "type": "paragraph",
        "text": "Instagramで強かったのは、説明しすぎる動画ではありません。"
      },
      {
        "type": "paragraph",
        "text": "空気が伝わる動画。"
      },
      {
        "type": "paragraph",
        "text": "光がきれいな動画。"
      },
      {
        "type": "paragraph",
        "text": "料理だけでなく、席や窓や余白が見える動画。"
      },
      {
        "type": "paragraph",
        "text": "お店の世界観が一瞬で伝わる動画。"
      },
      {
        "type": "paragraph",
        "text": "店主のこだわりが押しつけではなく滲む動画。"
      },
      {
        "type": "paragraph",
        "text": "そういう動画が、保存につながりやすかった。"
      },
      {
        "type": "paragraph",
        "text": "保存とは、非常に面白い行動です。"
      },
      {
        "type": "paragraph",
        "text": "いいねは一瞬の反応です。"
      },
      {
        "type": "paragraph",
        "text": "保存は未来の自分へのメモです。"
      },
      {
        "type": "paragraph",
        "text": "「いま行く」とは限らない。"
      },
      {
        "type": "paragraph",
        "text": "しかし、「いつか行きたい」と思ったから保存する。"
      },
      {
        "type": "paragraph",
        "text": "この「いつか行きたい」が、小さなお店にとっては非常に大事です。"
      },
      {
        "type": "paragraph",
        "text": "なぜなら地域店舗は、毎日大量の新規客を集めるビジネスではないからです。"
      },
      {
        "type": "paragraph",
        "text": "思い出されること。"
      },
      {
        "type": "paragraph",
        "text": "候補に残ること。"
      },
      {
        "type": "paragraph",
        "text": "旅程に入ること。"
      },
      {
        "type": "paragraph",
        "text": "誰かに送られること。"
      },
      {
        "type": "paragraph",
        "text": "この積み重ねが、来店につながります。"
      },
      {
        "type": "paragraph",
        "text": "Instagramは、Saveの媒体です。"
      },
      {
        "type": "paragraph",
        "text": "保存される場所。"
      },
      {
        "type": "paragraph",
        "text": "世界観が未来の行動として残る場所。"
      },
      {
        "type": "paragraph",
        "text": "小さなお店がInstagramを使うなら、単なる宣伝ではなく「保存したくなる空気」を作る必要があります。"
      },
      {
        "type": "heading",
        "text": "TikTokは「入口」と「衝動」を作る"
      },
      {
        "type": "paragraph",
        "text": "TikTokは、さらに違う媒体でした。"
      },
      {
        "type": "paragraph",
        "text": "初期観測では、TikTokは18歳から34歳の若年層が中心で、特に10代から20代の反応が強く出ました。"
      },
      {
        "type": "paragraph",
        "text": "テーマによっては18歳から25歳前後の男女がかなりバランスよく入り、InstagramやYouTubeとは違う「まだ那須に強い関心を持っていない人」にまで届く感覚がありました。"
      },
      {
        "type": "paragraph",
        "text": "TikTokの特徴は、検索前の人に届くことです。"
      },
      {
        "type": "paragraph",
        "text": "YouTubeは、すでに調べている人に強い。"
      },
      {
        "type": "paragraph",
        "text": "Instagramは、行きたい場所を保存している人に強い。"
      },
      {
        "type": "paragraph",
        "text": "しかしTikTokは、まだ探していない人の前に突然現れる。"
      },
      {
        "type": "paragraph",
        "text": "ここが大きい。"
      },
      {
        "type": "paragraph",
        "text": "「那須に行こう」と思っていなかった人が、動画を見て、"
      },
      {
        "type": "paragraph",
        "text": "「え、ここどこ？」"
      },
      {
        "type": "paragraph",
        "text": "「行ってみたい」"
      },
      {
        "type": "paragraph",
        "text": "「今度行こう」"
      },
      {
        "type": "paragraph",
        "text": "「近いなら行けるかも」"
      },
      {
        "type": "paragraph",
        "text": "と反応する。"
      },
      {
        "type": "paragraph",
        "text": "これは、Impulseです。"
      },
      {
        "type": "paragraph",
        "text": "衝動です。"
      },
      {
        "type": "paragraph",
        "text": "もちろん、TikTokの反応は軽い。"
      },
      {
        "type": "paragraph",
        "text": "すべてが来店につながるわけではありません。"
      },
      {
        "type": "paragraph",
        "text": "再生数が伸びても、すぐに売上になるとは限らない。"
      },
      {
        "type": "paragraph",
        "text": "しかし、TikTokには新しい入口を作る力があります。"
      },
      {
        "type": "paragraph",
        "text": "特に地域店舗にとって、若い層に「地域名」そのものを知ってもらう意味は大きい。"
      },
      {
        "type": "paragraph",
        "text": "那須を知らなかった人。"
      },
      {
        "type": "paragraph",
        "text": "那須に興味がなかった人。"
      },
      {
        "type": "paragraph",
        "text": "観光地としての那須しか知らなかった人。"
      },
      {
        "type": "paragraph",
        "text": "そういう人に、カフェ、自然、店主、空気、風景、日常を届ける。"
      },
      {
        "type": "paragraph",
        "text": "これは未来のファンづくりです。"
      },
      {
        "type": "paragraph",
        "text": "TikTokは、今すぐの売上だけで判断してはいけません。"
      },
      {
        "type": "paragraph",
        "text": "むしろ、地域の入口を広げる媒体として見るべきです。"
      },
      {
        "type": "heading",
        "text": "三つを分けて考えると、SNS動画は急にわかりやすくなる"
      },
      {
        "type": "paragraph",
        "text": "三つのSNSを、私は次のように整理しています。"
      },
      {
        "type": "diagram",
        "text": "Instagram\n  25〜44歳女性が厚い\n  旅行・カフェ・世界観に反応\n  保存、共有、未来の来店候補\n  役割：Save\n\nYouTube\n  25〜44歳男性が厚い\n  45歳以上を含む実用・検討層にも届く\n  駐車場、距離、安心感、事前確認\n  役割：Plan\n\nTikTok\n  10代〜20代、18〜34歳の若年層が中心\n  テーマによって男女とも入りやすい\n  偶然の発見、衝動、地域認知\n  役割：Impulse"
      },
      {
        "type": "paragraph",
        "text": "この整理ができると、SNS動画は急にわかりやすくなります。"
      },
      {
        "type": "paragraph",
        "text": "Instagramには、保存したくなる世界観を出す。"
      },
      {
        "type": "paragraph",
        "text": "YouTubeには、安心して計画できる情報を出す。"
      },
      {
        "type": "paragraph",
        "text": "TikTokには、最初の入口になる驚きや空気を出す。"
      },
      {
        "type": "paragraph",
        "text": "同じ動画を三つに投稿してもかまいません。"
      },
      {
        "type": "paragraph",
        "text": "ただし、同じ意味で投稿してはいけません。"
      },
      {
        "type": "paragraph",
        "text": "Instagramでは「保存されるか」を見る。"
      },
      {
        "type": "paragraph",
        "text": "YouTubeでは「検討材料になっているか」を見る。"
      },
      {
        "type": "paragraph",
        "text": "TikTokでは「新しい人に届いているか」を見る。"
      },
      {
        "type": "paragraph",
        "text": "見るべき数字が違うのです。"
      },
      {
        "type": "heading",
        "text": "那須モデルとして見えてきたこと"
      },
      {
        "type": "paragraph",
        "text": "この観測は、単なる個人の感想で終わりませんでした。"
      },
      {
        "type": "paragraph",
        "text": "なすぱらTVでは、2025年9月12日から11月12日までの60日間に、468本の地域SNS動画を投稿しました。"
      },
      {
        "type": "paragraph",
        "text": "総インプレッションは300万を超えました。"
      },
      {
        "type": "paragraph",
        "text": "この実地観測をもとに、私は Save → Plan → Impulse というモデルを整理しました。"
      },
      {
        "type": "paragraph",
        "text": "Instagramは保存を生む。"
      },
      {
        "type": "paragraph",
        "text": "YouTubeは計画を支える。"
      },
      {
        "type": "paragraph",
        "text": "TikTokは衝動を起こす。"
      },
      {
        "type": "paragraph",
        "text": "この三つが連続すると、短尺動画は単なる宣伝ではなく、地域への実際の移動を生み出す導線になります。"
      },
      {
        "type": "paragraph",
        "text": "このモデルは、Human-Computer Interaction International 2026、つまりHCII 2026に採択された論文、"
      },
      {
        "type": "paragraph",
        "text": "「Save → Plan → Impulse: A Cross-Platform Sequential Model of Short-Form Video Influence on Tourist Mobility in Car-Centric Rural Regions」"
      },
      {
        "type": "paragraph",
        "text": "として、国際的なHCIの場で発表されることになりました。"
      },
      {
        "type": "paragraph",
        "text": "これは、私にとって非常に大きな意味を持っています。"
      },
      {
        "type": "paragraph",
        "text": "なぜなら、これは東京発の広告理論ではないからです。"
      },
      {
        "type": "paragraph",
        "text": "大手広告代理店の机上のSNS論でもない。"
      },
      {
        "type": "paragraph",
        "text": "都市部のインフルエンサー論でもない。"
      },
      {
        "type": "paragraph",
        "text": "那須という、車移動が前提で、店舗と店舗の距離があり、観光客も地元客も混ざる地域で、実際に動画を作り、投稿し、反応を観測し、地域の空気を浴びながら生まれた理論です。"
      },
      {
        "type": "paragraph",
        "text": "つまり、那須発の地域SNS動画理論です。"
      },
      {
        "type": "paragraph",
        "text": "地方の小さなお店が、AI時代にどのように見つけられ、保存され、検討され、衝動的に訪問されるのか。"
      },
      {
        "type": "paragraph",
        "text": "その流れを、世界のHCI研究の文脈に接続できた。"
      },
      {
        "type": "paragraph",
        "text": "私は、ここに大きな希望を感じています。"
      },
      {
        "type": "heading",
        "text": "世界に認められたから偉い、という話ではない"
      },
      {
        "type": "paragraph",
        "text": "ただし、ここで誤解してほしくないことがあります。"
      },
      {
        "type": "paragraph",
        "text": "HCIIに採択されたから、この理論が偉いと言いたいわけではありません。"
      },
      {
        "type": "paragraph",
        "text": "そうではなく、地方の現場で起きていることが、世界の研究文脈でも説明可能な時代になった、ということが重要なのです。"
      },
      {
        "type": "paragraph",
        "text": "これまで地方のお店の魅力は、しばしば「なんとなくいい」で終わっていました。"
      },
      {
        "type": "paragraph",
        "text": "あのお店は雰囲気がいい。"
      },
      {
        "type": "paragraph",
        "text": "あの店主は感じがいい。"
      },
      {
        "type": "paragraph",
        "text": "あの場所は落ち着く。"
      },
      {
        "type": "paragraph",
        "text": "あの地域はまた行きたくなる。"
      },
      {
        "type": "paragraph",
        "text": "でも、それをマーケティングやSNSの理論として説明する言葉が少なかった。"
      },
      {
        "type": "paragraph",
        "text": "だから、結局、"
      },
      {
        "type": "paragraph",
        "text": "再生数。"
      },
      {
        "type": "paragraph",
        "text": "フォロワー数。"
      },
      {
        "type": "paragraph",
        "text": "広告費。"
      },
      {
        "type": "paragraph",
        "text": "クーポン。"
      },
      {
        "type": "paragraph",
        "text": "ランキング。"
      },
      {
        "type": "paragraph",
        "text": "という、都市型のわかりやすい指標に回収されてしまった。"
      },
      {
        "type": "paragraph",
        "text": "しかし、那須で起きていたことは、それだけではありません。"
      },
      {
        "type": "paragraph",
        "text": "人は、動画の中の空気を見ていた。"
      },
      {
        "type": "paragraph",
        "text": "光を見ていた。"
      },
      {
        "type": "paragraph",
        "text": "店主の手元を見ていた。"
      },
      {
        "type": "paragraph",
        "text": "駐車場の安心感を見ていた。"
      },
      {
        "type": "paragraph",
        "text": "地域の時間の流れを見ていた。"
      },
      {
        "type": "paragraph",
        "text": "「ここに行く自分」を想像していた。"
      },
      {
        "type": "paragraph",
        "text": "つまり、人は情報だけでなく、文脈を見ていたのです。"
      },
      {
        "type": "paragraph",
        "text": "この文脈を、AI時代のSNS動画論として言語化すること。"
      },
      {
        "type": "paragraph",
        "text": "それが、この本でやりたいことです。"
      },
      {
        "type": "heading",
        "text": "お店側が今日からやるべきこと"
      },
      {
        "type": "paragraph",
        "text": "では、現場のお店は何をすればいいのか。"
      },
      {
        "type": "paragraph",
        "text": "難しく考える必要はありません。"
      },
      {
        "type": "paragraph",
        "text": "まず、三つのSNSに同じ動画を置いてみる。"
      },
      {
        "type": "paragraph",
        "text": "そのうえで、反応の意味を分けて見る。"
      },
      {
        "type": "paragraph",
        "text": "Instagramでは、保存数を見る。"
      },
      {
        "type": "paragraph",
        "text": "YouTubeでは、視聴維持とコメント、検索流入を見る。"
      },
      {
        "type": "paragraph",
        "text": "TikTokでは、新規視聴者とプロフィール遷移を見る。"
      },
      {
        "type": "paragraph",
        "text": "そして、次のように役割を決めます。"
      },
      {
        "type": "diagram",
        "text": "Instagramに出すもの\n  店内の空気\n  料理の美しさ\n  季節感\n  世界観\n  保存したくなる情報\n\nYouTubeに出すもの\n  アクセス\n  駐車場\n  店内の広さ\n  メニューの選び方\n  初めてでも不安が減る情報\n\nTikTokに出すもの\n  一瞬で伝わる魅力\n  意外性\n  地域の風景\n  料理の動き\n  店主の人柄"
      },
      {
        "type": "paragraph",
        "text": "これだけでも十分です。"
      },
      {
        "type": "paragraph",
        "text": "SNS動画は、全部を完璧にやる必要はありません。"
      },
      {
        "type": "paragraph",
        "text": "しかし、三つのSNSをひとつのものとして見てはいけません。"
      },
      {
        "type": "paragraph",
        "text": "それぞれに、別の人間がいる。"
      },
      {
        "type": "paragraph",
        "text": "別の気分がある。"
      },
      {
        "type": "paragraph",
        "text": "別の行動がある。"
      },
      {
        "type": "paragraph",
        "text": "その違いを知ることが、AI時代のSNS動画の第一歩です。"
      },
      {
        "type": "heading",
        "text": "この章の結論"
      },
      {
        "type": "paragraph",
        "text": "Instagram、YouTube、TikTokは、全部やった方がいい。"
      },
      {
        "type": "paragraph",
        "text": "ただし、全部で同じことをするのではありません。"
      },
      {
        "type": "paragraph",
        "text": "Instagramは、未来の来店候補として保存される場所。"
      },
      {
        "type": "paragraph",
        "text": "YouTubeは、訪問前の不安を減らし、計画を支える場所。"
      },
      {
        "type": "paragraph",
        "text": "TikTokは、まだ知らない人との最初の出会いを作る場所。"
      },
      {
        "type": "paragraph",
        "text": "この三つがつながると、"
      },
      {
        "type": "paragraph",
        "text": "小さなお店の動画は、単なる宣伝ではなくなります。"
      },
      {
        "type": "paragraph",
        "text": "それは、"
      },
      {
        "type": "paragraph",
        "text": "保存され、"
      },
      {
        "type": "paragraph",
        "text": "検討され、"
      },
      {
        "type": "paragraph",
        "text": "衝動を生み、"
      },
      {
        "type": "paragraph",
        "text": "実際の来店へとつながる、"
      },
      {
        "type": "paragraph",
        "text": "地域の感性導線になります。"
      },
      {
        "type": "paragraph",
        "text": "そしてこの流れは、那須の現場から生まれ、HCII 2026で世界に向けて発信される理論になりました。"
      },
      {
        "type": "paragraph",
        "text": "小さなお店の空気は、世界に届きうる。"
      },
      {
        "type": "paragraph",
        "text": "私は、この事実を、この本の中できちんと残しておきたいのです。"
      }
    ]
  },
  {
    "slug": "chapter-6",
    "navLabel": "第6章",
    "title": "第6章　Save → Plan → Impulse —— 人は、いきなり来店しない",
    "description": "お店の人から見ると、お客様の来店は突然に見えます。",
    "keywords": [
      "SNS動画",
      "AI時代",
      "Save Plan Impulse",
      "なすぱらTV",
      "GEO",
      "地域店舗",
      "Instagram",
      "YouTube Shorts",
      "TikTok"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "来店は、突然起きているようで、突然ではない"
      },
      {
        "type": "paragraph",
        "text": "お店の人から見ると、お客様の来店は突然に見えます。"
      },
      {
        "type": "paragraph",
        "text": "ある日、初めてのお客様が来る。"
      },
      {
        "type": "paragraph",
        "text": "「Instagramを見ました」"
      },
      {
        "type": "paragraph",
        "text": "「YouTubeで見ました」"
      },
      {
        "type": "paragraph",
        "text": "「TikTokで流れてきました」"
      },
      {
        "type": "paragraph",
        "text": "そう言われる。"
      },
      {
        "type": "paragraph",
        "text": "すると、お店側はこう思います。"
      },
      {
        "type": "paragraph",
        "text": "「ああ、SNSを見て来てくれたんだ」"
      },
      {
        "type": "paragraph",
        "text": "もちろん、それは間違いではありません。"
      },
      {
        "type": "paragraph",
        "text": "しかし、もう少し丁寧に見ると、人は動画を一本見て、すぐに来店しているわけではないことが多い。"
      },
      {
        "type": "paragraph",
        "text": "最初に、なんとなく気になる。"
      },
      {
        "type": "paragraph",
        "text": "次に、保存する。"
      },
      {
        "type": "paragraph",
        "text": "そのあと、調べる。"
      },
      {
        "type": "paragraph",
        "text": "距離を見る。"
      },
      {
        "type": "paragraph",
        "text": "駐車場を見る。"
      },
      {
        "type": "paragraph",
        "text": "メニューを見る。"
      },
      {
        "type": "paragraph",
        "text": "誰と行くかを考える。"
      },
      {
        "type": "paragraph",
        "text": "そして最後に、何かのきっかけで動く。"
      },
      {
        "type": "paragraph",
        "text": "「今日、行ってみよう」"
      },
      {
        "type": "paragraph",
        "text": "「週末、ここにしよう」"
      },
      {
        "type": "paragraph",
        "text": "「那須に行くなら寄ろう」"
      },
      {
        "type": "paragraph",
        "text": "人は、いきなり来店しません。"
      },
      {
        "type": "paragraph",
        "text": "人の中では、小さな感情の段階が進んでいます。"
      },
      {
        "type": "paragraph",
        "text": "この流れを、私は Save → Plan → Impulse と整理しました。"
      },
      {
        "type": "paragraph",
        "text": "保存する。"
      },
      {
        "type": "paragraph",
        "text": "計画する。"
      },
      {
        "type": "paragraph",
        "text": "衝動で動く。"
      },
      {
        "type": "paragraph",
        "text": "この三段階です。"
      },
      {
        "type": "heading",
        "text": "Save —— まず、未来の自分に残す"
      },
      {
        "type": "paragraph",
        "text": "Saveとは、保存です。"
      },
      {
        "type": "paragraph",
        "text": "Instagramで投稿を保存する。"
      },
      {
        "type": "paragraph",
        "text": "誰かにDMで送る。"
      },
      {
        "type": "paragraph",
        "text": "スクリーンショットを撮る。"
      },
      {
        "type": "paragraph",
        "text": "Googleマップで場所を保存する。"
      },
      {
        "type": "paragraph",
        "text": "LINEで友人に送る。"
      },
      {
        "type": "paragraph",
        "text": "これらはすべて、Saveの行動です。"
      },
      {
        "type": "paragraph",
        "text": "Saveは、まだ来店ではありません。"
      },
      {
        "type": "paragraph",
        "text": "売上でもありません。"
      },
      {
        "type": "paragraph",
        "text": "しかし、非常に重要です。"
      },
      {
        "type": "paragraph",
        "text": "なぜなら、保存とは「忘れたくない」という感情だからです。"
      },
      {
        "type": "paragraph",
        "text": "今すぐ行くかどうかはわからない。"
      },
      {
        "type": "paragraph",
        "text": "でも、忘れたくない。"
      },
      {
        "type": "paragraph",
        "text": "いつか使いたい。"
      },
      {
        "type": "paragraph",
        "text": "誰かと共有したい。"
      },
      {
        "type": "paragraph",
        "text": "旅程の候補に入れておきたい。"
      },
      {
        "type": "paragraph",
        "text": "この段階で必要なのは、強い売り込みではありません。"
      },
      {
        "type": "paragraph",
        "text": "保存する理由です。"
      },
      {
        "type": "paragraph",
        "text": "たとえば、"
      },
      {
        "type": "paragraph",
        "text": "「この席、気持ちよさそう」"
      },
      {
        "type": "paragraph",
        "text": "「このランチ、今度食べたい」"
      },
      {
        "type": "paragraph",
        "text": "「子ども連れでも行けそう」"
      },
      {
        "type": "paragraph",
        "text": "「那須に行くときの候補に入れておこう」"
      },
      {
        "type": "paragraph",
        "text": "「友達が好きそう」"
      },
      {
        "type": "paragraph",
        "text": "こうした感覚が、保存を生みます。"
      },
      {
        "type": "paragraph",
        "text": "だから、Saveを狙う動画では、説明よりも「残る感じ」が大切です。"
      },
      {
        "type": "paragraph",
        "text": "料理の名前だけでは弱い。"
      },
      {
        "type": "paragraph",
        "text": "価格だけでも弱い。"
      },
      {
        "type": "paragraph",
        "text": "キャンペーンだけでも弱い。"
      },
      {
        "type": "paragraph",
        "text": "むしろ、"
      },
      {
        "type": "paragraph",
        "text": "光。"
      },
      {
        "type": "paragraph",
        "text": "席。"
      },
      {
        "type": "paragraph",
        "text": "器。"
      },
      {
        "type": "paragraph",
        "text": "湯気。"
      },
      {
        "type": "paragraph",
        "text": "手元。"
      },
      {
        "type": "paragraph",
        "text": "外観。"
      },
      {
        "type": "paragraph",
        "text": "周辺の風景。"
      },
      {
        "type": "paragraph",
        "text": "店主の声。"
      },
      {
        "type": "paragraph",
        "text": "お店に流れている時間。"
      },
      {
        "type": "paragraph",
        "text": "こういうものが、「いつか行きたい」という保存を生みます。"
      },
      {
        "type": "paragraph",
        "text": "小さなお店にとって、Saveは未来の来店予約のようなものです。"
      },
      {
        "type": "paragraph",
        "text": "実際の予約ではない。"
      },
      {
        "type": "paragraph",
        "text": "しかし、記憶の中に席を取ってもらう行為です。"
      },
      {
        "type": "heading",
        "text": "Plan —— 不安を減らし、現実の予定に変える"
      },
      {
        "type": "paragraph",
        "text": "Saveされたお店は、次にPlanの段階に入ります。"
      },
      {
        "type": "paragraph",
        "text": "Planとは、計画です。"
      },
      {
        "type": "paragraph",
        "text": "人は、保存しただけでは動きません。"
      },
      {
        "type": "paragraph",
        "text": "特に地方の店舗では、行く前に確認したいことがたくさんあります。"
      },
      {
        "type": "paragraph",
        "text": "駐車場はあるのか。"
      },
      {
        "type": "paragraph",
        "text": "子ども連れでも大丈夫か。"
      },
      {
        "type": "paragraph",
        "text": "予約は必要か。"
      },
      {
        "type": "paragraph",
        "text": "混雑するのか。"
      },
      {
        "type": "paragraph",
        "text": "営業時間は本当に合っているのか。"
      },
      {
        "type": "paragraph",
        "text": "車で行きやすいのか。"
      },
      {
        "type": "paragraph",
        "text": "席は広いのか。"
      },
      {
        "type": "paragraph",
        "text": "メニューは自分たちに合うのか。"
      },
      {
        "type": "paragraph",
        "text": "支払い方法は何が使えるのか。"
      },
      {
        "type": "paragraph",
        "text": "雨の日でも行けるのか。"
      },
      {
        "type": "paragraph",
        "text": "これらの不安が残っていると、人は動きません。"
      },
      {
        "type": "paragraph",
        "text": "人は、行きたいと思っても、不安が多いとやめます。"
      },
      {
        "type": "paragraph",
        "text": "特に那須のような車移動の地域では、このPlanの段階がとても重要でした。"
      },
      {
        "type": "paragraph",
        "text": "都市部なら、多少失敗しても別の店に移動できます。"
      },
      {
        "type": "paragraph",
        "text": "しかし地方観光地では、移動に時間がかかる。"
      },
      {
        "type": "paragraph",
        "text": "同行者がいる。"
      },
      {
        "type": "paragraph",
        "text": "家族がいる。"
      },
      {
        "type": "paragraph",
        "text": "旅行の予定全体がある。"
      },
      {
        "type": "paragraph",
        "text": "だから、失敗したくない。"
      },
      {
        "type": "paragraph",
        "text": "このときに強いのが、YouTubeです。"
      },
      {
        "type": "paragraph",
        "text": "YouTubeは、雰囲気だけでなく、安心感を与えることができます。"
      },
      {
        "type": "paragraph",
        "text": "お店の外観が見える。"
      },
      {
        "type": "paragraph",
        "text": "道順がわかる。"
      },
      {
        "type": "paragraph",
        "text": "駐車場が見える。"
      },
      {
        "type": "paragraph",
        "text": "店内の広さがわかる。"
      },
      {
        "type": "paragraph",
        "text": "実際のメニューが見える。"
      },
      {
        "type": "paragraph",
        "text": "店主の話し方がわかる。"
      },
      {
        "type": "paragraph",
        "text": "これだけで、見る人の不安はかなり減ります。"
      },
      {
        "type": "paragraph",
        "text": "Plan段階の動画で大切なのは、「かっこよさ」より「判断材料」です。"
      },
      {
        "type": "paragraph",
        "text": "広告として美しくするよりも、来店前の不安を減らす。"
      },
      {
        "type": "paragraph",
        "text": "この視点が必要です。"
      },
      {
        "type": "heading",
        "text": "Impulse —— 最後は、理由ではなく衝動で動く"
      },
      {
        "type": "paragraph",
        "text": "そして最後に、Impulseがあります。"
      },
      {
        "type": "paragraph",
        "text": "衝動です。"
      },
      {
        "type": "paragraph",
        "text": "人は、最終的には理屈だけで動くわけではありません。"
      },
      {
        "type": "paragraph",
        "text": "たしかに、保存した。"
      },
      {
        "type": "paragraph",
        "text": "たしかに、調べた。"
      },
      {
        "type": "paragraph",
        "text": "たしかに、計画した。"
      },
      {
        "type": "paragraph",
        "text": "でも、最後に動く瞬間には、少しだけ衝動が必要です。"
      },
      {
        "type": "paragraph",
        "text": "「やっぱり行こう」"
      },
      {
        "type": "paragraph",
        "text": "「今日、寄ってみよう」"
      },
      {
        "type": "paragraph",
        "text": "「今から行けるかも」"
      },
      {
        "type": "paragraph",
        "text": "「ここ、気になる」"
      },
      {
        "type": "paragraph",
        "text": "「見たら食べたくなった」"
      },
      {
        "type": "paragraph",
        "text": "このImpulseを作りやすいのが、TikTokでした。"
      },
      {
        "type": "paragraph",
        "text": "TikTokは、検索している人だけに届く媒体ではありません。"
      },
      {
        "type": "paragraph",
        "text": "何気なく見ている人の前に、突然現れる。"
      },
      {
        "type": "paragraph",
        "text": "その一瞬で、"
      },
      {
        "type": "paragraph",
        "text": "料理の湯気。"
      },
      {
        "type": "paragraph",
        "text": "肉を切る音。"
      },
      {
        "type": "paragraph",
        "text": "コーヒーが注がれる手元。"
      },
      {
        "type": "paragraph",
        "text": "店内に差す光。"
      },
      {
        "type": "paragraph",
        "text": "夕方の道路。"
      },
      {
        "type": "paragraph",
        "text": "窓際の席。"
      },
      {
        "type": "paragraph",
        "text": "笑っている店主。"
      },
      {
        "type": "paragraph",
        "text": "そういうものが目に入る。"
      },
      {
        "type": "paragraph",
        "text": "すると、理屈より先に感情が動く。"
      },
      {
        "type": "paragraph",
        "text": "これがImpulseです。"
      },
      {
        "type": "paragraph",
        "text": "Impulseは、単なる衝動買いではありません。"
      },
      {
        "type": "paragraph",
        "text": "地方店舗の場合、それは「行ってみたい」という身体的な動きです。"
      },
      {
        "type": "paragraph",
        "text": "車に乗る。"
      },
      {
        "type": "paragraph",
        "text": "週末の予定に入れる。"
      },
      {
        "type": "paragraph",
        "text": "Googleマップを開く。"
      },
      {
        "type": "paragraph",
        "text": "同行者に送る。"
      },
      {
        "type": "paragraph",
        "text": "今度の旅行で寄る。"
      },
      {
        "type": "paragraph",
        "text": "感情が、移動に変わる。"
      },
      {
        "type": "paragraph",
        "text": "この瞬間が、SNS動画のもっとも面白いところです。"
      },
      {
        "type": "heading",
        "text": "HCII論文で見えた三媒体の違い"
      },
      {
        "type": "paragraph",
        "text": "HCII 2026に採択された論文では、なすぱらTVの60日間、468本の動画観測をもとに、各プラットフォームの行動傾向を整理しました。"
      },
      {
        "type": "paragraph",
        "text": "論文では、コメントや反応を Save、Plan、Impulse に分類し、Instagram、YouTube、TikTokの違いを比較しました。"
      },
      {
        "type": "paragraph",
        "text": "その結果、非常に明確な差が出ました。"
      },
      {
        "type": "diagram",
        "text": "Instagram\n  Save      61%\n  Plan      22%\n  Impulse   17%\n\nYouTube\n  Save      19%\n  Plan      63%\n  Impulse   18%\n\nTikTok\n  Save      22%\n  Plan      16%\n  Impulse   62%"
      },
      {
        "type": "paragraph",
        "text": "もちろん、これは那須地域における特定期間の観測です。"
      },
      {
        "type": "paragraph",
        "text": "すべての地域、すべての業種にそのまま当てはまるとは言いません。"
      },
      {
        "type": "paragraph",
        "text": "しかし、傾向としては非常に納得できるものでした。"
      },
      {
        "type": "paragraph",
        "text": "Instagramは保存に強い。"
      },
      {
        "type": "paragraph",
        "text": "YouTubeは計画に強い。"
      },
      {
        "type": "paragraph",
        "text": "TikTokは衝動に強い。"
      },
      {
        "type": "paragraph",
        "text": "この違いは、実際に動画を出し続けている感覚とも一致していました。"
      },
      {
        "type": "paragraph",
        "text": "さらに統計的にも、三媒体の違いは有意な差として確認されました。"
      },
      {
        "type": "paragraph",
        "text": "専門的に言えば、カイ二乗検定で有意差があり、プラットフォームと行動類型の関係には中程度以上の関連が見られました。"
      },
      {
        "type": "paragraph",
        "text": "ただ、この本では難しい統計用語を覚える必要はありません。"
      },
      {
        "type": "paragraph",
        "text": "大事なのは、現場感覚としてこう理解することです。"
      },
      {
        "type": "paragraph",
        "text": "Instagramで保存される動画と、"
      },
      {
        "type": "paragraph",
        "text": "YouTubeで信頼される動画と、"
      },
      {
        "type": "paragraph",
        "text": "TikTokで衝動を生む動画は、"
      },
      {
        "type": "paragraph",
        "text": "似ているようで、役割が違う。"
      },
      {
        "type": "paragraph",
        "text": "この違いを知るだけで、SNS運用はかなり変わります。"
      },
      {
        "type": "heading",
        "text": "同じ動画でも、見る人の状態が違う"
      },
      {
        "type": "paragraph",
        "text": "面白いのは、動画の内容だけでなく、見る人の状態が違うことです。"
      },
      {
        "type": "paragraph",
        "text": "Instagramを見ている人は、比較的「探している」状態に近い。"
      },
      {
        "type": "paragraph",
        "text": "特にカフェ、旅行、飲食、観光では、保存する前提で見ている人が多い。"
      },
      {
        "type": "paragraph",
        "text": "YouTubeを見ている人は、より「調べている」状態に近い。"
      },
      {
        "type": "paragraph",
        "text": "行くかどうかを判断したい。"
      },
      {
        "type": "paragraph",
        "text": "不安を減らしたい。"
      },
      {
        "type": "paragraph",
        "text": "実際の雰囲気を確認したい。"
      },
      {
        "type": "paragraph",
        "text": "TikTokを見ている人は、「まだ探していない」状態に近い。"
      },
      {
        "type": "paragraph",
        "text": "偶然流れてきたものに反応する。"
      },
      {
        "type": "paragraph",
        "text": "だからこそ、TikTokでは一瞬の魅力が重要になります。"
      },
      {
        "type": "paragraph",
        "text": "これは、お店側にとって非常に大切な視点です。"
      },
      {
        "type": "paragraph",
        "text": "同じお客様でも、ある日はInstagramで保存し、別の日にYouTubeで調べ、最後にTikTokで見かけて行動するかもしれません。"
      },
      {
        "type": "paragraph",
        "text": "あるいは、最初にTikTokで知り、Instagramで保存し、YouTubeで確認するかもしれません。"
      },
      {
        "type": "paragraph",
        "text": "順番は一つではありません。"
      },
      {
        "type": "paragraph",
        "text": "しかし、三つの役割が連動すると、来店までの心理的な橋がかかります。"
      },
      {
        "type": "paragraph",
        "text": "SNS動画とは、その橋を作る作業なのです。"
      },
      {
        "type": "heading",
        "text": "小さなお店は、導線を作るだけでいい"
      },
      {
        "type": "paragraph",
        "text": "ここで大切なのは、小さなお店が巨大なマーケティング部門のように振る舞う必要はない、ということです。"
      },
      {
        "type": "paragraph",
        "text": "難しいファネル設計。"
      },
      {
        "type": "paragraph",
        "text": "高度な広告配信。"
      },
      {
        "type": "paragraph",
        "text": "複雑な分析ツール。"
      },
      {
        "type": "paragraph",
        "text": "もちろん、それらが使えるなら使ってもいい。"
      },
      {
        "type": "paragraph",
        "text": "しかし、まず必要なのはもっとシンプルです。"
      },
      {
        "type": "paragraph",
        "text": "保存される動画を出す。"
      },
      {
        "type": "paragraph",
        "text": "安心して計画できる動画を出す。"
      },
      {
        "type": "paragraph",
        "text": "衝動が起きる動画を出す。"
      },
      {
        "type": "paragraph",
        "text": "そして、プロフィール、Googleマップ、ホームページ、予約導線を整えておく。"
      },
      {
        "type": "paragraph",
        "text": "これだけで、SNS動画は単なる投稿ではなくなります。"
      },
      {
        "type": "paragraph",
        "text": "来店までの導線になります。"
      },
      {
        "type": "paragraph",
        "text": "たとえば、カフェならこうです。"
      },
      {
        "type": "paragraph",
        "text": "Instagramには、窓際の席と季節のケーキを出す。"
      },
      {
        "type": "paragraph",
        "text": "YouTubeには、駐車場から入口までの流れと人気メニューを出す。"
      },
      {
        "type": "paragraph",
        "text": "TikTokには、コーヒーを淹れる手元や、焼きたての湯気を出す。"
      },
      {
        "type": "paragraph",
        "text": "そして、プロフィールには営業時間、場所、予約、Googleマップへのリンクをきちんと置く。"
      },
      {
        "type": "paragraph",
        "text": "これだけで、見る人の中では、"
      },
      {
        "type": "paragraph",
        "text": "保存する。"
      },
      {
        "type": "paragraph",
        "text": "調べる。"
      },
      {
        "type": "paragraph",
        "text": "行きたくなる。"
      },
      {
        "type": "paragraph",
        "text": "という流れが生まれやすくなります。"
      },
      {
        "type": "heading",
        "text": "Saveだけでも、Impulseだけでも足りない"
      },
      {
        "type": "paragraph",
        "text": "Instagramで保存されても、行き方がわからなければ来店にはつながりません。"
      },
      {
        "type": "paragraph",
        "text": "TikTokでバズっても、店の情報が整っていなければ一過性で終わります。"
      },
      {
        "type": "paragraph",
        "text": "YouTubeで詳しく説明しても、最初の興味がなければ見られません。"
      },
      {
        "type": "paragraph",
        "text": "だから、三つが必要なのです。"
      },
      {
        "type": "paragraph",
        "text": "Saveだけでは、記憶に残るだけです。"
      },
      {
        "type": "paragraph",
        "text": "Planだけでは、説明で終わります。"
      },
      {
        "type": "paragraph",
        "text": "Impulseだけでは、一瞬で流れてしまいます。"
      },
      {
        "type": "paragraph",
        "text": "Save、Plan、Impulseがつながったとき、SNS動画は現実の移動を生みます。"
      },
      {
        "type": "paragraph",
        "text": "これは、観光だけの話ではありません。"
      },
      {
        "type": "paragraph",
        "text": "美容室でも同じです。"
      },
      {
        "type": "paragraph",
        "text": "Instagramで雰囲気を保存する。"
      },
      {
        "type": "paragraph",
        "text": "YouTubeで施術の流れを確認する。"
      },
      {
        "type": "paragraph",
        "text": "TikTokで変化の瞬間に惹かれる。"
      },
      {
        "type": "paragraph",
        "text": "歯科医院でも同じです。"
      },
      {
        "type": "paragraph",
        "text": "Instagramで清潔感を感じる。"
      },
      {
        "type": "paragraph",
        "text": "YouTubeで治療説明を見て安心する。"
      },
      {
        "type": "paragraph",
        "text": "TikTokで短いQ&Aに触れて不安が減る。"
      },
      {
        "type": "paragraph",
        "text": "整体でも、塾でも、リフォームでも同じです。"
      },
      {
        "type": "paragraph",
        "text": "人は、いきなり買わない。"
      },
      {
        "type": "paragraph",
        "text": "いきなり予約しない。"
      },
      {
        "type": "paragraph",
        "text": "いきなり来店しない。"
      },
      {
        "type": "paragraph",
        "text": "保存し、考え、不安を減らし、最後に動く。"
      },
      {
        "type": "paragraph",
        "text": "その流れを理解することが、AI時代のSNS動画の基礎になります。"
      },
      {
        "type": "heading",
        "text": "この章の結論"
      },
      {
        "type": "paragraph",
        "text": "Save → Plan → Impulse は、SNS動画を「再生数の競争」から解放するための考え方です。"
      },
      {
        "type": "paragraph",
        "text": "Instagramで保存されることには意味がある。"
      },
      {
        "type": "paragraph",
        "text": "YouTubeで調べられることには意味がある。"
      },
      {
        "type": "paragraph",
        "text": "TikTokで衝動が生まれることには意味がある。"
      },
      {
        "type": "paragraph",
        "text": "それぞれの数字を、同じ物差しで比べてはいけません。"
      },
      {
        "type": "paragraph",
        "text": "大事なのは、動画が人の心のどの段階に触れているかです。"
      },
      {
        "type": "paragraph",
        "text": "保存されたのか。"
      },
      {
        "type": "paragraph",
        "text": "計画されたのか。"
      },
      {
        "type": "paragraph",
        "text": "衝動を生んだのか。"
      },
      {
        "type": "paragraph",
        "text": "この三つを見るだけで、SNS動画の見方は大きく変わります。"
      },
      {
        "type": "paragraph",
        "text": "小さなお店に必要なのは、巨大なバズではありません。"
      },
      {
        "type": "paragraph",
        "text": "本来つながるべき人の中に、"
      },
      {
        "type": "paragraph",
        "text": "「いつか行きたい」"
      },
      {
        "type": "paragraph",
        "text": "「ここなら大丈夫そう」"
      },
      {
        "type": "paragraph",
        "text": "「今度行ってみよう」"
      },
      {
        "type": "paragraph",
        "text": "という、小さな移動の芽を育てることです。"
      },
      {
        "type": "paragraph",
        "text": "それが、Save → Plan → Impulse です。"
      }
    ]
  },
  {
    "slug": "chapter-7",
    "navLabel": "第7章",
    "title": "第7章　動画は、空気を保存する —— なぜ写真ではなく動画なのか",
    "description": "まず最初に言っておきたいことがあります。",
    "keywords": [
      "SNS動画",
      "AI時代",
      "Save Plan Impulse",
      "なすぱらTV",
      "GEO",
      "地域店舗",
      "Instagram",
      "YouTube Shorts",
      "TikTok"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "写真は強い。けれど、写真だけでは足りなくなってきた"
      },
      {
        "type": "paragraph",
        "text": "まず最初に言っておきたいことがあります。"
      },
      {
        "type": "paragraph",
        "text": "写真が不要になったわけではありません。"
      },
      {
        "type": "paragraph",
        "text": "写真は今でも強い。"
      },
      {
        "type": "paragraph",
        "text": "料理の美しさ。"
      },
      {
        "type": "paragraph",
        "text": "店内の雰囲気。"
      },
      {
        "type": "paragraph",
        "text": "外観。"
      },
      {
        "type": "paragraph",
        "text": "メニュー。"
      },
      {
        "type": "paragraph",
        "text": "店主の表情。"
      },
      {
        "type": "paragraph",
        "text": "これらを一枚で伝える力があります。"
      },
      {
        "type": "paragraph",
        "text": "Instagramも、Googleマップも、ホームページも、写真が弱ければ印象は弱くなります。"
      },
      {
        "type": "paragraph",
        "text": "だから、写真は大切です。"
      },
      {
        "type": "paragraph",
        "text": "しかし、AI時代に入り、写真だけでは伝えきれないものが増えてきました。"
      },
      {
        "type": "paragraph",
        "text": "それは、時間です。"
      },
      {
        "type": "paragraph",
        "text": "所作です。"
      },
      {
        "type": "paragraph",
        "text": "空気の流れです。"
      },
      {
        "type": "paragraph",
        "text": "音です。"
      },
      {
        "type": "paragraph",
        "text": "間です。"
      },
      {
        "type": "paragraph",
        "text": "人の気配です。"
      },
      {
        "type": "paragraph",
        "text": "お店に入ってから席に着くまでの感覚です。"
      },
      {
        "type": "paragraph",
        "text": "料理が運ばれてくるまでの期待です。"
      },
      {
        "type": "paragraph",
        "text": "店主が手を動かしているときのリズムです。"
      },
      {
        "type": "paragraph",
        "text": "窓から入る光が、数秒の中で少し揺れる感じです。"
      },
      {
        "type": "paragraph",
        "text": "こうしたものは、写真では一部しか伝わりません。"
      },
      {
        "type": "paragraph",
        "text": "写真は、ある瞬間を切り取ります。"
      },
      {
        "type": "paragraph",
        "text": "動画は、その瞬間の前後にある時間を伝えます。"
      },
      {
        "type": "paragraph",
        "text": "小さなお店の価値は、この「前後の時間」に宿っていることが多いのです。"
      },
      {
        "type": "heading",
        "text": "写真は完成形を見せる。動画は、そこに至る時間を見せる"
      },
      {
        "type": "paragraph",
        "text": "写真は、完成形を見せるのが得意です。"
      },
      {
        "type": "paragraph",
        "text": "完成した料理。"
      },
      {
        "type": "paragraph",
        "text": "整えられた店内。"
      },
      {
        "type": "paragraph",
        "text": "きれいに置かれた商品。"
      },
      {
        "type": "paragraph",
        "text": "晴れた日の外観。"
      },
      {
        "type": "paragraph",
        "text": "一番美しい瞬間を切り取る。"
      },
      {
        "type": "paragraph",
        "text": "これは非常に大切です。"
      },
      {
        "type": "paragraph",
        "text": "しかし、お客様が本当に知りたいのは、完成形だけではありません。"
      },
      {
        "type": "paragraph",
        "text": "この料理は、どう作られているのか。"
      },
      {
        "type": "paragraph",
        "text": "この店は、本当に落ち着けるのか。"
      },
      {
        "type": "paragraph",
        "text": "この店主は、どんな人なのか。"
      },
      {
        "type": "paragraph",
        "text": "入ったとき、どんな空気なのか。"
      },
      {
        "type": "paragraph",
        "text": "初めてでも大丈夫なのか。"
      },
      {
        "type": "paragraph",
        "text": "写真だけでは、この不安が残ることがあります。"
      },
      {
        "type": "paragraph",
        "text": "動画は、その不安を少しずつ消していきます。"
      },
      {
        "type": "paragraph",
        "text": "たとえば、コーヒーを淹れる動画。"
      },
      {
        "type": "paragraph",
        "text": "カップに注がれる瞬間。"
      },
      {
        "type": "paragraph",
        "text": "手元の動き。"
      },
      {
        "type": "paragraph",
        "text": "湯気。"
      },
      {
        "type": "paragraph",
        "text": "音。"
      },
      {
        "type": "paragraph",
        "text": "一呼吸置く間。"
      },
      {
        "type": "paragraph",
        "text": "これを見るだけで、人はその店の時間を少し体験します。"
      },
      {
        "type": "paragraph",
        "text": "あるいは、ラーメン店なら、"
      },
      {
        "type": "paragraph",
        "text": "湯切り。"
      },
      {
        "type": "paragraph",
        "text": "スープを注ぐ。"
      },
      {
        "type": "paragraph",
        "text": "麺を整える。"
      },
      {
        "type": "paragraph",
        "text": "チャーシューを置く。"
      },
      {
        "type": "paragraph",
        "text": "丼を出す。"
      },
      {
        "type": "paragraph",
        "text": "この流れには、写真では伝わらないリズムがあります。"
      },
      {
        "type": "paragraph",
        "text": "私は四年間、ラーメン店の店長をしていました。"
      },
      {
        "type": "paragraph",
        "text": "だから、こういう所作の意味はよくわかります。"
      },
      {
        "type": "paragraph",
        "text": "湯切りひとつにも、店の姿勢が出る。"
      },
      {
        "type": "paragraph",
        "text": "丼を置く一瞬にも、店の緊張感が出る。"
      },
      {
        "type": "paragraph",
        "text": "掃除されたカウンターにも、日々の積み重ねが出る。"
      },
      {
        "type": "paragraph",
        "text": "それは写真にも写るかもしれません。"
      },
      {
        "type": "paragraph",
        "text": "しかし、動画の方がずっと伝わりやすい。"
      },
      {
        "type": "paragraph",
        "text": "なぜなら、所作は時間の中にしか存在しないからです。"
      },
      {
        "type": "heading",
        "text": "小さなお店の魅力は、静止画よりも所作に宿る"
      },
      {
        "type": "paragraph",
        "text": "大きなブランドは、完成されたビジュアルで勝負できます。"
      },
      {
        "type": "paragraph",
        "text": "ロゴ。"
      },
      {
        "type": "paragraph",
        "text": "広告写真。"
      },
      {
        "type": "paragraph",
        "text": "パッケージ。"
      },
      {
        "type": "paragraph",
        "text": "店舗デザイン。"
      },
      {
        "type": "paragraph",
        "text": "統一された世界観。"
      },
      {
        "type": "paragraph",
        "text": "もちろん、それは強い。"
      },
      {
        "type": "paragraph",
        "text": "しかし、小さなお店の魅力は、必ずしも完成されたビジュアルだけにあるわけではありません。"
      },
      {
        "type": "paragraph",
        "text": "むしろ、"
      },
      {
        "type": "paragraph",
        "text": "店主が毎朝シャッターを開ける。"
      },
      {
        "type": "paragraph",
        "text": "スタッフが椅子を整える。"
      },
      {
        "type": "paragraph",
        "text": "仕込みをする。"
      },
      {
        "type": "paragraph",
        "text": "お客様に声をかける。"
      },
      {
        "type": "paragraph",
        "text": "帰り際に少し笑う。"
      },
      {
        "type": "paragraph",
        "text": "雨の日に入口を拭く。"
      },
      {
        "type": "paragraph",
        "text": "常連さんと短く会話する。"
      },
      {
        "type": "paragraph",
        "text": "そういう日々の所作の中に、店の本質が出ます。"
      },
      {
        "type": "paragraph",
        "text": "これは、大企業が簡単に真似できないところです。"
      },
      {
        "type": "paragraph",
        "text": "AIも、簡単には作れません。"
      },
      {
        "type": "paragraph",
        "text": "AIは、美しい料理写真のような画像を生成できます。"
      },
      {
        "type": "paragraph",
        "text": "おしゃれなカフェ風の写真も作れます。"
      },
      {
        "type": "paragraph",
        "text": "雰囲気のある文章も作れます。"
      },
      {
        "type": "paragraph",
        "text": "しかし、その店の店主が、実際にその朝どう手を動かしていたかは作れません。"
      },
      {
        "type": "paragraph",
        "text": "その地域のその日の光は作れません。"
      },
      {
        "type": "paragraph",
        "text": "その店の床を歩く音は作れません。"
      },
      {
        "type": "paragraph",
        "text": "その人の間合いは作れません。"
      },
      {
        "type": "paragraph",
        "text": "動画は、そういう現場の証拠になります。"
      },
      {
        "type": "paragraph",
        "text": "AI時代には、この現場の証拠が非常に価値を持つようになります。"
      },
      {
        "type": "heading",
        "text": "動画は、Pre-Meaningを伝えやすい"
      },
      {
        "type": "paragraph",
        "text": "私は、AI時代の人間体験を考える中で、Pre-Meaningという言葉を使ってきました。"
      },
      {
        "type": "paragraph",
        "text": "意味になる前の感覚。"
      },
      {
        "type": "paragraph",
        "text": "言葉になる前の反応。"
      },
      {
        "type": "paragraph",
        "text": "なんとなく好き。"
      },
      {
        "type": "paragraph",
        "text": "落ち着く。"
      },
      {
        "type": "paragraph",
        "text": "気になる。"
      },
      {
        "type": "paragraph",
        "text": "行ってみたい。"
      },
      {
        "type": "paragraph",
        "text": "説明できないけれど、惹かれる。"
      },
      {
        "type": "paragraph",
        "text": "こうした感覚は、写真でも起きます。"
      },
      {
        "type": "paragraph",
        "text": "しかし、動画はPre-Meaningをさらに伝えやすい。"
      },
      {
        "type": "paragraph",
        "text": "なぜなら動画には、動きと時間があるからです。"
      },
      {
        "type": "paragraph",
        "text": "人は、言葉で説明される前に、動きに反応します。"
      },
      {
        "type": "paragraph",
        "text": "手の動き。"
      },
      {
        "type": "paragraph",
        "text": "湯気の揺れ。"
      },
      {
        "type": "paragraph",
        "text": "光の変化。"
      },
      {
        "type": "paragraph",
        "text": "人の歩き方。"
      },
      {
        "type": "paragraph",
        "text": "ドアが開く音。"
      },
      {
        "type": "paragraph",
        "text": "店内の静けさ。"
      },
      {
        "type": "paragraph",
        "text": "こうしたものを見たとき、人はまだ意味を作る前に反応しています。"
      },
      {
        "type": "paragraph",
        "text": "「なんかいい」"
      },
      {
        "type": "paragraph",
        "text": "「ここ、落ち着きそう」"
      },
      {
        "type": "paragraph",
        "text": "「この人、ちゃんとしていそう」"
      },
      {
        "type": "paragraph",
        "text": "「行ってみたいかもしれない」"
      },
      {
        "type": "paragraph",
        "text": "この段階では、まだ言葉は追いついていません。"
      },
      {
        "type": "paragraph",
        "text": "しかし、感情はすでに動いている。"
      },
      {
        "type": "paragraph",
        "text": "動画は、この意味以前の感覚を伝えるのに向いています。"
      },
      {
        "type": "paragraph",
        "text": "だから、小さなお店のSNS動画では、説明しすぎないことが大切です。"
      },
      {
        "type": "paragraph",
        "text": "すべてを言葉で埋めない。"
      },
      {
        "type": "paragraph",
        "text": "余白を残す。"
      },
      {
        "type": "paragraph",
        "text": "見ている人が、自分の気持ちを置ける時間を残す。"
      },
      {
        "type": "paragraph",
        "text": "これは、動画だからできることです。"
      },
      {
        "type": "heading",
        "text": "動画は「滞在感」を生む"
      },
      {
        "type": "paragraph",
        "text": "写真は、一瞬で印象を作ります。"
      },
      {
        "type": "paragraph",
        "text": "動画は、短い滞在を作ります。"
      },
      {
        "type": "paragraph",
        "text": "15秒の動画でも、人はその店に少し滞在します。"
      },
      {
        "type": "paragraph",
        "text": "30秒なら、さらに滞在します。"
      },
      {
        "type": "paragraph",
        "text": "1分の動画なら、かなりその場の空気に触れます。"
      },
      {
        "type": "paragraph",
        "text": "もちろん、実際に店に行ったわけではありません。"
      },
      {
        "type": "paragraph",
        "text": "しかし、動画を見ることで、人は擬似的にその場に入ります。"
      },
      {
        "type": "paragraph",
        "text": "入口を見る。"
      },
      {
        "type": "paragraph",
        "text": "席を見る。"
      },
      {
        "type": "paragraph",
        "text": "料理を見る。"
      },
      {
        "type": "paragraph",
        "text": "人を見る。"
      },
      {
        "type": "paragraph",
        "text": "音を感じる。"
      },
      {
        "type": "paragraph",
        "text": "店の流れを感じる。"
      },
      {
        "type": "paragraph",
        "text": "この短い滞在感が、来店前の心理的距離を縮めます。"
      },
      {
        "type": "paragraph",
        "text": "初めてのお店に行くとき、人は少し緊張します。"
      },
      {
        "type": "paragraph",
        "text": "入っていいのか。"
      },
      {
        "type": "paragraph",
        "text": "自分に合うのか。"
      },
      {
        "type": "paragraph",
        "text": "高すぎないか。"
      },
      {
        "type": "paragraph",
        "text": "混んでいないか。"
      },
      {
        "type": "paragraph",
        "text": "常連ばかりではないか。"
      },
      {
        "type": "paragraph",
        "text": "子ども連れでも大丈夫か。"
      },
      {
        "type": "paragraph",
        "text": "ひとりでも大丈夫か。"
      },
      {
        "type": "paragraph",
        "text": "動画は、この緊張を和らげることができます。"
      },
      {
        "type": "paragraph",
        "text": "写真ではわからなかった空気が、動画で少しわかる。"
      },
      {
        "type": "paragraph",
        "text": "これが、来店前の安心につながります。"
      },
      {
        "type": "heading",
        "text": "写真は保存され、動画は記憶の中で動き続ける"
      },
      {
        "type": "paragraph",
        "text": "写真は保存されます。"
      },
      {
        "type": "paragraph",
        "text": "これは、とても大切です。"
      },
      {
        "type": "paragraph",
        "text": "行きたい場所を保存する。"
      },
      {
        "type": "paragraph",
        "text": "料理の写真を保存する。"
      },
      {
        "type": "paragraph",
        "text": "店内の雰囲気を保存する。"
      },
      {
        "type": "paragraph",
        "text": "しかし、動画は少し違います。"
      },
      {
        "type": "paragraph",
        "text": "動画は、記憶の中で動き続けます。"
      },
      {
        "type": "paragraph",
        "text": "コーヒーが注がれる動き。"
      },
      {
        "type": "paragraph",
        "text": "焼きたての湯気。"
      },
      {
        "type": "paragraph",
        "text": "店主の手元。"
      },
      {
        "type": "paragraph",
        "text": "ドアが開く瞬間。"
      },
      {
        "type": "paragraph",
        "text": "車で近づく道。"
      },
      {
        "type": "paragraph",
        "text": "夕方の光。"
      },
      {
        "type": "paragraph",
        "text": "こうしたものは、見たあとに頭の中で再生されやすい。"
      },
      {
        "type": "paragraph",
        "text": "つまり動画は、記憶に「流れ」を残します。"
      },
      {
        "type": "paragraph",
        "text": "地域店舗にとって、この流れはとても重要です。"
      },
      {
        "type": "paragraph",
        "text": "お客様は、店名だけを覚えているわけではありません。"
      },
      {
        "type": "paragraph",
        "text": "その店で過ごす時間を想像している。"
      },
      {
        "type": "paragraph",
        "text": "そこへ向かう道を想像している。"
      },
      {
        "type": "paragraph",
        "text": "誰と行くかを想像している。"
      },
      {
        "type": "paragraph",
        "text": "何を食べるかを想像している。"
      },
      {
        "type": "paragraph",
        "text": "動画は、その想像を助けます。"
      },
      {
        "type": "paragraph",
        "text": "だから、動画はSave → Plan → Impulseと相性がいいのです。"
      },
      {
        "type": "paragraph",
        "text": "保存される。"
      },
      {
        "type": "paragraph",
        "text": "思い出される。"
      },
      {
        "type": "paragraph",
        "text": "調べられる。"
      },
      {
        "type": "paragraph",
        "text": "最後に動く。"
      },
      {
        "type": "paragraph",
        "text": "この流れの中で、動画は写真よりも多くの時間情報を渡すことができます。"
      },
      {
        "type": "heading",
        "text": "AI時代には、動画が一次情報になる"
      },
      {
        "type": "paragraph",
        "text": "AI時代に、なぜ動画がさらに重要になるのか。"
      },
      {
        "type": "paragraph",
        "text": "それは、動画が一次情報になりやすいからです。"
      },
      {
        "type": "paragraph",
        "text": "AIは文章を作れます。"
      },
      {
        "type": "paragraph",
        "text": "AIは画像も作れます。"
      },
      {
        "type": "paragraph",
        "text": "AIは広告文も、レビュー風の文章も、きれいな説明も作れます。"
      },
      {
        "type": "paragraph",
        "text": "しかし、現場で撮られた動画には、その場の情報が含まれています。"
      },
      {
        "type": "paragraph",
        "text": "実際の店内。"
      },
      {
        "type": "paragraph",
        "text": "実際の手元。"
      },
      {
        "type": "paragraph",
        "text": "実際の音。"
      },
      {
        "type": "paragraph",
        "text": "実際の道。"
      },
      {
        "type": "paragraph",
        "text": "実際の混み方。"
      },
      {
        "type": "paragraph",
        "text": "実際の季節。"
      },
      {
        "type": "paragraph",
        "text": "実際の人。"
      },
      {
        "type": "paragraph",
        "text": "もちろん、動画も編集できます。"
      },
      {
        "type": "paragraph",
        "text": "加工もできます。"
      },
      {
        "type": "paragraph",
        "text": "だから動画なら何でも信用できる、ということではありません。"
      },
      {
        "type": "paragraph",
        "text": "しかし、少なくとも小さなお店にとって、日々の動画は「ここで本当に営まれている」という証拠になります。"
      },
      {
        "type": "paragraph",
        "text": "Googleマップ。"
      },
      {
        "type": "paragraph",
        "text": "Instagram。"
      },
      {
        "type": "paragraph",
        "text": "YouTube。"
      },
      {
        "type": "paragraph",
        "text": "TikTok。"
      },
      {
        "type": "paragraph",
        "text": "ホームページ。"
      },
      {
        "type": "paragraph",
        "text": "これらに、現場の動画が積み重なっているお店は、AIにも人間にも理解されやすくなります。"
      },
      {
        "type": "paragraph",
        "text": "この店は何をしているのか。"
      },
      {
        "type": "paragraph",
        "text": "どんな人がいるのか。"
      },
      {
        "type": "paragraph",
        "text": "どんな空間なのか。"
      },
      {
        "type": "paragraph",
        "text": "どんな地域にあるのか。"
      },
      {
        "type": "paragraph",
        "text": "どんなお客様に向いているのか。"
      },
      {
        "type": "paragraph",
        "text": "動画は、その答えを静かに積み上げていきます。"
      },
      {
        "type": "paragraph",
        "text": "これはGEOともつながります。"
      },
      {
        "type": "paragraph",
        "text": "AIに理解されるというのは、AIをだますことではありません。"
      },
      {
        "type": "paragraph",
        "text": "自分たちの実体を、正確に、継続的に、文脈として残すことです。"
      },
      {
        "type": "paragraph",
        "text": "動画は、そのための強い一次情報になります。"
      },
      {
        "type": "heading",
        "text": "写真と動画は、対立しない"
      },
      {
        "type": "paragraph",
        "text": "ここまで動画の重要性を書いてきましたが、写真と動画は対立しません。"
      },
      {
        "type": "paragraph",
        "text": "むしろ、両方必要です。"
      },
      {
        "type": "paragraph",
        "text": "写真は、ひと目で伝える。"
      },
      {
        "type": "paragraph",
        "text": "動画は、時間で伝える。"
      },
      {
        "type": "paragraph",
        "text": "写真は、保存しやすい。"
      },
      {
        "type": "paragraph",
        "text": "動画は、滞在感を作る。"
      },
      {
        "type": "paragraph",
        "text": "写真は、完成形を見せる。"
      },
      {
        "type": "paragraph",
        "text": "動画は、そこに至る所作を見せる。"
      },
      {
        "type": "paragraph",
        "text": "写真は、世界観の入口になる。"
      },
      {
        "type": "paragraph",
        "text": "動画は、世界観の中に少し入ってもらう。"
      },
      {
        "type": "paragraph",
        "text": "このように考えるとわかりやすい。"
      },
      {
        "type": "paragraph",
        "text": "小さなお店は、写真だけを頑張るのでも、動画だけを頑張るのでもありません。"
      },
      {
        "type": "paragraph",
        "text": "写真で入口を作り、動画で空気を伝える。"
      },
      {
        "type": "paragraph",
        "text": "この組み合わせが強いのです。"
      },
      {
        "type": "heading",
        "text": "この章の結論"
      },
      {
        "type": "paragraph",
        "text": "なぜ写真ではなく、動画なのか。"
      },
      {
        "type": "paragraph",
        "text": "正確に言えば、写真だけではなく、動画が必要になったのです。"
      },
      {
        "type": "paragraph",
        "text": "なぜなら、小さなお店の魅力は、完成形だけではなく、時間の中に宿っているからです。"
      },
      {
        "type": "paragraph",
        "text": "所作。"
      },
      {
        "type": "paragraph",
        "text": "音。"
      },
      {
        "type": "paragraph",
        "text": "間。"
      },
      {
        "type": "paragraph",
        "text": "光。"
      },
      {
        "type": "paragraph",
        "text": "湯気。"
      },
      {
        "type": "paragraph",
        "text": "人の気配。"
      },
      {
        "type": "paragraph",
        "text": "地域の空気。"
      },
      {
        "type": "paragraph",
        "text": "これらは、動画でこそ伝わりやすい。"
      },
      {
        "type": "paragraph",
        "text": "AI時代には、きれいな画像や文章はいくらでも増えます。"
      },
      {
        "type": "paragraph",
        "text": "だからこそ、実際の現場で流れている時間が価値になります。"
      },
      {
        "type": "paragraph",
        "text": "動画は、空気を保存する。"
      },
      {
        "type": "paragraph",
        "text": "動画は、所作を残す。"
      },
      {
        "type": "paragraph",
        "text": "動画は、店の時間を伝える。"
      },
      {
        "type": "paragraph",
        "text": "小さなお店がSNS動画をやる意味は、ここにあります。"
      },
      {
        "type": "paragraph",
        "text": "バズるためだけではありません。"
      },
      {
        "type": "paragraph",
        "text": "自分たちの店にしか流れていない時間を、未来のお客様に届けるためです。"
      }
    ]
  },
  {
    "slug": "chapter-8",
    "navLabel": "第8章",
    "title": "第8章　現場で使える動画パターン —— 何を撮ればいいのか",
    "description": "SNS動画を始めようとすると、多くのお店が最初に止まります。",
    "keywords": [
      "SNS動画",
      "AI時代",
      "Save Plan Impulse",
      "なすぱらTV",
      "GEO",
      "地域店舗",
      "Instagram",
      "YouTube Shorts",
      "TikTok"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "「何を撮ればいいかわからない」が、最初の壁になる"
      },
      {
        "type": "paragraph",
        "text": "SNS動画を始めようとすると、多くのお店が最初に止まります。"
      },
      {
        "type": "paragraph",
        "text": "何を撮ればいいのかわからない。"
      },
      {
        "type": "paragraph",
        "text": "毎日そんなにネタがない。"
      },
      {
        "type": "paragraph",
        "text": "自分の店は特別ではない。"
      },
      {
        "type": "paragraph",
        "text": "映える商品がない。"
      },
      {
        "type": "paragraph",
        "text": "顔を出すのは恥ずかしい。"
      },
      {
        "type": "paragraph",
        "text": "忙しくて考える時間がない。"
      },
      {
        "type": "paragraph",
        "text": "これは、非常によくわかります。"
      },
      {
        "type": "paragraph",
        "text": "私自身も、なすぱらTVを始めた当初、毎回きれいに設計できていたわけではありません。"
      },
      {
        "type": "paragraph",
        "text": "むしろ、撮りながら迷っていました。"
      },
      {
        "type": "paragraph",
        "text": "この場所の何を撮れば伝わるのか。"
      },
      {
        "type": "paragraph",
        "text": "このお店の良さは、どこにあるのか。"
      },
      {
        "type": "paragraph",
        "text": "料理なのか。"
      },
      {
        "type": "paragraph",
        "text": "人なのか。"
      },
      {
        "type": "paragraph",
        "text": "空間なのか。"
      },
      {
        "type": "paragraph",
        "text": "地域なのか。"
      },
      {
        "type": "paragraph",
        "text": "それとも、まだ言葉になっていない何かなのか。"
      },
      {
        "type": "paragraph",
        "text": "その迷いの中で、何百本も作り続けるうちに、少しずつパターンが見えてきました。"
      },
      {
        "type": "paragraph",
        "text": "それが、黄金の7パターンであり、さらに細かく整理した16パターンです。"
      },
      {
        "type": "paragraph",
        "text": "ここで大事なのは、パターンを暗記することではありません。"
      },
      {
        "type": "paragraph",
        "text": "自分のお店の中に、すでにある魅力を見つけるための視点として使うことです。"
      },
      {
        "type": "heading",
        "text": "黄金の7パターン"
      },
      {
        "type": "paragraph",
        "text": "まず、現場で使いやすいのは7パターンです。"
      },
      {
        "type": "diagram",
        "text": "1. 商品・メニュー紹介型\n2. 居心地・雰囲気型\n3. 店主・スタッフの人物型\n4. 仕込み・舞台裏型\n5. 地域・風景・文化型\n6. 共感・挑戦型\n7. テロップ・無言型"
      },
      {
        "type": "paragraph",
        "text": "これだけで、ほとんどのお店は動画を作れます。"
      },
      {
        "type": "paragraph",
        "text": "しかも、この7つは単なるネタ帳ではありません。"
      },
      {
        "type": "paragraph",
        "text": "それぞれが、違う感情を動かします。"
      },
      {
        "type": "paragraph",
        "text": "商品・メニュー紹介型は、「食べたい」「試したい」を作ります。"
      },
      {
        "type": "paragraph",
        "text": "居心地・雰囲気型は、「ここにいたい」「落ち着きそう」を作ります。"
      },
      {
        "type": "paragraph",
        "text": "店主・スタッフの人物型は、「この人のお店なら行ってみたい」を作ります。"
      },
      {
        "type": "paragraph",
        "text": "仕込み・舞台裏型は、「ちゃんと作っている」「信頼できる」を作ります。"
      },
      {
        "type": "paragraph",
        "text": "地域・風景・文化型は、「この場所に行きたい」を作ります。"
      },
      {
        "type": "paragraph",
        "text": "共感・挑戦型は、「応援したい」を作ります。"
      },
      {
        "type": "paragraph",
        "text": "テロップ・無言型は、「気軽に見られる」「保存しやすい」を作ります。"
      },
      {
        "type": "paragraph",
        "text": "つまり、動画パターンとは、感情パターンでもあります。"
      },
      {
        "type": "paragraph",
        "text": "何を撮るかは、何を感じてもらいたいかで決まります。"
      },
      {
        "type": "heading",
        "text": "1. 商品・メニュー紹介型"
      },
      {
        "type": "paragraph",
        "text": "もっともわかりやすいのが、商品・メニュー紹介型です。"
      },
      {
        "type": "paragraph",
        "text": "カフェなら、コーヒー、ケーキ、ランチ、パスタ、季節メニュー。"
      },
      {
        "type": "paragraph",
        "text": "美容室なら、カット、カラー、パーマ、トリートメント。"
      },
      {
        "type": "paragraph",
        "text": "整体なら、施術メニュー、姿勢改善、肩こり対策。"
      },
      {
        "type": "paragraph",
        "text": "歯科医院なら、ホワイトニング、クリーニング、予防歯科。"
      },
      {
        "type": "paragraph",
        "text": "この型は、最初に取り組みやすい。"
      },
      {
        "type": "paragraph",
        "text": "ただし、注意点があります。"
      },
      {
        "type": "paragraph",
        "text": "単なる商品説明にしてはいけません。"
      },
      {
        "type": "paragraph",
        "text": "「本日のランチです」"
      },
      {
        "type": "paragraph",
        "text": "「新メニューです」"
      },
      {
        "type": "paragraph",
        "text": "「ぜひ来てください」"
      },
      {
        "type": "paragraph",
        "text": "これだけでは弱い。"
      },
      {
        "type": "paragraph",
        "text": "大事なのは、その商品がどんな気分を作るかです。"
      },
      {
        "type": "paragraph",
        "text": "たとえばカフェなら、"
      },
      {
        "type": "paragraph",
        "text": "雨の日に食べたくなるケーキ。"
      },
      {
        "type": "paragraph",
        "text": "仕事を終えた夕方に飲みたいコーヒー。"
      },
      {
        "type": "paragraph",
        "text": "那須に来たら一度は食べたいランチ。"
      },
      {
        "type": "paragraph",
        "text": "子どもと分けやすいプレート。"
      },
      {
        "type": "paragraph",
        "text": "ひとりで静かに食べられる焼き菓子。"
      },
      {
        "type": "paragraph",
        "text": "こう書くと、商品が単なる物ではなく、時間になります。"
      },
      {
        "type": "paragraph",
        "text": "人はメニュー名だけで動くのではありません。"
      },
      {
        "type": "paragraph",
        "text": "その商品がある時間を想像して動きます。"
      },
      {
        "type": "paragraph",
        "text": "商品紹介型で撮るべきなのは、商品そのものだけではなく、商品が生む時間です。"
      },
      {
        "type": "heading",
        "text": "2. 居心地・雰囲気型"
      },
      {
        "type": "paragraph",
        "text": "なすぱらTVで非常に重要だと感じたのが、居心地・雰囲気型です。"
      },
      {
        "type": "paragraph",
        "text": "これは、バズを狙う動画ではありません。"
      },
      {
        "type": "paragraph",
        "text": "派手な展開もない。"
      },
      {
        "type": "paragraph",
        "text": "強いオチもない。"
      },
      {
        "type": "paragraph",
        "text": "しかし、保存される。"
      },
      {
        "type": "paragraph",
        "text": "なぜか気になる。"
      },
      {
        "type": "paragraph",
        "text": "何度も見てしまう。"
      },
      {
        "type": "paragraph",
        "text": "この型で撮るのは、空気です。"
      },
      {
        "type": "paragraph",
        "text": "窓から入る光。"
      },
      {
        "type": "paragraph",
        "text": "テーブルの質感。"
      },
      {
        "type": "paragraph",
        "text": "椅子の距離感。"
      },
      {
        "type": "paragraph",
        "text": "店内の静けさ。"
      },
      {
        "type": "paragraph",
        "text": "小さな音。"
      },
      {
        "type": "paragraph",
        "text": "外の緑。"
      },
      {
        "type": "paragraph",
        "text": "湯気。"
      },
      {
        "type": "paragraph",
        "text": "夕方の影。"
      },
      {
        "type": "paragraph",
        "text": "人の少ない時間。"
      },
      {
        "type": "paragraph",
        "text": "こういうものは、AIでいくらでも文章化できます。"
      },
      {
        "type": "paragraph",
        "text": "でも、その店に実際に流れている空気は、現場で撮るしかありません。"
      },
      {
        "type": "paragraph",
        "text": "そして、AI時代には、この「現場でしか撮れない空気」が価値になります。"
      },
      {
        "type": "paragraph",
        "text": "居心地・雰囲気型は、Instagramと非常に相性がいい。"
      },
      {
        "type": "paragraph",
        "text": "保存されやすい。"
      },
      {
        "type": "paragraph",
        "text": "世界観が伝わりやすい。"
      },
      {
        "type": "paragraph",
        "text": "「いつか行きたい」という感情になりやすい。"
      },
      {
        "type": "paragraph",
        "text": "ただし、撮る側が焦ると壊れます。"
      },
      {
        "type": "paragraph",
        "text": "早く動かしすぎない。"
      },
      {
        "type": "paragraph",
        "text": "テロップを入れすぎない。"
      },
      {
        "type": "paragraph",
        "text": "説明しすぎない。"
      },
      {
        "type": "paragraph",
        "text": "間を残す。"
      },
      {
        "type": "paragraph",
        "text": "沈黙を怖がらない。"
      },
      {
        "type": "paragraph",
        "text": "これが大切です。"
      },
      {
        "type": "heading",
        "text": "3. 店主・スタッフの人物型"
      },
      {
        "type": "paragraph",
        "text": "小さなお店にとって、人物は最大の資産です。"
      },
      {
        "type": "paragraph",
        "text": "大企業は、ブランド名で信頼されます。"
      },
      {
        "type": "paragraph",
        "text": "チェーン店は、標準化で安心されます。"
      },
      {
        "type": "paragraph",
        "text": "しかし、小さなお店は「誰がやっているか」が大きい。"
      },
      {
        "type": "paragraph",
        "text": "店主の表情。"
      },
      {
        "type": "paragraph",
        "text": "スタッフの声。"
      },
      {
        "type": "paragraph",
        "text": "手元。"
      },
      {
        "type": "paragraph",
        "text": "一言。"
      },
      {
        "type": "paragraph",
        "text": "立ち方。"
      },
      {
        "type": "paragraph",
        "text": "お客様への距離感。"
      },
      {
        "type": "paragraph",
        "text": "これらが、店の印象を作ります。"
      },
      {
        "type": "paragraph",
        "text": "ただし、人物型は、無理に顔出しをする必要はありません。"
      },
      {
        "type": "paragraph",
        "text": "顔が苦手なら、手元でいい。"
      },
      {
        "type": "paragraph",
        "text": "声だけでもいい。"
      },
      {
        "type": "paragraph",
        "text": "後ろ姿でもいい。"
      },
      {
        "type": "paragraph",
        "text": "作業風景でもいい。"
      },
      {
        "type": "paragraph",
        "text": "大切なのは、「人がいる」と伝わることです。"
      },
      {
        "type": "paragraph",
        "text": "AI時代には、ここが非常に重要になります。"
      },
      {
        "type": "paragraph",
        "text": "AIが作った文章。"
      },
      {
        "type": "paragraph",
        "text": "AIが作った画像。"
      },
      {
        "type": "paragraph",
        "text": "AIが作った広告。"
      },
      {
        "type": "paragraph",
        "text": "それらが増えれば増えるほど、人は本物の人間の気配に反応します。"
      },
      {
        "type": "paragraph",
        "text": "手で作っている。"
      },
      {
        "type": "paragraph",
        "text": "考えている。"
      },
      {
        "type": "paragraph",
        "text": "悩んでいる。"
      },
      {
        "type": "paragraph",
        "text": "工夫している。"
      },
      {
        "type": "paragraph",
        "text": "続けている。"
      },
      {
        "type": "paragraph",
        "text": "そういう人間の気配が、小さなお店の信頼になります。"
      },
      {
        "type": "paragraph",
        "text": "店主・スタッフの人物型は、ファン動画の中心です。"
      },
      {
        "type": "heading",
        "text": "4. 仕込み・舞台裏型"
      },
      {
        "type": "paragraph",
        "text": "仕込みや舞台裏は、非常に強い動画素材です。"
      },
      {
        "type": "paragraph",
        "text": "なぜなら、普段お客様が見られないからです。"
      },
      {
        "type": "paragraph",
        "text": "開店前の準備。"
      },
      {
        "type": "paragraph",
        "text": "野菜を切る。"
      },
      {
        "type": "paragraph",
        "text": "生地をこねる。"
      },
      {
        "type": "paragraph",
        "text": "スープを仕込む。"
      },
      {
        "type": "paragraph",
        "text": "掃除をする。"
      },
      {
        "type": "paragraph",
        "text": "花を飾る。"
      },
      {
        "type": "paragraph",
        "text": "メニュー表を書き換える。"
      },
      {
        "type": "paragraph",
        "text": "椅子を整える。"
      },
      {
        "type": "paragraph",
        "text": "レジを開ける。"
      },
      {
        "type": "paragraph",
        "text": "こうした場面は、派手ではありません。"
      },
      {
        "type": "paragraph",
        "text": "しかし、店の誠実さが出ます。"
      },
      {
        "type": "paragraph",
        "text": "私がとても大事だと思うのは、仕込み動画には「売る前の時間」が映ることです。"
      },
      {
        "type": "paragraph",
        "text": "お客様が来る前に、どれだけ準備しているか。"
      },
      {
        "type": "paragraph",
        "text": "見えないところで、どれだけ整えているか。"
      },
      {
        "type": "paragraph",
        "text": "そこに、お店の姿勢が出る。"
      },
      {
        "type": "paragraph",
        "text": "これは口コミでは伝わりにくい。"
      },
      {
        "type": "paragraph",
        "text": "広告でも伝わりにくい。"
      },
      {
        "type": "paragraph",
        "text": "でも動画なら伝わります。"
      },
      {
        "type": "paragraph",
        "text": "仕込み・舞台裏型は、信頼を作ります。"
      },
      {
        "type": "paragraph",
        "text": "YouTubeにも向いています。"
      },
      {
        "type": "paragraph",
        "text": "Instagramにも向いています。"
      },
      {
        "type": "paragraph",
        "text": "TikTokでも、短く切れば強い。"
      },
      {
        "type": "paragraph",
        "text": "特に手元の動き、音、リズムは、短尺動画と相性がいい。"
      },
      {
        "type": "heading",
        "text": "5. 地域・風景・文化型"
      },
      {
        "type": "paragraph",
        "text": "地方のお店にとって、地域は背景ではありません。"
      },
      {
        "type": "paragraph",
        "text": "商品そのものの一部です。"
      },
      {
        "type": "paragraph",
        "text": "那須の店は、那須の光の中にあります。"
      },
      {
        "type": "paragraph",
        "text": "那須の道の中にあります。"
      },
      {
        "type": "paragraph",
        "text": "那須の季節の中にあります。"
      },
      {
        "type": "paragraph",
        "text": "那須に向かう気持ちの中にあります。"
      },
      {
        "type": "paragraph",
        "text": "この地域性を切り離して、お店だけを撮ると、魅力が弱くなることがあります。"
      },
      {
        "type": "paragraph",
        "text": "都市部の店舗なら、駅近、価格、便利さが強いかもしれません。"
      },
      {
        "type": "paragraph",
        "text": "しかし地方店の場合、"
      },
      {
        "type": "paragraph",
        "text": "道中。"
      },
      {
        "type": "paragraph",
        "text": "山。"
      },
      {
        "type": "paragraph",
        "text": "空。"
      },
      {
        "type": "paragraph",
        "text": "畑。"
      },
      {
        "type": "paragraph",
        "text": "林。"
      },
      {
        "type": "paragraph",
        "text": "雪。"
      },
      {
        "type": "paragraph",
        "text": "朝の光。"
      },
      {
        "type": "paragraph",
        "text": "夕方の道路。"
      },
      {
        "type": "paragraph",
        "text": "季節の変化。"
      },
      {
        "type": "paragraph",
        "text": "こうしたものがお店の価値とつながっています。"
      },
      {
        "type": "paragraph",
        "text": "地域・風景・文化型は、「この場所に行きたい」という感情を作ります。"
      },
      {
        "type": "paragraph",
        "text": "お店だけではなく、地域全体への来訪意欲を作る。"
      },
      {
        "type": "paragraph",
        "text": "なすぱらTVで見えてきたのは、地域SNS動画は一店舗だけの宣伝ではなく、地域全体の記憶を作るということでした。"
      },
      {
        "type": "paragraph",
        "text": "ある店の動画を見て、那須に行きたくなる。"
      },
      {
        "type": "paragraph",
        "text": "那須に行く予定ができて、別の店も候補に入る。"
      },
      {
        "type": "paragraph",
        "text": "複数の店が、地域の世界観を支える。"
      },
      {
        "type": "paragraph",
        "text": "これは地方にとって非常に大きい。"
      },
      {
        "type": "paragraph",
        "text": "地域性は、AI時代における小さなお店の強い武器です。"
      },
      {
        "type": "heading",
        "text": "6. 共感・挑戦型"
      },
      {
        "type": "paragraph",
        "text": "共感・挑戦型は、店主の物語を伝える動画です。"
      },
      {
        "type": "paragraph",
        "text": "なぜこの店を始めたのか。"
      },
      {
        "type": "paragraph",
        "text": "なぜこの地域で続けているのか。"
      },
      {
        "type": "paragraph",
        "text": "何に悩んでいるのか。"
      },
      {
        "type": "paragraph",
        "text": "何を変えたいのか。"
      },
      {
        "type": "paragraph",
        "text": "どんなお客様に来てほしいのか。"
      },
      {
        "type": "paragraph",
        "text": "どんな失敗があったのか。"
      },
      {
        "type": "paragraph",
        "text": "何を大切にしているのか。"
      },
      {
        "type": "paragraph",
        "text": "こうした内容は、少し勇気がいります。"
      },
      {
        "type": "paragraph",
        "text": "しかし、小さなお店にはとても向いています。"
      },
      {
        "type": "paragraph",
        "text": "なぜなら、人は完璧な店よりも、応援したくなる店に心を動かされるからです。"
      },
      {
        "type": "paragraph",
        "text": "ただし、苦労話を過剰に演出する必要はありません。"
      },
      {
        "type": "paragraph",
        "text": "泣かせようとしなくていい。"
      },
      {
        "type": "paragraph",
        "text": "ドラマチックにしなくていい。"
      },
      {
        "type": "paragraph",
        "text": "むしろ、淡々とした本音の方が伝わることがあります。"
      },
      {
        "type": "paragraph",
        "text": "「この地域で続けたい」"
      },
      {
        "type": "paragraph",
        "text": "「子ども連れでも安心できる場所にしたい」"
      },
      {
        "type": "paragraph",
        "text": "「観光の人にも地元の人にも来てほしい」"
      },
      {
        "type": "paragraph",
        "text": "「派手ではないけれど、毎日ちゃんと作りたい」"
      },
      {
        "type": "paragraph",
        "text": "こうした言葉で十分です。"
      },
      {
        "type": "paragraph",
        "text": "共感・挑戦型は、お店を単なる消費対象から、応援対象へ変えます。"
      },
      {
        "type": "heading",
        "text": "7. テロップ・無言型"
      },
      {
        "type": "paragraph",
        "text": "最後に、テロップ・無言型です。"
      },
      {
        "type": "paragraph",
        "text": "これは初心者に非常に向いています。"
      },
      {
        "type": "paragraph",
        "text": "話さなくていい。"
      },
      {
        "type": "paragraph",
        "text": "顔を出さなくていい。"
      },
      {
        "type": "paragraph",
        "text": "長い説明をしなくていい。"
      },
      {
        "type": "paragraph",
        "text": "映像に短いテロップを重ねるだけで成立します。"
      },
      {
        "type": "paragraph",
        "text": "たとえば、"
      },
      {
        "type": "paragraph",
        "text": "「那須で、ひとりでも入りやすいカフェ」"
      },
      {
        "type": "paragraph",
        "text": "「雨の日に行きたい静かな席」"
      },
      {
        "type": "paragraph",
        "text": "「初めての方におすすめのランチ」"
      },
      {
        "type": "paragraph",
        "text": "「駐車場が広くて安心」"
      },
      {
        "type": "paragraph",
        "text": "「子ども連れでも過ごしやすい理由」"
      },
      {
        "type": "paragraph",
        "text": "「朝の仕込み、今日はここから」"
      },
      {
        "type": "paragraph",
        "text": "この程度で十分です。"
      },
      {
        "type": "paragraph",
        "text": "無言型の良さは、見る人が自分の気持ちを入れやすいことです。"
      },
      {
        "type": "paragraph",
        "text": "説明しすぎないから、想像できる。"
      },
      {
        "type": "paragraph",
        "text": "音を出さなくても見られる。"
      },
      {
        "type": "paragraph",
        "text": "保存しやすい。"
      },
      {
        "type": "paragraph",
        "text": "移動中にも見やすい。"
      },
      {
        "type": "paragraph",
        "text": "Instagram、TikTok、YouTube Shortsのどれにも使えます。"
      },
      {
        "type": "paragraph",
        "text": "SNS動画を始めるなら、まずテロップ・無言型からでいい。"
      },
      {
        "type": "paragraph",
        "text": "最初から話そうとしなくていい。"
      },
      {
        "type": "paragraph",
        "text": "最初から完璧に編集しようとしなくていい。"
      },
      {
        "type": "paragraph",
        "text": "まず、店の中にある静かな魅力を15秒で切り取る。"
      },
      {
        "type": "paragraph",
        "text": "そこから始めればいいのです。"
      },
      {
        "type": "heading",
        "text": "16パターンは、細分化のために使う"
      },
      {
        "type": "paragraph",
        "text": "7パターンに慣れてきたら、16パターンに広げます。"
      },
      {
        "type": "paragraph",
        "text": "これは、毎回まったく新しい企画を考えるためではありません。"
      },
      {
        "type": "paragraph",
        "text": "同じ店の魅力を、違う角度から撮るためです。"
      },
      {
        "type": "paragraph",
        "text": "たとえば、"
      },
      {
        "type": "paragraph",
        "text": "グルメ・商品紹介型。"
      },
      {
        "type": "paragraph",
        "text": "居心地よさ・雰囲気型。"
      },
      {
        "type": "paragraph",
        "text": "店主・スタッフの人物・物語型。"
      },
      {
        "type": "paragraph",
        "text": "個人の挑戦・共感型。"
      },
      {
        "type": "paragraph",
        "text": "街・地域の風景・文化型。"
      },
      {
        "type": "paragraph",
        "text": "ビフォー・アフター・経過型。"
      },
      {
        "type": "paragraph",
        "text": "テロップ系。"
      },
      {
        "type": "paragraph",
        "text": "比較・Q&A型。"
      },
      {
        "type": "paragraph",
        "text": "季節・トレンド型。"
      },
      {
        "type": "paragraph",
        "text": "地域住民の日常利用型。"
      },
      {
        "type": "paragraph",
        "text": "地域貢献・未来共創型。"
      },
      {
        "type": "paragraph",
        "text": "インバウンド・多言語利便性型。"
      },
      {
        "type": "paragraph",
        "text": "インバウンド・文化体験特化型。"
      },
      {
        "type": "paragraph",
        "text": "UGC創出・ユーザー巻き込み型。"
      },
      {
        "type": "paragraph",
        "text": "意思決定支援・不安解消型。"
      },
      {
        "type": "paragraph",
        "text": "進捗感・緊急性訴求型。"
      },
      {
        "type": "paragraph",
        "text": "さらに、重複視聴・コアファン育成型。"
      },
      {
        "type": "paragraph",
        "text": "こうして並べると難しく見えます。"
      },
      {
        "type": "paragraph",
        "text": "しかし、考え方は単純です。"
      },
      {
        "type": "paragraph",
        "text": "同じ店を、商品として見る。"
      },
      {
        "type": "paragraph",
        "text": "空間として見る。"
      },
      {
        "type": "paragraph",
        "text": "人として見る。"
      },
      {
        "type": "paragraph",
        "text": "地域として見る。"
      },
      {
        "type": "paragraph",
        "text": "不安解消として見る。"
      },
      {
        "type": "paragraph",
        "text": "応援対象として見る。"
      },
      {
        "type": "paragraph",
        "text": "未来の旅行先として見る。"
      },
      {
        "type": "paragraph",
        "text": "この視点を増やすために、16パターンを使うのです。"
      },
      {
        "type": "heading",
        "text": "一週間の撮影例"
      },
      {
        "type": "paragraph",
        "text": "現場で使いやすいように、一週間の例を出します。"
      },
      {
        "type": "paragraph",
        "text": "カフェの場合です。"
      },
      {
        "type": "diagram",
        "text": "月曜日\n  仕込み・舞台裏型\n  朝の準備、豆を挽く音、開店前の店内\n\n火曜日\n  商品・メニュー紹介型\n  人気ランチ、季節のケーキ、今日のおすすめ\n\n水曜日\n  居心地・雰囲気型\n  窓際の席、雨の日、静かな午後\n\n木曜日\n  Q&A・不安解消型\n  駐車場、子ども連れ、予約、混雑時間\n\n金曜日\n  店主・スタッフ人物型\n  手元、ひと言、こだわり、準備の様子\n\n土曜日\n  TikTok向け入口動画\n  一瞬で伝わる料理の動き、湯気、音\n\n日曜日\n  地域・風景・文化型\n  那須の風景、周辺スポット、帰り道"
      },
      {
        "type": "paragraph",
        "text": "これを毎週完璧にやる必要はありません。"
      },
      {
        "type": "paragraph",
        "text": "むしろ、全部できなくていい。"
      },
      {
        "type": "paragraph",
        "text": "ただ、曜日ごとに型を決めておくと、迷いが減ります。"
      },
      {
        "type": "paragraph",
        "text": "迷いが減ると、続けやすくなります。"
      },
      {
        "type": "paragraph",
        "text": "SNS動画で大切なのは、才能よりも継続です。"
      },
      {
        "type": "paragraph",
        "text": "そして継続するためには、毎回ゼロから考えないことです。"
      },
      {
        "type": "heading",
        "text": "撮影で一番大事なのは、特別な瞬間ではない"
      },
      {
        "type": "paragraph",
        "text": "多くのお店は、「特別なことがないと投稿できない」と思っています。"
      },
      {
        "type": "paragraph",
        "text": "新メニューが出たら投稿する。"
      },
      {
        "type": "paragraph",
        "text": "イベントがあったら投稿する。"
      },
      {
        "type": "paragraph",
        "text": "キャンペーンがあったら投稿する。"
      },
      {
        "type": "paragraph",
        "text": "もちろん、それも大切です。"
      },
      {
        "type": "paragraph",
        "text": "しかし、ファン動画で重要なのは、特別な瞬間だけではありません。"
      },
      {
        "type": "paragraph",
        "text": "むしろ、日常です。"
      },
      {
        "type": "paragraph",
        "text": "毎日開店していること。"
      },
      {
        "type": "paragraph",
        "text": "同じように仕込んでいること。"
      },
      {
        "type": "paragraph",
        "text": "掃除していること。"
      },
      {
        "type": "paragraph",
        "text": "お客様を迎えていること。"
      },
      {
        "type": "paragraph",
        "text": "季節に合わせて少し変えていること。"
      },
      {
        "type": "paragraph",
        "text": "これらが、店の信頼を作ります。"
      },
      {
        "type": "paragraph",
        "text": "AI時代には、派手な宣伝文は誰でも作れます。"
      },
      {
        "type": "paragraph",
        "text": "でも、毎日の現場はその店にしかありません。"
      },
      {
        "type": "paragraph",
        "text": "だから、日常を撮る。"
      },
      {
        "type": "paragraph",
        "text": "いつもの席を撮る。"
      },
      {
        "type": "paragraph",
        "text": "いつもの仕込みを撮る。"
      },
      {
        "type": "paragraph",
        "text": "いつもの声を撮る。"
      },
      {
        "type": "paragraph",
        "text": "これが、いちばん強い一次情報になります。"
      },
      {
        "type": "heading",
        "text": "この章の結論"
      },
      {
        "type": "paragraph",
        "text": "何を撮ればいいかわからないときは、黄金の7パターンから始めればいい。"
      },
      {
        "type": "paragraph",
        "text": "商品。"
      },
      {
        "type": "paragraph",
        "text": "空気。"
      },
      {
        "type": "paragraph",
        "text": "人。"
      },
      {
        "type": "paragraph",
        "text": "仕込み。"
      },
      {
        "type": "paragraph",
        "text": "地域。"
      },
      {
        "type": "paragraph",
        "text": "共感。"
      },
      {
        "type": "paragraph",
        "text": "テロップ。"
      },
      {
        "type": "paragraph",
        "text": "この七つだけで、小さなお店のSNS動画は十分に始められます。"
      },
      {
        "type": "paragraph",
        "text": "慣れてきたら、16パターンに広げればいい。"
      },
      {
        "type": "paragraph",
        "text": "大事なのは、AIでも作れる一般論ではなく、その店にしかない現場を撮ることです。"
      },
      {
        "type": "paragraph",
        "text": "お店の中には、すでに素材があります。"
      },
      {
        "type": "paragraph",
        "text": "ただ、まだ見つけられていないだけです。"
      },
      {
        "type": "paragraph",
        "text": "SNS動画とは、店の中に眠っている感性を、少しずつ外に出していく作業なのです。"
      }
    ]
  },
  {
    "slug": "chapter-9",
    "navLabel": "第9章",
    "title": "第9章　毎日10分でできる3SNS同時動画戦略 —— SNS動画は、気合いでやらない",
    "description": "SNS動画で一番多い失敗は、最初だけ頑張って止まることです。",
    "keywords": [
      "SNS動画",
      "AI時代",
      "Save Plan Impulse",
      "なすぱらTV",
      "GEO",
      "地域店舗",
      "Instagram",
      "YouTube Shorts",
      "TikTok"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "続かないSNSには、理由がある"
      },
      {
        "type": "paragraph",
        "text": "SNS動画で一番多い失敗は、最初だけ頑張って止まることです。"
      },
      {
        "type": "paragraph",
        "text": "最初の一週間は投稿する。"
      },
      {
        "type": "paragraph",
        "text": "一ヶ月くらいは頑張る。"
      },
      {
        "type": "paragraph",
        "text": "でも、営業が忙しくなる。"
      },
      {
        "type": "paragraph",
        "text": "ネタが尽きる。"
      },
      {
        "type": "paragraph",
        "text": "編集が面倒になる。"
      },
      {
        "type": "paragraph",
        "text": "反応が少なくて落ち込む。"
      },
      {
        "type": "paragraph",
        "text": "ほかの仕事が優先になる。"
      },
      {
        "type": "paragraph",
        "text": "そして、気づいたら止まっている。"
      },
      {
        "type": "paragraph",
        "text": "これは、店主の根性がないからではありません。"
      },
      {
        "type": "paragraph",
        "text": "仕組みがないからです。"
      },
      {
        "type": "paragraph",
        "text": "SNS動画は、気合いで続けるものではありません。"
      },
      {
        "type": "paragraph",
        "text": "営業の中に組み込むものです。"
      },
      {
        "type": "paragraph",
        "text": "もっと言えば、毎日10分でできる形にするべきです。"
      },
      {
        "type": "paragraph",
        "text": "小さなお店のSNS動画は、店主の仕事を増やすためにあるのではありません。"
      },
      {
        "type": "paragraph",
        "text": "本来の営業を邪魔してまでやるものでもありません。"
      },
      {
        "type": "paragraph",
        "text": "料理を作る時間。"
      },
      {
        "type": "paragraph",
        "text": "接客する時間。"
      },
      {
        "type": "paragraph",
        "text": "掃除する時間。"
      },
      {
        "type": "paragraph",
        "text": "仕込みをする時間。"
      },
      {
        "type": "paragraph",
        "text": "スタッフと話す時間。"
      },
      {
        "type": "paragraph",
        "text": "そういう本業の時間を壊してしまうSNS運用は、長く続きません。"
      },
      {
        "type": "paragraph",
        "text": "だから、本書では「毎日10分でできる3SNS同時動画戦略」を基本にしたいと思います。"
      },
      {
        "type": "paragraph",
        "text": "1日10分。"
      },
      {
        "type": "paragraph",
        "text": "スマートフォン1台。"
      },
      {
        "type": "paragraph",
        "text": "同じ素材を、Instagram、YouTube Shorts、TikTokに出す。"
      },
      {
        "type": "paragraph",
        "text": "ただし、見る数字と意味は分ける。"
      },
      {
        "type": "paragraph",
        "text": "これなら、忙しいお店でも始められます。"
      },
      {
        "type": "paragraph",
        "text": "完璧な動画制作ではなく、無理なく続くルーティンを作る。"
      },
      {
        "type": "paragraph",
        "text": "ここが重要です。"
      },
      {
        "type": "paragraph",
        "text": "私は、なすぱらTVで大量の動画を作り続ける中で、ここを強く感じました。"
      },
      {
        "type": "paragraph",
        "text": "動画は、やる気がある日だけ作ると続きません。"
      },
      {
        "type": "paragraph",
        "text": "「今日は何を撮ろう」と毎回考えていると続きません。"
      },
      {
        "type": "paragraph",
        "text": "「編集に一時間かかる」と続きません。"
      },
      {
        "type": "paragraph",
        "text": "「完璧な一本を作ろう」とすると続きません。"
      },
      {
        "type": "paragraph",
        "text": "続けるには、型が必要です。"
      },
      {
        "type": "heading",
        "text": "撮影は、営業のついでに行う"
      },
      {
        "type": "paragraph",
        "text": "小さなお店のSNS動画は、撮影のために営業を止めてはいけません。"
      },
      {
        "type": "paragraph",
        "text": "もちろん、しっかりした撮影日を作るのも悪くありません。"
      },
      {
        "type": "paragraph",
        "text": "プロに撮ってもらうのも良い。"
      },
      {
        "type": "paragraph",
        "text": "しかし、日常的なSNS動画は、営業の中で撮る方が続きます。"
      },
      {
        "type": "paragraph",
        "text": "開店前に30秒。"
      },
      {
        "type": "paragraph",
        "text": "仕込み中に30秒。"
      },
      {
        "type": "paragraph",
        "text": "ランチ前に30秒。"
      },
      {
        "type": "paragraph",
        "text": "お客様がいない席を30秒。"
      },
      {
        "type": "paragraph",
        "text": "閉店後に30秒。"
      },
      {
        "type": "paragraph",
        "text": "このくらいでいい。"
      },
      {
        "type": "paragraph",
        "text": "最初から長く撮る必要はありません。"
      },
      {
        "type": "paragraph",
        "text": "スマートフォンを構えて、10秒から20秒の素材をいくつか残す。"
      },
      {
        "type": "paragraph",
        "text": "それだけで十分です。"
      },
      {
        "type": "paragraph",
        "text": "大事なのは、「撮影する時間」を特別な仕事にしすぎないことです。"
      },
      {
        "type": "paragraph",
        "text": "たとえばカフェなら、"
      },
      {
        "type": "paragraph",
        "text": "朝、店内に光が入ったら撮る。"
      },
      {
        "type": "paragraph",
        "text": "ケーキを並べたら撮る。"
      },
      {
        "type": "paragraph",
        "text": "コーヒーを淹れる手元を撮る。"
      },
      {
        "type": "paragraph",
        "text": "雨が降ったら窓際を撮る。"
      },
      {
        "type": "paragraph",
        "text": "閉店前に空の席を撮る。"
      },
      {
        "type": "paragraph",
        "text": "こういう小さな素材を残しておく。"
      },
      {
        "type": "paragraph",
        "text": "その素材が、あとで動画になります。"
      },
      {
        "type": "heading",
        "text": "毎日10分の基本ルーティン"
      },
      {
        "type": "paragraph",
        "text": "では、毎日10分で何をするのか。"
      },
      {
        "type": "paragraph",
        "text": "最初は、これだけで十分です。"
      },
      {
        "type": "diagram",
        "text": "0〜2分\n  今日の店内を見渡す\n  光、料理、仕込み、席、入口の中から一つだけ選ぶ\n\n2〜5分\n  スマートフォンで10〜15秒の動画を3本撮る\n  縦向きで撮る\n  余計な説明は入れない\n\n5〜7分\n  そのうち一番よい素材を選ぶ\n  必要なら短く切る\n\n7〜9分\n  短いテロップを1つだけ付ける\n  例：「雨の日に落ち着ける席」「今日の仕込み」「初めての方へ」\n\n9〜10分\n  Instagram、YouTube Shorts、TikTokに投稿する\n  または下書き保存する"
      },
      {
        "type": "paragraph",
        "text": "これでいい。"
      },
      {
        "type": "paragraph",
        "text": "本当にこれでいいのです。"
      },
      {
        "type": "paragraph",
        "text": "最初から凝った編集はいりません。"
      },
      {
        "type": "paragraph",
        "text": "サムネイルも毎回作り込まなくていい。"
      },
      {
        "type": "paragraph",
        "text": "BGM選びに時間をかけすぎなくていい。"
      },
      {
        "type": "paragraph",
        "text": "10分で終わることを優先します。"
      },
      {
        "type": "paragraph",
        "text": "なぜなら、10分で終わるなら続けられるからです。"
      },
      {
        "type": "paragraph",
        "text": "続けられるなら、お店の情報は少しずつ蓄積されます。"
      },
      {
        "type": "paragraph",
        "text": "蓄積されると、AIにも人間にも、お店の実体が伝わりやすくなります。"
      },
      {
        "type": "heading",
        "text": "3SNS同時投稿でよい。ただし、意味を変えて見る"
      },
      {
        "type": "paragraph",
        "text": "最初から、Instagram用、YouTube用、TikTok用に別々の動画を作ろうとしなくていい。"
      },
      {
        "type": "paragraph",
        "text": "それは大変です。"
      },
      {
        "type": "paragraph",
        "text": "特に小さなお店では、三媒体それぞれに専用動画を作る時間はなかなかありません。"
      },
      {
        "type": "paragraph",
        "text": "だから、まずは同じ素材を三つに出していい。"
      },
      {
        "type": "paragraph",
        "text": "同じ縦動画を、"
      },
      {
        "type": "paragraph",
        "text": "Instagram Reelsへ。"
      },
      {
        "type": "paragraph",
        "text": "YouTube Shortsへ。"
      },
      {
        "type": "paragraph",
        "text": "TikTokへ。"
      },
      {
        "type": "paragraph",
        "text": "この同時投稿で始める。"
      },
      {
        "type": "paragraph",
        "text": "ただし、投稿後に見る意味を変えます。"
      },
      {
        "type": "paragraph",
        "text": "Instagramでは、保存されたかを見る。"
      },
      {
        "type": "paragraph",
        "text": "YouTubeでは、検討材料になったかを見る。"
      },
      {
        "type": "paragraph",
        "text": "TikTokでは、新しい人に届いたかを見る。"
      },
      {
        "type": "paragraph",
        "text": "同じ動画でも、各SNSで役割が変わるのです。"
      },
      {
        "type": "paragraph",
        "text": "たとえば、店内の窓際席を撮った動画を三つに出したとします。"
      },
      {
        "type": "paragraph",
        "text": "Instagramでは、"
      },
      {
        "type": "paragraph",
        "text": "「ここ、保存しておこう」"
      },
      {
        "type": "paragraph",
        "text": "となるかもしれない。"
      },
      {
        "type": "paragraph",
        "text": "YouTubeでは、"
      },
      {
        "type": "paragraph",
        "text": "「店内はこういう雰囲気なんだ」"
      },
      {
        "type": "paragraph",
        "text": "という確認になるかもしれない。"
      },
      {
        "type": "paragraph",
        "text": "TikTokでは、"
      },
      {
        "type": "paragraph",
        "text": "「え、那須にこんな場所あるの？」"
      },
      {
        "type": "paragraph",
        "text": "という入口になるかもしれない。"
      },
      {
        "type": "paragraph",
        "text": "素材は同じでも、受け取られ方が違う。"
      },
      {
        "type": "paragraph",
        "text": "だから、最初は同時投稿で十分です。"
      },
      {
        "type": "paragraph",
        "text": "重要なのは、同じ動画を投稿しても、同じ数字で判断しないことです。"
      },
      {
        "type": "heading",
        "text": "10分ルーティンを曜日で少しだけ変える"
      },
      {
        "type": "paragraph",
        "text": "毎日まったく同じことをすると、飽きます。"
      },
      {
        "type": "paragraph",
        "text": "そこで、曜日ごとに撮る対象だけ変えます。"
      },
      {
        "type": "diagram",
        "text": "月曜日\n  仕込みを撮る\n  目的：信頼を作る\n\n火曜日\n  商品を撮る\n  目的：食べたい、試したいを作る\n\n水曜日\n  店内の空気を撮る\n  目的：保存される世界観を作る\n\n木曜日\n  よくある質問に答える\n  目的：不安を減らす\n\n金曜日\n  週末に向けた入口動画を撮る\n  目的：衝動を作る\n\n土曜日\n  忙しい日は無理に投稿しない\n  撮れたら短い素材だけ残す\n\n日曜日\n  地域や季節を撮る\n  目的：場所の記憶を作る"
      },
      {
        "type": "paragraph",
        "text": "これくらいでいい。"
      },
      {
        "type": "paragraph",
        "text": "大切なのは、土曜日のような忙しい日に「無理に投稿しない」と決めておくことです。"
      },
      {
        "type": "paragraph",
        "text": "飲食店なら、土日が忙しい。"
      },
      {
        "type": "paragraph",
        "text": "美容室も、週末が忙しい。"
      },
      {
        "type": "paragraph",
        "text": "整体やサロンも、予約が詰まる日があります。"
      },
      {
        "type": "paragraph",
        "text": "そういう日にSNSのために本業が乱れるのは本末転倒です。"
      },
      {
        "type": "paragraph",
        "text": "忙しい日は、撮るだけでいい。"
      },
      {
        "type": "paragraph",
        "text": "投稿しなくてもいい。"
      },
      {
        "type": "paragraph",
        "text": "10秒の素材を一本だけ残せば十分です。"
      },
      {
        "type": "paragraph",
        "text": "SNS動画は、お店を助けるためにある。"
      },
      {
        "type": "paragraph",
        "text": "お店を邪魔してはいけません。"
      },
      {
        "type": "heading",
        "text": "「撮る日」と「投稿する日」を分けてもいい"
      },
      {
        "type": "paragraph",
        "text": "毎日投稿が難しい場合は、撮る日と投稿する日を分けます。"
      },
      {
        "type": "paragraph",
        "text": "たとえば、平日の開店前に30分だけ撮る。"
      },
      {
        "type": "paragraph",
        "text": "その30分で、10本分の素材を撮る。"
      },
      {
        "type": "paragraph",
        "text": "あとは、毎日10分で一本ずつ投稿する。"
      },
      {
        "type": "paragraph",
        "text": "この方法でもいい。"
      },
      {
        "type": "diagram",
        "text": "月曜日の朝\n  30分だけ撮影\n  仕込み、商品、席、入口、手元をまとめて撮る\n\n火曜日〜金曜日\n  1日10分で編集・投稿\n\n土日\n  忙しければ投稿しない\n  撮れた素材だけ残す"
      },
      {
        "type": "paragraph",
        "text": "この方が楽なお店もあります。"
      },
      {
        "type": "paragraph",
        "text": "毎日撮るのが向いている店もあれば、まとめ撮りが向いている店もあります。"
      },
      {
        "type": "paragraph",
        "text": "正解は一つではありません。"
      },
      {
        "type": "paragraph",
        "text": "大切なのは、自分のお店の営業を壊さないことです。"
      },
      {
        "type": "paragraph",
        "text": "続けられる形が、その店にとっての正解です。"
      },
      {
        "type": "heading",
        "text": "店主がやらなくてもいい部分を決める"
      },
      {
        "type": "paragraph",
        "text": "もう一つ大事なことがあります。"
      },
      {
        "type": "paragraph",
        "text": "全部を店主がやらなくてもいい、ということです。"
      },
      {
        "type": "paragraph",
        "text": "店主が撮る。"
      },
      {
        "type": "paragraph",
        "text": "スタッフが撮る。"
      },
      {
        "type": "paragraph",
        "text": "家族が撮る。"
      },
      {
        "type": "paragraph",
        "text": "アルバイトが撮る。"
      },
      {
        "type": "paragraph",
        "text": "お客様に許可を得て、店内の雰囲気を撮る。"
      },
      {
        "type": "paragraph",
        "text": "役割を分けてもいい。"
      },
      {
        "type": "paragraph",
        "text": "たとえば、"
      },
      {
        "type": "paragraph",
        "text": "店主は、何を伝えるかを決める。"
      },
      {
        "type": "paragraph",
        "text": "スタッフは、手元や店内を撮る。"
      },
      {
        "type": "paragraph",
        "text": "AIは、投稿文の下書きを作る。"
      },
      {
        "type": "paragraph",
        "text": "店主が最後に確認して投稿する。"
      },
      {
        "type": "paragraph",
        "text": "この流れなら、店主の負担はかなり減ります。"
      },
      {
        "type": "paragraph",
        "text": "SNS動画は、店主が全部抱え込むものではありません。"
      },
      {
        "type": "paragraph",
        "text": "店全体で少しずつ素材を残す。"
      },
      {
        "type": "paragraph",
        "text": "それを、店の言葉として整える。"
      },
      {
        "type": "paragraph",
        "text": "このくらいの感覚でいいのです。"
      },
      {
        "type": "heading",
        "text": "一日一本を作ろうとしない"
      },
      {
        "type": "paragraph",
        "text": "SNS運用でよくある誤解があります。"
      },
      {
        "type": "paragraph",
        "text": "「毎日一本、完成動画を作らなければならない」"
      },
      {
        "type": "paragraph",
        "text": "これは、かなり苦しいです。"
      },
      {
        "type": "paragraph",
        "text": "毎日、企画して、撮影して、編集して、投稿する。"
      },
      {
        "type": "paragraph",
        "text": "個人店がこれを続けるのは大変です。"
      },
      {
        "type": "paragraph",
        "text": "最初は、完成動画を毎日作るより、素材を毎日少しずつ貯める方がいい。"
      },
      {
        "type": "paragraph",
        "text": "動画素材の貯金を作る。"
      },
      {
        "type": "paragraph",
        "text": "これが重要です。"
      },
      {
        "type": "diagram",
        "text": "月曜日：仕込みを3本撮る\n火曜日：店内の空気を2本撮る\n水曜日：商品を3本撮る\n木曜日：Q&A用の素材を1本撮る\n金曜日：店主の手元を2本撮る"
      },
      {
        "type": "paragraph",
        "text": "こうして素材を貯めておけば、投稿はあとからできます。"
      },
      {
        "type": "paragraph",
        "text": "忙しい日に無理して撮らなくてもいい。"
      },
      {
        "type": "paragraph",
        "text": "雨の日の素材も、晴れの日の素材も、季節の素材も、少しずつ残っていく。"
      },
      {
        "type": "paragraph",
        "text": "この「素材の貯金」があると、SNS運用はとても楽になります。"
      },
      {
        "type": "heading",
        "text": "週に3本で十分始められる"
      },
      {
        "type": "paragraph",
        "text": "小さなお店が最初から毎日投稿を目指す必要はありません。"
      },
      {
        "type": "paragraph",
        "text": "まずは週に3本で十分です。"
      },
      {
        "type": "paragraph",
        "text": "私なら、最初はこう組みます。"
      },
      {
        "type": "diagram",
        "text": "月曜日：保存される動画\n  店内の空気、商品、季節感\n  主にInstagram向け\n\n水曜日：不安を減らす動画\n  駐車場、席、注文方法、よくある質問\n  主にYouTube向け\n\n金曜日：入口になる動画\n  一瞬で伝わる料理、音、動き、地域風景\n  主にTikTok向け"
      },
      {
        "type": "paragraph",
        "text": "週3本なら、現実的です。"
      },
      {
        "type": "paragraph",
        "text": "しかも、この3本は役割が違います。"
      },
      {
        "type": "paragraph",
        "text": "保存される動画。"
      },
      {
        "type": "paragraph",
        "text": "計画される動画。"
      },
      {
        "type": "paragraph",
        "text": "衝動を作る動画。"
      },
      {
        "type": "paragraph",
        "text": "つまり、Save → Plan → Impulseを一週間の中に組み込むのです。"
      },
      {
        "type": "paragraph",
        "text": "これなら、単なる投稿頻度ではなく、意味のある運用になります。"
      },
      {
        "type": "heading",
        "text": "編集は、短く、軽く、同じ型でいい"
      },
      {
        "type": "paragraph",
        "text": "編集で疲れる人は多いです。"
      },
      {
        "type": "paragraph",
        "text": "凝ったテロップ。"
      },
      {
        "type": "paragraph",
        "text": "細かいカット。"
      },
      {
        "type": "paragraph",
        "text": "効果音。"
      },
      {
        "type": "paragraph",
        "text": "BGM選び。"
      },
      {
        "type": "paragraph",
        "text": "字幕。"
      },
      {
        "type": "paragraph",
        "text": "色調整。"
      },
      {
        "type": "paragraph",
        "text": "サムネイル。"
      },
      {
        "type": "paragraph",
        "text": "これらを完璧にやろうとすると、すぐに続かなくなります。"
      },
      {
        "type": "paragraph",
        "text": "最初は、編集を軽くしていい。"
      },
      {
        "type": "paragraph",
        "text": "15秒から30秒。"
      },
      {
        "type": "paragraph",
        "text": "テロップは1行から3行。"
      },
      {
        "type": "paragraph",
        "text": "カットは3つまで。"
      },
      {
        "type": "paragraph",
        "text": "BGMは固定でもいい。"
      },
      {
        "type": "paragraph",
        "text": "フォントも固定でいい。"
      },
      {
        "type": "paragraph",
        "text": "色も大きくいじらなくていい。"
      },
      {
        "type": "paragraph",
        "text": "むしろ、小さなお店の場合、編集しすぎると空気が消えることがあります。"
      },
      {
        "type": "paragraph",
        "text": "きれいにしすぎる。"
      },
      {
        "type": "paragraph",
        "text": "速くしすぎる。"
      },
      {
        "type": "paragraph",
        "text": "テロップを入れすぎる。"
      },
      {
        "type": "paragraph",
        "text": "音を盛りすぎる。"
      },
      {
        "type": "paragraph",
        "text": "すると、店の静けさがなくなる。"
      },
      {
        "type": "paragraph",
        "text": "だから、編集は「伝わる最低限」でいい。"
      },
      {
        "type": "paragraph",
        "text": "動画の目的は、編集技術を見せることではありません。"
      },
      {
        "type": "paragraph",
        "text": "店の空気を届けることです。"
      },
      {
        "type": "heading",
        "text": "投稿文は、AIに手伝わせていい"
      },
      {
        "type": "paragraph",
        "text": "ここでAIを使います。"
      },
      {
        "type": "paragraph",
        "text": "私は、AI時代のSNS動画では、AIを否定する必要はないと思っています。"
      },
      {
        "type": "paragraph",
        "text": "むしろ、使うべきです。"
      },
      {
        "type": "paragraph",
        "text": "ただし、AIに全部任せてはいけません。"
      },
      {
        "type": "paragraph",
        "text": "AIに任せていいのは、整える部分です。"
      },
      {
        "type": "paragraph",
        "text": "たとえば、"
      },
      {
        "type": "paragraph",
        "text": "動画の内容を箇条書きで入れる。"
      },
      {
        "type": "paragraph",
        "text": "お店の特徴を入れる。"
      },
      {
        "type": "paragraph",
        "text": "誰に見てほしいかを入れる。"
      },
      {
        "type": "paragraph",
        "text": "季節感を入れる。"
      },
      {
        "type": "paragraph",
        "text": "すると、AIは投稿文の案を作れます。"
      },
      {
        "type": "paragraph",
        "text": "ハッシュタグ案も出せます。"
      },
      {
        "type": "paragraph",
        "text": "英語文も作れます。"
      },
      {
        "type": "paragraph",
        "text": "Googleマップの投稿文も作れます。"
      },
      {
        "type": "paragraph",
        "text": "しかし、最後に人間が直す。"
      },
      {
        "type": "paragraph",
        "text": "店の言葉に戻す。"
      },
      {
        "type": "paragraph",
        "text": "言いすぎているところを削る。"
      },
      {
        "type": "paragraph",
        "text": "営業臭が強いところを弱める。"
      },
      {
        "type": "paragraph",
        "text": "実際と違う表現を消す。"
      },
      {
        "type": "paragraph",
        "text": "これが大切です。"
      },
      {
        "type": "paragraph",
        "text": "AIは、言葉の補助輪です。"
      },
      {
        "type": "paragraph",
        "text": "店の感性そのものではありません。"
      },
      {
        "type": "paragraph",
        "text": "AIを使うほど、人間側の判断が大事になります。"
      },
      {
        "type": "heading",
        "text": "投稿後に見る数字は、三つだけでいい"
      },
      {
        "type": "paragraph",
        "text": "数字を見るのが苦手な店主も多いと思います。"
      },
      {
        "type": "paragraph",
        "text": "再生数。"
      },
      {
        "type": "paragraph",
        "text": "リーチ。"
      },
      {
        "type": "paragraph",
        "text": "インプレッション。"
      },
      {
        "type": "paragraph",
        "text": "保存数。"
      },
      {
        "type": "paragraph",
        "text": "いいね数。"
      },
      {
        "type": "paragraph",
        "text": "コメント数。"
      },
      {
        "type": "paragraph",
        "text": "視聴維持率。"
      },
      {
        "type": "paragraph",
        "text": "プロフィールアクセス。"
      },
      {
        "type": "paragraph",
        "text": "フォロワー増加。"
      },
      {
        "type": "paragraph",
        "text": "Googleマップの表示回数。"
      },
      {
        "type": "paragraph",
        "text": "全部見ると、疲れます。"
      },
      {
        "type": "paragraph",
        "text": "最初は三つでいい。"
      },
      {
        "type": "diagram",
        "text": "1. 保存されたか\n2. プロフィールや地図に進んだか\n3. 実際の会話に出たか"
      },
      {
        "type": "paragraph",
        "text": "この三つです。"
      },
      {
        "type": "paragraph",
        "text": "保存されたなら、未来の来店候補になっています。"
      },
      {
        "type": "paragraph",
        "text": "プロフィールや地図に進んだなら、計画段階に入っています。"
      },
      {
        "type": "paragraph",
        "text": "実際の会話に出たなら、現実に届いています。"
      },
      {
        "type": "paragraph",
        "text": "「動画見ました」"
      },
      {
        "type": "paragraph",
        "text": "「あれ、おいしそうでした」"
      },
      {
        "type": "paragraph",
        "text": "「駐車場あるんですね」"
      },
      {
        "type": "paragraph",
        "text": "「Instagramで保存してました」"
      },
      {
        "type": "paragraph",
        "text": "「YouTubeで見て来ました」"
      },
      {
        "type": "paragraph",
        "text": "こう言われたら、それは非常に大切なデータです。"
      },
      {
        "type": "paragraph",
        "text": "小さなお店のSNS運用では、画面上の数字だけではなく、店頭での反応も見てください。"
      },
      {
        "type": "paragraph",
        "text": "むしろ、店頭の一言の方が重要なことがあります。"
      },
      {
        "type": "heading",
        "text": "伸びなかった動画を捨てない"
      },
      {
        "type": "paragraph",
        "text": "SNSでは、伸びなかった動画を失敗だと思いがちです。"
      },
      {
        "type": "paragraph",
        "text": "しかし、これは違います。"
      },
      {
        "type": "paragraph",
        "text": "伸びなかった動画にも役割があります。"
      },
      {
        "type": "paragraph",
        "text": "たとえば、駐車場の案内動画。"
      },
      {
        "type": "paragraph",
        "text": "これはバズりません。"
      },
      {
        "type": "paragraph",
        "text": "でも、初めて来る人の不安を減らします。"
      },
      {
        "type": "paragraph",
        "text": "席の説明動画。"
      },
      {
        "type": "paragraph",
        "text": "これもバズらないかもしれません。"
      },
      {
        "type": "paragraph",
        "text": "でも、子ども連れや高齢の方には重要です。"
      },
      {
        "type": "paragraph",
        "text": "店主の挨拶動画。"
      },
      {
        "type": "paragraph",
        "text": "再生数は少ないかもしれません。"
      },
      {
        "type": "paragraph",
        "text": "でも、信頼にはつながります。"
      },
      {
        "type": "paragraph",
        "text": "つまり、動画には「伸びる動画」と「役に立つ動画」があります。"
      },
      {
        "type": "paragraph",
        "text": "この二つを混同してはいけません。"
      },
      {
        "type": "paragraph",
        "text": "小さなお店には、役に立つ動画が必要です。"
      },
      {
        "type": "paragraph",
        "text": "バズる動画だけでは、来店前の不安は消えません。"
      },
      {
        "type": "paragraph",
        "text": "役に立つ動画があるから、保存された感情が実際の来店に変わります。"
      },
      {
        "type": "heading",
        "text": "月に一度、振り返る"
      },
      {
        "type": "paragraph",
        "text": "SNS運用は、毎日細かく一喜一憂しない方がいい。"
      },
      {
        "type": "paragraph",
        "text": "見るなら、月に一度で十分です。"
      },
      {
        "type": "paragraph",
        "text": "一ヶ月の投稿を見返す。"
      },
      {
        "type": "paragraph",
        "text": "保存された動画はどれか。"
      },
      {
        "type": "paragraph",
        "text": "コメントが来た動画はどれか。"
      },
      {
        "type": "paragraph",
        "text": "お客様の会話に出た動画はどれか。"
      },
      {
        "type": "paragraph",
        "text": "Googleマップのアクセスは増えたか。"
      },
      {
        "type": "paragraph",
        "text": "プロフィールへのアクセスは増えたか。"
      },
      {
        "type": "paragraph",
        "text": "来店時に動画の話が出たか。"
      },
      {
        "type": "paragraph",
        "text": "これを確認します。"
      },
      {
        "type": "paragraph",
        "text": "そして、翌月の方針を決める。"
      },
      {
        "type": "paragraph",
        "text": "保存が多かった動画をもう一度違う角度で撮る。"
      },
      {
        "type": "paragraph",
        "text": "質問が多かった内容をQ&A動画にする。"
      },
      {
        "type": "paragraph",
        "text": "来店につながった動画の型を増やす。"
      },
      {
        "type": "paragraph",
        "text": "伸びたけれど来店と関係なさそうな動画は、やりすぎない。"
      },
      {
        "type": "paragraph",
        "text": "この程度でいい。"
      },
      {
        "type": "paragraph",
        "text": "SNS運用は、毎日焦るものではありません。"
      },
      {
        "type": "paragraph",
        "text": "毎月少しずつ、店の伝わり方を整えていくものです。"
      },
      {
        "type": "heading",
        "text": "自走するための最小セット"
      },
      {
        "type": "paragraph",
        "text": "現場のお店が自走するために必要なものは、それほど多くありません。"
      },
      {
        "type": "diagram",
        "text": "スマートフォン\n  まずはこれで十分\n\n固定の撮影場所\n  窓際、厨房、入口、カウンターなど\n\n週3本の投稿型\n  Save / Plan / Impulse\n\n投稿文のAI補助\n  ただし最後は店の言葉に直す\n\n月1回の振り返り\n  保存、地図遷移、店頭反応を見る"
      },
      {
        "type": "paragraph",
        "text": "これだけで始められます。"
      },
      {
        "type": "paragraph",
        "text": "最初から機材を買わなくていい。"
      },
      {
        "type": "paragraph",
        "text": "最初から外注しなくていい。"
      },
      {
        "type": "paragraph",
        "text": "最初から完璧な編集をしなくていい。"
      },
      {
        "type": "paragraph",
        "text": "大事なのは、店の現場が続く形にすることです。"
      },
      {
        "type": "paragraph",
        "text": "SNS動画は、店主を疲れさせるためのものではありません。"
      },
      {
        "type": "paragraph",
        "text": "店の魅力を、無理なく外に出すためのものです。"
      },
      {
        "type": "heading",
        "text": "この章の結論"
      },
      {
        "type": "paragraph",
        "text": "SNS動画は、気合いで続けてはいけません。"
      },
      {
        "type": "paragraph",
        "text": "仕組みで続ける。"
      },
      {
        "type": "paragraph",
        "text": "営業の中で撮る。"
      },
      {
        "type": "paragraph",
        "text": "素材を貯める。"
      },
      {
        "type": "paragraph",
        "text": "週3本から始める。"
      },
      {
        "type": "paragraph",
        "text": "編集は軽くする。"
      },
      {
        "type": "paragraph",
        "text": "AIに投稿文を手伝わせる。"
      },
      {
        "type": "paragraph",
        "text": "数字は、保存、地図遷移、店頭反応を見る。"
      },
      {
        "type": "paragraph",
        "text": "月に一度、振り返る。"
      },
      {
        "type": "paragraph",
        "text": "このくらいで十分です。"
      },
      {
        "type": "paragraph",
        "text": "小さなお店に必要なのは、SNS担当者になることではありません。"
      },
      {
        "type": "paragraph",
        "text": "お店を続けながら、店の空気を少しずつ外に届けることです。"
      },
      {
        "type": "paragraph",
        "text": "続けられる形こそ、正しい形です。"
      },
      {
        "type": "paragraph",
        "text": "SNS動画は、営業を壊してまでやるものではありません。"
      },
      {
        "type": "paragraph",
        "text": "営業の中に静かに組み込まれていくものなのです。"
      },
      {
        "type": "paragraph",
        "text": "毎日10分でいい。"
      },
      {
        "type": "paragraph",
        "text": "三つのSNSに同じ素材を置くところからでいい。"
      },
      {
        "type": "paragraph",
        "text": "完璧でなくていい。"
      },
      {
        "type": "paragraph",
        "text": "お店の仕事を邪魔しないこと。"
      },
      {
        "type": "paragraph",
        "text": "これが、AI時代の小さなお店にとって、もっとも現実的なSNS動画戦略です。"
      }
    ]
  },
  {
    "slug": "chapter-10",
    "navLabel": "第10章",
    "title": "第10章　AIに手伝わせる。でも、店の言葉に戻す",
    "description": "AI時代のSNS動画で、AIを使わないのはもったいないと思います。",
    "keywords": [
      "SNS動画",
      "AI時代",
      "Save Plan Impulse",
      "なすぱらTV",
      "GEO",
      "地域店舗",
      "Instagram",
      "YouTube Shorts",
      "TikTok"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "AIを使わないのは、もったいない"
      },
      {
        "type": "paragraph",
        "text": "AI時代のSNS動画で、AIを使わないのはもったいないと思います。"
      },
      {
        "type": "paragraph",
        "text": "投稿文。"
      },
      {
        "type": "paragraph",
        "text": "ハッシュタグ。"
      },
      {
        "type": "paragraph",
        "text": "タイトル。"
      },
      {
        "type": "paragraph",
        "text": "説明文。"
      },
      {
        "type": "paragraph",
        "text": "英語訳。"
      },
      {
        "type": "paragraph",
        "text": "中国語訳。"
      },
      {
        "type": "paragraph",
        "text": "韓国語訳。"
      },
      {
        "type": "paragraph",
        "text": "Googleマップの投稿。"
      },
      {
        "type": "paragraph",
        "text": "口コミ返信。"
      },
      {
        "type": "paragraph",
        "text": "よくある質問。"
      },
      {
        "type": "paragraph",
        "text": "メニュー説明。"
      },
      {
        "type": "paragraph",
        "text": "これらは、AIにかなり手伝ってもらえます。"
      },
      {
        "type": "paragraph",
        "text": "特に小さなお店では、文章を書く時間がありません。"
      },
      {
        "type": "paragraph",
        "text": "営業が終わったあとに、Instagramの投稿文を考える。"
      },
      {
        "type": "paragraph",
        "text": "YouTube Shortsのタイトルを考える。"
      },
      {
        "type": "paragraph",
        "text": "TikTokの説明文を考える。"
      },
      {
        "type": "paragraph",
        "text": "Googleマップの投稿も書く。"
      },
      {
        "type": "paragraph",
        "text": "口コミ返信もする。"
      },
      {
        "type": "paragraph",
        "text": "これを全部、人間だけでやろうとすると疲れます。"
      },
      {
        "type": "paragraph",
        "text": "だから、AIを使う。"
      },
      {
        "type": "paragraph",
        "text": "これは自然な流れです。"
      },
      {
        "type": "paragraph",
        "text": "ただし、ここで大事なことがあります。"
      },
      {
        "type": "paragraph",
        "text": "AIに任せるのは、文章を整えるところまでです。"
      },
      {
        "type": "paragraph",
        "text": "店の感性そのものを、AIに丸投げしてはいけません。"
      },
      {
        "type": "heading",
        "text": "AIは、言葉の下書き係である"
      },
      {
        "type": "paragraph",
        "text": "AIは、非常に優秀な下書き係です。"
      },
      {
        "type": "paragraph",
        "text": "たとえば、こんな材料を入れます。"
      },
      {
        "type": "diagram",
        "text": "今日の動画：\n雨の日の窓際席\n\nお店：\n那須の静かなカフェ\n\n伝えたいこと：\n雨の日でも落ち着いて過ごせる\n\n来てほしい人：\nひとりで静かに過ごしたい人\n週末に那須へ来る人\n\n雰囲気：\n売り込みすぎず、静かに"
      },
      {
        "type": "paragraph",
        "text": "これだけ入れれば、AIは投稿文を作ってくれます。"
      },
      {
        "type": "paragraph",
        "text": "たとえば、"
      },
      {
        "type": "paragraph",
        "text": "「雨の日の那須で、少し静かに過ごしたい方へ」"
      },
      {
        "type": "paragraph",
        "text": "「窓際の席から見える景色と、ゆっくりした時間」"
      },
      {
        "type": "paragraph",
        "text": "「週末の候補に、そっと保存しておいてください」"
      },
      {
        "type": "paragraph",
        "text": "こういう文章が出てくるかもしれません。"
      },
      {
        "type": "paragraph",
        "text": "これは便利です。"
      },
      {
        "type": "paragraph",
        "text": "ゼロから書くより、ずっと楽です。"
      },
      {
        "type": "paragraph",
        "text": "しかし、そのまま使う前に、必ず店の言葉に戻します。"
      },
      {
        "type": "paragraph",
        "text": "自分のお店が本当に言いそうな言葉か。"
      },
      {
        "type": "paragraph",
        "text": "大げさではないか。"
      },
      {
        "type": "paragraph",
        "text": "実際より良く見せすぎていないか。"
      },
      {
        "type": "paragraph",
        "text": "お客様に対して距離が近すぎないか。"
      },
      {
        "type": "paragraph",
        "text": "逆に、冷たすぎないか。"
      },
      {
        "type": "paragraph",
        "text": "この確認が必要です。"
      },
      {
        "type": "paragraph",
        "text": "AIは、言葉を出すのは得意です。"
      },
      {
        "type": "paragraph",
        "text": "でも、その店らしいかどうかは、店の人にしか判断できません。"
      },
      {
        "type": "heading",
        "text": "AI文章は、少しだけ整いすぎる"
      },
      {
        "type": "paragraph",
        "text": "AIで作った文章には、よくある癖があります。"
      },
      {
        "type": "paragraph",
        "text": "きれいすぎる。"
      },
      {
        "type": "paragraph",
        "text": "説明しすぎる。"
      },
      {
        "type": "paragraph",
        "text": "少し大げさ。"
      },
      {
        "type": "paragraph",
        "text": "どこかで見たことがある。"
      },
      {
        "type": "paragraph",
        "text": "やさしそうだが、具体性が薄い。"
      },
      {
        "type": "paragraph",
        "text": "「心を込めて」"
      },
      {
        "type": "paragraph",
        "text": "「特別なひととき」"
      },
      {
        "type": "paragraph",
        "text": "「癒しの空間」"
      },
      {
        "type": "paragraph",
        "text": "「こだわりの一杯」"
      },
      {
        "type": "paragraph",
        "text": "「ぜひお越しください」"
      },
      {
        "type": "paragraph",
        "text": "こういう言葉が並びやすい。"
      },
      {
        "type": "paragraph",
        "text": "もちろん、悪い言葉ではありません。"
      },
      {
        "type": "paragraph",
        "text": "でも、どのお店にも使える言葉は、だんだん弱くなります。"
      },
      {
        "type": "paragraph",
        "text": "AI時代には、誰でもきれいな文章を作れるからです。"
      },
      {
        "type": "paragraph",
        "text": "だから、お店側はAIの文章を少し崩す必要があります。"
      },
      {
        "type": "paragraph",
        "text": "具体的にする。"
      },
      {
        "type": "paragraph",
        "text": "自分の言葉にする。"
      },
      {
        "type": "paragraph",
        "text": "言いすぎを削る。"
      },
      {
        "type": "paragraph",
        "text": "現場の事実を入れる。"
      },
      {
        "type": "paragraph",
        "text": "たとえば、"
      },
      {
        "type": "paragraph",
        "text": "「癒しの空間で特別なひとときを」"
      },
      {
        "type": "paragraph",
        "text": "よりも、"
      },
      {
        "type": "paragraph",
        "text": "「雨の日は、入口から二番目の窓際席がいちばん静かです」"
      },
      {
        "type": "paragraph",
        "text": "の方が強いことがあります。"
      },
      {
        "type": "paragraph",
        "text": "「こだわりのコーヒー」"
      },
      {
        "type": "paragraph",
        "text": "よりも、"
      },
      {
        "type": "paragraph",
        "text": "「今日は少し深めに淹れています」"
      },
      {
        "type": "paragraph",
        "text": "の方が伝わることがあります。"
      },
      {
        "type": "paragraph",
        "text": "「ぜひお越しください」"
      },
      {
        "type": "paragraph",
        "text": "よりも、"
      },
      {
        "type": "paragraph",
        "text": "「那須に来る日の候補に、そっと保存しておいてください」"
      },
      {
        "type": "paragraph",
        "text": "の方が自然なことがあります。"
      },
      {
        "type": "paragraph",
        "text": "AIの文章は、整っています。"
      },
      {
        "type": "paragraph",
        "text": "でも、整いすぎた文章だけでは、その店の体温が消えることがある。"
      },
      {
        "type": "paragraph",
        "text": "だから、人間が最後に戻すのです。"
      },
      {
        "type": "heading",
        "text": "AIに頼むべきこと、頼みすぎてはいけないこと"
      },
      {
        "type": "paragraph",
        "text": "AIに頼むべきことは、たくさんあります。"
      },
      {
        "type": "diagram",
        "text": "AIに頼んでよいこと\n  投稿文の下書き\n  ハッシュタグ案\n  タイトル案\n  YouTube説明文\n  TikTok向け短文\n  Instagram向け保存されやすい文章\n  多言語翻訳\n  FAQ作成\n  口コミ返信案\n  メニュー紹介文の整理"
      },
      {
        "type": "paragraph",
        "text": "これは、どんどん使っていい。"
      },
      {
        "type": "paragraph",
        "text": "特に、英語や中国語、韓国語の下書きは、インバウンド対応で大きな助けになります。"
      },
      {
        "type": "paragraph",
        "text": "Googleマップの口コミ返信も、AIを使えばかなり楽になります。"
      },
      {
        "type": "paragraph",
        "text": "ただし、頼みすぎてはいけないこともあります。"
      },
      {
        "type": "diagram",
        "text": "AIに丸投げしてはいけないこと\n  店の本当の強みを決めること\n  来てほしいお客様を決めること\n  店主の思想を作ること\n  実際にはない魅力を盛ること\n  体験していないことを書くこと\n  お客様への距離感を決めること"
      },
      {
        "type": "paragraph",
        "text": "ここは人間の仕事です。"
      },
      {
        "type": "paragraph",
        "text": "AIは、店を訪れていません。"
      },
      {
        "type": "paragraph",
        "text": "厨房の熱を知りません。"
      },
      {
        "type": "paragraph",
        "text": "朝の仕込みの忙しさを知りません。"
      },
      {
        "type": "paragraph",
        "text": "常連さんとの会話を知りません。"
      },
      {
        "type": "paragraph",
        "text": "雨の日の客足を知りません。"
      },
      {
        "type": "paragraph",
        "text": "店主が本当は何に悩んでいるかも知りません。"
      },
      {
        "type": "paragraph",
        "text": "だから、店の核をAIに決めさせてはいけない。"
      },
      {
        "type": "paragraph",
        "text": "AIは助手です。"
      },
      {
        "type": "paragraph",
        "text": "編集者です。"
      },
      {
        "type": "paragraph",
        "text": "翻訳者です。"
      },
      {
        "type": "paragraph",
        "text": "整理係です。"
      },
      {
        "type": "paragraph",
        "text": "でも、店の主人ではありません。"
      },
      {
        "type": "heading",
        "text": "10分ルーティンとAIを組み合わせる"
      },
      {
        "type": "paragraph",
        "text": "前章で書いた毎日10分ルーティンに、AIを組み込むとかなり楽になります。"
      },
      {
        "type": "paragraph",
        "text": "流れはこうです。"
      },
      {
        "type": "diagram",
        "text": "1. 今日の動画素材を撮る\n2. AIに内容を箇条書きで渡す\n3. 投稿文を3案出してもらう\n4. 一番自然なものを選ぶ\n5. 店の言葉に直す\n6. 3SNSに投稿する"
      },
      {
        "type": "paragraph",
        "text": "たとえば、AIへの指示はこれくらいでいい。"
      },
      {
        "type": "diagram",
        "text": "那須のカフェのInstagram投稿文を作ってください。\n動画は、雨の日の窓際席です。\n静かで、ひとりでも過ごしやすい雰囲気です。\n売り込みすぎず、保存したくなる文章にしてください。\n短めで3案ください。"
      },
      {
        "type": "paragraph",
        "text": "これで十分です。"
      },
      {
        "type": "paragraph",
        "text": "さらにYouTube向けなら、"
      },
      {
        "type": "diagram",
        "text": "同じ動画をYouTube Shortsに投稿します。\n初めて来る人が安心できるように、\n店内の雰囲気が伝わるタイトルと説明文を作ってください。"
      },
      {
        "type": "paragraph",
        "text": "TikTok向けなら、"
      },
      {
        "type": "diagram",
        "text": "同じ動画をTikTokにも投稿します。\n最初の一秒で気になる短いテロップを5案ください。\nただし、派手すぎない言葉にしてください。"
      },
      {
        "type": "paragraph",
        "text": "このように、同じ素材でもAIへの頼み方を変えます。"
      },
      {
        "type": "paragraph",
        "text": "Instagramは保存。"
      },
      {
        "type": "paragraph",
        "text": "YouTubeは安心。"
      },
      {
        "type": "paragraph",
        "text": "TikTokは入口。"
      },
      {
        "type": "paragraph",
        "text": "AIにも、この役割を伝えると文章が変わります。"
      },
      {
        "type": "heading",
        "text": "多言語対応は、AIで一気に現実的になった"
      },
      {
        "type": "paragraph",
        "text": "地方店舗にとって、インバウンド対応は大きな課題です。"
      },
      {
        "type": "paragraph",
        "text": "英語ができない。"
      },
      {
        "type": "paragraph",
        "text": "メニューを翻訳できない。"
      },
      {
        "type": "paragraph",
        "text": "外国語の口コミに返信できない。"
      },
      {
        "type": "paragraph",
        "text": "海外の人にどう伝えればいいかわからない。"
      },
      {
        "type": "paragraph",
        "text": "以前なら、これはかなり大変でした。"
      },
      {
        "type": "paragraph",
        "text": "しかしAIによって、かなり現実的になりました。"
      },
      {
        "type": "paragraph",
        "text": "メニュー名を英語にする。"
      },
      {
        "type": "paragraph",
        "text": "アレルギー表記を整理する。"
      },
      {
        "type": "paragraph",
        "text": "注文方法を英語で説明する。"
      },
      {
        "type": "paragraph",
        "text": "Googleマップの紹介文を英語化する。"
      },
      {
        "type": "paragraph",
        "text": "外国語の口コミに返信する。"
      },
      {
        "type": "paragraph",
        "text": "Instagramの投稿に短い英語を添える。"
      },
      {
        "type": "paragraph",
        "text": "これらは、AIの得意分野です。"
      },
      {
        "type": "paragraph",
        "text": "ただし、ここでも最終確認は必要です。"
      },
      {
        "type": "paragraph",
        "text": "特にメニューやアレルギーに関わる情報は、間違えると問題になります。"
      },
      {
        "type": "paragraph",
        "text": "AIの翻訳は便利ですが、事実確認は人間が行う。"
      },
      {
        "type": "paragraph",
        "text": "この原則は必ず守るべきです。"
      },
      {
        "type": "paragraph",
        "text": "AI時代の小さなお店は、完璧な英語力を持たなくても、外国人のお客様に「歓迎している」という姿勢を伝えやすくなりました。"
      },
      {
        "type": "paragraph",
        "text": "これは大きい。"
      },
      {
        "type": "paragraph",
        "text": "特に那須のような観光地では、GoogleマップやInstagramを通して外国人旅行者が店を見つける機会が増えています。"
      },
      {
        "type": "paragraph",
        "text": "英語で完璧に話せなくてもいい。"
      },
      {
        "type": "paragraph",
        "text": "でも、最低限の情報がある。"
      },
      {
        "type": "paragraph",
        "text": "メニューがわかる。"
      },
      {
        "type": "paragraph",
        "text": "営業時間がわかる。"
      },
      {
        "type": "paragraph",
        "text": "場所がわかる。"
      },
      {
        "type": "paragraph",
        "text": "支払い方法がわかる。"
      },
      {
        "type": "paragraph",
        "text": "口コミに返信がある。"
      },
      {
        "type": "paragraph",
        "text": "これだけで、安心感は大きく変わります。"
      },
      {
        "type": "paragraph",
        "text": "AIは、この安心感を作るための強い道具になります。"
      },
      {
        "type": "heading",
        "text": "口コミ返信は、AI時代の接客である"
      },
      {
        "type": "paragraph",
        "text": "口コミ返信も、AIを使う価値があります。"
      },
      {
        "type": "paragraph",
        "text": "Googleマップの口コミは、ただの評価ではありません。"
      },
      {
        "type": "paragraph",
        "text": "未来のお客様が読む接客です。"
      },
      {
        "type": "paragraph",
        "text": "口コミに返信しているお店は、見られています。"
      },
      {
        "type": "paragraph",
        "text": "どんな言葉で返信しているか。"
      },
      {
        "type": "paragraph",
        "text": "悪い口コミにどう向き合っているか。"
      },
      {
        "type": "paragraph",
        "text": "外国語の口コミにも反応しているか。"
      },
      {
        "type": "paragraph",
        "text": "定型文だけではないか。"
      },
      {
        "type": "paragraph",
        "text": "ここに、お店の姿勢が出ます。"
      },
      {
        "type": "paragraph",
        "text": "AIを使えば、口コミ返信の下書きは簡単に作れます。"
      },
      {
        "type": "paragraph",
        "text": "しかし、ここでもそのまま使わない。"
      },
      {
        "type": "paragraph",
        "text": "本当に来てくれたお客様への返信として自然か。"
      },
      {
        "type": "paragraph",
        "text": "相手の言葉にちゃんと反応しているか。"
      },
      {
        "type": "paragraph",
        "text": "謝るべきところは謝っているか。"
      },
      {
        "type": "paragraph",
        "text": "言い訳になっていないか。"
      },
      {
        "type": "paragraph",
        "text": "温度感が合っているか。"
      },
      {
        "type": "paragraph",
        "text": "最後に人間が見る。"
      },
      {
        "type": "paragraph",
        "text": "口コミ返信は、AI時代の接客です。"
      },
      {
        "type": "paragraph",
        "text": "店内での接客と同じように、画面上の言葉にも体温が必要です。"
      },
      {
        "type": "heading",
        "text": "AIを使うほど、現場が大事になる"
      },
      {
        "type": "paragraph",
        "text": "不思議なことに、AIを使えば使うほど、現場が大事になります。"
      },
      {
        "type": "paragraph",
        "text": "AIが文章を整えてくれる。"
      },
      {
        "type": "paragraph",
        "text": "AIが翻訳してくれる。"
      },
      {
        "type": "paragraph",
        "text": "AIが投稿案を出してくれる。"
      },
      {
        "type": "paragraph",
        "text": "だからこそ、何をAIに渡すかが重要になります。"
      },
      {
        "type": "paragraph",
        "text": "現場の事実が薄ければ、AIの文章も薄くなります。"
      },
      {
        "type": "paragraph",
        "text": "どこにでもある言葉になる。"
      },
      {
        "type": "paragraph",
        "text": "誰でも書ける文章になる。"
      },
      {
        "type": "paragraph",
        "text": "逆に、現場の情報が濃ければ、AIはそれを整理できます。"
      },
      {
        "type": "paragraph",
        "text": "雨の日の席。"
      },
      {
        "type": "paragraph",
        "text": "店主のひと言。"
      },
      {
        "type": "paragraph",
        "text": "今日の仕込み。"
      },
      {
        "type": "paragraph",
        "text": "常連さんから聞かれた質問。"
      },
      {
        "type": "paragraph",
        "text": "観光客が迷いやすい道。"
      },
      {
        "type": "paragraph",
        "text": "子ども連れのお客様が喜んだこと。"
      },
      {
        "type": "paragraph",
        "text": "外国人のお客様が困っていたこと。"
      },
      {
        "type": "paragraph",
        "text": "こうした現場の情報をAIに渡すと、文章は一気に具体的になります。"
      },
      {
        "type": "paragraph",
        "text": "つまり、AI時代に価値が上がるのは、現場です。"
      },
      {
        "type": "paragraph",
        "text": "AIがあるから現場が不要になるのではありません。"
      },
      {
        "type": "paragraph",
        "text": "AIがあるからこそ、現場の一次情報がさらに重要になる。"
      },
      {
        "type": "paragraph",
        "text": "ここを間違えてはいけません。"
      },
      {
        "type": "heading",
        "text": "この章の結論"
      },
      {
        "type": "paragraph",
        "text": "AIは、小さなお店のSNS動画運用をかなり楽にしてくれます。"
      },
      {
        "type": "paragraph",
        "text": "投稿文。"
      },
      {
        "type": "paragraph",
        "text": "タイトル。"
      },
      {
        "type": "paragraph",
        "text": "ハッシュタグ。"
      },
      {
        "type": "paragraph",
        "text": "翻訳。"
      },
      {
        "type": "paragraph",
        "text": "口コミ返信。"
      },
      {
        "type": "paragraph",
        "text": "FAQ。"
      },
      {
        "type": "paragraph",
        "text": "メニュー説明。"
      },
      {
        "type": "paragraph",
        "text": "これらは、AIに手伝わせていい。"
      },
      {
        "type": "paragraph",
        "text": "むしろ、使った方がいい。"
      },
      {
        "type": "paragraph",
        "text": "しかし、最後は必ず店の言葉に戻す。"
      },
      {
        "type": "paragraph",
        "text": "AIに整えてもらい、人間が体温を戻す。"
      },
      {
        "type": "paragraph",
        "text": "AIに翻訳してもらい、人間が事実を確認する。"
      },
      {
        "type": "paragraph",
        "text": "AIに提案してもらい、店主が判断する。"
      },
      {
        "type": "paragraph",
        "text": "この関係が大切です。"
      },
      {
        "type": "paragraph",
        "text": "AIは、店の代わりにはなりません。"
      },
      {
        "type": "paragraph",
        "text": "AIは、店の言葉を外に出すための補助線です。"
      },
      {
        "type": "paragraph",
        "text": "小さなお店がAI時代に強くなるためには、AIを恐れすぎないこと。"
      },
      {
        "type": "paragraph",
        "text": "同時に、AIに自分たちの感性を明け渡さないこと。"
      },
      {
        "type": "paragraph",
        "text": "この両方が必要です。"
      },
      {
        "type": "paragraph",
        "text": "AIに手伝わせる。"
      },
      {
        "type": "paragraph",
        "text": "でも、店の言葉に戻す。"
      },
      {
        "type": "paragraph",
        "text": "これが、AI時代のSNS動画運用の基本です。"
      }
    ]
  },
  {
    "slug": "chapter-11",
    "navLabel": "第11章",
    "title": "第11章　再生数より、来店前の会話を見る",
    "description": "SNSを始めると、どうしても数字が気になります。",
    "keywords": [
      "SNS動画",
      "AI時代",
      "Save Plan Impulse",
      "なすぱらTV",
      "GEO",
      "地域店舗",
      "Instagram",
      "YouTube Shorts",
      "TikTok"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "SNSの数字は、わかりやすいから危ない"
      },
      {
        "type": "paragraph",
        "text": "SNSを始めると、どうしても数字が気になります。"
      },
      {
        "type": "paragraph",
        "text": "再生数。"
      },
      {
        "type": "paragraph",
        "text": "いいね数。"
      },
      {
        "type": "paragraph",
        "text": "フォロワー数。"
      },
      {
        "type": "paragraph",
        "text": "コメント数。"
      },
      {
        "type": "paragraph",
        "text": "リーチ数。"
      },
      {
        "type": "paragraph",
        "text": "インプレッション数。"
      },
      {
        "type": "paragraph",
        "text": "これらは、画面に大きく表示されます。"
      },
      {
        "type": "paragraph",
        "text": "増えると嬉しい。"
      },
      {
        "type": "paragraph",
        "text": "減ると落ち込む。"
      },
      {
        "type": "paragraph",
        "text": "一万再生されると、成功した気がする。"
      },
      {
        "type": "paragraph",
        "text": "百再生だと、失敗した気がする。"
      },
      {
        "type": "paragraph",
        "text": "この感覚は自然です。"
      },
      {
        "type": "paragraph",
        "text": "しかし、小さなお店のSNS動画では、数字だけを見ると判断を間違えます。"
      },
      {
        "type": "paragraph",
        "text": "なぜなら、再生数が多い動画が、必ずしも来店につながるとは限らないからです。"
      },
      {
        "type": "paragraph",
        "text": "逆に、再生数が少ない動画でも、非常に大切な役割を果たしていることがあります。"
      },
      {
        "type": "paragraph",
        "text": "たとえば、駐車場案内の動画。"
      },
      {
        "type": "paragraph",
        "text": "これはバズりにくい。"
      },
      {
        "type": "paragraph",
        "text": "しかし、初めて来る人には大事です。"
      },
      {
        "type": "paragraph",
        "text": "子ども連れでも入りやすいかを説明する動画。"
      },
      {
        "type": "paragraph",
        "text": "これも大きく伸びないかもしれません。"
      },
      {
        "type": "paragraph",
        "text": "でも、親子連れの不安を減らします。"
      },
      {
        "type": "paragraph",
        "text": "店主の短い挨拶動画。"
      },
      {
        "type": "paragraph",
        "text": "再生数は少ないかもしれません。"
      },
      {
        "type": "paragraph",
        "text": "でも、「この人のお店なら行ってみたい」と思う人がいる。"
      },
      {
        "type": "paragraph",
        "text": "つまり、小さなお店のSNS動画では、"
      },
      {
        "type": "paragraph",
        "text": "伸びる動画と、効く動画は違うのです。"
      },
      {
        "type": "heading",
        "text": "来店前の会話が生まれているか"
      },
      {
        "type": "paragraph",
        "text": "私が大事だと思うのは、来店前の会話です。"
      },
      {
        "type": "paragraph",
        "text": "SNS動画が本当に効いているとき、画面の外で会話が生まれます。"
      },
      {
        "type": "paragraph",
        "text": "「ここ、行ってみない？」"
      },
      {
        "type": "paragraph",
        "text": "「この前保存したカフェ、那須にあるみたい」"
      },
      {
        "type": "paragraph",
        "text": "「駐車場あるらしいよ」"
      },
      {
        "type": "paragraph",
        "text": "「動画で見た席、よさそうだった」"
      },
      {
        "type": "paragraph",
        "text": "「子ども連れでも大丈夫そう」"
      },
      {
        "type": "paragraph",
        "text": "「このお店、店主さんの感じが良さそう」"
      },
      {
        "type": "paragraph",
        "text": "「週末ここにしようか」"
      },
      {
        "type": "paragraph",
        "text": "こういう会話です。"
      },
      {
        "type": "paragraph",
        "text": "この会話は、SNSの管理画面には出てきません。"
      },
      {
        "type": "paragraph",
        "text": "でも、実際の来店には大きく関係しています。"
      },
      {
        "type": "paragraph",
        "text": "特に地方のお店では、来店は一人の判断だけで決まらないことが多い。"
      },
      {
        "type": "paragraph",
        "text": "家族で行く。"
      },
      {
        "type": "paragraph",
        "text": "夫婦で行く。"
      },
      {
        "type": "paragraph",
        "text": "友人と行く。"
      },
      {
        "type": "paragraph",
        "text": "恋人と行く。"
      },
      {
        "type": "paragraph",
        "text": "旅行の同行者と相談する。"
      },
      {
        "type": "paragraph",
        "text": "そのときに、動画が会話の材料になる。"
      },
      {
        "type": "paragraph",
        "text": "これが重要です。"
      },
      {
        "type": "paragraph",
        "text": "動画は、単に情報を届けるものではありません。"
      },
      {
        "type": "paragraph",
        "text": "来店前の会話を作るものです。"
      },
      {
        "type": "heading",
        "text": "店頭で出る一言は、最高のデータである"
      },
      {
        "type": "paragraph",
        "text": "小さなお店にとって、もっとも大切なデータのひとつは、店頭でのお客様の一言です。"
      },
      {
        "type": "paragraph",
        "text": "「Instagramで見ました」"
      },
      {
        "type": "paragraph",
        "text": "「YouTubeで見て来ました」"
      },
      {
        "type": "paragraph",
        "text": "「TikTokで流れてきました」"
      },
      {
        "type": "paragraph",
        "text": "「動画で見たメニューを食べに来ました」"
      },
      {
        "type": "paragraph",
        "text": "「駐車場があるとわかったので来ました」"
      },
      {
        "type": "paragraph",
        "text": "「この席、動画で見ました」"
      },
      {
        "type": "paragraph",
        "text": "「那須に来る前に保存していました」"
      },
      {
        "type": "paragraph",
        "text": "これは、非常に大事なデータです。"
      },
      {
        "type": "paragraph",
        "text": "Googleアナリティクスよりも、広告管理画面よりも、場合によっては重要です。"
      },
      {
        "type": "paragraph",
        "text": "なぜなら、その一言には、SNS動画が現実の来店に接続した証拠が含まれているからです。"
      },
      {
        "type": "paragraph",
        "text": "もちろん、厳密な計測ではありません。"
      },
      {
        "type": "paragraph",
        "text": "すべてを数値化できるわけではありません。"
      },
      {
        "type": "paragraph",
        "text": "しかし、小さなお店は、巨大企業のような複雑な分析をしなくてもいい。"
      },
      {
        "type": "paragraph",
        "text": "お客様の言葉を聞く。"
      },
      {
        "type": "paragraph",
        "text": "どの動画を見たのか聞く。"
      },
      {
        "type": "paragraph",
        "text": "何が決め手になったのか聞く。"
      },
      {
        "type": "paragraph",
        "text": "これだけで、非常に多くのことがわかります。"
      },
      {
        "type": "paragraph",
        "text": "店頭の一言は、現場のアクセス解析です。"
      },
      {
        "type": "heading",
        "text": "見るべき指標は、三層に分ける"
      },
      {
        "type": "paragraph",
        "text": "では、まったく数字を見なくていいのか。"
      },
      {
        "type": "paragraph",
        "text": "そうではありません。"
      },
      {
        "type": "paragraph",
        "text": "数字は見ます。"
      },
      {
        "type": "paragraph",
        "text": "ただし、見るべき数字を三層に分けます。"
      },
      {
        "type": "diagram",
        "text": "第1層：反応の数字\n  再生数\n  いいね\n  コメント\n  フォロワー増加\n\n第2層：検討の数字\n  保存数\n  プロフィールアクセス\n  Googleマップへの遷移\n  URLクリック\n\n第3層：現実の反応\n  店頭での一言\n  問い合わせ\n  予約\n  来店\n  リピート"
      },
      {
        "type": "paragraph",
        "text": "多くの人は、第1層だけを見ます。"
      },
      {
        "type": "paragraph",
        "text": "再生数が伸びた。"
      },
      {
        "type": "paragraph",
        "text": "いいねが多い。"
      },
      {
        "type": "paragraph",
        "text": "フォロワーが増えた。"
      },
      {
        "type": "paragraph",
        "text": "もちろん、それも大切です。"
      },
      {
        "type": "paragraph",
        "text": "しかし、小さなお店では第2層と第3層の方が重要です。"
      },
      {
        "type": "paragraph",
        "text": "保存されたか。"
      },
      {
        "type": "paragraph",
        "text": "プロフィールを見たか。"
      },
      {
        "type": "paragraph",
        "text": "地図を開いたか。"
      },
      {
        "type": "paragraph",
        "text": "実際に店で話題に出たか。"
      },
      {
        "type": "paragraph",
        "text": "来店につながったか。"
      },
      {
        "type": "paragraph",
        "text": "この流れを見ます。"
      },
      {
        "type": "paragraph",
        "text": "再生数は入口です。"
      },
      {
        "type": "paragraph",
        "text": "保存は記憶です。"
      },
      {
        "type": "paragraph",
        "text": "地図遷移は計画です。"
      },
      {
        "type": "paragraph",
        "text": "店頭の一言は現実です。"
      },
      {
        "type": "paragraph",
        "text": "この順番で見ると、SNS動画の成果がかなり見えやすくなります。"
      },
      {
        "type": "heading",
        "text": "保存数は、小さなお店にとって重要な指標である"
      },
      {
        "type": "paragraph",
        "text": "Instagramでは、保存数をかなり重視していいと思います。"
      },
      {
        "type": "paragraph",
        "text": "保存は、いいねより深い反応です。"
      },
      {
        "type": "paragraph",
        "text": "いいねは、その場の反応。"
      },
      {
        "type": "paragraph",
        "text": "保存は、未来への反応。"
      },
      {
        "type": "paragraph",
        "text": "「あとで見たい」"
      },
      {
        "type": "paragraph",
        "text": "「いつか行きたい」"
      },
      {
        "type": "paragraph",
        "text": "「候補に入れたい」"
      },
      {
        "type": "paragraph",
        "text": "「誰かに見せたい」"
      },
      {
        "type": "paragraph",
        "text": "この感情が保存です。"
      },
      {
        "type": "paragraph",
        "text": "特にカフェ、飲食店、美容室、サロン、観光地、宿泊、体験型サービスでは、保存は非常に重要です。"
      },
      {
        "type": "paragraph",
        "text": "すぐに買われる商品ではなく、後日選ばれるサービスだからです。"
      },
      {
        "type": "paragraph",
        "text": "動画が保存されているなら、その動画は人の未来に入り込んでいます。"
      },
      {
        "type": "paragraph",
        "text": "これは大きい。"
      },
      {
        "type": "paragraph",
        "text": "だから、再生数が少なくても保存率が高い動画は大切にしてください。"
      },
      {
        "type": "paragraph",
        "text": "その動画には、その店に合う人が反応している可能性があります。"
      },
      {
        "type": "heading",
        "text": "Googleマップへの遷移を見る"
      },
      {
        "type": "paragraph",
        "text": "地域店舗の場合、SNS動画のゴールのひとつはGoogleマップです。"
      },
      {
        "type": "paragraph",
        "text": "プロフィールを見て、地図を開く。"
      },
      {
        "type": "paragraph",
        "text": "ルートを調べる。"
      },
      {
        "type": "paragraph",
        "text": "営業時間を見る。"
      },
      {
        "type": "paragraph",
        "text": "口コミを見る。"
      },
      {
        "type": "paragraph",
        "text": "電話する。"
      },
      {
        "type": "paragraph",
        "text": "予約する。"
      },
      {
        "type": "paragraph",
        "text": "この動きがあるなら、動画はかなり現実に近づいています。"
      },
      {
        "type": "paragraph",
        "text": "特に那須のような車移動地域では、Googleマップは非常に重要でした。"
      },
      {
        "type": "paragraph",
        "text": "観光客は、SNSで気になったあとに地図を見ます。"
      },
      {
        "type": "paragraph",
        "text": "距離を見る。"
      },
      {
        "type": "paragraph",
        "text": "ルートを見る。"
      },
      {
        "type": "paragraph",
        "text": "駐車場を確認する。"
      },
      {
        "type": "paragraph",
        "text": "他の予定との位置関係を見る。"
      },
      {
        "type": "paragraph",
        "text": "ここで不安が減れば、来店候補になります。"
      },
      {
        "type": "paragraph",
        "text": "だから、SNSプロフィールにはGoogleマップへの導線を整えておくべきです。"
      },
      {
        "type": "paragraph",
        "text": "店名で検索して迷わないようにする。"
      },
      {
        "type": "paragraph",
        "text": "営業時間を正しくする。"
      },
      {
        "type": "paragraph",
        "text": "定休日を更新する。"
      },
      {
        "type": "paragraph",
        "text": "写真を入れる。"
      },
      {
        "type": "paragraph",
        "text": "口コミに返信する。"
      },
      {
        "type": "paragraph",
        "text": "駐車場情報を書く。"
      },
      {
        "type": "paragraph",
        "text": "SNS動画とGoogleマップは、別々のものではありません。"
      },
      {
        "type": "paragraph",
        "text": "SNSで感情が動き、Googleマップで現実の計画になる。"
      },
      {
        "type": "paragraph",
        "text": "この接続が大切です。"
      },
      {
        "type": "heading",
        "text": "「動画を見ました」は、聞き逃してはいけない"
      },
      {
        "type": "paragraph",
        "text": "お客様が「動画を見ました」と言ったら、できれば一言だけ聞いてみてください。"
      },
      {
        "type": "paragraph",
        "text": "「どの動画でしたか？」"
      },
      {
        "type": "paragraph",
        "text": "「Instagramでしたか？ YouTubeでしたか？ TikTokでしたか？」"
      },
      {
        "type": "paragraph",
        "text": "「何が気になりましたか？」"
      },
      {
        "type": "paragraph",
        "text": "この質問は、押しつけにならない範囲で構いません。"
      },
      {
        "type": "paragraph",
        "text": "会話の流れで聞けるときだけでいい。"
      },
      {
        "type": "paragraph",
        "text": "しかし、これを聞くと非常に学びがあります。"
      },
      {
        "type": "paragraph",
        "text": "自分では何気なく出した動画が、来店の決め手になっていることがあります。"
      },
      {
        "type": "paragraph",
        "text": "バズらなかった動画が、実は効いていることがあります。"
      },
      {
        "type": "paragraph",
        "text": "派手な商品動画ではなく、駐車場や入口の動画が安心材料になっていることもあります。"
      },
      {
        "type": "paragraph",
        "text": "店主の手元が印象に残っていることもあります。"
      },
      {
        "type": "paragraph",
        "text": "店内の静けさが決め手になっていることもあります。"
      },
      {
        "type": "paragraph",
        "text": "これは、管理画面ではわかりません。"
      },
      {
        "type": "paragraph",
        "text": "現場でしかわからない。"
      },
      {
        "type": "paragraph",
        "text": "だから、店頭での一言は聞き逃してはいけません。"
      },
      {
        "type": "heading",
        "text": "伸びた理由より、来た理由を考える"
      },
      {
        "type": "paragraph",
        "text": "SNS運用では、つい「なぜ伸びたのか」を考えます。"
      },
      {
        "type": "paragraph",
        "text": "もちろん、それも大切です。"
      },
      {
        "type": "paragraph",
        "text": "しかし、小さなお店では「なぜ来たのか」を考える方が大切です。"
      },
      {
        "type": "paragraph",
        "text": "伸びた理由。"
      },
      {
        "type": "paragraph",
        "text": "来た理由。"
      },
      {
        "type": "paragraph",
        "text": "この二つは違います。"
      },
      {
        "type": "paragraph",
        "text": "動画が伸びた理由は、"
      },
      {
        "type": "paragraph",
        "text": "音が良かった。"
      },
      {
        "type": "paragraph",
        "text": "テンポが良かった。"
      },
      {
        "type": "paragraph",
        "text": "サムネイルが強かった。"
      },
      {
        "type": "paragraph",
        "text": "珍しい商品だった。"
      },
      {
        "type": "paragraph",
        "text": "たまたまアルゴリズムに乗った。"
      },
      {
        "type": "paragraph",
        "text": "ということかもしれません。"
      },
      {
        "type": "paragraph",
        "text": "でも、来た理由は、"
      },
      {
        "type": "paragraph",
        "text": "安心できそうだった。"
      },
      {
        "type": "paragraph",
        "text": "自分に合いそうだった。"
      },
      {
        "type": "paragraph",
        "text": "駐車場がわかった。"
      },
      {
        "type": "paragraph",
        "text": "店主の雰囲気が良かった。"
      },
      {
        "type": "paragraph",
        "text": "子ども連れでも大丈夫そうだった。"
      },
      {
        "type": "paragraph",
        "text": "友人に送ったら反応が良かった。"
      },
      {
        "type": "paragraph",
        "text": "ということかもしれません。"
      },
      {
        "type": "paragraph",
        "text": "この差を見ます。"
      },
      {
        "type": "paragraph",
        "text": "小さなお店のSNS動画は、伸びた理由より、来た理由を大切にするべきです。"
      },
      {
        "type": "heading",
        "text": "月次振り返りシート"
      },
      {
        "type": "paragraph",
        "text": "現場で使いやすいように、簡単な月次振り返りシートを作るなら、これで十分です。"
      },
      {
        "type": "diagram",
        "text": "今月一番再生された動画：\n\n今月一番保存された動画：\n\n今月一番コメントが多かった動画：\n\n店頭で話題に出た動画：\n\nGoogleマップや予約につながった感覚がある動画：\n\n来店したお客様から聞いた言葉：\n\n来月もう一度撮るべき型：\n\n来月やめてもよい型："
      },
      {
        "type": "paragraph",
        "text": "このくらいなら、月に一度、10分から15分でできます。"
      },
      {
        "type": "paragraph",
        "text": "大切なのは、細かく分析しすぎないことです。"
      },
      {
        "type": "paragraph",
        "text": "数字を見て、現場の声と照らす。"
      },
      {
        "type": "paragraph",
        "text": "そして、翌月の撮影に反映する。"
      },
      {
        "type": "paragraph",
        "text": "それだけで十分です。"
      },
      {
        "type": "heading",
        "text": "この章の結論"
      },
      {
        "type": "paragraph",
        "text": "小さなお店のSNS動画では、再生数だけを見てはいけません。"
      },
      {
        "type": "paragraph",
        "text": "再生数は、入口です。"
      },
      {
        "type": "paragraph",
        "text": "保存は、記憶です。"
      },
      {
        "type": "paragraph",
        "text": "プロフィールアクセスやGoogleマップ遷移は、計画です。"
      },
      {
        "type": "paragraph",
        "text": "店頭での一言は、現実です。"
      },
      {
        "type": "paragraph",
        "text": "そして、来店やリピートが本当の成果です。"
      },
      {
        "type": "paragraph",
        "text": "大切なのは、画面の中の数字だけではありません。"
      },
      {
        "type": "paragraph",
        "text": "画面の外で、どんな会話が生まれたか。"
      },
      {
        "type": "paragraph",
        "text": "お客様が何を見て来たのか。"
      },
      {
        "type": "paragraph",
        "text": "何に安心したのか。"
      },
      {
        "type": "paragraph",
        "text": "何を保存したのか。"
      },
      {
        "type": "paragraph",
        "text": "どの動画が、実際の移動につながったのか。"
      },
      {
        "type": "paragraph",
        "text": "そこを見る。"
      },
      {
        "type": "paragraph",
        "text": "再生数より、来店前の会話を見る。"
      },
      {
        "type": "paragraph",
        "text": "これが、小さなお店のSNS動画で本当に大切な成果指標です。"
      }
    ]
  },
  {
    "slug": "chapter-12",
    "navLabel": "第12章",
    "title": "第12章　SEOからMEO、そしてGEOへ —— 動画を残さないことのリスク",
    "description": "お店の見つけられ方は、少しずつ変わってきました。",
    "keywords": [
      "SNS動画",
      "AI時代",
      "Save Plan Impulse",
      "なすぱらTV",
      "GEO",
      "地域店舗",
      "Instagram",
      "YouTube Shorts",
      "TikTok"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "見つけられ方が変わってきた"
      },
      {
        "type": "paragraph",
        "text": "お店の見つけられ方は、少しずつ変わってきました。"
      },
      {
        "type": "paragraph",
        "text": "昔は、検索されることが大事でした。"
      },
      {
        "type": "paragraph",
        "text": "ホームページを作る。"
      },
      {
        "type": "paragraph",
        "text": "SEOをする。"
      },
      {
        "type": "paragraph",
        "text": "店名や地域名で検索に出る。"
      },
      {
        "type": "paragraph",
        "text": "「那須 カフェ」"
      },
      {
        "type": "paragraph",
        "text": "「駅名 美容室」"
      },
      {
        "type": "paragraph",
        "text": "「地域名 整体」"
      },
      {
        "type": "paragraph",
        "text": "こうした検索で見つけられることが重要でした。"
      },
      {
        "type": "paragraph",
        "text": "その後、地図が重要になりました。"
      },
      {
        "type": "paragraph",
        "text": "Googleマップ。"
      },
      {
        "type": "paragraph",
        "text": "口コミ。"
      },
      {
        "type": "paragraph",
        "text": "営業時間。"
      },
      {
        "type": "paragraph",
        "text": "写真。"
      },
      {
        "type": "paragraph",
        "text": "ルート。"
      },
      {
        "type": "paragraph",
        "text": "駐車場。"
      },
      {
        "type": "paragraph",
        "text": "現在地からの距離。"
      },
      {
        "type": "paragraph",
        "text": "これはMEOの時代です。"
      },
      {
        "type": "paragraph",
        "text": "お客様は、検索結果だけでなく、地図上でお店を選ぶようになりました。"
      },
      {
        "type": "paragraph",
        "text": "そして今、さらに次の段階が始まっています。"
      },
      {
        "type": "paragraph",
        "text": "AIが、お客様の代わりに情報を読み、比較し、提案する時代です。"
      },
      {
        "type": "paragraph",
        "text": "これは、GEOの時代です。"
      },
      {
        "type": "paragraph",
        "text": "Generative Engine Optimization。"
      },
      {
        "type": "paragraph",
        "text": "ただし、私はこれを単なるAI検索対策とは考えていません。"
      },
      {
        "type": "paragraph",
        "text": "GEOとは、AIにだましの情報を読ませる技術ではありません。"
      },
      {
        "type": "paragraph",
        "text": "自分たちが何者であるかを、人間にもAIにも理解できる形で、誠実に残していくことです。"
      },
      {
        "type": "heading",
        "text": "SEO、MEO、GEOは切れていない"
      },
      {
        "type": "paragraph",
        "text": "SEO、MEO、GEOは別々のものではありません。"
      },
      {
        "type": "paragraph",
        "text": "むしろ、つながっています。"
      },
      {
        "type": "diagram",
        "text": "SEO\n  文章で見つけられる\n  検索キーワードに答える\n  ホームページや記事が中心\n\nMEO\n  地図で見つけられる\n  距離、営業時間、口コミ、写真が重要\n  Googleマップが中心\n\nGEO\n  AIに理解され、推薦される\n  文章、地図、口コミ、写真、動画、FAQ、SNSが横断的に読まれる\n  実体と情報の一致が重要"
      },
      {
        "type": "paragraph",
        "text": "この流れで見ると、SNS動画はただの宣伝ではありません。"
      },
      {
        "type": "paragraph",
        "text": "SEOのための記事。"
      },
      {
        "type": "paragraph",
        "text": "MEOのための地図情報。"
      },
      {
        "type": "paragraph",
        "text": "SNSのための動画。"
      },
      {
        "type": "paragraph",
        "text": "これらは別々の作業に見えます。"
      },
      {
        "type": "paragraph",
        "text": "しかし、AI時代には、全部がつながって読まれる可能性があります。"
      },
      {
        "type": "paragraph",
        "text": "ホームページには「静かなカフェ」と書いてある。"
      },
      {
        "type": "paragraph",
        "text": "Googleマップには落ち着いた写真がある。"
      },
      {
        "type": "paragraph",
        "text": "口コミには「ひとりでも入りやすい」と書かれている。"
      },
      {
        "type": "paragraph",
        "text": "Instagramには窓際の席が保存されている。"
      },
      {
        "type": "paragraph",
        "text": "YouTubeには駐車場から入口までの動画がある。"
      },
      {
        "type": "paragraph",
        "text": "TikTokにはコーヒーを淹れる手元の動画がある。"
      },
      {
        "type": "paragraph",
        "text": "これらが一致していると、人間にもAIにも伝わりやすい。"
      },
      {
        "type": "paragraph",
        "text": "逆に、情報がバラバラだと伝わりにくい。"
      },
      {
        "type": "paragraph",
        "text": "ホームページでは高級感を出している。"
      },
      {
        "type": "paragraph",
        "text": "SNSでは安売りばかりしている。"
      },
      {
        "type": "paragraph",
        "text": "Googleマップの写真は古い。"
      },
      {
        "type": "paragraph",
        "text": "口コミ返信がない。"
      },
      {
        "type": "paragraph",
        "text": "動画がない。"
      },
      {
        "type": "paragraph",
        "text": "営業時間も違う。"
      },
      {
        "type": "paragraph",
        "text": "これでは、お客様もAIも判断しづらくなります。"
      },
      {
        "type": "paragraph",
        "text": "GEO時代に大事なのは、実体と情報の一致です。"
      },
      {
        "type": "paragraph",
        "text": "そして動画は、その一致を補強する強い材料になります。"
      },
      {
        "type": "heading",
        "text": "動画がないことは、存在しないことに近づいていく"
      },
      {
        "type": "paragraph",
        "text": "少し強い言い方をします。"
      },
      {
        "type": "paragraph",
        "text": "これからの時代、動画がまったくないお店は、AIにとって理解しづらい存在になっていく可能性があります。"
      },
      {
        "type": "paragraph",
        "text": "もちろん、動画がないからお店が存在しない、という意味ではありません。"
      },
      {
        "type": "paragraph",
        "text": "実際には、そこにお店があります。"
      },
      {
        "type": "paragraph",
        "text": "毎日営業している。"
      },
      {
        "type": "paragraph",
        "text": "常連さんがいる。"
      },
      {
        "type": "paragraph",
        "text": "味もある。"
      },
      {
        "type": "paragraph",
        "text": "技術もある。"
      },
      {
        "type": "paragraph",
        "text": "店主のこだわりもある。"
      },
      {
        "type": "paragraph",
        "text": "しかし、それがデジタル上に残っていなければ、遠くのお客様やAIには見えにくい。"
      },
      {
        "type": "paragraph",
        "text": "文章がなければ、考えが伝わりにくい。"
      },
      {
        "type": "paragraph",
        "text": "写真がなければ、雰囲気が伝わりにくい。"
      },
      {
        "type": "paragraph",
        "text": "口コミがなければ、第三者の評価が見えにくい。"
      },
      {
        "type": "paragraph",
        "text": "動画がなければ、所作や空気や時間が伝わりにくい。"
      },
      {
        "type": "paragraph",
        "text": "AIは、今後ますます複数の情報を横断して、お店を理解しようとするでしょう。"
      },
      {
        "type": "paragraph",
        "text": "そのとき、動画があるお店は、現場の時間を渡すことができます。"
      },
      {
        "type": "paragraph",
        "text": "動画がないお店は、文章と写真だけで判断されます。"
      },
      {
        "type": "paragraph",
        "text": "これは、小さなお店にとって機会損失になる可能性があります。"
      },
      {
        "type": "paragraph",
        "text": "動画を作らないことは、単にSNSをやらないという話ではありません。"
      },
      {
        "type": "paragraph",
        "text": "自分たちの現場の時間を、未来のお客様にもAIにも渡していない、ということなのです。"
      },
      {
        "type": "heading",
        "text": "だから、完璧な動画でなくていい"
      },
      {
        "type": "paragraph",
        "text": "ここで誤解してほしくないのは、「動画がないとダメだから、すぐに本格的な動画制作をしなければならない」という話ではないことです。"
      },
      {
        "type": "paragraph",
        "text": "そうではありません。"
      },
      {
        "type": "paragraph",
        "text": "むしろ逆です。"
      },
      {
        "type": "paragraph",
        "text": "完璧な動画でなくていい。"
      },
      {
        "type": "paragraph",
        "text": "毎日10分でいい。"
      },
      {
        "type": "paragraph",
        "text": "スマートフォンでいい。"
      },
      {
        "type": "paragraph",
        "text": "15秒でいい。"
      },
      {
        "type": "paragraph",
        "text": "同じ素材を三つのSNSに出すところからでいい。"
      },
      {
        "type": "paragraph",
        "text": "大事なのは、現場の時間を少しずつ残していくことです。"
      },
      {
        "type": "paragraph",
        "text": "開店前の入口。"
      },
      {
        "type": "paragraph",
        "text": "仕込みの手元。"
      },
      {
        "type": "paragraph",
        "text": "窓際の席。"
      },
      {
        "type": "paragraph",
        "text": "人気メニュー。"
      },
      {
        "type": "paragraph",
        "text": "駐車場。"
      },
      {
        "type": "paragraph",
        "text": "店主のひと言。"
      },
      {
        "type": "paragraph",
        "text": "雨の日の店内。"
      },
      {
        "type": "paragraph",
        "text": "地域の風景。"
      },
      {
        "type": "paragraph",
        "text": "これらは、どれもAIにとっても人間にとっても、店を理解する材料になります。"
      },
      {
        "type": "paragraph",
        "text": "動画は、未来のAIへの手紙でもあります。"
      },
      {
        "type": "paragraph",
        "text": "「私たちは、こういう店です」"
      },
      {
        "type": "paragraph",
        "text": "「こういう時間が流れています」"
      },
      {
        "type": "paragraph",
        "text": "「こういう人に来てほしいです」"
      },
      {
        "type": "paragraph",
        "text": "「初めての方も、こう来れば大丈夫です」"
      },
      {
        "type": "paragraph",
        "text": "そう静かに伝える手紙です。"
      },
      {
        "type": "heading",
        "text": "SNS動画は、知識OSの一部になる"
      },
      {
        "type": "paragraph",
        "text": "私は、これからのWebサイトやSNSは、単なる宣伝媒体ではなく、知識OSになっていくと考えています。"
      },
      {
        "type": "paragraph",
        "text": "お店の知識OSです。"
      },
      {
        "type": "paragraph",
        "text": "そこには、商品情報だけでなく、"
      },
      {
        "type": "paragraph",
        "text": "店主の考え。"
      },
      {
        "type": "paragraph",
        "text": "よくある質問。"
      },
      {
        "type": "paragraph",
        "text": "アクセス情報。"
      },
      {
        "type": "paragraph",
        "text": "口コミへの返信。"
      },
      {
        "type": "paragraph",
        "text": "地域との関係。"
      },
      {
        "type": "paragraph",
        "text": "写真。"
      },
      {
        "type": "paragraph",
        "text": "動画。"
      },
      {
        "type": "paragraph",
        "text": "営業日誌。"
      },
      {
        "type": "paragraph",
        "text": "お客様の不安に答える情報。"
      },
      {
        "type": "paragraph",
        "text": "これらが積み重なっていきます。"
      },
      {
        "type": "paragraph",
        "text": "その積み重ねを、人間も読みます。"
      },
      {
        "type": "paragraph",
        "text": "AIも読むようになります。"
      },
      {
        "type": "paragraph",
        "text": "だからSNS動画は、単発の投稿ではありません。"
      },
      {
        "type": "paragraph",
        "text": "店の知識OSに追加される一次情報です。"
      },
      {
        "type": "paragraph",
        "text": "一つひとつは小さくても、積み重なると、"
      },
      {
        "type": "paragraph",
        "text": "この店は何を大切にしているのか。"
      },
      {
        "type": "paragraph",
        "text": "どんな人に向いているのか。"
      },
      {
        "type": "paragraph",
        "text": "どんな時間が流れているのか。"
      },
      {
        "type": "paragraph",
        "text": "どんな不安を解消してくれるのか。"
      },
      {
        "type": "paragraph",
        "text": "どんな地域に根ざしているのか。"
      },
      {
        "type": "paragraph",
        "text": "が見えてきます。"
      },
      {
        "type": "paragraph",
        "text": "これが、GEO時代のSNS動画の意味です。"
      },
      {
        "type": "heading",
        "text": "この章の結論"
      },
      {
        "type": "paragraph",
        "text": "SEOの時代には、文章で見つけられることが重要でした。"
      },
      {
        "type": "paragraph",
        "text": "MEOの時代には、地図で見つけられることが重要になりました。"
      },
      {
        "type": "paragraph",
        "text": "GEOの時代には、AIに理解され、推薦されることが重要になります。"
      },
      {
        "type": "paragraph",
        "text": "そのとき、動画は単なるSNS投稿ではありません。"
      },
      {
        "type": "paragraph",
        "text": "お店の実体を伝える一次情報になります。"
      },
      {
        "type": "paragraph",
        "text": "動画を作らないことは、現場の時間を残さないことです。"
      },
      {
        "type": "paragraph",
        "text": "現場の時間を残さなければ、人間にもAIにも、その店の空気は伝わりにくくなります。"
      },
      {
        "type": "paragraph",
        "text": "だから、完璧でなくていい。"
      },
      {
        "type": "paragraph",
        "text": "毎日10分でいい。"
      },
      {
        "type": "paragraph",
        "text": "スマートフォンでいい。"
      },
      {
        "type": "paragraph",
        "text": "小さなお店の時間を、少しずつ動画として残していく。"
      },
      {
        "type": "paragraph",
        "text": "それは、未来のお客様への案内であり、AI時代の知識OSへの記録でもあります。"
      }
    ]
  },
  {
    "slug": "closing",
    "navLabel": "最後に",
    "title": "最後に　小さなお店の時間は、これからもっと価値になる",
    "description": "この本は、2026年5月10日時点の観測記録です。",
    "keywords": [
      "SNS動画",
      "AI時代",
      "Save Plan Impulse",
      "なすぱらTV",
      "GEO",
      "地域店舗",
      "Instagram",
      "YouTube Shorts",
      "TikTok"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "この本は、2026年5月10日時点の観測記録です。"
      },
      {
        "type": "paragraph",
        "text": "半年後には、SNSの仕様も、AIの使われ方も、検索の形も、また大きく変わっているかもしれません。"
      },
      {
        "type": "paragraph",
        "text": "Instagramのアルゴリズムも変わるでしょう。"
      },
      {
        "type": "paragraph",
        "text": "TikTokの見られ方も変わるでしょう。"
      },
      {
        "type": "paragraph",
        "text": "YouTube Shortsの位置づけも変わるでしょう。"
      },
      {
        "type": "paragraph",
        "text": "Google検索も、AI検索も、Googleマップも、今とは違う姿になっているかもしれません。"
      },
      {
        "type": "paragraph",
        "text": "AIエージェントが、お客様の代わりにお店を比較し、提案し、予約する時代も近づいています。"
      },
      {
        "type": "paragraph",
        "text": "だから、この本に書いた方法が、永遠にそのまま通用するとは思っていません。"
      },
      {
        "type": "paragraph",
        "text": "むしろ、細かい方法は変わるはずです。"
      },
      {
        "type": "paragraph",
        "text": "投稿頻度も変わる。"
      },
      {
        "type": "paragraph",
        "text": "最適な尺も変わる。"
      },
      {
        "type": "paragraph",
        "text": "強いフォーマットも変わる。"
      },
      {
        "type": "paragraph",
        "text": "プラットフォームの勢力図も変わる。"
      },
      {
        "type": "paragraph",
        "text": "しかし、変わらないものもあります。"
      },
      {
        "type": "paragraph",
        "text": "人は、安心したい。"
      },
      {
        "type": "paragraph",
        "text": "人は、自分に合う場所を探したい。"
      },
      {
        "type": "paragraph",
        "text": "人は、信頼できる人から買いたい。"
      },
      {
        "type": "paragraph",
        "text": "人は、また行きたくなる空気を覚えている。"
      },
      {
        "type": "paragraph",
        "text": "人は、情報だけで動くのではなく、感情と記憶と身体で動く。"
      },
      {
        "type": "paragraph",
        "text": "これは、AI時代になっても変わらないと思います。"
      },
      {
        "type": "heading",
        "text": "バズらないことは、負けではない"
      },
      {
        "type": "paragraph",
        "text": "この本のタイトルには、「バズらない」という言葉を入れました。"
      },
      {
        "type": "paragraph",
        "text": "それは、バズを否定したいからではありません。"
      },
      {
        "type": "paragraph",
        "text": "バズは大きな力を持っています。"
      },
      {
        "type": "paragraph",
        "text": "一気に知られる。"
      },
      {
        "type": "paragraph",
        "text": "新しい人に届く。"
      },
      {
        "type": "paragraph",
        "text": "地域名が広がる。"
      },
      {
        "type": "paragraph",
        "text": "お店の存在が発見される。"
      },
      {
        "type": "paragraph",
        "text": "その意味で、バズは悪ではありません。"
      },
      {
        "type": "paragraph",
        "text": "しかし、小さなお店がバズだけを追うと、苦しくなります。"
      },
      {
        "type": "paragraph",
        "text": "毎回、強い刺激を作らなければならない。"
      },
      {
        "type": "paragraph",
        "text": "派手な演出をしなければならない。"
      },
      {
        "type": "paragraph",
        "text": "本来のお店の空気から離れていく。"
      },
      {
        "type": "paragraph",
        "text": "来てほしい人ではない人に届きすぎる。"
      },
      {
        "type": "paragraph",
        "text": "一時的に混んでも、常連化しない。"
      },
      {
        "type": "paragraph",
        "text": "そういうことが起きます。"
      },
      {
        "type": "paragraph",
        "text": "だから私は、バズらないSNS動画という言葉を使いたい。"
      },
      {
        "type": "paragraph",
        "text": "バズらなくても、保存される動画がある。"
      },
      {
        "type": "paragraph",
        "text": "バズらなくても、来店前の不安を消す動画がある。"
      },
      {
        "type": "paragraph",
        "text": "バズらなくても、店主の人柄を伝える動画がある。"
      },
      {
        "type": "paragraph",
        "text": "バズらなくても、未来のお客様の記憶に残る動画がある。"
      },
      {
        "type": "paragraph",
        "text": "それは負けではありません。"
      },
      {
        "type": "paragraph",
        "text": "小さなお店にとっては、むしろ大切な勝ち方です。"
      },
      {
        "type": "heading",
        "text": "AI時代に、人間の所作が残る"
      },
      {
        "type": "paragraph",
        "text": "AIは、これからさらに進化します。"
      },
      {
        "type": "paragraph",
        "text": "文章はもっと自然になります。"
      },
      {
        "type": "paragraph",
        "text": "画像はもっと美しくなります。"
      },
      {
        "type": "paragraph",
        "text": "動画も生成されるようになります。"
      },
      {
        "type": "paragraph",
        "text": "広告文も、メニュー説明も、投稿案も、翻訳も、かなりの部分をAIが担うようになるでしょう。"
      },
      {
        "type": "paragraph",
        "text": "そうなると、何が残るのか。"
      },
      {
        "type": "paragraph",
        "text": "私は、人間の所作が残ると思っています。"
      },
      {
        "type": "paragraph",
        "text": "店主が仕込む手。"
      },
      {
        "type": "paragraph",
        "text": "スタッフが椅子を整える動き。"
      },
      {
        "type": "paragraph",
        "text": "料理を出す間。"
      },
      {
        "type": "paragraph",
        "text": "お客様に声をかける距離感。"
      },
      {
        "type": "paragraph",
        "text": "雨の日に入口を拭くこと。"
      },
      {
        "type": "paragraph",
        "text": "閉店後にカウンターを整えること。"
      },
      {
        "type": "paragraph",
        "text": "朝、シャッターを開けること。"
      },
      {
        "type": "paragraph",
        "text": "こうしたものは、派手ではありません。"
      },
      {
        "type": "paragraph",
        "text": "しかし、そこに店の本質が出ます。"
      },
      {
        "type": "paragraph",
        "text": "AI時代には、作られた言葉が増える。"
      },
      {
        "type": "paragraph",
        "text": "作られた画像が増える。"
      },
      {
        "type": "paragraph",
        "text": "作られた宣伝が増える。"
      },
      {
        "type": "paragraph",
        "text": "だからこそ、実際の現場で営まれている時間が、今まで以上に価値を持つ。"
      },
      {
        "type": "paragraph",
        "text": "動画は、その時間を残すことができます。"
      },
      {
        "type": "paragraph",
        "text": "小さなお店の毎日は、ただの作業ではありません。"
      },
      {
        "type": "paragraph",
        "text": "未来のお客様にとっては、信頼の証拠になる。"
      },
      {
        "type": "paragraph",
        "text": "地域にとっては、記憶になる。"
      },
      {
        "type": "paragraph",
        "text": "AIにとっては、その店を理解するための一次情報になる。"
      },
      {
        "type": "paragraph",
        "text": "私は、そこに大きな可能性を感じています。"
      },
      {
        "type": "heading",
        "text": "那須で見えたこと"
      },
      {
        "type": "paragraph",
        "text": "那須で二年間暮らし、多くのお店と出会い、なすぱらTVで動画を作り続ける中で、私は何度も感じました。"
      },
      {
        "type": "paragraph",
        "text": "地方のお店の強さは、都市の競争戦略だけでは説明できない。"
      },
      {
        "type": "paragraph",
        "text": "立地が一番ではない。"
      },
      {
        "type": "paragraph",
        "text": "価格が一番ではない。"
      },
      {
        "type": "paragraph",
        "text": "広告量が一番ではない。"
      },
      {
        "type": "paragraph",
        "text": "それでも人が来る店がある。"
      },
      {
        "type": "paragraph",
        "text": "また行きたくなる店がある。"
      },
      {
        "type": "paragraph",
        "text": "誰かに紹介したくなる店がある。"
      },
      {
        "type": "paragraph",
        "text": "その理由は、簡単には言語化できません。"
      },
      {
        "type": "paragraph",
        "text": "でも確かにある。"
      },
      {
        "type": "paragraph",
        "text": "店の空気。"
      },
      {
        "type": "paragraph",
        "text": "店主の思想。"
      },
      {
        "type": "paragraph",
        "text": "地域との関係。"
      },
      {
        "type": "paragraph",
        "text": "お客様との距離。"
      },
      {
        "type": "paragraph",
        "text": "光。"
      },
      {
        "type": "paragraph",
        "text": "時間。"
      },
      {
        "type": "paragraph",
        "text": "所作。"
      },
      {
        "type": "paragraph",
        "text": "そうしたものが重なって、人は動いている。"
      },
      {
        "type": "paragraph",
        "text": "私は、それをなんとか言葉にしたかったのだと思います。"
      },
      {
        "type": "paragraph",
        "text": "レポートを書いた。"
      },
      {
        "type": "paragraph",
        "text": "理論化した。"
      },
      {
        "type": "paragraph",
        "text": "論文にした。"
      },
      {
        "type": "paragraph",
        "text": "書籍を書いた。"
      },
      {
        "type": "paragraph",
        "text": "動画を900本作った。"
      },
      {
        "type": "paragraph",
        "text": "なぜそこまでしたのか、自分でも不思議に思うことがあります。"
      },
      {
        "type": "paragraph",
        "text": "でも、おそらく私は、現場を通過していない言葉で語ることが嫌だったのだと思います。"
      },
      {
        "type": "paragraph",
        "text": "自分が見ていないものを、見たように言いたくなかった。"
      },
      {
        "type": "paragraph",
        "text": "自分が撮っていないものを、撮ったように語りたくなかった。"
      },
      {
        "type": "paragraph",
        "text": "自分が感じていないものを、理論として出したくなかった。"
      },
      {
        "type": "paragraph",
        "text": "だから、遠回りをした。"
      },
      {
        "type": "paragraph",
        "text": "でも、その遠回りの中で見えたものがあります。"
      },
      {
        "type": "paragraph",
        "text": "小さなお店には、まだ言語化されていない価値がある。"
      },
      {
        "type": "paragraph",
        "text": "地域には、まだ可視化されていない知恵がある。"
      },
      {
        "type": "paragraph",
        "text": "AI時代には、その価値がむしろ見つけられやすくなる可能性がある。"
      },
      {
        "type": "paragraph",
        "text": "これは、私にとって大きな希望です。"
      },
      {
        "type": "heading",
        "text": "小さなお店は、もっと自分の時間を信じていい"
      },
      {
        "type": "paragraph",
        "text": "小さなお店の店主は、毎日忙しい。"
      },
      {
        "type": "paragraph",
        "text": "売上も気になる。"
      },
      {
        "type": "paragraph",
        "text": "人手も足りない。"
      },
      {
        "type": "paragraph",
        "text": "原価も上がる。"
      },
      {
        "type": "paragraph",
        "text": "口コミも気になる。"
      },
      {
        "type": "paragraph",
        "text": "SNSもやらなければならない。"
      },
      {
        "type": "paragraph",
        "text": "AIも使えと言われる。"
      },
      {
        "type": "paragraph",
        "text": "Googleマップも更新しなければならない。"
      },
      {
        "type": "paragraph",
        "text": "やることが多すぎます。"
      },
      {
        "type": "paragraph",
        "text": "だからこそ、SNS動画は無理なくていい。"
      },
      {
        "type": "paragraph",
        "text": "毎日10分でいい。"
      },
      {
        "type": "paragraph",
        "text": "同じ素材を三つのSNSに出すところからでいい。"
      },
      {
        "type": "paragraph",
        "text": "完璧でなくていい。"
      },
      {
        "type": "paragraph",
        "text": "おしゃれすぎなくていい。"
      },
      {
        "type": "paragraph",
        "text": "バズらなくていい。"
      },
      {
        "type": "paragraph",
        "text": "ただ、自分のお店の時間を少しずつ残していく。"
      },
      {
        "type": "paragraph",
        "text": "仕込み。"
      },
      {
        "type": "paragraph",
        "text": "商品。"
      },
      {
        "type": "paragraph",
        "text": "空気。"
      },
      {
        "type": "paragraph",
        "text": "人。"
      },
      {
        "type": "paragraph",
        "text": "地域。"
      },
      {
        "type": "paragraph",
        "text": "不安を減らす情報。"
      },
      {
        "type": "paragraph",
        "text": "来てほしい人への言葉。"
      },
      {
        "type": "paragraph",
        "text": "それを続ける。"
      },
      {
        "type": "paragraph",
        "text": "その積み重ねが、未来のお客様に届きます。"
      },
      {
        "type": "paragraph",
        "text": "今日の動画が、今日の来店につながるとは限りません。"
      },
      {
        "type": "paragraph",
        "text": "でも、半年後に思い出されるかもしれない。"
      },
      {
        "type": "paragraph",
        "text": "来月の旅行で保存されるかもしれない。"
      },
      {
        "type": "paragraph",
        "text": "誰かの会話に出るかもしれない。"
      },
      {
        "type": "paragraph",
        "text": "AIがその店を理解する材料になるかもしれない。"
      },
      {
        "type": "paragraph",
        "text": "小さなお店の時間は、これからもっと価値になります。"
      },
      {
        "type": "paragraph",
        "text": "私はそう思います。"
      },
      {
        "type": "heading",
        "text": "最後のメッセージ"
      },
      {
        "type": "paragraph",
        "text": "AI時代に、小さなお店は何を武器にするのか。"
      },
      {
        "type": "paragraph",
        "text": "本書の最初に置いた問いです。"
      },
      {
        "type": "paragraph",
        "text": "答えは、特別なテクニックだけではありません。"
      },
      {
        "type": "paragraph",
        "text": "最新のAIツールだけでもありません。"
      },
      {
        "type": "paragraph",
        "text": "派手な動画編集でもありません。"
      },
      {
        "type": "paragraph",
        "text": "巨大な広告費でもありません。"
      },
      {
        "type": "paragraph",
        "text": "小さなお店の武器は、"
      },
      {
        "type": "paragraph",
        "text": "その店にしかない時間。"
      },
      {
        "type": "paragraph",
        "text": "その人にしかない所作。"
      },
      {
        "type": "paragraph",
        "text": "その地域にしかない空気。"
      },
      {
        "type": "paragraph",
        "text": "そのお客様との関係。"
      },
      {
        "type": "paragraph",
        "text": "そして、それを無理なく、誠実に、少しずつ外に出していく継続です。"
      },
      {
        "type": "paragraph",
        "text": "SNS動画は、そのための道具です。"
      },
      {
        "type": "paragraph",
        "text": "AIは、その道具を扱いやすくする補助線です。"
      },
      {
        "type": "paragraph",
        "text": "でも、中心にあるのは人間です。"
      },
      {
        "type": "paragraph",
        "text": "店を開ける人。"
      },
      {
        "type": "paragraph",
        "text": "仕込む人。"
      },
      {
        "type": "paragraph",
        "text": "迎える人。"
      },
      {
        "type": "paragraph",
        "text": "考える人。"
      },
      {
        "type": "paragraph",
        "text": "続ける人。"
      },
      {
        "type": "paragraph",
        "text": "その人の時間が、動画になる。"
      },
      {
        "type": "paragraph",
        "text": "その動画が、誰かの記憶に残る。"
      },
      {
        "type": "paragraph",
        "text": "その記憶が、来店前の会話になる。"
      },
      {
        "type": "paragraph",
        "text": "その会話が、移動になる。"
      },
      {
        "type": "paragraph",
        "text": "その移動が、地域を少し動かす。"
      },
      {
        "type": "paragraph",
        "text": "この小さな流れを信じたい。"
      },
      {
        "type": "paragraph",
        "text": "そして、この流れを、AI時代の最初の空気として書き残しておきたい。"
      },
      {
        "type": "paragraph",
        "text": "バズらなくてもいい。"
      },
      {
        "type": "paragraph",
        "text": "でも、届くべき人に届く。"
      },
      {
        "type": "paragraph",
        "text": "小さなお店が、本来つながるべきお客様と出会う。"
      },
      {
        "type": "paragraph",
        "text": "そのためのSNS動画を、これから一緒に作っていきましょう。"
      }
    ]
  },
  {
    "slug": "profile",
    "navLabel": "著者プロフィール",
    "title": "著者プロフィール",
    "description": "藤井 実彦（ふじい・みつひこ）",
    "keywords": [
      "SNS動画",
      "AI時代",
      "Save Plan Impulse",
      "なすぱらTV",
      "GEO",
      "地域店舗",
      "Instagram",
      "YouTube Shorts",
      "TikTok"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "藤井 実彦（ふじい・みつひこ）"
      },
      {
        "type": "paragraph",
        "text": "漫画原作者／Webマーケティング・コンサルタント／Kansei.info 編集長。"
      },
      {
        "type": "paragraph",
        "text": "青山学院大学文学部教育学科心理学専攻卒。20年以上にわたりWebマーケティング、SEO、地域ブランディング、コンテンツ設計に携わる。"
      },
      {
        "type": "paragraph",
        "text": "近年は、那須地域における長期フィールドワーク、短尺動画行動観測、Atmospheric UX、Pre-Meaning、Save → Plan → Impulse 理論など、AI時代における「人間の感性と場所性」を研究。"
      },
      {
        "type": "paragraph",
        "text": "漫画原作者としてベストセラーを含む10冊の著作を持つ。那須でのフィールドワークを経て、SNS動画に関する論文、AIに関する著作を20本ほど発表している。"
      },
      {
        "type": "paragraph",
        "text": "2026年、HCII 2026（Human-Computer Interaction International）採択論文、"
      },
      {
        "type": "paragraph",
        "text": "\"Save → Plan → Impulse: A Cross-Platform Sequential Model of Short-Form Video Influence on Tourist Mobility in Car-Centric Rural Regions\""
      },
      {
        "type": "paragraph",
        "text": "を発表。"
      }
    ]
  },
  {
    "slug": "colophon",
    "navLabel": "奥付",
    "title": "奥付",
    "description": "AI時代のバズらないSNS動画基礎講座",
    "keywords": [
      "SNS動画",
      "AI時代",
      "Save Plan Impulse",
      "なすぱらTV",
      "GEO",
      "地域店舗",
      "Instagram",
      "YouTube Shorts",
      "TikTok"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "AI時代のバズらないSNS動画基礎講座"
      },
      {
        "type": "paragraph",
        "text": "小さなお店が、本来つながるべきお客様と出会う方法"
      },
      {
        "type": "paragraph",
        "text": "著者：藤井 実彦"
      },
      {
        "type": "paragraph",
        "text": "発行日：2026年5月10日"
      },
      {
        "type": "paragraph",
        "text": "発行者：藤井 実彦"
      },
      {
        "type": "paragraph",
        "text": "発行所：ネクストドアー出版"
      },
      {
        "type": "paragraph",
        "text": "Kansei.info"
      },
      {
        "type": "paragraph",
        "text": "https://kansei.info"
      },
      {
        "type": "paragraph",
        "text": "xbrains.inc"
      },
      {
        "type": "paragraph",
        "text": "https://xbrains.jp"
      },
      {
        "type": "paragraph",
        "text": "────────────────────────────"
      },
      {
        "type": "paragraph",
        "text": "本書の内容の一部または全部について、著作権法上認められた場合を除き、無断での転載・複製・配布を禁じます。"
      },
      {
        "type": "paragraph",
        "text": "本書は、那須地域におけるフィールドワーク、SNS行動観測、HCI研究、AI時代の空間設計論、および「世界観マーケティング」研究をもとに執筆されています。"
      }
    ]
  }
];
