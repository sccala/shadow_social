import { VFC, memo, useCallback } from 'react'
import { useHistory } from 'react-router'

export const Header: VFC = memo(() => {
  const history = useHistory()
  const onClickHome = useCallback(() => history.push('/home'), [history])
  const onClickUserManagement = useCallback(() => history.push('/home/user_management'), [history])
  const onClickSetting = useCallback(() => history.push('/home/setting'), [history])

  return (
    <header className='text-gray-600 body-font bg-gray-50'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <div
          className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer'
          onClick={onClickHome}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            stroke='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            className='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full cursor-pointer'
            viewBox='0 0 24 24'
            onClick={onClickHome}
          >
            <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
          </svg>
          <span className='ml-3 text-xl cursor-pointer' onClick={onClickHome}>
            ShadowChat
          </span>
        </div>
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center cursor-pointer'>
          <div onClick={onClickUserManagement} className='mr-5 hover:text-gray-900'>
            User All
          </div>
          <div onClick={onClickSetting} className='mr-5 hover:text-gray-900'>
            Setting
          </div>
          <div className='mr-5'>Third Link</div>
        </nav>
        <button className=' items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0'>
          Logout
        </button>
      </div>
    </header>
  )
})
