import { useCallback, useState } from 'react'
import axios from 'axios'
import { User } from '../types/api/user'
import { MessageError } from '../components/molecules/Messages'

export const useAllUsers = () => {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState<Array<User>>()
  const getUsers = useCallback(() => {
    setLoading(true)
    axios
      .get<Array<User>>('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setUsers(res.data)})
         .catch(() => {
           return <MessageError />
         })
         .finally(()=>{
           setLoading(false)
         })
  }, [])
  return { getUsers, loading, users }
}
