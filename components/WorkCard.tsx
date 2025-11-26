import Image, {StaticImageData} from 'next/image'
import React from 'react'
import {FiExternalLink} from 'react-icons/fi'

export type TProject = {
  project_name: string
  project_description: string
  images: [StaticImageData, StaticImageData?, StaticImageData?]
  featured_text: string
  external_link: string
}

// THIS (ONLY GALLERY LAYOUT) WAS AI GENERATE, BEACUSE I COULD NOT SET SOME NORMAL LAYOUT FOR GALLERY
// REST OF CODE IS MINE
// !! KEEP COMMENTS FROM AI, BECAUSE I AM DUMB

export default function WorkCard({
  project_name = 'Unknown',
  project_description,
  images,
  featured_text = 'FEATURED PROJECT',
  external_link,
}: TProject) {
  return (
    <a
      href={external_link}
      target="_blank"
      referrerPolicy="origin"
      // FIX: Removed 'h-full'. The card must expand with the image content.
      // Use 'h-auto' (default) or 'h-fit' to ensure content dictates height.
      className="block border border-white/10 max-w-[1000px] hover:border-white/30 transition-all duration-500 group relative rounded-2xl cursor-pointer overflow-hidden "
    >
      {/* BACKDROP SHADOW */}
      <div className="pointer-events-none inset-0 absolute bg-gradient-to-b from-white/20 via-white/5 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

      {/* HEADER */}
      <div className="w-full h-[100px] flex flex-row justify-between p-10 group-hover:-translate-y-1 transition-all duration-500">
        <div className="border border-white/20 rounded-full flex justify-center items-center gap-2 self-start px-3 py-1">
          <div className="w-[10px] h-[10px] bg-red-500 rounded-full ">
            <div className="w-[10px] h-[10px] bg-red-500 rounded-full animate-ping"></div>
          </div>
          <p className="text-small">{featured_text}</p>
        </div>
        <div>
          <FiExternalLink size={20} />
        </div>
      </div>

      {/* PROJECT INFO */}
      <div className="p-10 pt-0 flex flex-col gap-2 group-hover:-translate-y-1 transition-all duration-500">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-black">{project_name}</h1>
          <p className="font-medium text-lg text-white/70 lg:w-[60%]">
            {project_description || 'Empty'}
          </p>
        </div>

        {/* IMAGE GALLERY */}
        {images.length >= 3 && (
          <div className="grid grid-cols-2 gap-4 mt-6">
            {/* 1. Left Top Image (Square - Dictates Row 1 Height) */}
            <div className="relative w-full aspect-square rounded-xl overflow-hidden">
              <Image
                src={images[0]}
                alt={`${project_name}_image_0`}
                fill
                className="object-cover"
              />
            </div>

            {/* 2. Right Image (Spans 2 Rows) 
               We do NOT set an aspect ratio here. We set 'h-full'.
               This forces it to stretch to exactly match the height of the left column (Image 1 + Gap + Image 3). */}
            <div className="relative w-full row-span-2 rounded-xl overflow-hidden h-full">
              <Image
                src={images[1]!} // ! asserts it exists based on check above
                alt={`${project_name}_image_1`}
                fill
                className="object-cover"
              />
            </div>

            {/* 3. Left Bottom Image (Square - Dictates Row 2 Height) */}
            <div className="relative w-full aspect-square rounded-xl overflow-hidden">
              <Image
                src={images[2]!}
                alt={`${project_name}_image_2`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </a>
  )
}
