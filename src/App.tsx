import Nav from "./components/Nav";
import Hero from "./views/Hero";
import Marquee from "react-fast-marquee";

import MarqueeIcon from "./assets/marquee_icon.svg";
import About from "./views/About";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Tokenomics from "./views/Tokenomics";
import Footer from "./components/Footer";


const App = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
  });

  useEffect(() => {
    new LocomotiveScroll();
  }, []);
  return (
    <div className="h-auto w-full font-secondary">
      <Nav />
      <Hero />
      <div className="w-full bg-cream py-7">
        <Marquee className="" autoFill>
          <img src={MarqueeIcon} className="mx-6 w-14" />
          <h1 className="font-primary text-2xl uppercase sm:text-3xl md:text-4xl">
            Lorem Ipsum
          </h1>
        </Marquee>
      </div>
      <About />
      <Tokenomics />
      <Footer/>
    </div>
  );
};

export default App;
