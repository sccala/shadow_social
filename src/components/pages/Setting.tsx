import { VFC, memo } from 'react'
import { DarkModeToggle, ChangeFontToggle } from '../atoms/button/Toggles'

export const Setting: VFC = memo(() => {
  return (
    <>
      <div className='dark:bg-primary bg-white py-20'>
        <div className='container mx-auto '>
          {/* setting  */}
          <div className='bg-primary px-4 rounded-md w-full'>
            <div className='flex justify-between w-full'></div>

            <table className='table-auto border-collapse w-full'>
              <thead>
                <tr className='text-sm font-medium text-primary text-left'>
                  <th className='px-4 py-2 bg-gray-200 dark:bg-indigo-700'>Setting</th>
                  <th className='px-4 py-2 bg-gray-200 dark:bg-indigo-700'>ON / OFF</th>
                </tr>
              </thead>
              <tbody className='text-sm font-normal text-primary'>
                <tr className='hover:bg-gray-200 dark:hover:bg-gray-700 border-b border-gray-200'>
                  <td className='px-4 py-4'>Dark Mode</td>
                  <td className='px-4 py-4'>
                    <DarkModeToggle />
                  </td>
                </tr>
                <tr className='hover:hover:bg-gray-200 border-b border-gray-200 dark:hover:bg-gray-700'>
                  <td className='px-4 py-4'>Change Font</td>
                  <td className='px-4 py-4'>
                    <ChangeFontToggle />
                  </td>
                </tr>
                <tr className='hover:bg-gray-200 border-b border-gray-200 dark:hover:bg-gray-700'>
                  <td className='px-4 py-4'>Sound</td>
                  <td className='px-4 py-4'>Coming Soon</td>
                </tr>
                <tr className='hover:bg-gray-200 border-b border-gray-200 dark:hover:bg-gray-700'>
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
