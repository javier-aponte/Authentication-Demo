import { Box, Card, CardContent, TextField, Button, Typography } from '@mui/material'
import { Form, useLoaderData } from 'react-router-dom'
import FeedSharpIcon from '@mui/icons-material/FeedSharp';

export default function HomePage() {
  const data = useLoaderData()

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
        {/* <LinearProgress sx={{ visibility: isSubmitting ? "visible" : "hidden" }} /> */}
        <CardContent
          sx={{
            margin: 2.5,
          }}
        >
          <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
            <div>
              <Typography variant="h4" fontWeight={700} >Bienvenido {data.name}</Typography>
              <Typography variant="body2" color={"GrayText"} marginTop={1}>Información Personal</Typography>
            </div>
            <FeedSharpIcon sx={{ fontSize: "45px", display: { xs: "none", sm: "inline-block" } }} />
          </Box>
          <Form action="/" method="post" replace>
            <Box
              display={"flex"}
              flexDirection={"column"}
              marginTop={4}
              rowGap={2}
            >
              <TextField
                label="Nombres"
                type="text"
                value={data.name}
                disabled
                required
              />
              <TextField
                label="Apellidos"
                type="text"
                value={data.lastName}
                disabled
                required
              />
              <TextField
                label="Dirección"
                type="text"
                value={data.address}
                disabled
                required
              />
              <TextField
                label="Teléfono"
                type="text"
                value={data.phone}
                disabled
                required
              />
              <TextField
                label="Correo Electrónico"
                type="email"
                value={data.email}
                disabled
                required
              />
              <Button
                /* disabled={isSubmitting} */
                size="large"
                type="submit"
                variant="contained"
                color='error'
              >
                Cerrar Sesión
              </Button>
            </Box>
          </Form>
        </CardContent>
      </Card>
    </Box>
  )
}