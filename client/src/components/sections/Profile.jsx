import { useEffect, useMemo, useRef, useState } from 'react'

const typedLines = [
  'Full Stack Developer',
  'AI-ML Enthusiast',
  'Interested in DSA',
]

const primaryLinks = [
  {
    id: 'facebook',
    href: 'https://facebook.com/profile.php?id=100086620255503',
    label: 'Facebook',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M13.5 22v-8h2.7l.6-3h-3.3V9.5c0-.9.3-1.5 1.7-1.5H17V5.2c-.3 0-1.3-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3V11H8v3h2.3v8h3.2Z"
        />
      </svg>
    ),
  },
  {
    id: 'instagram',
    href: 'https://instagram.com/dipanjan_oo7',
    label: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M7.8 3h8.4A4.8 4.8 0 0 1 21 7.8v8.4a4.8 4.8 0 0 1-4.8 4.8H7.8A4.8 4.8 0 0 1 3 16.2V7.8A4.8 4.8 0 0 1 7.8 3Zm8.3 1.8H7.9A3.1 3.1 0 0 0 4.8 8v8a3.1 3.1 0 0 0 3.1 3.1h8.2a3.1 3.1 0 0 0 3.1-3.1V8a3.1 3.1 0 0 0-3.1-3.1ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 1.8a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4Zm4.3-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
        />
      </svg>
    ),
  },
  {
    id: 'linkedin',
    href: 'https://linkedin.com/in/dipanjan-panja-673a072b7',
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M6.7 8.8H3.9V20h2.8V8.8Zm-1.4-4A1.6 1.6 0 1 0 5.3 8a1.6 1.6 0 0 0 0-3.2ZM20 13.5c0-3.3-1.8-4.8-4.2-4.8a3.7 3.7 0 0 0-3.3 1.8v-1.7H9.7V20h2.8v-5.5c0-1.5.8-2.4 2-2.4s1.9.8 1.9 2.4V20H20v-6.5Z"
        />
      </svg>
    ),
  },
  {
    id: 'x',
    href: 'https://x.com/DipanjanOO7',
    label: 'X',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M18.9 3H22l-6.8 7.8L23 21h-6.2l-4.9-6.4L6.3 21H3.2l7.3-8.3L1 3h6.3l4.4 5.9L18.9 3Zm-1.1 16h1.7L6.4 4.9H4.6L17.8 19Z"
        />
      </svg>
    ),
  },
]

const secondaryLinks = [
  {
    id: 'github',
    href: 'https://github.com/DipanjanPanja007',
    label: 'GitHub',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.6v-2.2c-3.4.8-4.2-1.4-4.2-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.8 1.2 1.8 1.2 1 .1 2.1.9 2.6 2.3.8.1 1.6.2 2.5.1.1-.6.4-1.2.9-1.7-2.9-.3-5.9-1.4-5.9-6.4 0-1.4.5-2.6 1.3-3.6-.1-.3-.6-1.6.1-3.4 0 0 1.1-.4 3.7 1.4a12.8 12.8 0 0 1 6.6 0c2.6-1.8 3.7-1.4 3.7-1.4.7 1.8.3 3.1.1 3.4.9 1 1.3 2.2 1.3 3.6 0 5-3 6.1-5.9 6.4.5.4.9 1.2.9 2.5v3.7c0 .4.2.7.8.6A12 12 0 0 0 12 .5Z"
        />
      </svg>
    ),
  },
  {
    id: 'resume',
    href: 'https://res.cloudinary.com/du4bs9xd2/image/upload/v1774985986/DipanjanResumeLatest_page-compressed_nvtbsk.jpg',
    label: 'Resume',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M6 2h8l4 4v16H6V2Zm7 1.5V7h3.5L13 3.5ZM8.5 10h7v1.6h-7V10Zm0 3.2h7V15h-7v-1.8Zm0 3.2H13V18H8.5v-1.6Z"
        />
      </svg>
    ),
  },
]

function clamp01(v) {
  return Math.max(0, Math.min(1, v))
}

function Profile() {
  const sectionRef = useRef(null)
  const [focus, setFocus] = useState(0)

  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const activeLine = useMemo(() => typedLines[lineIndex], [lineIndex])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const scrollRoot = section.closest('main')
    if (!scrollRoot) return

    let raf = 0

    const tick = () => {
      raf = 0
      const cr = scrollRoot.getBoundingClientRect()
      const sr = section.getBoundingClientRect()
      const centerY = cr.top + cr.height / 2
      const secCenterY = sr.top + sr.height / 2
      const band = cr.height * 0.42
      const aligned = clamp01(1 - Math.abs(secCenterY - centerY) / band)

      const overlapTop = Math.max(sr.top, cr.top)
      const overlapBottom = Math.min(sr.bottom, cr.bottom)
      const overlap = Math.max(0, overlapBottom - overlapTop)
      const visibility = sr.height > 0 ? overlap / sr.height : 0
      const combined = clamp01(aligned * 0.65 + visibility * 0.35)

      setFocus((prev) =>
        Math.abs(prev - combined) < 0.01 ? prev : combined,
      )
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick)
    }

    scrollRoot.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    tick()

    return () => {
      scrollRoot.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  useEffect(() => {
    const finishedTyping = charIndex === activeLine.length
    const finishedDeleting = charIndex === 0

    const delay = isDeleting ? 50 : finishedTyping ? 1200 : 100

    const timer = setTimeout(() => {
      if (!isDeleting && !finishedTyping) {
        setCharIndex((prev) => prev + 1)
        return
      }

      if (!isDeleting && finishedTyping) {
        setIsDeleting(true)
        return
      }

      if (isDeleting && !finishedDeleting) {
        setCharIndex((prev) => prev - 1)
        return
      }

      setIsDeleting(false)
      setLineIndex((prev) => (prev + 1) % typedLines.length)
    }, delay)

    return () => clearTimeout(timer)
  }, [activeLine, charIndex, isDeleting])

  const displayText = activeLine.slice(0, charIndex)

  const lift = (1 - focus) * 14
  const fade = 0.78 + focus * 0.22
  const linkShift = (1 - focus) * 6

  return (
    <section
      ref={sectionRef}
      id="profile"
      className="relative scroll-mt-20 py-8 sm:py-10"
    >
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 h-px overflow-hidden bg-slate-800/80"
        aria-hidden
      >
        <div
          className="h-full origin-left bg-gradient-to-r from-blue-500/0 via-blue-400/70 to-blue-500/0 will-change-transform"
          style={{
            opacity: 0.35 + focus * 0.65,
            transform: `scaleX(${0.15 + focus * 0.85})`,
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-2xl">
        <div
          className="text-center will-change-transform md:text-left"
          style={{
            opacity: fade,
            transform: `translate3d(0, ${lift}px, 0)`,
          }}
        >
          <h1 className="text-2xl font-bold leading-tight text-white sm:text-5xl">
            Hello, I am{' '}
            <span
              className="text-blue-300 transition-[text-shadow,opacity] duration-200"
              style={{
                textShadow:
                  focus > 0.2
                    ? `0 0 ${20 + focus * 12}px rgba(147, 197, 253, ${0.25 + focus * 0.2})`
                    : undefined,
                opacity: 0.88 + focus * 0.12,
              }}
            >
              Dipanjan
            </span>
          </h1>

          <p className="mt-3 flex h-8 items-center justify-center gap-0 text-lg font-medium text-slate-200 md:justify-start">
            <span className="inline transition-[opacity] duration-150" style={{ opacity: 0.75 + focus * 0.25 }}>
              {displayText}
            </span>
            <span
              className="ml-1 inline-block h-5 w-[2px] bg-blue-300 align-middle transition-opacity duration-300"
              style={{ opacity: 0.4 + focus * 0.6 }}
            />
          </p>

          <div
            className="mt-5 flex flex-col items-center gap-3 will-change-transform md:items-start"
            style={{ transform: `translate3d(0, ${linkShift}px, 0)` }}
          >
            <div className="flex items-center gap-3">
              {primaryLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  title={link.label}
                  className="rounded-lg border border-slate-700/90 bg-slate-900/50 p-2 text-slate-200 backdrop-blur-sm transition-[border-color,background-color,transform] duration-200 hover:border-blue-400/80 hover:bg-slate-800/60 hover:text-blue-300"
                  style={{ transform: `translate3d(0, ${(1 - focus) * 4}px, 0)` }}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {secondaryLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  title={link.label}
                  className="rounded-lg border border-slate-700/90 bg-slate-900/50 p-2 text-slate-200 backdrop-blur-sm transition-[border-color,background-color,transform] duration-200 hover:border-blue-400/80 hover:bg-slate-800/60 hover:text-blue-300"
                  style={{ transform: `translate3d(0, ${(1 - focus) * 4}px, 0)` }}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <p className="mt-6 text-sm leading-7 text-slate-300 sm:text-base">
            Full Stack Developer focused on scalable backend systems and
            AI-powered applications.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Profile
