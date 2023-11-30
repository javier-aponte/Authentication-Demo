import { redirect } from "react-router-dom"

const apiUrl = import.meta.env.VITE_API_URL

async function action() {
  try {
    const response = await fetch(`${apiUrl}/auth/logout`, {
      method: 'POST',
      credentials: 'include'
    })

    if (response.status === 401) return redirect('./',)

    const data = await response.json()

    if (data.success) return redirect('/login')

  } catch (error) {
    throw new Response("Server Error!", { status: 500 })
  }
}

export default action