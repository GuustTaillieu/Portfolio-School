import { client } from "@/sanity/lib/client";
import { Project } from "@/typings";
import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

type Data = {
  project: Project;
};

const query = (id: string) => groq`*[_type == "project" && _id == '${id}'][0] {
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
  const project: Project = await client.fetch(query(req.query.id as string));
  res.status(200).json({ project });
}
