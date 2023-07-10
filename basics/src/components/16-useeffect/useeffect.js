import React, { useEffect, useState } from 'react'
import { Alert, Button, ButtonGroup, Container } from 'react-bootstrap'

const UseEffect = () => {
    const [message, setMessage] = useState('');
    const [counter, setCounter] = useState(0);

    // useEffect(() => {
    //     console.log('MOUNTING: sayfam ilk render edildiginde calisir.')

    //     const timer = setInterval(() => {
    //         console.log('Timer Calisti.')
    //     }, 1000)

    //     return () => {
    //         clearInterval(timer)
    //     }
    // })

    useEffect(() => {
        console.log('UPDATING: sadece sayfam ilk render edildiginde calisir.')

        return () => {
            console.log('UNMOUNTING: sayfam sadace unmounting edildiginde calisir.')
        }
    }, [])

    useEffect(() => {
        console.log('MOUNTING: sayfam her render edildiginde calisir.')
    })

    useEffect(() => {
        console.log('UPDATING: sayfam ilk render edildiginde message state i degistirildiginde calisir.')
    }, [message, counter])
    
  return (
    <Container>
        <h2>useEffect Hook</h2>
        <Alert variant='danger'>{message} -  </Alert>
        <ButtonGroup>
            <Button variant='success' onClick={() => setMessage('Merhaba')} >Set Message</Button>
            <Button variant='danger' onClick={() => setMessage('Error')}>Throw Error</Button>
            <Button variant='warning' onClick={() => setCounter(prev => prev + 1)} >{counter}</Button>
        </ButtonGroup>
    </Container>
  )
}

export default UseEffect