import { Link } from "react-router-dom"
import { Facebook, Linkedin, Instagram } from "lucide-react"

function Footer() {
  const handleClick = () => {
    window.open("https://coastalcanopy.org.lk", "_blank");
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  
  return (
    <footer className="bg-green-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">CoastalCanopy</h3>
            <p>Guarding Green Roots.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection("about")} className="hover:text-green-200">
                  Features
                </button>
              </li>

              <li>
              <button onClick={() => scrollToSection("hero")} className="hover:text-green-200">
                About
              </button>
              </li>

              <li>
                <button onClick={() => scrollToSection("contact")} className="hover:text-green-200">
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/Coastal-Canopy/61572263144876/?rdid=oeu65nn07wFbLWuj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Do7jm4fVm%2F" className="hover:text-green-300">
                <Facebook />
              </a>
              <a href="https://www.linkedin.com/company/106072182/admin/dashboard/" className="hover:text-green-300">
                <Linkedin />
              </a>
              <a href="https://www.instagram.com/_coastalcanopy.lk_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-green-300">
                <Instagram />
              </a>
              
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <button 
              onClick={handleClick} 
              className=" text-white px-4 py-2 rounded "
            >
              Visit Coastal Canopy
            </button>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} CoastalCanopy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

