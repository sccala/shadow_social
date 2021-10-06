/* eslint-disable react-hooks/exhaustive-deps */

import { VFC, memo, useEffect } from 'react'
import { useAllUsers } from '../../hooks/useAllUsers'
import { UserCard } from '../organisms/user/UserCard'

export const UserManagement: VFC = memo(() => {
  const { getUsers, users, loading } = useAllUsers()
  useEffect(() => getUsers(), [])

  return (
    <>
      <div className='bg-primary'>
        {loading ? (
          <div className='flex justify-center items-center'>
            <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900' />
          </div>
        ) : (
          <div className='grid grid-cols-2 pb-16 md:grid-cols-3 lg:grid-cols-4 sm:px-6 md:px-16'>
            {users.map(user => (
              <div className='grid mx-auto'>
                <UserCard
                  key={user.id}
                  userName={user.username}
                  imageUrl='https://source.unsplash.com/random'
                  userId={user.id}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
})
