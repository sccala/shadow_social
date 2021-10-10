import { VFC, memo, useEffect, useState } from 'react'
import { useAllUsers } from '../../../hooks/useAllUsers'
// import { SecondaryButton } from '../../atoms/button/SecondaryButton'
import { ChatCard } from '../../atoms/Chat/ChatCard'
import { ComposeForm } from '../comment/ComposeForm'

// import TextareaAutosize from 'react-textarea-autosize'
// import { CSSTransition } from 'react-transition-group'




export const CommentFeed: VFC = memo((props) => {
     const { getUsers, users } = useAllUsers()
     
     
    //  const { comments, onClickSubmit, onClickDelete } = props
     useEffect(() => getUsers())
    
  return (
    <>
      <div className='items-center flex flex-col justify-center pt-8 mb-8'>
        <div className=' text-indigo-600 dark:text-primary text-lg'>What's happening?</div>
        <ComposeForm />
      </div>
      <div className='grid grid-cols-2 gap-4 mb-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:px-6 md:px-16 justify-self-center'>
        {/* {comments.map((comments,index)=> {
            return (
        <ChatCard
          key={comments.id}
          userName='my user name'
          imageUrl='https://source.unsplash.com/random'
          fullName='my fake name'
          className='grid-span-2 grid-cols-6'
        />)})} */}

        {users.map(user => (
          <ChatCard
            key={user.id}
            userName={user.username}
            imageUrl='https://source.unsplash.com/random'
            fullName={user.name}
            className='grid-span-2 grid-cols-6'
          />
        ))}
      </div>
    </>
  )
})

