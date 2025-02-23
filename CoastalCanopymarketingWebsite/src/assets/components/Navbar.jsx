import { Link } from "react-router-dom"

function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="bg-green-800 text-white fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          Coastal Canopy
        </Link>
        <nav className="hidden md:flex space-x-4">
          <button onClick={() => scrollToSection("features")} className="hover:text-green-200">
            Features
          </button>
          <button onClick={() => scrollToSection("about")} className="hover:text-green-200">
            About
          </button>
          <button onClick={() => scrollToSection("team")} className="hover:text-green-200">
            Team
          </button>
          <button onClick={() => scrollToSection("faq")} className="hover:text-green-200">
            FAQ
          </button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-green-200">
            Contact
          </button>
        </nav>
        <button className="bg-transparent hover:bg-green-700 text-white font-semibold py-2 px-4 border border-white hover:border-transparent rounded">
          Get Started
        </button>
      </div>
    </header>
  )
}

export default Navbar

