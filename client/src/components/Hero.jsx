import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center pt-24 pb-16 px-6 bg-gradient-to-br from-white via-slate-50 to-blue-50 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-8 h-px bg-slate-600" />
              <span className="text-xs tracking-widest uppercase text-blue-600">
                Full Stack Developer
              </span>
            </motion.div>

            <motion.h1
              className="font-serif text-5xl md:text-7xl font-medium leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Code that's clean.
              <br />
              <span className="text-blue-600">
                Products that work.
              </span>
            </motion.h1>

            <motion.p
              className="text-slate-600 text-base md:text-lg leading-relaxed max-w-xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              I'm Srithar — a full stack developer building end-to-end web
              applications with React, Node.js, Express.js, PostgreSQL, and
              modern web technologies.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium shadow-lg hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300"
              >
                View Projects
              </a>

              <a
                href="/Srithar_CV.pdf"
                download
                className="px-6 py-3 border border-slate-300 rounded-xl font-medium text-slate-700 hover:bg-slate-100 hover:-translate-y-1 transition-all duration-300"
              >
                Download Resume
              </a>

              <a
                href="https://www.linkedin.com/in/srithar-s-b64159302/"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 text-slate-700 rounded-xl hover:bg-slate-100 hover:-translate-y-1 transition-all duration-300"
              >
                LinkedIn ↗
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 -z-20 bg-blue-400/20 blur-3xl rounded-full scale-110" />

              <img
                src="/sri.jpeg"
                alt="Srithar"
                className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-3xl shadow-2xl transition-all duration-500 hover:scale-105"
              />

              {/* Decorative Background */}
              <div className="absolute -z-10 -top-6 -right-6 w-full h-full rounded-3xl bg-blue-100" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;