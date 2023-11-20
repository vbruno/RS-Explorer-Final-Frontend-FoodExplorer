import { Container, Form } from "./styles";
import { Button } from "../../components";
import { InputText, InputFile, InputSelect } from "./components";

import CareLeft from "../../assets/icons/CareLeft.svg?react";

export function FormDish() {
  return (
    <Container>
      <header>
        <CareLeft />
        <h1>voltar</h1>
      </header>

      <h1>Adicionar prato</h1>
      <Form>
        <InputFile title="Imagem do prato" />
        <InputText title="Nome" placeholder="Ex.: Salada Ceasar" />
        <InputSelect title="Categoria" />
        <InputText title="Ingredientes" placeholder="Ex.: Salada Ceasar" />
        <InputText title="Preço" placeholder="R$ 00,00" />
        <InputText title="Categoria" placeholder="Ex.: Salada Ceasar" />
        <Button>Salvar Alterações</Button>
      </Form>
    </Container>
  );
}
