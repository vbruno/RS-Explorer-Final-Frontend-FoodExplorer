import { Container } from "./styles";

export function InputTextArea({ title, ...rest }) {
  return (
    <Container>
      <label>{title}</label>
      <textarea type="text" {...rest} />
    </Container>
  );
}
