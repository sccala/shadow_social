import { VFC, memo } from 'react'

type Props = {
  userName: string
  imageUrl: string
  userId: string
}

export const UserCard: VFC<Props> = memo(props => {
  const { userName, imageUrl, userId } = props
  return (
    <>
      <div className='justify-between text-gray-600 body-font mt-8 w-60 shadow py-8 px-8 rounded-lg bg-white '>
        <img className='w-44 h-44 mb-6 rounded-full' 
        src={imageUrl} alt={userName} />
        <p className='text-gray-900 text-md text-center font-bold'>{userName}</p>
        <p className='text-base text-center'>ID: {userId}</p>
      </div>
    </>
  )
})
