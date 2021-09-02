import { VFC } from 'react'
import { MessageBanner } from '../atoms/message/MessageBanner'

export const MessageSuccess: VFC = () => {
  return (
    <MessageBanner
      title='Welcome Back'
      description='You have successfully logged in'
      bgColor='.bg-teal-100'
      textColor='.teal-900'
      borderColor='.border-teal-500'
    />
  )
}

export const MessageError: VFC = () => {
  return (
    <MessageBanner
      title='Oops'
      description='Something went wrong. Please try again.'
      bgColor='bg-teal-100'
      textColor='teal-900'
      borderColor='border-teal-500'
    />
  )
}
