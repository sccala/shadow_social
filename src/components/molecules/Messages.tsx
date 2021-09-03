import { VFC } from 'react'
import { MessageBanner } from '../atoms/message/MessageBanner'

export const MessageSuccess: VFC = () => {
  return (
    <MessageBanner
      title='Welcome Back'
      description='You have successfully logged in'
      bgColor='.bg-green-100'
      textColor='.green-900'
      borderColor='.border-green-500'
    />
  )
}

export const MessageError: VFC = () => {
  return (
    <MessageBanner
      title='Oops'
      description='Something went wrong. Please try again.'
      bgColor='bg-red-100'
      textColor='red-900'
      borderColor='border-red-500'
    />
  )
}
