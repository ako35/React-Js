import React from 'react'
import { Button } from 'react-bootstrap'

const ChildComponent = (props) => {

    // const increaseCounter = () => {
    //     props.handleCounter(1)
    // }

    const increaseCounter = () => {
        props.setCounter(prev => prev + 1)
    }

  return (
    <div>
        <h2>Cift Yonlu Veri Aktarimi</h2>
        {/* <Button variant='outline-success' onClick={increaseCounter}>Arttir</Button> */}
        <Button variant='outline-success' onClick={increaseCounter}>Arttir</Button>
    </div>
  )
}

export default ChildComponent