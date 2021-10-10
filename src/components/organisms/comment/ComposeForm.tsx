import { VFC, memo, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { SecondaryButton } from '../../atoms/button/SecondaryButton'
import '../../../index.css'
import { CSSTransition } from 'react-transition-group'

type Props = {
  onClick?: () => void
  className?: string
}

export const ComposeForm: VFC<Props> = memo(props => {
  const [showComposeForm, setShowComposeForm] = useState(false)
  const [newComment, setNewComment] = useState()

  const onClickShowComposeForm = () => setShowComposeForm(!showComposeForm)
  const onClickSubmit = () => {
    alert('Are you sure to send?'  )
    //close the button//
    setShowComposeForm(!showComposeForm)
  }
  const onChangeCommentCompose = event => {
    setNewComment(event.target.value)
  }

  return (
    <>
      <div style={{ maxWidth: '400px' }} className='px-auto '>
        {/* Plus icon button */}
        <button type='submit' onClick={onClickShowComposeForm} className='my-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-10 w-10 text-indigo-500  hover:text-indigo-900 focus:text-indigo-900'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1'
              d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </button>
      </div>
      {/* new commet input */}

      {showComposeForm ? (
        <CSSTransition timeout={600} in={showComposeForm} classNames='fade' unmountOnExit appear>
          <div
            className='rounded-lg bg-secondary shadow p-5 text-primary 
          transition-transform 
          duration-300 
          ease-in-out'
            style={{ maxWidth: '400px', maxHeight: '360px' }}
          >
            <div className='w-full flex mb-4'>
              <div className='overflow-hidden rounded-full w-12 h-12'>
                <img src='https://uifaces.co/our-content/donated/1H_7AxP0.jpg' alt='logo' />
              </div>
              <div className='flex-grow pl-3'>
                <h6 className='font-bold text-primary text-md'>Joe Blow</h6>
                <p className='text-xs text-secondary'>@joe.blow</p>
              </div>
            </div>

            <div className='mb-4'>
              <TextareaAutosize
                style={{ boxSizing: 'border-box', maxWidth: '400px' }}
                minRows={4}
                placeholder='whisper here'
                className='text-sm w-full dark:text-primary bg-gray-200 dark:bg-gray-400 rounded border border-indigo-400 placeholder-indigo-500 dark:placeholder-gray-500 leading-normal resize-none h-20 py-2 px-3 focus:outline-none '
                value={newComment}
                onChange={onChangeCommentCompose}
                maxLength={280}
              />
            </div>
            <div className='w-full'>
              <p className='text-xs text-secondary text-right'>Current: Time</p>
              <div className='grid grid-cols-6'>
                <SecondaryButton
                  className='col-span-2 col-start-2 mx-auto my-4'
                  onClick={onClickSubmit}
                >
                  Submit
                </SecondaryButton>
              </div>
            </div>
          </div>
        </CSSTransition>
      ) : null}
    </>
  )
})
