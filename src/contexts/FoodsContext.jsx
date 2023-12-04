import { createContext, useState, useEffect } from "react";
import { dishService } from "../services/api/dish/dishService";

export const FoodsContext = createContext();

export function FoodsProvider({ children }) {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    async function getFoods() {
      const response = await dishService.getAllDishes();
      setFoods(response);
    }
    getFoods();
  }, []);

  return (
    <FoodsContext.Provider value={{ foods, setFoods }}>
      {children}
    </FoodsContext.Provider>
  );
}
