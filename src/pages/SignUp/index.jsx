import { Container, Form } from "./styles";

import imgLogo from "../../assets/logo.svg";

import { InputText } from "../../components/InputText";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignUp() {
  return (
    <Container>
      <div>
        <img src={imgLogo} alt="Logo" />
        <h1>food explorer</h1>
      </div>
      <div>
        <Form>
          <h1>Crie sua conta</h1>

          <InputText
            title={"Seu nome"}
            placeholder={"Exemplo: Maria da Silva"}
          />

          <InputText
            title={"Email"}
            placeholder={"Exemplo: exemplo@exemplo.com.br"}
          />

          <InputText title={"Senha"} placeholder={"No mínimo 6 caracteres"} />

          <Button type="submit">Criar conta</Button>

          <ButtonText>Já tenho uma conta</ButtonText>
        </Form>
      </div>
    </Container>
  );
}
