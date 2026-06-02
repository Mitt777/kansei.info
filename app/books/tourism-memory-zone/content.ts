export type TourismMemoryBlock = {
  type: "paragraph" | "heading";
  text: string;
};

export type TourismMemoryChapter = {
  slug: string;
  navLabel: string;
  title: string;
  subtitle: string;
  description: string;
  keywords: string[];
  blocks: TourismMemoryBlock[];
};

export const tourismMemoryBook = {
  title: "観光記憶圏試論",
  subtitle: "AI時代に、人はなぜその場所を忘れないのか",
  description: "那須での二年間・900本超の動画制作・100店舗超のフィールドワークから、観光地を『記憶の地図の交差点』として捉え直す試論。AIRSシステムの理論的バックボーン。",
  author: "Mitsuhiko Fujii",
  canonical: "https://kansei.info/books/tourism-memory-zone",
  year: "2026",
} as const;

export const tourismMemoryChapters: TourismMemoryChapter[] = [
  {
    "slug": "introduction",
    "navLabel": "はじめに",
    "title": "はじめに",
    "subtitle": "",
    "description": "本書は、観光地論ではない。地方創生論でもない。SNSマーケティング論でもない。",
    "keywords": [
      "観光記憶圏",
      "AIRS",
      "Place Attachment",
      "Save Plan Impulse",
      "那須",
      "場所の記憶"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "本書は、観光地論ではない。"
      },
      {
        "type": "paragraph",
        "text": "地方創生論でもない。SNSマーケティング論でもない。"
      },
      {
        "type": "paragraph",
        "text": "本書は、「なぜ人はその場所を忘れないのか」という問いから始まる。"
      },
      {
        "type": "paragraph",
        "text": "私は約二年間、那須地域をフィールドとして過ごした。那須町、那須塩原市、大田原市、そしてその周辺地域である。最初から研究をするつもりだったわけではない。息子の進学がきっかけで、東京と那須を行き来する生活が始まった。"
      },
      {
        "type": "paragraph",
        "text": "しかし結果として、その二年間は私の人生の中でも最も長く、最も濃密なフィールドワークになった。"
      },
      {
        "type": "paragraph",
        "text": "毎日車で走った。動画を撮った。店主と話した。カフェへ行き、パン屋へ行き、ラーメンを食べ、温泉へ入り、イベントへ参加した。"
      },
      {
        "type": "paragraph",
        "text": "YouTube・Instagram・TikTokを中心に、900本を超える動画を制作した。その過程で、100店舗を超える店主と出会った。"
      },
      {
        "type": "paragraph",
        "text": "リビングストン。SUDA COFFEE。Cafe Facile。らーめんたかはし。クローバーボヌール。焼き菓子蕾。那須どうぶつ王国。"
      },
      {
        "type": "paragraph",
        "text": "それぞれに、まったく異なる空気があった。"
      },
      {
        "type": "paragraph",
        "text": "最初、私はそれを単なる店舗の個性だと思っていた。しかし、何度も同じ場所へ通い、何度も同じ店主と話し、何度も同じお客様を見ているうちに、ある疑問が生まれた。"
      },
      {
        "type": "paragraph",
        "text": "なぜ人は、同じ場所へ戻るのだろう。"
      },
      {
        "type": "paragraph",
        "text": "もっと便利な店はある。もっと安い店もある。もっと大きな店もある。もっと有名な店もある。それでも、人は戻ってくる。"
      },
      {
        "type": "paragraph",
        "text": "私はその違和感を、何度も感じた。そしてその違和感こそが、本書の出発点になった。"
      },
      {
        "type": "paragraph",
        "text": "本書は、一つの仮説を提示する試みである。完成した理論ではない。那須という一地域での観察に基づく、仮説の途中経過である。"
      },
      {
        "type": "paragraph",
        "text": "それでも、その観察から見えてきたものを、できる限り誠実に記録しておきたいと思う。"
      }
    ]
  },
  {
    "slug": "chapter-1",
    "navLabel": "第1章",
    "title": "第一章　那須という実験場",
    "subtitle": "2年間・900本・100店舗のフィールドワーク",
    "description": "1-1　フィールドワークの始まり2023年秋、私は那須への行き来を始めた。最初の数ヶ月は、ただ車で走った。場所を覚えるために。",
    "keywords": [
      "観光記憶圏",
      "AIRS",
      "Place Attachment",
      "Save Plan Impulse",
      "那須",
      "場所の記憶"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "1-1　フィールドワークの始まり"
      },
      {
        "type": "paragraph",
        "text": "2023年秋、私は那須への行き来を始めた。最初の数ヶ月は、ただ車で走った。場所を覚えるために。"
      },
      {
        "type": "paragraph",
        "text": "那須は、栃木県の北端に位置する地域である。那須岳を中心に、那須町・那須塩原市・大田原市などが広がる。東京から東北新幹線で約1時間20分。関東圏から日帰りや週末旅行でアクセスしやすい観光地として知られている。"
      },
      {
        "type": "paragraph",
        "text": "しかし実際に通ってみると、那須は観光地という言葉では収まりきらない何かを持っていることがわかった。"
      },
      {
        "type": "paragraph",
        "text": "店と店の距離が遠い。主要道路（国道17号）沿いに点在する店舗を巡るには、車が必要だ。路線バスは存在するが、頻度は低い。"
      },
      {
        "type": "paragraph",
        "text": "だからこそ、人々は「行く理由」を必要とする。なんとなく近くを通ったから、ではなく、あの店に行くために、という動機で移動する。"
      },
      {
        "type": "paragraph",
        "text": "これが、後に私が「観光記憶圏」と呼ぶものの、最初の観察だった。"
      },
      {
        "type": "heading",
        "text": "1-2　動画実験の設計"
      },
      {
        "type": "paragraph",
        "text": "2024年秋、私はなすぱらTVという実験を始めた。"
      },
      {
        "type": "paragraph",
        "text": "YouTube・Instagram・TikTokの3プラットフォームに、那須地域のカフェ・飲食店・観光スポットを記録した動画を毎日投稿する。同じ日に、同じ素材を、同じ編集パイプラインで、3プラットフォームに同時投稿する。"
      },
      {
        "type": "paragraph",
        "text": "使用機材はiPhone（4K・60fps）。編集は同一カラーグレード・同一テンポ。ボイスオーバーなし、テロップなし。これにより、コンテンツのスタイル差という変数を排除し、プラットフォームの差だけを見ることができる。"
      },
      {
        "type": "heading",
        "text": "1-3　実験の規模"
      },
      {
        "type": "paragraph",
        "text": "60日間で468本の動画を投稿した。"
      },
      {
        "type": "paragraph",
        "text": "総インプレッションは約310万回。総再生数は約40万回。コメントの中から分析対象として抽出した1,200件のコメントを、行動段階指標によってコーディングした。"
      },
      {
        "type": "paragraph",
        "text": "※ 分析の詳細はHCI International 2026（モントリオール）発表論文「Save → Plan → Impulse: A Cross-Platform Sequential Model of Short-Form Video Influence on Tourist Mobility in Car-Centric Rural Regions」を参照。"
      },
      {
        "type": "paragraph",
        "text": "この実験を通して、私は那須の100店舗を超える店舗に足を運び、店主と言葉を交わした。動画の撮影は、そのまま深いフィールドワークになった。"
      }
    ]
  },
  {
    "slug": "chapter-2",
    "navLabel": "第2章",
    "title": "第二章　Save → Plan → Impulse",
    "subtitle": "SNSが明かした人の移動の構造",
    "description": "2-1　三つのプラットフォームの役割実験の結果、三つのプラットフォームには明確な役割分担が存在することがわかった。",
    "keywords": [
      "観光記憶圏",
      "AIRS",
      "Place Attachment",
      "Save Plan Impulse",
      "那須",
      "場所の記憶"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "2-1　三つのプラットフォームの役割"
      },
      {
        "type": "paragraph",
        "text": "実験の結果、三つのプラットフォームには明確な役割分担が存在することがわかった。"
      },
      {
        "type": "paragraph",
        "text": "Instagramでは、人は保存する。"
      },
      {
        "type": "paragraph",
        "text": "コメント欄に頻繁に現れた言葉は「保存した」「絶対行きたい」「雰囲気最高」だった。感情的な共鳴と、後で見返すための保存行動が、Instagramの主要な反応だった。"
      },
      {
        "type": "paragraph",
        "text": "YouTubeでは、人は計画する。"
      },
      {
        "type": "paragraph",
        "text": "「ここから車で何分ですか」「次の旅行で那須に寄るルートを組んでいます」「駐車場はありますか」。YouTubeのコメントは、具体的な計画や評価の言葉に満ちていた。"
      },
      {
        "type": "paragraph",
        "text": "TikTokでは、人は衝動を受ける。"
      },
      {
        "type": "paragraph",
        "text": "「今から向かいます」「さっき行ってきた！動画で見て衝動的に来た」。TikTokの特徴は、投稿からの時間的近接性だった。動画を見た当日・翌日に来店したという報告が、他のプラットフォームより顕著に多かった。"
      },
      {
        "type": "heading",
        "text": "2-2　統計的な検証"
      },
      {
        "type": "paragraph",
        "text": "この分布の差は、統計的に有意だった。"
      },
      {
        "type": "paragraph",
        "text": "χ²(4, N=468) = 168.15, p < .001, Cramér's V = 0.42（中〜大の効果量）。"
      },
      {
        "type": "paragraph",
        "text": "二者間信頼性はCohen's κ = 0.82（強い一致）。Bonferroni補正済みの事後比較でも、三プラットフォーム間の全ての組み合わせで有意差が確認された（p < .001）。"
      },
      {
        "type": "heading",
        "text": "2-3　Save → Plan → Impulse という構造"
      },
      {
        "type": "paragraph",
        "text": "私はこの観察を、Save → Plan → Impulse という三段階の行動経路として整理した。これは個々のユーザーが必ずこの順番で三つのプラットフォームを行き来するという主張ではない。プラットフォームレベルで見たとき、各プラットフォームが異なる行動段階を主に支持しているという、分布の差についての知見である。"
      },
      {
        "type": "paragraph",
        "text": "この構造は、那須という車依存の地方観光地の特性と深く関係している。店舗間距離が3〜8kmという地理的条件は、観光客の「計画」コストを高める。だからこそ、「保存する」「計画する」「衝動で動く」という行動の差が、プラットフォームの差として鮮明に現れた可能性がある。"
      }
    ]
  },
  {
    "slug": "chapter-3",
    "navLabel": "第3章",
    "title": "第三章　既存研究との対話",
    "subtitle": "Place Attachment・Third Place・Experience Economy",
    "description": "3-1　Place Attachment研究欧米の場所研究において、最も広く知られる概念の一つがPlace Attachmentである。Scannell & Gifford（2010）は、Place Attachmentを「人・場所・心",
    "keywords": [
      "観光記憶圏",
      "AIRS",
      "Place Attachment",
      "Save Plan Impulse",
      "那須",
      "場所の記憶"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "3-1　Place Attachment研究"
      },
      {
        "type": "paragraph",
        "text": "欧米の場所研究において、最も広く知られる概念の一つがPlace Attachmentである。Scannell & Gifford（2010）は、Place Attachmentを「人・場所・心理的プロセス」の三者関係として整理し、場所への愛着が人の幸福感や行動に影響することを示した。"
      },
      {
        "type": "paragraph",
        "text": "これらの研究が明らかにしてきたことは重要である。人は、景色を覚えている。匂いを覚えている。音を覚えている。会話を覚えている。そして、その記憶が再訪を生む。"
      },
      {
        "type": "paragraph",
        "text": "しかし、私はそこに一つの違和感を覚えた。既存研究の多くは、アンケートによって愛着を測定している。しかし愛着は、保存したこと、調べたこと、訪れたこと——その行動の痕跡そのものの中に現れているのではないかと思った。"
      },
      {
        "type": "paragraph",
        "text": "Save → Plan → Impulseの実測は、その仮説に基づいている。"
      },
      {
        "type": "heading",
        "text": "3-2　Third Place論"
      },
      {
        "type": "paragraph",
        "text": "Oldenburg（1989）が提唱したThird Placeは、家でも職場でもない「第三の場所」を指す。那須の多くの個人店は、この定義に近い機能を持っている。特にカフェや喫茶店は、地元の常連と遠方の旅行者が同じ空間で時間を過ごす場所になっている。"
      },
      {
        "type": "paragraph",
        "text": "ただし、観光記憶圏という概念は、Third Placeとは異なるスケールを扱う。個別の店舗の機能ではなく、地域全体が持つ集合的な記憶の場としての性格を問題にしているからである。"
      },
      {
        "type": "heading",
        "text": "3-3　Experience Economy"
      },
      {
        "type": "paragraph",
        "text": "Pine & Gilmore（1998）は、経済の進化を商品経済→サービス経済→経験経済という段階で整理した。私が問いたいのは、「なぜその体験は記憶になるのか」である。体験が記憶になる条件は何か。記憶になった体験が再訪を生む仕組みはどこにあるか。これが、観光記憶圏という仮説の核心にある問いである。"
      }
    ]
  },
  {
    "slug": "chapter-4",
    "navLabel": "第4章",
    "title": "第四章　観光記憶圏という仮説",
    "subtitle": "定義・条件・那須での観察",
    "description": "4-1　仮説の定義私は、観光記憶圏（Tourism Memory Zone）を、以下のように仮定義する。",
    "keywords": [
      "観光記憶圏",
      "AIRS",
      "Place Attachment",
      "Save Plan Impulse",
      "那須",
      "場所の記憶"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "4-1　仮説の定義"
      },
      {
        "type": "paragraph",
        "text": "私は、観光記憶圏（Tourism Memory Zone）を、以下のように仮定義する。"
      },
      {
        "type": "paragraph",
        "text": "人が意図的に移動し、記憶を生成し、再訪理由を持つ地域。"
      },
      {
        "type": "paragraph",
        "text": "その地域自体が、来訪者の記憶の生成装置として機能している状態。"
      },
      {
        "type": "paragraph",
        "text": "これは単なる「人気の観光地」ではない。量的指標ではなく、来訪者の中に記憶が生成され、それが再訪を促す構造を持つ地域を指す。重要なのは、記憶の生成と再訪の連鎖である。"
      },
      {
        "type": "heading",
        "text": "4-2　観光記憶圏の仮説的条件"
      },
      {
        "type": "paragraph",
        "text": "那須での観察から、以下の条件が観光記憶圏の成立に関係している可能性がある。これらはあくまで仮説であり、那須以外での検証が必要である。"
      },
      {
        "type": "paragraph",
        "text": "条件一：地域内の移動がすでに体験の一部になっていること"
      },
      {
        "type": "paragraph",
        "text": "那須では、店と店の間の移動が10〜20分かかる。しかしその移動は、景色を見る時間であり、次の目的地への期待を高める時間になっている。移動そのものが、体験の一部になっている。"
      },
      {
        "type": "paragraph",
        "text": "条件二：個別の店舗が地域の世界観を担っていること"
      },
      {
        "type": "paragraph",
        "text": "地域内の個別の店舗が、それぞれ異なる「空気」を持ちながら、しかし全体として一つの地域の世界観を形成している。"
      },
      {
        "type": "paragraph",
        "text": "条件三：再訪を促すアンカーが複数存在すること"
      },
      {
        "type": "paragraph",
        "text": "「あの店のコーヒーがまた飲みたい」「あの景色が忘れられない」。一度来た人が再訪する理由——アンカー——が複数存在している地域では、一人の旅行者が複数回訪れやすい。"
      },
      {
        "type": "paragraph",
        "text": "条件四：店舗間の紹介ネットワークが存在すること"
      },
      {
        "type": "paragraph",
        "text": "那須では、パン屋がカフェを紹介し、カフェが別のカフェを紹介するという現象を繰り返し観察した。この非競争的な協調ネットワークが、地域全体の回遊性を高めている可能性がある。"
      },
      {
        "type": "heading",
        "text": "4-3　仮説の限界"
      },
      {
        "type": "paragraph",
        "text": "以上の観察は、那須という一地域での限定的なフィールドワークに基づいている。他の地域でも同様の現象が観察されるかどうかは、現時点では検証できていない。また、「記憶の生成」をどのように測定するかという方法論的な問題も残されている。"
      }
    ]
  },
  {
    "slug": "chapter-5",
    "navLabel": "第5章",
    "title": "第五章　地域全体が世界観を形成する",
    "subtitle": "競争しながら紹介し合う構造",
    "description": "5-1　非競争的協調という観察那須での最も重要な観察の一つが、店舗間の非競争的な協調関係である。あるカフェの店主が、別のカフェを「ぜひ行ってみてください」と紹介した。パン屋が、地域の他の食事処を勧めた。100店舗を超えるフィールドワーク",
    "keywords": [
      "観光記憶圏",
      "AIRS",
      "Place Attachment",
      "Save Plan Impulse",
      "那須",
      "場所の記憶"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "5-1　非競争的協調という観察"
      },
      {
        "type": "paragraph",
        "text": "那須での最も重要な観察の一つが、店舗間の非競争的な協調関係である。あるカフェの店主が、別のカフェを「ぜひ行ってみてください」と紹介した。パン屋が、地域の他の食事処を勧めた。100店舗を超えるフィールドワークを通して、これが那須全体に広がる文化であることが見えてきた。"
      },
      {
        "type": "heading",
        "text": "5-2　地域全体が一つの世界観を形成する"
      },
      {
        "type": "paragraph",
        "text": "那須という地域は、店単位ではなく、地域全体で一つの世界観を形成しているのではないか。"
      },
      {
        "type": "paragraph",
        "text": "那須の世界観を一言で表すなら、おそらく「ゆっくりした時間の中に、個性的な場所が点在している」になるだろう。この世界観は、特定の誰かが設計したものではない。百を超える個人店が、それぞれ独立して経営しながら、結果として作り上げてきたものである。"
      },
      {
        "type": "heading",
        "text": "5-3　デジタルと現実の相互作用"
      },
      {
        "type": "paragraph",
        "text": "Instagramでの「保存」は、那須の世界観の断片を自分のコレクションに加える行為である。YouTubeでの「計画」は、その世界観の中をどう移動するかを事前に想像する行為である。TikTokでの「衝動」は、世界観に引き寄せられて、現実の移動を決断する瞬間である。"
      },
      {
        "type": "paragraph",
        "text": "デジタルメディアは、観光記憶圏の世界観を遠方の人々に届け、来訪を促す媒体として機能している。そして来訪した人が持ち帰る記憶が、再びデジタルメディアを通して拡散していく。"
      }
    ]
  },
  {
    "slug": "chapter-6",
    "navLabel": "第6章",
    "title": "第六章　AI時代に場所はどうなるか",
    "subtitle": "",
    "description": "6-1　AI検索と場所の発見2024年以降、生成AIを使った検索が急速に普及している。「那須で犬連れで入れるカフェを教えて」「黒磯でひとりでゆっくりできる静かなカフェは」。こうした自然言語による検索に、AIが答える時代になった。",
    "keywords": [
      "観光記憶圏",
      "AIRS",
      "Place Attachment",
      "Save Plan Impulse",
      "那須",
      "場所の記憶"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "6-1　AI検索と場所の発見"
      },
      {
        "type": "paragraph",
        "text": "2024年以降、生成AIを使った検索が急速に普及している。「那須で犬連れで入れるカフェを教えて」「黒磯でひとりでゆっくりできる静かなカフェは」。こうした自然言語による検索に、AIが答える時代になった。"
      },
      {
        "type": "paragraph",
        "text": "この変化は、場所の発見に大きな影響を与える。AIが推薦できる場所は、AIが「説明できる」場所である。Google Mapsに情報が整備されている。写真がある。営業時間が明記されている。こうした情報が揃っていれば、AIはその場所を正確に推薦できる。"
      },
      {
        "type": "heading",
        "text": "6-2　AIに説明されにくい場所の問題"
      },
      {
        "type": "paragraph",
        "text": "情報が整備されていない店舗は、AIの視野から外れていく可能性がある。那須の個人店の多くは、情報発信に十分なリソースを割けていない。そのため、実際の魅力とは無関係に、AI検索の推薦候補から外れるリスクがある。"
      },
      {
        "type": "paragraph",
        "text": "しかし、動画は違う。動画には、光・音・動き・空気感が収められている。Save → Plan → Impulseの実験でも、テキスト情報のない「空気感」だけの動画が、強い保存・計画・衝動行動を引き出すことを確認した。人は、言語化される前の感覚的な情報に反応する。"
      },
      {
        "type": "heading",
        "text": "6-3　AI時代における観光記憶圏の課題"
      },
      {
        "type": "paragraph",
        "text": "AI時代に、観光記憶圏をどう「見える化」するか。これが実践的な課題として浮かび上がる。"
      },
      {
        "type": "paragraph",
        "text": "Google Mapsの公開情報を整備し、写真を充実させ、AIが読み取れる形で地域の世界観を記述する。これは、観光記憶圏を維持するための新しいインフラ整備だと言えるかもしれない。"
      },
      {
        "type": "paragraph",
        "text": "次の章では、この課題への実践的なアプローチとして、観光記憶圏指数（TMZ Index）という概念と、日本各地への試験的な適用を試みる。"
      }
    ]
  },
  {
    "slug": "chapter-7",
    "navLabel": "第7章",
    "title": "第七章　日本観光記憶圏50",
    "subtitle": "観測のための仮説的地図",
    "description": "7-1　なぜ地図を作るのか本章では、「日本観光記憶圏50」という仮説的なリストを提示する。",
    "keywords": [
      "観光記憶圏",
      "AIRS",
      "Place Attachment",
      "Save Plan Impulse",
      "那須",
      "場所の記憶"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "7-1　なぜ地図を作るのか"
      },
      {
        "type": "paragraph",
        "text": "本章では、「日本観光記憶圏50」という仮説的なリストを提示する。"
      },
      {
        "type": "paragraph",
        "text": "最初に強調しておきたい。これは観光地の格付けではない。観光客数ランキングでも、経済効果ランキングでもない。"
      },
      {
        "type": "paragraph",
        "text": "目的は一つである。観光記憶圏という仮説を検証するための、比較研究のフィールドリストを作ること。"
      },
      {
        "type": "paragraph",
        "text": "那須での二年間の観察から導いた仮説的条件が、他の地域でも観察されるかどうかを確かめるためには、まず「どの地域を観察すべきか」を整理する必要がある。この50地域は、その出発点である。"
      },
      {
        "type": "paragraph",
        "text": "もちろん、私は那須以外の地域を那須と同等の深度で観察したわけではない。したがってこのリストは、現地フィールドワークや地域関係者へのインタビューによる将来の検証を前提とした、現時点での作業仮説である。"
      },
      {
        "type": "heading",
        "text": "7-2　観光記憶圏指数（TMZ Index）の設計"
      },
      {
        "type": "paragraph",
        "text": "評価の軸として、以下の七指標を設けた。いずれも、那須での観察から導いた仮説的な条件に基づいている。"
      },
      {
        "type": "paragraph",
        "text": "① 世界観密度（Worldview Density）"
      },
      {
        "type": "paragraph",
        "text": "その地域にしかない空気——個性的な店・宿・風景・人——がどれだけ存在するか。代替不可能性の高さを問う指標である。那須の場合、リビングストン・SUDA COFFEE・Cafe Facile・クローバーボヌール・焼き菓子蕾は、それぞれ全く異なる世界観を持ちながら、全体として「那須らしさ」を形成している。"
      },
      {
        "type": "paragraph",
        "text": "② 個店比率（Independent Density）"
      },
      {
        "type": "paragraph",
        "text": "チェーンではなく、個人店がどれだけ地域文化を支えているか。観光記憶圏は、大規模施設だけでは成立しない。小さな個人店の集合によって成立するという仮説に基づく。"
      },
      {
        "type": "paragraph",
        "text": "③ Maps依存度（Map Discovery Dependency）"
      },
      {
        "type": "paragraph",
        "text": "その地域を回る時、Google Mapsがどれだけ必要か。那須・伊豆高原・軽井沢・富良野など、車で探索する地域では、この依存度が高い。依存度が高いほど、「発見の喜び」が生まれやすく、同時にAI時代における情報整備の重要性も増す。"
      },
      {
        "type": "paragraph",
        "text": "④ 再訪性（Revisit Potential）"
      },
      {
        "type": "paragraph",
        "text": "人は何度も戻るか。観光記憶圏は、再訪理由を持つ。一回限りで終わる観光地との差異を測る指標である。"
      },
      {
        "type": "paragraph",
        "text": "⑤ 発見性（Discovery Potential）"
      },
      {
        "type": "paragraph",
        "text": "偶然見つける・迷う・寄り道する・予想外に出会う——この余白が存在するか。効率的な観光動線だけでは、記憶は薄くなる。迷うことが価値になる地域かどうかを問う。"
      },
      {
        "type": "paragraph",
        "text": "⑥ 宿泊性（Stay Potential）"
      },
      {
        "type": "paragraph",
        "text": "滞在する理由があるか。宿泊は、記憶を濃くする。日帰りだけでは生まれない記憶がある。"
      },
      {
        "type": "paragraph",
        "text": "⑦ 物語性（Narrative Density）"
      },
      {
        "type": "paragraph",
        "text": "その地域に語られる物語があるか。歴史・文化・伝説・人物・あるいは店主自身の人生。これらが、観光記憶圏の土壌になる。"
      },
      {
        "type": "heading",
        "text": "7-3　Sランク：地域全体が一つの物語空間になっている"
      },
      {
        "type": "paragraph",
        "text": "七指標での評価において、特に世界観密度・個店比率・再訪性・発見性の全てが高い地域を、暫定的にSランクと位置づける。"
      },
      {
        "type": "paragraph",
        "text": "Sランク候補（10地域）：那須、軽井沢、湯布院、尾道、京都東山、直島、屋久島、石垣島、しまなみ海道、黒川温泉"
      },
      {
        "type": "paragraph",
        "text": "那須について述べると、私は二年間の観察から、那須がSランクに値すると考えている。その最大の理由は世界観密度の高さである。リビングストン・SUDA COFFEE・Cafe Facile——それぞれが全く異なる世界観を持ちながら、地域全体として「那須らしさ」を形成している。"
      },
      {
        "type": "paragraph",
        "text": "軽井沢は、日本で最も成功した観光記憶圏の一つかもしれない。避暑地・別荘地・文学・教会・森・カフェ・ベーカリー。軽井沢を好きな人は、「軽井沢が好きな自分」を好きになっている。これはPlace Identityの典型例である。"
      },
      {
        "type": "paragraph",
        "text": "湯布院の面白さは、時間の流れ方にある。盆地・霧・温泉・小さな店。実際に時計が遅くなるわけではない。しかし、歩く速度が変わる。観光記憶圏には「時間のデザイン」が重要なのではないかと、湯布院を調べる中で思った。"
      },
      {
        "type": "paragraph",
        "text": "尾道の特徴は、坂と路地による「迷うことが価値になる」構造である。現代は効率化が進む。しかし、観光記憶圏ではむしろ迷うことに価値がある。発見性という指標の重要さを、尾道は体現している。"
      },
      {
        "type": "paragraph",
        "text": "直島は、生活とアートが混ざっている点が独特である。島民の生活・港・空き家・自転車・アート作品——これらが分離していない。単なる美術館の集合ではなく、一つの物語空間として機能している。"
      },
      {
        "type": "paragraph",
        "text": "屋久島は、時間のスケールが違う。数百年・数千年。人間より長く生きる森。Topophilia研究が論じる「場所への深い帰属感」が最も強く現れる日本の地域の一つかもしれない。"
      },
      {
        "type": "heading",
        "text": "7-4　Aランク：強い世界観を持つ地域"
      },
      {
        "type": "paragraph",
        "text": "Aランクは、強い核を持ちながら、複数の世界観が並存している地域である。"
      },
      {
        "type": "paragraph",
        "text": "Aランク候補（15地域）：箱根、金沢、飛騨高山、伊豆高原、日光、小布施、道後温泉、奈良、鎌倉、松本、萩、城崎温泉、別府、富良野・美瑛、阿蘇"
      },
      {
        "type": "paragraph",
        "text": "箱根は日本有数の観光地であるが、「箱根」という一つの世界観というより、強羅・仙石原・湯本・芦ノ湖——複数の観光記憶圏が集合している印象を受ける。金沢も同様で、工芸・茶屋街・現代アート・食文化、それぞれが強い。しかし、一つの世界観へ収束するというより、複数の魅力が共存している。"
      },
      {
        "type": "paragraph",
        "text": "飛騨高山は、町並みの保存と食文化の組み合わせが強い。伊豆高原は、那須と類似した「個人店の点在」という構造を持ち、比較研究の対象として重要な地域である。"
      },
      {
        "type": "heading",
        "text": "7-5　Bランク：強力な象徴を持つ地域"
      },
      {
        "type": "paragraph",
        "text": "Bランクは、非常に強いアイコンが存在する地域である。記憶が一点に集中しやすい構造を持つ。"
      },
      {
        "type": "paragraph",
        "text": "Bランク候補（25地域）：河口湖・富士五湖、草津温泉、小樽、宮島、熱海、出雲、知床、白川郷、上高地、那智・熊野、五島列島、天草、壱岐、種子島、竹富島、久高島、奄美大島、礼文島、十和田、角館、山寺、遠野、会津若松、松江、津和野"
      },
      {
        "type": "paragraph",
        "text": "これらの地域には、観光資源としての強いアイコンが存在する。富士山・湯畑・運河・厳島神社・世界遺産。しかし、観光記憶圏という視点で見たとき、「その地域の中でどれだけ多様な記憶が生まれているか」という点で、Sランク・Aランクとの差が生まれている可能性がある。"
      },
      {
        "type": "paragraph",
        "text": "もちろん、これは優劣の話ではない。記憶の生成構造の違いについての仮説である。"
      },
      {
        "type": "heading",
        "text": "7-6　なぜ観光客数ランキングではないのか"
      },
      {
        "type": "paragraph",
        "text": "ここで改めて強調しておきたい。本研究は、観光客数ランキングを作りたいわけではない。宿泊数・消費額のランキングを作りたいわけでもない。"
      },
      {
        "type": "paragraph",
        "text": "私が知りたいのは、なぜ人はその場所を忘れないのか、である。"
      },
      {
        "type": "paragraph",
        "text": "そして、その問いから逆算した時、観光地の地図は少し違う形になる。私は、それを観光記憶圏と呼んでみた。"
      },
      {
        "type": "paragraph",
        "text": "この仮説的な地図が正しいかどうかは、今後の比較フィールドワークによって検証される必要がある。本章が提示したのは、その検証の出発点となる50地域のリストである。"
      }
    ]
  },
  {
    "slug": "chapter-8",
    "navLabel": "第8章",
    "title": "第八章　世界観光記憶圏35",
    "subtitle": "比較研究という次の旅",
    "description": "8-1　問い：これは那須だけの現象か本書の中で、私は観光記憶圏という仮説を提示した。そして日本観光記憶圏50という第一版の仮説的地図を提示した。",
    "keywords": [
      "観光記憶圏",
      "AIRS",
      "Place Attachment",
      "Save Plan Impulse",
      "那須",
      "場所の記憶"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "8-1　問い：これは那須だけの現象か"
      },
      {
        "type": "paragraph",
        "text": "本書の中で、私は観光記憶圏という仮説を提示した。そして日本観光記憶圏50という第一版の仮説的地図を提示した。"
      },
      {
        "type": "paragraph",
        "text": "しかし、ここで重要な問いが生まれる。"
      },
      {
        "type": "paragraph",
        "text": "これは那須だけの現象なのだろうか。"
      },
      {
        "type": "paragraph",
        "text": "あるいは、日本だけの現象なのだろうか。"
      },
      {
        "type": "paragraph",
        "text": "もし観光記憶圏という仮説が正しいなら、世界にも類似した構造が存在するはずである。"
      },
      {
        "type": "paragraph",
        "text": "ただし、ここで強調しておきたい。私は、那須以外の地域を二年間観察したわけではない。したがって、本章は結論ではない。比較研究計画である。"
      },
      {
        "type": "heading",
        "text": "8-2　比較軸"
      },
      {
        "type": "paragraph",
        "text": "世界各地を観察する場合も、第七章で示したTMZ Indexの七指標（世界観密度・個店比率・Maps依存度・再訪性・発見性・宿泊性・物語性）を比較軸として用いる。"
      },
      {
        "type": "paragraph",
        "text": "この軸で見た時、いくつかの興味深い地域が浮かび上がる。以下は、文献・映像・旅行記などの二次情報に基づく暫定的な候補リストである。現地フィールドワークによる検証が、今後の課題である。"
      },
      {
        "type": "heading",
        "text": "8-3　世界観光記憶圏候補35地域"
      },
      {
        "type": "paragraph",
        "text": "北米・カリブ（5地域）"
      },
      {
        "type": "paragraph",
        "text": "Carmel-by-the-Sea（米カリフォルニア）、Portland・Hawthorne地区（米オレゴン）、Oaxaca（メキシコ）、Trinidad（キューバ）、Charleston Historic District（米サウスカロライナ）"
      },
      {
        "type": "paragraph",
        "text": "欧州（12地域）"
      },
      {
        "type": "paragraph",
        "text": "Tuscany・San Gimignano周辺（イタリア）、Cinque Terre（イタリア）、Sintra（ポルトガル）、Rye（英国）、Cotswolds（英国）、Hallstatt（オーストリア）、Bruges（ベルギー）、Colmar（フランス）、Dubrovnik旧市街（クロアチア）、Kotor（モンテネグロ）、Ohrid（北マケドニア）、Gimmelwald（スイス）"
      },
      {
        "type": "paragraph",
        "text": "アジア・オセアニア（12地域）"
      },
      {
        "type": "paragraph",
        "text": "Ubud（バリ島、インドネシア）、Luang Prabang（ラオス）、Hoi An（ベトナム）、Chiang Mai・旧市街（タイ）、Bhaktapur（ネパール）、Udaipur（インド）、Zhouzhuang（中国）、Jiufen（台湾）、Bukchon Hanok Village（韓国）、Fitzroy・Collingwood（メルボルン、オーストラリア）、Maputo旧市街（モザンビーク）、Lijiang（中国）"
      },
      {
        "type": "paragraph",
        "text": "中東・アフリカ（6地域）"
      },
      {
        "type": "paragraph",
        "text": "Essaouira（モロッコ）、Chefchaouen（モロッコ）、Stone Town・Zanzibar（タンザニア）、Jaisalmer（インド）、Goreme・カッパドキア（トルコ）、Petra周辺（ヨルダン）"
      },
      {
        "type": "heading",
        "text": "8-4　Carmel-by-the-Seaと那須の比較"
      },
      {
        "type": "paragraph",
        "text": "Carmel-by-the-Seaを例に、那須との比較仮説を示す。"
      },
      {
        "type": "paragraph",
        "text": "共通点として、個人店文化・チェーン店の抑制・芸術家文化・発見性の高さが挙げられる。実際、Carmelは市の条例によってチェーン店の出店を制限しており、それが独自の世界観密度を生んでいるとされる。"
      },
      {
        "type": "paragraph",
        "text": "相違点として、徒歩文化（Carmel）対車文化（那須）、海洋文化（Carmel）対山岳・高原文化（那須）、富裕層比率の違いが挙げられる。"
      },
      {
        "type": "paragraph",
        "text": "この比較が示唆するのは、観光記憶圏の成立に「チェーン店の抑制」という条件が関係している可能性である。那須では制度的な抑制はないが、地理的な条件（店舗間距離・車依存）が事実上の参入障壁として機能しているかもしれない。"
      },
      {
        "type": "heading",
        "text": "8-5　Tuscanyとの比較"
      },
      {
        "type": "paragraph",
        "text": "Tuscanyは、農村景観・小規模事業者・宿泊型観光・地域物語という点で那須と共通点を持つ。相違点は、歴史の厚み・ワイン文化・EU規模での観光インフラである。"
      },
      {
        "type": "paragraph",
        "text": "Tuscanyのagriturismo（農家民宿）文化は、那須の農場・牧場体験と類似した「生産現場への関与」という記憶生成装置として機能している可能性がある。"
      },
      {
        "type": "heading",
        "text": "8-6　Ububdとの比較"
      },
      {
        "type": "paragraph",
        "text": "Ububdは「時間を忘れるために行く」「自然と文化」「個人店」という点で那須と共通点を持つ。相違点は、宗教文化の濃度・国際観光比率・気候の違いである。"
      },
      {
        "type": "paragraph",
        "text": "Ububdのケースで興味深いのは、芸術・農業・スピリチュアルという三要素が観光記憶圏を構成しているという点である。那須の場合、カフェ・食・自然という三要素が対応している可能性がある。"
      },
      {
        "type": "heading",
        "text": "8-7　比較研究の意義と限界"
      },
      {
        "type": "paragraph",
        "text": "世界観光記憶圏35の提示は、観光記憶圏という仮説の普遍性を問うための出発点である。"
      },
      {
        "type": "paragraph",
        "text": "那須での観察から導いた七指標が、文化的・地理的に異なる地域でも有効かどうかは、現地フィールドワークなしには判断できない。指標の重みが地域によって異なる可能性もある。"
      },
      {
        "type": "paragraph",
        "text": "しかし、比較する地図を持つことで、観察すべき問いが明確になる。これが本章の目的である。"
      }
    ]
  },
  {
    "slug": "chapter-9",
    "navLabel": "第9章",
    "title": "第九章　AIRSという仮説",
    "subtitle": "観光記憶圏は観測できるのだろうか",
    "description": "9-1　Place Attachmentの次ここまで私は、観光記憶圏という仮説について書いてきた。",
    "keywords": [
      "観光記憶圏",
      "AIRS",
      "Place Attachment",
      "Save Plan Impulse",
      "那須",
      "場所の記憶"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "9-1　Place Attachmentの次"
      },
      {
        "type": "paragraph",
        "text": "ここまで私は、観光記憶圏という仮説について書いてきた。"
      },
      {
        "type": "paragraph",
        "text": "しかし、ここで一つの問題が残る。観光記憶圏は、本当に存在するのだろうか。そして、それは観測できるのだろうか。"
      },
      {
        "type": "paragraph",
        "text": "Place Attachment研究は、主にアンケートを用いてきた。しかし、私は少し違う方向から考えた。愛着は、回答ではなく、行動に現れているのではないか。"
      },
      {
        "type": "paragraph",
        "text": "保存する。調べる。訪れる。思い出す。人に話す。再訪する。"
      },
      {
        "type": "paragraph",
        "text": "そこに、記憶の痕跡がある。"
      },
      {
        "type": "heading",
        "text": "9-2　AIRSの出発点"
      },
      {
        "type": "paragraph",
        "text": "AIRSは、その違和感から生まれた。完成したサービスではない。生まれたばかりの実験装置である。"
      },
      {
        "type": "paragraph",
        "text": "私は、AIRSをSNSとは考えていない。レビューサイトとも考えていない。AIRSを、記憶のためのインターフェースと考えている。"
      },
      {
        "type": "heading",
        "text": "9-3　三つの記録層"
      },
      {
        "type": "paragraph",
        "text": "AIRSは、場所との関わりを三つの層で記録しようとしている。"
      },
      {
        "type": "paragraph",
        "text": "「このお店を残す」（AIRズ）"
      },
      {
        "type": "paragraph",
        "text": "レビューを書くほどではない。しかし、忘れたくない。覚えておきたい。この最も小さな感情的な行動を記録する。GoogleマップのStarよりも個人的で、SNSの投稿よりも静かな記録である。"
      },
      {
        "type": "paragraph",
        "text": "「今日の空気」（Moment）"
      },
      {
        "type": "paragraph",
        "text": "ある日の光。ある日の会話。ある日の雨。その瞬間の空気を、3カットの短い動画として記録する。Momentは、一定時間後に消える。残るのは、記憶だけである。"
      },
      {
        "type": "paragraph",
        "text": "「お店の公式な空気」（Official AIRS）"
      },
      {
        "type": "paragraph",
        "text": "営業時間だけでも、住所だけでもない。その場所らしさ。その人格。その世界観。店舗が公式に発信する、場所の本質的な情報である。"
      },
      {
        "type": "heading",
        "text": "9-4　観測装置としてのAIRS"
      },
      {
        "type": "paragraph",
        "text": "AIRSの設計は、観光記憶圏の仮説を検証するための観測装置という側面を持つ。"
      },
      {
        "type": "paragraph",
        "text": "もし人々がAIRSを使って場所の記憶を残し始めるなら、その行動の痕跡から以下が観測できるかもしれない。"
      },
      {
        "type": "paragraph",
        "text": "保存された場所の分布——どの地域に記憶が集中しているか。"
      },
      {
        "type": "paragraph",
        "text": "再訪の証拠——同一ユーザーが同一場所を複数回記録しているか。"
      },
      {
        "type": "paragraph",
        "text": "感情の言語——「また行きたい」「疲れがほどけた」「静かで安心した」という言葉のパターン。"
      },
      {
        "type": "paragraph",
        "text": "これらは、観光記憶圏の存在を間接的に示す行動的証拠になり得る。"
      },
      {
        "type": "heading",
        "text": "9-5　実験の倫理的前提"
      },
      {
        "type": "paragraph",
        "text": "AIRSは現在、那須地域を中心に小規模な試験的運用を行っている。ユーザーの記録データはプライバシーに配慮した形で管理され、研究目的での利用には適切な同意を得る方針である。"
      },
      {
        "type": "paragraph",
        "text": "観光記憶圏という学術的仮説の検証と、店舗・地域への実践的支援という二つの目的を、責任ある形で両立させることが、AIRSの設計原則である。"
      },
      {
        "type": "heading",
        "text": "9-6　小さな実験の始まり"
      },
      {
        "type": "paragraph",
        "text": "観光記憶圏は存在するのか。Place Attachmentは、行動として観測できるのか。人は、本当に人生の一部を場所へ置いて帰っているのか。"
      },
      {
        "type": "paragraph",
        "text": "私は、その問いを観測するための小さな実験を始めようとしている。AIRSとは、そのための実験装置である。うまくいくかもしれない。うまくいかないかもしれない。"
      },
      {
        "type": "paragraph",
        "text": "しかし、私は二年間のフィールドワークを通して、何度もそれを見てきた。人は、場所へ人生の一部を置いて帰る。そして、また戻ってくる。"
      }
    ]
  },
  {
    "slug": "epilogue",
    "navLabel": "終章",
    "title": "終章　それでも、人は場所を忘れない",
    "subtitle": "",
    "description": "私はこの本を書きながら、何度も自分自身に問い続けた。なぜ人は、その場所へ行くのだろう。",
    "keywords": [
      "観光記憶圏",
      "AIRS",
      "Place Attachment",
      "Save Plan Impulse",
      "那須",
      "場所の記憶"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "私はこの本を書きながら、何度も自分自身に問い続けた。"
      },
      {
        "type": "paragraph",
        "text": "なぜ人は、その場所へ行くのだろう。"
      },
      {
        "type": "paragraph",
        "text": "なぜ人は、また戻るのだろう。"
      },
      {
        "type": "paragraph",
        "text": "なぜ人は、その場所を忘れないのだろう。"
      },
      {
        "type": "paragraph",
        "text": "本書の中で、私は様々な研究を見てきた。Place Attachment・Place Identity・Topophilia・Third Place・Experience Economy。それらは、それぞれ違う言葉を使いながら、見ていたものはどこか似ていた。人と場所との関係。その不思議な結びつきである。"
      },
      {
        "type": "paragraph",
        "text": "この旅の始まり"
      },
      {
        "type": "paragraph",
        "text": "私は、この本を書くために那須へ行ったわけではない。研究をするために動画を撮ったわけでもない。観光記憶圏という理論を作るために、カフェへ通ったわけでもない。"
      },
      {
        "type": "paragraph",
        "text": "息子の進学がきっかけだった。だから、最初はなすぱらTVで900本以上も撮るとは思わなかった。HCIに研究論文を出し、カナダで発表するなど考えもしなかった。書籍を12冊書くとも思わなかった。観光記憶圏という言葉を作ろうとも思わなかった。"
      },
      {
        "type": "paragraph",
        "text": "しかし、振り返ってみると、全部そこから始まっていた。リビングストン。SUDA COFFEE。Cafe Facile。Sai Cafe。那須どうぶつ王国。らーめんたかはし。"
      },
      {
        "type": "paragraph",
        "text": "私は、そこで何度も同じ光景を見た。人が戻ってくる。また来る。誰かを連れてくる。その理由を説明できない。しかし、確かに戻ってくる。"
      },
      {
        "type": "paragraph",
        "text": "その理由を知りたかった。そして気が付くと、動画を900本作っていた。論文を書いていた。観光記憶圏という言葉を作っていた。AIRSという実験を始めていた。"
      },
      {
        "type": "paragraph",
        "text": "AI時代に起きていること"
      },
      {
        "type": "paragraph",
        "text": "今、世界は急速に変化している。AIは、情報を整理する。比較する。推薦する。要約する。検索も変わる。地図も変わる。SNSも変わる。"
      },
      {
        "type": "paragraph",
        "text": "しかし、私は二年間のフィールドワークを通して、一つだけ確信に近いものを持った。"
      },
      {
        "type": "paragraph",
        "text": "人は、効率だけでは生きない。"
      },
      {
        "type": "paragraph",
        "text": "もっと安い店はある。もっと便利な店はある。もっと近い店はある。それでも、人は戻る。"
      },
      {
        "type": "paragraph",
        "text": "私は、その答えの一部が、記憶にあると思っている。"
      },
      {
        "type": "paragraph",
        "text": "記憶の地図"
      },
      {
        "type": "paragraph",
        "text": "私たちは、地図を持っている。しかし、それはGoogle Mapsの地図ではない。心の中の地図である。"
      },
      {
        "type": "paragraph",
        "text": "そこには、場所がある。時間がある。人がいる。感情がある。物語がある。"
      },
      {
        "type": "paragraph",
        "text": "ある人にとってのリビングストン。ある人にとっての尾道。ある人にとっての湯布院。ある人にとっての京都。それぞれが違う。しかし、確かに存在する。"
      },
      {
        "type": "paragraph",
        "text": "私は、その地図を「観光記憶圏」と呼んでみた。"
      },
      {
        "type": "paragraph",
        "text": "それが正しいかどうかは、まだ分からない。本書も、完成した理論ではない。仮説である。観察である。途中経過である。しかし、少なくとも私には、そう見えた。"
      },
      {
        "type": "paragraph",
        "text": "観光地とは、消費される場所ではないのかもしれない。"
      },
      {
        "type": "paragraph",
        "text": "人が、人生の一部を置いて帰る場所なのかもしれない。"
      },
      {
        "type": "paragraph",
        "text": "そして、その場所は、今日も誰かの記憶を静かに作り続けている。"
      },
      {
        "type": "paragraph",
        "text": "参考文献"
      },
      {
        "type": "paragraph",
        "text": "Fujii, M. (2026). Save → Plan → Impulse: A Cross-Platform Sequential Model of Short-Form Video Influence on Tourist Mobility in Car-Centric Rural Regions. HCI International 2026, Montreal, Canada."
      },
      {
        "type": "paragraph",
        "text": "Oldenburg, R. (1989). The Great Good Place. Paragon House."
      },
      {
        "type": "paragraph",
        "text": "Pine, B. J., & Gilmore, J. H. (1998). Welcome to the experience economy. Harvard Business Review, 76(4), 97-105."
      },
      {
        "type": "paragraph",
        "text": "Proshansky, H. M. (1978). The city and self-identity. Environment and Behavior, 10(2), 147-169."
      },
      {
        "type": "paragraph",
        "text": "Scannell, L., & Gifford, R. (2010). Defining place attachment: A tripartite organizing framework. Journal of Environmental Psychology, 30(1), 1-10."
      },
      {
        "type": "paragraph",
        "text": "Tuan, Y. F. (1974). Topophilia: A Study of Environmental Perception, Attitudes, and Values. Prentice-Hall."
      },
      {
        "type": "paragraph",
        "text": "著者について"
      },
      {
        "type": "paragraph",
        "text": "藤井実彦（Mitsuhiko Fujii）"
      },
      {
        "type": "paragraph",
        "text": "ライター・コメンテーター・コンサルタント・マルチベンチャープロデューサー。栃木県那須エリア在住。"
      },
      {
        "type": "paragraph",
        "text": "マンガ脚本家を経て、保守系論壇誌への寄稿、なすぱら®の商標登録保有者として地域コンテンツプロデュースに従事。現在は那須地域アニメ・コンテンツプロジェクト「なすぱら」、シェルター事業「Ancar Shelter」、出版支援、Webコンテンツなど複数のベンチャーを並走させている。"
      },
      {
        "type": "paragraph",
        "text": "2023年より那須地域に拠点を置き、約2年間・900本を超える動画制作と100店舗を超えるフィールドワークを実施。この実証研究は、HCI International 2026（カナダ・モントリオール）にて国際学術発表される予定。"
      },
      {
        "type": "paragraph",
        "text": "著書多数。AI時代における地方小規模店舗の生き残りをテーマに、複数の書籍を刊行。"
      }
    ]
  }
];
