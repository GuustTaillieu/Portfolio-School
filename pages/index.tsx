import { useRef, useState, useEffect } from "react";
import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import {
  fetchExperiences,
  fetchPageInfo,
  fetchProjects,
  fetchSkills,
  fetchSocials,
} from "@/utils/fetchContentData";
import LoadingScreen from "@/components/LoadingScreen";

type Props = {
  pageInfo: PageInfo;
  projects: Project[];
  skills: Skill[];
  experiences: Experience[];
  socials: Social[];
};

const Home: NextPage<Props> = ({
  pageInfo,
  projects,
  skills,
  experiences,
  socials,
}: Props) => {
  const hero = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading && pageInfo && projects && skills && experiences && socials) {
      setTimeout(() => {
        setLoading(false);
      }, 1100);
    }
  }, [pageInfo, projects, skills, experiences, socials, loading]);

  return !loading ? (
    <div className="scrollContainer z-0 h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll bg-background font-poppins text-white scrollbar-thin scrollbar-track-gray-400/30 scrollbar-thumb-primary/80">
      <Head>
        <title>{pageInfo.name} - Portfolio</title>
      </Head>
      <main>
        <Header socials={pageInfo.socials} />

        <section ref={hero} id="hero" className="snap-start">
          <Hero info={pageInfo} />
        </section>

        <section id="about" className="snap-center">
          <About info={pageInfo} />
        </section>

        <section id="experience" className="snap-center">
          <WorkExperience experiences={experiences} />
        </section>

        <section id="skills" className="snap-start">
          <Skills skills={skills} />
        </section>

        <div id="events" className="snap-start">
          <Projects projects={projects} />
        </div>

        <div id="contact" className="snap-start">
          <ContactMe info={pageInfo} />
        </div>

        <ScrollToTopButton topElem={hero} />
      </main>
    </div>
  ) : (
    <LoadingScreen />
  );
};

export default Home;

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   // const pageInfo: PageInfo = await fetchPageInfo();
//   // const projects: Project[] = await fetchProjects();
//   // const skills: Skill[] = await fetchSkills();
//   // const experiences: Experience[] = await fetchExperiences();
//   // const socials: Social[] = await fetchSocials();

//   return {
//     props: {
//       pageInfo,
//       projects,
//       skills,
//       experiences,
//       socials,
//     },
//     revalidate: 10,
//   };
// };
