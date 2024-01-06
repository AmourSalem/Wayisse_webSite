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
          console.log(res)
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
              <div>Aucune vidéo</div>
            )
          )
        }
    </div>
  )
}

export default VideoPlayingPage
