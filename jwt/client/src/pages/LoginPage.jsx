import { Box, Card, LinearProgress, CardContent, TextField, FormHelperText, Button, Typography } from '@mui/material'
import { useNavigation, Form, useActionData } from 'react-router-dom'
import GavelIcon from '@mui/icons-material/Gavel'
import { useEffect, useRef } from 'react'

export default function LoginPage() {
  const isSubmitting = useNavigation().state === "submitting"
  const errors = useActionData()
  const formRef = useRef()
  const focusRef = useRef()

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset()
      focusRef.current.focus()
    }
  }, [isSubmitting])

  return (
    <Box
      display={"flex"}
      height={"100dvh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Card
        sx={{
          height: {
            xs: "100%",
            sm: "auto"
          },
          width: {
            xs: "100%",
            sm: 550
          },
          borderRadius: {
            xs: 0,
            sm: 5
          }
        }}
        variant={"elevation"}
        elevation={4}
      >
        <LinearProgress sx={{ visibility: isSubmitting ? "visible" : "hidden" }} />
        <CardContent
          sx={{
            margin: 2.5,
          }}
        >
          <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
            <div>
              <Typography variant="h4" fontWeight={700} >Iniciar Sesión</Typography>
              <Typography variant="body2" color={"GrayText"} marginTop={1}>Ingresa tus credenciales</Typography>
            </div>
            <GavelIcon sx={{ fontSize: "45px", display: { xs: "none", sm: "inline-block" } }} />
          </Box>
          <Form action="/login" method="post" ref={formRef} replace={true}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              marginTop={4}
              rowGap={2}
            >
              <TextField
                autoComplete="email"
                id="email"
                label="Correo Electrónico"
                name="email"
                type="email"
                inputRef={focusRef}
                required
              />
              <TextField
                autoComplete="current-password"
                id="password"
                label="Contraseña"
                name="password"
                type="password"
                required
              />
              {errors?.general && <FormHelperText error>{errors.general}</FormHelperText>}
              <Button
                disabled={isSubmitting}
                size="large"
                type="submit"
                variant="contained"
              >
                Ingresar
              </Button>
            </Box>
          </Form>
        </CardContent>
      </Card>
    </Box>
  )
}