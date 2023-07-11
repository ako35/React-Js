import React, { useEffect, useState } from 'react'

const Fetch2 = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://648cb01b8620b8bae7ed41a9.mockapi.io/api/v1/users')
            .then((response) => response.json())
            .then((data) => {
                setUsers(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
  return (
    <div>Fetch2</div>
  )
}

export default Fetch2