// Curated social posts. Add 6 to 12 approved posts here; each renders as a
// card on the Media page linking to the original post. Keep thumbnails as
// supplied assets in /public/images. No scraping, no fabricated counts.
export interface SocialPost {
  platform: 'instagram' | 'tiktok' | 'youtube'
  url: string
  caption: string
  image?: string
}

export const socialPosts: SocialPost[] = []
