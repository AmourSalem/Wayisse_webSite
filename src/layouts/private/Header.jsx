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
            <DrawerContent className="pt-[100px] flex items-center text-2xl w-[220px]">
              <aside>
                <ul className="space-y-5">
                  <li className="flex items-center space-x-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z"></path></svg>
                    <a href="/">Accueil</a>
                  </li>
                  <li className='my-3 flex items-center space-x-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 256 256"><path fill="currentColor" d="M216 36H40a20 20 0 0 0-20 20v104a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 120H44V60h168Zm24 52a12 12 0 0 1-12 12H32a12 12 0 0 1 0-24h192a12 12 0 0 1 12 12m-132-80V88a12 12 0 0 1 18.36-10.18l32 20a12 12 0 0 1 0 20.36l-32 20A12 12 0 0 1 104 128"></path></svg>
                    <a href="/dashbord/videos">Vidéos</a>
                  </li>
                  <li className='my-3 flex items-center space-x-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><g fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M2 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-3.586l-3.707 3.707A1 1 0 0 1 6 17v-3H5a3 3 0 0 1-3-3V5zm20 4v6c0 1-.6 3-3 3h-1v3c0 .333-.2 1-1 1c-.203 0-.368-.043-.5-.113L12.613 18H9l3-3h3c1.333 0 4-.8 4-4V6c1 0 3 .6 3 3z" fill="currentColor"></path></g></svg>
                    <a href="/dashbord/contact">Contact</a>
                  </li>
                  <li className='my-3 flex items-center space-x-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M17 2h3a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3V0h2v2h6V0h2zm0 2v2h-2V4H9v2H7V4H5v16h14V4zM7 8h10v2H7zm0 4h10v2H7z"></path></svg>
                    <a href="/dashbord/programme">Programmes</a>
                  </li>
                  <li className='my-3 flex items-center space-x-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15c0-1.09 1.01-1.85 2.7-1.85c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61c0 2.31 1.91 3.46 4.7 4.13c2.5.6 3 1.48 3 2.41c0 .69-.49 1.79-2.7 1.79c-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55c0-2.84-2.43-3.81-4.7-4.4"></path></svg>
                    <a href="/">Soutiens</a>
                  </li>
                  <li className='my-3 flex items-center'>
                    <button className="flex items-center space-x-5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5zm16 7l-4-4v3H9v2h8v3z"></path></svg>
                      <p>Déconnexion</p>
                    </button>
                  </li>
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
