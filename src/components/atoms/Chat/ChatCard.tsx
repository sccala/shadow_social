import { VFC, memo } from 'react'
// import { useAllUsers } from '../../../hooks/useAllUsers'

type Props = {
  className?: string
  userName: string
  imageUrl: string
  userId: number
  onClick?: () => void
}

export const ChatCard: VFC<Props> = memo(props => {
  const { userName, imageUrl, userId } = props
  return (
    <>
      <div className='rounded-lg bg-white shadow p-5 text-gray-800  ' style={{ maxWidth: '400px' }}>
        <div className='flex mb-4'>
          <div className='overflow-hidden rounded-full w-12 h-12'>
            <img src={imageUrl} alt='logo' />
          </div>
          <div className='flex-grow pl-3'>
            <h6 className='font-bold text-md'>{userName}</h6>
            <p className='text-xs text-gray-600'>{userId}</p>
          </div>
          <div className='w-12 text-right'>
            <i className='mdi mdi-twitter text-blue-400 text-3xl'></i>
          </div>
        </div>
        <div className='mb-4'>
          <p className='text-sm'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati laudantium
            recusandae, debitis eum voluptatem ad, illo voluptatibus temporibus odio provident.
            Laboriosam accusamus necessitatibus tenetur praesentium ullam voluptates nulla
            reprehenderit? 🤣
          </p>
        </div>
        <div className='w-full'>
          <p className='text-xs text-gray-500 text-right'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
              />
            </svg>
          </p>
          <p className='text-xs text-gray-500 text-right'>Oct 15th 8:33pm</p>
        </div>
      </div>
    </>
  )
})
