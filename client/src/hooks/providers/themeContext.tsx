import { createContext, useState, useEffect } from 'react'

type ThemeName = 'light' | 'dark' | string
type ThemeContextType = {
  theme: ThemeName
  setTheme: (name: ThemeName) => void
}

const getInitialTheme = () => {
  // Check if we already have a stored value in the localStorage. If not check the media query if the user browser prefers a dark or light color scheme using prefers-color-scheme media query.
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('current-theme')
    if (typeof storedPrefs === 'string') {
      return storedPrefs
    }

    const userMedia = window.matchMedia('(prefers-color-scheme:dark)')
    if (userMedia.matches) {
      return 'dark'
    }

    // returning default theme here
    return 'light'
  }
}

export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState(getInitialTheme)

  const checkTheme = theme => {
    const root = window.document.documentElement
    const isDark = theme === 'dark'

    root.classList.remove(isDark ? 'light' : 'dark')
    root.classList.add(theme)

    localStorage.setItem('current-theme', theme)
  }

  if (initialTheme) {
    checkTheme(initialTheme)
  }

  useEffect(() => {
    checkTheme(theme)
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}
export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)
