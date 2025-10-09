import { Stack, Typography } from "@mui/material"
import "./seccion3.css"


const Seccion3 = () => {
  return (
  <Stack style={{width:"100%", height:"70vh", background:"linear-gradient(90deg,rgba(191, 168, 140, 0.53) 1%, rgba(175, 192, 222, 0.6) 100%)", border:"1px solid red",}}>
<Stack direction="row" justifyContent="center" alignItems="flex-start" spacing={4} style={{width:"100%", height:"60%", border:"1px solid blue", backgroundColor:"#fff", borderRadius:"10px", paddingTop:"2%"}}>

<Stack justifyContent="center" alignItems="center" spacing={-1} style={{width:"8vw"}}>
    <Typography className="numberSeccion3">
        36
    </Typography>
    <Typography className="textSeccion3">
        Años de<br/>experiencia
    </Typography>
</Stack>

<Stack justifyContent="center" alignItems="center" spacing={-1} style={{width:"8vw"}}>
    <Typography className="numberSeccion3">
        50K
    </Typography>
    <Typography className="textSeccion3">
        Pacientes<br/>atendidos
    </Typography>
</Stack>

<Stack justifyContent="center" alignItems="center" spacing={-1} style={{width:"8vw"}}>
    <Typography className="numberSeccion3">
        4
    </Typography>
    <Typography className="textSeccion3">
        Especialidades<br/>Medicas
    </Typography>
</Stack>

<Stack justifyContent="center" alignItems="center" spacing={-1} style={{width:"8vw"}}>
    <Typography className="numberSeccion3">
        4
    </Typography>
    <Typography className="textSeccion3">
        Libros<br/>publicados
    </Typography>
</Stack>


</Stack>
  </Stack>
  )
}

export default Seccion3
