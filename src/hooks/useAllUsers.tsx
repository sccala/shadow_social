import { useCallback, useState } from 'react'
import axios from 'axios'
import { User } from '../types/api/user'
import { MessageError, MessageSuccess } from '../components/molecules/Messages'

export const useAllUsers = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [users, setUsers] = useState(null)
  const getUsers = useCallback(() => {
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
