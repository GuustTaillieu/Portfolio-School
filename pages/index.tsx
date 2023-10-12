import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="scrollbar-track-gray-400/30 scrollbar-thumb-primary/80 scrollbar-thin z-0 h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll bg-background font-poppins text-white">
      <Head>
        <title>Portfolio Zita</title>
      </Head>
      <main>
        <Header />

        <section id="hero" className="snap-start">
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
      </main>
    </div>
  );
};

export default Home;
