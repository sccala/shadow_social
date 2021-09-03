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

export const MessageError: VFC = () => {
  return (
    <MessageBanner
      title='Oops'
      description='Something went wrong. Please try again.'
      bgColor='bg-red-100'
      textColor='text-red-900'
      borderColor='border-red-500'
      svgIcon='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    />
  )
}
