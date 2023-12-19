import { createContext, useState, useEffect } from "react";
import { dishService } from "../services/api/dish/dishService";
import { useDebounce } from "../hooks/useDebounce";

export const FoodsContext = createContext();

export function FoodsProvider({ children }) {
  const { debounce } = useDebounce(1000);

  const [search, setSearch] = useState("");
  const [foods, setFoods] = useState([]);

  async function getFoods(keyWorld = "") {
    if (keyWorld) {
      const response = await dishService.getDishesByKeyWord(keyWorld);
      setFoods(response);
      return;
    }
    const response = await dishService.getAllDishes();
    setFoods(response);
  }

  useEffect(() => {
    if (!search) {
      getFoods();
    }

    if (!search || search.length < 3) return;

    debounce(() => {
      getFoods(search);
    });
  }, [debounce, search]);

  useEffect(() => {}, []);

  return (
    <FoodsContext.Provider value={{ foods, setFoods, search, setSearch }}>
      {children}
    </FoodsContext.Provider>
  );
}
