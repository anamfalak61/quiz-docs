import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Poppins } from 'next/font/google'
import 'nextra-theme-docs/style.css'
import './globals.css'
import Logo from '../components/Logo'
import type { ReactNode } from 'react'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Quiz App Docs',
  description: 'Step-by-step guide to build a Weather Dashboard with Next.js and TypeScript',git
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={poppins.variable} suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={<Navbar logo={<Logo />} />}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/anamfalak61/quiz-docs/tree/main"
        footer={<Footer>© 2026 Anam Falak. Weather Dashboard Docs.</Footer>}
          nextThemes={{ defaultTheme: 'light' }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}