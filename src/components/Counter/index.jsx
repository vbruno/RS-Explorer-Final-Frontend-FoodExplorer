import { Container } from "./styles";

import IconMinus from "../../assets/icons/Minus.svg?react";
import IconPlus from "../../assets/icons/Plus.svg?react";

export function Counter({ quantity = 0, onIncrement, onDecrement }) {
  return (
    <Container>
      <label>
        <button onClick={onDecrement}>
          <IconMinus />
        </button>
      </label>
      <span>{("00" + quantity).slice(-2)}</span>
      <label>
        <button onClick={onIncrement}>
          <IconPlus />
        </button>
      </label>
    </Container>
  );
}
