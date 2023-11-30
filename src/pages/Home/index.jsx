import { useState, useEffect } from "react";
import { Container, Content, ContentHeader } from "./styles";

import { useAuth } from "../../Hooks/auth";

import { ItemMenu } from "../../components/ItemMenu";

import imgFood01 from "../../assets/imgFood01.png";

export function Home() {
  const { isAdministrator } = useAuth();

  // eslint-disable-next-line no-unused-vars
  const [isAdminState, setIsAdminState] = useState(false);

  useEffect(() => {
    isAdministrator() ? setIsAdminState(false) : setIsAdminState(true);
  }, [isAdministrator]);

  return (
    <Container>
      <Content>
        <ContentHeader>
          <div>
            <img src={imgFood01} alt="" />
            <div>
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </div>
        </ContentHeader>

        <ItemMenu />
        <ItemMenu />
        <ItemMenu />
      </Content>
    </Container>
  );
}
