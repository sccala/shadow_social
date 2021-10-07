import { VFC, memo } from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { DashboardChat } from '../components/pages/Dashboard'
import { Login } from '../components/pages/Login'
import { Page404 } from '../components/pages/Page404'
import { FooterLayout } from '../components/template/FooterLayout'
import { HeaderLayout } from '../components/template/HeaderLayout'
// import { ThemeProvider } from '../hooks/providers/themeContext'
import { homeRoutes } from './HomeRoutes'

export const Router: VFC = memo(() => {
  return (
    
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route
            path='/home'
            render={({ match: { url } }) => (
              <Switch>
                {homeRoutes.map(route => (
                  <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
                    <HeaderLayout>{route.children}</HeaderLayout>
                    <FooterLayout>{route.children}</FooterLayout>
                  </Route>
                ))}
              </Switch>
            )}
          />

          <Route exact path='/chat'>
            <HeaderLayout />
            <DashboardChat />
          </Route>
          <Route path='*'>
            <Page404 />
          </Route>
        </Switch>
      </BrowserRouter>
    
  )
})
