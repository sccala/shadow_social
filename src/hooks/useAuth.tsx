import axios from 'axios'
import { useCallback } from 'react'
import { useHistory } from 'react-router'
import { User } from '../types/api/user'
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
          } else {
            alert('User not found')
          }
        })
        .catch(() => {
          alert('login error')
        })
    },
    [history, setLoginUser]
  )
  return { login }
}
