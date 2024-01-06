import TagLine from '@/components/TagLine'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const Services = () => {
  return (
    <div className='pb-10 px-10'>
      <div className='justify-center items center flex pb-10'>
        <TagLine text="Nos services/ prestations"/>
      </div>
      <div>
        <p className='text-center -mt-5'>Nous offrons plusieurs prestations basées sur nos rythmes locaux béninois afin de prêcher l'évangile. </p>
      </div>
      <div className='grid md:grid-cols-2 xl:grid-cols-3  gap-5 mt-10'>  
        <CardItem 
            svg={
              <svg xmlns="http://www.w3.org/2000/svg" className='mx-auto' width="28" height="32" viewBox="0 0 448 512"><path fill="currentColor" d="M96 0C43 0 0 43 0 96v320c0 53 43 96 96 96h320c17.7 0 32-14.3 32-32s-14.3-32-32-32v-64c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32h-32zm0 384h256v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32M208 80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48v112c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V192h-48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48z"/></svg> } 
            title='Animation de mariage'
            description="Loremehe h xheh"
          />
          
        <CardItem 
            svg={
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 448 512"><path fill="currentColor" d="M96 0C43 0 0 43 0 96v320c0 53 43 96 96 96h320c17.7 0 32-14.3 32-32s-14.3-32-32-32v-64c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32h-32zm0 384h256v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32M208 80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48v112c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V192h-48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48z"/></svg> } 
            title="Sortie d'enfant"
            description="Loremehe h xheh"
          />
          
        <CardItem 
            svg={
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 448 512"><path fill="currentColor" d="M96 0C43 0 0 43 0 96v320c0 53 43 96 96 96h320c17.7 0 32-14.3 32-32s-14.3-32-32-32v-64c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32h-32zm0 384h256v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32M208 80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48v112c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V192h-48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48z"/></svg> } 
            title='Animation de funérailles'
            description="Loremehe h xheh"
          />
          
        <CardItem 
            svg={
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 448 512"><path fill="currentColor" d="M96 0C43 0 0 43 0 96v320c0 53 43 96 96 96h320c17.7 0 32-14.3 32-32s-14.3-32-32-32v-64c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32h-32zm0 384h256v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32M208 80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48v112c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V192h-48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48z"/></svg> } 
            title='Evangélisation'
            description="Loremehe h xheh"
          />
          
        <CardItem 
            svg={
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 448 512"><path fill="currentColor" d="M96 0C43 0 0 43 0 96v320c0 53 43 96 96 96h320c17.7 0 32-14.3 32-32s-14.3-32-32-32v-64c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32h-32zm0 384h256v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32M208 80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48v112c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V192h-48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48z"/></svg> } 
            title='Cérémonies de dot'
            description="Loremehe h xheh"
          />
          
        <CardItem 
            svg={
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 448 512"><path fill="currentColor" d="M96 0C43 0 0 43 0 96v320c0 53 43 96 96 96h320c17.7 0 32-14.3 32-32s-14.3-32-32-32v-64c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32h-32zm0 384h256v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32M208 80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48v112c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V192h-48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48z"/></svg> } 
            title='Evangélisation'
            description="Animation d'anniversaires"
          />
        </div>
      </div>
  )
}

export default Services



function CardItem({ svg, title, description }) {
  return (
    <Card className="relative my-5 bg-[#ff9f0017] duration-500 border-2 border-transparent hover:border-amber-500">
      <CardHeader className="flex items-center justify-center text-center py-10">
        <div className="absolute top-1 left-1/2 text-primary transform -translate-x-1/2 -translate-y-1/2">
          {svg}
        </div>
        <CardTitle className="py-3">
          {title}
        </CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
