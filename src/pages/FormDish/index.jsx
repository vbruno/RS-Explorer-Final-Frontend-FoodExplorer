// eslint-disable-next-line
import { useState, useEffect } from "react";
import {
  useNavigate,
  Link,
  useResolvedPath,
  useParams,
} from "react-router-dom";

import { dishService } from "../../services/api/dish/dishService";

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
  const navigate = useNavigate();
  const { pathname } = useResolvedPath();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    image: null,
    tags: [],
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
        setFormData({
          ...formData,
          price: data.target.value.match(/(\d+,)(\d{2})/g),
        });
        break;
      case "image":
        setFormData({ ...formData, image: data });
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

  function handleAddDish() {
    const data = {
      name: formData.name.trim(),
      category:
        formData.category === "Refeição"
          ? "snack"
          : formData.category === "Sobremesa"
          ? "dessert"
          : "drink",
      description: formData.description.trim(),
      price: formData.price,
      ingredients: formData.tags.toString(),
      image: formData.image,
    };

    dishService
      .newDish(data)
      .then(() => {
        // console.log(res);
        alert("Prato adicionado com sucesso!");
        navigate(-1);
        // navigate(0);
      })
      .catch((err) => {
        console.log(err);
        alert("Erro ao adicionar prato!");
      });
  }

  function handleEditDish() {
    // console.log(formData);

    const data = {
      id: id,
      name: formData.name.trim(),
      category:
        formData.category === "Refeição"
          ? "snack"
          : formData.category === "Sobremesa"
          ? "dessert"
          : "drink",
      description: formData.description.trim(),
      price: formData.price.toString().replace(",", "."),
      ingredients: formData.tags.toString(),
      image: formData.image,
    };

    // console.log(data);

    dishService
      .updateDish(data)
      .then(() => {
        alert("Prato atualizado com sucesso!");
        navigate(-1);
        // navigate(0);
      })
      .catch((err) => {
        console.log(err);
        alert("Erro ao atualizar prato!");
      });
  }

  function handleDeleteDish() {
    // console.log(id);

    dishService
      .deleteDish(id)
      .then(() => {
        alert("Prato excluído com sucesso!");
        navigate("/");
        // navigate(0);
      })
      .catch((err) => {
        console.log(err);
        alert("Erro ao excluir prato!");
      });
  }

  useEffect(() => {
    if (!id) return;

    dishService.getDishById(id).then((res) => {
      setFormData({
        name: res.name,
        category:
          res.type === "snack"
            ? "Refeição"
            : res.type === "dessert"
            ? "Sobremesa"
            : "Bebida",
        description: res.description,
        price: res.price.replace(".", ","),
        image: res.image,
        tags: res.ingredients.split(","),
      });
    });
  }, [id]);

  return (
    <Container>
      <Link to={-1}>
        <header>
          <CareLeft />
          <h1>voltar</h1>
        </header>
      </Link>

      {!id ? <h1>Adicionar prato</h1> : <h1>Editar prato</h1>}
      <Form>
        <InputFile
          title="Imagem do prato"
          isLoading={formData.image}
          onChange={(e) => handleEditFormData(e.target.files[0], "image")}
        />
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
          onChange={(e) => setNewIngredient(e.target.value.toLowerCase())}
          onTagAdd={() =>
            newIngredient.trim() != "" &&
            handleEditFormData(newIngredient, "tagsAdd")
          }
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
        {pathname === "/newDish" ? (
          <>
            <Button onClick={handleAddDish}>Adicionar Prato</Button>
          </>
        ) : (
          <>
            <Button onClick={handleDeleteDish} variant="secondary">
              Excluir Prato
            </Button>
            <Button onClick={handleEditDish}>Salvar Alterações</Button>
          </>
        )}
      </Form>
    </Container>
  );
}
