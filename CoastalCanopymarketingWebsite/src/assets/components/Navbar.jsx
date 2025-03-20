import { Link } from "react-router-dom"

function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="bg-green-950 text-white w-full z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <img src="/Images/logo.png" className="mr-2 h-16 w-16" />
          Coastal Canopy
        </Link>

        <nav className="hidden md:flex space-x-4">
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-green-200"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("hero")}
            className="hover:text-green-200"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("team")}
            className="hover:text-green-200"
          >
            Team
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="hover:text-green-200"
          >
            FAQ
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-green-200"
          >
            Contact
          </button>
        </nav>
        <button
          onClick={() =>
            (window.location.href = "#")
          }
          className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-700 hover:from-green-500 hover:via-emerald-600 hover:to-green-800 text-white font-bold py-2 px-8 border border-white hover:border-transparent rounded-full shadow-md text-lg transition-all duration-300 ease-in-out"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Visit Us
        </button>
      </div>
    </header>
  );
}

export default Navbar

