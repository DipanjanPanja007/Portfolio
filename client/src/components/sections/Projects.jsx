import { useEffect, useState } from 'react'

const projects = [
  {
    name: 'ChatSphere',
    image:
      'https://res.cloudinary.com/du4bs9xd2/image/upload/q_auto/f_auto/v1775041637/Screenshot_2026-04-01_162429_wra0tc.jpg',
    description:
      'Real-time chat application enabling seamless user communication with a scalable backend for concurrent connections.',
    techStack: ['Node.js', 'Express', 'MongoDB', 'Socket.io', 'React'],
    keyFeatures: [
      'Real-time messaging using WebSockets',
      'User authentication and session handling',
      'Typing indicators and online status',
      'Multimedia file support for chatting',
    ],
    challenges: [
      'Handling multiple concurrent users',
      'Preventing message duplication',
      'Maintaining real-time performance',
    ],
    live: 'https://chatsphere-liart.vercel.app',
    github: 'https://github.com/DipanjanPanja007/ChatSphere-2.0',
  },
  {
    name: 'College Website',
    image:
      'https://res.cloudinary.com/du4bs9xd2/image/upload/q_auto/f_auto/v1775041637/Screenshot_2026-04-01_121122_hkag7g.jpg',
    description:
      'Centralized platform for managing academic content, announcements, and student interactions.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
    keyFeatures: [
      'Student and teacher database',
      'Event and notice management',
      'Structured content delivery',
      'Responsive UI',
    ],
    challenges: [
      'Organizing large content efficiently',
      'Designing a scalable structure for future features',
    ],
    live: 'https://aot-website-9e5h.onrender.com',
    github: 'https://github.com/DipanjanPanja007/AOT-Website',
  },
  {
    name: 'FlashCrowd',
    image:
      'https://res.cloudinary.com/du4bs9xd2/image/upload/q_auto/f_auto/v1775041637/Screenshot_2026-04-01_121953_rqxgbg.jpg',
    description:
      'Online event platform where users can create and discover events, with location-based notifications for nearby users.',
    techStack: ['Node.js', 'React', 'MongoDB', 'Express', 'Geolocation', 'Leaflet'],
    keyFeatures: [
      'Event creation and discovery workflows',
      'Location-aware notifications',
      'Structured data management',
      'User-centric event experience',
    ],
    challenges: [
      'Handling location-driven logic at scale',
      'Designing reliable backend workflows',
    ],
    live: 'https://flash-crowd.vercel.app',
    github: 'https://github.com/DipanjanPanja007/Flash_Crowd',
  },
  {
    name: 'Aspect-Based Sentiment Analysis on Voice',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
    description:
      'AI-based system that analyzes voice input and extracts aspect-level sentiment using NLP techniques.',
    techStack: [
      'Python',
      'NLP',
      'Deep Learning',
      'PyTorch',
      'TensorFlow',
      'BERT',
      'Whisper',
    ],
    keyFeatures: [
      'Aspect-level sentiment extraction',
      'NLP pipeline for voice processing',
      'Model-based prediction system',
    ],
    challenges: [
      'Handling labeled datasets',
      'Improving model accuracy',
      'Managing end-to-end prediction pipeline',
    ],
    live: '#',
    github: '#',
  },
  {
    name: 'Portfolio',
    image:
      'https://res.cloudinary.com/du4bs9xd2/image/upload/q_auto/f_auto/v1775041637/Screenshot_2026-04-01_122601_mb1fsw.jpg',
    description:
      'Personal developer portfolio showcasing projects, skills, and backend-focused development work.',
    techStack: ['React', 'Tailwind CSS', 'Node.js'],
    keyFeatures: [
      'Modular component-based design',
      'Project showcase with structured data',
      'Responsive and clean UI',
    ],
    challenges: [
      'Designing clean and scalable UI structure',
      'Maintaining performance and responsiveness',
    ],
    live: '#',
    github: 'https://github.com/DipanjanPanja007/Portfolio',
  },
]

function Projects() {
  const [activeImage, setActiveImage] = useState(null)

  useEffect(() => {
    if (!activeImage) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveImage(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeImage])

  return (
    <section id="projects" className="scroll-mt-20 py-7 sm:py-8">
      <div className="rounded-2xl border border-slate-700/60 bg-slate-900/35 p-5 sm:p-6">
        <h2 className="text-2xl font-bold text-white">Projects</h2>
        

        <div className="mt-6 space-y-6">
          {projects.map((project) => (
            <article
              key={project.name}
              className="overflow-hidden rounded-xl border border-slate-700/70 bg-slate-950/45"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr]">
                <div className="h-48 w-full lg:h-full">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveImage({
                        src: project.image,
                        alt: `${project.name} preview`,
                        title: project.name,
                      })
                    }
                    className="h-full w-full cursor-zoom-in"
                    aria-label={`Open ${project.name} image preview`}
                  >
                    <img
                      src={project.image}
                      alt={`${project.name} preview`}
                      className="h-full w-full object-cover transition duration-200 hover:brightness-110"
                      loading="lazy"
                    />
                  </button>
                </div>

                <div className="p-4 sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-slate-100">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-md border border-blue-400/30 bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-300 hover:bg-blue-500/20"
                      >
                        Live
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-md border border-slate-600 bg-slate-800/40 px-2.5 py-1 text-xs font-medium text-slate-200 hover:bg-slate-700/50"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={`${project.name}-${tech}`}
                        className="rounded-md border border-slate-700 bg-slate-900/70 px-2 py-1 text-xs text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Key Features
                      </h4>
                      <ul className="mt-2 space-y-1 text-sm text-slate-300">
                        {project.keyFeatures.map((feature) => (
                          <li key={feature}>- {feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Challenges
                      </h4>
                      <ul className="mt-2 space-y-1 text-sm text-slate-300">
                        {project.challenges.map((challenge) => (
                          <li key={challenge}>- {challenge}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview dialog"
        >
          <button
            type="button"
            onClick={() => setActiveImage(null)}
            className="absolute right-4 top-4 rounded-full border border-slate-600 bg-slate-900/80 p-2 text-white transition hover:bg-slate-800"
            aria-label="Close image preview"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div
            className="max-h-[90vh] max-w-[95vw] overflow-hidden rounded-xl border border-slate-700 bg-slate-950"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-h-[90vh] max-w-[95vw] object-contain"
            />
            <p className="border-t border-slate-800 px-4 py-2 text-center text-sm text-slate-300">
              {activeImage.title}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
