import { useEffect } from "react"
import HeroSection from "../components/Hero"
import FeaturesSection from "../components/Features"
import AboutSection from "../pages/About"
import TeamSection from "../components/Team"
import FaqSection from "../components/FAQ"
import ContactSection from "../pages/Contact"


function Home() {
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [])

  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <TeamSection />
      <FaqSection />
      <ContactSection />

    </div>
  )
}

export default Home