// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { client } from "@/sanity/lib/client";
import { Experience } from "@/typings";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

type Data = {
  experiences: Experience[];
};

const query = groq`*[_type == "experience"] {
  ...,
  companyLogo {
    asset->{
      ...,
      metadata
    }
  },
  technologies[]-> {
    ...,
    skillImage {
      asset->{
        ...,
        metadata
      }
    }
  }
}`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const experiences: Experience[] = await client.fetch(query);
  res.status(200).json({ experiences });
}
