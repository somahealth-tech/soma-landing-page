import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const dmSerif = DM_Serif_Display({
  variable: '--font-dm-serif',
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://somahealth.it'),
  title: 'SOMA Health',
  description:
    'SOMA Health organizza la tua documentazione clinica e la rende condivisibile con i tuoi medici — in modo sicuro, semplice e immediato.',
  generator: 'v0.app',
  icons: {
    icon: '/logo.ico',
  },
  openGraph: {
    title: 'SOMA Health',
    description:
      'SOMA Health organizza la tua documentazione clinica e la rende condivisibile con i tuoi medici — in modo sicuro, semplice e immediato.',
    type: 'website',
    locale: 'it_IT',
    siteName: 'SOMA Health',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SOMA Health',
    description:
      'SOMA Health organizza la tua documentazione clinica e la rende condivisibile con i tuoi medici.',
  },
}

export const viewport: Viewport = {
  themeColor: '#0d1b2a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className={`${dmSans.variable} ${dmSerif.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
