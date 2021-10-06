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
      className={`${className} m-3 py-3 text-md w-64 text-white bg-indigo-500 
      hover:bg-indigo-700 not-sr-only bg-violet-500
      dark:bg-gray-500 
      dark:hover:bg-gray-400 
      dark:text-indigo-800 rounded-2xl
      dark:border-2`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
})
