import { Container } from "./styles";

import { Tag } from "./components/Tag";

export function InputTags({ title }) {
  return (
    <Container>
      <label>{title}</label>
      <section>
        <Tag tagName={"alface"} />
        <Tag tagName={"Tomate"} />
        <Tag isNew />
      </section>
    </Container>
  );
}
