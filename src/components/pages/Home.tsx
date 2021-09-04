import { VFC, memo } from 'react'
import { MessageError, MessageSuccess } from '../molecules/Messages'


export const Home: VFC = memo(() => {
  return (
    <>
      <section>
        <div
          className='max-w-4xl 
        mx-auto mt-8  px-4 grid items-center md:grid-cols-2 xs:grid-cols-1 
        sm:px-8 lg:px-16 
        xs:py-16 md:py-32 
        lg:max-w-7xl lg:grid-cols-2 gap-8 sm:gap-6 lg:gap-6'
        >
          <div>
            <h2 className='text-2xl font-medium tracking-tight text-gray-900 sm:text-4xl text-center md:text-left md:flex'>
              Welcome to the Chat App.
            </h2>
            <p className='mt-4 text-gray-500 text-center md:text-left md:flex'>
              The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards.
              The powder coated steel divider separates active cards from new ones, or can be used
              to archive important task lists.
            </p>
          </div>
          <div className='gap-2 sm:gap-6 lg:gap-4'>
            <img
              src='/asset/images/clearbox.jpg'
              alt='shadow on eyes'
              className='bg-gray-100 content-center rounded-lg'
            />
          </div>
        </div>
      </section>
    </>
  )
})
