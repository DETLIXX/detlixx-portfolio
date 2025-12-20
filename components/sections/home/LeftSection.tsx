'use client'

import Profile from '@/components/Profile'
import SocialButtons from '@/components/SocialButtons'
import {useWork} from '@/providers/useWork'
import React, {useState} from 'react'
import {Switch} from '@heroui/switch'
import {TbMoodCrazyHappy} from 'react-icons/tb'
import {MdOutlineWork} from 'react-icons/md'
import UnderProfile from '@/components/NotWork/UnderProfileNonWork'
import {Tooltip} from '@heroui/tooltip'
import ProfileSkillGrid from '@/components/sections/ProfileSkillGrid'
import Link from 'next/link'
import PDFCVCard from '@/components/PDFCVCard'
import {useAptabase} from '@aptabase/react'

export default function LeftSection() {
  const {isWork, config, changeWorkType} = useWork()
  const [isSelected, setIsSelected] = useState(isWork)
  const [animating, setAnimating] = useState(false)
  const [swapContent, setSwapContent] = useState(false)
  const {trackEvent} = useAptabase()

  const onChange = () => {
    trackEvent('switch_click', {
      from: isSelected ? 'work' : 'nonwork',
      to: !isSelected ? 'work' : 'nonwork',
    })

    // začneme slide-out doľava
    setAnimating(true)
    setTimeout(() => {
      // swap obsahu keď je už mimo obrazovky
      changeWorkType()
      setIsSelected(!isSelected)
      setSwapContent(true)
    }, 300) // duration slide-out

    // koniec animácie slide-in
    setTimeout(() => {
      setAnimating(false)
      setSwapContent(false)
    }, 600) // duration slide-out + slide-in
  }

  return (
    <div className="flex flex-1/3 flex-col justify-between gap-5 w-full lg:h-screen p-6 pt-10 lg:p-20 border-r-1 border-white/10">
      {/* Top */}
      <div className="relative h-full w-full">
        <div
          className={`transition-transform duration-300 flex flex-col gap-1 ${
            animating && !swapContent
              ? '-translate-x-full opacity-0' // slide-out doľava
              : swapContent
                ? 'translate-x-0 opacity-100' // slide-in nový obsah
                : 'translate-x-0 opacity-100' // default
          }`}
        >
          <Profile />
          {isWork && <ProfileSkillGrid />}
          {isWork && <PDFCVCard />}{' '}
          {/* slider a klik sa trackuje vo vnútri komponenty */}
          {/* {!isWork && <UnderProfile />} */}
        </div>
      </div>

      {/* Bottom */}
      <div className="h-[50px] w-full flex items-center gap-5 px-2">
        {/* <Tooltip
          content={
            isWork
              ? 'THIS IS NOT FOR CORPORATES, IF YOU SWITCH, ITS ON YOU, YOU BEEN WARNED'
              : 'SWITCH BACK TO MY PRETTY SIDE <3'
          }
          color={isWork ? 'danger' : 'success'}
          placement="right"
          showArrow={true}
        >
          <Switch
            startContent={<TbMoodCrazyHappy />}
            endContent={<MdOutlineWork />}
            className="hover:opacity-55 transition-opacity duration-150"
            color="danger"
            isSelected={isSelected}
            onValueChange={onChange}
          />
        </Tooltip> */}
        <SocialButtons href={config.links.linkedin} icon="linkedin" />
        <SocialButtons href={config.links.github} icon="github" />
        <SocialButtons href={config.links.instagram} icon="instagram" />
      </div>
    </div>
  )
}
