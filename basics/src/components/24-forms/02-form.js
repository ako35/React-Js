import React, { useEffect, useState } from "react";
import { Container, Form, FormGroup } from "react-bootstrap";

const Form2 = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);

  useEffect(() => {
      setNum3(+num1 + +num2);
  }, [num1, num2]);
  return (
    <Container>
      <Form>
        <FormGroup>
          <Form.Label>First Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your full name"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Form.Label>Second Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your full name"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Form.Label>Total: </Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your full name"
            value={num3}
            disabled
            onChange={(e) => setNum3(e.target.value)}
          />
        </FormGroup>
      </Form>
    </Container>
  );
};

export default Form2;
