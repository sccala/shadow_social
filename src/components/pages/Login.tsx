import { VFC, memo, useState, ChangeEvent } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { PrimaryButton } from '../atoms/button/PrimaryButton'

export const Login: VFC = memo(() => {
  const [userId, setUserId] = useState('')
  const { login, loading } = useAuth()

  const onCangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value)
  const onClickLogin = () => login(userId)

  return (
    <div className='min-h-screen bg-purple-500 flex justify-center items-center'>
      <div className=' ' />
      <div className='py-12 px-12 bg-white rounded-2xl shadow-xl z-20'>
        <div>
          <h1 className='text-2xl font-bold text-center mb-4 cursor-pointer'>Welcome Back!</h1>
          <p className='w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer'>
            Sign in with your user ID! People are waiting for you.
          </p>
        </div>
        <div className='space-y-4'>
          <p className='text-center'>User ID</p>
          <input
            type='text'
            placeholder='Enter 1 for user, 10 for admin demo'
            className='block text-sm py-3 px-4 rounded-lg w-full border outline-none'
            value={userId}
            onChange={onCangeUserId}
          />
        </div>
        <div className='text-center mt-6'>
          <PrimaryButton 
          disabled={userId === ''} 
          onClick={onClickLogin}
          loading={loading}>
            Sign in
          </PrimaryButton>
          <p className='mt-4 text-sm'>
            You don't have an account yet?
            <span className='underline cursor-pointer'> Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  )
})
