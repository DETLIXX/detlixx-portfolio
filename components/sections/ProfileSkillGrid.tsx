import React from 'react'
import {skills} from '../../config/skills'
import ProfileSkillsCard from '@/components/ProfileSkillsCard'

type Props = {}

// NOT GRID ANYMORE ITS FLEX BUT KEEP NAME
export default function ProfileSkillGrid({}: Props) {
  return (
    <div className="flex gap-3 flex-col px-2 mt-5 w-full">
      <div className="flex flex-wrap flex-row gap-1">
        {skills.map((x, i) => {
          return (
            <ProfileSkillsCard
              key={`${i}_skill`}
              icon={x.icon}
              title={x.title}
            />
          )
        })}
      </div>
    </div>
  )
}
