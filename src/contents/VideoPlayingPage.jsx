"use client"

import VideoPlayer from '@/components/VideoPlayer';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { api } from '@/helpers/api';
import React, { useEffect, useState } from 'react'

function VideoPlayingPage({id}) {
  const [video, setVideo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      api.get(`/videos/${id}`)
        .then((res) => {
          setVideo(res);
          setIsLoading(false);
        })
        .catch((e) => {
          console.log(e);
          setIsLoading(false);
        });
    }
  }, [id]);

  return (
    <div>
        {
          isLoading ? (
              <div>
                <div>
                  <Card className="my-6 w-full">
                    <div className='flex justify-center items-center py-20 mt-20 h-auto w-full'>
                      <div className='px-10 w-full md:w-[75%]'>
                        <div>
                          <Skeleton className="w-full md:h-[350px] h-[200px] " />
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
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
          ) : (
            video ? (
              <VideoPlayer key={video._id} video={video} />
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
    </div>
  )
}

export default VideoPlayingPage
