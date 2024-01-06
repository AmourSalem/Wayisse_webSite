"use client"

import ReactPlayer from 'react-player';
import { Avatar, AvatarImage } from './ui/avatar';
 
export default function VideoPlayer({video}) {
  return (
    <div className='flex justify-center items-center py-20 mt-20 h-auto w-full'>
      <div className='px-10'>
        <ReactPlayer width="100%" height="auto" borderRadius="20px"  url={video.video}  controls={true}/>
        <div className='flex items-center pt-3'>
          <Avatar className="h-[60px] w-[60px]">
            <AvatarImage  src="/Images/logowayisse.png" alt="logo-wayisse" />
          </Avatar>
          <div className='p-2'>
            <h2 className=' font-bold text-2xl'> {video.title} </h2>
            <p className='text-lg'> {video.description} </p>
          </div>
        </div>
      </div>
    </div>
  )
}