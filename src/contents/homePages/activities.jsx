"use client"
import Image from '@/components/Image'
import TagLine from '@/components/TagLine'
import VideoCard from '@/components/VideoCard'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { api } from '@/helpers/api'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Activities = () => {


  
  const [videos, setVideos] = useState([]);


  const fetchData = async () => {
    try {
      const response = await api.get('/videos');
      setVideos(response);
    } catch (error) {
      console.error('Erreur lors de la récupération des vidéos :', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
      <div className=' p-10 md:flex'>
        <div className="mr-15 w-[30rem] flex items-center">
          <div className='py-auto'>
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
              {videos.map((video, index) => (
                <CarouselItem key={index} className="sm:basis-1/1 lg:basis-1/2">
                  <div >
                    <Card className="my-6 w-full">
                     {<VideoCard video={video} />}
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