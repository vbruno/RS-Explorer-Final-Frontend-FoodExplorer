import { Container } from "./styles";

import Logo from "../../assets/logo.svg?react";
import IconSignOut from "../../assets/icons/SignOut.svg?react";
import { Search } from "./components/Search";
import { Button } from "../Button";

export function Header() {
  return (
    <Container>
      <h1>
        {" "}
        <Logo />
        food explorer
      </h1>
      <Search />
      <Button>Pedidos (0)</Button>
      <button>
        <IconSignOut />
      </button>
    </Container>
  );
}
