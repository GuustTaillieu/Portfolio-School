import Header from "@/components/Header";
import LoadingScreen from "@/components/LoadingScreen";
import { client } from "@/sanity/lib/client";
import { PageInfo, Project } from "@/typings";
import {
  fetchPageInfo,
  fetchProject,
  fetchProjects,
} from "@/utils/fetchContentData";
import { GetStaticProps, NextPage } from "next";
import { useNextSanityImage } from "next-sanity-image";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Projects from "@/components/Projects";
import {
  BackspaceIcon,
  BackwardIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";

type Props = {
  pageInfo: PageInfo;
  project: Project;
  projects: Project[];
};

const ProjectPage: NextPage<Props> = ({
  pageInfo,
  project,
  projects,
}: Props) => {
  const [loading, setLoading] = useState(true);
  const projectPicProps = useNextSanityImage(client, project.image);

  useEffect(() => {
    if (loading && pageInfo && project) {
      setTimeout(() => {
        setLoading(false);
      }, 1100);
    }
  }, [pageInfo, project]);

  const nextProject = useMemo(() => {
    if (!projects) return null;
    const index = projects.findIndex((p) => p._id === project._id);
    return projects[index + 1] || projects[0];
  }, [project]);

  if (!project) return <LoadingScreen />;
  return !loading ? (
    <div className="scrollContainer z-0 h-screen overflow-x-hidden overflow-y-scroll bg-background font-poppins text-white scrollbar-thin scrollbar-track-gray-400/30 scrollbar-thumb-primary/80">
      <Head>
        <title>{pageInfo.name} - Portfolio - Project</title>
      </Head>
      <main>
        <Header socials={pageInfo.socials} />

        <div key={project._id} className="-mt-24">
          <Image
            {...projectPicProps}
            alt={project.title}
            layout="fixed"
            placeholder="blur"
            blurDataURL={project.image.asset.metadata.lqip}
            className="h-full w-full rounded-md object-cover object-profile"
          />
          <div className="flex w-full flex-col items-center justify-center space-y-5 px-20 md:px-44">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true, amount: "all" }}
              className="max-w-6xl space-y-5 px-0 py-12 md:px-10"
            >
              <h1 className="block text-center text-4xl font-semibold">
                <span className="border-b-2 border-primary/50">
                  {project?.title}
                </span>
              </h1>
              <p className="max-w-4xl pt-3 text-center text-lg md:text-center">
                {project?.description || "No description available."}
              </p>
            </motion.div>
          </div>
        </div>
        <div className="pt-10">
          <Projects projects={projects} title="Other events" />
        </div>

        <Link href="/" className="absolute bottom-10 left-10" title="Back home">
          <HomeIcon className=" aspect-square h-8 cursor-pointer text-primary/50 transition-all hover:text-primary" />
        </Link>
      </main>
    </div>
  ) : (
    <LoadingScreen />
  );
};

export default ProjectPage;

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const id = params?.id;
  const pageInfo: PageInfo = await fetchPageInfo();
  const project: Project = await fetchProject(id as string);
  const projects: Project[] = await fetchProjects();

  return {
    props: {
      pageInfo,
      project,
      projects,
    },
    revalidate: 10,
  };
};

export async function getStaticPaths() {
  const projects: Project[] = await fetchProjects();
  const paths = projects.map((project) => ({
    params: { id: project._id },
  }));

  return { paths, fallback: false };
}
