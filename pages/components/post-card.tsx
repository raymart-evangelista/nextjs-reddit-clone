import ArrowUpSquare from "./svg/arrow-up-square"
import ArrowDownSquare from "./svg/arrow-down-square"
import Button from './button'
import ChatSvg from "./svg/chat"
import Arrow90DegRight from "./svg/arrow-90deg-right"
import Bookmark from "./bookmark"
import ThreeDotsSvg from "./svg/three-dots"

export default function PostCard({}) {
  return (
    <div className="flex border-[1px] border-gray-300 w-fit rounded-lg bg-slate-50 hover:border-black">
      <div className="arrows-area w-fit flex flex-col items-center p-1 pt-3">
        <ArrowUpSquare />
        <p className="font-semibold text-xs">21.9K</p>
        <ArrowDownSquare />
      </div>
      <div className="main-content bg-white rounded-tr-lg rounded-br-lg">
        <div className="flex justify-between items-center mx-4 my-2">
          <div className="flex gap-2">
            <div className="font-bold text-xs">r/formuladank</div>
            <div className="text-gray-400 text-xs">Posted by u/formuladanker123 10 hours ago</div>
          </div>
          <Button text="Join" bgColor="bg-reddit-button-blue" textColor="text-white" width="px-[1rem]" height="py-[.2rem]" />
        </div>
        <div className="bottom content of main area">
          <h1 className="text-xl font-semibold ml-2 mb-2">These guys take zero Ws, they are Illiams now</h1>
          <div className="photo if theres a photo">
            <img className="max-h-[480px]" src="https://i.redd.it/i277m1nkai5a1.png" alt="" />
          </div>
          <div className="flex gap-4 p-2 items-center">
            <div className="flex gap-2 items-center hover:bg-gray-200">
              <ChatSvg />
              <p className="text-xs font-bold text-gray-500">1.9K Comments</p>
            </div>
            <div className="flex gap-2 items-center hover:bg-gray-200">
              <Arrow90DegRight />
              <p className="text-xs font-bold text-gray-500">Share</p>
            </div>
            <div className="flex gap-2 items-center hover:bg-gray-200">
              <Bookmark />
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