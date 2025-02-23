function About() {
    return (
      <section className="py-20 bg-green-800 text-white" id="about">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img src="/placeholder.svg" alt="Mangrove conservation team" className="rounded-lg w-full h-auto" />
            </div>
            <div className="md:w-1/2 md:pl-10">
              <h2 className="text-3xl font-bold mb-6">About MangroveGuard</h2>
              <p className="mb-4">
                MangroveGuard is a dedicated team of environmentalists, technologists, and community leaders working
                together to protect and restore mangrove ecosystems worldwide.
              </p>
              <p>
                Our mission is to empower local communities, provide cutting-edge tools for mangrove monitoring, and drive
                data-informed conservation efforts to ensure the longevity of these crucial coastal habitats.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default About
  
  