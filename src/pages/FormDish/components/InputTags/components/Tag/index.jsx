import { Container } from "./styles";

import IconPlus from "./assets/Plus.svg?react";
import IconClosed from "./assets/Close.svg?react";

export function Tag({ tagName, isNew = false, onClick }) {
  return (
    <Container $isNew={isNew}>
      <span>
        {!isNew ? tagName || "Vazio" : "Adicionar"}
        <button onClick={onClick}>
          {!isNew ? <IconClosed /> : <IconPlus />}
        </button>
      </span>
    </Container>
  );
}
