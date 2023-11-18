import { Container, Tags } from "./styles";

import { Tag } from "./components/Tag";
import { Button, Counter } from "../../components";

import CareLeft from "../../assets/icons/CareLeft.svg?react";

import imgPratoSalada from "../../assets/dishes/Mask_group-1.png";

export function Dish() {
  return (
    <Container>
      <header>
        <CareLeft />
        <h1>voltar</h1>
      </header>
      <div>
        <img src={imgPratoSalada} alt="" />
        <div>
          <h1>Salada Ravanello</h1>
          <h2>
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O
            pão naan dá um toque especial.
          </h2>
          <Tags>
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
          </Tags>
          <div>
            <Counter />
            <Button> incluir R$ 25,00</Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
