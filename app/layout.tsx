import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Quiz App Docs',
  description: 'Step-by-step guide to build a Quiz App with Next.js and TypeScript',
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={<Navbar logo={<b>Quiz App Docs</b>} />}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/anamfalak61/quiz-docs/tree/main"
          footer={<Footer>Quiz App Docs {new Date().getFullYear()}</Footer>}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}