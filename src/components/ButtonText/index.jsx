import { Container } from "./styles";

export function ButtonText({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}
