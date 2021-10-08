import { VFC, memo } from 'react'
// import { useAllUsers } from '../../hooks/useAllUsers'
import { PrimaryButton } from '../atoms/button/PrimaryButton'

export const About: VFC = memo(() => {
  const onClickLogin = () => {
    window.location.href = '/home/chat'
  }

  return (
    <div className='bg-primary'>
      <div
        className=' py-32 bg-cover h-screen w-screen justify-center items-center text-primary text-center grid grid-cols-6 backdrop-contrast-200'
        style={{
          backgroundImage: 'url( /asset/images/abouthero.png )',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h2 className='col-start-2 col-span-4 md:text-3xl text-3xl xl:text-4xl leading-tight '>
          Welcome to the Shadow Chat.
        </h2>
        <p className='col-start-2 col-span-4 md:text-md'>
          IMAGINE A PLACE... ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can spend time together.
          A place that makes it easy to talk every day and hang out more often.
        </p>
        <PrimaryButton
          className='col-start-2 mx-auto col-span-4 justify-center  '
          onClick={onClickLogin}
        >
          Sign up!
        </PrimaryButton>
        <a href='#about' className='pt-4 col-start-2 col-span-4 text-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='mx-auto h-16 w-16 animate-bounce'
            fill='none'
            viewBox='0 0 24 24'
            stroke='white'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1'
              d='M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z'
            />
          </svg>
        </a>
      </div>

      <section id='about' className='mt-44'>
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
            <h2 className='text-2xl font-medium tracking-tight text-primary sm:text-2xl text-center md:text-left md:flex'>
              Where hanging out is easy
            </h2>
            <p className='mt-4 text-primary text-center md:text-left md:flex '>
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
            <h2 className='text-2xl font-medium tracking-tight text-primary sm:text-2xl text-center md:text-left md:flex'>
              From few to a fandom
            </h2>
            <p className='mt-4 text-primary text-center md:text-left md:flex '>
              Get any community running with moderation tools and custom member access. Give members
              special powers, set up private channels, and more.
            </p>
          </div>
          <div className='gap-2 sm:gap-6 lg:gap-4'>
            <img
              src='/asset/images/fandom.jpg'
              alt='shadow on eyes'
              className=' content-center rounded-lg'
            />
          </div>
        </div>
      </section>
      <div className='bg-secondary h-56'>
        <div className='grid grid-cols-6'>
          <PrimaryButton className='col-span-4 col-start-2 mx-auto my-20' onClick={onClickLogin}>
            Dive into the Shadow chat
          </PrimaryButton>
        </div>
      </div>
    </div>
  )
})
