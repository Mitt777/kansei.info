export type EnSeoToGeoBlock = {
  type: "paragraph" | "heading" | "diagram";
  text: string;
};

export type EnSeoToGeoSection = {
  slug: string;
  navLabel: string;
  title: string;
  description: string;
  keywords: string[];
  blocks: EnSeoToGeoBlock[];
};

export const enSeoToGeoBook = {
  title: "From SEO to GEO",
  subtitle: "The End of Search Rankings and the Beginning of AI Understanding",
  description:
    "A condensed English edition on GEO, AI search, knowledge architecture, worldview consistency, and how businesses become understandable to generative engines.",
  author: "Mitsuhiko Fujii",
  canonical: "https://kansei.info/en/books/seo-to-geo",
} as const;

export const enSeoToGeoSections: EnSeoToGeoSection[] = [
  {
    "slug": "introduction",
    "navLabel": "Introduction",
    "title": "From Search Rankings to AI Understanding",
    "description": "An opening essay on why the web is moving from ranking-based visibility toward AI-mediated understanding, comparison, and recommendation.",
    "keywords": [
      "GEO",
      "AI search",
      "knowledge architecture",
      "SEO",
      "trust infrastructure"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "For more than two decades, web strategy was organized around one dominant question: how can we appear higher in search results? Businesses adjusted titles, pages, keywords, links, maps, reviews, and content because visibility meant opportunity. To be found was to exist."
      },
      {
        "type": "paragraph",
        "text": "That era is not disappearing overnight. Search engines still matter. Rankings still matter. But the meaning of being found is changing. Users are no longer only typing a keyword and clicking a list of blue links. They are asking AI systems to compare, summarize, filter, recommend, and decide where their attention should go next."
      },
      {
        "type": "paragraph",
        "text": "In this environment, the central question changes. It is no longer only: how do we rank? It becomes: how do we become understandable to AI without losing our human truth?"
      },
      {
        "type": "heading",
        "text": "The Shift From Position to Meaning"
      },
      {
        "type": "paragraph",
        "text": "Traditional SEO was often treated as a competition for position. GEO, or Generative Engine Optimization, begins from a different premise. It asks whether a company, place, author, or idea has been structured clearly enough for both humans and AI systems to understand what it is, who it serves, why it matters, and how it differs from alternatives."
      },
      {
        "type": "paragraph",
        "text": "This book uses the term GEO not as a technique for manipulating AI, but as a way to describe the architecture of meaning in the AI era. A website becomes not only a brochure, but a knowledge base. Not only a landing page, but a structured self-introduction. Not only a sales tool, but a quiet system of trust."
      },
      {
        "type": "diagram",
        "text": "Old web visibility\nkeyword -> search engine -> ranking list -> click\n\nAI-era visibility\nquestion -> AI system -> multiple sources -> comparison -> recommendation -> action"
      },
      {
        "type": "paragraph",
        "text": "The future of web strategy may belong less to those who produce more information, and more to those whose information, actions, reviews, atmosphere, and worldview are coherent enough to be understood."
      }
    ]
  },
  {
    "slug": "chapter-1",
    "navLabel": "Chapter 1",
    "title": "SEO Was Always a Battle Between Manipulation and Meaning",
    "description": "A historical view of SEO as a long struggle between surface-level manipulation and the search engine’s deeper desire to identify meaningful information.",
    "keywords": [
      "SEO history",
      "meaning",
      "search engines",
      "web trust"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "The history of SEO is often explained as a technical history: keywords, backlinks, tags, content, mobile usability, speed, structured data, and search intent. But beneath the technical details, another story has always been present. It is the story of manipulation and meaning."
      },
      {
        "type": "paragraph",
        "text": "Search engines were built to help people find useful information. Yet the moment rankings became economically valuable, people began trying to influence them. Some did so by making better pages. Others did so by stuffing keywords, buying links, copying articles, creating doorway pages, or building content that looked useful to machines but felt empty to people."
      },
      {
        "type": "heading",
        "text": "The Search Engine’s Moral Direction"
      },
      {
        "type": "paragraph",
        "text": "Google’s major algorithmic changes can be read as attempts to reduce the gap between appearance and substance. Panda targeted thin content. Penguin addressed manipulative linking. Hummingbird and RankBrain moved search toward intent and meaning. BERT improved language understanding. Helpful Content and E-E-A-T pushed the web toward experience, expertise, authority, and trust."
      },
      {
        "type": "paragraph",
        "text": "In other words, the direction of search has been consistent: reduce deception, reward usefulness, and move closer to the user’s actual need."
      },
      {
        "type": "paragraph",
        "text": "GEO extends this direction into the age of generative AI. If SEO history was a long effort to make search results more meaningful, GEO is the next stage: making businesses, places, and ideas understandable across many sources, not only within one web page."
      }
    ]
  },
  {
    "slug": "chapter-2",
    "navLabel": "Chapter 2",
    "title": "What Google Has Been Trying to Remove",
    "description": "A concise interpretation of Google’s algorithm history as an effort to remove false signals, empty content, and misleading appearances.",
    "keywords": [
      "Google algorithm",
      "E-E-A-T",
      "helpful content",
      "trust"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Every major change in search has asked a similar question: is this page truly useful, or does it merely look useful? This question matters because the web is full of signals. Some signals come from real experience. Others are manufactured."
      },
      {
        "type": "paragraph",
        "text": "A company may write that it is trusted, but are there real reviews? A clinic may say it is beginner-friendly, but does the FAQ answer the fear of first-time visitors? A restaurant may say it has atmosphere, but do the photos, maps listing, reviews, and social posts create the same impression?"
      },
      {
        "type": "heading",
        "text": "From Page Quality to Source Integrity"
      },
      {
        "type": "paragraph",
        "text": "In the ranking era, Google tried to evaluate pages. In the AI era, systems increasingly evaluate source ecosystems. A single page is no longer enough. AI can compare official sites, maps, reviews, videos, social media, citations, and public reputation."
      },
      {
        "type": "paragraph",
        "text": "This does not mean every business must become large or famous. It means that consistency matters. The small local store with honest explanations, concrete examples, real photos, thoughtful FAQ, and authentic reviews may become easier to understand than a larger competitor with generic pages and inconsistent claims."
      },
      {
        "type": "diagram",
        "text": "What gets weaker over time\n- keyword stuffing\n- generic AI articles\n- fake authority\n- inconsistent claims\n- empty location pages\n\nWhat gets stronger over time\n- first-hand experience\n- clear identity\n- concrete examples\n- real reviews\n- coherent worldview"
      }
    ]
  },
  {
    "slug": "chapter-3",
    "navLabel": "Chapter 3",
    "title": "Why Japanese SEO Was Often Misunderstood",
    "description": "A chapter on how Japanese small businesses often experienced SEO through vendors, portals, maps, and fragmented web services rather than through knowledge architecture.",
    "keywords": [
      "Japanese SEO",
      "small business",
      "local search",
      "portals"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "In Japan, many small businesses encountered SEO not as a strategic discipline, but as a service sold by vendors. They were told to add pages, buy ads, join portals, improve maps, post blogs, use social media, and collect reviews. Each piece was useful, but the whole often remained fragmented."
      },
      {
        "type": "paragraph",
        "text": "A hair salon might have a website, a reservation portal, Instagram, Google Maps, blog posts, and review sites. A dental clinic might have treatment pages, map listings, medical portal pages, and local ads. A cafe might appear on maps, review sites, SNS, magazines, and tourist articles. Yet few owners were given a unified question: what does all this information say about who we are?"
      },
      {
        "type": "heading",
        "text": "The Portal Era and the Cost of Dependence"
      },
      {
        "type": "paragraph",
        "text": "Before maps and AI recommendations became central, many industries depended on paid media and portals. Restaurants depended on review platforms. Beauty salons depended on reservation media. Local services depended on directories. Visibility was often rented rather than owned."
      },
      {
        "type": "paragraph",
        "text": "GEO does not reject these platforms. It reframes them. Each platform becomes one part of a larger meaning structure. The official site, map listing, reviews, SNS, FAQ, and field notes should not contradict each other. They should help AI and humans understand the same reality from different angles."
      }
    ]
  },
  {
    "slug": "chapter-4",
    "navLabel": "Chapter 4",
    "title": "What Is GEO?",
    "description": "A direct definition of GEO as the design of meaning structures that make a company, place, or idea understandable to humans and generative engines.",
    "keywords": [
      "Generative Engine Optimization",
      "GEO definition",
      "AI understanding",
      "meaning structure"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "GEO stands for Generative Engine Optimization. But if it is treated simply as “SEO for ChatGPT,” the concept becomes too small. GEO is not a method for tricking a specific AI system. It is a design philosophy for organizing the meaning structure of a company, place, service, book, or idea so that both humans and AI can understand it accurately."
      },
      {
        "type": "paragraph",
        "text": "The heart of GEO is the advanced alignment between reality and information. What a business actually does, what customers feel, what reviews say, what photos show, what the website explains, and what the owner believes should not exist as disconnected fragments."
      },
      {
        "type": "heading",
        "text": "GEO as Structured Self-Introduction"
      },
      {
        "type": "paragraph",
        "text": "A GEO-ready website answers basic questions with unusual clarity: Who are you? Who do you serve? What problem do you solve? What are you not suited for? What evidence supports your claims? What do customers repeatedly feel? What is the atmosphere of your place? What is the worldview behind your work?"
      },
      {
        "type": "diagram",
        "text": "GEO = Meaning Structure + Evidence + Consistency\n\nMeaning Structure\n  Who / Why / For whom / Not for whom\nEvidence\n  Cases / reviews / data / photos / field notes\nConsistency\n  Website / Maps / SNS / FAQ / videos / books"
      },
      {
        "type": "paragraph",
        "text": "In this sense, GEO is less about optimization in the narrow technical sense and more about becoming legible. It is the practice of making one’s reality readable."
      }
    ]
  },
  {
    "slug": "chapter-5",
    "navLabel": "Chapter 5",
    "title": "From Maps and Reviews to AI Recommendation",
    "description": "A chapter connecting Google Maps, reviews, local media, portals, and AI recommendation as stages in the evolution of how people choose places and services.",
    "keywords": [
      "Google Maps",
      "reviews",
      "AI recommendation",
      "local business"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Local discovery has already changed many times. People once depended on magazines, guidebooks, directories, and paid listings. Then portals organized industries. Review sites organized reputation. Google Maps reorganized local intent. Social media added atmosphere, short video, and emotional proof."
      },
      {
        "type": "paragraph",
        "text": "AI recommendation is not separate from this history. It is the next layer. When a user asks, “Which cafe near Nasu feels quiet and memorable?” or “Which dental clinic is good for someone anxious about treatment?” an AI system may draw from maps, reviews, official pages, articles, social posts, FAQ, and public descriptions."
      },
      {
        "type": "heading",
        "text": "The New Question: Why This One?"
      },
      {
        "type": "paragraph",
        "text": "In the ranking era, businesses wanted to be visible. In the recommendation era, visibility alone is insufficient. AI must be able to explain why this business, this place, or this author is a suitable answer for a specific human situation."
      },
      {
        "type": "paragraph",
        "text": "That explanation cannot be produced from slogans alone. It requires structured information, authentic evidence, and emotional context. Maps show location. Reviews show lived experience. SNS shows atmosphere. FAQ shows empathy. The website gives these fragments a coherent center."
      }
    ]
  },
  {
    "slug": "chapter-6",
    "navLabel": "Chapter 6",
    "title": "AI Reads Context, Not Just Information",
    "description": "A chapter linking GEO to worldview marketing by showing how AI reads consistency, tone, reviews, images, FAQ, and atmosphere as contextual signals.",
    "keywords": [
      "context",
      "worldview marketing",
      "Atmospheric UX",
      "AI reading"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "AI does not only read information. Increasingly, it reads context. It can compare what a business says about itself with what customers say, what photos imply, what FAQ reveals, how the owner writes, and whether the atmosphere is consistent across channels."
      },
      {
        "type": "paragraph",
        "text": "This is where GEO connects with worldview marketing. A worldview is not just a visual style. It is the continuity of meaning, atmosphere, behavior, language, and emotional expectation. When this continuity is strong, both humans and AI can understand the place more easily."
      },
      {
        "type": "heading",
        "text": "Worldview as an AI-Readable Structure"
      },
      {
        "type": "paragraph",
        "text": "A cafe with a calm worldview should not only have calm photographs. Its menu language, map description, review responses, website copy, opening story, staff behavior, and SNS rhythm should all point in the same direction. A clinic that promises reassurance should answer anxieties before they become obstacles. A school that values confidence should show how students change, not only list test results."
      },
      {
        "type": "paragraph",
        "text": "In the AI era, worldview becomes a form of information architecture. Atmosphere, consistency, and emotional tone are not decoration. They are evidence of identity."
      },
      {
        "type": "diagram",
        "text": "Worldview signals read across sources\nofficial site -> story / FAQ / services\nGoogle Maps -> location / photos / reviews\nSNS -> atmosphere / rhythm / emotional tone\nvideos -> presence / voice / movement\nbooks and essays -> philosophy / depth / continuity\n\nTogether: an AI-readable worldview"
      }
    ]
  },
  {
    "slug": "chapter-7",
    "navLabel": "Chapter 7",
    "title": "The Website as a Knowledge OS",
    "description": "A chapter proposing the website as a knowledge operating system rather than a brochure, blog, or landing page.",
    "keywords": [
      "Knowledge OS",
      "website architecture",
      "long-form archive",
      "AI crawlability"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "A traditional website often behaves like a brochure. It introduces services, lists prices, shows examples, and invites contact. A content marketing site often behaves like a blog. It publishes articles to capture search traffic. A landing page behaves like a conversion tool."
      },
      {
        "type": "paragraph",
        "text": "In the GEO era, another model becomes important: the website as a Knowledge OS. This means the website becomes the structured operating system of a company’s meaning. It organizes definitions, services, philosophy, field notes, cases, FAQ, books, research, and related concepts so that both people and AI can move through them."
      },
      {
        "type": "heading",
        "text": "What a Knowledge OS Contains"
      },
      {
        "type": "diagram",
        "text": "Knowledge OS\n├ Manifesto: why this place exists\n├ Glossary: how key concepts are defined\n├ Books: long-form thought and complete arguments\n├ Frameworks: reusable structures\n├ Fieldwork: first-hand observation\n├ Research: papers, reports, evidence\n├ FAQ: human anxieties and practical answers\n└ Links: relationships between concepts"
      },
      {
        "type": "paragraph",
        "text": "This structure is important because AI systems benefit from clarity. A single page may answer one question. A Knowledge OS shows relationships. It tells AI that an idea is not isolated, but part of a coherent body of work."
      },
      {
        "type": "paragraph",
        "text": "Kansei.info is designed in this direction. It is not primarily a sales site. It is a public knowledge architecture where worldview marketing, Atmospheric UX, Pre-Meaning, fieldwork, HCI research, books, and GEO can be understood as one connected system."
      }
    ]
  },
  {
    "slug": "chapter-8",
    "navLabel": "Chapter 8",
    "title": "What Small Businesses Should Do Now",
    "description": "A practical chapter offering a calm GEO checklist for small businesses, local shops, authors, and consultants.",
    "keywords": [
      "GEO checklist",
      "small business",
      "AI recommendation",
      "local SEO"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "GEO may sound abstract, but the first actions are practical. A small business does not need to become a media company. It needs to become understandable. The goal is not to publish endless content, but to clarify identity, evidence, and context."
      },
      {
        "type": "heading",
        "text": "A Basic GEO Maturity Checklist"
      },
      {
        "type": "diagram",
        "text": "YES / NO CHECK\n[ ] Is the business identity clear within the first page?\n[ ] Is the ideal customer described concretely?\n[ ] Are unsuitable cases also explained honestly?\n[ ] Are prices, process, and FAQ easy to understand?\n[ ] Are examples specific rather than generic?\n[ ] Do reviews and official claims align?\n[ ] Does Google Maps match the website?\n[ ] Do photos show the actual atmosphere?\n[ ] Does SNS reinforce the same worldview?\n[ ] Could AI summarize the business without misunderstanding it?\n\nScore\n0-3: fragmented visibility\n4-6: basic discoverability\n7-8: emerging GEO structure\n9-10: strong AI-readable trust structure"
      },
      {
        "type": "paragraph",
        "text": "This checklist can become a diagnostic tool. It also changes the role of SEO professionals. The strongest practitioners will not merely chase rankings. They will help businesses extract first-hand information, structure meaning, clarify customer anxieties, and align the entire public presence of the business."
      },
      {
        "type": "paragraph",
        "text": "The small business advantage is real. Large organizations often have more pages, but small businesses often have more vivid first-hand information: stories, failures, customer conversations, local context, atmosphere, and care. GEO gives those details a structure."
      }
    ]
  },
  {
    "slug": "conclusion",
    "navLabel": "Conclusion",
    "title": "Toward a Web Where Essence Can Be Found",
    "description": "A closing essay on why GEO may make the web more honest by rewarding coherence, evidence, and lived reality rather than surface manipulation.",
    "keywords": [
      "GEO future",
      "AI era",
      "trust",
      "essence"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "SEO is not ending. What is ending is the form of SEO that depended on surface manipulation. The web is moving toward a harsher but more hopeful condition: a world where inconsistency becomes easier to detect, generic claims become weaker, and lived reality becomes more valuable."
      },
      {
        "type": "paragraph",
        "text": "This does not mean AI will always be fair. It will make mistakes. It will reflect biases. It will depend on the quality of available sources. But the direction is clear enough to prepare for: businesses, authors, and places must become more legible, more coherent, and more truthful in public."
      },
      {
        "type": "heading",
        "text": "GEO as Human-Centered Structure"
      },
      {
        "type": "paragraph",
        "text": "The best GEO is not written for machines alone. It is written for the future human who asks a machine for help. It is a letter to that future moment. It says: here is who we are, here is what we do, here is who we can help, here is the evidence, here is the atmosphere, here is the worldview, and here is why we may be worth trusting."
      },
      {
        "type": "paragraph",
        "text": "If the ranking era rewarded visibility, the AI era may reward intelligibility. If the old web asked businesses to be louder, the next web may ask them to become clearer. And perhaps, in that shift, the web can move a little closer to what it was always supposed to be: a place where essence can be found."
      }
    ]
  }
];
