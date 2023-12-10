import { Container } from "./styles";

import Logo from "../../assets/logo.svg?react";

export function Footer() {
  return (
    <Container>
      <h1>
        <Logo />
        food explorer
      </h1>

      <span>©2023 - Todos os direitos reservados</span>
    </Container>
  );
}
