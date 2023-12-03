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

export const dishService = {
  newDish,
};
