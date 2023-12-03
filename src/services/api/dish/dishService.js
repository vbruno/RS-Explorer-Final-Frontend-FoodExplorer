import { api } from "../axios/axiosConfig";

async function newDish(dish) {
  try {
    const response = await api.post("/foods/register", {
      type: dish.category,
      name: dish.name,
      image: dish.image,
      ingredients: dish.ingredients,
      price: dish.price,
      description: dish.description,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return new Error(error.response.data.message || "Erro ao registrar prato");
  }
}

export const dishService = {
  newDish,
};
