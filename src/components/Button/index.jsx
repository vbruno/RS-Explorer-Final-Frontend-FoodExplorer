import { Container } from "./styles";

export function Button({ children, variant = "primary", icon: Icon, ...rest }) {
  return (
    <Container type="button" {...rest} $variant={variant}>
      {Icon && <Icon size={20} />}
      {children}
    </Container>
  );
}
