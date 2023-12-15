import { api } from "../../services/api/axios/axiosConfig";
import { useState, useEffect } from "react";
import {
  useNavigate,
  useResolvedPath,
  useParams,
  Link,
} from "react-router-dom";

import { dishService } from "../../services/api/dish/dishService";
import { useAuth } from "../../hooks/auth";

import { Container, Tags } from "./styles";

import { Tag } from "./components/Tag";
import { Button, Counter } from "../../components";

import CareLeft from "../../assets/icons/CareLeft.svg?react";
import IconOrder from "../../assets/icons/Receipt.svg?react";

import imgPratoSalada from "../../assets/dishes/Mask_group-1.png";

export function Dish() {
  const navigate = useNavigate();
  const { pathname } = useResolvedPath();
  const { id } = useParams();
  const { isAdministrator } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    image: null,
    tags: [],
  });

  const [isAdminState, setIsAdminState] = useState(false);

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
        price: res.price,
        image: res.image,
        tags: res.ingredients.split(","),
      });
    });
  }, [id]);

  function handleLog() {
    // console.log(formData);
    console.log(`${api.defaults.baseURL}/image/${formData.image}`);
  }

  function handleEditDish() {
    navigate(`/dish/edit/${id}`);
  }

  useEffect(() => {
    isAdministrator() ? setIsAdminState(true) : setIsAdminState(false);
  }, [isAdministrator]);

  return (
    <Container>
      <Link to={-1}>
        <header>
          <CareLeft />
          <h1>voltar</h1>
        </header>
      </Link>
      <div>
        <img src={`${api.defaults.baseURL}/image/${formData.image}`} />
        <div>
          <h1>{formData.name}</h1>
          <h2>{formData.description}</h2>
          <Tags>
            {formData.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
          <div>
            {isAdminState ? (
              <Button onClick={handleEditDish}>Editar prato</Button>
            ) : (
              <>
                <Counter />
                <Button onClick={handleLog} icon={IconOrder}>
                  {" "}
                  pedir - R$ ${formData.price.replace(".", ",")}
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
