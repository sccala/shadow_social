import { VFC, memo, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
// import { CSSTransition } from 'react-transition-group'

type Props = {
  onClick?: () => void
  className?: string
}


export const AddComment: VFC<Props> = memo(props => {
  const [showAddComment, setShowAddComment] = useState(false)
  const [newComment, setNewComment] = useState()

  const onChangeTodoText = event => {
    setNewComment(event.target.value)
  }
  const onClickAddComment = () => setShowAddComment(!showAddComment)

  return (
    <>
      {/* Plus icon button */}
      <button type='submit' onClick={onClickAddComment}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-12 w-12 text-indigo-500 hover:text-indigo-900 hover:animate-spin'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='1.5'
            d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      </button>
      {/* new commet input */}
      {showAddComment ? (
        <div
          className='rounded-lg bg-white shadow p-5 text-gray-800 
           grid-cols-1'
          style={{ maxWidth: '400px' }}
        >
          <div className='w-full flex mb-4'>
            <div className='overflow-hidden rounded-full w-12 h-12'>
              <img src='https://uifaces.co/our-content/donated/1H_7AxP0.jpg' alt='logo' />
            </div>
            <div className='flex-grow pl-3'>
              <h6 className='font-bold text-md'>Joe Blow</h6>
              <p className='text-xs text-gray-600'>@joe.blow</p>
            </div>
          </div>
          {/* <CSSTransition
            in={showAddComment}
            timeout={400}
            classNames='list-transition'
            unmountOnExit
            appear
            enter={false}
            onEnter={() => {
              console.log('FIRED!')
            }}
          > */}
          <div className='mb-4'>
            <TextareaAutosize
              style={{ boxSizing: 'border-box' }}
              minRows={2}
              placeholder='whisper here'
              className='text-sm w-full'
              value={newComment}
              onChange={onChangeTodoText}
              maxLength={280} 
              
            />
          </div>
          <div className='w-full'>
            <p className='text-xs text-gray-500 text-right'>Oct 15th 8:33pm</p>
          </div>
          {/* </CSSTransition> */}
        </div>
      ) : null}
    </>
  )
})
