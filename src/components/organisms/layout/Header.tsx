import { VFC, memo, useCallback, useState, useContext } from 'react'
import { useHistory } from 'react-router'
import { ThemeContext } from '../../../hooks/providers/themeContext'

export const Header: VFC = memo(() => {
  const history = useHistory()
  const { theme, setTheme } = useContext(ThemeContext)

  const onClickHome = useCallback(() => history.push('/home'), [history])
  const onClickChat = useCallback(() => history.push('/home/feed'), [history])
  const onClickUserManagement = useCallback(() => history.push('/home/user_management'), [history])
  const onClickSetting = useCallback(() => history.push('/home/setting'), [history])
  const onClickAbout = useCallback(() => history.push('/home/about'), [history])

  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <header className='text-gray-600 body-font bg-gray-100 dark:bg-indigo-900 dark:border-gray-100'>
      <div className='container mx-auto p-4 flex-col md:flex-row hidden md:flex items-center sticky'>
        <div
          className='flex font-medium items-center text-primary  md:sm-0 cursor-pointer'
          onClick={onClickChat}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
            />
          </svg>

          <span className='ml-3 text-xl text-primary cursor-pointer' onClick={onClickChat}>
            Shadow Chat
          </span>
        </div>
        <nav className='sm:ml-auto flex flex-wrap items-center text-base justify-center cursor-pointer'>
          <div onClick={onClickHome} className='mr-5 text-primary hover:text-secondary'>
            Home
          </div>
          <div onClick={onClickUserManagement} className='mr-5 text-primary hover:text-secondary'>
            Users
          </div>
          <div onClick={onClickSetting} className='mr-5 text-primary hover:text-secondary'>
            Setting
          </div>
          <div onClick={onClickAbout} className='mr-5 text-primary hover:text-secondary'>
            About
          </div>
        </nav>
        <button className='items-center bg-gray-200 dark:bg-indigo-800 dark:hover:bg-indigo-700 dark:text-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 sm:mt-0'>
          Logout
        </button>
        <button
          className='items-center border-0 py-1 px-1 mx-2 text-primary hover:bg-gray-200 dark:hover:bg-indigo-800 rounded-full text-base mt-4 sm:mt-0'
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6 items-center'
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
      {/* mobile navbar */}
      <div className='cursor-pointer'>
        <div className='text-primary flex justify-between md:hidden px-8 py-4'>
          <div className='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-8 h-8 text-white py-2 bg-indigo-500 rounded-full'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
                onClick={onClickHome}
              />
            </svg>
            <span
              className='ml-3 font-medium items-center text-primary cursor-pointer'
              onClick={onClickHome}
            >
              Shadow Chat
            </span>
          </div>
          <button onClick={() => setNavbarOpen(!navbarOpen)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
        {/* collapsable navbar */}
        <div className={'md:hidden' + (navbarOpen ? ' block' : ' hidden')}>
          <div
            onClick={onClickHome}
            className='text-center block text-base text-primary hover:text-accent mb-1'
          >
            Home
          </div>
          <div
            onClick={onClickUserManagement}
            className='text-center block text-base text-primary hover:text-accent mb-1'
          >
            Users
          </div>
          <div
            onClick={onClickSetting}
            className='text-center block text-base text-primary hover:text-accent mb-1'
          >
            Setting
          </div>
          <div
            onClick={onClickAbout}
            className='text-center block text-base hover:text-accent text-primary mb-1'
          >
            About
          </div>
          <div className='flex flex-row relative'>
            <button
              className='border-0 py-1 text-primary hover:text-accent rounded text-base mt-4 mx-auto sm:mt-0 justify-self-center mb-4'
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
        </div>
      </div>
    </header>
  )
})
