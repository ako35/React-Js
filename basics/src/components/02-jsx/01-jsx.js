import React from 'react'

const Jsx1 = () => {
    const name = 'Ali Kocan'

    const user = {
        name: 'Ali Kocan',
        age: 25
    }
  return (
    <>
        <p>
            Butun jsx kodlari bir element icinde olmalidir.
            {/* ben bir yorum satiriyim */}
        </p>
        <p>
            Merhaba {name}
        </p>
        <h2>Kullanici bilgileri</h2>
        <p>
            Kullanici adi: {user.name} 
        </p>
        <p>
            Kullanici yasi: {user.age}
        </p>
    </>
  )
}

export default Jsx1