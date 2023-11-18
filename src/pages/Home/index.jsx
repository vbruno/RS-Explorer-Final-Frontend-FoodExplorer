import { Container, Content, ContentHeader } from "./styles";

import { ItemMenu } from "../../components/ItemMenu";

import imgFood01 from "../../assets/imgFood01.png";

export function Home() {
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
