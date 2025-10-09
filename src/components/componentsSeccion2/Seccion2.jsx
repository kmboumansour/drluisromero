import { Box, Button, Stack, Typography } from "@mui/material"
import "./seccion2.css"


const Seccion2 = () => {
  return (
<Stack direction="row" justifyContent="center" alignItems="center" spacing={8} style={{width:"100%", height:"60vh", background:"linear-gradient(90deg,rgba(191, 168, 140, 0.53) 1%, rgba(175, 192, 222, 0.6) 100%)", paddingTop:"4%", marginTop:"-2%", zIndex:0, position:"relative"}}>

    <Stack spacing={4} style={{width:"35vw", height:"50vh"}}>
        <Stack>
            <Typography className="titleSeccion2">
                 Sobre mi    
            </Typography>
            <Typography className="textSeccion2">
                Tu aliado en salud<br/>y calidad de vida
            </Typography>
        </Stack>

        <Typography className="text2">
            Como profesional de la salud, mi compromiso es brindarte una atención integral y personalizada para mejorar tu bienestar físico y emocional. Mi experiencia y dedicación están enfocadas en ofrecerte los mejores tratamientos y soluciones para tu salud.
        </Typography>

        <Stack>
            <ul className="listSeccion2">
                <li className="text2">Cirugía Ortopédica: Cirugía de fracturas, fracturas de cadera, de muñeca, codos, manos. Fémur, tibia, Peroné y pie.</li>
                <li className="text2">Ortopedia: La correcta forma del esqueleto durante el crecimiento de los niños.</li>
                <li className="text2">Lesiones Deportivas: La atención prevención y tratamiento de este tipo de lesiones, amplisima experiencia en retornar a los atletas a sus actividades con mejor nivel que antes de lesionarse.</li>
            </ul>
        </Stack>

        <Button className="btnSeccion2">
            Conocer más
        </Button>

    </Stack>

    <Box style={{width:"35vw", height:"50vh", backgroundImage:"url('/images/luisromero3.svg')", backgroundSize:"cover", backgroundPosition:"center", borderRadius:"20px"}} />

</Stack>
  )
}

export default Seccion2
