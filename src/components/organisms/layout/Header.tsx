import { VFC, memo } from 'react'

export const Header: VFC = memo(() => {
  return (
    <header className='text-gray-600 body-font bg-gray-50'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <a
          href='/home'
          className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            stroke='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            className='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full'
            viewBox='0 0 24 24'
          >
            <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
          </svg>
          <span className='ml-3 text-xl'>GhostChat</span>
        </a>
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
          <a href='/user_management' className='mr-5 hover:text-gray-900'>
            User All
          </a>
          <a href='/setting' className='mr-5 hover:text-gray-900'>
            Setting
          </a>
          <a href='/setting' className='mr-5'>
            Third Link
          </a>
        </nav>
        <button className='inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0'>
          Logout
        </button>
      </div>
    </header>
  )
})
