// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { client } from "@/sanity/lib/client";
import { Skill } from "@/typings";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

type Data = {
  skills: Skill[];
};

const query = groq`*[_type == "skill"] {
  ...,
  skillImage {
    asset->{
      ...,
      metadata
    }
  }
}`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const skills: Skill[] = await client.fetch(query);
  res.status(200).json({ skills });
}
