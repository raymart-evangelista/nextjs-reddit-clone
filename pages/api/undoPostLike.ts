import { prisma } from "../../server/db/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { UserProps } from "../../types/types";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
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
        const likedBy = post.likedBy
        console.log(likedBy)

        if (user) {
          const updatePost = await prisma.post.update({
            where: { id: post.id },
            data: {
              totalLikes: {
                decrement: 1
              },
              likedBy: {
                set: likedBy.filter((elem: UserProps) => elem.email !== user.email)
              }
            }
          })
          console.log('&&& post was unliked &&&')
          res.status(201).json(updatePost)
          break
        }
      }
  }
}