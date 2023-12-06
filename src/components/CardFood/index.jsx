import { useState } from "react";

import { api } from "../../services/api/axios/axiosConfig";
import { useAuth } from "../../hooks/auth";
import { useOrders } from "../../hooks/useOrders";

import { Container } from "./styles";

import { Counter } from "../Counter";
import { Button } from "../Button";

import IconHeart from "../../assets/icons/Heart.svg?react";
import IconPencil from "../../assets/icons/Pencil.svg?react";

export function CardFood({ dataFood = {} }) {
  const { isAdministrator } = useAuth();
  const { handleAddOrder } = useOrders();
  const [counter, setCounter] = useState(0);

  const imageFood = `${api.defaults.baseURL}/image/${dataFood.image}`;

  function handleIncrement() {
    setCounter((prevState) => (prevState += 1));
  }

  function handleDecrement() {
    if (counter > 0) {
      setCounter((prevState) => (prevState -= 1));
    }
  }

  function handleAddFood() {
    setCounter(0);
    handleAddOrder({
      id: dataFood.id,
      name: dataFood.name,
      price: dataFood.price,
      quantity: counter,
      total: (counter * dataFood.price).toFixed(2),
    });
  }

  return (
    <Container>
      <img src={imageFood} alt="Prato" />
      <h1>{dataFood.name} &gt; </h1>
      <p>{dataFood.description}</p>
      <h2>R$ {dataFood.price.replace(".", ",")}</h2>
      <div>
        <Counter
          quantity={counter}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
        <Button onClick={handleAddFood}>incluir</Button>
      </div>
      <button>{isAdministrator() ? <IconPencil /> : <IconHeart />}</button>
    </Container>
  );
}
