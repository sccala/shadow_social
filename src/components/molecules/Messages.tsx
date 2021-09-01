export const messageSuccess = () => {
  return (
    <>
      <div
        className='bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md duration-1000+({color}='color')'
        role='alert'
      >
        <div className='flex'>
          <div className='py-1'>
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
                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </div>
          <div>
            <p className='font-bold'>Welcome back!</p>
            <p className='text-sm'>You have successfully logged in.</p>
          </div>
        </div>
      </div>
    </>
  )
}


export const messageError = () => {
  return (
    <>
      <div
        className='bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md duration-1000'
        role='alert'
      >
        <div className='flex'>
          <div className='py-1'>
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
                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </div>
          <div>
            <p className='font-bold'>Oops, something wrong</p>
            <p className='text-sm'>Could not log in. Please try again.</p>
          </div>
        </div>
      </div>
    </>
  )
}