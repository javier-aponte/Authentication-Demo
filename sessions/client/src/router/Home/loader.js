import { redirect } from "react-router-dom"

const apiUrl = import.meta.env.VITE_API_URL

async function loader() {
  try {
    const response = await fetch(`${apiUrl}/`, {
      method: 'POST',
      credentials: 'include'
    })

    if (response.status === 401) return redirect('/login')

    const data = await response.json()

    return data.user
  } catch (error) {
    throw new Response({}, { status: 500 })
  }
}

export default loader