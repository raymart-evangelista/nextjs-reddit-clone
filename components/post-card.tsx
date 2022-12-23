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
import { useState } from "react"

export default function PostCard({post}) {
  const session = useSession()
  const router = useRouter()
  const [inSubreddit, setInSubreddt] = useState(router.pathname === '/r/[subredditName]')
  
  function toSubreddit(e: any) {
    e.stopPropagation()
    Router.push("/r/subredditName", `/r/${post.subreddit}`)
    // Router.push("r/[subredditName]", `r/${post.subreddit}`)
  }

  function toUser(e: any) {
    e.stopPropagation()
    Router.push("/user/username", `/user/${post.author.username}`)
  }

  function upVote() {

  }

  function downVote() {

  }

  function toComments() {

  }

  function share() {

  }

  function save() {

  }

  return (
    <div
      // href={{pathname: `/r/${post.subreddit}/comments/${post.id}`}}
      className="flex border-[1px] border-gray-300 w-[600px] rounded-lg bg-slate-50 hover:border-black"
    >
      <div className="arrows-area w-fit flex flex-col items-center p-2 pt-3">
        <ArrowUpSquareSvg />
        <p className="font-semibold text-xs">{post?.totalLikes}</p>
        <ArrowDownSquareSvg />
      </div>
      <div className="main-content bg-white w-full rounded-tr-lg rounded-br-lg">
        <div className="flex justify-between items-center mx-4 my-2">
          <div className="flex gap-2">
            {!inSubreddit && (
              <div 
                className="font-bold text-xs hover:underline hover:cursor-pointer"
                onClick={(e) => toSubreddit(e)}
              >
                r/{post.subreddit}
              </div>
            )}
            {post.createdAt === post.updatedAt ? (
              <div className="text-gray-400 text-xs flex gap-1">Posted by
                <div 
                  className="hover:underline hover:cursor-pointer"
                  onClick={(e) => toUser(e)}>
                  u/{post.author.username}
                </div>
                {moment.utc(post?.createdAt).local().startOf('seconds').fromNow()}
              </div>
            ) : (
              <div className="text-gray-400 text-xs flex gap-1">Edited by
              <div 
                className="hover:underline hover:cursor-pointer"
                onClick={(e) => toUser(e)}>
                u/{post.author.username}
              </div>
              {moment.utc(post?.updatedAt).local().startOf('seconds').fromNow()}
            </div>
            )
            }
          </div>
          {session.status === 'unauthenticated' && 
            <Link href='/api/auth/signin'>
              <Button text="Join" bgColor="bg-reddit-button-blue" textColor="text-white" width="px-[1rem]" height="py-[.2rem]" />
            </Link>
          }
        </div>
        <div className="bottom content of main area">
          {/* <h1 className="text-xl font-semibold ml-2 mb-2">These guys take zero Ws, they are Illiams now</h1> */}
          <Link 
            href={{pathname: `/r/${post.subreddit}/comments/${post.id}`}}
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