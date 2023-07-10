import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import peopleData from '../../assets/data/people.json'
import Person from './person'

const Birthday = () => {
    const [people, setPeople] = useState(peopleData)
    
    const deletePerson = (id) => {
        const newPeople = people.filter(person => person.id !== id)
        setPeople(newPeople)
    }
  return (
    <Container>
        <h2>Bugun Doganlar</h2>
        <p>Bugun dogan {people.length} kisi var</p>
        <Row>
            {
                people.map(person => (
                    <Col key={person.id} md={6} lg={4} xl={3} >
                        <Person {...person} deletePerson={deletePerson} />
                    </Col>
                ))
            }
        </Row>
        <Button variant='danger' onClick={() => setPeople([])} >Hepsini Temizle</Button>
        <Button variant='success' onClick={() => setPeople(peopleData)} >Verileri Geri Getir</Button>
    </Container>
  )
}

export default Birthday