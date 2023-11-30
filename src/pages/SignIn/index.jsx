import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Form } from "./styles";

import { useAuth } from "../../Hooks/auth";

import imgLogo from "../../assets/logo.svg";

import { InputText } from "../../components/InputText";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignIn() {
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    try {
      await signIn(data);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  }

  function handleSignIn() {
    navigate("/signUp");
  }

  return (
    <Container>
      <div>
        <img src={imgLogo} alt="Logo" />
        <h1>food explorer</h1>
      </div>
      <div>
        <Form onSubmit={handleSubmit}>
          <h1>Faça login</h1>

          <InputText
            title={"Email"}
            placeholder={"Exemplo: exemplo@exemplo.com.br"}
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <InputText
            title={"Senha"}
            placeholder={"No mínimo 6 caracteres"}
            required
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <Button type="submit">Entrar</Button>

          <ButtonText onClick={handleSignIn}>Criar uma conta</ButtonText>
        </Form>
      </div>
    </Container>
  );
}
