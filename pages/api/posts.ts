import { prisma } from "../../server/db/client"

import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from "next-auth/react"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  switch (method) {
    case 'POST':
      {
        // get title and desc from the request body
        const { title, description, subredditName } = req.body
  
        const session = await getSession({ req })

        // get current subreddit
        try {
          await prisma.subreddit.findUniqueOrThrow({
            where: {
              name: subredditName
            }
          })          
        } catch (error) {
          await prisma.subreddit.create({
            data: {
              name: subredditName
            }
          })
        }
        // use prisma to create a new post using the data
        const subreddit = await prisma.subreddit.findUnique({
          where: {
            name: subredditName
          }
        })

        const post = await prisma.post.create({
          data: {
            title,
            description,
            subreddit: {
              connect: {
                id: subreddit?.id
              }
            },
            author: { 
              connect: {
                email: session?.user?.email || undefined 
              }
            },
          },
        })
        // send the post object back to the client
        res.status(201).json(post)
        break
      }
    case 'DELETE':
      {
        const postId = req.body  
        const deletePost = await prisma.post.delete({
          where: {
            id: Number(postId),
          }
        })
        // send the deletePost object back to the client
        res.status(201).json(deletePost)
        break
      }
    case 'PUT':
      {
        const { postId, newDescription } = req.body
        const updatePost = await prisma.post.update({
          where: {
            id: postId,
          },
          data: {
            description: newDescription,
          }
        })
        // send the updatePost object back to the client
        res.status(201).json(updatePost)
        break
      }
    default:
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}