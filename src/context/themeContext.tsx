import { createContext, useState, useEffect } from 'react'

type ThemeName = 'light' | 'dark' | string
type ThemeContextType = {
  theme: ThemeName
  setTheme: (name: ThemeName) => void
}

const getInitialTheme = () => {
  // Check if we already have a stored value in the localStorage. If not check the media query if the user browser prefers a dark or light color scheme using prefers-color-scheme media query.
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme')
    if (typeof storedPrefs === 'string') {
      return storedPrefs
    }

    const userMedia = window.matchMedia('(prefers-color-scheme:dark)')
    if (userMedia.matches) {
      return 'dark'
    }
  }
  // returning default theme here
  return 'light'
}

 export const ThemeContext = createContext<ThemeContextType>(null)

export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState(getInitialTheme)

  const rawSetTheme = rawTheme => {
    const root = window.document.documentElement
    const isDark = theme === 'dark'

    root.classList.remove(isDark ? 'light' : 'dark')
    root.classList.add(rawTheme)

    localStorage.setItem('color-theme', rawTheme)
  }

  if (initialTheme) {
    rawSetTheme(initialTheme)
  }

  useEffect(() => {
    rawSetTheme(theme)
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}
