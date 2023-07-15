import React from "react";
import { Container } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormikYup1 = () => {
  
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <Container>
      <h2>FormikYup</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={formik.values.name}
          onChange={formik.handleChange}

          // {...formik.getFieldProps("name")}
        />
        {formik.touched.name && formik.errors.name ? (
          <span style={{ color: "red" }}>{formik.errors.name}</span>
        ) : null}
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}

          // {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <span style={{ color: "red" }}>{formik.errors.email}</span>
        ) : null}
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"

          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}

          // {...formik.getFieldProps("password")}
        />
        {formik.touched.password && formik.errors.password ? (
          <span style={{ color: "red" }}>{formik.errors.password}</span>
        ) : null}
        <br />
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
};

export default FormikYup1;
