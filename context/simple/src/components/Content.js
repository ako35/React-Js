import React, { useContext, useState } from "react";
import AppContext from "../store/store";

const Content = () => {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("USD");
  const store = useContext(AppContext);

  const handleChange = (e) => {
    const {name, value} = e.target;

    if(name === "amount") {
      setAmount(value);
    }

    if(name === "currency") {
      setCurrency(value);
    }
  }

  const result = amount ? (amount / store.currencies[currency]) : 0;

  return (
    <div>
      <form action="">
        <input
          type="number"
          name="amount"
          placeholder="Enter amount"
          value={amount}
          onChange={handleChange}
        />
        <select name="currency" value={currency} onChange={handleChange}>
          <option value="TRY">TRY</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
          <option value="RUB">RUB</option>
        </select>
        <p>{result.toFixed(2)}</p>
      </form>
    </div>
  );
};

export default Content;
