import { VFC, memo } from 'react'

export const Login: VFC = memo(() => {
  return (
    <div className='min-h-screen bg-purple-500 flex justify-center items-center'>
      <div className=' ' />
      <div className='py-12 px-12 bg-white rounded-2xl shadow-xl z-20'>
        <div>
          <h1 className='text-2xl font-bold text-center mb-4 cursor-pointer'>Welcome Back!</h1>
          <p className='w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer'>
            Create an account to enjoy all the services without any ads for free!
          </p>
        </div>
        <div className='space-y-4'>
          <p className='text-center'>User ID</p>
          <input
            type='text'
            placeholder='Enter 1 for user, 10 for admin demo'
            className='block text-sm py-3 px-4 rounded-lg w-full border outline-none'
          />
        </div>
        <div className='text-center mt-6'>
          <button className='py-3 w-64 text-md text-white bg-purple-400 rounded-2xl'>
            Sign in
          </button>
          <p className='mt-4 text-sm'>
            You don't have an account yet?{' '}
            <span className='underline cursor-pointer'> Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  )
})
