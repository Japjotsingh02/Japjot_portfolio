import type { Metadata } from 'next'
import { Instrument_Serif, DM_Sans, DM_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Japjot Singh | Full Stack Developer',
  description:
    'Full stack developer building clean, performant interfaces and data-driven products. Based in Delhi, India.',
  keywords: [
    'Japjot Singh',
    'Full Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Delhi',
    'India',
  ],
  authors: [{ name: 'Japjot Singh' }],
  openGraph: {
    title: 'Japjot Singh | Full Stack Developer',
    description:
      'Full stack developer building clean, performant interfaces and data-driven products.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${instrumentSerif.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
