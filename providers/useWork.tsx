import {workTypeConfig} from '@/config/workType'
import {createContext, useContext, useEffect, useState} from 'react'

interface IWebsiteProvider {
  children: React.ReactNode
}

interface IWorkProvider {
  isWork: boolean
  config: WorkConfig
  changeWorkType: () => void
}

type WorkConfig = typeof workTypeConfig.work

const WorkTypeContext = createContext<IWorkProvider | undefined>(undefined)

export const WorkProvider = ({children}: IWebsiteProvider) => {
  const [isWork, setIsWork] = useState(true)
  const [config, setConfig] = useState<WorkConfig>(workTypeConfig.work)

  useEffect(() => {
    setConfig(isWork ? workTypeConfig.work : workTypeConfig.not_work)
  }, [isWork])

  const changeWorkType = () => setIsWork((prev) => !prev)

  return (
    <WorkTypeContext.Provider value={{isWork, config, changeWorkType}}>
      {children}
    </WorkTypeContext.Provider>
  )
}

export const useWork = () => {
  const cx = useContext(WorkTypeContext)

  if (!cx) {
    throw new Error('useWork must be used inside WorkProvider')
  }

  return cx
}
