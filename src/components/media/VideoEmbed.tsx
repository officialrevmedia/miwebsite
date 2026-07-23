import { useState } from 'react'
import { Play } from 'lucide-react'

// Privacy-enhanced, click-to-load YouTube embed. Nothing loads from
// YouTube until the visitor chooses to play. Never autoplays sound
// before interaction.
export function VideoEmbed({ id, title }: { id: string; title: string }) {
  const [active, setActive] = useState(false)
  const [thumbFailed, setThumbFailed] = useState(false)
  if (active) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-sm bg-deep">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }
  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      className="group relative block aspect-video w-full overflow-hidden rounded-sm bg-deep text-left"
      aria-label={`Play video: ${title}`}
    >
      {!thumbFailed && (
        <img
          src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
          alt=""
          loading="lazy"
          onError={() => setThumbFailed(true)}
          className="h-full w-full object-cover opacity-80 transition-transform duration-700 ease-calm group-hover:scale-[1.03]"
        />
      )}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream/95 text-deep transition-transform duration-300 ease-calm group-hover:scale-105">
          <Play size={22} className="ml-0.5" aria-hidden="true" />
        </span>
      </span>
      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-deep/85 to-transparent px-5 pb-4 pt-10 text-sm font-medium text-cream">
        {title}
      </span>
    </button>
  )
}
