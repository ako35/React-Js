import React from 'react'

const Welcome1 = (props) => {
    console.log(props)
  return (
    <div className='welcome'>
        <h1>
            Welcome {props.firstName} {props.lastName}
        </h1>
        {
            props.disabled || <p>{props.desc}</p>
        }
        {
            props.disabled && <p>Burasi sadece admine ait</p>
        }
    </div>
  )
}

export default Welcome1