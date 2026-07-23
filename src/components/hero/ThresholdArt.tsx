// The Threshold: a layered interpretation of the Muraqabah emblem.
// This SVG is the default hero art everywhere, and the permanent art for
// mobile and reduced-motion visitors. On capable desktops a dimensional
// version (ThresholdScene) quietly takes its place.
export function ThresholdArt({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 640"
      className={className}
      role="img"
      aria-label="Layered warm landscape inside an arch, drawn from the Muraqabah emblem"
    >
      <defs>
        <clipPath id="arch-clip">
          <path d="M20 620 V260 C20 120 118 20 240 20 C362 20 460 120 460 260 V620 Z" />
        </clipPath>
      </defs>
      <path
        d="M20 620 V260 C20 120 118 20 240 20 C362 20 460 120 460 260 V620 Z"
        fill="none"
        stroke="#461B07"
        strokeWidth="2.5"
        opacity="0.35"
      />
      <g clipPath="url(#arch-clip)">
        <rect x="0" y="0" width="480" height="640" fill="#F8ECD4" />
        <circle data-layer="0" cx="240" cy="205" r="62" fill="#B98A2E" opacity="0.9" />
        <path data-layer="1" d="M-20 400 C90 330 170 380 260 340 C350 300 420 340 500 310 V660 H-20 Z" fill="#EFDDBC" />
        <path data-layer="2" d="M-20 460 C70 400 180 450 280 410 C370 375 430 410 500 385 V660 H-20 Z" fill="#BE6B33" />
        <path data-layer="3" d="M-20 520 C80 465 190 510 300 475 C390 447 440 475 500 455 V660 H-20 Z" fill="#A8431F" />
        <path data-layer="4" d="M-20 575 C90 530 200 565 310 538 C400 516 450 538 500 522 V660 H-20 Z" fill="#8C3115" />
        <path data-layer="5" d="M-20 618 C100 585 220 610 330 590 C420 574 460 588 500 578 V660 H-20 Z" fill="#461B07" />
        <path d="M232 118 L240 60 L248 118 L244 205 H236 Z" fill="#461B07" opacity="0.85" />
      </g>
    </svg>
  )
}
