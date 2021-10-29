import { VFC, memo } from 'react'
import { Button } from '../../../types/button'



export const SecondaryButton: VFC<Button> = memo(props => {
  const { children, disabled = false, onClick, className } = props

  return (
    <button
      className={`${className} m-3 py-2 w-64 text-sm text-white rounded-2xl not-sr-only 
      bg-indigo-500 
      hover:bg-indigo-600 
      dark:bg-indigo-600 
      dark:border-gray-400  
      dark:hover:bg-indigo-700
      shadow-md`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
})
