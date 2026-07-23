export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'quote'; text: string; cite?: string }

export interface Article {
  slug: string
  title: string
  category: string
  excerpt: string
  author: string
  date: string
  dateLabel: string
  readingTime: string
  reviewNote?: string
  body: Block[]
}

export const articles: Article[] = [
  {
    slug: 'what-is-muraqabah',
    title: 'What Is Muraqabah?',
    category: 'Spirituality',
    excerpt:
      'The vigilant awareness that Allah is always watching, and why our initiative carries this name.',
    author: 'Muraqabah Initiative',
    date: '2026-07-01',
    dateLabel: 'July 2026',
    readingTime: '4 min read',
    reviewNote:
      'This article is educational in nature and is awaiting formal scholarly review. Please consult a qualified scholar for religious rulings.',
    body: [
      { type: 'p', text: 'Muraqabah is the vigilant awareness that Allah is always watching. It is not an abstract idea reserved for scholars. It is a state of the heart that shapes how a person worships, how they act, and how they care for others.' },
      { type: 'p', text: 'Our vision is to build a community that lives with muraqabah. This constant awareness is one of the most essential dimensions of our faith, and it is the reason our initiative carries this name.' },
      { type: 'h2', text: 'Awareness made practical' },
      { type: 'p', text: 'Muraqabah Initiative exists to make that awareness practical: a society dedicated to sacred knowledge, refined character, and sincere community service. Each of these depends on the others. Knowledge without character becomes hollow. Character without knowledge drifts. Service without either loses its sincerity.' },
      { type: 'p', text: 'When a student sits in a weekly class, memorizes a line of a classical text, or packs a food box for a family they will never meet, they are practising the same discipline: remembering that Allah sees, and letting that remembrance shape the action.' },
      { type: 'h2', text: 'Knowledge that is embodied' },
      { type: 'p', text: 'The phrase we return to most often is simple: knowledge that is not only learned, but embodied. Muraqabah seeks to reconnect people to a way of life where spiritual growth is grounded in sincerity and consistency, where what is studied in the classroom is reflected in how we treat our families, our neighbours, and those in need.' },
      { type: 'p', text: 'This is why our work rests on three connected pillars: structured academics, khidmah rooted in the Prophetic tradition, and a living community of scholars, students, volunteers, and seekers. Each pillar is a different expression of the same awareness.' },
      { type: 'h2', text: 'Where to begin' },
      { type: 'p', text: 'If this idea resonates, the best place to begin is a class. Gardens of Paradise, our weekly study circle with Shaykh Zakaria AbdilAziz, launches in September 2026, and our programs page lists what is running and what is coming next. Knowledge, sincerely sought, is where muraqabah takes root.' },
    ],
  },
  {
    slug: 'why-chains-of-transmission-matter',
    title: 'Why Chains of Transmission Matter',
    category: 'Hadith',
    excerpt:
      'The science of hadith transmission has no parallel in any other religious or historical tradition. Here is why it still matters for every seeker.',
    author: 'Muraqabah Initiative',
    date: '2026-07-01',
    dateLabel: 'July 2026',
    readingTime: '5 min read',
    reviewNote:
      'This article is educational in nature and is awaiting formal scholarly review. Please consult a qualified scholar for religious rulings.',
    body: [
      { type: 'p', text: 'The preservation of Islam rests upon the precision of its transmission. Every hadith that reaches us today travelled through a sanad, a chain of named narrators stretching across real generations of real people, each one examined and evaluated by the scholars of Islam.' },
      { type: 'p', text: 'This methodology of hadith criticism, developed over centuries, has no parallel in any other religious or historical tradition. It is a science built to distinguish truth from error, strength from weakness, and reliability from fabrication.' },
      { type: 'h2', text: 'More than a list of names' },
      { type: 'p', text: 'A chain of transmission is not a formality. Scholars asked hard questions of every link: Did these narrators actually meet? Was this narrator\u2019s memory reliable? Was their character sound? Through the science of narrator evaluation, ilm al-rijal, they built one of history\u2019s most rigorous systems of verification.' },
      { type: 'p', text: 'That is why scholars distinguish between connected and disconnected chains, between elevated and lowered chains, and between reliable and problematic narrators, and why two qualified scholars may differ in grading the same hadith. The classifications were not arbitrary. They were developed, applied, and preserved with unmatched intellectual rigour.' },
      { type: 'h2', text: 'Why this matters for a modern seeker' },
      { type: 'p', text: 'We live in an era of unattributed quotations and viral religious content. The study of hadith sciences trains a different instinct: to ask where knowledge comes from, who carried it, and whether they were trustworthy. Students stop viewing hadith as isolated texts and begin to see them as carefully transmitted trusts.' },
      { type: 'p', text: 'The same principle animates how Muraqabah teaches everything. Our students are not consuming content; they are being connected to living teachers who themselves learned within unbroken chains of scholarship.' },
      { type: 'h2', text: 'Study this science with us' },
      { type: 'p', text: 'Chains of Trust: Foundations of Hadith Sciences is Muraqabah\u2019s live weekly course with Shaykh Nuh Sanders, built around a guided, line-by-line study of the classical poem Al-Bayquniyyah. Visit the course page to learn more.' },
    ],
  },
  {
    slug: 'knowledge-in-action-ramadan-2026',
    title: 'Knowledge in Action: The 2026 Ramadan Campaign',
    category: 'Impact Reports',
    excerpt:
      'How our community raised $14,725.80 in two weeks and delivered over 300 family packages, 648 hot meals, and direct assistance at home and in Tarim, Yemen.',
    author: 'Muraqabah Initiative',
    date: '2026-07-01',
    dateLabel: 'July 2026',
    readingTime: '5 min read',
    reviewNote: 'Figures verified against the 2026 Ramadan Impact Report.',
    body: [
      { type: 'p', text: 'Across Ontario, food insecurity has reached critical levels. In 2024, roughly one in four households in the province experienced food insecurity, and nearly one in three children lived in food-insecure households, according to research from PROOF at the University of Toronto, Public Health Ontario, and the Feed Ontario Hunger Report. More than one million people in Ontario relied on food banks in a single year.' },
      { type: 'p', text: 'This Ramadan, our community responded.' },
      { type: 'h2', text: 'What was raised' },
      { type: 'p', text: 'Through media outreach and the generosity of friends, families, and the wider community, the Feed 1000+ People This Ramadan campaign raised $14,725.80 in two weeks. All proceeds from this campaign went directly to those in need, with no administrative fees taken.' },
      { type: 'h2', text: 'Where it went' },
      { type: 'p', text: 'The campaign delivered over 300 family packages, each providing roughly two weeks of support. Packages reached families through Hamilton Downtown Mosque, the Muslim Food Bank of Hamilton, Mishka Social Services, Jamiat-Ul-Ansar in Brampton, and Sakeenah Canada in Mississauga, alongside direct deliveries to single mothers and newcomer Palestinian and Syrian families, and rice bags distributed to households in Tarim, Yemen through our team on the ground.' },
      { type: 'p', text: 'Volunteers also delivered 648 hot meals: 272 to the SacredHand Canada shelter in Mississauga, 228 to Good Shepherd in Hamilton, and 148 to families in Tarim.' },
      { type: 'p', text: 'Finally, $3,850 in direct monetary assistance reached those who needed it most, including widows with multiple children, orphans and orphaned families, scholars in need in Tarim, a newcomer Palestinian family, and halal meat purchases for low-income families.' },
      { type: 'h2', text: 'A collective effort' },
      { type: 'p', text: 'Partner organizations across the GTA and Hamilton made this possible: the mosques, food banks, shelters, and social services that carried packages the final distance, and the volunteers who prepared meals with care.' },
      { type: 'quote', text: 'At the Downtown Hamilton Mosque, two women arrived at the exact time food was being distributed, after making a prayer for relief. Behind every campaign figure are real people facing real hardship, often in ways that go unseen.' },
      { type: 'p', text: 'This is what we mean by knowledge in action: khidmah flowing naturally from what we teach. Read the full breakdown on our Ramadan 2026 impact page, or support the work that continues through our donation page.' },
    ],
  },
]

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug)
