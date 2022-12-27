import { prisma } from "../../server/db/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  switch (method) {
    case 'PUT':
      {
        const { post, currentUserEmail } = req.body
        const user = await prisma.user.findUnique({
          where: {
            email: currentUserEmail
          }
        })
        if (user) {
          const updatePost = await prisma.post.update({
            where: { id: post.id },
            data: {
              totalLikes: {
                decrement: 1
              },
              dislikedBy: {
                connect: {
                  id: user.id
                }
              }
            }
          })
          res.status(201).json(updatePost)
          break
        }
      }
  }
}