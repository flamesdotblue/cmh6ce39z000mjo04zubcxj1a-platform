import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-[92vh] min-h-[620px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-[#05060a]" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-500/10 px-3 py-1 text-xs text-yellow-300 backdrop-blur"
          >
            Premium · Creative · Tech
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.9 }}
            className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white"
          >
            <motion.span
              initial={{ y: 0 }}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="block"
            >
              Rahamat Ali
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1.2 }}
              className="mt-3 block text-lg sm:text-xl text-gray-200"
            >
              “N8N Automation Expert | Vibe Coding | Marketing Expert | Aspiring Entrepreneur | Curious Mind”
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.95 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-6 max-w-2xl text-gray-300"
          >
            Blending automation, AI, and business strategy to build premium digital experiences and tools for the next generation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="rounded-lg bg-gradient-to-tr from-yellow-400 to-amber-500 px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-yellow-500/30 hover:from-yellow-300 hover:to-amber-400 transition"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 backdrop-blur"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="ml-auto hidden md:block"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-yellow-400/20 to-amber-600/10 blur-xl" />
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
              alt="Rahamat Ali portrait"
              className="relative z-10 h-72 w-72 rounded-2xl object-cover border border-white/10 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="pointer-events-none absolute left-1/2 bottom-6 -translate-x-1/2 text-xs text-gray-400"
      >
        Scroll
      </motion.div>
    </section>
  );
}
