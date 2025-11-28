import React from 'react'
import {MdEmail} from 'react-icons/md'
import {useAptabase} from '@aptabase/react'

type Props = {}

export default function GridButtonMail({}: Props) {
  const {trackEvent} = useAptabase()

  const handleClick = () => {
    trackEvent('email_click', {email: 'contact@detlixx.com'})
  }

  return (
    <a
      href="mailto:contact@detlixx.com"
      onClick={handleClick}
      className="block border h-[100px] border-white/10 hover:border-white/30 transition-all duration-500 group relative rounded-2xl cursor-pointer overflow-hidden px-3"
    >
      <div className="pointer-events-none inset-0 absolute bg-gradient-to-b from-white/20 via-white/5 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
      <div className="w-full h-full flex flex-row items-center">
        <div className="w-full h-full flex flex-row items-center gap-4">
          <div className="p-3 bg-white/10  w-[60px] rounded-full flex justify-center items-center">
            <MdEmail size={32} />
          </div>
          <div className="">
            <h1 className="font-bold">Let's Talk Business</h1>
            <p className="font-light text-white/70">
              Professional inquiries only
            </p>
          </div>
        </div>
      </div>
    </a>
  )
}
