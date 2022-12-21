import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { prisma } from "../../../server/db/client"

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const posts = await prisma.post.findMany({
    where: {
      subreddit: String(params?.subredditName)
    },
    include: {
      author: {
        select: { username: true }
      }
    }
  })
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts))
    }
  }
}

export default function Subreddit(props: any) {
  console.log(props)
  const router = useRouter()
  const subredditName = router.query.subredditName
  return (
    <>
    {subredditName}
    </>
  )
}