import './App.css'
import { NavbarDesktop } from './components/Navbar/components/NavbarDesktop'
import { NavbarMobile } from './components/Navbar/components/NavbarMobile'
import { AboutMeSection } from './components/Sections/AboutMeSection'
import { KnowledgesSection } from './components/Sections/KnowledgesSection'
import { ProjectSection } from './components/Sections/ProjectsSection'
import { ServicesSection } from './components/Sections/ServicesSection'
import { StartSection } from './components/Sections/StartSection'

function App() {
  return (
    <>
      <NavbarDesktop />
      <NavbarMobile />
      <StartSection />
      <AboutMeSection />
      <ProjectSection />
      <ServicesSection />
      <KnowledgesSection />
    </>
  )
}

export default App
