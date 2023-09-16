import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'chat gpt',
  description: 'Generated chat by ai',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'antialiased min-h-screen pt-18')}>
        {children}
      </body>
    </html>
  )
}
