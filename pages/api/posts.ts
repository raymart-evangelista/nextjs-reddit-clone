import { prisma } from "../../server/db/client"

import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from "next-auth/react"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  switch (method) {
    case 'POST':
      // get title and desc from the request body
      const { title, description } = req.body

      const session = await getSession({ req })
      // use prisma to create a new post using the data
      const post = await prisma.post.create({
        data: {
          title,
          description,
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
    default:
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}