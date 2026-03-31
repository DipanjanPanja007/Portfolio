import { useEffect, useMemo, useState } from 'react'

const lowResImage =
  'https://res.cloudinary.com/du4bs9xd2/image/upload/v1774975632/profilepic_highcompressed_bhkgsq.jpg'
const highResImage =
  'https://res.cloudinary.com/du4bs9xd2/image/upload/v1774975632/profilepic_wepc26.jpg'

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

function Profile() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const activeLine = useMemo(() => typedLines[lineIndex], [lineIndex])

  useEffect(() => {
    const preloadImage = new Image()
    preloadImage.src = highResImage
    preloadImage.onload = () => setImageLoaded(true)
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

  return (
    <section
      id="profile"
      className="flex min-h-[calc(100vh-8rem)] scroll-mt-20 items-center py-8"
    >
      <div className="grid w-full grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div className="mx-auto w-full max-w-xs md:max-w-sm">
          <div className="relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/40 shadow-[0_0_30px_rgba(15,23,42,0.8)]">
            <img
              src={lowResImage}
              alt="Profile low quality preview"
              className={`h-full w-full object-cover blur-sm transition-opacity duration-500 ${
                imageLoaded ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <img
              src={highResImage}
              alt="Profile"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
            Hello, I am <span className="text-blue-300">Dipanjan</span>
          </h1>

          <p className="mt-3 h-8 text-lg font-medium text-slate-200">
            {displayText}
            <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-blue-300 align-middle" />
          </p>

          <div className="mt-5 flex flex-col items-center gap-3 md:items-start">
            <div className="flex items-center gap-3">
              {primaryLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  title={link.label}
                  className="rounded-lg border border-slate-700 bg-slate-900/40 p-2 text-slate-200 transition hover:border-blue-400 hover:text-blue-300"
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
                  className="rounded-lg border border-slate-700 bg-slate-900/40 p-2 text-slate-200 transition hover:border-blue-400 hover:text-blue-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            Dynamic Full Stack Web Developer with a passion for mastering data
            structures and algorithms, constantly eager to learn new
            technologies, and taking on challenges to build scalable,
            future-ready solutions.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Profile
