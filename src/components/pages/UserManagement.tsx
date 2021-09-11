import { VFC, memo } from 'react'
import { UserCard } from '../organisms/user/UserCard'

export const UserManagement: VFC = memo(() => {
  return (
    <>
      
        <div className='grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4 mx-16'>
          {[...Array(20)].map(() => (
            <UserCard />
          ))}
        </div>
    </>
  )
})
