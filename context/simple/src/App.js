import React, { useEffect, useState } from 'react'
import { settings } from './constants/constants';
import AppContext from './store/store';
import Exchange from './components/Exchange';

const App = () => {
    const [currencies, setCurrencies] = useState({});

    const loadData = async () => {
        try {
            const res = await fetch(`${settings.API_URL}/latest?from=${settings.currency.default}`)
                .then(res => res.json())
                .then(data => setCurrencies(data.rates));           
        } catch (error) {
            console.log(error)
        }
    }

    console.log(currencies);

    useEffect(() => {
        loadData();
    }, []);
  return (
    <AppContext.Provider value={{currencies}}>
        <div>
            <Exchange />
        </div>
    </AppContext.Provider>
  )
}

export default App