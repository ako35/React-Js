import React, { useState } from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap'

const Counter1 = () => {
    const [counter, setCounter] = useState(100)

  return (
    <Container>
        <h2>Counter 1</h2>
        <ButtonGroup>
            <Button variant='danger' onClick={() => setCounter((prev => prev + 1))}>+</Button>
            <Button variant='secondary'>{counter}</Button>
            <Button variant='success' onClick={() => setCounter((prev => prev - 1))} >-</Button>
            <Button variant='warning' onClick={() => setCounter(0)}>Reset</Button>
        </ButtonGroup>
    </Container>
  )
}

export default Counter1