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
    tags: ["milho", "tomate"],
  });

  const [newIngredient, setNewIngredient] = useState("");

  function handleEditFormData(data, field) {
    switch (field) {
      case "name":
        setFormData({ ...formData, name: data.target.value });
        break;
      case "category":
        setFormData({ ...formData, category: data });
        break;
      case "description":
        setFormData({ ...formData, description: data.target.value });
        break;
      case "price":
        setFormData({ ...formData, price: data.target.value });
        break;
      case "image":
        setFormData({ ...formData, image: data.target.value });
        break;
      case "tagsAdd":
        setFormData({ ...formData, tags: [...formData.tags, data] });
        setNewIngredient("");
        break;
      case "tagsRemove":
        setFormData({
          ...formData,
          tags: formData.tags.filter((_, i) => i !== data),
        });
        break;
      default:
        break;
    }
  }

  function handleLOG() {
    console.log(formData);
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
        <InputTags
          title="Ingredientes"
          tags={formData.tags}
          newTag={newIngredient}
          onChange={(e) => setNewIngredient(e.target.value)}
          onTagAdd={() => handleEditFormData(newIngredient, "tagsAdd")}
          onTagDelete={(index) => handleEditFormData(index, "tagsRemove")}
        />
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
