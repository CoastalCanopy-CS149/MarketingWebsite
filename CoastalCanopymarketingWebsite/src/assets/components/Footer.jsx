import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">MangroveGuard</h3>
            <p>Protecting our coastal ecosystems, one mangrove at a time.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-green-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-green-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-green-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-300">
                <Facebook />
              </a>
              <a href="#" className="hover:text-green-300">
                <Twitter />
              </a>
              <a href="#" className="hover:text-green-300">
                <Instagram />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="mb-2">Stay updated with our latest news and events.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 bg-green-800 text-white rounded-l-md focus:outline-none"
              />
              <button type="submit" className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r-md">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} MangroveGuard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

