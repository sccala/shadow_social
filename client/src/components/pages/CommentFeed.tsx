import { VFC, memo, useEffect, useState } from 'react'
import { useAllUsers } from '../../hooks/useAllUsers'
import { ChatCard } from '../ChatCard'
import { ComposeForm } from '../ComposeForm'

export const CommentFeed: VFC = memo(props => {
  const { getUsers, users } = useAllUsers()
  const [newComment, setNewComment] = useState('')

  const onClickSubmit = () => {
    alert('comment was submitted')
  }
  const onChangeCommentCompose = event => {
    setNewComment(event.target.value)
  }

  useEffect(() => getUsers())

  return (
    <>
      <div className='bg-primary '>
        <div className='items-center flex flex-col justify-center pt-8 pb-8'>
          <div className='text-indigo-600 dark:text-primary text-lg'>What's happening?</div>
          <ComposeForm
            newComment={newComment}
            onClick={onClickSubmit}
            onChange={() => onChangeCommentCompose}
          />

          <div className='grid grid-cols-2 gap-4 mb-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:px-6 md:px-16 justify-self-center'>
            <ChatCard
              userName='User Name'
              avatar='https://source.unsplash.com/random'
              fullName='my fake name'
              className='grid-span-2 grid-cols-6'
              comment={newComment}
            />

            {users.map(user => (
              <ChatCard
                key={user.id}
                userName={user.username}
                avatar='https://source.unsplash.com/random'
                fullName={user.name}
                comment='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecatlaudantium recusandae, debitis eum voluptatem ad, illo voluptatibus temporibus odioprovident. Laboriosam accusamus necessitatibus tenetur praesentium ullam voluptatesnulla reprehenderit 🤣'
                className='grid-span-2 grid-cols-6'
              />
            ))}
          </div>
          <div className='w-full'>
            <div className='items-center flex flex-col justify-center'>
             
                <ComposeForm
                  newComment={newComment}
                  onClick={onClickSubmit}
                  onChange={() => onChangeCommentCompose}
                />
              </div>
            </div>
          </div>
        </div>
     
    </>
  )
})
