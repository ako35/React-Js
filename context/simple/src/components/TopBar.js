import React, { useContext } from 'react'
import './TopBar.css'
import AppContext from '../store/store'

const TopBar = () => {
  const store = useContext(AppContext)

  const formatCurrency = (currency) => {
    if(Object.keys(store.currencies).length === 0) return 0;
    return (1 / store.currencies[currency]).toFixed(2)
  }

  return (
    <header>
      <nav className='navbar'>
        <h3>Exchange</h3>
        <div>
          <div>Dolar: {formatCurrency('USD')}</div>
          <div>Euro : {formatCurrency('EUR')}</div>
        </div>
      </nav>
    </header>
  )
}

export default TopBar