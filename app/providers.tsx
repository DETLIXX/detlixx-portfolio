'use client'

import type {ThemeProviderProps} from 'next-themes'

import * as React from 'react'
import {HeroUIProvider} from '@heroui/system'
import {useRouter} from 'next/navigation'
import {ThemeProvider as NextThemesProvider} from 'next-themes'
import {WorkProvider} from '@/providers/useWork'

export interface ProvidersProps {
  children: React.ReactNode
  themeProps?: ThemeProviderProps
}

export function Providers({children, themeProps}: ProvidersProps) {
  const router = useRouter()

  return (
    <HeroUIProvider navigate={router.push}>
      <WorkProvider>
        <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
      </WorkProvider>
    </HeroUIProvider>
  )
}
