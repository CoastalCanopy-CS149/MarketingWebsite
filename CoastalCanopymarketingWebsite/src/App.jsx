import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./assets/components/Navbar"
import Footer from "./assets/components/Footer"
import Home from "./assets/pages/Home"

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App