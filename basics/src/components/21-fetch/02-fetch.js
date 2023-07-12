import React, { useEffect, useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import UserCard from './02-user-card'

const Fetch2 = () => {
    const [users, setUsers] = useState([])
    const [flag, setFlag] = useState(false)

    const updateUser = async (userId, payload) => {
        await fetch(`https://648cb01b8620b8bae7ed41a9.mockapi.io/api/v1/users/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        setFlag(prevVal => !prevVal)
    }

    const userInfo = {
        avatar: "https://picsum.photos/200",
        country: "Turkey",
        email: "v8oOe@example.com",
        firstName: "Rumeysa",
        lastName: "Kocan",
        id: "1"
    }

    const loadUserData = async () => {
        await fetch('https://648cb01b8620b8bae7ed41a9.mockapi.io/api/v1/users')
            .then((response) => response.json())
            .then((data) => {
                setUsers(data)
                console.log(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        loadUserData();
    }, [flag])
  return (
    <Container>
        <Row className='gap-1 mb-3'>
            {
                users?.map((user) => (
                    <UserCard key={user.id} {...user} />
                ))
            }
        </Row>
        <Button variant='success' onClick={() => updateUser(1, userInfo)} >Update User</Button>
    </Container>
  )
}

export default Fetch2