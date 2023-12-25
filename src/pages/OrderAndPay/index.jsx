import { useEffect } from "react";

import { Container } from "./styles";

import { useOrders } from "../../hooks/useOrders";

export function OrderAndPay() {
  const { orders } = useOrders();

  useEffect(() => {
    console.log("OrderAndPay");
    console.log(orders);
  }, [orders]);

  return (
    <Container>
      <h1>OrderAndPay</h1>
    </Container>
  );
}
