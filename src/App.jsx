import "./App.css";
import LivePreview from "./common/LivePreview";
import Contact from "./sections/Contact/Contact";
import Experience from "./sections/Experience/Experience";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/projects/Projects";

function App() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <LivePreview />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
