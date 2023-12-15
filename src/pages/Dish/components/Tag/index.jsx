import { Container } from "./styles";

export function Tag({ children }) {
  return (
    <Container>
      <span>{children}</span>
    </Container>
  );
}
