import { prisma } from "../../server/db/client";

import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  // const { method } = req

  // switch (method) {
  //   case 'POST':
  //     const { username } = req.body

  //     const session = await getSession({ req })
  //     console.log(session)

  //     const user = await prisma.user.update({
  //       where: { email: session?.user?.email }
  //     })

  //     res.status(201).json(user)
  //     break
  //   default:
  //     res.status(405).end(`Method ${method} Not Allowed`)
  // }

  const { username } = req.body
  try {
    const session = await getSession({ req })
    const addUsernameToUser = await prisma.user.update({
      where: {
        email: session?.user?.email || undefined
      },
      data: {
        username: username
      }
    })
    //  send the user object back to the client
    res.status(201).json(addUsernameToUser)
  } catch {
    res.status(405).end(`Method ${req.method} not allowed`)
  }
}