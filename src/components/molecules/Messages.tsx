import { VFC } from 'react'
import { MessageBanner } from '../atoms/message/MessageBanner'

export const MessageSuccess: VFC = () => {
  return (
    <MessageBanner
      title='Welcome Back'
      description='You have successfully logged in'
      bgColor='bg-green-100'
      textColor='text-green-900'
      borderColor='border-green-500'
      svgIcon='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    />
  )
}

export const MessageWarning: VFC = () => {
  return (
    <MessageBanner
      title='Warning'
      description='Id did not match. Please try again.'
      bgColor='bg-amber-100'
      textColor='text-amber-900'
      borderColor='border-amber-500'
      svgIcon='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
    />
  )
}

export const MessageError: VFC = () => {
  return (
    <MessageBanner
      title='Error'
      description='Something went wrong.'
      bgColor='bg-red-100'
      textColor='text-red-900'
      borderColor='border-red-500'
      svgIcon='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    />
  )
}
