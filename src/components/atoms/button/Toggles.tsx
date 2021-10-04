import { VFC, memo, useContext } from 'react'
import {  useChangeFont } from '../../../hooks/useToggle'

type Props = {
  className?: string
}

export const DarkModeToggle: VFC<Props> = memo(() => {
  const { theme, changeTheme } = useContext(ThemeContext)

  // const { darkmode, setDarkmode } = useDarkmode()
  const onClickToggle = () => changeTheme(v => !v)
  return (
    <div onClick={onClickToggle} className='flex flex-col'>
      <label htmlFor='unchecked' className='mt-3 inline-flex items-center cursor-pointer'>
        <span className='relative'>
          <span className='block w-10 h-6 bg-gray-200 rounded-full shadow-inner'></span>

          <span
            className={`${
              theme === 'dark' ? 'bg-indigo-400 transform translate-x-full' : 'bg-white'
            } absolute block w-4 h-4 mt-1 ml-1  rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out`}
          >
            <input id='darkmode' type='checkbox' className='absolute opacity-0 w-0 h-0' />
          </span>
        </span>
        <span className='ml-3 text-sm'>{theme === 'dark' ? 'ON' : 'OFF'}</span>
      </label>
    </div>
  )
})

export const ChangeFontToggle: VFC<Props> = memo(() => {
  const { changeFont, setChangeFont } = useChangeFont()
  const onClickToggle = () => setChangeFont(v => !v)
  return (
    <div onClick={onClickToggle} className='flex flex-col'>
      <label htmlFor='unchecked' className='mt-3 inline-flex items-center cursor-pointer'>
        <span className='relative'>
          <span className='block w-10 h-6 bg-gray-200 rounded-full shadow-inner'></span>
          <span
            className={`${
              changeFont ? 'bg-indigo-400 transform translate-x-full' : 'bg-white'
            } absolute block w-4 h-4 mt-1 ml-1  rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out`}
          >
            <input id='changefont' type='checkbox' className='absolute opacity-0 w-0 h-0' />
          </span>
        </span>
        <span className='ml-3 text-sm'>{changeFont ? 'ON' : 'OFF'}</span>
      </label>
    </div>
  )
})

