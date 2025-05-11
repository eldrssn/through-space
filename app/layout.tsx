import type { Metadata } from 'next'
import Head from 'next/head'
import Script from 'next/script'

import StyledComponentsRegistry from '@/lib/registry'

import './globals.css'

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: 'Through the space',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preload" as="image" href="/images/animated-planets/planet-1.png" />
      </Head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <div id="popups"></div>

        <Script id="viewport-resize-handler" strategy="afterInteractive">
          {`
            const handleWindowResize = () => {
              document.documentElement.style.setProperty('--vh', \`\${window.innerHeight * 0.01}px\`)
            }
            handleWindowResize()
            window.addEventListener('resize', handleWindowResize)
          `}
        </Script>
      </body>
    </html>
  )
}
