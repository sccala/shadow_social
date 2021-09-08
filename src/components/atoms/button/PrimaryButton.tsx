import { VFC, memo, ReactNode } from 'react'

type Props = {
  children: ReactNode
  disabled?: boolean
  onClick: () => void
}


export const PrimaryButton: VFC<Props> = memo(props => {
  const { children, disabled = false, onClick } = props
  

  return (
    <button
      className='py-3 w-64 text-md text-white bg-purple-400 rounded-2xl hover:bg-violet-700 not-sr-only bg-violet-500'
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
})
