import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import HowIWork from "./components/HowIWork";
import Journey from "./components/Journey";
import Availability from "./components/Availability";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-ground">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <TechStack />
        <Projects />
        <HowIWork />
        <Journey />
        <Availability />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
