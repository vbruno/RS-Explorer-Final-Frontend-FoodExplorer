import { Container } from "./styles";

import IconMinus from "../../assets/icons/Minus.svg?react";
import IconPlus from "../../assets/icons/Plus.svg?react";

export function Counter() {
  return (
    <Container>
      <button>
        <IconMinus />
      </button>
      <span>0</span>
      <button>
        <IconPlus />
      </button>
    </Container>
  );
}
