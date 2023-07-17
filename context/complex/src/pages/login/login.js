import React, { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  }
  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="email">Email: </label>
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <br />
        <br />
        <button >Formu Gonder</button>
      </form>
    </div>
  );
};

export default Login;
