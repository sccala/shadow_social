import { BrowserRouter } from 'react-router-dom'

import { Router } from './router/Router'
import { User } from './types/user'


const user: User = {
  name: 'Fake Name',
  hobbies: ['movie', 'game'],
}
export default function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}
