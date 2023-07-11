import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

const FonksiyonTurundeComponentler = () => {
  const [name, setName] = useState("Ramazan");
  const [counter, setCounter] = useState(0);
  console.log(counter);

  useEffect(() => {
    console.log("FonksiyonTurundeComponentler ilk mount edildiginde calisir");

    return () => {
      console.log("FonksiyonTurundeComponentler unmount edildiginde calisir");
    };
  }, []);

  useEffect(() => {
    console.log("FonksiyonTurundeComponentler update edildiginde calisir");
  });

  useEffect(() => {
    console.log("FonksiyonTurundeComponentler name state i degisti.");
  }, [name]);

  console.log("FonksiyonTurundeComponentler ilk burasi calisir");
  return (
    <Container>
      <h2>FonksiyonTurundeComponentler</h2>
      <p>
        Fonksiyon turunde componentler react 16.8 versiyonuna kadar kullanilan
        ve state yonetimi icin kullanilan componentlerdir.
      </p>
      <p>{name}</p>
      <Button onClick={() => setName("Ali")}>Ismi Degistir</Button>
      <Button
        onClick={() =>
          setCounter((prevValue) => prevValue + 1)
        }
      >
        Artir
      </Button>
    </Container>
  );
};

export default FonksiyonTurundeComponentler;
