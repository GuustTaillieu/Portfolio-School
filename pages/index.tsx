import { useEffect, useRef } from "react";
import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import { ArrowUpCircleIcon } from "@heroicons/react/20/solid";
import { NextPage } from "next";
import Head from "next/head";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Home: NextPage = () => {
  const hero = useRef<HTMLDivElement>(null);

  return (
    <div className="scrollContainer z-0 h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll bg-background font-poppins text-white scrollbar-thin scrollbar-track-gray-400/30 scrollbar-thumb-primary/80">
      <Head>
        <title>Portfolio Zita</title>
      </Head>
      <main>
        <Header />

        <section ref={hero} id="hero" className="snap-start">
          <Hero />
        </section>

        <section id="about" className="snap-center">
          <About />
        </section>

        <section id="experience" className="snap-center">
          <WorkExperience />
        </section>

        <section id="skills" className="snap-start">
          <Skills />
        </section>

        <div id="projects" className="snap-start">
          <Projects />
        </div>

        <div id="contact" className="snap-start">
          <ContactMe />
        </div>

        <ScrollToTopButton topElem={hero} />
      </main>
    </div>
  );
};

export default Home;
