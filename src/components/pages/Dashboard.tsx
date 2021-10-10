import { VFC, memo } from 'react'
import { ComposeForm } from '../organisms/comment/ComposeForm'
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
            <ComposeForm />
          </div>
        </div>
      </div>
    </>
  )
})
