import { Container } from "./styles";

import Logo from "../../assets/logo.svg?react";

export function Footer() {
  return (
    <Container>
      <div>
        {" "}
        <Logo />
        food explorer
      </div>

      <span>©2023 - Todos os direitos reservados</span>
    </Container>
  );
}
