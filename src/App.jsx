import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-200 antialiased selection:bg-blue-900 selection:text-cyan-300">
      <div className="fixed top-0 -z-10 h-full w-full bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.2),rgba(0,0,0,0.8))]"></div>
      <div className="container mx-auto px-8 shadow-[0_4px_10px_rgba(255,255,255,0.1)]">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        {/* <Projects /> */}
        <Contact />
      </div>
    </div>
  );
};

export default App;
