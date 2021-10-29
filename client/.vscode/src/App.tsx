// import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './hooks/providers/themeContext'

import { Router } from './router/Router'

export default function App() {
  return (
    <ThemeProvider initialTheme>
      <Router />
    </ThemeProvider>
  )
}
