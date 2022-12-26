import ArrowUpSquareSvg from "./svg/arrow-up-square"
import ArrowDownSquareSvg from "./svg/arrow-down-square"
import Button from './button'
import ChatSvg from "./svg/chat"
import Arrow90DegRightSvg from "./svg/arrow-90deg-right"
import BookmarkSvg from "./svg/bookmark"
import ThreeDotsSvg from "./svg/three-dots"
import moment from "moment"
import { useSession } from "next-auth/react"
import Link from "next/link"
import Router, { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Post } from "../types/types"
import axios from "axios"

export default function PostCard({ post }: Post) {
  const session = useSession()
  // console.log(post)

  const [dbLiked, setDbLiked] = useState(false)
  const [dbDisliked, setDbDisliked] = useState(false)
  const [likesCount, setLikesCount] = useState(post.totalLikes - post.totalDislikes)
  const [upvoteDisabled, setUpvoteDisabled] = useState(false)
  const [downvoteDisabled, setDownvoteDisabled] = useState(false)

  const router = useRouter()
  const [inSubreddit, setInSubreddt] = useState(router.pathname === '/r/[subredditName]')

  function upvoteAlreadyChosen() {
    // if the backend states that the user already upvoted this post..
    // upvoteClicked = true, so if they click upvote again, they remove their like, or
    // if they click downvote, their upvote is removed and downvoteClicked = true


  }

  function downvoteAlreadyChosen() {
    // if the backend states that the user already downvoted this post..
    // downvoteClicked = false, so if they click downvote again, they remove their dislike, or
    // if they click upvote, their downvote is removed and upvoteClicked = true

  }
  
  function toSubreddit(e: any) {
    e.stopPropagation()
    Router.push("/r/subredditName", `/r/${post.subreddit.name}`)
    // Router.push("r/[subredditName]", `r/${post.subreddit}`)
  }

  function toUser(e: any) {
    e.stopPropagation()
    Router.push("/user/username", `/user/${post.author.username}`)
  }

  async function handleUpvoteClick() {
    // the Post model will have a new totalLikes number, 
    // the Post model will add the current user to the likedBy User array
    if (session.status === 'unauthenticated') {
      console.log('unauthenticated..')
      router.push('/api/auth/signin')
    }

    if (session.status === 'authenticated') {
      const currentUserEmail = session.data.user.email


      // do stuff when post is already liked by user and is pressing upvoting button
      // [ user wants to undo their like ]
      if (dbLiked) {
        // backend work
        const res = await axios.put('/api/undoPostLike', { post, currentUserEmail} )
        // front end work
        setDbLiked(false)
        setLikesCount(likesCount - 1)
        console.log(post.likedBy)
        post.likedBy = post.likedBy.filter((elem) => elem.email !== session.data.user.email)
        console.log(post.likedBy)
      }

      // do stuff when post isn't like/disliked yet by user and is pressing upvoting button
      // [ user wants to do their like ]
      if (!dbLiked && !dbDisliked) {
        const res = await axios.put('/api/likedPosts', { post, currentUserEmail })
        console.log(`res: ${res}`)
        console.log(`res.data: ${res.data}`)
        setDbLiked(true)
        setLikesCount(likesCount + 1)
      }

      // do stuff when post is already disliked by user and is pressing upvoting button
      // [ user wants to undo their dislike and do their like ]
      if (!dbLiked && dbDisliked) {

      }
    }
  }

  async function handleDownvoteClick() {
    // sedn to backend the dislike post and to downvote the post
    if (session.status === 'unauthenticated') {
      console.log('unauthenticated..')
      router.push('/api/auth/signin')
    }

    if (session.status === 'authenticated') {
      setLikesCount(likesCount - 1)
    }
  }

  function toComments() {

  }

  function share() {

  }

  function save() {

  }

  useEffect(() => {
    if (session.status === 'authenticated') {
      console.log('********** post.likedBy ')
      // console.log(post.likedBy.find(elem => elem.email === session.data.user.email))
      if (post.likedBy.find(elem => elem.email === session.data.user.email)) {
        setDbLiked(true)
      }
      if (post.dislikedBy.find(elem => elem.email === session.data.user.email)) {
        setDbDisliked(true)
      }
    }
  })


  return (
    <div
      // href={{pathname: `/r/${post.subreddit}/comments/${post.id}`}}
      className="flex border-[1px] border-gray-300 w-[600px] rounded-lg bg-slate-50 hover:border-black"
    >
      <div className="arrows-area w-fit flex flex-col items-center p-2 pt-3">
        <div className="flex flex-col gap-1 items-center">
          <button onClick={handleUpvoteClick} disabled={upvoteDisabled}>
            <ArrowUpSquareSvg width="1.2rem" viewBox="0 0 16 16" className={`${dbLiked ? 'text-orange-500' : 'text-black'} hover:text-orange-500 hover:cursor-pointer`} />
          </button>
          <p className="font-semibold text-xs">{likesCount}</p>
          <button onClick={handleDownvoteClick} disabled={downvoteDisabled}>
            <ArrowDownSquareSvg width="1.2rem" viewBox="0 0 16 16" className={`${dbDisliked ? 'text-blue-500' : 'text-black'} hover:text-blue-500 hover:cursor-pointer`} />
          </button>
        </div>
      </div>
      <div className="main-content bg-white w-full rounded-tr-lg rounded-br-lg">
        <div className="flex justify-between items-center mx-4 my-2">
          <div className="flex gap-2">
            {!inSubreddit && (
              <div 
                className="font-bold text-xs hover:underline hover:cursor-pointer"
                onClick={(e) => toSubreddit(e)}
              >
                r/{post.subreddit.name}
              </div>
            )}
            <div className="text-gray-400 text-xs flex gap-1">Posted by
              <div 
                className="hover:underline hover:cursor-pointer"
                onClick={(e) => toUser(e)}>
                u/{post.author.username}
              </div>
              {moment.utc(post?.createdAt).local().startOf('seconds').fromNow()}
            </div>
          </div>
          {session.status === 'unauthenticated' && 
            <Link href='/api/auth/signin'>
              <Button text="Join" bgColor="bg-reddit-button-blue" textColor="text-white" width="px-[1rem]" height="py-[.2rem]" />
            </Link>
          }
        </div>
        <div className="bottom content of main area m-2">
          {/* <h1 className="text-xl font-semibold ml-2 mb-2">These guys take zero Ws, they are Illiams now</h1> */}
          <Link 
            href={{pathname: `/r/${post.subreddit?.name}/comments/${post.id}`}}
            className="text-xl font-semibold ml-2 mb-2 hover:underline"
          >
            {post?.title}
          </Link>
          <h2 className="text-sm font-semibold text-gray-600 ml-2 mb-2">{post?.description}</h2>
          {/* <div className="photo if theres a photo">
            <img className="max-h-[480px]" src="https://i.redd.it/i277m1nkai5a1.png" alt="" />
          </div> */}
          <div className="flex gap-4 p-2 items-center">
            <div className="flex gap-2 items-center hover:bg-gray-200">
              <ChatSvg />
              <p className="text-xs font-bold text-gray-500">{post?.totalComments} Comments</p>
            </div>
            <div className="flex gap-2 items-center hover:bg-gray-200">
              <Arrow90DegRightSvg />
              <p className="text-xs font-bold text-gray-500">Share</p>
            </div>
            <div className="flex gap-2 items-center hover:bg-gray-200">
              <BookmarkSvg />
              <p className="text-xs font-bold text-gray-500">Save</p>
            </div>
            <div className="flex gap-2 items-center hover:bg-gray-200">
              <ThreeDotsSvg />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}