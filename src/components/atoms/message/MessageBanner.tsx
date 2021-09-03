import { VFC, memo } from 'react'
import classnames from 'classnames'

type Props = {
  children?: string
  disabled?: boolean
  loading?: boolean
  title: string
  description: string
  bgColor: string
  textColor: string
  borderColor: string
}

export const MessageBanner: VFC<Props> = memo(props => {
  const { title, description, bgColor, textColor, borderColor } = props
  return (
    <>
      <div
        className={classnames(
          'pointer-events-auto border-t-4 rounded-b px-4 py-3 shadow-md duration-1000',
          { bgColor },
          { textColor },
          { borderColor }
        )}
        role='alert'
      >
        <div className='flex'>
          <div className='py-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 mr-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </div>
          <div>
            <p className='font-bold'>{title}</p>
            <p className='text-sm'>{description}</p>
          </div>
        </div>
      </div>
    </>
  )
})
