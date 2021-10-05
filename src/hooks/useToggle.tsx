import { useState } from 'react'

// export const useDarkmode = () => {
//   const [darkmode, setDarkmode] = useState(false)
//   return { darkmode, setDarkmode }
// }

export const useChangeFont = () => {
  const [changeFont, setChangeFont] = useState(false)
  return { changeFont, setChangeFont }
}
