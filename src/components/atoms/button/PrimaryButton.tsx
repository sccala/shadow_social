import { VFC, memo, ReactNode } from 'react'

type Props = {
  children: ReactNode
  disabled?: boolean
  onClick: () => void
  className?: string
}

export const PrimaryButton: VFC<Props> = memo(props => {
  const { children, disabled = false, onClick, className } = props

  return (
    <button
      className={`${className} m-3 py-3 text-md w-64 text-white 
      bg-indigo-500  
      hover:bg-indigo-700 not-sr-only 
      dark:bg-indigo-900 shadow
      dark:hover:bg-indigo-800
      dark:text-white rounded-2xl
       `}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
})
