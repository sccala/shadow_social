import { useEffect, useState } from "react"
import { MessageError } from "../components/molecules/Messages"

const useMessage = ({ variant, children }) => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false)
    }, 3000)

    return () => {
      clearTimeout(timeId)
    }
  }, [])

  if (!show) {
    return null
  }

  return <MessageError />
}


export default useMessage
