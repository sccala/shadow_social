import { VFC, memo } from 'react'
import { AddComment } from '../organisms/comment/AddComment'
import { CommentFeed } from '../organisms/layout/CommentFeed'

export const DashboardChat: VFC = memo(() => {
  return (
    <>
      <div className='bg-primary '>
        <div className='container mx-auto items-center justify-center flex-col'>
          <CommentFeed />
        </div>
        <div className='w-full bg-secondary'>
          <div className='items-center flex flex-col justify-center mt-8 py-8'>
            <AddComment />
          </div>
        </div>
      </div>
    </>
  )
})
