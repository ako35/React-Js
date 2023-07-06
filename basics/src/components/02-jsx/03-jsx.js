import React from 'react'

const Jsx3 = () => {
    const user = {
        firstName: 'Ali',
        lastName: 'Kocan',
        age: 25,
        email: 'O5BvO@example.com',
        occupation: 'Web Developer'
    }

    const error = false;
  return (
    <div>
        {
            user.age > 18 && <h1>Bu icerik 18 yasindan buyukler icindir.</h1>
        }
        {
            user.age < 18 || <h1>Bu icerik 18 yasindan buyukler icindir.</h1>
        }
        {
            !error && <h1>Bu bir hatadir.</h1>
        }
    </div>
  )
}

export default Jsx3