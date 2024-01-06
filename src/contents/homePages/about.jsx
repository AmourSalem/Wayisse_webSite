import Image from '@/components/Image'
import TagLine from '@/components/TagLine'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'

const About = () => {
  return (
    <div className=' px-10 md:py-20 py-10'>
      <div className="flex justify-center pb-10">
        <TagLine text="A propos de nous"/>
      </div>
      <div className='grid md:grid-cols-2 gap-10'>
        <div>
          <Image src="/Images/image2.jpeg" alt="" />
        </div>
        <div>
        <Tabs defaultValue="vision" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="vision">Notre vision</TabsTrigger>
            <TabsTrigger value="mission">Notre mission</TabsTrigger>
            <TabsTrigger value="goals">Nos objectifs</TabsTrigger>
          </TabsList>
          <TabsContent value="vision">
            <div className='md:py-20 pt-5'>
              <h2 className='text-center text-primary text-2xl font-bold '>Notre vision</h2>
              <p className='text-xl font-bold py-8 italic text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consequatur, animi dignissimos a nihil quos inventore ex reiciendis. Explicabo cupiditate possimus voluptate ut aut 
              </p>
              <h2 className='text-center text-primary text-2xl font-bold pb-5'>Un verset biblique ici</h2>
              <svg xmlns="http://www.w3.org/2000/svg" className='text-primary mx-auto my-5' width="28" height="32" viewBox="0 0 448 512"><path fill="currentColor" d="M96 0C43 0 0 43 0 96v320c0 53 43 96 96 96h320c17.7 0 32-14.3 32-32s-14.3-32-32-32v-64c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32h-32zm0 384h256v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32M208 80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48v112c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V192h-48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48z"/></svg>
            </div>
          </TabsContent>
          <TabsContent value="mission">
            <div className='lg:py-20 pt-5'>
              <h2 className='text-center text-primary text-2xl font-bold '>Notre mission</h2>
              <p className='text-xl font-bold py-8 italic text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consequatur, animi dignissimos a nihil quos inventore ex reiciendis. Explicabo cupiditate possimus voluptate ut aut 
              </p>
              <h2 className='text-center  text-primary text-2xl font-bold pb-5'>Un verset biblique ici</h2>
              <svg xmlns="http://www.w3.org/2000/svg" className='text-primary mx-auto my-5' width="28" height="32" viewBox="0 0 448 512"><path fill="currentColor" d="M96 0C43 0 0 43 0 96v320c0 53 43 96 96 96h320c17.7 0 32-14.3 32-32s-14.3-32-32-32v-64c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32h-32zm0 384h256v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32M208 80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48v112c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V192h-48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48z"/></svg>
            </div>
          </TabsContent>
          <TabsContent value="goals">
            <div className='md:py-10 pt-5'>
              <h2 className='text-center text-primary text-2xl font-bold '>Nos objectifs</h2>
              <div className="py-8">
                <div className='flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='text-primary' width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 5H11l5 7l-5 7h4.5l5-7z"/><path fill="currentColor" d="M8.5 5H4l5 7l-5 7h4.5l5-7z"/></svg>
                  <p className='text-md font-bold italic pl-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consequatur, animi 
                  </p>
                </div>
                <div className='flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='text-primary' width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 5H11l5 7l-5 7h4.5l5-7z"/><path fill="currentColor" d="M8.5 5H4l5 7l-5 7h4.5l5-7z"/></svg>
                  <p className='text-md font-bold italic pl-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consequatur, animi 
                  </p>
                </div>
                <div className='flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='text-primary' width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 5H11l5 7l-5 7h4.5l5-7z"/><path fill="currentColor" d="M8.5 5H4l5 7l-5 7h4.5l5-7z"/></svg>
                  <p className='text-md font-bold italic pl-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consequatur, animi 
                  </p>
                </div>
                <div className='flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='text-primary' width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 5H11l5 7l-5 7h4.5l5-7z"/><path fill="currentColor" d="M8.5 5H4l5 7l-5 7h4.5l5-7z"/></svg>
                  <p className='text-md font-bold italic pl-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consequatur, animi 
                  </p>
                </div>
                <div className='flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='text-primary' width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 5H11l5 7l-5 7h4.5l5-7z"/><path fill="currentColor" d="M8.5 5H4l5 7l-5 7h4.5l5-7z"/></svg>
                  <p className='text-md font-bold italic pl-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consequatur, animi 
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        </div>
      </div>
    </div>
  )
}

export default About