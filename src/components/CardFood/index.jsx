import { Container } from "./styles";

import { Counter } from "../Counter";
import { Button } from "../Button";

import IconHeart from "../../assets/icons/Heart.svg?react";
import imgPrato from "../../assets/dishes/Mask_group-1.png";

export function CardFood() {
  return (
    <Container>
      <img src={imgPrato} alt="Prato" />
      <h1>Spaguetti Gambe &gt; </h1>
      <p>Massa fresca com camarões e pesto</p>
      <h2>R$ 29,90</h2>
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
