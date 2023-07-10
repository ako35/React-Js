import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Person = () => {
  return (
    <Card className='my-3'>
      <Row>
        <Col md={4} lg={3} xl={2}>
            <Card.Img variant="top" src="https://picsum.photos/200/300" />
            <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
                </Card.Text>
            </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default Person