import React from 'react'

const Jsx2 = () => {
    const isAdmin = false
    const loading = false

  return (
    <div>
        {
            isAdmin ? 
                <div>
                    <h2>Admin Menu</h2>
                    <ul>
                        <li>Kullanici olustur</li>
                        <li>Kullanici guncelle</li>
                    </ul>
                </div> : loading ?
                    <h2>Loading...</h2> :
                    <div>
                        <h2>Kullanici Menu</h2>
                        <ul>
                            <li>Profilim</li>
                            <li>Cikis yap</li>
                        </ul>
                    </div>
        }
    </div>
  )
}

export default Jsx2