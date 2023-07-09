import React from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'

const ProductHeader = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Techno Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">AnaSayfa</Nav.Link>
            <Nav.Link href="#action2">Urunler</Nav.Link>
            <Nav.Link href="#action3">Hakkimizda</Nav.Link>
            <Nav.Link href="#action4">Bize Ulasin</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default ProductHeader