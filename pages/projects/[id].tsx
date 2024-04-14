import Header from "@/components/Header";
import LoadingScreen from "@/components/LoadingScreen";
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
import { HomeIcon } from "@heroicons/react/24/solid";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/Carousel";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

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
  const builder = imageUrlBuilder(client);
  const topRef = React.useRef<HTMLDivElement>(null);

  function urlFor(source: SanityImageSource) {
    return builder.image(source);
  }

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [topRef, project]);

  useEffect(() => {
    if (loading && pageInfo && project) {
      setTimeout(() => {
        setLoading(false);
      }, 1100);
    }
  }, [pageInfo, project, loading]);

  const nextProjects = useMemo(() => {
    if (!projects) return [];
    // sort projects so that the current project is not included and the rest are sorted by date (dates before the current project's date will be last)
    return projects
      .filter((p) => p._id !== project._id)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [projects, project]);

  if (!project) return <LoadingScreen />;
  return !loading ? (
    <div className="scrollContainer z-0 h-screen overflow-x-hidden overflow-y-scroll bg-background font-poppins text-white scrollbar-thin scrollbar-track-gray-400/30 scrollbar-thumb-primary/80">
      <Head>
        <title>{pageInfo.name} - Portfolio - Project</title>
      </Head>
      <main>
        <Header socials={pageInfo.socials} />

        <div ref={topRef} key={project._id} className="">
          <Carousel className="mx-auto w-full max-w-4xl">
            <CarouselContent>
              {project.images.map((image) => (
                <CarouselItem key={image.asset._ref}>
                  <div className="p-1">
                    <Image
                      src={urlFor(image)?.height(500).url() ?? ""}
                      alt={project.title}
                      width={600}
                      height={500}
                      blurDataURL={
                        urlFor(image)?.width(500).blur(20).url() ?? ""
                      }
                      className="mx-auto aspect-video rounded-md object-cover object-profile"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <div className="flex w-full flex-col items-center justify-center space-y-5 px-4 sm:px-20 lg:px-44">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true, amount: "all" }}
              className="max-w-6xl space-y-5 px-0 py-12 md:px-10"
            >
              <h1 className="block text-center text-4xl font-semibold">
                <span className="border-b-2 border-primary/50">
                  {project?.title}
                </span>
              </h1>

              <div className="mx-auto max-w-4xl pt-3">
                {project?.description.split("\n").map((text) => (
                  <p
                    key={text}
                    className="mt-2 text-justify text-lg"
                    style={{
                      textAlign: "justify",
                      textJustify: "inter-word",
                      textAlignLast: "center",
                    }}
                  >
                    {text}
                  </p>
                )) ?? "No description available."}
              </div>
            </motion.div>
          </div>
        </div>
        <div className="pt-10">
          <Projects projects={nextProjects} title="Other events" />
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
