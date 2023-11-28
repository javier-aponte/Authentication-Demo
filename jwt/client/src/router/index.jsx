import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage />
    },
    {
      path: "/",
      element: <h1>Router</h1>
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}