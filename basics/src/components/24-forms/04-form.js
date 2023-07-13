import React, { useState } from "react";
import { Button, Container, Form, FormGroup, FormLabel } from "react-bootstrap";

const Form4 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    terms: false,
  });

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData((prev) => ({ ...prev, [e.target.name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <Container>
      <h2>Form - Pratik 2</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Ad</FormLabel>
          <Form.Control
            type="text"
            placeholder="Adinizi giriniz"
            value={formData.firstName}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>Soyad</FormLabel>
          <Form.Control
            type="text"
            placeholder="Soyadinizi giriniz"
            value={formData.lastName}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>Email</FormLabel>
          <Form.Control
            type="text"
            placeholder="Emailinizi giriniz"
            value={formData.email}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>Telefon</FormLabel>
          <Form.Control
            type="text"
            placeholder="Telefonunuzu giriniz"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>Cinsiyet</FormLabel>
          <FormGroup>
            <Form.Check
              type="radio"
              label="Erkek"
              name="gender"
              value="erkek"
              onChange={handleChange}
              inline
            />
            <Form.Check
              type="radio"
              label="Kadın"
              name="gender"
              value="kadın"
              onChange={handleChange}
              inline
            />
            <Form.Check
              type="radio"
              label="Diger"
              name="gender"
              value="diger"
              onChange={handleChange}
              inline
            />
          </FormGroup>
        </FormGroup>

        <FormGroup>
          <Form.Check
            type="checkbox"
            label="Gizlilik Sözleşmesini okudum"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
          />
        </FormGroup>

        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default Form4;
