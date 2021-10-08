import { VFC, memo, useState, ChangeEvent, useContext } from 'react'
import { ThemeContext } from '../../hooks/providers/themeContext'
// import { ThemeProvider } from '../../hooks/providers/themeContext'
import { useAuth } from '../../hooks/useAuth'
import { SecondaryButton } from '../atoms/button/SecondaryButton'

export const Login: VFC = memo(() => {
  const [userId, setUserId] = useState<string>('')
  const { login } = useAuth()
  const { theme, setTheme } = useContext(ThemeContext)
  const onCangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value)
  const onClickLogin = () => login(userId)

  return (
    <>
      <div className='w-full min-h-screen bg-indigo-500 dark:bg-primary'>
        <div className='flex justify-center items-center'>
          <button
            className='border-0 py-1 
            text-gray-200 hover:text-indigo-600 
            dark:text-gray-300 
            dark:hover:text-gray-400 
            text-base pt-8 mx-auto sm:mt-0 mb-4'
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 '
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
                d={
                  theme === 'dark'
                    ? 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                    : 'M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z'
                }
              />
            </svg>
          </button>
        </div>
        <div className='flex justify-center items-center'>
          <div className='py-12 px-12 bg-white dark:bg-indigo-800 dark:border-gray-500 rounded-2xl shadow-xl z-20'>
            <div>
              <h1 className='text-3xl font-bold text-center mb-4 cursor-pointer text-primary'>
                Welcome Back!
              </h1>
              <p className='w-80 text-center text-sm mb-8 font-semibold text-primary tracking-wide cursor-pointer'>
                Sign in with your user ID! People are waiting for you.
              </p>
            </div>
            <div className='space-y-4'>
              <input
                type='text'
                placeholder='Enter 1 for user, 10 for admin access'
                className='block text-sm py-3 px-4 rounded-lg w-full border outline-none'
                value={userId}
                onChange={onCangeUserId}
              />
            </div>
            <div className='text-center mt-6'>
              <SecondaryButton disabled={userId === ''} onClick={onClickLogin}>
                Sign in
              </SecondaryButton>
              <p className='mt-4 text-sm text-primary'>
                You don't have an account yet?
                <span className='underline cursor-pointer'> Sign Up</span>
              </p>
            </div>
          </div>
          <div className='w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block'></div>
          <div className='w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block'></div>
        </div>
      </div>
    </>
  )
})
