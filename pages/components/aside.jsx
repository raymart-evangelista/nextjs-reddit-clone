// aside component will be shared across all pages
import HomeSvg from './svg/home'
import ArrowUpRightSvg from './svg/arrow-up-right'
import GameControllerSvg from './svg/game-controller'
import BaseballSvg from './svg/baseball'
import GraphSvg from './svg/graph'
import WebSvg from './svg/web'
import TvSvg from './svg/tv'
import StarSvg from './svg/star'
import ThreeDotsSvg from './svg/three-dots'
import Button from './button'


export default function Aside({ children }) {

  const topicsClass = 'text-gray-500 font-bold text-sm'

  return (
    <div className='z-30 h-full fixed shadow-[0_2px_4px_-1px_#eee] bg-white border border-red-500'>
      <div className="bottom grow-1 overflow-y-auto w-270 pb-16 ">
        <div className="w-full flex flex-col justify-between">
          <div className="flex flex-col">
            <h1 className={topicsClass}>FEEDS</h1>
            <div className='flex'>
              <HomeSvg />
              <h1>Home</h1>
            </div>
            <div className='flex'>
              <ArrowUpRightSvg />
              <h1>Popular</h1>
            </div>
            <h1 className={topicsClass}>Recent</h1>
            <div>
              <h1>r/svg</h1>
              <h1>r/rails</h1>
              <h1>r/nextjs</h1>
            </div>
            <h1 className={topicsClass}>topics</h1>
            <div className='flex'>
              <GameControllerSvg />
              <h1>Gaming</h1>
            </div>
            <div className='flex'>
              <BaseballSvg />
              <h1>Sports</h1>
            </div>
            <div className='flex'>
              <GraphSvg />
              <h1>Business, Economics, and Finance</h1>
            </div>
            <div className='flex'>
              <WebSvg />
              <h1>Crypto</h1>
            </div>
            <div className='flex'>
              <TvSvg />
              <h1>Television</h1>
            </div>
            <div className='flex'>
              <StarSvg />
              <h1>Celebrity</h1>
            </div>
            <div className='flex'>
              <ThreeDotsSvg />
              <h1>More topics</h1>
            </div>
          </div>
          <div className="flex flex-col border-t-[1px] m-6 gap-5">
            <h1 className='mt-3'>Create an account to follow your favorite communities and start taking part in conversations.</h1>
            <Button text="Join Reddit" bgColor="bg-blue-500" textColor="text-white"/>
          </div>
        </div>
      </div>
    </div>
  )
}