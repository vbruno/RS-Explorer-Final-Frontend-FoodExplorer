import { Container, Form } from "./styles";

import imgLogo from "../../assets/logo.svg";

import { InputText } from "../../components/InputText";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignIn() {
  return (
    <Container>
      <div>
        <img src={imgLogo} alt="Logo" />
        <h1>food explorer</h1>
      </div>
      <div>
        <Form>
          <h1>Faça login</h1>

          <InputText
            title={"Email"}
            placeholder={"Exemplo: exemplo@exemplo.com.br"}
          />

          <InputText title={"Senha"} placeholder={"No mínimo 6 caracteres"} />

          <Button type="submit">Entrar</Button>

          <ButtonText>Criar uma conta</ButtonText>
        </Form>
      </div>
    </Container>
  );
}
