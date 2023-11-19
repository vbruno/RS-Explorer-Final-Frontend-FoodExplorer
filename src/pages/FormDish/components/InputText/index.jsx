import { Container } from "./styles";

export function InputText({ title, ...rest }) {
  return (
    <Container>
      <label>{title}</label>
      <input type="text" {...rest} />
    </Container>
  );
}
