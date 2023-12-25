import { api } from "../../services/api/axios/axiosConfig";
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import { dishService } from "../../services/api/dish/dishService";
import { useAuth } from "../../hooks/auth";
import { useOrders } from "../../hooks/useOrders";

import { Container, Tags } from "./styles";

import { Tag } from "./components/Tag";
import { Button, Counter } from "../../components";

import CareLeft from "../../assets/icons/CareLeft.svg?react";
import IconOrder from "../../assets/icons/Receipt.svg?react";

export function Dish() {
  const navigate = useNavigate();
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
  const { handleAddOrder } = useOrders();

  const [isAdminState, setIsAdminState] = useState(false);
  const [quantity, setQuantity] = useState(0);

  function handleAddFood() {
    if (quantity === 0) return;
    setQuantity(0);

    const order = {
      id: formData.id,
      name: formData.name,
      price: formData.price,
      quantity: quantity,
      total: (quantity * formData.price).toFixed(2),
    };

    handleAddOrder(order);
  }

  function handleEditDish() {
    navigate(`/dish/edit/${id}`);
  }

  useEffect(() => {
    if (!id) return;

    dishService.getDishById(id).then((res) => {
      setFormData({
        id: res.id,
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
                <Counter
                  quantity={quantity}
                  onIncrement={() =>
                    setQuantity((prevState) =>
                      prevState >= 99 ? 99 : (prevState += 1)
                    )
                  }
                  onDecrement={() =>
                    setQuantity((prevState) =>
                      prevState <= 0 ? 0 : (prevState -= 1)
                    )
                  }
                />
                <Button onClick={handleAddFood} icon={IconOrder}>
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
