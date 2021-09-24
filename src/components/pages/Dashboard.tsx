import { VFC, memo } from 'react'
import { AddComment } from '../atoms/button/AddComment'
import { ChatCard } from '../atoms/Chat/ChatCard'

export const DashboardChat: VFC = memo(() => {
  const addComment = () => {
  alert('addcomment')
}
  return (
    <>
      <ChatCard />
      <AddComment onClick={addComment} />
    </>
  )
})
