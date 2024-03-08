import Container from "@/components/Container";
import Header from "@/components/Typography/Header";
import Arrow from "../assets/arrow.svg";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const About = () => {
  const aboutRef = useRef(null);
  useGSAP(() => {
    gsap.to(".about-gallery-left", {
      x: "-20vw",
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
        end: "bottom center",
        scrub: 2,
      },
    })

    gsap.to(".about-gallery-right", {
      x: "20vw",
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
        end: "bottom center",
        scrub: 2,
      },
    })

  }, [{ scope: aboutRef.current }]);

  return (
    <div className="min-h-screen space-y-48">
      <Container className="border-t pt-14">
        <div className="mx-auto max-w-screen-2xl text-center">
          <h1 className="text-2xl">ABOUT</h1>
          <div className=" flex items-center justify-center md:gap-5 md:flex-row flex-col">
            <Header className="">LOREM</Header>
            <Header className="text-shadow !text-orange">IPSUM</Header>
          </div>
          <div className="relative mx-auto mt-5 max-w-prose">
            <p className="">
              Welcome to our Wild Fox Squad! Meet our collection of 10k unique
              Wild Foxes. Support and join our community, crazy adventures and
              fantastic prizes are waiting for you.
            </p>

            <img
              src={Arrow}
              alt="Arrow"
              className="absolute right-0 w-44 translate-x-20 lg:block hidden"
            />
          </div>
        </div>
      </Container>
      <div className="space-y-10 overflow-hidden " ref={aboutRef}>
        {Array.from({ length: 3 }).map((_, index) =>
          index % 2 === 0 ? (
            <div className="about-gallery-left w-[120vw]">
              <img
                alt={`image${index + 1}`}
                src={`/about/${index + 1}.webp`}
                className="w-full"
              />
            </div>
          ) : (
            <div className="about-gallery-right w-[120vw]">
              <img
                alt={`image${index + 1}`}
                src={`/about/${index + 1}.webp`}
                className="w-full -translate-x-[20vw]"
              />
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default About;
