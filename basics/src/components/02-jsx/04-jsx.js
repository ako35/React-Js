import React from 'react'

const Jsx4 = () => {
    const names = ['Ali', 'Kocan', 'Kemal']
    const cities = ['Ankara', 'Istanbul', 'Izmir']

    const nameInfo = names.map((name, index) => {
        return <div key={index}>{name}</div>
    })

    const check = false

    console.log(nameInfo)
    console.log(check)

  return (
    <div>
        <ul>
            {
                names.map((name, index) => <li key={index}>{name}</li>)
            }
        </ul>
        <select>
            {
                cities.map((city, index) => <option key={index}>{city}</option>)
            }
        </select>
    </div>
  )
}

export default Jsx4