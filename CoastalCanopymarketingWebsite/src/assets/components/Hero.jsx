function HeroSection() {
    return (
      <section className="bg-green-100 py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight leading-tight font-serif">
                Protect Our Mangroves
              </h1>{" "}
              <br />
              <p className="text-xl mb-6">
                Be a part of the global movement to protect and preserve
                mangrove ecosystems. Together, let’s safeguard nature’s coastal
                guardians with CoastalCanopy.
              </p>
              <button
                className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-extrabold py-3 px-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
                onClick={() =>
                  window.open("https://www.coastalcanopy.org.lk", "_blank")
                }
              >
                Visit us
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <img
                  src="/Images/bglaptop.png"
                  alt="MangroveGuard mobile app"
                  className="w-96 h-auto rounded-lg "
                /> 
                <img
                  src="/Images/bgtablet.png"
                  alt="MangroveGuard desktop app"
                  className="absolute -bottom-24 -right-16 w-64 h-auto rounded-lg  hidden md:block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default HeroSection
  
  