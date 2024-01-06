import React from 'react'

const Image = ({src, alt}) => {
  return (
    <img src={src} alt={alt} className='w-full h-auto rounded-xl' style={{objectFit:'cover'}} />
  )
}

export default Image