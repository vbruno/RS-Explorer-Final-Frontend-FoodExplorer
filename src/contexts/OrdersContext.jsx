import { createContext, useState } from "react";
import { v4 as uuidV4 } from "uuid";

export const OrdersContext = createContext();

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);

  function handleAddOrder(dataOrder) {
    console.log(dataOrder);

    setOrders((prevState) => [
      ...prevState,
      {
        id: uuidV4().split("-")[0],
        idDish: dataOrder.id,
        name: dataOrder.name,
        image: dataOrder.image,
        price: +dataOrder.price,
        quantity: dataOrder.quantity,
        total: +dataOrder.total,
      },
    ]);
  }

  function handleRemoveOrder(id) {
    setOrders((prevState) => prevState.filter((order) => order.id !== id));
  }

  return (
    <OrdersContext.Provider
      value={{ handleAddOrder, handleRemoveOrder, orders }}
    >
      {children}
    </OrdersContext.Provider>
  );
}
