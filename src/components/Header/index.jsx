import { useEffect, useState } from "react";
import { useNavigate, useResolvedPath } from "react-router-dom";
import { Container } from "./styles";

import Logo from "../../assets/logo.svg?react";
import IconSignOut from "../../assets/icons/SignOut.svg?react";
import { Search } from "./components/Search";
import { Button } from "../Button";

import IconOrder from "../../assets/icons/Receipt.svg?react";

import { useAuth } from "../../hooks/auth";

export function Header() {
  const navigate = useNavigate();
  const { pathname } = useResolvedPath();
  const { signOut, isAdministrator } = useAuth();

  const [isAdminState, setIsAdminState] = useState(false);

  useEffect(() => {
    isAdministrator() ? setIsAdminState(true) : setIsAdminState(false);
  }, [isAdministrator]);

  function handleNewDish() {
    if (pathname === "/newDish") return;
    isAdminState ? navigate("/newDish") : alert("Você não é administrador");
  }

  function handleOrders() {
    if (pathname === "/ordersAndPay") return;
    !isAdminState
      ? navigate("/ordersAndPay")
      : alert("Você esta logado como administrador");
  }

  function handleSignOut() {
    signOut();
  }

  return (
    <Container $isAdmin={isAdminState}>
      <div>
        <button onClick={() => navigate("/")}>
          {" "}
          <Logo />
          <div>
            <h1>food explorer</h1>
            <p>admin</p>
          </div>
        </button>
        <Search />
        {isAdminState ? (
          <Button onClick={handleNewDish}>Novo prato</Button>
        ) : (
          <Button onClick={handleOrders} icon={IconOrder}>
            Pedidos (0)
          </Button>
        )}
        <button onClick={handleSignOut}>
          <IconSignOut />
        </button>
      </div>
    </Container>
  );
}
