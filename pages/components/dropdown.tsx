import { Menu, Transition } from "@headlessui/react";
import { Fragment } from 'react'
import PersonOutline from "./svg/person-outline"
import ChevronDownOutline from "./svg/chevron-down-outline"
import MoonSvg from "./svg/moon";
import InfoCircleSvg from "./svg/info-circle";
import QuestionCircleSvg from "./svg/question-circle";
import CardChecklistSvg from "./svg/card-checklist";
import MegaphoneSvg from "./svg/megaphone";
import BoxArrowRightSvg from "./svg/box-arrow-right";

export default function Dropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {/* Menu Button */}
      <Menu.Button>
        <div className="flex items-center">
          <div className="flex border border-white hover:border-gray-200 px-2 py-[3px] items-center rounded-md">
            <PersonOutline />
            <ChevronDownOutline />
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
        <Menu.Item>
        {({ active }) => (
          <a
            className={`flex ${active && 'bg-blue-500 text-white'} p-3`}
            href="/account-settings"
          >
            <MoonSvg />
            Dark Mode
          </a>
        )}
        </Menu.Item>
        <Menu.Item>
        {({ active }) => (
          <a
            className={`${active && 'bg-blue-500 text-white'} p-3`}
            href="/account-settings"
          >
            <QuestionCircleSvg />
            Help Center
          </a>
        )}
        </Menu.Item>
        <Menu.Item>
        {({ active }) => (
          <a
            className={`${active && 'bg-blue-500 text-white'} p-3`}
            href="/account-settings"
          >
            <InfoCircleSvg />
            More
          </a>
        )}
        </Menu.Item>
        <Menu.Item>
        {({ active }) => (
          <a
            className={`${active && 'bg-blue-500 text-white'} p-3`}
            href="/account-settings"
          >
            <CardChecklistSvg />
            Terms & Policies
          </a>
        )}
        </Menu.Item>
        <Menu.Item>
        {({ active }) => (
          <a
            className={`${active && 'bg-blue-500 text-white'} p-3`}
            href="/account-settings"
          >
            <MegaphoneSvg />
            Advertise on Reddit
          </a>
        )}
        </Menu.Item>
        <Menu.Item>
        {({ active }) => (
          <a
            className={`${active && 'bg-blue-500 text-white'} p-3 rounded-b-md border-t-[1px]`}
            href="/account-settings"
          >
            <BoxArrowRightSvg />
            Log In / Sign Up
          </a>
        )}
        </Menu.Item>
      </Menu.Items>
      </Transition>

    </Menu>
  )
}