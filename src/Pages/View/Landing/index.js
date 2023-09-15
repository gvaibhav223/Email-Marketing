import React from "react";
import Home from "./Home";
import Reputation from "./Reputation";
import About from "./About";
import Services from "./Services";
import FreeConsultant from "./FreeConsultant";
import Count from "./Count";
import Projects from "./Projects";
import ContactUs from "./ContactUs";

const LandingPage = () => {
  return (
    <>
      <section>
        <Home />
      </section>
      <section>
        <Reputation />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <FreeConsultant />
      </section>
      <section>
        <Count />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <ContactUs />
      </section>
    </>
  );
};

export default LandingPage;
