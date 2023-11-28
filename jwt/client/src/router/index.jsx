import { RouterProvider, createBrowserRouter } from 'react-router-dom'

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <h1>Login</h1>
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