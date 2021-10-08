import { VFC, memo, useState } from 'react'
// import { useAllUsers } from '../../../hooks/useAllUsers'

type Props = {
  className?: string
  userName: string
  imageUrl: string
  userId?: number
  fullName: string
  onClick?: () => void
}

export const ChatCard: VFC<Props> = memo(props => {
  const { userName, imageUrl, fullName } = props
  const [like, setLike] = useState(false)
  const [light, setLight] = useState(false)

  const onClickLike = () => setLike(!like)
  const onClickLight = () => setLight(!light)
  return (
    <>
      <div
        className='rounded-lg bg-secondary drop-shadow p-5 text-primary'
        style={{ maxWidth: '400px' }}
      >
        <div className='flex mb-4'>
          <div className='overflow-hidden rounded-full w-12 h-12'>
            <img src={imageUrl} alt='logo' />
          </div>
          <div className='flex-grow pl-3'>
            <h6 className='font-bold text-md'>{userName}</h6>
            <p className='text-xs text-secondary'>@{fullName}</p>
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
        <p className='text-xs text-gray-400 text-right'>Oct 15th 8:33pm</p>
        <p
          className='text-xs text-accent 
        dark:text-primay float-right flex my-2'
        >
          {like ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 mx-1.5'
              viewBox='0 0 20 20'
              fill='currentColor'
              onClick={onClickLike}
            >
              <path
                fillRule='evenodd'
                d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                clipRule='evenodd'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 mx-1.5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor '
              onClick={onClickLike}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
              />
            </svg>
          )}
          {light ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor '
              onClick={onClickLight}
            >
              <path d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              onClick={onClickLight}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
              />
            </svg>
          )}
        </p>
      </div>
    </>
  )
})
