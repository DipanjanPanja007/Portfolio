import { useEffect, useRef, useState } from 'react'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'

const sectionIds = [
  'profile',
  'about',
  'projects',
  'skills',
  'education',
  'contact',
]

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
  
    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect()
      const containerCenter = containerRect.top + containerRect.height / 2
  
      let closestSection = null
      let minDistance = Infinity
  
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const sectionCenter = rect.top + rect.height / 2
  
        const distance = Math.abs(containerCenter - sectionCenter)
  
        if (distance < minDistance) {
          minDistance = distance
          closestSection = section
        }
      })
  
      if (closestSection) {
        setActiveSection((prev) =>
          prev === closestSection.id ? prev : closestSection.id
        )
      }
    }
  
    container.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
  
    return () => container.removeEventListener("scroll", handleScroll)
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
