import { useContext } from "react";

import { OrdersContext } from "../contexts/OrdersContext";

export function useOrders() {
  const context = useContext(OrdersContext);
  return context;
}
