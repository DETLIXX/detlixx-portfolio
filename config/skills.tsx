import {FaReact} from 'react-icons/fa'
import {TbBrandReactNative} from 'react-icons/tb'
import {RiNextjsFill} from 'react-icons/ri'
import {SiNestjs} from 'react-icons/si'
import {BiLogoMongodb} from 'react-icons/bi'
import {SiExpress} from 'react-icons/si'
import {BiLogoTypescript} from 'react-icons/bi'
import {IoIosMore} from 'react-icons/io'

export interface ISkills {
  icon: JSX.Element
  title: string
}

const SIZE = 30

export const skills: ISkills[] = [
  {
    icon: <TbBrandReactNative size={SIZE} />,
    title: 'React Native',
  },
  {
    icon: <RiNextjsFill size={SIZE} />,
    title: 'NextJS',
  },
  {
    icon: <BiLogoTypescript size={SIZE} />,
    title: 'Typescript',
  },
  {
    icon: <SiNestjs size={SIZE} />,
    title: 'NestJS',
  },
  {
    icon: <BiLogoMongodb size={SIZE} />,
    title: 'MongoDB',
  },
  {
    icon: <SiExpress size={SIZE} />,
    title: 'ExpressJS',
  },
  {
    icon: <IoIosMore size={SIZE} />,
    title: 'and more, but not used offten',
  },
]
