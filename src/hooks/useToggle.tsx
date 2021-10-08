import { useState } from 'react'


export const useChangeFont = () => {
  const [changeFont, setChangeFont] = useState(false)
  return { changeFont, setChangeFont }
}
