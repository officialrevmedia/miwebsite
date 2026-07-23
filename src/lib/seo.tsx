import { Helmet } from 'react-helmet-async'
import { siteUrl } from '../data/links'

interface SeoProps {
  title: string
  description: string
  path: string
  image?: string
  type?: string
  jsonLd?: object | object[]
}

export function Seo({ title, description, path, image = '/images/og-default.jpg', type = 'website', jsonLd }: SeoProps) {
  const url = `${siteUrl}${path}`
  const fullTitle = path === '/' ? title : `${title} | Muraqabah Initiative`
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:site_name" content="Muraqabah Initiative" />
      <meta property="og:locale" content="en_CA" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
      {blocks.map((b, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(b)}</script>
      ))}
    </Helmet>
  )
}
