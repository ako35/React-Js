import React from 'react'
import { Button, Container } from 'react-bootstrap'

const Events = () => {

    const parametresizFonksiyon = () => {
        alert('Parametresiz Fonksiyon ');
    }

    const parametreliFonksiyon = (parametre) => {
        alert('Parametreli Fonksiyon '  + parametre);
    }
  return (
    <Container className='d-flex gap-3'>
        <Button variant='danger'onClick={parametresizFonksiyon} >Parametresiz</Button>
        <Button variant='warning' onClick={() => parametreliFonksiyon('Merhaba')}>Parametreli</Button>
    </Container>
  )
}

export default Events