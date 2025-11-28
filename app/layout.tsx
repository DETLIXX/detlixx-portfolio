import '@/styles/globals.css'
import {Metadata, Viewport} from 'next'
import {Link} from '@heroui/link'
import clsx from 'clsx'
import {AptabaseProvider} from '@aptabase/react'

import {Providers} from './providers'

import {siteConfig} from '@/config/site'
import {fontSans} from '@/config/fonts'

export const metadata: Metadata = {
  title: {
    default: '‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ',
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'DETLIXX',
    'detlixx',
    '@detlixx',
    'Matus Balicky',
    'Balicky',
    'RevUp',
    'Astralne Car Meets',
    'Loyalli',
    'Little Savings',
  ],
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          'min-h-screen text-foreground bg-black font-sans antialiased overflow-x-hidden scrollbar-hide',
          fontSans.variable
        )}
      >
        <AptabaseProvider
          appKey="A-SH-6349758940"
          options={{
            host: 'https://rn.detlixx.com',
            appVersion: '1',
          }}
        >
          <Providers themeProps={{attribute: 'class', defaultTheme: 'dark'}}>
            <main>{children}</main>
          </Providers>
        </AptabaseProvider>
      </body>
    </html>
  )
}
