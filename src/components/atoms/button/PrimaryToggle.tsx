import { VFC, memo, useState } from 'react'

type Props = {}

export const PrimaryToggle: VFC<Props> = memo(() => {
  const [check, setCheck] = useState(false)
  const onClickToggle = () => setCheck(v => !v)
  return (
    //  Unchecked
    <div onClick={onClickToggle} className='flex flex-col'>
      <label htmlFor='unchecked' className='mt-3 inline-flex items-center cursor-pointer'>
        <span className='relative'>
          <span className='block w-10 h-6 bg-gray-200 rounded-full shadow-inner'></span>
          <span
            className={`${
              check ? 'bg-indigo-400 transform translate-x-full' : 'bg-white'
            } absolute block w-4 h-4 mt-1 ml-1  rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out`}
          >
            <input id='unchecked' type='checkbox' className='absolute opacity-0 w-0 h-0' />
          </span>
        </span>
        <span className='ml-3 text-sm'>{check ? 'ON' : 'OFF'}</span>
      </label>
    </div>
  )
})