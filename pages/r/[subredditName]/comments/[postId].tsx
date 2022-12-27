import { GetServerSideProps } from "next"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { prisma } from "../../../../server/db/client"
import Router from "next/router"
import axios from "axios"
import React from "react"
import EditPostDialog from "../../../../components/edit-post-dialog"
import { Post } from "../../../../types/types"
import Button from "../../../../components/button"

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params?.postId),
    },
    include: {
      author: true,
      subreddit: true,
    }
  })
  return {
    props: {
      post: JSON.parse(JSON.stringify(post))
    }
  }
}

// async function deletePost(postId) {
//   // const res = await axios.delete('/api/posts', { postId })
//   // console.log(`res: ${res}`)
//   // console.log(`res.data: ${res.data}`)
//   // Router.push('/')
// }

export default function PostDetails({post}: Post) {
  const session = useSession()
  const userHasValidSession = Boolean(session)
  const postBelongsToUser = session.data?.user.email === post.author.email
  // console.log(session.data?.user.email)
  // console.log(props.post.author.email)

  console.log(post)

  const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const res = await axios.delete('/api/posts', {data: post.id })
    console.log(`res: ${res}`)
    console.log(`res.data: ${res.data}`)
    Router.push('/')
  }

  // const handleShowEditForm = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   <EditPostDialog post={props.post} />
  //   // const res = await axios.put('/api/posts', {data: props.post.id })
  //   // console.log(`res: ${res}`)
  //   // console.log(`res.data: ${res.data}`)
  //   // Router.push('/')
  // }
  return (
    <div className="flex flex-col items-center justify-center border border-red-500 mt-12">

      <div className="flex flex-col items-center justify-center my-12 rounded-lg p-8 w-[50vw] border border-gray-300">
        <p>{post.title}</p>
        {post.description && (
          <p>{post.description}</p>
        )}
        {
          userHasValidSession && postBelongsToUser && (
            // <button onClick={() => deletePost(props.post.id)}>Delete post</button>
            <button
              className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              onClick={handleDelete}>Delete</button>
          )
        }
        {
          userHasValidSession && postBelongsToUser && (
            <>
              <EditPostDialog post={post} />
              <h1>HELLO</h1>
            </>
          )
        }
      </div>
    </div>
  )
}