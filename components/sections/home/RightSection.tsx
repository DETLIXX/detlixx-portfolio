import WorkCard from '@/components/WorkCard'
import React from 'react'
import {projects} from '@/config/works.config'
import {Divider} from '@heroui/divider'
import RightGrid from '@/components/RightGrid'

type Props = {}

export default function RightSection({}: Props) {
  return (
    <div className="flex flex-col flex-1/2 justify-start items-center p-2 md:p-20 lg:overflow-y-auto overflow-x-hidden mb-10 lg:mb-0">
      {projects.map((x, i) => (
        <div key={i} className="mb-8">
          <WorkCard
            project_name={x.project_name}
            project_description={x.project_description}
            featured_text={x.featured_text}
            images={x.images}
            external_link={x.external_link}
          />
        </div>
      ))}
      <div className="w-full flex justify-center">
        <h1 className="font-medium text-center text-xs lg:text-md text-white/20">
          I CANT SHOW YOU ALL MY PROJECT'S BECUSE SOME ARE UNDER NDA
        </h1>
      </div>
      <Divider className="my-5 opacity-60" />
      <RightGrid />
    </div>
  )
}
