'use client'
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {useAptabase} from '@aptabase/react'

type Props = {
  href: string
  icon: keyof typeof ICONS
}

const ICONS = {
  linkedin: FaLinkedin,
  github: FaGithub,
  instagram: AiFillInstagram,
}

export default function SocialButton({href, icon}: Props) {
  const Icon = ICONS[icon]
  const {trackEvent} = useAptabase()

  const handleClick = () => {
    trackEvent('social_click', {platform: icon})
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      <Icon className="w-8 h-8 hover:opacity-55 transition-opacity duration-150" />
    </a>
  )
}
