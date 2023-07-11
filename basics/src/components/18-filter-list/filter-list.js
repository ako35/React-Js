import React, { useState } from "react";
import { Container, Form, ListGroup } from "react-bootstrap";
import studentsData from "../../assets/data/students.json";

const FilterList = () => {
  const [search, setSearch] = useState("");

  const filteredStudents =
    search.length === 0
      ? null
      : studentsData.filter((student) =>
          student.name.toLowerCase().includes(search.toLowerCase())
        );
  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Isme Gore Listele</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ara..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></Form.Control>
        </Form.Group>
      </Form>
      <ListGroup>
        {
          filteredStudents && filteredStudents.map((student) => {
            return (
              <ListGroup.Item key={student.id}>
                {student.name}
              </ListGroup.Item>
            )
          })
        }
      </ListGroup>
    </Container>
  );
};

export default FilterList;
