import React from 'react'
import {FiExternalLink} from 'react-icons/fi'
import {useAptabase} from '@aptabase/react'

type Props = {
  href: string
  icon: JSX.Element
  title: string
  desc: string
}

export default function GridButton({href, icon, title, desc}: Props) {
  const {trackEvent} = useAptabase()

  const handleClick = () => {
    trackEvent('grid_button_click', {title, href})
  }

  return (
    <a
      href={href}
      target="_blank"
      referrerPolicy="origin"
      onClick={handleClick}
      className="block border border-white/10 hover:border-white/30 transition-all duration-500 group relative rounded-2xl cursor-pointer overflow-hidden"
    >
      <div className="flex flex-col p-5 gap-5">
        <div className="pointer-events-none inset-0 absolute bg-gradient-to-b from-white/20 via-white/5 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
        {/* HEADER */}
        <div className="w-full flex flex-row justify-between  group-hover:-translate-y-1 transition-all duration-500">
          <div className="border border-white/20 rounded-xl flex justify-center items-center gap-2 self-start p-2">
            <p className="text-small">{icon}</p>
          </div>
          <div>
            <FiExternalLink size={20} />
          </div>
        </div>

        {/* DETAILS */}
        <div className="flex flex-col ">
          <h1 className="text-white font-bold">{title}</h1>
          <p className="text-white/70 ">{desc}</p>
        </div>
      </div>
    </a>
  )
}
