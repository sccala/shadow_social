import { VFC, memo } from 'react'
import { Route, Switch } from 'react-router'
import { Login } from '../components/pages/Login'
import { homeRoutes } from './HomeRoutes'

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Login></Login>
      </Route>
      <Route
        path="/home"
        render={({ match: { url } }) => (
          <Switch>
            {homeRoutes.map((route) => (
              <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
    </Switch>
  )
})
