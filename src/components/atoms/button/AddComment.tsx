import { VFC, memo } from 'react'

type Props = {
  onClick: () => void
  className?: string
}

export const AddComment: VFC<Props> = memo(props => {
  const {  onClick } = props

  return (
    <button onClick={onClick}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12 text-indigo-500 hover:text-indigo-900'
        fill='none'
        color=''
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='1'
          d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    </button>
  )
})
