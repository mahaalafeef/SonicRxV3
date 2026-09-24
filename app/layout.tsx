import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SonicRx | Smart Drug Delivery Optimization',
  description:
    'SonicRx is developing intelligent, site-responsive drug delivery technologies designed to improve precision in therapeutic delivery.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
