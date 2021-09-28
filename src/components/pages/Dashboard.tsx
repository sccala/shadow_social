import { VFC, memo } from 'react'
import { AddComment } from '../organisms/comment/AddComment'

export const DashboardChat: VFC = memo(() => {
  return (
    <>
      <div className='my-8 grid h-screen w-screen'>
        <p className='text-indigo-600 text-md mx-auto  col-start-2 col-span-4 '>
          What's happening?
        </p>
        <div className='mx-auto col-start-2 col-span-4 my-8'>
          <AddComment className='' />
        </div>
      </div>
    </>
  )
})
