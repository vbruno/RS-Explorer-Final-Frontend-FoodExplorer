import { Container } from "./styles";

import IconInputFile from "./assets/inputFile.svg?react";

export function InputFile({ title, ...rest }) {
  return (
    <Container>
      <header>{title}</header>
      <main>
        <label htmlFor="file">
          <IconInputFile />
          Selecione imagem
        </label>
        <input type="file" {...rest} id="file" />
      </main>
    </Container>
  );
}
