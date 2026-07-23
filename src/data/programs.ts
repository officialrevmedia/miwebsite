import { links } from './links'

export interface Program {
  slug: string
  name: string
  arabic?: string
  status: string
  statusTone: 'open' | 'running' | 'complete'
  teacherSlug: string
  teacherName: string
  short: string
  description: string[]
  format: string
  schedule: string
  level: string
  text?: string
  cta: { label: string; href: string; external: boolean }
  themesTitle?: string
  themes?: { title: string; body: string }[]
  note?: string
}

export const programs: Program[] = [
  {
    slug: 'gardens-of-paradise',
    name: 'Gardens of Paradise',
    arabic: 'رياض الجنة',
    status: 'Launching September 2026',
    statusTone: 'open',
    teacherSlug: 'shaykh-zakaria-abdilaziz',
    teacherName: 'Shaykh Zakaria AbdilAziz',
    short:
      'A recurring weekly study circle with Shaykh Zakaria AbdilAziz. The opening series, Weight of Words, turns to how we speak.',
    description: [
      'The Prophet \ufdfa said: \u201cWhen you pass by the gardens of Paradise, graze in them.\u201d He was asked, \u201cAnd what are the gardens of Paradise?\u201d He replied, \u201cThe circles of remembrance.\u201d (Sunan al-Tirmidhi)',
      'Gardens of Paradise is a recurring weekly study circle with Shaykh Zakaria AbdilAziz, bringing classical guidance into the realities of everyday life. Sessions meet weekly online, with a monthly in-person gathering.',
      'The opening series, Weight of Words, examines one of the most consequential and most overlooked subjects in the spiritual life: the tongue\u2019s responsibility in sacred law, Prophetic speech ethics, and the purification of expression.',
    ],
    format: 'Weekly online, with a monthly in-person gathering',
    schedule: 'Launching September 2026. Exact dates announced to registrants.',
    level: 'Open to all',
    cta: { label: 'Register for Gardens of Paradise', href: links.gardensRegister, external: true },
    themesTitle: 'Weight of Words: themes of the opening series',
    themes: [
      {
        title: 'The responsibility of speech',
        body: 'How the tongue carries weight in this life and the next, and why words are a trust.',
      },
      {
        title: 'Prophetic speech ethics',
        body: 'The manners of speech drawn from the example of the Prophet \ufdfa.',
      },
      {
        title: 'Sacred law and the tongue',
        body: 'What the tradition teaches about truthfulness, restraint, and harmful speech.',
      },
      {
        title: 'Purification of expression',
        body: 'Refining not only what we say, but the heart from which speech flows.',
      },
      {
        title: 'Reflection and dhikr',
        body: 'Turning the tongue toward remembrance as a discipline of the heart.',
      },
      {
        title: 'Suhbah and application',
        body: 'Learning in companionship, and carrying the lessons into daily community life.',
      },
    ],
    note: 'Registration is a monthly contribution in the amount that is right for you, processed securely through Zeffy.',
  },
  {
    slug: 'chains-of-trust',
    name: 'Chains of Trust',
    arabic: 'سلاسل الثقة',
    status: 'Weekly \u00b7 In session',
    statusTone: 'running',
    teacherSlug: 'shaykh-nuh-sanders',
    teacherName: 'Shaykh Nuh Sanders',
    short:
      'Foundations of Hadith Sciences. A guided, line-by-line study of Al-Bayquniyyah with Shaykh Nuh Sanders.',
    description: [
      'The preservation of Islam rests upon the precision of its transmission. Chains of Trust is a structured study of the classical poem Al-Bayquniyyah, introducing students to the methodology scholars used to authenticate, preserve, and scrutinize the words of the Prophet \ufdfa.',
      'This is not a surface-level overview. It is a guided initiation into the tools scholars used to distinguish truth from error, strength from weakness, and reliability from fabrication: a science that has no parallel in any other religious or historical tradition.',
      'Students gain a practical grasp of hadith terminology, the criteria of sound narration, and the discipline of asking where knowledge comes from and who carried it.',
    ],
    format: 'Live online via Zoom',
    schedule: 'Sundays, 2:00 to 3:00 PM EST \u00b7 First class was April 19, 2026',
    level: 'Foundational',
    text: 'Al-Bayquniyyah, studied line by line',
    cta: { label: 'Course details and enrolment', href: links.chainsEnrol, external: true },
  },
  {
    slug: 'spheres-of-faith',
    name: 'Spheres of Faith',
    arabic: 'دوائر الإيمان',
    status: 'Completed flagship',
    statusTone: 'complete',
    teacherSlug: 'shaykh-zakaria-abdilaziz',
    teacherName: 'Shaykh Zakaria AbdilAziz',
    short:
      'Our flagship weekly class on Islam, Iman, Ihsan, and Irfan, taught live by Shaykh Zakaria from Tarim, Yemen.',
    description: [
      'Spheres of Faith was Muraqabah\u2019s flagship weekly class: guided readings from the text of Habib Abd al-Rahman Balfaqih on the spheres of the Islamic tradition, taught live on Zoom by Shaykh Zakaria AbdilAziz.',
      'Habib Umar bin Hafiz described the text as \u201cone of the most beneficial, comprehensive and lofty books which clarify the path to Allah and explain the realms of connection to Him and drawing close to Him.\u201d',
      'More than eighty students attended weekly, consistently, for months. The program set the standard for everything Muraqabah teaches: classical texts, qualified teachers, and a living community of learners.',
    ],
    format: 'Live online via Zoom',
    schedule: 'Completed. Recordings available on our YouTube channel.',
    level: 'Open to all',
    text: 'The Spheres of Faith by Habib Abd al-Rahman Balfaqih',
    cta: { label: 'Watch recordings on YouTube', href: links.youtube, external: true },
  },
]

export const getProgram = (slug: string) => programs.find((p) => p.slug === slug)

// Past and announced initiatives shown on the Programs page archive strip.
// Nothing here carries an unconfirmed public date.
export const archive = [
  { name: 'The Beginning of Guidance', detail: 'Debut one-day intensive on Imam al-Ghazali\u2019s classic. Over 100 in attendance. Sold out.' },
  { name: 'The Perfect Example', detail: 'A course on the life and character of the Prophet \ufdfa, hosted at Sheridan College. Sold out.' },
  { name: 'Sacred Nights', detail: 'A Ramadan program on the rank of the last ten nights and seeking Laylat al-Qadr.' },
  { name: 'Turkey Rihla', detail: 'A guided Istanbul retreat through sacred history. Details to be announced.' },
]
