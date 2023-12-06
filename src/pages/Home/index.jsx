import { useState, useEffect } from "react";
import { Container, Content, ContentHeader } from "./styles";

import { useAuth } from "../../hooks/auth";
import { useFoods } from "../../hooks/useFoods";

import { ItemMenu } from "../../components/ItemMenu";

import imgFood01 from "../../assets/imgFood01.png";

export function Home() {
  const { isAdministrator } = useAuth();
  const { foods } = useFoods();

  // eslint-disable-next-line no-unused-vars
  const [isAdminState, setIsAdminState] = useState(false);
  const [foodsCategorySnack, setFoodsCategorySnack] = useState([]);
  const [foodsCategoryDessert, setFoodsCategoryDessert] = useState([]);
  const [foodsCategoryDrink, setFoodsCategoryDrink] = useState([]);

  useEffect(() => {
    isAdministrator() ? setIsAdminState(false) : setIsAdminState(true);
  }, [isAdministrator]);

  useEffect(() => {
    const foodsCategorySnack = foods.filter((food) => food.type === "snack");
    setFoodsCategorySnack(foodsCategorySnack);

    const foodsCategoryDessert = foods.filter(
      (food) => food.type === "dessert"
    );
    setFoodsCategoryDessert(foodsCategoryDessert);

    const foodsCategoryDrink = foods.filter((food) => food.type === "drink");
    setFoodsCategoryDrink(foodsCategoryDrink);
  }, [foods]);

  return (
    <Container>
      <Content>
        <ContentHeader>
          <div>
            <img src={imgFood01} alt="" />
            <div>
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </div>
        </ContentHeader>

        <ItemMenu title={"Refeições"} dataCardFood={foodsCategorySnack} />
        <ItemMenu title={"Sobremesas"} dataCardFood={foodsCategoryDessert} />
        <ItemMenu title={"Bebidas"} dataCardFood={foodsCategoryDrink} />
      </Content>
    </Container>
  );
}
