import './App.css'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline, createTheme } from '@mui/material'
import Router from './router'

function App() {
  const theme = createTheme({
    palette: {
      background: {
        default: "#f2f2f2"
      }
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 8
          }
        }
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  )
}

export default App
