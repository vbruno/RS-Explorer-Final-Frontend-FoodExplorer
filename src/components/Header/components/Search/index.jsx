import { Container } from "./styles";

import IconSearch from "./assets/Search.svg?react";

export function Search() {
  return (
    <Container placeholder="Busque por pratos ou ingredientes">
      <IconSearch />
      <input type="text" placeholder="Busque por pratos ou ingredientes" />
    </Container>
  );
}
