import { VFC, memo, useCallback, useState } from 'react'
import { useHistory } from 'react-router'

export const Header: VFC = memo(() => {
  const history = useHistory()
  const onClickHome = useCallback(() => history.push('/home'), [history])
   const onClickChat = useCallback(() => history.push('/home/chat'), [history])
  const onClickUserManagement = useCallback(() => history.push('/home/user_management'), [history])
  const onClickSetting = useCallback(() => history.push('/home/setting'), [history])
  const onClickAbout=useCallback(()=>history.push('/home/about'),[history])

  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <header className='text-gray-600 body-font bg-gray-50 '>
      <div className='container mx-auto p-4 flex-col md:flex-row hidden md:flex items-center sticky'>
        <div
          className='flex font-medium items-center text-gray-900  md:sm-0 cursor-pointer'
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
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
            />
          </svg>

          <span className='ml-3 text-xl cursor-pointer' onClick={onClickChat}>
            Shadow Chat
          </span>
        </div>
        <nav className='sm:ml-auto flex flex-wrap items-center text-base justify-center cursor-pointer'>
          <div onClick={onClickHome} className='mr-5 hover:text-gray-900'>
            Home
          </div>
          <div onClick={onClickUserManagement} className='mr-5 hover:text-gray-900'>
            Users
          </div>
          <div onClick={onClickSetting} className='mr-5 hover:text-gray-900'>
            Setting
          </div>
          <div onClick={onClickAbout} className='mr-5'>
            About
          </div>
        </nav>
        <button className='items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 sm:mt-0'>
          Logout
        </button>
        <button className='items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-100 rounded text-base mt-4 sm:mt-0'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 hover:animate-spin'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='1.5'
              d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
            />
          </svg>
        </button>
      </div>
      {/* mobile navbar */}
      <div className='cursor-pointer sticky'>
        <div className='flex justify-between md:hidden px-8 py-4'>
          <div className='flex'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              className='w-8 h-8 text-white p-2 bg-indigo-500 rounded-full flex self-center'
              viewBox='0 0 24 24'
              onClick={onClickHome}
            >
              <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
            </svg>

            <span
              className='ml-3 font-medium items-center text-gray-900  cursor-pointer'
              onClick={onClickHome}
            >
              Chat App
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
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
        {/* collapsable navbar */}
        <div className={'md:hidden' + (navbarOpen ? ' block' : ' hidden')}>
          <div
            onClick={onClickUserManagement}
            className='text-center block text-base hover:text-gray-900 mb-1'
          >
            User All
          </div>
          <div
            onClick={onClickSetting}
            className='text-center block text-base hover:text-gray-900 mb-1'
          >
            Setting
          </div>
          <div
            onClick={onClickAbout}
            className='text-center block text-base hover:text-gray-900 mb-1 pb-4'
          >
            About
          </div>
        </div>
      </div>
    </header>
  )
})
