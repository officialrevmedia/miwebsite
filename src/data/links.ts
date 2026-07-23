// Every external destination used on the website lives here.
// Change a link once and it updates everywhere.

export const links = {
  gardensRegister: 'https://www.zeffy.com/en-CA/donation-form/gardens-of-paradise',
  supportOurWork: 'https://www.zeffy.com/en-CA/donation-form/support-our-work-53',
  sponsorStudent: 'https://www.zeffy.com/en-CA/donation-form/sponsor-a-student-37',
  chainsEnrol: 'https://www.zeffy.com/en-CA/ticketing/chains-of-trust-foundations-of-hadith-sciences',
  whatsapp: 'https://chat.whatsapp.com/C24SBtyeFUMFebXohuuClH',
  instagram: 'https://www.instagram.com/muraqabah.initiative',
  tiktok: 'https://www.tiktok.com/@muraqabah.initiative',
  youtube: 'https://www.youtube.com/@MuraqabahInitiative',
  linktree: 'https://linktr.ee/MuraqabahInitiative',
  email: 'mailto:info@muraqabah.ca',
  emailPlain: 'info@muraqabah.ca',
  reportPdf: '/reports/2026-ramadan-impact-report.pdf',
} as const

export const siteUrl = 'https://www.muraqabah.ca'

// PENDING LEGAL CONFIRMATION.
// When the receipting arrangement is confirmed, set this to the approved
// sentence and it will appear on the Donate page and in the footer.
// Until then it stays null and no receipt claims are made anywhere.
export const charityWording: string | null = null
