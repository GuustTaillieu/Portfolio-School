import { Experience, PageInfo, Project, Skill, Social } from "@/typings";

export const fetchExperiences = async (): Promise<Experience[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/experiences`,
  );
  const { experiences }: { experiences: Experience[] } = await res.json();
  return experiences;
};

export const fetchSocials = async (): Promise<Social[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/socials`);
  const { socials }: { socials: Social[] } = await res.json();
  return socials;
};

export const fetchSkills = async (): Promise<Skill[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/skills`);
  const { skills }: { skills: Skill[] } = await res.json();
  return skills;
};

export const fetchProjects = async (): Promise<Project[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`);
  const { projects }: { projects: Project[] } = await res.json();
  return projects;
};

export const fetchPageInfo = async (): Promise<PageInfo> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pageInfo`);
  const { pageInfo }: { pageInfo: PageInfo } = await res.json();
  return pageInfo;
};
