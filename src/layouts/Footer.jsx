import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='p-10 bg-black text-white'>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6'>
        <div>
          <img src="/Images/logowayisse.png" className='w-[80px]' alt="Logo Wayisse" />
          <div className=' my-auto font-bold'>
          <Link href="#" className='flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className='mr-5 text-primary' width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M2 20V4h20v16zm10-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z" /></svg>
            wayisse@gmail.com
          </Link>
          <p className='flex items-center py-5'>
            <svg xmlns="http://www.w3.org/2000/svg" className='mr-5 text-primary' width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="m12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81zM12 3L2 12h3v8h6v-6h2v6h6v-8h3z" /></svg>
            Calavi, Zogbadjè
          </p>
          <Link href="#" className='flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className='mr-5 text-primary' width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M19 16.5c-1.2 0-2.5-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1c-.3-1.1-.5-2.4-.5-3.6c0-.5-.5-1-1-1H3c-.5 0-1 .5-1 1c0 9.4 7.6 17 17 17c.5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1M4 6h1.5c.1.9.3 1.8.5 2.6L4.8 9.8C4.4 8.6 4.1 7.3 4 6m14 14c-1.3-.1-2.6-.4-3.8-.8l1.2-1.2c.8.2 1.7.4 2.6.4zM16 9V7.5h-3.5L18 2l-1-1l-5.5 5.5V3H10v6zm1-3v1.5h3.5L15 13l1 1l5.5-5.5V12H23V6z" /></svg>
            +229 22 748 274 284
          </Link>
        </div>
        </div>
        <div className='space-y-4'>
          <h2 className='text-2xl mb-5 font-bold'>Liens utiles</h2>
          <div className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" className='text-primary' width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 5H11l5 7l-5 7h4.5l5-7z"/><path fill="currentColor" d="M8.5 5H4l5 7l-5 7h4.5l5-7z"/></svg>
            <Link href="/">
              <p className='text-md font-bold pl-5'>
                Accueil  
              </p>
            </Link>
          </div>
          <div className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" className='text-primary' width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 5H11l5 7l-5 7h4.5l5-7z"/><path fill="currentColor" d="M8.5 5H4l5 7l-5 7h4.5l5-7z"/></svg>
            <Link href="/videos">
              <p className='text-md font-bold  pl-5'>
                Nos activités
              </p>
            </Link>
          </div>
          <div className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" className='text-primary' width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 5H11l5 7l-5 7h4.5l5-7z"/><path fill="currentColor" d="M8.5 5H4l5 7l-5 7h4.5l5-7z"/></svg>
            <Link href="/contact">
              <p className='text-md font-bold  pl-5'>
                Nous contacter
              </p>
            </Link>
          </div>
          <div className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" className='text-primary' width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 5H11l5 7l-5 7h4.5l5-7z"/><path fill="currentColor" d="M8.5 5H4l5 7l-5 7h4.5l5-7z"/></svg>
            <Link href="/blogue">
              <p className='text-md font-bold  pl-5'>
                Blogue
              </p>
            </Link>
          </div>
        </div>
        <div className='space-y-4'>
          <h2 className='text-2xl mb-5 font-bold'>Nous soutenir</h2>
          <div className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" className='text-primary' width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 5H11l5 7l-5 7h4.5l5-7z"/><path fill="currentColor" d="M8.5 5H4l5 7l-5 7h4.5l5-7z"/></svg>
            <Link href="/nous-soutenir">
              <p className='text-md font-bold pl-5'>
                Faire un don
              </p>
            </Link>
          </div>
          <div className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" className='text-primary' width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 5H11l5 7l-5 7h4.5l5-7z"/><path fill="currentColor" d="M8.5 5H4l5 7l-5 7h4.5l5-7z"/></svg>
            <Link href="/nous-soutenir">
              <p className='text-md font-bold  pl-5'>
                Historique de vos dons
              </p>
            </Link>
          </div>
        </div>
        <div className='space-y-4'>
          <h2 className='text-2xl mb-5 font-bold'>Nous suivre</h2>
          <div className='flex items-center space-x-5'>
            <Link href="#" >
              <svg xmlns="http://www.w3.org/2000/svg" className='hover:text-primary'  width="32" height="32" viewBox="0 0 24 24"><g fill="none"><g clip-path="url(#akarIconsFacebookFill0)"><path fill="currentColor" fill-rule="evenodd" d="M0 12.067C0 18.034 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666c.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067" clip-rule="evenodd"/></g><defs><clipPath id="akarIconsFacebookFill0"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></g></svg>
            </Link>
            <Link href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className='hover:text-primary' width="37" height="37" viewBox="0 0 22 22"><path fill="currentColor" d="M19.437 19.937H4.562a2.5 2.5 0 0 1-2.5-2.5V6.563a2.5 2.5 0 0 1 2.5-2.5h14.875a2.5 2.5 0 0 1 2.5 2.5v10.874a2.5 2.5 0 0 1-2.5 2.5M4.562 5.063a1.5 1.5 0 0 0-1.5 1.5v10.874a1.5 1.5 0 0 0 1.5 1.5h14.875a1.5 1.5 0 0 0 1.5-1.5V6.563a1.5 1.5 0 0 0-1.5-1.5Z"/><path fill="currentColor" d="M14.568 11.149L10.6 8.432a1.032 1.032 0 0 0-1.614.851v5.434a1.032 1.032 0 0 0 1.614.851l3.972-2.717a1.031 1.031 0 0 0-.004-1.702"/></svg>
            </Link>
            <Link href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className='hover:text-primary' width="37" height="37" viewBox="0 0 22 22"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5"/><path d="M10 12a3 3 0 1 0 3 3V6c.333 1 1.6 3 4 3"/></g></svg>
            </Link>
            <Link href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className='hover:text-primary' width="32" height="32" viewBox="0 0 20 20"><path fill="currentColor" d="M17.04 17.043h-2.962v-4.64c0-1.107-.023-2.531-1.544-2.531c-1.544 0-1.78 1.204-1.78 2.449v4.722H7.793V7.5h2.844v1.3h.039c.397-.75 1.364-1.54 2.808-1.54c3.001 0 3.556 1.974 3.556 4.545zM4.447 6.194c-.954 0-1.72-.771-1.72-1.72s.767-1.72 1.72-1.72a1.72 1.72 0 0 1 0 3.44m1.484 10.85h-2.97V7.5h2.97zM18.522 0H1.476C.66 0 0 .645 0 1.44v17.12C0 19.355.66 20 1.476 20h17.042c.815 0 1.482-.644 1.482-1.44V1.44C20 .646 19.333 0 18.518 0z"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer