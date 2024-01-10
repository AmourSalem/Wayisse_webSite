import Link from 'next/link'
import React from 'react'

const VideoRow = ({video, index, editVideo, removeVideo}) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{ video.title }</td>
      <td>{ getCategory(video.category) }</td>
      <td>
        <div className="flex justify-center md:justify-between items-center">
          <div className="flex items-center">
            <div className="flex">
              <Link href={`/videos/watch=/${video._id}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" className='text-primary' height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3"/></svg>
              </Link>
              <button className="mx-2" onClick={() => editVideo(video)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className='text-primary' viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1l1-4ZM15 5l3 3" />
                </svg>
              </button>
              <button onClick={() => removeVideo(video)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className='text-primary' viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </td>
    </tr>
  )
}

export default VideoRow


function getCategory (category) {
  switch (category) {
    case 'evangelisation':
      return 'Evangélisation';
    case 'wedding':
      return 'Mariage';
    case 'child':
      return 'Sortie d\'enfant';
    case 'dot':
      return 'Cérémonie de dot';
    case 'annif':
      return 'Anniversaire'
  }
}