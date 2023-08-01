import Image from 'next/image'
import { SidebarMenuItem } from './SidebarMenuItem';
import { IoBrowsersOutline, IoCalculator, IoFootball, IoLogoReact } from "react-icons/io5";

const menuItems = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline size={40} />,
    title: 'Dashboard',
    subTitle: 'Visualización'
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculator size={40} />,
    title: 'Counter',
    subTitle: 'Contador Client Side'
  },
  {
    path: '/dashboard/pokemons',
    icon: <IoFootball size={40} />,
    title: 'Pokémon\'s',
    subTitle: 'Generación Estática'
  }
]

export function Sidebar() {
  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-screen w-[400px] z-10 text-slate-300 left-0 h-screen overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center gap-2 text-lg md:text-2xl font-bold text-white">
          <IoLogoReact />
          <span>Dash</span>
          <span className='text-blue-500'>8</span>
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt="User Avatar"
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">Jesús Velasco</span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {menuItems.map(item => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  )
}
