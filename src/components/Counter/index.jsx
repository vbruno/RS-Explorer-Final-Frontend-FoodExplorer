import { Container } from "./styles";

import IconMinus from "../../assets/icons/Minus.svg?react";
import IconPlus from "../../assets/icons/Plus.svg?react";

export function Counter({ quantity = 0, onIncrement, onDecrement }) {
  return (
    <Container>
      <button onClick={onDecrement}>
        <IconMinus />
      </button>
      <span>{("00" + quantity).slice(-2)}</span>
      <button onClick={onIncrement}>
        <IconPlus />
      </button>
    </Container>
  );
}
