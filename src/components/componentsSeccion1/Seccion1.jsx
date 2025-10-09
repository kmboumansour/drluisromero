import { Box, Button, Stack, Typography } from '@mui/material'
import './seccion1.css'
import { useState } from 'react';
import Form from '../componentsForm/Form';

const Seccion1 = () => {
    const [formOpen, setFormOpen] = useState(false);

    const handleFormOpen = () => {
        setFormOpen(!formOpen);
      };
  return (
<Stack alignItems="center" style={{width:"100%", height:"90vh", backgroundImage: "url('/images/temp.jpg')", backgroundSize: "cover", backgroundPosition: "center", paddingTop:"1%", borderRadius:"0px 0px 40px 40px", zIndex:1, position:"relative"}}>
{formOpen && <Form />}
<Stack spacing={20} style={{width:"65%"}}>
<Stack direction="row" justifyContent="space-between" alignItems="center" style={{width:"100%", height:"8vh", backgroundColor:"#fff", borderRadius:"40px", padding:"0% 1%"}}>
    <img src="/images/logo.svg" alt="logo" style={{width:"13%"}}/>

    <Stack direction="row" justifyContent="center" alignItems="center" spacing={3}>
        <Button className='btnSeccion1'>
            Inicio
        </Button>
        <Button className='btnSeccion1'>
            Sobre mi
        </Button>
        <Button className='btnSeccion1'>
            Servicios
        </Button>
        <Button className='btnSeccion1'>
            Blog
        </Button>
 
    </Stack>

    <Button className='btnContacto' onClick={handleFormOpen}>
        Contacto
    </Button>
  

</Stack>

<Stack spacing={2.5} style={{width:"50%", backgroundColor:"transparent", borderRadius:"40px", padding:"2% 2% 3% 2%", position:"relative"}}>
    <Box style={{width:"100%", height:"100%", position:"absolute", top:0, left:0, background:"linear-gradient(90deg,rgba(102, 102, 102, 0.59) 1%, rgba(255, 255, 255, 0) 100%)", borderRadius:"40px", zIndex:0, backdropFilter:"blur(10px)"}}/>
    <Stack style={{zIndex:1}}>
    <Typography className='tituloSeccion1'>
    Cirujano Ortopédico y Traumatólogo
    </Typography>

    </Stack>
    <Stack style={{zIndex:1}}>
    <Typography className='subtituloSeccion1'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
    </Typography>
    </Stack>
    <Stack style={{zIndex:1}}>
    <ul className='listaSeccion1'>
        <li className='itemListaSeccion1'>Especialista en Medicina deportiva y lesiones</li>
        <li className='itemListaSeccion1'>Experiencia en dolor muscular, esquletico y articular</li>
        <li className='itemListaSeccion1'>Presencial o telemedicina</li>
        <li className='itemListaSeccion1'>Atención médica personalizada 24/7</li>
        <li className='itemListaSeccion1'>Presencial o telemedicina</li>
       
    </ul>
    </Stack>

    <Stack style={{zIndex:1}}>
    <Button className='btnAgendar' onClick={handleFormOpen}>
        Agenda una cita
    </Button>
    </Stack>

  
</Stack>
</Stack>



</Stack>
  )
}

export default Seccion1
