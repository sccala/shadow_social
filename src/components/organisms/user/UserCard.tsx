import { VFC, memo } from 'react'

export const UserCard: VFC = memo(() => {
  return (
    <>
      <div className='text-gray-600 body-font m-16 w-60  shadow py-8 px-8 rounded-lg'>
        <img
          className='w-42 h-42 mb-6 mx-auto rounded-full'
          src='https://source.unsplash.com/random'
          alt='user icon'
        />
        <p className='text-gray-900 text-md text-center font-bold'>Fake Name</p>
        <p className='text-base text-center'>ID:1</p>
      </div>
    </>
  )
})
