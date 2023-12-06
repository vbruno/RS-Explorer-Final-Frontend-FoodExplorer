import { api } from "../../services/api/axios/axiosConfig";
import { Container } from "./styles";

import { Counter } from "../Counter";
import { Button } from "../Button";

import IconHeart from "../../assets/icons/Heart.svg?react";

export function CardFood({ dataFood = {} }) {
  const imageFood = `${api.defaults.baseURL}/image/${dataFood.image}`;

  return (
    <Container>
      <img src={imageFood} alt="Prato" />
      <h1>{dataFood.name} &gt; </h1>
      <p>{dataFood.description}</p>
      <h2>R$ {dataFood.price}</h2>
      <div>
        <Counter />
        <Button>incluir</Button>
      </div>
      <button>
        <IconHeart />
      </button>
    </Container>
  );
}
