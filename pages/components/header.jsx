// header component will be shared across all pages
import Search from "./searchbar"
import Button from "./button"
import Image from 'next/image'
import PersonOutline from "./svg/person-outline"
import ChevronDownOutline from "./svg/chevron-down-outline"
import RedditIcon from "./svg/reddit-icon"
import RedditLogo from "./svg/reddit-logo2"
import Dropdown from "./dropdown"
import { useSession } from 'next-auth/react'
import Link from "next/link"


export default function Header({ children }) {
  const session = useSession()
  return (
    <div className="z-40 fixed top-0 w-full border-b-[1px]">
      <div className="flex h-12 p-1 items-center justify-between px-4 bg-white">
        <div className="flex gap-2">
          <RedditIcon />
          <RedditLogo />
        </div>
        <div>
          <Search width="w-650"/>
        </div>
        <div className="flex gap-4">
          {session.status === 'unauthenticated' && (
            <>
              <div>
                <Button text="Get App" bgColor="bg-slate-100" textColor="text-black" />
              </div>
              <div>
                <Link href="/api/auth/signin">
                  <Button text="Log In" bgColor="bg-orangered" textColor="text-white" />
                </Link>
              </div>
            </>
          )}
          <div className="flex items-center">
            {/* <div className="flex border border-white hover:border-gray-200 px-2 py-[3px] items-center rounded-md">
              <PersonOutline />
              <ChevronDownOutline />
            </div> */}
            <Dropdown />
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}