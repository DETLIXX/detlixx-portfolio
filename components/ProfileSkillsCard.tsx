import {ISkills} from '@/config/skills'
import {Tooltip} from '@heroui/tooltip'
import React from 'react'
import {TbBrandReactNative} from 'react-icons/tb'

export default function ProfileSkillsCard({icon, title}: ISkills) {
  return (
    <Tooltip content={title} placement="bottom">
      <div className="border border-white/10 max-w-[1000px] hover:border-white/30 transition-all duration-500 group relative rounded-xl cursor-pointer overflow-hidden self-start h-[50px] w-[50px] p-1 justify-center items-center flex">
        <div className="pointer-events-none inset-0 absolute bg-gradient-to-b from-white/20 via-white/5 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
        <div className="group-hover:opacity-60 transition-all duration-500">
          {icon ? icon : <TbBrandReactNative size={50} />}
        </div>
      </div>
    </Tooltip>
  )
}
