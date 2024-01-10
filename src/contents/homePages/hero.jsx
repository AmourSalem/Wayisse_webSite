import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from '@/components/Image'

const Hero = () => {
  return (
    <div className='grid md:grid-cols-2 mt-[10em] md:mt-[9em] md:my-20 my-10 gap-5 px-10'>
      <div className='md:pr-15 my-auto'>
        <h3 className='font-bold text-primary'>BIENVENU AU </h3>
        <h1 style={{lineHeight:"1.05em"}} className='md:text-5xl text-3xl md:py-2 py-4 font-bold'>Groupe artistique et culturel <span className=' text-primary'>WAYISSE</span></h1>
        <p className='pr-20 text-2xl italic'>Avec chaque battement de tambour, nous faisons résonner l'écho de l'<span className='text-primary font-bold'>Evangile de Christ</span></p>
        <div className='py-4'>
          <Link href='/contact'>
            <Button>
              Nous c
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" className='ml-2' viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m22 2l-7 20l-4-9l-9-4Zm0 0L11 13"/></svg>
            </Button>
          </Link>
          <Link href='/nous-soutenir'>
            <Button className="bg-[black] ml-4" >
              Nous soutenir
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className='ml-2' viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m3 15l5.12-5.12A3 3 0 0 1 10.24 9H13a2 2 0 1 1 0 4h-2.5m4-.68l4.17-4.89a1.88 1.88 0 0 1 2.92 2.36l-4.2 5.94A3 3 0 0 1 14.96 17H9.83a2 2 0 0 0-1.42.59L7 19m-5-5l6 6"/></svg>
            </Button>
          </Link>
        </div>
      </div>
      <div className='flex justify-center items-center '>
        <Image src="/Images/image1.jpeg" alt="hero-wayisse"/>
      </div>
    </div>
  )
}

export default Hero