'use client'

import Image from 'next/image'
import React, {useState} from 'react'
import NFHR from '@/public/images/blabla.jpg'
import FHR from '@/public/images/me.jpg'
import {useWork} from '@/providers/useWork'
import {IoIosWarning} from 'react-icons/io'
import {Tooltip} from '@heroui/tooltip'
type Props = {}

export default function Profile({}: Props) {
  const {isWork, config} = useWork()

  return (
    <div className="flex flex-col gap-5">
      <div className="w-[125px] h-[125px] rounded-full p-1  border border-white/20">
        <Tooltip content={'DO NOT SAVE LOL'} placement="right" showArrow>
          <Image
            src={isWork ? FHR : NFHR}
            alt="ProfileImage"
            className="w-full h-full rounded-full object-cover"
          />
        </Tooltip>
      </div>
      <div className="px-2 flex flex-col gap-2">
        <h1 className="text-4xl font-black">{config.name}</h1>
        <p className="text-xl font-medium text-white/50">{config.under_name}</p>

        {!isWork && (
          <div className="flex flex-row gap-2 py-1 px-4 rounded-full ring-1 items-center self-start ring-danger bg-white/10 mt-3">
            <IoIosWarning size={20} />
            <h1>I love to being controversial</h1>
          </div>
        )}

        <div className="mt-5 md:w-[80%] gap-3 max-w-[600px]">
          <h1 className="font-bold text-xl">Bio</h1>

          <h1 className="font-medium text-lg text-white/70">
            {config.description}
          </h1>
        </div>
      </div>
    </div>
  )
}
