import { useState } from "react";
import "./App.css";
import Contact from "./sections/Contact/Contact";
import Experience from "./sections/Experience/Experience";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/projects/Projects";
import BootAnimation from "./common/BootAnimation";

function App() {
  const [bootDone, setBootDone] = useState(false);
  return (
    <>
      {!bootDone && <BootAnimation onFinish={() => setBootDone(true)} />}
      {bootDone && (
        <>
          <Hero />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
