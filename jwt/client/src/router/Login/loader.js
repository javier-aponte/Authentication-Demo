import { redirect } from "react-router-dom"

const apiUrl = import.meta.env.VITE_API_URL

async function loader() {
  try {
    const response = await fetch(`${apiUrl}/auth/check-session`, {
      method: 'POST',
      credentials: 'include'
    })

    if (response.status === 401) return null

    return redirect('/')
  } catch (error) {
    throw new Response("Server Error!", { status: 500 })
  }
}

export default loader