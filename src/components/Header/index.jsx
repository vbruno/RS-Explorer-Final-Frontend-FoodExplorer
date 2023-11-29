import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

import Logo from "../../assets/logo.svg?react";
import IconSignOut from "../../assets/icons/SignOut.svg?react";
import { Search } from "./components/Search";
import { Button } from "../Button";

import { useAuth } from "../../Hooks/auth";

export function Header() {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <Container>
      <div>
        <button onClick={() => navigate("/")}>
          {" "}
          <Logo />
          <h1>food explorer</h1>
        </button>
        <Search />
        <Button>Pedidos (0)</Button>
        <button onClick={handleSignOut}>
          <IconSignOut />
        </button>
      </div>
    </Container>
  );
}
