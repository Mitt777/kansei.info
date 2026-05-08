export const kindleUrl = 'https://www.amazon.co.jp/s?k=Where+Humans+Breathe+Mitsuhiko+Fujii'

export const book = {
  title: 'Where Humans Breathe',
  subtitle: 'Atmosphere, Experience, and Return Motivation in the AI Era',
  author: 'Mitsuhiko Fujii with AI',
  image: '/images/manifesto-bg.jpg',
  description:
    'An English-language conceptual archive exploring how humans remain emotionally alive in the AI era through atmosphere, continuity, place, and return motivation.',
}

export const coreLinks = [
  { href: '/en', label: 'English Home', description: 'International knowledge space' },
  { href: '/en/manifesto', label: 'Manifesto', description: 'Where Humans Breathe' },
  { href: '/en/glossary', label: 'Glossary', description: 'Kansei concept bridges' },
  { href: '/research/hcii2026', label: 'HCII2026', description: 'Academic research foundation' },
]

export const concepts = [
  {
    slug: 'atmospheric-ux',
    title: 'Atmospheric UX',
    origin: '空気感 / 場の感覚',
    subtitle: 'Experience design shaped by atmosphere before interface.',
    summary:
      'Atmospheric UX treats silence, lighting, texture, spatial rhythm, sound, memory, and human presence as primary materials of experience design.',
    body: [
      'A person often understands a place before they understand its information. The body senses tone, density, warmth, distance, and continuity before language becomes available.',
      'Atmospheric UX begins from that pre-verbal layer. It asks how places, interfaces, services, and worlds are emotionally felt before they are consciously interpreted.',
      'In the AI era, many interfaces become faster and more standardized. What remains memorable is not only usability, but the atmosphere that allows a human being to stay.',
    ],
    related: ['Pre-Meaning', 'Sekaikan', 'Human-side Alignment'],
  },
  {
    slug: 'human-side-alignment',
    title: 'Human-side Alignment',
    origin: '人間側アラインメント',
    subtitle: 'A question about what technology should protect.',
    summary:
      'Human-side Alignment reframes AI-era design around dignity, attention, emotional rhythm, presence, and lived experience.',
    body: [
      'As AI systems become more capable, the question is no longer only whether technology can optimize a task.',
      'The deeper question is what kind of human condition technology should leave intact. Silence, hesitation, memory, local attachment, and emotional safety are not inefficiencies. They are part of being human.',
      'Human-side Alignment names this orientation: a design stance that protects the breathing space of human life.',
    ],
    related: ['Pre-Meaning', 'Atmospheric UX', 'Contextual Continuity'],
  },
  {
    slug: 'pre-meaning',
    title: 'Pre-Meaning',
    origin: '意味以前',
    subtitle: 'The felt territory before explanation arrives.',
    summary:
      'Pre-Meaning describes the human state where atmosphere, bodily sensation, intuition, and emotional resonance appear before explicit interpretation.',
    body: [
      'People are moved before they can explain why. A room feels calm, a street feels alive, a cafe feels returnable, or a town feels quietly memorable.',
      'Pre-Meaning is not irrational. It is an earlier layer of human intelligence, where the body, memory, and atmosphere begin to organize meaning before words catch up.',
      'Kansei.info treats this layer as essential for UX, fieldwork, worldview design, and human-centered AI.',
    ],
    related: ['Atmospheric UX', 'Human-side Alignment', 'Sekaikan'],
  },
  {
    slug: 'sekaikan',
    title: 'Sekaikan',
    origin: '世界観',
    subtitle: 'A coherent experiential world that invites return.',
    summary:
      'Sekaikan is the invisible consistency through which atmosphere, story, space, behavior, and emotional continuity form a unified sense of reality.',
    body: [
      'Sekaikan is often translated as worldview, but in experience design it means more than an opinion or visual identity.',
      'It is the feeling that a place, brand, town, story, or community belongs to one continuous world. People do not only consume it. They enter it, remain in it, and sometimes return to it.',
      'In this sense, Sekaikan becomes a strategic language for designing emotional continuity.',
    ],
    related: ['Contextual Continuity', 'Atmospheric UX', 'Resonance Economy'],
  },
  {
    slug: 'contextual-continuity',
    title: 'Contextual Continuity',
    origin: '文脈継続性',
    subtitle: 'The continuity that makes places feel trustworthy.',
    summary:
      'Contextual Continuity is the sustained coherence of atmosphere, story, emotional tone, and spatial identity across time and interaction.',
    body: [
      'Fragmented information can attract attention, but continuity creates attachment.',
      'When a person returns to a place and still feels the same quiet logic of atmosphere, trust begins to accumulate. The place feels emotionally stable without becoming static.',
      'Contextual Continuity explains why certain experiences become part of memory instead of disappearing as momentary content.',
    ],
    related: ['Sekaikan', 'Atmospheric UX', 'Pre-Meaning'],
  },
  {
    slug: 'spi-model',
    title: 'Save → Plan → Impulse',
    origin: '保存 → 検討 → 衝動',
    subtitle: 'A cross-platform pathway from atmosphere to movement.',
    summary:
      'The SPI model describes how SNS emotion travels across platforms: Instagram saves, YouTube reassures, and TikTok stimulates impulsive action.',
    body: [
      'Fieldwork observation suggested that tourism motivation is no longer formed through a single advertisement or platform.',
      'A person may save an atmosphere on Instagram, confirm feasibility through YouTube, then move impulsively after TikTok reactivates emotion.',
      'Save → Plan → Impulse describes this sequence as a path from emotional resonance to real-world movement.',
    ],
    related: ['Atmospheric UX', 'Fieldwork from Rural Japan', 'HCII2026'],
  },
]

export const chapters = [
  {
    slug: 'introduction',
    label: 'Introduction',
    title: 'Where Humans Breathe',
    subtitle: 'A quiet entry into atmosphere, experience, and return motivation.',
    image: '/images/hero-lab.jpg',
    summary:
      'The introduction frames the book as an inquiry into why some places remain emotionally alive in memory while optimized information alone often leaves people exhausted.',
    intro:
      'Some experiences cannot be understood by information alone. They are remembered because they give the human body a place to breathe.',
    concepts: ['Atmosphere', 'Return Motivation', 'Human Experience', 'AI Era'],
    diagram: ['Information abundance', 'Emotional exhaustion', 'Breathing space'],
    related: ['/en/manifesto', '/en/glossary', '/en/where-humans-breathe'],
  },
  {
    slug: 'chapter-1-beyond-information',
    label: 'Chapter 1',
    title: 'Beyond Information',
    subtitle: 'Why human beings do not move through information alone.',
    image: '/images/fieldwork-note.jpg',
    summary:
      'This chapter argues that human action is shaped by felt atmosphere, memory, silence, texture, and emotional continuity before it is shaped by explicit information.',
    intro:
      'A person does not return to a cafe, town, street, or world only because it was efficient. Something before explanation has already moved.',
    concepts: ['Pre-Meaning', 'Atmosphere', 'Embodied Response', 'Emotional Memory'],
    diagram: ['Sensation', 'Felt Meaning', 'Return'],
    related: ['/en/pre-meaning', '/en/atmospheric-ux', '/labs/pre-meaning'],
  },
  {
    slug: 'chapter-2-atmosphere-as-experience',
    label: 'Chapter 2',
    title: 'Atmosphere as Experience',
    subtitle: 'Atmosphere as infrastructure rather than decoration.',
    image: '/images/manifesto-bg.jpg',
    summary:
      'This chapter develops atmosphere as a central layer of human experience: not a visual finish, but the condition that makes belonging, calm, and memory possible.',
    intro:
      'A place becomes memorable not only because of what exists there, but because of how it feels to remain there.',
    concepts: ['Atmospheric UX', 'Silence', 'Texture', 'Human Presence'],
    diagram: ['Space', 'Tone', 'Memory', 'Belonging'],
    related: ['/en/atmospheric-ux', '/labs/atmospheric-ux', '/en/sekaikan'],
  },
  {
    slug: 'chapter-3-save-plan-impulse',
    label: 'Chapter 3',
    title: 'Save → Plan → Impulse',
    subtitle: 'How emotional resonance becomes real-world movement.',
    image: '/images/lab-desk.jpg',
    summary:
      'This chapter introduces the SPI model from SNS fieldwork: Instagram often triggers saving, YouTube supports planning, and TikTok stimulates impulsive action.',
    intro:
      'Emotion is not static. It moves across platforms, changes temperature, and sometimes becomes physical movement.',
    concepts: ['SPI Model', 'SNS Observation', 'Tourist Mobility', 'Return Motivation'],
    diagram: ['Save', 'Plan', 'Impulse'],
    related: ['/en/spi-model', '/research/hcii2026', '/labs/spi-model'],
  },
  {
    slug: 'chapter-4-worldview-and-sense-of-place',
    label: 'Chapter 4',
    title: 'Worldview and Sense of Place',
    subtitle: 'Sekaikan as an emotional environment people can enter.',
    image: '/images/books-shelf.jpg',
    summary:
      'This chapter connects worldview design, sense of place, and emotional continuity as the basis for experiences that feel coherent and returnable.',
    intro:
      'A worldview is not only a story. It is a lived atmosphere that makes a place feel internally coherent.',
    concepts: ['Sekaikan', 'Sense of Place', 'Contextual Continuity', 'Worldview Design'],
    diagram: ['Story', 'Space', 'Behavior', 'Continuity'],
    related: ['/en/sekaikan', '/en/contextual-continuity', '/frameworks/worldview-value'],
  },
  {
    slug: 'chapter-5-fieldwork-rural-japan',
    label: 'Chapter 5',
    title: 'Fieldwork from Rural Japan',
    subtitle: 'Learning from cafes, towns, tourism spaces, and local atmospheres.',
    image: '/images/fieldwork-nature.jpg',
    summary:
      'This chapter grounds the theory in rural Japanese fieldwork, where atmosphere, local rhythm, and SNS behavior reveal how emotional resonance accumulates.',
    intro:
      'The foundation of this research was not only a desk. It was walking, observing, filming, listening, and returning.',
    concepts: ['Rural Japan', 'Fieldwork', 'Kansei', 'Regional DX'],
    diagram: ['Observation', 'SNS response', 'Local meaning'],
    related: ['/fieldwork', '/research/nasupara-60days', '/research/hcii2026'],
  },
  {
    slug: 'chapter-6-human-experience-ai-era',
    label: 'Chapter 6',
    title: 'Human Experience in the AI Era',
    subtitle: 'What kind of humanity should technology protect?',
    image: '/images/about-room.jpg',
    summary:
      'The final chapter proposes Human-side Alignment: an orientation for AI-era design that protects emotional rhythm, dignity, place, attention, and breathing space.',
    intro:
      'The challenge of the AI era is no longer merely technological. It is existential.',
    concepts: ['Human-side Alignment', 'AI Era', 'Dignity', 'Breathing Space'],
    diagram: ['Optimization', 'Human rhythm', 'Alignment'],
    related: ['/en/human-side-alignment', '/en/manifesto', '/labs/human-side-alignment'],
  },
]

export const chapterRoutes = chapters.map((chapter) => ({
  href: `/en/${chapter.slug}`,
  label: chapter.label,
  title: chapter.title,
  description: chapter.subtitle,
}))

export const conceptRoutes = concepts.map((concept) => ({
  href: `/en/${concept.slug}`,
  label: 'Concept',
  title: concept.title,
  description: concept.subtitle,
}))
