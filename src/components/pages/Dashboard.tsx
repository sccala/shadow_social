import { VFC, memo } from 'react'
import { AddComment } from '../organisms/comment/AddComment'
import { ChatCard } from '../atoms/Chat/ChatCard'

export const DashboardChat: VFC = memo(() => {
  
  return (
    <>
      <div className='container my-8'>
        <ChatCard />
        <AddComment/>
      </div>
    </>
  )
}) 
