import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Container, Form } from "react-bootstrap";
import * as yup from "yup";

const FormikYup2 = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    id: "",
  };

  const validationSchema = yup.object({
    firstName: yup
      .string()
      .min(2, "isim en az iki karakter olmalidir!")
      .required("Girilmesi zorunlu alan"),
    lastName: yup
      .string()
      .min(2, "soyisim en az iki karakter olmalidir!")
      .required("Girilmesi zorunlu alan"),
    email: yup
      .string()
      .email("Gecerli bir email adresi giriniz!")
      .required("Girilmesi zorunlu alan"),
    password: yup
      .string()
      .min(8, "sifre en az 8 karakter olmalidir!")
      .max(16, "sifre en az 16 karakter olmalidir!")
      .required("Girilmesi zorunlu alan"),
  });

  const onSubmit = async (values) => {
    console.log(values);

    const dto = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      id: 4,
    }

    try {
        const resp = await axios.put(`https://648cb01b8620b8bae7ed41a9.mockapi.io/api/v1/login/${dto.id}`, dto);
        console.log(resp);
    } catch (error) {
        console.log(error.message);        
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });
  return (
    <Container>
      <h2>FormikYup2</h2>
      <p>*Doldurulmasi zorunlu alanlar</p>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group>
          <Form.Label>Id</Form.Label>
          <Form.Control
            type="number"
            name="id"
            placeholder="Id"
            {...formik.getFieldProps("id")}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isValid={formik.touched.firstName && !formik.errors.firstName}
            isInvalid={formik.touched.firstName && formik.errors.firstName}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.firstName}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isValid={formik.touched.lastName && !formik.errors.lastName}
                isInvalid={formik.touched.lastName && formik.errors.lastName}
            />
            <Form.Control.Feedback type="invalid">
                {formik.errors.lastName}
            </Form.Control.Feedback>          
        </Form.Group>

        <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isValid={formik.touched.email && !formik.errors.email}
                isInvalid={formik.touched.email && formik.errors.email}
            />
            <Form.Control.Feedback type="invalid">
                {formik.errors.email}
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isValid={formik.touched.password && !formik.errors.password}
                isInvalid={formik.touched.password && formik.errors.password}
            />
            <Form.Control.Feedback type="invalid">
                {formik.errors.password}
            </Form.Control.Feedback>
        </Form.Group>

        <button type="submit">Submit</button>
      </Form>
    </Container>
  );
};

export default FormikYup2;
