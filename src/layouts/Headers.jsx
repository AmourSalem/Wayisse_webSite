"use client"
import { Button } from "@/components/ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import Link from "next/link"


// ... (importations)

const Headers = () => {
  return (
    <div className="fixed w-full mb-[10em] top-0 bg-[#fff]" style={{ zIndex: "50" }}>
      <div className='flex justify-between px-10 py-5'>
        <div>
          <img src="/Images/logowayisse.png" className='w-[60px]' alt="Logo Wayisse" />
        </div>
        <div className="flex text-2xl">
          <nav className='items-center flex'>
            <ul className='flex items-center md:flex hidden'>
              <li><a href="/" className="nav-link">Accueil</a></li>
              <li className='mx-3'><a href="/videos" className="nav-link">Vidéos</a></li>
              <li className='mr-3'><a href="/contact" className="nav-link">Contact</a></li>
              <li className='mr-3'><a href="/" className="nav-link">Blogue</a></li>
            </ul>
            <Link href='/nous-soutenir' className="flex items-center">
              <Button> Nous soutenir</Button>
            </Link>
          </nav>
          <Drawer>
            <DrawerTrigger asChild>
            <button  className="ml-4 md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="M5 3.75A.75.75 0 0 1 5.75 3h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 5 3.75m1 8a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75M2.75 7a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5z"/></svg>
            </button>
            </DrawerTrigger>
            <DrawerContent className="pt-20 text-center text-2xl">
              <nav>
                <ul>
                  <li><a href="/">Accueil</a></li>
                  <li className='my-3'><a href="/videos">Vidéos</a></li>
                  <li className='my-3'><a href="/contact">Contact</a></li>
                  <li className='my-3'><a href="/">Blogue</a></li>
                </ul>
                <Link href='/nous-soutenir' className="flex justify-center mt-10">
                  <Button> Nous soutenir</Button>
                </Link>
              </nav>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  )
}

export default Headers;
