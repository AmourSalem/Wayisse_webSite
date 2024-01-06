"use client"
import Image from '@/components/Image'
import TagLine from '@/components/TagLine'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Link from 'next/link'

const Activities = () => {
  return (
      <div className=' p-10 md:flex'>
        <div className="mr-15 pb-10 flex items-center">
          <div className=''>
            <TagLine text="Nos dernières activités"/>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos a porro animi earum dolorum, obcaecati recusandae iste quia eligendi quisquam labore dolores corporis, aperiam laborum incidunt velit. Illum, minus.</p>
            <Link href="/videos">
              <Button>Voir toutes nos activités</Button>
            </Link>
          </div>
        </div>
        <div className='px-10 lg:w-[70em] md:w-[30em]'>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="sm:basis-1/1 lg:basis-1/2">
                  <div >
                    <Card className="my-6 w-full">
                        <div>
                          <Image src="/Images/image3.jpeg" />
                        </div>
                        <div className='p-2'>
                          <h3 className='font-bold text-lg'> Sortie d'évangélisation</h3>
                          <p className='py-3'>Change your password here. After saving, you'll be logged out.</p>
                          <Link href="#">
                            <Button>Lire plus</Button>
                          </Link>
                        </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
  )
}

export default Activities