import React from 'react'
import { Container } from 'react-bootstrap'
import { GiCarrot, GiSeaTurtle } from 'react-icons/gi'
import { FaCat } from 'react-icons/fa'

const ReactIcons = () => {
  return (
    <Container>
        <h2>React Icons</h2>
        <GiCarrot className='fs-1' style={{ color: 'orangered' }} />
        <GiSeaTurtle className='fs-1' style={{ color: 'green' }} />
        <FaCat className='fs-1' style={{ color: 'gray' }} />
    </Container>
  )
}

export default ReactIcons