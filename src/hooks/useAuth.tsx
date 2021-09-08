import axios from 'axios'
import { useCallback } from 'react'
import { useHistory } from 'react-router'
import { User } from '../types/api/user'
import { MessageError } from '../components/molecules/Messages'
import { MessageSuccess } from '../components/molecules/Messages'
import { MessageWarning } from '../components/molecules/Messages'
import { useLoginUser } from './useLoginUser'

export const useAuth = () => {
  const history = useHistory()
  const { setLoginUser } = useLoginUser()

  const login = useCallback(
    (id: string) => {
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
          if (res.data) {
            const isAdmin = res.data.id === 10 ? true : false
            setLoginUser({ ...res.data, isAdmin })
            history.push('./home')
            alert('login success')
            return <MessageSuccess />
          } else {
            alert('User not found')
            return <MessageWarning />
          }
        })
        .catch(() => {
          alert('login error')
          return <MessageError />
        })
    },
    [history, setLoginUser]
  )
  return { login }
}
