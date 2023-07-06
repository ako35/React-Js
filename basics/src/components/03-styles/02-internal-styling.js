import React from 'react'

const InternalStyling = () => {
    const styleTitle = {
        border: '1px solid red',
        borderRadius: '10px',
        fontSize: '20px',
        textAlign: 'center',
    }

    const styleContent = {
        ...styleTitle,
        color: 'red'
    }
  return (
    <div>
        <h2 style={styleTitle}>React Donguleri</h2>
        <p style={styleContent}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores sed dolorum sapiente maxime tenetur minima totam officia doloribus vel architecto? Harum voluptatum dolor saepe mollitia ab voluptate porro nam soluta.
        </p>
    </div>
  )
}

export default InternalStyling