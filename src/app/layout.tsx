import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

import Header from './components/Header'
import Footer from './components/Footer'
import { AuthProvider } from '@/context/AuthContext'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Personal portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans`}>
      <body className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
        <AuthProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster position="top-right" />
        </AuthProvider>
      </body>
    </html>
  )
}