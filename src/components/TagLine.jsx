import React from 'react'

const TagLine = ({text}) => {
  return (
    <div className='flex justity-center items-center pb-2'>
      <svg xmlns="http://www.w3.org/2000/svg" className='text-primary' width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 12A10 10 0 1 1 12 2m10 0L12 12m4-10h6v6"/></svg>
      <h2 className='font-bold ml-4 text-3xl'> {text} </h2>
    </div>
  )
}

export default TagLine