import { VFC, memo } from 'react'
import { UserCard } from '../organisms/user/UserCard'

export const UserManagement: VFC = memo(() => {
  return (
    <>
      <div
        className='grid 
        grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:px-6 md:px-16'
      >
        {[...Array(20)].map(() => (
          <UserCard userName='Fake name' imageUrl='https://source.unsplash.com/random' userId='1' />
        ))}
      </div>
    </>
  )
})
