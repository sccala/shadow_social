import { VFC, memo } from 'react'
import { PrimaryButton } from '../atoms/button/PrimaryButton'

export const About: VFC = memo(() => {
  const onClickLogin = () => {}

  return (
    <>
      <div
        className='text-center absolute xl:m-36 lg:m-28 md:m-20 sm:m-12
          lg:w-3/5  md:w-4/5 text-white'
      >
        <h2 className='relative md:text-5xl sm:text-4xl xl:text-6xl  leading-tight'>
          Welcome to the Chat App.
        </h2>
        <p className='mt-8 relative md:text-md'>
          IMAGINE A PLACE... ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can spend time together.
          A place that makes it easy to talk every day and hang out more often.
        </p>
        <PrimaryButton className='mt-8  relative' onClick={onClickLogin}>
          Sign up!
        </PrimaryButton>
        <i className='pt-4 relative text-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='relative justify-center mx-auto h-16 w-16'
            fill='none'
            viewBox='0 0 24 24'
            stroke='white'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='1'
              d='M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z'
            />
          </svg>
        </i>
      </div>
      <img className='w-screen h-full' src='/asset/images/abouthero.jpg' alt='abouthero' />

      <section className='mt-44'>
        <div
          className='max-w-4xl 
        mx-auto mt-8  mb-32 px-4 grid items-center md:grid-cols-2  
        sm:px-8 lg:px-16  
        lg:max-w-7xl lg:grid-cols-2 gap-8 sm:gap-6 lg:gap-6'
        >
          <div className='gap-2 sm:gap-6 lg:gap-4'>
            <img
              src='/asset/images/people.jpg'
              alt='shadow on eyes'
              className='bg-gray-100 content-center rounded-lg'
            />
          </div>
          <div>
            <h2 className='text-2xl font-medium tracking-tight text-gray-900 sm:text-4xl text-center md:text-left md:flex'>
              Where hanging out is easy
            </h2>
            <p className='mt-4 text-gray-500 text-center md:text-left md:flex '>
              Grab a seat in a voice channel when you’re free. Friends in your server can see you’re
              around and instantly pop in to talk without having to call.
            </p>
          </div>
        </div>
      </section>
      <section className='mt-44'>
        <div
          className='max-w-4xl 
        mx-auto mt-8  mb-32 px-4 grid items-center md:grid-cols-2  
        sm:px-8 lg:px-16  
        lg:max-w-7xl lg:grid-cols-2 gap-8 sm:gap-6 lg:gap-6'
        >
          <div>
            <h2 className='text-2xl font-medium tracking-tight text-gray-900 sm:text-4xl text-center md:text-left md:flex'>
              From few to a fandom
            </h2>
            <p className='mt-4 text-gray-500 text-center md:text-left md:flex '>
              Get any community running with moderation tools and custom member access. Give members
              special powers, set up private channels, and more.
            </p>
          </div>
          <div className='gap-2 sm:gap-6 lg:gap-4'>
            <img
              src='/asset/images/fandom.jpg'
              alt='shadow on eyes'
              className='bg-gray-100 content-center rounded-lg'
            />
          </div>
        </div>
      </section>
      <section className='bg-gray-100 h-56 flex items-center '>
        <div className='container flex justify-center mb-8'>
          <PrimaryButton onClick={onClickLogin}>Dive into the Shadow chat</PrimaryButton>
        </div>
      </section>
    </>
  )
})
