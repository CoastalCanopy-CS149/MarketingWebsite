function HeroSection() {
    return (
      <section className="bg-green-100 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Protect Our Mangroves</h1>
              <p className="text-xl mb-6">
                Join the global effort to conserve and monitor mangrove ecosystems with MangroveGuard.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Visit us
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <img src="/placeholder.svg" alt="MangroveGuard mobile app" className="w-64 h-auto rounded-lg shadow-lg" />
                <img
                  src="/placeholder.svg"
                  alt="MangroveGuard desktop app"
                  className="absolute -bottom-10 -right-10 w-80 h-auto rounded-lg shadow-lg hidden md:block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default HeroSection
  
  