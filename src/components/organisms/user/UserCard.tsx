import { VFC, memo } from 'react'

export const UserCard: VFC = memo(() => {
  return (
    <>
      <div className='justify-between text-gray-600 body-font mt-8 w-60 shadow py-8 px-8 rounded-lg bg-white '>
        <img
          className='w-44 h-44 mb-6 rounded-full'
          src='https://source.unsplash.com/random'
          alt='user icon'
        />
        <p className='text-gray-900 text-md text-center font-bold'>Fake Name</p>
        <p className='text-base text-center'>ID:1</p>
      </div>
    </>
  )
})
