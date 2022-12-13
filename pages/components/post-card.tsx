import ArrowUpSquare from "./svg/arrow-up-square"
import ArrowDownSquare from "./svg/arrow-down-square"
import Button from './button'
import ChatSvg from "./svg/chat"
import Arrow90DegRight from "./svg/arrow-90deg-right"
import Bookmark from "./bookmark"
import ThreeDotsSvg from "./svg/three-dots"

export default function PostCard({}) {
  return (
    <div className="">
      <div className="arrows-area w-fit flex flex-col items-center border-4 border-red-500">
        <ArrowUpSquare />
        <p className="font-semibold text-xs">21.9K</p>
        <ArrowDownSquare />
      </div>
      <div className="main-content">
        <div className="top-area justify between">
          <div>
            <div className="subreddit name">r/formuladank</div>
            <div className="posted by ___ hours ago">Posted by u/formuladanker123 10 hours ago</div>
          </div>
          <Button text="Join" bgColor="bg-reddit-button-blue" textColor="text-white" />
        </div>
        <div className="bottom content of main area">
          <h1>These guys take zero Ws, they're Illiams now</h1>
          <div className="photo if theres a photo">
            <img className="max-h-[480px]" src="https://i.redd.it/i277m1nkai5a1.png" alt="" />
          </div>
          <div className="bottom content of bottom content">
            <div className="comments">
              <ChatSvg />
              <p>1.9K Comments</p>
            </div>
            <div className="share">
              <Arrow90DegRight />
              <p>Share</p>
            </div>
            <div className="save">
              <Bookmark />
              <p>Save</p>
            </div>
            <ThreeDotsSvg />
          </div>
        </div>
      </div>
    </div>
  )
}