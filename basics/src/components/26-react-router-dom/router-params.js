import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const RouterParams = () => {
    const [userData, setUserData] = useState({});
    const params = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
            .then(res => res.json())
            .then(data => setUserData(data));
    }, [])

  return (
    <div>
        <h2>{userData?.name}</h2>
        <h3>{userData?.email}</h3>
        <h4>{userData?.phone}</h4>
    </div>
  )
}

export default RouterParams