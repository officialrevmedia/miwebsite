export interface Teacher {
  slug: string
  name: string
  shortName: string
  title: string
  arabicInitial: string
  portrait: string
  portraitSrcSet: string
  portraitAlt: string
  summary: string
  bio: string[]
  formation: string[]
  teaches: string[]
  currentProgramSlug: string
  currentProgramLabel: string
}

export const teachers: Teacher[] = [
  {
    slug: 'shaykh-zakaria-abdilaziz',
    name: 'Shaykh Zakaria AbdilAziz',
    shortName: 'Shaykh Zakaria',
    title: 'Lead Scholar and Teacher',
    arabicInitial: 'ز',
    portrait: '/images/teachers/zakaria-portrait-1100.webp',
    portraitSrcSet:
      '/images/teachers/zakaria-portrait-640.webp 640w, /images/teachers/zakaria-portrait-1100.webp 1100w, /images/teachers/zakaria-portrait-1600.webp 1600w',
    portraitAlt:
      'Shaykh Zakaria AbdilAziz seated against a warm plaster wall in a white thobe and shawl, holding his glasses',
    summary:
      'Head of Muraqabah\u2019s academic vision and a graduate of the distinguished Alimiyyah program at Dar al-Mustafa in Tarim, Yemen, where he spent nearly two decades immersed in the traditional curriculum.',
    bio: [
      'Shaykh Zakaria AbdilAziz is a graduate of the distinguished Alimiyyah program at Dar al-Mustafa in Tarim, Yemen, where he spent nearly two decades immersed in the traditional curriculum under the direct tutelage of eminent scholars, including Habib Umar bin Hafiz.',
      'During his years of study he specialized in the sciences of Quranic recitation, Hadith, Shafi\u2019i jurisprudence, theology, logic, and Arabic linguistics, completing extensive readings across the canon of classical Islamic literature. He has memorized the Quran in seven canonical recitations and holds formal authorizations (ijazat) in several fields of study.',
      'His teaching reflects a combination of analytical rigour and fidelity to traditional sources. He is noted for his clarity, his precision, and his ability to contextualize classical concepts for a modern audience without compromising the integrity of the original texts.',
      'As the head of Muraqabah Initiative\u2019s academic vision, he leads a growing platform devoted to the transmission of traditional Islamic knowledge and the advancement of khidmah: service expressed through education, mentorship, and community engagement. His work continues the living tradition of transmission that connects contemporary learners to the scholarly heritage of Tarim.',
    ],
    formation: [
      'Graduate of the Alimiyyah program at Dar al-Mustafa, Tarim, Yemen',
      'Nearly two decades of traditional study under eminent scholars, including Habib Umar bin Hafiz',
      'Quran memorized in seven canonical recitations',
      'Formal authorizations (ijazat), including Hadith and Shafi\u2019i jurisprudence',
      'Theology, logic, Arabic linguistics, and classical Islamic literature',
    ],
    teaches: [
      'Gardens of Paradise (launching September 2026)',
      'Spheres of Faith (completed flagship program)',
      'The Beginning of Guidance (past intensive)',
      'The Perfect Example (past course)',
    ],
    currentProgramSlug: 'gardens-of-paradise',
    currentProgramLabel: 'Gardens of Paradise \u00b7 launching September 2026',
  },
  {
    slug: 'shaykh-nuh-sanders',
    name: 'Shaykh Nuh Sanders',
    shortName: 'Shaykh Nuh',
    title: 'Teacher, Chains of Trust',
    arabicInitial: 'ن',
    portrait: '/images/teachers/nuh-portrait-1023.webp',
    portraitSrcSet:
      '/images/teachers/nuh-portrait-640.webp 640w, /images/teachers/nuh-portrait-1023.webp 1023w',
    portraitAlt: 'Shaykh Nuh Sanders in a brown thobe and black cap, photographed against a warm backdrop',
    summary:
      'Raised in Philadelphia and trained for more than six years as a full-time student at Dar al-Mustafa in Tarim, Yemen, he teaches Chains of Trust, Muraqabah\u2019s weekly course in the foundations of Hadith sciences.',
    bio: [
      'Shaykh Nuh Sanders was raised in Philadelphia, where his path as a student of Arabic, Tajweed, the Quranic sciences, Aqidah, Shafi\u2019i jurisprudence, Hadith, and classical Islamic scholarship began. He continued his studies in Egypt before travelling to Yemen.',
      'For more than six years he studied full time at Dar al-Mustafa in Tarim, Yemen, under leading scholars including Habib Umar bin Hafiz, immersed in the seminary\u2019s traditional curriculum and its emphasis on precise, responsible transmission.',
      'He has taught with initiatives including Lamppost Education Initiative and Safina Society, and is the founder of Dar al-Qurra. His teaching is known for clarity and scholarly precision, with particular attention to Quranic recitation, Dawah, and the responsibility that comes with carrying sacred knowledge.',
      'At Muraqabah he teaches Chains of Trust: Foundations of Hadith Sciences, a live weekly study of the classical poem Al-Bayquniyyah.',
    ],
    formation: [
      'More than six years of full-time study at Dar al-Mustafa, Tarim, Yemen',
      'Student of leading scholars, including Habib Umar bin Hafiz',
      'Arabic, Tajweed, Quranic sciences, Aqidah, Shafi\u2019i jurisprudence, and Hadith',
      'Former instructor with Lamppost Education Initiative and Safina Society',
      'Founder of Dar al-Qurra',
    ],
    teaches: ['Chains of Trust: Foundations of Hadith Sciences (weekly, in session)'],
    currentProgramSlug: 'chains-of-trust',
    currentProgramLabel: 'Chains of Trust \u00b7 weekly, in session',
  },
]

export const getTeacher = (slug: string) => teachers.find((t) => t.slug === slug)
