"use client"

import Image from "@/components/Image"
import VideoCard from "@/components/VideoCard"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { api } from "@/helpers/api"
import Link from "next/link"
import { useEffect, useState } from "react"




const VideosPage = () => {
  const [videos, setVideos] = useState([]);
  const [toDisplay, setToDisplay] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all")

  useEffect(() => {
    api.get('/videos')
      .then(res => {
        setVideos(res);
        setToDisplay(res); 
        setIsLoading(false); 
      })
      .catch(e => {
        console.log(e);
        setIsLoading(false);
      });
  }, []);

  const handleFilterClick = (category) => {
    setSelectedCategory(category)
    const newToDisplay = category === 'all'
      ? videos
      : videos.filter(video => category === video.category);

    setToDisplay(newToDisplay);

    console.log(newToDisplay)
  };

  return (
    <>
      <div className="mt-[10em] md:mt-[7em] md:my-20 my-10 gap-5 px-10">
        <h1 style={{ lineHeight: "1.05em" }} className='md:text-5xl text-center text-3xl py-6 font-bold'>Nos activités et prestations en vidéos</h1>
        <p className='text-2xl text-center py-4'>Retrouvez, ici, en vidéos, des séquences de nos séances de performance et de prestations</p>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full md:grid-cols-6 my-5 grid-cols-2">
            <TabsTrigger value="all" onClick={() => handleFilterClick("all")}>Tout</TabsTrigger>
            <TabsTrigger value="evangelisation" onClick={() => handleFilterClick("evangelisation")}>Evangélisation</TabsTrigger>
            <TabsTrigger value="dot" onClick={() => handleFilterClick("dot")}>Dot</TabsTrigger>
            <TabsTrigger value="annif" onClick={() => handleFilterClick("annif")}>Anniversaire</TabsTrigger>
            <TabsTrigger value="child" onClick={() => handleFilterClick("child")}>Sortie d'enfant</TabsTrigger>
            <TabsTrigger value="wedding" onClick={() => handleFilterClick("wedding")}>Mariage</TabsTrigger>
          </TabsList>
          <TabsContent value={selectedCategory}>
              {
                isLoading ? (
                  <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5">
                    <div>
                      <div>
                        <Card className="my-6 w-full">
                            <div>
                              <Skeleton className="w-full h-[150px] rounded-lg "/>
                            </div>
                            <div className="flex items-center py-3 px-2 space-x-4">
                              <div>
                                <Skeleton style={{height:"60px", width:"60px"}} className=" rounded-full" />
                              </div>
                              <div className="space-y-2">
                                <Skeleton className="h-4 w-[7rem]" />
                                <Skeleton className="h-4 w-[10rem]" /> 
                              </div>
                            </div>
                        </Card>
                      </div>
                    </div>
                    <div>
                      <div>
                        <Card className="my-6 w-full">
                            <div>
                              <Skeleton className="w-full h-[150px] rounded-lg "/>
                            </div>
                            <div className="flex items-center py-3 px-2 space-x-4">
                              <div>
                                <Skeleton style={{height:"60px", width:"60px"}} className=" rounded-full" />
                              </div>
                              <div className="space-y-2">
                                <Skeleton className="h-4 w-[7rem]" />
                                <Skeleton className="h-4 w-[10rem]" /> 
                              </div>
                            </div>
                        </Card>
                      </div>
                    </div>
                    <div>
                      <div>
                        <Card className="my-6 w-full">
                            <div>
                              <Skeleton className="w-full h-[150px] rounded-lg "/>
                            </div>
                            <div className="flex items-center py-3 px-2 space-x-4">
                              <div>
                                <Skeleton style={{height:"60px", width:"60px"}} className=" rounded-full" />
                              </div>
                              <div className="space-y-2">
                                <Skeleton className="h-4 w-[7rem]" />
                                <Skeleton className="h-4 w-[10rem]" /> 
                              </div>
                            </div>
                        </Card>
                      </div>
                    </div>
                    <div>
                      <div>
                        <Card className="my-6 w-full">
                            <div>
                              <Skeleton className="w-full h-[150px] rounded-lg "/>
                            </div>
                            <div className="flex items-center py-3 px-2 space-x-4">
                              <div>
                                <Skeleton style={{height:"60px", width:"60px"}} className=" rounded-full" />
                              </div>
                              <div className="space-y-2">
                                <Skeleton className="h-4 w-[7rem]" />
                                <Skeleton className="h-4 w-[10rem]" /> 
                              </div>
                            </div>
                        </Card>
                      </div>
                    </div>
                  </div>
                  
                ) : (
                  toDisplay.length > 0 ? (
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5">
                    {toDisplay.map((video) => (<VideoCard key={video._id} video={video} />))}
                  </div>
                  ) : (
                    <div className=" w-full py-20 space-y-5">
                      <div className="mx-auto flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-primary" width="70" height="70" viewBox="0 0 20 20"><g fill="currentColor"><path d="M2 6.5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" opacity=".2"/><path fillRule="evenodd" d="M2 3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm13.5 1.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 15 6V5a.5.5 0 0 1 .5-.5m1 3h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1A.5.5 0 0 0 17 9V8a.5.5 0 0 0-.5-.5m-1 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m1 3h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5m-13-9h1A.5.5 0 0 1 5 5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 3 6V5a.5.5 0 0 1 .5-.5m1 3h-1A.5.5 0 0 0 3 8v1a.5.5 0 0 0 .5.5h1A.5.5 0 0 0 5 9V8a.5.5 0 0 0-.5-.5m-1 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 3 12v-1a.5.5 0 0 1 .5-.5m1 3h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1A.5.5 0 0 0 5 15v-1a.5.5 0 0 0-.5-.5m2 2.5V4h7v12z" clipRule="evenodd"/><path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"/></g></svg>
                      </div>
                      <div>
                        <p className="font-bold text-3xl text-center">Aucune vidéo disponible</p>
                      </div>
                    </div>
                  )
                )
              }
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

export default VideosPage;