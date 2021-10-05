import { VFC, memo, useEffect } from 'react'
import { useAllUsers } from '../../hooks/useAllUsers'
import { ChatCard } from '../atoms/Chat/ChatCard'
import { AddComment } from '../organisms/comment/AddComment'

export const DashboardChat: VFC = memo(() => {
  const { getUsers, users } = useAllUsers()
  useEffect(() => getUsers())
  return (
    <>
      <div className='container mx-auto'>
        <div className='items-center flex flex-col justify-center my-8'>
          <div className=' text-indigo-600 text-lg'>What's happening?</div>
          <AddComment />
        </div>
        <div className='grid grid-cols-2 gap-4 mb-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:px-6 md:px-16'>
          {users.map(user => (
            <ChatCard
              key={user.id}
              userName={user.username}
              imageUrl='https://source.unsplash.com/random'
              fullName={user.name}
              className='grid-span-2 grid-cols-6'
            />
          ))}
        </div>
      </div>
      <div className='w-full bg-gray-50'>
        <div className='items-center flex flex-col justify-center mt-8 py-8'>
          <AddComment />
        </div>
      </div>
    </>
  )
})
