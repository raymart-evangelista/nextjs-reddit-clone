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
import ChevronDownOutline from './svg/chevron-down-outline'
import styles from './aside.module.css'


export default function Aside() {

  const topicsClass = 'text-gray-500 font-bold text-sm p-4'

  return (
    <div className='z-30 h-full fixed shadow-[0_2px_4px_-1px_#eee] bg-white'>
      <div className="bottom grow-1 overflow-y-auto w-270 pb-16">
        <div className="h-[calc(100vh-40px)] flex flex-col justify-between">
          <div className="flex flex-col">
            <h1 className={topicsClass}>FEEDS</h1>
            <div className='flex gap-2 items-center px-4 py-2 hover:bg-gray-100'>
              <HomeSvg />
              <h1>Home</h1>
            </div>
            <div className='flex gap-2 items-center px-4 py-2 hover:bg-gray-100'>
              <ArrowUpRightSvg />
              <h1>Popular</h1>
            </div>
            <h1 className={topicsClass}>Recent</h1>
            <div>
              <div className='flex justify-between items-center px-4 py-2 hover:bg-gray-100'>
                <h1>r/BuildAPCSales</h1>
              </div>
              <div className='flex justify-between items-center px-4 py-2 hover:bg-gray-100'>
                <h1>r/HipHopHeads</h1>
              </div>
              <div className='flex justify-between items-center px-4 py-2 hover:bg-gray-100'>
                <h1>r/FormulaDank</h1>
              </div>
            </div>
            <h1 className={topicsClass}>Topics</h1>
            <div className='flex justify-between items-center px-4 py-2 hover:bg-gray-100'>
              <div className='flex gap-2 items-center'>
                <GameControllerSvg />
                <h1>Gaming</h1>
              </div>
              <ChevronDownOutline />
            </div>
            <div className='flex justify-between items-center px-4 py-2 hover:bg-gray-100'>
              <div className='flex gap-2 items-center'>
                <BaseballSvg />
                <h1>Sports</h1>
              </div>
              <ChevronDownOutline />
            </div>
            <div className='flex justify-between items-center px-4 py-2 hover:bg-gray-100'>
              <div className='flex gap-2 items-center'>
                <GraphSvg />
                <h1 className={styles.long}>Business, Economics, and Finance</h1>
              </div>
              <ChevronDownOutline />
            </div>
            <div className='flex justify-between items-center px-4 py-2 hover:bg-gray-100'>
              <div className='flex gap-2 items-center'>
                <WebSvg />
                <h1>Crypto</h1>
              </div>
              <ChevronDownOutline />
            </div>
            <div className='flex justify-between items-center px-4 py-2 hover:bg-gray-100'>
              <div className='flex gap-2 items-center'>
                <TvSvg />
                <h1>Television</h1>
              </div>
              <ChevronDownOutline />
            </div>
            <div className='flex justify-between items-center px-4 py-2 hover:bg-gray-100'>
              <div className='flex gap-2 items-center'>
                <StarSvg />
                <h1>Celebrity</h1>
              </div>
              <ChevronDownOutline />
            </div>
            <div className='flex justify-between items-center px-4 py-2 hover:bg-gray-100'>
              <div className='flex gap-2 items-center'>
                <ThreeDotsSvg />
                <h1>More topics</h1>
              </div>
              <ChevronDownOutline />
            </div>
          </div>
          <div className="flex flex-col border-t-[1px] m-8 gap-4">
            <h1 className='mt-4 text-sm font-[350]'>Create an account to follow your favorite communities and start taking part in conversations.</h1>
            <Button text="Join Reddit" bgColor="bg-reddit-button-blue" textColor="text-white"/>
          </div>
        </div>
      </div>
    </div>
  )
}