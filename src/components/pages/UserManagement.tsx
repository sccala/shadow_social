import { VFC, memo } from 'react'
import { UserCard } from '../organisms/user/UserCard'

export const UserManagement: VFC = memo(() => {
  return (
    <>
      <UserCard />
    </>
  )
})
