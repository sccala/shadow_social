import axios from 'axios'
import { useCallback, useState } from 'react'
import { useHistory } from 'react-router'
import { User } from '../types/api/user'
import { MessageError } from '../components/molecules/Messages'
import { MessageSuccess } from '../components/molecules/Messages'
import { MessageWarning } from '../components/molecules/Messages'

export const useAuth = () => {
  const history = useHistory()
  const { setLoginUser } = useLoginUser()
  const [loading, setLoading] = useState(false)

  const login = useCallback(
    (id: string) => {
      setLoading(true)
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
          if (res.data) {
            const isAdmin = res.data.id === 10 ? true : false
            setLoginUser({ ...res.data, isAdmin }) 
            history.push('./home')
            return (<MessageSuccess  /> )
          } else {
            
            setLoading(false)
            return <MessageWarning />
          }
        })
        .catch(() => {
          
          setLoading(false)
          return <MessageError />
        })
    },
    [history, setLoginUser]
  )
  return { login, loading }
}
