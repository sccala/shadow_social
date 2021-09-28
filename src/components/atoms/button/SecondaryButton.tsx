import { VFC, memo, ReactNode } from 'react'

type Props = {
  children: ReactNode
  disabled?: boolean
  onClick: () => void
  className?: string
}

export const SecondaryButton: VFC<Props> = memo(props => {
  const { children, disabled = false, onClick, className } = props

  return (
    <button
      className={`${className} m-3 py-2 w-64 text-sm text-white bg-indigo-500 rounded-2xl hover:bg-indigo-700 not-sr-only bg-violet-500`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
})
