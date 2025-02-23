function About() {
    return (
      <section className="py-20 bg-green-800 text-white" id="about">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img src="/Images/Mangrove.jpg" alt="Mangrove conservation team" className="rounded-lg w-full h-auto" />
            </div>
            <div className="md:w-1/2 md:pl-10">
              <h2 className="text-3xl font-bold mb-6">About CoastalCanopy.org.lk</h2>
              <p className="mb-4 text-2xl">
              CoastalCanopy.org.lk is a community-driven platform dedicated to the protection and sustainable management of Sri Lanka’s mangrove ecosystems.
              </p>
              <p className="text-2xl">
              Our mission is to empower local communities, provide advanced tools for mangrove mapping and monitoring, and promote data-driven conservation efforts to safeguard these vital coastal habitats for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default About
  
  