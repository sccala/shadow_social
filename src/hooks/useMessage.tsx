import { useCallback } from 'react'
import { MessageError } from '../components/molecules/Messages'

type Props = {
  title: string
  status: 'info' | 'warning' | 'success' | 'error'
}
export const useMessage = () => {
  const showMessage = useCallback((props: Props) => {
    return <MessageError />
  }, [])
  return { showMessage }
}
