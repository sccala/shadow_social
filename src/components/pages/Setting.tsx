import { VFC, memo } from 'react'
import { PrimaryToggle } from '../atoms/button/PrimaryToggle'

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
                <tr className='hover:bg-gray-100 border-b border-gray-200'>
                  <td className='px-4 py-4'>Dark Mode</td>
                  <PrimaryToggle />
                </tr>
                <tr className='hover:bg-gray-100 border-b border-gray-200'>
                  <td className='px-4 py-4'>Sound</td>
                  <PrimaryToggle />
                </tr>
                <tr className='hover:bg-gray-100 border-b border-gray-200'>
                  <td className='px-4 py-4'>Change Font</td>
                  <PrimaryToggle />
                </tr>
                <tr className='hover:bg-gray-100 border-b border-gray-200'>
                  <td className='px-4 py-4'>Reduce graphical motion to save evergy</td>
                  <PrimaryToggle />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
})
