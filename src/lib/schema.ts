import { links, siteUrl } from '../data/links'
import type { Teacher } from '../data/teachers'
import type { Program } from '../data/programs'
import type { Article } from '../data/articles'

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Muraqabah Initiative',
  url: siteUrl,
  logo: `${siteUrl}/images/brand/logo-colour-light.png`,
  email: links.emailPlain,
  description:
    'Traditional Islamic education, spiritual formation, and sincere community service in the Greater Toronto Area and online.',
  areaServed: 'CA',
  sameAs: [links.instagram, links.tiktok, links.youtube, links.linktree],
}

export const personSchema = (t: Teacher) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: t.name,
  jobTitle: t.title,
  url: `${siteUrl}/teachers/${t.slug}`,
  image: `${siteUrl}${t.portrait}`,
  worksFor: { '@type': 'EducationalOrganization', name: 'Muraqabah Initiative', url: siteUrl },
})

export const courseSchema = (p: Program) => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: p.name,
  description: p.short,
  url: `${siteUrl}/programs/${p.slug}`,
  provider: { '@type': 'EducationalOrganization', name: 'Muraqabah Initiative', url: siteUrl },
  instructor: { '@type': 'Person', name: p.teacherName },
})

export const articleSchema = (a: Article) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: a.title,
  description: a.excerpt,
  datePublished: a.date,
  author: { '@type': 'Organization', name: a.author },
  publisher: { '@type': 'EducationalOrganization', name: 'Muraqabah Initiative', url: siteUrl },
  mainEntityOfPage: `${siteUrl}/research/${a.slug}`,
})

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: `${siteUrl}${it.path}`,
  })),
})

export const videoSchema = (id: string, title: string) => ({
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: title,
  embedUrl: `https://www.youtube-nocookie.com/embed/${id}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
  uploadDate: '2026-01-01',
  description: 'From the Muraqabah Initiative YouTube channel.',
})
