import { useEffect, useState } from "react";
import { useNavigate, useResolvedPath } from "react-router-dom";
import {
  Container,
  ButtonLogo,
  ButtonLogout,
  ButtonMenu,
  ButtonOrder,
  Menu,
} from "./styles";

import Logo from "../../assets/logo.svg?react";
import IconSignOut from "../../assets/icons/SignOut.svg?react";
import { Search } from "./components/Search";

import IconOrder from "./assets/icons/Receipt.svg?react";
import IconMenu from "./assets/icons/Menu.svg?react";
import IconClose from "./assets/icons/Close.svg?react";

import { useAuth } from "../../hooks/auth";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { DEVICE_TYPE } from "../../styles/deviceBreakpoints";

export function Header() {
  const isMobile = useMediaQuery(DEVICE_TYPE.MOBILE);
  const navigate = useNavigate();
  const { pathname } = useResolvedPath();
  const { signOut, isAdministrator } = useAuth();

  const [isAdminState, setIsAdminState] = useState(false);

  const [openMenu, setOpenMenu] = useState(false);

  function handleMenu() {
    setOpenMenu(!openMenu);
  }

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
    <Container>
      {isMobile && (
        <div>
          <ButtonMenu type="button" onClick={handleMenu}>
            <IconMenu />
          </ButtonMenu>
          <ButtonLogo onClick={() => navigate("/")} $isAdmin={isAdminState}>
            {" "}
            <Logo />
            <div>
              <h1>food explorer</h1>
              <p>admin</p>
            </div>
          </ButtonLogo>
          {!isAdminState && (
            <ButtonOrder type="button">
              <IconOrder />
            </ButtonOrder>
          )}
        </div>
      )}
      {!isMobile && (
        <div>
          <ButtonLogo onClick={() => navigate("/")} $isAdmin={isAdminState}>
            <Logo />
            <div>
              <h1>food explorer</h1>
              <p>admin</p>
            </div>
          </ButtonLogo>
          <Search />
          {isAdminState ? (
            <ButtonOrder onClick={handleNewDish}>Novo prato</ButtonOrder>
          ) : (
            <ButtonOrder onClick={handleOrders} icon={IconOrder}>
              Pedidos (0)
            </ButtonOrder>
          )}
          <ButtonLogout onClick={handleSignOut}>
            <IconSignOut />
          </ButtonLogout>
        </div>
      )}
      {openMenu && isMobile && (
        <Menu>
          <header>
            <button type="button" onClick={handleMenu}>
              <IconClose />
              <h1>Menu</h1>
            </button>
          </header>
          <main>
            <Search />
            <button type="button" onClick={handleSignOut}>
              <span>sair</span>
            </button>
          </main>
        </Menu>
      )}
    </Container>
  );
}
