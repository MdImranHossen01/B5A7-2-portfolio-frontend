import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './components/AuthProvider'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Md Imran Hossen | Best Web Application Developer in Bangladesh',
  description: 'Meet Md Imran Hossen — a passionate web application developer from Bangladesh who builds fast, secure, and user-friendly web apps to elevate your digital presence.',
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
          
          <main className="flex-grow">{children}</main>
          
          <Toaster position="top-right" />
        </AuthProvider>
      </body>
    </html>
  )
}