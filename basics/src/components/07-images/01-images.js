import React from 'react'
import Korkuluk from '../../assets/img/image2.jpg'

const Image = () => {
    const ortakStil = {
        margin: "1rem"
    }
  return (
    <div>
        <img src="https://picsum.photos/200" alt="" style={ortakStil} />        
        <img src="./image1.jpg" alt="" height={"200px"} style={ortakStil} /> 
        {/* public klasoru icerisindeki index.html dosyasi icindeymis gibi klasor yolu yazilir.  */}
        <img src={Korkuluk} alt="" height={"200px"} style={ortakStil} />
        <img src={require('../../assets/img/image3.jpg')} alt="" height={"200px"} style={ortakStil} />
    </div>
  )
}

export default Image