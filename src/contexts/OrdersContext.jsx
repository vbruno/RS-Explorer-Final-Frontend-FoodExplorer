import { createContext, useState, useEffect } from "react";

export const OrdersContext = createContext();

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState();

  function handleAddOrder(dataOrder) {
    console.log("Adicionando pedido");
    console.log(dataOrder);
  }

  return (
    <OrdersContext.Provider value={{ handleAddOrder, orders }}>
      {children}
    </OrdersContext.Provider>
  );
}
