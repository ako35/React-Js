import { Delete } from "@mui/icons-material";
import React from "react";
import { Card } from "react-bootstrap";

const Person = (props) => {
  return (
    <Card className='h-100' style={{ width: '250px'}}>
      <Card.Img
        variant="top"
        src={require(`../../assets/img/${props.image}`)}
        alt={props.name}
      />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>Yas: {props.age}</Card.Text>
        <Delete style={{cursor: 'pointer'}} onClick={() => props.deletePerson(props.id)} />
      </Card.Body>
    </Card>
  );
};

export default Person;
