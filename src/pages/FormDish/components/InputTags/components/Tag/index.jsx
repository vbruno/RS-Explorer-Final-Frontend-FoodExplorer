import { Container } from "./styles";

import IconPlus from "./assets/Plus.svg?react";
import IconClosed from "./assets/Close.svg?react";

export function Tag({ tagName, isNew = false, onClick, ...rest }) {
  return (
    <Container $isNew={isNew}>
      <input type="text" readOnly={!isNew} value={tagName} {...rest} />
      <button type="button" onClick={onClick}>
        {!isNew ? <IconClosed /> : <IconPlus />}
      </button>
    </Container>
  );
}
