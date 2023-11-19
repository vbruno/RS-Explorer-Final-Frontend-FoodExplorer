import { Container } from "./styles";

export function InputTags({ title, ...rest }) {
  return (
    <Container>
      <label>{title}</label>
      <input type="text" {...rest} />
    </Container>
  );
}
