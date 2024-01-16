"use client"
import './globals.css'
import Headers from '@/layouts/public/Headers'
import Footer from '@/layouts/public/Footer'
import { usePathname } from 'next/navigation'
import Header from '@/layouts/private/Header'


export default function RootLayout({ children }) {


  const path = usePathname();
  const isPrivatePage = path.startsWith("/dashbord");


if(isPrivatePage) {
  return(
    <html lang="en">
      <body style={{fontFamily:'Montserrat,sans-serif '} } className='bg-[#80808014]'>
        <Header />
        {children}
      </body>
    </html>
  )
}
  return (
    <html lang="en">
    <body style={{fontFamily:'Montserrat,sans-serif'}}>
        <Headers />
        {children}
        <Footer />
      </body>
    </html>
  )
}
