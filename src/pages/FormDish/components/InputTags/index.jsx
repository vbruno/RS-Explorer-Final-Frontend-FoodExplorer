import { Container } from "./styles";

import { Tag } from "./components/Tag";

export function InputTags({
  title,
  tags = [],
  newTag,
  onChange,
  onTagAdd,
  onTagDelete,
}) {
  return (
    <Container>
      <label>{title}</label>
      <section>
        {tags.map((tag, index) => (
          <Tag key={index} tagName={tag} onClick={() => onTagDelete(index)} />
        ))}
        <Tag
          isNew
          placeholder="Adicionar..."
          tagName={newTag}
          onChange={onChange}
          onClick={onTagAdd}
        />
      </section>
    </Container>
  );
}
