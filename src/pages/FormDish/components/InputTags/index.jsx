import { Container } from "./styles";

import { Tag } from "./components/Tag";

export function InputTags({ title, tags = [], onAddTag }) {
  return (
    <Container>
      <label>{title}</label>
      <section>
        {tags.map((tag) => (
          <Tag key={tag} tagName={tag} />
        ))}
        <Tag isNew placeholder="Adicionar..." onClick={onAddTag} />
      </section>
    </Container>
  );
}
