import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from 'react'
import PersonOutline from "./svg/person-outline"
import ChevronDownOutline from "./svg/chevron-down-outline"
import MoonSvg from "./svg/moon";
import InfoCircleSvg from "./svg/info-circle";
import QuestionCircleSvg from "./svg/question-circle";
import CardChecklistSvg from "./svg/card-checklist";
import MegaphoneSvg from "./svg/megaphone";
import BoxArrowRightSvg from "./svg/box-arrow-right";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import GearSvg from "./svg/gear";
import { Router } from "next/router";

export default function Dropdown() {
  const session = useSession()
  return (
    <Menu as="div" className="relative inline-block text-left">
      {/* Menu Button */}
      <Menu.Button>
        <div className="flex items-center">
          <div className="flex border border-white hover:border-gray-200 px-2 py-[3px] items-center rounded-md">
            {session.status === 'unauthenticated' && (
              <PersonOutline />
            )}
            {session.status === 'authenticated' && (
              <div className="flex gap-2">
                {session.data.user.username}
                <PersonOutline />
              </div>
            )}
            <ChevronDownOutline className="text-gray-400" />
          </div>
        </div>
      </Menu.Button>
      {/* Menu Items Transition */}
      <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="rounded-md absolute right-0 bg-white w-48 flex flex-col pt-2 border border-gray-200">
        <Menu.Item  disabled={session.status === 'authenticated' ? false : true}>
          {({ active, disabled }) => (
            <Link
              className={`flex items-center 
              ${disabled ? "text-gray-400 pointer-events-none" : active && 'bg-blue-500 text-white'} p-3 gap-3 text-sm font-[450]`}
              href="/settings"
            >
              <GearSvg className="overflow-visible" />
              User Settings
            </Link>
          )}
          </Menu.Item>
          <Menu.Item disabled>
          {({ active, disabled }) => (
            <a
              className={`flex items-center 
              ${disabled ? "text-gray-400 pointer-events-none" : active && 'bg-blue-500 text-white'} p-3 gap-3 text-sm font-[450]`}
              href="/dark-mode"
            >
              <MoonSvg className="overflow-visible" />
              Dark Mode
            </a>
          )}
          </Menu.Item>
          <Menu.Item disabled>
          {({ active, disabled }) => (
            <a
              className={`flex items-center 
              ${disabled ? "text-gray-400 pointer-events-none" : active && 'bg-blue-500 text-white'} p-3 gap-3 text-sm font-[450]`}
              href="/account-settings"
            >
              <QuestionCircleSvg className="overflow-visible" />
              Help Center
            </a>
          )}
          </Menu.Item>
          <Menu.Item disabled>
          {({ active, disabled }) => (
            <a
              className={`flex items-center justify-between pr-4
              ${disabled ? "text-gray-400 pointer-events-none" : active && 'bg-blue-500 text-white'} p-3 gap-3 text-sm font-[450]`}
              href="/account-settings"
            >
              <div className="flex gap-3 items-center">
                <InfoCircleSvg className="overflow-visible" />
                More
              </div>
              <ChevronDownOutline className={`${active && 'text-white'}`} />
            </a>
          )}
          </Menu.Item>
          <Menu.Item disabled>
          {({ active, disabled }) => (
            <a
              className={`flex items-center justify-between pr-4
              ${disabled ? "text-gray-400 pointer-events-none" : active && 'bg-blue-500 text-white'} p-3 gap-3 text-sm font-[450]`}
              href="/account-settings"
            >
              <div className="flex gap-3 items-center">
                <CardChecklistSvg className="overflow-visible" />
                Terms & Policies
              </div>
              <ChevronDownOutline className={`${active && 'text-white'} overflow-visible`} />
            </a>
          )}
          </Menu.Item>
          <Menu.Item disabled>
          {({ active, disabled }) => (
            <a
              className={`flex items-center 
              ${disabled ? "text-gray-400 pointer-events-none" : active && 'bg-blue-500 text-white'} p-3 gap-3 text-sm font-[450]`}
              href="/account-settings"
            >
              <MegaphoneSvg className="overflow-visible" />
              Advertise on Reddit
            </a>
          )}
          </Menu.Item>
          <Menu.Item>
          {({ active, disabled }) => (
            <Link
            className={`flex items-center 
              ${disabled ? "text-gray-400 pointer-events-none" : active && 'bg-blue-500 text-white'} p-3 gap-3 text-sm rounded-b-md border-t-[1px] font-[450]`}
              href={`${session.status === 'unauthenticated' ? "/api/auth/signin" : "/api/auth/signout" }`}
            >
              <BoxArrowRightSvg className="overflow-visible" />
              {session.status === 'unauthenticated' ? "Log In / Sign Up" : 'Sign Out'}
            </Link>
          )}
          </Menu.Item>
        </Menu.Items>
      </Transition>

    </Menu>
  )
}