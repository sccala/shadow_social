import { VFC, memo } from 'react'
import { DarkModeToggle, ChangeFontToggle } from '../atoms/button/Toggles'

export const Setting: VFC = memo(() => {
  return (
    <>
      <div className='bg-primary py-20'>
        <div className='w-2/3 mx-auto'>
          {/* setting  */}
          <div className='bg-secondary shadow-md rounded-md my-6'>
            <table className='text-left w-full border-collapse '>
              <thead>
                <tr>
                  <th className='text-sm font-medium text-primary text-left px-4 py-2 bg-gray-300 dark:bg-indigo-800 rounded-tl-md'>
                    Setting
                  </th>
                  <th className='text-sm font-medium text-primary text-left px-4 py-2 bg-gray-300 dark:bg-indigo-800 rounded-tr-md'>
                    ON / OFF
                  </th>
                </tr>
              </thead>
              <tbody className='text-sm font-normal text-primary'>
                <tr className='hover:bg-gray-200 dark:hover:bg-gray-700 border-b dark:border-gray-500'>
                  <td className='px-4 py-4'>Dark Mode</td>
                  <div className='flex'>
                    <td className='px-4 items-center'>
                      <DarkModeToggle />
                    </td>
                  </div>
                </tr>
                <tr className='hover:bg-gray-200  border-b dark:border-gray-500 dark:hover:bg-gray-700'>
                  <td className='px-4 py-4'>Change Font</td>
                  <div className='flex'>
                    <td className='px-4 items-center'>
                      <ChangeFontToggle />
                    </td>
                  </div>
                </tr>
                <tr className='hover:bg-gray-200  border-b dark:border-gray-500  dark:hover:bg-gray-700'>
                  <td className='px-4 py-4'>Sound</td>
                  <td className='px-4 py-4'>Coming Soon</td>
                </tr>
                <tr className='hover:bg-gray-200 hover:rounded-b-md  dark:hover:bg-gray-700'>
                  <td className='px-4 py-4'>Reduce graphical motion to save evergy</td>
                  <td className='px-4 py-4'>Coming Soon</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
})
