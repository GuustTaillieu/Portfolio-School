// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { client } from "@/sanity/lib/client";
import { PageInfo } from "@/typings";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

type Data = {
  pageInfo: PageInfo;
};

const query = groq`*[_type == "pageInfo"][0] {
  ...,
  heroImage {
    asset->{
      ...,
      metadata
    }
  },
  profilePicture {
    asset->{
      ...,
      metadata
    }
  },
  socials[] ->
}`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const pageInfo: PageInfo = await client.fetch(query);
  res.status(200).json({ pageInfo });
}
