// Every image, PDF, and static file path in this project is written from the
// site root (for example '/images/brand/emblem-colour.png'). The site can be
// served either from a domain root (www.muraqabah.ca) or from a repository
// subfolder (officialrevmedia.github.io/miwebsite/), so these
// helpers prefix each path with whatever base the build was made for.
//
// Vite sets import.meta.env.BASE_URL from the `base` option in vite.config.ts.

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

export const asset = (path: string): string => (path.startsWith('/') ? BASE + path : path)

export const assetSrcSet = (srcSet: string): string =>
  srcSet
    .split(',')
    .map((entry) => {
      const [url, descriptor] = entry.trim().split(/\s+/)
      return descriptor ? `${asset(url)} ${descriptor}` : asset(url)
    })
    .join(', ')
