import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { prisma } from "../../../server/db/client"

import Header from "../../../components/header"
import Aside from "../../../components/aside"
import MainArea from "../../../components/main-area"
import { PostsListProps } from "../../../types/types"

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const posts = await prisma.post.findMany({
    where: {
      subreddit: {
        name: String(params?.subredditName)
      }
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

export default function Subreddit({posts}: PostsListProps) {
  const router = useRouter()
  const subredditName = router.query.subredditName
  return (
    <div className="h-full">
      <Header />
      <div className="fixed top-12 h-full flex overflow-hidden">
        <Aside />
        <MainArea posts={posts} />
      </div>
    </div>
  )
}

