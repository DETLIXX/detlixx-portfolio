'use client'

import React from 'react'
import {FaBuilding} from 'react-icons/fa6'
import {MdAlternateEmail} from 'react-icons/md'

type Props = {}

export default function UnderProfileWork({}: Props) {
  function calculateAge(birthYear: number) {
    const currentYear = new Date().getFullYear()
    return currentYear - birthYear
  }

  return (
    <div className="px-2 flex flex-col gap-3 max-w-[700px]">
      <div className="flex flex-col gap-3 mt-10">
        <h1 className="font-bold text-xl">LOCATION & CONTACT</h1>

        <ul className="flex flex-col gap-3">
          <li className="flex items-center gap-3">
            <FaBuilding className="text-white/70 text-xl" />
            <span className="font-medium">Bratislava, Slovakia</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
