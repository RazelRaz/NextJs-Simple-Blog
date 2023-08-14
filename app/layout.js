
import Menu from '@/components/Menu'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextJs Simple Blog',
  description: 'A Simple Blog Website with Next.js 13',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu></Menu>
        {children}
      </body>
    </html>
  )
}
