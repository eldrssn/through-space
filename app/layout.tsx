import type { Metadata } from 'next'
import './globals.css'
import StyledComponentsRegistry from '@/lib/registry'
import Script from 'next/script'

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
