import { About } from "../components/pages/About"
import { CommentFeed } from "../components/pages/CommentFeed"
import { Home } from "../components/pages/Home"
import { Page404 } from "../components/pages/Page404"
import { Setting } from "../components/pages/Setting"
import { UserManagement } from "../components/pages/UserManagement"

export const homeRoutes = [
  {
    path: '/',
    exact: true,
    children: <Home />,
  },
  {
    path: '/user_management',
    exact: false,
    children: <UserManagement />,
  },
  {
    path: '/about',
    exact: false,
    children: <About />,
  },
  {
    path: '/setting',
    exact: false,
    children: <Setting />,
  },
  {
    path: '/feed',
    exact: false,
    children: <CommentFeed />,
  },
  {
    path: '*',
    exact: false,
    children: <Page404 />,
  },
]