import { GetServerSideProps } from "next"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { prisma } from "../../../../server/db/client"
import Router from "next/router"
import axios from "axios"

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params?.postId),
    },
    include: {
      author: true,
    }
  })
  return {
    props: {
      post: JSON.parse(JSON.stringify(post))
    }
  }
}

async function deletePost(postId) {
  // const res = await axios.delete('/api/posts', { postId })
  // console.log(`res: ${res}`)
  // console.log(`res.data: ${res.data}`)
  // Router.push('/')
}


export default function PostDetails(props: any) {
  const session = useSession()
  const userHasValidSession = Boolean(session)
  const postBelongsToUser = session.data?.user.email === props.post.author.email
  // console.log(session.data?.user.email)
  // console.log(props.post.author.email)

  console.log(props.post.id)

  const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const res = await axios.delete('/api/posts', {data: props.post.id })
    console.log(`res: ${res}`)
    console.log(`res.data: ${res.data}`)
    Router.push('/')
  }

  return (
    <>
      <p>HEllo</p>
      {
        userHasValidSession && postBelongsToUser && (
          // <button onClick={() => deletePost(props.post.id)}>Delete post</button>
          <button onClick={handleDelete}>Delete</button>
        )
      }
    </>
  )
}