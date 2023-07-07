import React from 'react'
import './02-image-gallery.scss'
import images from '../../assets/data/images.json'

const ImageGallery = () => {
    
  return (
    <div className="image-gallery">
        {
            images.map((image, index) => (
                    <div key={index}>
                        <img src={require(`../../assets/img/${image.name}`)} alt={image.title} />
                    </div>
                )
            )
        }
    </div>
  )
}

export default ImageGallery