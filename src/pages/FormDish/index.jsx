// eslint-disable-next-line
import { useState, useEffect } from "react";

import { Container, Form } from "./styles";
import { Button } from "../../components";
import {
  InputText,
  InputFile,
  InputSelect,
  InputTags,
  InputTextArea,
} from "./components";

import CareLeft from "../../assets/icons/CareLeft.svg?react";

export function FormDish() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    image: "",
    tags: [],
  });

  function handleEditFormData(event, field) {
    switch (field) {
      case "name":
        setFormData({ ...formData, name: event.target.value.trim() });
        break;
      case "category":
        setFormData({ ...formData, category: event });
        break;
      case "description":
        setFormData({ ...formData, description: event.target.value.trim() });
        break;
      case "price":
        setFormData({ ...formData, price: event.target.value });
        break;
      case "image":
        setFormData({ ...formData, image: event.target.value });
        break;
      case "tags":
        setFormData({ ...formData, tags: event.target.value });
        break;
      default:
        break;
    }
  }

  // eslint-disable-next-line
  function handleEditFormTags(tags) {
    setFormData({ ...formData, tags });
  }

  function handleLOG() {
    console.log(formData);
  }

  const [tags, setTags] = useState(["milho", "tomate"]);

  function handleAddTag() {
    setTags([...tags, new Date().getTime().toString()]);
  }

  return (
    <Container>
      <header>
        <CareLeft />
        <h1>voltar</h1>
      </header>

      <h1>Adicionar prato</h1>
      <Form>
        <InputFile title="Imagem do prato" />
        <InputText
          title="Nome"
          placeholder="Ex.: Salada Ceasar"
          value={formData.name}
          onChange={(e) => handleEditFormData(e, "name")}
        />
        <InputSelect
          title="Categoria"
          value={formData.category}
          onValueChange={(e) => handleEditFormData(e, "category")}
        />
        <InputTags title="Ingredientes" tags={tags} onAddTag={handleAddTag} />
        <InputText
          title="Preço"
          placeholder="R$ 00,00"
          value={formData.price}
          onChange={(e) => handleEditFormData(e, "price")}
        />
        <InputTextArea
          title="Descrição"
          placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          value={formData.description}
          onChange={(e) => handleEditFormData(e, "description")}
        />
        <Button>Excluir Prato</Button>
        <Button onClick={handleLOG}>Salvar Alterações</Button>
      </Form>
    </Container>
  );
}
