import { VFC, memo } from 'react'

export const UserCard: VFC = memo(() => {
  return (
    <>
      <div className='m-8 w-60 h-60 shadow py-4 px-4 rounded-lg'>
        <img
          className='w-32 h-32 mx-auto rounded-full'
          src='https://source.unsplash.com/random'
          alt='user icon'
        />
        <p className='text-md text-center font-bold'>Fake Name</p>
        <p className='text-md text-center'>ID:1</p>
        <p className='text-md text-center'>Hello I'm feeling good today</p>
        <p className='text-md text-center'>Twitter: @scsds</p>
      </div>
    </>
  )
})
