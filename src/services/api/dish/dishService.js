import { api } from "../axios/axiosConfig";

async function newDish(dataDish) {
  console.log(dataDish);

  try {
    const response = await api.post("/foods/register", {
      type: dataDish.category,
      name: dataDish.name,
      ingredients: dataDish.ingredients.toLowerCase(),
      price: dataDish.price[0].replace(",", "."),
      description: dataDish.description,
      image: "_",
    });
    const dishReturn = response.data;

    const fileUploadFormData = new FormData();
    fileUploadFormData.append("imageDish", dataDish.image);

    const resultUpload = await api.patch(
      `/foods/uploadImageDish/${dishReturn.id}`,
      fileUploadFormData
    );

    return resultUpload.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.response.data.message || "Erro ao registrar prato");
  }
}

async function updateDish(dataDish) {
  // console.log(dataDish);

  try {
    const response = await api.put(`/foods/update/${dataDish.id}`, {
      id: dataDish.id,
      type: dataDish.category,
      name: dataDish.name,
      ingredients: dataDish.ingredients.toLowerCase(),
      price: dataDish.price,
      description: dataDish.description,
      image: dataDish.image,
    });

    if (typeof dataDish.image === "string") return response.data;

    const fileUploadFormData = new FormData();
    fileUploadFormData.append("imageDish", dataDish.image);

    const resultUpload = await api.patch(
      `/foods/uploadImageDish/${dataDish.id}`,
      fileUploadFormData
    );

    return resultUpload.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.response.data.message || "Erro ao atualizar prato");
  }
}

async function deleteDish(id) {
  // Precisa testar
  try {
    const response = await api.delete(`/foods/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.response.data.message || "Erro ao deletar prato");
  }
}

async function getAllDishes() {
  try {
    const response = await api.get("/foods/search?search=-999");
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.response.data.message || "Erro ao buscar pratos");
  }
}

async function getDishesByKeyWord(keyWord) {
  if (keyWord.length < 3) return;

  try {
    const response = await api.get(`/foods/search?search=${keyWord}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.response.data.message || "Erro ao buscar pratos");
  }
}

async function getDishById(id) {
  try {
    const response = await api.get(`/foods/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.response.data.message || "Erro ao buscar prato");
  }
}

export const dishService = {
  newDish,
  updateDish,
  deleteDish,
  getAllDishes,
  getDishesByKeyWord,
  getDishById,
};
