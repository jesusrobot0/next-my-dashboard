'use client'

import { usePathname } from 'next/navigation'

interface Props {
  path: string,
  icon: JSX.Element,
  title: string,
  subTitle: string
}

export function SidebarMenuItem({ path, icon, title, subTitle }: Props) {
  const currentPath = usePathname()
  return (
    <a
      href={path}
      className={`${currentPath === path && 'bg-blue-800'} w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150`}
    >
      <div>
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">
          {title}
        </span>
        <span className="text-sm text-white/50 hidden md:block">
          {subTitle}
        </span>
      </div>
    </a>
  )
}
