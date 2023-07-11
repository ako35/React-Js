import React, { useRef } from 'react'
import { Button, Container, Form } from 'react-bootstrap';

const UseRef = () => {
    const emailRef = useRef( null );
    const buttonRef = useRef( null );

    const handleFocus = () => {
        emailRef.current.focus();
        buttonRef.current.style.backgroundColor = 'red';
    }
  return (
    <Container>
        <Form>
            <Form.Control type="email" placeholder="Email" ref={emailRef} />
            <Button type="button" ref={buttonRef} onClick={handleFocus} >Set Focus</Button>
        </Form>
    </Container>
  )
}

export default UseRef