import React, { useState } from "react";
import { Container } from "react-bootstrap";

const Form1 = () => {
  const [fullName, setFullName] = useState("");

//   const handleChange = (e) => {
//     setFullName(e.target.value);
//   }

  return (
    <Container>
      <h2>Formlar</h2>
      <form action="">
        <label htmlFor="fullName">Full Name: </label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          placeholder="Enter your full name"
          value={fullName}
          // onChange={handleChange}
          onChange={(e) => setFullName(e.target.value)}
        />
      </form>
    </Container>
  );
};

export default Form1;
