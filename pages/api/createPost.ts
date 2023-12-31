import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/client";

type postProps = {
  title: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const post: postProps = JSON.parse(req.body);
  if (req.method === "POST") {
    if (!post.title.length) {
      return res.status(500).json({ messsage: "Not empty" });
    }
    try {
      const data = await prisma.post.create({
        data: {
          title: post.title,
        },
      });
      res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ message: "No new post" });
    }
  }
}
