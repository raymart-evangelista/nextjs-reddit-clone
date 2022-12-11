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


export default function Aside({ children }) {

  const topicsClass = 'text-gray-500 font-bold text-sm'

  return (
    <div className="border border-red-500 w-270">
      <div className="border border-green-500 w-fit">
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
        <div className="flex flex-col">
          <h1></h1>
        </div>
      </div>
      {children}
    </div>
  )
}