import React from 'react'

export default function Button({children}: {children: string}) {
  return (
    <button className='bg-gradient-to-t from-primary-300 to-primary-400  w-296px h-14 px-1 py-4 text-center rounded text-light'>
      {children}
    </button>
  )
}
