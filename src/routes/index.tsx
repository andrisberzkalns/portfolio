import { createFileRoute } from '@tanstack/react-router'
import HeroSection from '../components/sections/HeroSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import ToolsSection from '../components/sections/SkillsSection'
import ExperienceSection from '../components/sections/ExperienceSection'
import ContactSection from '../components/sections/ContactSection'
import Footer from '../components/sections/Footer'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="text-slate-900">
      <HeroSection />
      <ProjectsSection />
      <ToolsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
