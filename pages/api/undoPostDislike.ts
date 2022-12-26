import { prisma } from "../../server/db/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { UserProps } from "../../types/types";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  console.log('inside handler')
  const { method } = req
  switch (method) {
    case 'PUT':
      {
        // update the Post totalLikes
        const { post, currentUserEmail } = req.body
        // get the current session user        
        const user = await prisma.user.findUnique({
          where: {
            email: currentUserEmail
          }
        })
        // get the array of users who liked the post
        const dislikedBy = post.dislikedBy
        console.log(dislikedBy)
        if (user) {
          const updatePost = await prisma.post.update({
            where: { id: post.id },
            data: {
              totalLikes: {
                increment: 1
              },
              dislikedBy: {
                set: dislikedBy.filter((elem: UserProps) => elem.email !== user.email)
              }
            }
          })
          console.log('&&& post was un-disliked &&&')
          res.status(201).json(updatePost)
          break
        }
      }
  }
}