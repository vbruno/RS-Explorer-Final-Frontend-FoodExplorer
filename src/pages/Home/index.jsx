import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { CardFood } from "../../components/CardFood";

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <CardFood />
      </Content>
      <Footer />
    </Container>
  );
}
