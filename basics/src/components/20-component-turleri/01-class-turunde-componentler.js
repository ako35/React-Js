import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";

class ClassTurundeComponentler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ramazan",
      message: "Hello World",
      counter: 0,
    };
  }

  componentDidMount() {
    console.log("ClassTurundeComponentler ilk mount edildiginde calisir");
  }

  componentWillUnmount() {
    console.log("ClassTurundeComponentler unmount edildiginde calisir");
  }

  componentDidUpdate( prevProps, prevState) {
    console.log("ClassTurundeComponentler update edildiginde calisir");

    if (prevState.name !== this.state.name) {
      console.log("ClassTurundeComponentler name state i degisti.");
    }
  }
  render() {
    console.log("ClassTurundeComponentler ilk burasi calisir");
    return (
      <Container>
        <h2>ClassTurundeComponentler</h2>
        <p>
          Class turunde componentler react 16.8 versiyonuna kadar kullanilan ve
          state yonetimi icin kullanilan componentlerdir.
        </p>
        <p>{this.state.name}</p>
        <Button onClick={() => this.setState({ name: "Ramazan" })}>
          Ismi Degistir
        </Button>
        <p>{this.state.message}</p>
        <Button onClick={() => this.setState(prevState => ({
          counter: prevState.counter + 1
        }))}>
          Artir
        </Button>
      </Container>
    );
  }
}

export default ClassTurundeComponentler;
