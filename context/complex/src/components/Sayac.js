import React, { useContext } from 'react'
import { StoreContext } from '../store/store'
import { decrement, increment, reset } from '../store/counter/actions'

const Sayac = () => {
    // const store = useContext(StoreContext)
    // const {counterState} = store
    // const {counter} = counterState

    // alttaki ile ayni islevi goruyor.

    const {counterState: {counter}, dispatchCounter} = useContext(StoreContext)

  return (
    <div>
      <h1>Sayac</h1>
      <h3>{counter}</h3>
      <button onClick={() => dispatchCounter(increment()) }>Artir</button>
      <button onClick={() => dispatchCounter(decrement()) }>Azalt</button>
      <button onClick={() => dispatchCounter(reset())}>Sifirla</button>
    </div>
  )
}

export default Sayac