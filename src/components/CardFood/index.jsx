import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api/axios/axiosConfig";
import { useAuth } from "../../hooks/auth";
import { useOrders } from "../../hooks/useOrders";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { DEVICE_TYPE } from "../../styles/deviceBreakpoints";

import { Container } from "./styles";

import { Counter } from "../Counter";
import { Button } from "../Button";

import IconHeart from "../../assets/icons/Heart.svg?react";
import IconPencil from "../../assets/icons/Pencil.svg?react";

export function CardFood({ dataFood = {} }) {
  const isMobile = useMediaQuery(DEVICE_TYPE.MOBILE);
  const navigate = useNavigate();
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

  function handleEditFood() {
    navigate(`/dish/edit/${dataFood.id}`);
  }

  function handleDishDetail() {
    navigate(`/dish/${dataFood.id}`);
  }

  return (
    <Container>
      <button onClick={handleDishDetail}>
        <img src={imageFood} alt="Prato" />
      </button>
      <h1>{dataFood.name} &gt; </h1>
      {!isMobile && <p>{dataFood.description}</p>}
      <h2>R$ {dataFood.price.replace(".", ",")}</h2>
      <div>
        {isAdministrator() ? (
          <Button onClick={handleEditFood}>Editar</Button>
        ) : (
          <>
            <Counter
              quantity={counter}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
            />
            <Button onClick={handleAddFood}>incluir</Button>
          </>
        )}
      </div>
      {isAdministrator() ? (
        <button onClick={handleEditFood}>
          <IconPencil />
        </button>
      ) : (
        <button onClick={() => console.log("Favorita Prato")}>
          <IconHeart />
        </button>
      )}
    </Container>
  );
}
