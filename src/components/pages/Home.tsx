import { VFC, memo } from 'react'
import { PrimaryButton } from '../atoms/button/PrimaryButton'

export const Home: VFC = memo(() => {
  return (
    <>
        <div className='container mx-auto  flex-col md:items-start md:text-left mt-16 mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-3xl text-3xl mb-4 font-medium text-gray-900'>
            Hello 
          </h1>
          <p className='mb-8 leading-relaxed'>
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed
            tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken
            authentic tumeric truffaut hexagon try-hard chambray.
          </p>
          <div className='flex justify-center'>
            <button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
              Button
            </button>
            <button className='ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
              Button
            </button>
          </div>
        </div>
    </>
  )
})
