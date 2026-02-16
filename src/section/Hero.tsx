import Container from "../components/Container";
import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { FaGithub } from "react-icons/fa";
import { socials } from "../data/socials";
import Scene3D from "../components/Scene3D";

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen flex items-center
  bg-gradient-to-b from-[var(--bg-main)] to-[var(--bg-soft)]
  transition-colors duration-500 overflow-hidden"
    >
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full blur-[140px] opacity-30 bg-sky-400 dark:bg-violet-600" />
        <div className="absolute -bottom-40 -right-40 w-[480px] h-[480px] rounded-full blur-[140px] opacity-30 bg-pink-400 dark:bg-indigo-600" />
      </div>

      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            {/* NAME */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl
 font-bold leading-tight text-[var(--text-main)]"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-sky-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
                {profile.name}
              </span>
            </motion.h1>

            {/* ROLE */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-5 text-xl md:text-2xl text-[var(--text-muted)]"
            >
              {profile.role}
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 text-[var(--text-muted)] leading-relaxed"
            >
              {profile.description}
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4
"
            >
              {/* GITHUB */}
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl border
              border-[var(--border-soft)]
              hover:bg-[var(--bg-soft)]
              transition"
              >
                <FaGithub className="text-lg" />
                Github
              </a>

              {/* CONTACT */}
              <button
                className="px-6 py-3 rounded-xl font-medium text-white
              bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500
              hover:scale-105 active:scale-95 transition
              dark:shadow-[0_0_30px_rgba(168,85,247,0.35)]"
              >
                Contact Me
              </button>

              {/* PROJECTS */}
              <button
                className="px-6 py-3 rounded-xl border
              border-[var(--border-soft)]
              hover:bg-[var(--bg-soft)]
              transition"
              >
                View Projects
              </button>
            </motion.div>
          </div>
          <div className="order-first md:order-none mb-10 md:mb-0">
            <Scene3D />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
