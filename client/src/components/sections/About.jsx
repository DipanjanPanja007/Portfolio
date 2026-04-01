import { useEffect, useState } from 'react'

const lowResImage =
  'https://res.cloudinary.com/du4bs9xd2/image/upload/v1774975632/profilepic_highcompressed_bhkgsq.jpg'
const highResImage =
  'https://res.cloudinary.com/du4bs9xd2/image/upload/v1774975632/profilepic_wepc26.jpg'

const aboutParagraphs = [
  'I am a Full Stack Developer with a strong focus on backend systems and AI-driven applications. I build scalable web solutions with clean architecture, efficient APIs, and reliable performance.',
  'My work combines web development with machine learning concepts such as NLP and deep learning, allowing me to develop intelligent, data-driven applications beyond standard systems.',
  'I have experience building full-stack projects including real-time applications, structured platforms, and problem-oriented solutions. I focus on writing maintainable code, handling edge cases, and designing systems that scale.',
]

function About() {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const preloadImage = new Image()
    preloadImage.src = highResImage
    preloadImage.onload = () => setImageLoaded(true)
  }, [])

  return (
    <section
      id="about"
      className="scroll-mt-20 py-7 sm:py-8"
    >
      <div className="rounded-2xl border border-slate-700/50 bg-slate-900/30 p-6 shadow-[0_0_40px_rgba(15,23,42,0.5)] sm:p-8">
        <blockquote className="border-l-4 border-blue-400/60 pl-4 text-left">
          <p className="text-lg font-medium italic tracking-tight text-slate-100 sm:text-xl md:text-2xl">
            &ldquo;Designing systems that scale, perform, and think&rdquo;
          </p>
        </blockquote>

        <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-10">
          <div className="mx-auto w-full max-w-[280px] lg:mx-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-slate-700/70 bg-slate-950/50 ring-1 ring-slate-700/30">
              <img
                src={lowResImage}
                alt=""
                className={`h-full w-full object-cover blur-sm transition-opacity duration-500 ${
                  imageLoaded ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <img
                src={highResImage}
                alt="Portrait"
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          </div>

          <div className="space-y-5 text-left">
            {aboutParagraphs.map((text, i) => (
              <p
                key={i}
                className="text-[15px] leading-7 text-slate-300 sm:text-base sm:leading-8"
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
