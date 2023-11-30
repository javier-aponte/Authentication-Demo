import { redirect } from "react-router-dom"

const apiUrl = import.meta.env.VITE_API_URL

async function action({ request }) {
  const formData = await request.formData()
  const email = formData.get('email')
  const password = formData.get('password')
  const errors = {}

  try {
    const response = await fetch(`${apiUrl}/auth/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })

    const data = await response.json()

    if (!data.success) {
      errors.general = 'Correo Electrónico o Contraseña incorrectos.'
      return errors
    }

    return redirect('/')
  } catch (error) {
    errors.general = 'Lo sentimos, ocurrio un problema inesperado. Por favor intente de nuevo.'
    return errors
  }
}

export default action