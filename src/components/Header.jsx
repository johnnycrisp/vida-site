import React, { useRef, useEffect } from "react";
import Vida from "../images/vida_1.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Header = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    gsap.fromTo(
      element.querySelector(".overlay"),
      {
        opacity: 1,
        scale: 1,
      },
      {
        opacity: 0,
        scale: 1.3,
        scrollTrigger: {
          trigger: element.querySelector(".overlay h1"),
          start: "top center",
          end: "+=200px",
          scrub: true,
          //   markers: true,
        },
      }
    );
  }, []);

  return (
    <div ref={ref}>
      <section className="overlay">
        <h1>Everyone can change</h1>
      </section>
      <section className="first__section">
        <img
          src={Vida}
          alt="Vida Carmel sitting, looking up and to the left into some nice natural light."
        />
        <p>
          “Everyone can change, not everyone knows how. My goal is to enable you
          to take positive action. The changes you feel benefit you best. You
          are the agent of your change. I am the catalyst.”
        </p>
      </section>
    </div>
  );
};

export default Header;
