// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { client } from "@/sanity/lib/client";
import { Social } from "@/typings";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

type Data = {
  socials: Social[];
};

const query = groq`*[_type == "socials"]`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const socials: Social[] = await client.fetch(query);
  res.status(200).json({ socials });
}
