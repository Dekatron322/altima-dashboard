"use client"
import Link from "next/link"
import React, { useState } from "react"
import { Links, SecondLinks } from "./Links"
import { CollapsedLogoIcon, LogoIcon } from "./Icons"

import clsx from "clsx"

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsCollapsed(false)}
      onMouseLeave={() => setIsCollapsed(false)}
      className={clsx("sidebar flex h-full flex-col justify-between border-r border-[#E4E4E4] max-sm:hidden", {
        "w-20": isCollapsed,
        "w-64": !isCollapsed,
      })}
    >
      <div className="h-full justify-between border-0 border-red-700 lg:mt-6 lg:h-auto lg:space-y-4">
        <div className="border-b border-[#E4E4E4] px-7 transition-opacity lg:block">
          <Link href="/">{isCollapsed ? <CollapsedLogoIcon /> : <LogoIcon />}</Link>
        </div>

        <div className="h-full border-b border-[#E4E4E4] lg:h-auto lg:space-y-1 mb-2">
          <Links isCollapsed={isCollapsed} />
        </div>
        <div className="h-full border-b border-[#E4E4E4] lg:h-auto lg:space-y-1">
          <SecondLinks isCollapsed={isCollapsed} />
        </div>
      </div>
      <div className="my-4  items-center flex h-auto border-t px-6  justify-between" >
        <div
          
          className="flex pt-5 items-center space-x-2 border-0 border-black text-[#747A80] "
        >
          <img src="/DashboardImages/Profile.png" />
          <p className="hidden text-xs font-semibold bottom-bar lg:block 2xl:text-base">Official Site</p>
        </div>
        <img src="/DashboardImages/CaretDoubleVertical.png" className="pt-5 icon-style"/>
        <img src="/DashboardImages/CaretDoubleVertical-dark.png" className="pt-5 dark-icon-style"/>
      </div>
    </div>
  )
}

export default SideBar
