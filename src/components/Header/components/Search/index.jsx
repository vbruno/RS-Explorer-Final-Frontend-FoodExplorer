import { Container } from "./styles";

import { useFoods } from "../../../../hooks/useFoods";

import IconSearch from "./assets/Search.svg?react";

export function Search() {
  const { search, setSearch } = useFoods();

  return (
    <Container placeholder="Busque por pratos ou ingredientes">
      <IconSearch />
      <input
        type="text"
        placeholder="Busque por pratos ou ingredientes"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Container>
  );
}
