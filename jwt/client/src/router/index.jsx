import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import LoginAction from './Login/action'
import LoginLoader from './Login/loader'
import HomePage from '../pages/HomePage'
import HomeLoader from './Home/loader'
import HomeAction from './Home/action'

export default function Router() {
  const serverError = <h1>Error del Servidor!</h1>
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage />,
      loader: LoginLoader,
      action: LoginAction,
      errorElement: serverError
    },
    {
      path: "/",
      element: <HomePage />,
      loader: HomeLoader,
      action: HomeAction,
      errorElement: serverError
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}