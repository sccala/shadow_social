import { VFC, memo } from 'react'

export const Home: VFC = memo(() => {
  let d = new Date(Date.now())
  d.setFullYear(d.getFullYear() + 1) 
  console.log(d)
  return (
    <>
      <div className='grid'>
        <div className='grid grid-col-2 h-full bg-gray-900'>this is the actual chat section. </div>
        
      </div>
    </>
  )
})
