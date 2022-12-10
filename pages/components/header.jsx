// header component will be shared across all pages
import Search from "./searchbar"
import Button from "./button"
import Image from 'next/image'
import PersonOutline from "./svg/person-outline"
import ChevronDownOutline from "./svg/chevron-down-outline"
import RedditIcon from "./svg/reddit-icon"
import RedditLogo from "./svg/reddit-logo2"

export default function Header({ children }) {
  return (
    <div className="fixed w-full border-b-[1px]">
      <div className="flex h-12 p-1 items-center justify-between mx-2">
        <div className="flex gap-2">
          <RedditIcon />
          <RedditLogo />
        </div>
        <div>
          <Search width="w-650"/>
        </div>
        <div className="flex gap-4">
          <div>
            <Button text="Get App" bgColor="bg-slate-100" textColor="text-black" />
          </div>
          <div>
            <Button text="Log In" bgColor="bg-orangered" textColor="text-white" />
          </div>
          <div className="flex items-center">
            <div className="flex border border-white hover:border-gray-200 px-2 py-[3px] items-center rounded-md">
              <PersonOutline />
              <ChevronDownOutline />
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}