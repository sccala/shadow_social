import { VFC, memo } from 'react'

export const Home: VFC = memo(() => {
  return (
    <>
      <div className='bg-white'>
        <div
          className='max-w-4xl 
        mx-auto px-4 grid items-center md:grid-cols-2 xs:grid-cols-1 
        sm:px-8 lg:px-8 
        xs:py-16 md:py-32 
        lg:max-w-7xl lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-6'
        >
          <div>
            <h2 className='text-lg font-medium tracking-tight text-gray-900 sm:text-4xl xs:text-2xl xs:text-center'>
              Welcome to the Shadow Chat.
            </h2>
            <p className='mt-4 text-gray-500 xs:text-center'>
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
      </div>
    </>
  )
})
