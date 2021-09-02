import { VFC } from 'react'
import { MessageBanner } from '../atoms/message/MessageBanner'

export const MessageSuccess:VFC = () => {
  return <MessageBanner 
  title='Welcome Back' 
  description='You have successfully logged in' />
}

export const MessageError: VFC = () => {
  return <MessageBanner title='Oops' description='Something went wrong. Please try again.' />
}