import { forwardRef } from 'react'
import About from '../sections/About'
import Contact from '../sections/Contact'
import Education from '../sections/Education'
import Profile from '../sections/Profile'
import Projects from '../sections/Projects'
import Skills from '../sections/Skills'

const Container = forwardRef(function Container(_, ref) {
  return (
    <main
      ref={ref}
      className="no-scrollbar mx-auto w-full max-w-5xl flex-1 overflow-y-auto px-4 py-8 sm:px-6"
    >
      <Profile />
      <Education />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </main>
  )
})

export default Container
