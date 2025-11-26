'use client'
import LeftSection from '@/components/sections/home/LeftSection'
import RightSection from '@/components/sections/home/RightSection'
import {useState} from 'react'

export default function Index() {
  const [contextOpen, setContextOpen] = useState<boolean>()

  const handleContext = () => {
    setContextOpen(true)

    setTimeout(() => {
      setContextOpen(false)
      console.log('BROTHER DO NOT STEAL MY SHI')
    }, 1)
  }

  if (contextOpen) return null

  return (
    <section
      onContextMenu={handleContext}
      className="flex flex-col lg:flex-row w-screen lg:h-screen lg:overflow-hidden"
    >
      <LeftSection />
      <RightSection />
    </section>
  )
}
