import { VFC, memo } from 'react'

export const Home: VFC = memo(() => {
  return (
    <>
      <div className='grid'>
        <div className='grid grid-col-2 h-full bg-gray-900'>this is the actual chat section. </div>
      </div>
    </>
  )
})
