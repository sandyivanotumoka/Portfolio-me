import Navbar from "./components/Navbar";
import Hero from "./section/Hero";
import About from "./section/About";
import Projects from "./section/Projects";
import Contact from "./section/Contact";
import Footer from "./section/Footer";

function App() {
  return (
    <main className="bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
