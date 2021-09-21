import { VFC, memo } from 'react'

export const Setting: VFC = memo(() => {
  return (
    <>
      <div className='container'>
        {/* setting  */}
        <div className='bg-white pb-4 px-4 rounded-md w-full'>
          <div className='flex justify-between w-full pt-6 '></div>
          <div className='overflow-x-auto my-20'>
            <table className='table-auto border-collapse w-full'>
              <thead>
                <tr className='rounded-lg text-sm font-medium text-gray-700 text-left'>
                  <th className='px-4 py-2 bg-gray-200'>Setting</th>
                  <th className='px-4 py-2 bg-gray-200'>On/Off</th>
                </tr>
              </thead>
              <tbody className='text-sm font-normal text-gray-700'>
                <tr className='hover:bg-gray-100 border-b border-gray-200 py-10'>
                  <td className='px-4 py-4'>Dark Mode</td>
                  <td className='px-4 py-4'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                        clip-rule='evenodd'
                      />
                    </svg>
                  </td>
                </tr>
                <tr className='hover:bg-gray-100 border-b border-gray-200 py-4'>
                  <td className='px-4 py-4 flex items-center'>
                    A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact
                    on Design
                  </td>
                  <td className='px-4 py-4'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                        clip-rule='evenodd'
                      />
                    </svg>
                  </td>
                </tr>
                <tr className='hover:bg-gray-100 border-b border-gray-200'>
                  <td className='px-4 py-4'>Intro to JavaScript</td>
                  <td className='px-4 py-4'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                        clip-rule='evenodd'
                      />
                    </svg>
                  </td>
                </tr>
                <tr className='hover:bg-gray-100 border-b border-gray-200'>
                  <td className='px-4 py-4'>Intro to JavaScript</td>
                  <td className='px-4 py-4'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                        clip-rule='evenodd'
                      />
                    </svg>
                  </td>
                </tr>
                <tr className='hover:bg-gray-100 border-b border-gray-200'>
                  <td className='px-4 py-4'>Intro to JavaScript</td>
                  <td className='px-4 py-4'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                        clip-rule='evenodd'
                      />
                    </svg>
                  </td>
                </tr>
                <tr className='hover:bg-gray-100 border-b border-gray-200'>
                  <td className='px-4 py-4'>Intro to JavaScript</td>
                  <td className='px-4 py-4'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                        clip-rule='evenodd'
                      />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
})
