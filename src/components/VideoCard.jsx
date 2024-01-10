import Link from 'next/link'
import React from 'react'
import { Card } from './ui/card'
import { Avatar, AvatarImage } from './ui/avatar'

const VideoCard = ({video}) => {
  return (
      <div >
        <div>
          <Link href={`/videos/watch=/${video._id}`}>
            <Card className="my-6 w-full">
                <div>
                  <img className='w-full h-[150px] rounded-lg cover' style={{objectFit:'cover'}} src={video.image} />
                </div>
                <div className='flex items-center'>
                  <Avatar className="h-[60px] w-[60px]">
                    <AvatarImage  src="/Images/logowayisse.png" alt="logo-wayisse" />
                  </Avatar>
                  <div className='p-2'>
                    <h3 className='font-bold text-lg'> {video.title} </h3>
                    <p className='py-3'> {video.description} </p>
                  </div>
                </div>
            </Card>
          </Link>
        </div>
      </div>
  )
}

export default VideoCard