import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";

const Form3 = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("https://jsonplaceholder.typicode.com/users", {...form})
    }
  return (
    <Container>
      <h2>Form - Pratik 1</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your first name"
            value={form.firstName}
            onChange={(e) =>
              setForm(prev => ({ ...prev, firstName: e.target.value }))
            }
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your last name"
            value={form.lastName}
            onChange={(e) =>
              setForm(prev => ({ ...prev, lastName: e.target.value }))
            }
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={(e) =>
              setForm(prev => ({ ...prev, email: e.target.value }))
            }
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your phone number"
            value={form.phoneNumber}
            onChange={(e) =>
              setForm(prev => ({ ...prev, phoneNumber: e.target.value }))
            }
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

      </Form>
    </Container>
  );
};

export default Form3;
