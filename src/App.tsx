import Navbar from "./components/Navbar";
import Hero from "./section/Hero";
import About from "./section/About";
import Projects from "./section/Projects";
import Contact from "./section/Contact";
import Footer from "./section/Footer";
import ParticlesBg from "./components/ParticlesBg";
import { useEffect } from "react";
import { initScrollReveal } from "./lib/scrollReveal";

function App() {
  useEffect(() => {
    initScrollReveal();
  }, []);

  return (
    <>
      <ParticlesBg />
      <main className="relative z-10 text-neutral-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <ParticlesBg />
      </main>
    </>
  );
}

export default App;
