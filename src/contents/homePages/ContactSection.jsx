import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const ContactSection = () => {
  return (
    <div className='text-center py-20 bg-[#ff9f0017]'>
    <h2 className='mb-6   md:px-[5em] lg:px-[10em]  px-10 font-bold text-3xl'>Prêt pour un projet d'animation culturelle et d'évangélisation pour la gloire de Jésus ?</h2>
      <Link href="/contact">
        <Button>Contactez-nous</Button>
      </Link>
    </div>
  )
}

export default ContactSection