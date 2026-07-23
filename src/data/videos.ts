import { links } from './links'

export interface Video {
  id?: string // YouTube video ID. Leave undefined until confirmed; the card then links to the channel.
  title: string
  detail: string
}

// The featured video below was the featured video on the previous Muraqabah
// website. To change it, replace the id and title.
export const featuredVideo: Video = {
  id: 'wizaPMOFPt4',
  title: 'From Muraqabah\u2019s YouTube channel',
  detail: 'Teacher talks, program excerpts, and khidmah documentation.',
}

// Supporting videos: add confirmed YouTube IDs from the channel.
// Cards without an id link to the channel instead of embedding.
export const supportingVideos: Video[] = [
  { title: 'Teacher talks', detail: 'Lessons and reminders from our teachers' },
  { title: 'Program excerpts', detail: 'Clips from courses and intensives' },
  { title: 'Khidmah on film', detail: 'Ramadan and Qurbani distribution, documented' },
]

export const channelUrl = links.youtube
