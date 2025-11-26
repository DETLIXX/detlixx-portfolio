import GridButton from '@/components/GridButton'
import GridButtonMail from '@/components/GridButtonMail'
import React from 'react'
import {FaLinkedin, FaGithub} from 'react-icons/fa'

type Props = {}

export default function RightGrid({}: Props) {
  return (
    <div className="grid grid-rows-2 w-full gap-4 max-w-[1000px] ">
      <div className="grid grid-cols-2 gap-4">
        <GridButton
          title="LinkedIn"
          desc="Connect with me"
          href="https://www.linkedin.com/in/matus-balicky/"
          icon={<FaLinkedin className="text-primary" size={30} />}
        />
        <GridButton
          title="Github"
          desc="Check my other work"
          href="https://www.linkedin.com/in/matus-balicky/"
          icon={<FaGithub className="text-white" size={30} />}
        />
      </div>
      <GridButtonMail />
    </div>
  )
}
