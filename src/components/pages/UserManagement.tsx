import { VFC, memo } from 'react'
import { UserCard } from '../organisms/user/UserCard'

export const UserManagement: VFC = memo(() => {
  return (
    <>
      {[...Array(10)].map(() => (
        <div className='grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-6'>
          <UserCard />
        </div>
      ))}
    </>
  )
})
