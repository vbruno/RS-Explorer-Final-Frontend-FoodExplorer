import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Form } from "./styles";

import { loginService } from "../../services/api/login/loginService";

import imgLogo from "../../assets/logo.svg";

import { InputText } from "../../components/InputText";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (password.length < 6) {
      alert("A senha deve ter no mínimo 6 caracteres");
      return;
    }

    const data = {
      name: name.trim(),
      email: email.trim(),
      password: password.trim(),
    };

    const result = await loginService.register(data);

    console.log(result);

    if (result instanceof Error) {
      alert(result);
      return;
    }

    alert("Cadastro realizado com sucesso!");
    navigate(-1);
  }

  function handleBack() {
    navigate("/");
  }

  return (
    <Container>
      <div>
        <img src={imgLogo} alt="Logo" />
        <h1>food explorer</h1>
      </div>
      <div>
        <Form onSubmit={handleSubmit}>
          <h1>Crie sua conta</h1>

          <InputText
            title={"Seu nome"}
            placeholder={"Exemplo: Maria da Silva"}
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <InputText
            title={"Email"}
            placeholder={"Exemplo: exemplo@exemplo.com.br"}
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

          <Button type="submit">Criar conta</Button>

          <ButtonText onClick={handleBack}>Já tenho uma conta</ButtonText>
        </Form>
      </div>
    </Container>
  );
}
