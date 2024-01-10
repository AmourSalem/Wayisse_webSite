"use client"
import './globals.css'
import Headers from '@/layouts/public/Headers'
import Footer from '@/layouts/public/Footer'
import { usePathname } from 'next/navigation'
import Sidebar from '@/layouts/private/Sidebar'
import Header from '@/layouts/private/Header'


export default function RootLayout({ children }) {


  const path = usePathname();
  const isPrivatePage = path.startsWith("/dashbord");


if(isPrivatePage) {
  return(
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
  return (
    <html lang="en">
      <body>
        <Headers />
        {children}
        <Footer />
      </body>
    </html>
  )
}
