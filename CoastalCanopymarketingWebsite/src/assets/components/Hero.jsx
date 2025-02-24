import { motion } from "framer-motion"

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
              Be a part of the global movement to protect and preserve mangrove ecosystems. Together, let's safeguard
              nature's coastal guardians with CoastalCanopy.
            </p>
            <motion.button
              className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-extrabold py-3 px-6 rounded-2xl shadow-lg"
              onClick={() => window.open("https://www.coastalcanopy.org.lk", "_blank")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Visit us
            </motion.button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <motion.div
                initial={{ scale: 1, rotate: 0 }}
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="origin-center"
              >
                <motion.img
                  src="/Images/bglaptop.png"
                  alt="MangroveGuard mobile app"
                  className="w-96 h-auto rounded-lg"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-24 -right-16 hidden md:block origin-center"
                initial={{ scale: 1, rotate: 0 }}
                animate={{
                  scale: [1, 1.08, 1],
                  rotate: [0, -8, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <motion.img
                  src="/Images/bgtablet.png"
                  alt="MangroveGuard desktop app"
                  className="w-64 h-auto rounded-lg"
                  whileHover={{ scale: 1.8 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

