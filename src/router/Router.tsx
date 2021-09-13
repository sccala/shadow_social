import { VFC, memo } from 'react'
import { Route, Switch } from 'react-router'
import { Login } from '../components/pages/Login'
import { Page404 } from '../components/pages/Page404'
import { FooterLayout } from '../components/template/FooterLayout'
import { HeaderLayout } from '../components/template/HeaderLayout'
import { homeRoutes } from './HomeRoutes'

export const Router: VFC = memo(() => {
  return (
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
      <Route path='*'>
        <Page404 />
      </Route>
    </Switch>
  )
})
