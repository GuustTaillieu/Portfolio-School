// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { client } from "@/sanity/lib/client";
import { Project } from "@/typings";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

type Data = {
  projects: Project[];
};

const query = groq`*[_type == "project"] {
  ...,
  heroImage {
    asset->{
      ...,
      metadata
    }
  },
  technologies[]->{
    ...,
    skillImage {
      asset->{
        ...,
        metadata
      }
    }
  },
}`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const projects: Project[] = await client.fetch(query);
  res.status(200).json({ projects });
}
