import React, { useEffect, useState } from 'react'
import { Container, ListGroup } from 'react-bootstrap'

const Fetch = () => {

  const [usersData, setUsersData] = useState([])
  const getMyUserData = async () => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setUsersData(data)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })

    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    setUsersData(data)
  }

  useEffect(() => {
    getMyUserData()
  }, [])
    
  return (
    <Container>
        <h2>Fetch</h2>
        <ListGroup>
          {
            Object.keys(usersData).length > 0 && usersData.map((user) => {
              return (
                <ListGroup.Item key={user.id}>
                  {user.name}
                </ListGroup.Item>
              )
            })
          }
        </ListGroup>
    </Container>
  )
}

export default Fetch