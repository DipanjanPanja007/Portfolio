import { useEffect, useRef, useState } from 'react'
import Container from './components/layout/Container'
import Navbar from './components/layout/navbar'

const sectionIds = ['profile', 'education', 'projects', 'skills', 'about', 'contact']

function App() {
  const containerRef = useRef(null)
  const [activeSection, setActiveSection] = useState('profile')

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id)
        }
      },
      {
        root: container,
        threshold: [0.3, 0.5, 0.7],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const handleNavigate = (event, id) => {
    event.preventDefault()

    const section = document.getElementById(id)
    if (!section) return

    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActiveSection(id)
  }

  return (
    <div className="relative flex h-screen flex-col overflow-hidden bg-slate-950 text-white">
      <div className="animated-bg pointer-events-none absolute inset-0 -z-10" />
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      <Container ref={containerRef} />
    </div>
  )
}

export default App
