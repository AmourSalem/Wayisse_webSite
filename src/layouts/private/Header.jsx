"use client"
import { Button } from "@/components/ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import Link from "next/link"


const Header = () => {
  return (
    <header className="fixed w-full mb-[10em] top-0 bg-[#fff]" style={{ zIndex: "20" }}>
      <div className='flex justify-between px-5 py-2'>
        <div>
          <img src="/Images/logowayisse.png" className='w-[40px]' alt="Logo Wayisse" />
        </div>
        <div className="flex text-2xl">
          <Drawer>
            <DrawerTrigger asChild>
            <button >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="M5 3.75A.75.75 0 0 1 5.75 3h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 5 3.75m1 8a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75M2.75 7a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5z"/></svg>
            </button>
            </DrawerTrigger>
            <DrawerContent className="pt-[100px] flex items-center text-center text-2xl w-[200px]">
              <aside>
                <ul className="space-y-5">
                  <li><a href="/">Accueil</a></li>
                  <li className='my-3'><a href="/videos">Vidéos</a></li>
                  <li className='my-3'><a href="/contact">Contact</a></li>
                  <li className='my-3'><a href="/">Blogue</a></li>
                  <li className='my-3'><a href="/">Soutiens</a></li>
                  <li className='my-3'><a href="/">Programme</a></li>
                </ul>
              </aside>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  )
}

export default Header;
