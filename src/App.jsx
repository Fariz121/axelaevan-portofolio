import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Fandom from "./components/Fandom";
import Timeline from "./components/Timeline";
import Interests from "./components/Interests";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const sectionRefs = useRef({});
  const register = (id) => (el) => {
    sectionRefs.current[id] = el;
  };

  const scrollYProgress = useScroll();
  const scale = useTransform(scrollYProgress.scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress.scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-bg text-text overflow-hidden font-sans relative">
      <Navigation />

      <main>
        <motion.div
          style={{ scale, opacity }}
          className="absolute inset-0 pointer-events-none z-0"
        >
          <div className="absolute top-0 left-0 h-[55vh] w-full bg-accent-light/40 blur-[120px] rounded-full" />
          <div className="absolute top-0 right-0 h-[50vh] w-[45vw] bg-accent-light/30 blur-[140px] rounded-full" />
        </motion.div>

        <Hero />
        <About />
        <Fandom />
        <Timeline />
        <Interests />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
