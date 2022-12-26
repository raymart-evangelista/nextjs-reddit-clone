import { prisma } from "../../server/db/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  console.log('inside handler')
  const { method } = req

  switch (method) {
    case 'PUT':
      {
        // update the Post totalLikes
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
          console.log('&&& post was downvoted &&&')
          res.status(201).json(updatePost)
          break
        }
      }
  }
}

// many users can like a post
// a post can be liked by many users